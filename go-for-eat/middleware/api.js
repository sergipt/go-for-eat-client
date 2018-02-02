import { normalize } from 'normalizr';
import baseUrl from '../config/serverHost.js';


const callApi = (endpoint, method='GET', body, accessToken, schema) => {
  const fullUrl = baseUrl + endpoint;
  const headers = {};
  if (accessToken) headers.authorization = `Bearer ${accessToken}`;
  if (method === 'POST' || method === 'PUT') headers['Content-Type'] = 'application/json';

  return fetch(fullUrl, {
    method,
    headers,
    body
  })
    .then(response => response.json())
    .then(data => schema ? normalize(data, schema) : data);

};

export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') return next(action);

  const { endpoint, types, method, onSuccess, schema} = callAPI;

  let data;
  if (callAPI.data) data = JSON.stringify(callAPI.data);

  if (typeof endpoint !== 'string') throw new Error('Specify a string endpoint URL.');

  if (!types.every(type=> typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  };

  // this is incase the action had more than one key
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [ requestType, successType, failureType ] = types;
  next(actionWith({type: requestType}));

  let accessToken;
  console.log(store.getState().authentication);
  if (store.getState().authentication.user.accessToken) {
    accessToken = store.getState().authentication.user.accessToken;
  } else if (callAPI.data && callAPI.data.token) {
    accessToken = callAPI.data.token;
  }

  return callApi(endpoint, method, data, accessToken)
    .then(response => {
      store.dispatch(actionWith({
        type:successType,
        response
      }));
      if (typeof onSuccess === 'function') onSuccess(response);
    })
    .catch(error => store.dispatch(actionWith({
      type: failureType,
      error: error.message
    })));
};
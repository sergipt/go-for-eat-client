import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2ECC71',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map:{
    flex: 1,
    width: 375,
    backgroundColor: '#D8D5CF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map_text:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto_Bold',
  },
  list:{
    borderTopColor: '#2ECC71',
    borderTopWidth: 3,
    flex: 10,
    width: 375,
    backgroundColor: 'white',
    shadowColor: '#444',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  list_dragBar:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  list_dragBar_line:{
    backgroundColor: '#2ECC71',
    borderRadius: 4,
    width: 50,
    height: 5,
    margin: 10,
    opacity: 0.9,
  },
  event:{
    width: 375,
    height: 120,
    backgroundColor: 'white',
    borderBottomColor: '#2ECC71',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  event_detail_eventName:{
    fontFamily: 'Roboto',
    fontSize: 21,
    marginTop: 8,
    marginBottom: 8,
  },
  event_detail_address:{
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#2ECC71',
    marginBottom: 8,
  },
  event_detail_time:{
    backgroundColor: '#2ECC71',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    padding: 5,
  },
  event_detail_time_text:{
    fontSize: 16,
    color: 'white',
  },
  event_distance:{
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  event_distance_number:{
    fontFamily: 'Roboto',
    fontSize: 32,
    marginBottom: 0,
  },
  event_distance_text:{
    fontFamily: 'Roboto',
    fontSize: 20,
    marginBottom: 8,
  },
  event_spots:{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 375,
    bottom: 10,
    paddingLeft: 140,
    paddingRight: 140,
  },
  event_spots_free:{
    borderRadius: 20,
    width: 12,
    height: 12,
    backgroundColor: '#2ECC71',
    opacity: 0.5,
  },
  event_spots_full:{
    borderRadius: 20,
    width: 12,
    height: 12,
    backgroundColor: '#2ECC71',
  },
});
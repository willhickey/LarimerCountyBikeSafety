/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [40.5,-105.1],
	south : 40.25 ,
	west : -106.2,
	north : 41,
	east : -104.94,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1Ijoid2lsbGhpY2tleSIsImEiOiJjajBjdTNtbjMwNTAzMndvMzIwazFsd202In0.ELrVFM3hwMp5m8KBGZwcxA',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'willhickey',
	cartoDBinsertfunction : 'insert_bike_data',
	walkthroughWelcome: "<p>Please add points to this map where you feel unsafe riding a bike, or where infrastructure improvements would make bicycling safer. The map is restricted to Larimer County as we are collecting this data at their request.</p>"
};

var map = L.map('map').setView([30, -90], 4);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
  layers: '1', 
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
});

var temperature = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
});


var precipitation = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WmsServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
});

var baseMaps = {
  "Basemap": map
};

var overlayMaps = {
  "Lightning": lightning,
  "Temperature": temperature,
  "Precipitation": precipitation,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);



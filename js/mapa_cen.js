var mapopts =  {
//      zoomSnap: 0.1
};

var map = L.map('map_02', mapopts).setView([-23.64, -70.387],13);
var roadMutant = L.gridLayer.googleMutant({
    maxZoom: 20,
    type:'roadmap'
});

var satMutant = L.gridLayer.googleMutant({
    maxZoom: 20,
    type:'satellite'
}).addTo(map);

var terrainMutant = L.gridLayer.googleMutant({
    maxZoom: 20,
    type:'terrain'
});

var hybridMutant = L.gridLayer.googleMutant({
    maxZoom: 20,
    type:'hybrid'
});

L.control.layers({
    Aerea: satMutant,
    Calles: hybridMutant,
    Mapa: roadMutant,
    Terreno: terrainMutant
}, {}, {
    collapsed: true
}).addTo(map);

//leaflet-control-geocoder
L.Control.geocoder(
    {
    position: "bottomleft",
    expand: "click",
    geocoder: new L.Control.Geocoder.Google("AIzaSyDArc8XSbrBtmMyMq6hC5iuXc7JBzy6RDE"),
}).addTo(map);

////////////////////////////////////////
map.attributionControl.addAttribution('<a href="http://www.municipalidadantofagasta.cl/" target="_blank">I.M.A. - </a> <a href="https://gdarqblog.wordpress.com/" target="_blank">FCR</a>');

var hash = new L.Hash(map);
        
var bounds_group = new L.featureGroup([]);

function pop_UV_Hab920217_4(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">Numero U.V.</th>\
                <td>' + (feature.properties['NUMERO'] !== null ? Autolinker.link(String(feature.properties['NUMERO'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Nombre U.V.</th>\
                <td>' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Población 2017</th>\
                <td>' + (feature.properties['T2017'] !== null ? Autolinker.link(String(feature.properties['T2017'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Hombres</th>\
                <td>' + (feature.properties['H2017'] !== null ? Autolinker.link(String(feature.properties['H2017'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Mujeres</th>\
                <td>' + (feature.properties['M2017'] !== null ? Autolinker.link(String(feature.properties['M2017'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Superficie MT2</th>\
                <td>' + (feature.properties['SUP_MT2'] !== null ? Autolinker.link(String(feature.properties['SUP_MT2'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minWidth:250, maxHeight: 400});
}

function style_UV_Hab920217_4_0(feature) {
    if (feature.properties['T2017'] >= 26.000000 && feature.properties['T2017'] <= 1824.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,196,255,0.55)',
    }
    }
    if (feature.properties['T2017'] >= 1824.000000 && feature.properties['T2017'] <= 3483.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(116,218,252,0.55)',
    }
    }
    if (feature.properties['T2017'] >= 3483.000000 && feature.properties['T2017'] <= 5492.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(233,240,248,0.55)',
    }
    }
    if (feature.properties['T2017'] >= 5492.000000 && feature.properties['T2017'] <= 8471.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(242,199,208,0.55)',
    }
    }
    if (feature.properties['T2017'] >= 8471.000000 && feature.properties['T2017'] <= 16639.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(249,101,107,0.55)',
    }
    }
    if (feature.properties['T2017'] >= 16639.000000 && feature.properties['T2017'] <= 33395.000000 ) {
        return {
        pane: 'pane_UV_Hab920217_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.55)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,3,7,0.55)',
    }
    }
}
map.createPane('pane_UV_Hab920217_4');
map.getPane('pane_UV_Hab920217_4').style.zIndex = 404;
map.getPane('pane_UV_Hab920217_4').style['mix-blend-mode'] = 'normal';

var layer_UV_Hab920217_4 = null;

$(".pob_uv").click(function(){
    if(map.hasLayer(layer_UV_Hab920217_4)){
        map.removeLayer(layer_UV_Hab920217_4);
    }
    else{
        $.getJSON("gjs/pobuv.geojson", function(data){
            layer_UV_Hab920217_4 = L.geoJson(data, {
                pane: 'pane_UV_Hab920217_4',
                onEachFeature: pop_UV_Hab920217_4,
                style: style_UV_Hab920217_4_0,
                }).addTo(map);
            });
        }
    });

function pop_ZonaCensal_Join_Pob_2(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">Superficie Zona Censal mt2</th>\
                <td>' + (feature.properties['Shape_Area'] !== null ? Autolinker.link(String(feature.properties['Shape_Area'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Población</th>\
                <td>' + (feature.properties['PERSONAS'] !== null ? Autolinker.link(String(feature.properties['PERSONAS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Hombres</th>\
                <td>' + (feature.properties['HOMBRES'] !== null ? Autolinker.link(String(feature.properties['HOMBRES'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Mujeres</th>\
                <td>' + (feature.properties['MUJERES'] !== null ? Autolinker.link(String(feature.properties['MUJERES'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minWidth:250, maxHeight: 400});
}

function style_ZonaCensal_Join_Pob_2_0(feature) {
    if (feature.properties['PERSONAS'] >= 1578.000000 && feature.properties['PERSONAS'] <= 2753.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_Pob_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,254,255,0.55)',
    }
    }
    if (feature.properties['PERSONAS'] >= 2753.000000 && feature.properties['PERSONAS'] <= 3814.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_Pob_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(191,219,191,0.55)',
    }
    }
    if (feature.properties['PERSONAS'] >= 3814.000000 && feature.properties['PERSONAS'] <= 5139.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_Pob_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(128,183,127,0.55)',
    }
    }
    if (feature.properties['PERSONAS'] >= 5139.000000 && feature.properties['PERSONAS'] <= 6487.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_Pob_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(64,147,63,0.55)',
    }
    }
    if (feature.properties['PERSONAS'] >= 6487.000000 && feature.properties['PERSONAS'] <= 8414.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_Pob_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,111,0,0.55)',
    }
    }
}
map.createPane('pane_ZonaCensal_Join_Pob_2');
map.getPane('pane_ZonaCensal_Join_Pob_2').style.zIndex = 401;
map.getPane('pane_ZonaCensal_Join_Pob_2').style['mix-blend-mode'] = 'normal';


var layer_ZonaCensal_Join_Pob_2 = null;

$(".zc_pob").click(function(){
    if(map.hasLayer(layer_ZonaCensal_Join_Pob_2)){
        map.removeLayer(layer_ZonaCensal_Join_Pob_2);
    }
    else{
        $.getJSON("gjs/zc.geojson", function(data){
            layer_ZonaCensal_Join_Pob_2 = L.geoJson(data, {
                pane: 'pane_ZonaCensal_Join_Pob_2',
                onEachFeature: pop_ZonaCensal_Join_Pob_2,
                style: style_ZonaCensal_Join_Pob_2_0,
                }).addTo(map);
            });
        }
    });

function pop_ZonaCensal_Join_VIV_1(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">Superficie Zona Censal mt2</th>\
                <td>' + (feature.properties['Shape_Area'] !== null ? Autolinker.link(String(feature.properties['Shape_Area'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Viviendas Particulares</th>\
                <td>' + (feature.properties['VIV_PART'] !== null ? Autolinker.link(String(feature.properties['VIV_PART'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Viviendas Colectivas</th>\
                <td>' + (feature.properties['VIV_COL'] !== null ? Autolinker.link(String(feature.properties['VIV_COL'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Total Viviendas</th>\
                <td>' + (feature.properties['TOTAL_VIV'] !== null ? Autolinker.link(String(feature.properties['TOTAL_VIV'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minWidth:250, maxHeight: 402});
}

function style_ZonaCensal_Join_VIV_1_0(feature) {
    if (feature.properties['TOTAL_VIV'] >= 462.000000 && feature.properties['TOTAL_VIV'] <= 820.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_VIV_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(251,249,249,0.55)',
    }
    }
    if (feature.properties['TOTAL_VIV'] >= 820.000000 && feature.properties['TOTAL_VIV'] <= 1100.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_VIV_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(200,217,205,0.55)',
    }
    }
    if (feature.properties['TOTAL_VIV'] >= 1100.000000 && feature.properties['TOTAL_VIV'] <= 1390.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_VIV_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(148,185,161,0.55)',
    }
    }
    if (feature.properties['TOTAL_VIV'] >= 1390.000000 && feature.properties['TOTAL_VIV'] <= 1783.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_VIV_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(96,153,117,0.55)',
    }
    }
    if (feature.properties['TOTAL_VIV'] >= 1783.000000 && feature.properties['TOTAL_VIV'] <= 2234.000000 ) {
        return {
        pane: 'pane_ZonaCensal_Join_VIV_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.8)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(45,121,73,0.55)',
    }
    }
}
map.createPane('pane_ZonaCensal_Join_VIV_1');
map.getPane('pane_ZonaCensal_Join_VIV_1').style.zIndex = 402;
map.getPane('pane_ZonaCensal_Join_VIV_1').style['mix-blend-mode'] = 'normal';


var layer_ZonaCensal_Join_VIV_1 = null;

$(".zc_viv").click(function(){
    if(map.hasLayer(layer_ZonaCensal_Join_VIV_1)){
        map.removeLayer(layer_ZonaCensal_Join_VIV_1);
    }
    else{
        $.getJSON("gjs/zc.geojson", function(data){
            layer_ZonaCensal_Join_VIV_1 = L.geoJson(data, {
                pane: 'pane_ZonaCensal_Join_VIV_1',
                onEachFeature: pop_ZonaCensal_Join_VIV_1,
                style: style_ZonaCensal_Join_VIV_1_0,
                }).addTo(map);
            });
        }
    });




function pop_Densidad_POB_MZN_0(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">Habitantes</th>\
                <td>' + (feature.properties['PERSONAS'] !== null ? Autolinker.link(String(feature.properties['PERSONAS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Densidad</th>\
                <td>' + (feature.properties['DENS_POB'] !== null ? Autolinker.link(String(feature.properties['DENS_POB'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minWidth:250, maxHeight: 400});
}

function style_Densidad_POB_MZN_0_0(feature) {
    if (feature.properties['DENS_POB'] >= 0.000000 && feature.properties['DENS_POB'] <= 0.011729 ) {
        return {
        pane: 'pane_Densidad_POB_MZN_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(43,131,186,0.55)',
    }
    }
    if (feature.properties['DENS_POB'] >= 0.011729 && feature.properties['DENS_POB'] <= 0.017735 ) {
        return {
        pane: 'pane_Densidad_POB_MZN_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(171,221,164,0.55)',
    }
    }
    if (feature.properties['DENS_POB'] >= 0.017735 && feature.properties['DENS_POB'] <= 0.023175 ) {
        return {
        pane: 'pane_Densidad_POB_MZN_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,191,0.55)',
    }
    }
    if (feature.properties['DENS_POB'] >= 0.023175 && feature.properties['DENS_POB'] <= 0.032318 ) {
        return {
        pane: 'pane_Densidad_POB_MZN_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,174,97,0.55)',
    }
    }
    if (feature.properties['DENS_POB'] >= 0.032318 && feature.properties['DENS_POB'] <= 0.212498 ) {
        return {
        pane: 'pane_Densidad_POB_MZN_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(215,25,28,0.55)',
    }
    }
}
map.createPane('pane_Densidad_POB_MZN_2');
map.getPane('pane_Densidad_POB_MZN_2').style.zIndex = 403;
map.getPane('pane_Densidad_POB_MZN_2').style['mix-blend-mode'] = 'normal';


var layer_Densidad_POB_MZN_0 = null;

$(".dens_pob").click(function(){
    if(map.hasLayer(layer_Densidad_POB_MZN_0)){
        map.removeLayer(layer_Densidad_POB_MZN_0);
    }
    else{
        $.getJSON("gjs/habvi.geojson", function(data){
            layer_Densidad_POB_MZN_0 = L.geoJson(data, {
                pane: 'pane_Densidad_POB_MZN_2',
                onEachFeature: pop_Densidad_POB_MZN_0,
                style: style_Densidad_POB_MZN_0_0,
                }).addTo(map);
            });
        }
    });

//////////////////////////////////////////////////////////////////////////////////////

function pop_HABxVIV_3(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">Habitantes</th>\
                <td>' + (feature.properties['PERSONAS'] !== null ? Autolinker.link(String(feature.properties['PERSONAS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Numero de Viviendas</th>\
                <td>' + (feature.properties['TOTAL_VIV'] !== null ? Autolinker.link(String(feature.properties['TOTAL_VIV'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Habitantes por Vivienda</th>\
                <td colspan="2">' + (feature.properties['HABxVIV'] !== null ? Autolinker.link(String(feature.properties['HABxVIV'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minwidth:250, maxHeight: 400});
}



function style_HABxVIV_3_0(feature) {
    if (feature.properties['HABxVIV'] >= 0.000000 && feature.properties['HABxVIV'] <= 2.944444 ) {
        return {
        pane: 'pane_HABxVIV_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(44,123,182,0.55)',
    }
    }
    if (feature.properties['HABxVIV'] >= 2.944444 && feature.properties['HABxVIV'] <= 3.454545 ) {
        return {
        pane: 'pane_HABxVIV_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(199,230,219,0.55)',
    }
    }
    if (feature.properties['HABxVIV'] >= 3.454545 && feature.properties['HABxVIV'] <= 4.000000 ) {
        return {
        pane: 'pane_HABxVIV_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(254,201,128,0.55)',
    }
    }
    if (feature.properties['HABxVIV'] >= 4.000000 && feature.properties['HABxVIV'] <= 21.416667 ) {
        return {
        pane: 'pane_HABxVIV_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(215,25,28,0.55)',
    }
    }
}
map.createPane('pane_HABxVIV_3');
map.getPane('pane_HABxVIV_3').style.zIndex = 403;
map.getPane('pane_HABxVIV_3').style['mix-blend-mode'] = 'normal';

var layer_HABxVIV_3 = null;

$(".hab_viv").click(function(){
    if(map.hasLayer(layer_HABxVIV_3)){
        map.removeLayer(layer_HABxVIV_3);
    }
    else{
        $.getJSON("gjs/habvi.geojson", function(data){
            layer_HABxVIV_3 = L.geoJson(data, {
                pane: 'pane_HABxVIV_3',
                onEachFeature: pop_HABxVIV_3,
                style: style_HABxVIV_3_0,
                }).addTo(map);
            });
        }
    });

////////////////////////////////

function pop_MaterialidadAceptable_1(feature, layer) {
    var popupContent = '<table style="width:250px">\
            <tr>\
                <th scope="row">% Materialidad Aceptable</th>\
                <td>' + (feature.properties['PTJ_MAT_AC'] !== null ? Autolinker.link(String(feature.properties['PTJ_MAT_AC'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {minWidth:250, maxHeight: 400});
}

function style_MaterialidadAceptable_1_0(feature) {
    if (feature.properties['PTJ_MAT_AC'] >= 0.000000 && feature.properties['PTJ_MAT_AC'] <= 0.200000 ) {
        return {
        pane: 'pane_MaterialidadAceptable_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(215,25,28,0.55)',
    }
    }
    if (feature.properties['PTJ_MAT_AC'] >= 0.200000 && feature.properties['PTJ_MAT_AC'] <= 0.400000 ) {
        return {
        pane: 'pane_MaterialidadAceptable_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,174,97,0.55)',
    }
    }
    if (feature.properties['PTJ_MAT_AC'] >= 0.400000 && feature.properties['PTJ_MAT_AC'] <= 0.600000 ) {
        return {
        pane: 'pane_MaterialidadAceptable_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,191,0.55)',
    }
    }
    if (feature.properties['PTJ_MAT_AC'] >= 0.600000 && feature.properties['PTJ_MAT_AC'] <= 0.800000 ) {
        return {
        pane: 'pane_MaterialidadAceptable_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(171,217,233,0.55)',

    }
    }
    if (feature.properties['PTJ_MAT_AC'] >= 0.800000 && feature.properties['PTJ_MAT_AC'] <= 1.000000 ) {
        return {
        pane: 'pane_MaterialidadAceptable_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.75)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(44,123,182,0.55)',

    }
    }
}
map.createPane('pane_MaterialidadAceptable_1');
map.getPane('pane_MaterialidadAceptable_1').style.zIndex = 406;
map.getPane('pane_MaterialidadAceptable_1').style['mix-blend-mode'] = 'normal';


var layer_MaterialidadAceptable_1 = null;

$(".mat_acep").click(function(){
    if(map.hasLayer(layer_MaterialidadAceptable_1)){
        map.removeLayer(layer_MaterialidadAceptable_1);
    }
    else{
        $.getJSON("gjs/mat.geojson", function(data){
            layer_MaterialidadAceptable_1 = L.geoJson(data, {
            pane: 'pane_MaterialidadAceptable_1',
            onEachFeature: pop_MaterialidadAceptable_1,
            style: style_MaterialidadAceptable_1_0,
                }).addTo(map);
            });
        }
    });

function pop_Inmigrantes_0(feature, layer) {
var popupContent = '<table style="width:250px">\
        <tr>\
            <th scope="row">Numero de Habitantes</th>\
            <td>' + (feature.properties['PERSONAS'] !== null ? Autolinker.link(String(feature.properties['PERSONAS'])) : '') + '</td>\
        </tr>\
        <tr>\
            <th scope="row">% de Inmigrantes</th>\
            <td>' + (feature.properties['PTJ_INMIG'] !== null ? Autolinker.link(String(feature.properties['PTJ_INMIG'])) : '') + '</td>\
        </tr>\
    </table>';
layer.bindPopup(popupContent, {minWidth:350, maxHeight:800});
}

function style_Inmigrantes_0_0(feature) {
if (feature.properties['PTJ_INMIG'] >= 0.000000 && feature.properties['PTJ_INMIG'] <= 0.243421 ) {
    return {
    pane: 'pane_Inmigrantes_0',
    opacity: 1,
    color: 'rgba(0,0,0,0.75)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(43,131,186,0.55)',
}
}
if (feature.properties['PTJ_INMIG'] >= 0.243421 && feature.properties['PTJ_INMIG'] <= 0.486842 ) {
    return {
    pane: 'pane_Inmigrantes_0',
    opacity: 1,
    color: 'rgba(0,0,0,0.75)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(199,233,173,0.55)',
}
}
if (feature.properties['PTJ_INMIG'] >= 0.486842 && feature.properties['PTJ_INMIG'] <= 0.730263 ) {
    return {
    pane: 'pane_Inmigrantes_0',
    opacity: 1,
    color: 'rgba(0,0,0,0.75)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(254,201,128,0.55)',
}
}
if (feature.properties['PTJ_INMIG'] >= 0.730263 && feature.properties['PTJ_INMIG'] <= 0.973684 ) {
    return {
    pane: 'pane_Inmigrantes_0',
    opacity: 1,
    color: 'rgba(0,0,0,0.75)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(215,25,28,0.55)',
}
}
}
map.createPane('pane_Inmigrantes_0');
map.getPane('pane_Inmigrantes_0').style.zIndex = 408;
map.getPane('pane_Inmigrantes_0').style['mix-blend-mode'] = 'normal';

var layer_Inmigrantes_0 = null;

$(".gs_inm").click(function(){
    if(map.hasLayer(layer_Inmigrantes_0)){
        map.removeLayer(layer_Inmigrantes_0);
    }
    else{
        $.getJSON("gjs/inm.geojson", function(data){
            layer_Inmigrantes_0 = L.geoJson(data, {
                pane: 'pane_Inmigrantes_0',
                onEachFeature: pop_Inmigrantes_0,
                style: style_Inmigrantes_0_0,
                }).addTo(map);
            });
        }
    });


function pop_PueblosOrig_0(feature, layer) {
            var popupContent = '<table style="width:250px">\
                    <tr>\
                        <td colspan="2">' + (feature.properties['MZNMZN'] !== null ? Autolinker.link(String(feature.properties['MZNMZN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PERSONAS</th>\
                        <td>' + (feature.properties['PERSONAS'] !== null ? Autolinker.link(String(feature.properties['PERSONAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['P_ORGNR'] !== null ? Autolinker.link(String(feature.properties['P_ORGNR'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PTJ_PueOri</th>\
                        <td>' + (feature.properties['PTJ_PueOri'] !== null ? Autolinker.link(String(feature.properties['PTJ_PueOri'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {minWidth: 250, maxHeight: 400});
        }

function style_PueblosOrig_0_0(feature) {
    if (feature.properties['PTJ_PueOri'] >= 0.000000 && feature.properties['PTJ_PueOri'] <= 0.071749 ) {
        return {
        pane: 'pane_PueblosOrig_0',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,252,253,0.55)',
    }
    }
    if (feature.properties['PTJ_PueOri'] >= 0.071749 && feature.properties['PTJ_PueOri'] <= 0.169118 ) {
        return {
        pane: 'pane_PueblosOrig_0',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(128,179,126,0.55)',
    }
    }
    if (feature.properties['PTJ_PueOri'] >= 0.169118 && feature.properties['PTJ_PueOri'] <= 0.846154 ) {
        return {
        pane: 'pane_PueblosOrig_0',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,106,0,0.55)',
    }
    }
}
map.createPane('pane_PueblosOrig_0');
map.getPane('pane_PueblosOrig_0').style.zIndex = 409;
map.getPane('pane_PueblosOrig_0').style['mix-blend-mode'] = 'normal';

var layer_PueblosOrig_0 = null;

$(".gs_puor").click(function(){
    if(map.hasLayer(layer_PueblosOrig_0)){
        map.removeLayer(layer_PueblosOrig_0);
    }
    else{
        $.getJSON("gjs/puorig.geojson", function(data){
            layer_PueblosOrig_0 = L.geoJson(data, {
                pane: 'pane_PueblosOrig_0',
                onEachFeature: pop_PueblosOrig_0,
                style: style_PueblosOrig_0_0,
                }).addTo(map);
            });
        }
    });




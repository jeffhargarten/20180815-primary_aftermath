/**
 * Main JS file for project.
 */
// Define globals that are added through the js.globals in
// the config.json file, here like this:
// /* global _ */
// Utility functions, such as Pym integration, number formatting,
// and device checking
import utilsFn from './utils.js';
import * as c3 from 'c3';
import Map from './map.js';

const map = new Map("#mapper");

utilsFn({});

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

var scope = $.urlParam('scope');
var zoom = $.urlParam('zoom');
var race = String($.urlParam('race'));
var party = String($.urlParam('party')).toUpperCase();
var raceFull = "Congressional District " + race;

$("#dflGOVmn_map").load('./img/dfl-gov-mn.html');
$("#dflGOVmetro_map").load('./img/dfl-gov-metro.html');

$("#gopGOVmn_map").load('./img/gop-gov-mn.html');
$("#gopGOVmetro_map").load('./img/gop-gov-metro.html');

$("#dflAGmn_map").load('./img/dfl-ag-mn.html');
$("#dflAGmetro_map").load('./img/dfl-ag-metro.html');

$("#dflCD5metro_map").load('./img/dfl-cd5-metro.html');

$("#dflCD8mn_map").load('./img/dfl-cd8-mn.html');
$("#dflCD8metro_map").load('./img/dfl-cd8-metro.html');

if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
}
if (selected == null) {
    $(".slide").show();

if (race == "gov") {
    raceFull = "Gubernatorial";
} else if (race == "sen") {
    raceFull = "Senate Two Special";
} else if (race == "ag") {
    raceFull = "Attorney General";
}

map.render(scope, zoom, party, "all", race);

$("#districtSelect").html('<div id="focus" class="' + String(party).toLowerCase() + '">&nbsp;' + party + ' ' + raceFull + ' Primary</div>');

}



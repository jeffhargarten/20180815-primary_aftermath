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

var scope = $.urlParam('scope');
var zoom = $.urlParam('zoom');
var race = String($.urlParam('race'));
var party = String($.urlParam('party')).toUpperCase();
var raceFull = "Congressional District " + race;

if (race == "gov") {
    raceFull = "Gubernatorial";
} else if (race == "sen") {
    raceFull = "Senate Two Special";
} else if (race == "ag") {
    raceFull = "Attorney General";
}

$("#fallback").load('./img/' + race + '_' + String(party).toLowerCase() + '.svg');

map.render(scope, zoom, party, "all", race);

$("#districtSelect").html('<div id="focus" class="' + String(party).toLowerCase() + '">&nbsp;' + party + ' ' + raceFull + ' Primary</div>');
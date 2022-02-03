/* generated by Svelte v3.42.3 */
import {
	SvelteComponent,
	init,
	safe_not_equal
} from "https://cdn.skypack.dev/svelte@3.44.1/internal";

function create(targets) {
	const initialView = [49.4887, 8.4658];
	let map = L.map("map").setView(initialView, 4);

	L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
		maxZoom: 18
	}).addTo(map);

	targets.forEach(element => {
		var marker = L.marker([element.x, element.y]).addTo(map);
		marker.bindPopup(element.name + " - " + element.votes + " Stimmen");
	});

	var popup = L.popup();

	function onMapClick(e) {
		var coords = e.latlng.toString().split(",");
		var x = coords[0].replace("LatLng(", "");
		var y = coords[1].replace(")", "");
		popup.setLatLng(e.latlng).setContent("<input type=\"text\" id=\"dst-name\" placeholder=\"Name\" style=\"margin-bottom:0px\"></input><a class=\"add-target\" onclick=\"addDestination(" + x + "," + y + ")\">Hinzufügen</a>").openOn(map);
	}

	map.on("click", onMapClick);
}

function update() {
	
}

function instance($$self, $$props, $$invalidate) {
	return [create];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { create: 0 });
	}

	get create() {
		return create;
	}
}

export default Component;
/* generated by Svelte v3.42.3 */
import {
	SvelteComponent,
	append_hydration,
	append_styles,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert_hydration,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_input_value,
	set_style,
	space,
	text
} from "https://cdn.skypack.dev/svelte@3.44.1/internal";

function add_css(target) {
	append_styles(target, "svelte-1atm9s0", ".timeline.svelte-1atm9s0.svelte-1atm9s0{margin:50px 0px;min-height:420px;padding:10px;background-color:#e5e5e5;width:100%}.date-vote.svelte-1atm9s0.svelte-1atm9s0{width:100%;margin-bottom:150px}.date-vote.svelte-1atm9s0 p.svelte-1atm9s0,input.svelte-1atm9s0.svelte-1atm9s0{display:inline-block;margin:0px;margin-right:15px}.submit.svelte-1atm9s0.svelte-1atm9s0{margin:0px;margin-top:3px;float:right;font-weight:700}.submit.svelte-1atm9s0.svelte-1atm9s0:hover{cursor:pointer}");
}

// (79:4) {#if rows.length == 0}
function create_if_block(ctx) {
	let center;
	let h2;
	let t;

	return {
		c() {
			center = element("center");
			h2 = element("h2");
			t = text("Keine Einträge vorhanden :(");
			this.h();
		},
		l(nodes) {
			center = claim_element(nodes, "CENTER", {});
			var center_nodes = children(center);
			h2 = claim_element(center_nodes, "H2", { style: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, "Keine Einträge vorhanden :(");
			h2_nodes.forEach(detach);
			center_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_style(h2, "margin-top", "190px");
		},
		m(target, anchor) {
			insert_hydration(target, center, anchor);
			append_hydration(center, h2);
			append_hydration(h2, t);
		},
		d(detaching) {
			if (detaching) detach(center);
		}
	};
}

function create_fragment(ctx) {
	let div0;
	let t0;
	let h3;
	let t1;
	let t2;
	let div1;
	let p0;
	let t3;
	let t4;
	let input0;
	let t5;
	let p1;
	let t6;
	let t7;
	let input1;
	let t8;
	let p2;
	let t9;
	let t10;
	let input2;
	let t11;
	let p3;
	let t12;
	let mounted;
	let dispose;
	let if_block = /*rows*/ ctx[3].length == 0 && create_if_block(ctx);

	return {
		c() {
			div0 = element("div");
			if (if_block) if_block.c();
			t0 = space();
			h3 = element("h3");
			t1 = text("Trage ein, wann du kannst");
			t2 = space();
			div1 = element("div");
			p0 = element("p");
			t3 = text("Name");
			t4 = space();
			input0 = element("input");
			t5 = space();
			p1 = element("p");
			t6 = text("Startdatum:");
			t7 = space();
			input1 = element("input");
			t8 = space();
			p2 = element("p");
			t9 = text("Enddatum:");
			t10 = space();
			input2 = element("input");
			t11 = space();
			p3 = element("p");
			t12 = text("Eintragen");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true, id: true });
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Trage ein, wann du kannst");
			h3_nodes.forEach(detach);
			t2 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Name");
			p0_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true });
			t5 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Startdatum:");
			p1_nodes.forEach(detach);
			t7 = claim_space(div1_nodes);
			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true });
			t8 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Enddatum:");
			p2_nodes.forEach(detach);
			t10 = claim_space(div1_nodes);
			input2 = claim_element(div1_nodes, "INPUT", { type: true, class: true });
			t11 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t12 = claim_text(p3_nodes, "Eintragen");
			p3_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "timeline svelte-1atm9s0");
			attr(div0, "id", "timeline");
			attr(h3, "class", "small-title");
			attr(p0, "class", "svelte-1atm9s0");
			attr(input0, "type", "text");
			attr(input0, "class", "svelte-1atm9s0");
			attr(p1, "class", "svelte-1atm9s0");
			attr(input1, "type", "date");
			attr(input1, "class", "svelte-1atm9s0");
			attr(p2, "class", "svelte-1atm9s0");
			attr(input2, "type", "date");
			attr(input2, "class", "svelte-1atm9s0");
			attr(p3, "class", "submit svelte-1atm9s0");
			attr(div1, "class", "date-vote svelte-1atm9s0");
		},
		m(target, anchor) {
			insert_hydration(target, div0, anchor);
			if (if_block) if_block.m(div0, null);
			insert_hydration(target, t0, anchor);
			insert_hydration(target, h3, anchor);
			append_hydration(h3, t1);
			insert_hydration(target, t2, anchor);
			insert_hydration(target, div1, anchor);
			append_hydration(div1, p0);
			append_hydration(p0, t3);
			append_hydration(div1, t4);
			append_hydration(div1, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_hydration(div1, t5);
			append_hydration(div1, p1);
			append_hydration(p1, t6);
			append_hydration(div1, t7);
			append_hydration(div1, input1);
			set_input_value(input1, /*start*/ ctx[1]);
			append_hydration(div1, t8);
			append_hydration(div1, p2);
			append_hydration(p2, t9);
			append_hydration(div1, t10);
			append_hydration(div1, input2);
			set_input_value(input2, /*end*/ ctx[2]);
			append_hydration(div1, t11);
			append_hydration(div1, p3);
			append_hydration(p3, t12);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[6]),
					listen(input1, "input", /*input1_input_handler*/ ctx[7]),
					listen(input2, "input", /*input2_input_handler*/ ctx[8]),
					listen(p3, "click", /*addDate*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}

			if (dirty & /*start*/ 2) {
				set_input_value(input1, /*start*/ ctx[1]);
			}

			if (dirty & /*end*/ 4) {
				set_input_value(input2, /*end*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (if_block) if_block.d();
			if (detaching) detach(t0);
			if (detaching) detach(h3);
			if (detaching) detach(t2);
			if (detaching) detach(div1);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let rows = [];
	let webSocket, groupId;
	let name, start, end;

	function create(dates, webSock, id) {
		webSocket = webSock;
		groupId = id;
		let rows = [];

		dates.forEach(element => {
			rows.push([element.name, new Date(element.start), new Date(element.end)]);
		});

		google.charts.load('current', { 'packages': ['timeline'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			let container = document.getElementById('timeline');
			let chart = new google.visualization.Timeline(container);
			let dataTable = new google.visualization.DataTable();
			dataTable.addColumn({ type: 'string', id: 'Name' });
			dataTable.addColumn({ type: 'date', id: 'Anfang' });
			dataTable.addColumn({ type: 'date', id: 'Ende' });
			dataTable.addRows(rows);
			let options = { timeline: { singleColor: '#ffa947' } };
			chart.draw(dataTable, options);
		}
	}

	function addDate() {
		//alert(name+ " " + start+ " " + end);
		webSocket.send("update-dates " + groupId + " " + name + " " + start + " " + end);

		location.reload();
	}

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	function input1_input_handler() {
		start = this.value;
		$$invalidate(1, start);
	}

	function input2_input_handler() {
		end = this.value;
		$$invalidate(2, end);
	}

	return [
		name,
		start,
		end,
		rows,
		addDate,
		create,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { create: 5 }, add_css);
	}

	get create() {
		return this.$$.ctx[5];
	}
}

export default Component;
let angalware_data_store = {},
	element_checked = false,
	element_name = '',
	obj_check_list = [],
	ready_check_list = {};
// console.log("printed")
 function rstate(fn) {
	let myNode = document.querySelectorAll('*[angalware]');

	//set default value
	myNode.forEach(element => {

		let custom_attribute = element.getAttribute("angalware");
		obj_check_list.push(custom_attribute);
		obj_check_list.forEach(x => ready_check_list[x] = (ready_check_list[x] || 0) + 1);
		// console.log(ready_check_list)
		if (ready_check_list[custom_attribute] == 1)
			watching(angalware_data_store, element.getAttribute("angalware"), element.value, (obj, set_val) => {
				data_bind(obj, set_val);
			});

		if (element.type != "radio" && element.type != "checkbox")
			angalware_data_store[element.getAttribute("angalware")] = element.value;
		else
		if (element.checked) {
			element_checked = true;
			element_name = element.getAttribute("angalware");
			angalware_data_store[element.getAttribute("angalware")] = element.value;
		} else
		if (!element_checked && element_name != element.getAttribute("angalware"))
			if (ready_check_list[custom_attribute] == 1)
				angalware_data_store[element.getAttribute("angalware")] = "";
			else
				element_name = "",
				element_checked = false;
	}); //end loop

	fn(true, angalware_data_store);

	document.addEventListener('input', (e) => {
		fn(false, angalware_data_store)
		angalware_data_store[e.target.getAttribute('angalware')] = e.target.value;


	})
}
//data bind to input by watchin while set the value
function data_bind(angalware, value) {
	
	validation();

	let options = [];
	let myNode = document.querySelectorAll('*[angalware]');
	myNode.forEach(element => {
		if (element.getAttribute("angalware") == angalware) {
			if (element.getAttribute("type") != "radio" && element.getAttribute("type") != "checkbox" && element.tagName != "SELECT")
				element.value = value;
			if (element.getAttribute("type") == "radio" && element.getAttribute("value") == value)
				element.checked = true;
			if (element.getAttribute("type") == "checkbox" && element.getAttribute("value") == value)
				element.checked = true;
			if (element.tagName == "SELECT")
				options = element.childNodes,
				options.forEach(el => {
					if (el.value == value)
						el.selected = true;

				});
		}

	})
	
}

//watch data changes
function watching(obj_parent, inside_obj, arg, watcher_set) {

	Object.defineProperty(obj_parent, inside_obj, {
		get: function () {


			return arg;
		},

		set: function (val) {
			arg = val;
			watcher_set(inside_obj, val)


		}
	})


}

function validation(){

	let myNode = document.querySelectorAll('*[validate]');

	//set default value
	myNode.forEach(element => {
// console.log(element)

	})

}

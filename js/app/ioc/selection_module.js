var SelectionModule = Module.extend({

	prototype: {

		actions: {
			click: [
				"toggleSelection"
			]
		},

		callbacks: {
			afterReady: [
				"_getTemplate"
			]
		},

		options: {
			selectedClass: "selected",
			templateSelector: ".template"
		},

		_template: null,

		addItem: function addItem(item) {
			this.element.appendChild(item);
		},

		createItem: function createItem(overrides) {
			var data = new Hash({ guid: this.guid }).merge(overrides || {});
			var el = document.createElement(this.element.nodeName);
			var item;
			var html = this._template.innerHTML
				.replace(/^\s+|\s+$/g, "")
				.replace(/#\{([^}]+)\}/g, function(match, key) {
					return data.hasOwnProperty(key) ? data[key] : "";
				});

			el.innerHTML = html;
			item = el.childNodes[0];
			el.removeChild(item);

			data = overrides = el = null;

			return item;
		},

		getSelectedCount: function getSelectedCount() {
			this.getSelectedItems().length;
		},

		getSelectedItems: function getSelectedItems() {
			var items = [], i = 0, length = this.element.childNodes.length;

			for (i; i < length; i++) {
				if (this.element.childNodes[i].className === this.options.selectedClass) {
					items.push(this.element.childNodes[i]);
				}
			}

			return items;
		},

		_getTemplate: function _getTemplate() {
			this._template = this.element.querySelector(this.options.templateSelector);
		},

		toggleSelection: function toggleSelection(event, element, params) {
			if (element.className === this.options.selectedClass) {
				element.className = "";
				this.notify("item.deselected", { item: element });
			}
			else {
				element.className = this.options.selectedClass;
				this.notify("item.selected", { item: element });
			}

			this.notify("selection.size.changed", {
				selectedItems: this.getSelectedItems()
			});
		}

	}

});

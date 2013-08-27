var ListModule = Module.extend({

	prototype: {

		actions: {
			submit: [
				"add"
			]
		},

		_counter: null,

		_form: null,

		selection: null,

		_ready: function _ready() {
			Module.prototype._ready.call(this);

			this._counter = this.element.getElementsByTagName("p")[0];
			this._form = this.element.getElementsByTagName("form")[0];

			this.selection.init(this.element.getElementsByTagName("ol")[0], {
				actionPrefix: this.options.actionPrefix + ".selection"
			});
			this.selection.listen("selection.size.changed", this, "onSelectionSizeChanged");
		},

		onSelectionSizeChanged: function onSelectionSizeChanged(event, publisher, data) {
			this._counter.innerHTML = this._counter.innerHTML.replace(/\d+/, data.selectedItems.length);
		},

		add: function add(event, element, params) {
			event.stop();
			var text = this._form.elements.text.value;

			if (/^\s*$/.test(text)) {
				alert("Please enter some text");
				this._form.elements.text.select();
				return;
			}

			var item = this.selection.createItem({text: text});
			this.selection.addItem(item);
			this._form.elements.text.value = "";
			this._form.elements.text.focus();
		}

	}

});

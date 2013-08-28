var ExampleLazyModule = Module.extend({
	prototype: {
		_ready: function() {
			Module.prototype._ready.call(this);
			this.element.className += " loaded";
			this.element.innerHTML = "Loaded on " + new Date();
		}
	}
});

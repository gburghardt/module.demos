function Application() {

}

Application.prototype = {

	constructor: Application,

	moduleManager: null,

	init: function init() {
		this.moduleManager.init(document.getElementsByTagName("html")[0]);
	}

};

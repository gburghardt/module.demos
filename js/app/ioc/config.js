var dependencies = {

	application: {
		className: "Application",
		singleton: true,
		properties: {
			moduleManager: { id: "moduleManager" }
		}
	},

	groceryList: {
		className: "ListModule",
		properties: {
			selection: { id: "grocerySelection" }
		}
	},

	grocerySelection: {
		parent: "selection",
		className: "SelectionModule",
		properties: {
			options: {
				value: {
					selectedClass: "selected-grocery"
				}
			}
		}
	},

	moduleFactory: {
		className: "Module.Factory",
		singleton: true,
		properties: {
			objectFactory: { id: "objectFactory"}
		}
	},

	moduleManager: {
		className: "Module.Manager",
		singleton: true,
		properties: {
			factory: { id: "moduleFactory"}
		}
	},

	options: {
		className: "Hash"
	},

	selection: {
		abstract: true,
		properties: {
			options: { id: "options" }
		}
	},

	taskList: {
		className: "ListModule",
		properties: {
			selection: { id: "taskSelection" }
		}
	},

	taskSelection: {
		parent: "selection",
		className: "SelectionModule",
		properties: {
			options: {
				value: {
					selectedClass: "selected-task"
				}
			}
		}
	}

};

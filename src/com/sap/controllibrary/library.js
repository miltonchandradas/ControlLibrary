/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.sap.controllibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name com.sap.controllibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.sap.controllibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"com.sap.controllibrary.controls.Example",
				"com.sap.controllibrary.controls.Fibonacci"
			],
			elements: []
		});

		/* eslint-disable */
		return com.sap.controllibrary;
		/* eslint-enable */

	}, /* bExport= */ false);
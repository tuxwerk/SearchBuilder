/*! Bootstrap 4 ui integration for DataTables' SearchBuilder
 * ©2016 SpryMedia Ltd - datatables.net/license
 */
// Hack to allow TypeScript to compile our UMD
declare var define: {
	(string, Function): any;
	amd: string;
};
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'datatables.net-bs4', 'datatables.net-searchbuilder'], function($) {
			return factory($, window, document);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		module.exports = function(root, $) {
			if (! root) {
				root = window;
			}

			if (! $ || ! $.fn.dataTable) {
				$ = require('datatables.net-bs4')(root, $).$;
			}

			if (! $.fn.dataTable.searchBuilder) {
				require('datatables.net-searchbuilder')(root, $);
			}

			return factory($, root, root.document);
		};
	}
	else {
		// Browser
		factory(jQuery, window, document);
	}
}(function($, window, document) {
'use strict';
let DataTable = $.fn.dataTable;

$.extend(true, DataTable.SearchBuilder.classes, {
	clearAll: 'btn btn-light dtsb-clearAll'
});

$.extend(true, DataTable.Group.classes, {
	add: 'btn btn-light dtsb-add',
	logic: 'btn btn-light dtsb-logic',
	clearGroup: 'btn btn-light dtsb-clearGroup'
});

$.extend(true, DataTable.Criteria.classes, {
	condition: 'form-control dtsb-condition',
	delete: 'btn btn-default dtsb-delete',
	field: 'form-control dtsb-field',
	left: 'btn btn-default dtsb-left',
	right: 'btn btn-default dtsb-right',
	value: 'form-control dtsb-value',
});

return DataTable.searchPanes;
}));

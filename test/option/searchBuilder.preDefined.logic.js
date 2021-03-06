describe('searchBuilder - options - searchBuilder.preDefined.logic', function() {
	let table;

	dt.libs({
		js: ['jquery', 'datatables', 'searchbuilder'],
		css: ['datatables', 'searchbuilder']
	});

	describe('Functional tests', function() {
		dt.html('basic');
		it('Default uses AND', function() {
			table = $('#example').DataTable({
				dom: 'Qlfrtip',
				searchBuilder: {
					preDefined: {
						criteria: [
							{
								condition: '!=',
								data: 'Office',
								value: ['London']
							},

							{
								condition: '>',
								data: 'Age',
								value: ['55']
							}
						],
						logic: 'AND'
					}
				}
			});

			expect($('.dtsb-logic').text()).toBe('And');
			expect($('.dtsb-criteria').length).toBe(2);
			expect($('#example tbody tr td:eq(0)').text()).toBe('Ashton Cox');
		});

		dt.html('basic');
		it('Can specifiy OR', function() {
			table = $('#example').DataTable({
				dom: 'Qlfrtip',
				searchBuilder: {
					preDefined: {
						criteria: [
							{
								condition: '!=',
								data: 'Office',
								value: ['London']
							},

							{
								condition: '>',
								data: 'Age',
								value: ['55']
							}
						],
						logic: 'OR'
					}
				}
			});

			expect($('.dtsb-logic').text()).toBe('Or');
			expect($('.dtsb-criteria').length).toBe(2);
			expect($('#example tbody tr td:eq(0)').text()).toBe('Airi Satou');
		});
	});
});

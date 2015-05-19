import Ember from 'ember';

export default Ember.View.extend({
	operatorNumber: '',
	fullName: '',
	dni: '',
	lineNumber: 'CIEN',
	sex: 'Masculino',

	operatorNumberChanged: function () {
		localStorage.setItem("operatorNumber", this.get('operatorNumber'));
	}.observes('operatorNumber'),

	didInsertElement: function () {
		this._super();
		var _this = this;

		if (localStorage.getItem("operatorNumber")) {
			_this.set('operatorNumber', localStorage.getItem("operatorNumber"));
		}

		this.$('#avales').load(function () {
			var content = _this.$('#avales').contents();
			$('button[type=submit]', content).click(function (event) {
				
			});
			var frame = $('frame[name="botonera"]', content)[0];
			if (frame) {
			 	$('frame[name="botonera"]', content).load(function(){
					$('a[onclick="do_grabar();"]', this.contentDocument).click(function () {
						if (_this.get('operatorNumber') && _this.get('fullName') && _this.get('dni') && _this.get('lineNumber') && _this.get('sex')) {
							_this.get('controller.store').createRecord('aval', {
								operatorNumber: _this.get('operatorNumber').trim(),
								lineNumber: _this.get('lineNumber').trim(),
								fullName: _this.get('fullName'),
								dni: _this.get('dni'),
								sex: _this.get('sex')
							}).save();
						}
					});
			    });				
			}

			var frameCentral = $('frame[name="central"]', content)[0];
			if (frame) {
			 	$('frame[name="central"]', content).load(function(){
					$('input[name="apyn"]', this.contentDocument).change(function () {
						_this.set('fullName', this.value);
					});
					$('input[name="nro_doc"]', this.contentDocument).change(function () {
						_this.set('dni', this.value);
					});		

					if($('select[name="linea_id"]', this.contentDocument)) {
						_this.set('lineNumber', $( 'select[name="linea_id"] option:selected', this.contentDocument).text());	
					}
					if($('select[name="sexo"]', this.contentDocument))
						_this.set('sex', $( 'select[name="sexo"] option:selected', this.contentDocument).text());

					$('select[name="linea_id"]', this.contentDocument).change(function () {
						_this.set('lineNumber', $( 'select[name="linea_id"] option:selected', this.contentDocument).text());
					});										
					$('select[name="sexo"]', this.contentDocument).change(function () {
						_this.set('sex', $( 'select[name="sexo"] option:selected', this.contentDocument).text());
					});						
			    });				
			}			
		});
	}
});

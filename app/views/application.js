import Ember from 'ember';

export default Ember.View.extend({


	didInsertElement: function () {
		this._super();
		var _this = this;
		this.$('#avales').load(function () {
			var content = _this.$('#avales').contents();
			console.log(content);
			$('button[type=submit]', content).click(function (event) {
				console.log('CLICK LOGIN')
			});
			$('a[onclick="do_grabar();"]', content).addClass("pepe");
		});
	}
});

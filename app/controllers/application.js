import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
		this.sailsSocket.request('get', '/socket/subscribePoliticalData').then(function(response) { console.log(response); }, function(reason) {
			console.log(reason);
		});
	},
})
App.CardsController = Ember.ArrayController.extend({
	actions: {
		createPerson: function() {
			var cards = this.store.createRecord('person', {
				photo: this.get('photo'),
				name: this.get('name'),
				lname: this.get('lname'),
				phone: this.get('phone'),
				email: this.get('email')
			});

			this.set('photo', '');
			this.set('name', '');
			this.set('lname', '');
			this.set('phone', '');
			this.set('email', '');

			cards.save();
		}
	}
});

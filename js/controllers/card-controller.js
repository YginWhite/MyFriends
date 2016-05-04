App.CardController = Ember.ObjectController.extend({

	isEdit: false,
	notHide: true,

	actions: {
		deleteCard: function() {
			var card = this.get('model');
			card.destroyRecord();
		},

		hideCardInfo: function() {
			if (this.get('notHide') === true) {
				this.set('notHide', false);
			} else {
				this.set('notHide', true);
			}
			
		},

		editCard: function() {
			this.set('isEdit', true);
		},

		updateCard: function() {
			var card = this.get('model');

			card.set('name', card.get('name'));
			card.set('lname', card.get('lname'));
			card.set('phone', card.get('phone'));
			card.set('email', card.get('email'));
			
			this.set('isEdit', false);

			card.save();
		}
	}
});
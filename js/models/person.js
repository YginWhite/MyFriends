App.Person = DS.Model.extend({
	photo: DS.attr('string'),
	name: DS.attr('string'),
	lname: DS.attr('string'),
	phone: DS.attr('string'),
	email: DS.attr('string')
});

App.Person.FIXTURES = [
	{
		id: "1",
		photo: 'imgs/cocr123.png',
		name: 'Jonh',
		lname: 'Dou',
		phone: '093-88-32-786',
		email: 'johnDou@a.pro'
	},

	{
		id: "2",
		photo: 'imgs/cocr11.png',
		name: 'Piter',
		lname: 'Silver',
		phone: '093-22-11-446',
		email: 'piter@do.com'
	},

	{
		id: "3",
		photo: 'imgs/cocr109.png',
		name: 'Milan',
		lname: 'Vohnich',
		phone: '455-23-01-456',
		email: 'opa@jop.co'
	},

	{
		id: "4",
		photo: 'imgs/cocr117.png',
		name: 'Bruce',
		lname: 'Allmight',
		phone: '000-11-22-333',
		email: 'where@you.bin'
	},

	{
		id: "5",
		photo: 'imgs/cocr118.png',
		name: 'Tim',
		lname: 'Sosige',
		phone: '049-10-99-207',
		email: 'my@life.good'
	}
];
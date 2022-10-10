export default {
	name: 'animal',
	type: 'document',
	title: 'Animal',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name'
		},
		{
			name: 'is_animal',
			type: 'boolean',
			title: 'Is this an animal?'
		},
		{
			name: 'is_tank',
			type: 'boolean',
			title: 'Is it a tank?'
		},
	]
}
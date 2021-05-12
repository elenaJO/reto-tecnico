type DataOptios = {
	id: number | string;
	name: string;
}

export const DocumentOptions: DataOptios[] = [
	{
		id: 'dni',
		name: 'DNI'
	},
	{
		id: 'ce',
		name: 'CE'
	},
];

export const YearOptions: DataOptios[] = [
	{
		id: '2010',
		name: '2010'
	},
	{
		id: '2011',
		name: '2011'
	},
	{
		id: '2012',
		name: '2012'
	},
	{
		id: '2013',
		name: '2013'
	},
];

export const ModelOptions: DataOptios[] = [
	{
		id: 'Acura',
		name: 'Acura'
	},
	{
		id: 'Alfa',
		name: 'Alfa'
	},
	{
		id: 'Audi',
		name: 'Audi'
	},
	{
		id: 'Titan',
		name: 'Titan'
	},
];

export const amounts = {
	partialTheft: 15,
	trafficAccident: 20,
	totalLoss: 50,
}
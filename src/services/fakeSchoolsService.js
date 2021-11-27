const schools = [
	{
		_id: '5b21ca3eeb7f6fbccd471815',
		title: "Mang'u",
		dailyRentalRate: 2.5,
		publishDate: '2018-01-03T19:04:28.809Z',
		liked: true,
		starred: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd471816',
		title: 'Evergreen',
		dailyRentalRate: 2.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd471817',
		title: 'Tataglia',
		dailyRentalRate: 3.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd471819',
		title: 'Riverside',
		dailyRentalRate: 3.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181a',
		title: 'Riverdale',
		dailyRentalRate: 3.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181b',
		title: 'Beverly Hills',
		dailyRentalRate: 3.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181e',
		title: 'Los Angeles',
		dailyRentalRate: 4.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181f',
		title: 'Las Vegas',
		dailyRentalRate: 3.5
	},
	{
		_id: '5b21ca3eeb7f6fbccd471821',
		title: 'Virginia',
		dailyRentalRate: 3.5
	}
];

export function getSchools() {
	return schools;
}

export function getSchool(id) {
	return schools.find((s) => s._id === id);
}

export function saveSchool(school) {
	let schoolInDb = schools.find((s) => s._id === school._id) || {};
	schoolInDb.title = school.title;
	schoolInDb.dailyRentalRate = school.dailyRentalRate;

	if (!schoolInDb._id) {
		schoolInDb._id = Date.now().toString();
		schools.push(schoolInDb);
	}

	return schoolInDb;
}

export function deleteSchool(id) {
	let schoolInDb = schools.find((s) => s._id === id);
	schools.splice(schools.indexOf(schoolInDb), 1);
	return schoolInDb;
}

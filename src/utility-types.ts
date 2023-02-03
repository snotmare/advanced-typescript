interface User {
	firstName: string;
	lastName: string;
	middleName: string;
	birthdate: Date;
}

//Example Omit
type OmitUser = Omit<User, 'middleName' | 'birthdate'>;

export function exampleOmit() {
	writeOmitUser({
		firstName: 'Remus',
		lastName: 'Lupin'
	});

	let user: User = {
		firstName: 'Ronald',
		lastName: 'Bilius',
		middleName: 'Weasley',
		birthdate: new Date()
	};

	writeOmitUser(user);
}

function writeOmitUser(user: OmitUser) {
	console.log(`${user.firstName} ${user.lastName}`);
	console.log(user);
}



//Example pick
type PickUser = Pick<User, 'firstName' | 'lastName'>;

export function examplePick() {
	writePickUser({
		firstName: 'Remus',
		lastName: 'Lupin'
	});

	let user: User = {
		firstName: 'Ronald',
		lastName: 'Bilius',
		middleName: 'Weasley',
		birthdate: new Date()
	};

	writePickUser(user);
}

function writePickUser(user: PickUser) {
	console.log(`${user.firstName} ${user.lastName}`);
	console.log(user);
}
interface User {
	firstName: string;
	lastName: string;
	middleName: string;
}

let user: Omit<User, 'middleName'> = {
	firstName: 'Ben',
	lastName: 'Ferguson'
};
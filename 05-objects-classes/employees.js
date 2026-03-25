function employeesList(array) {
    let employees = {};

    for (let name of array) {
        employees[name] = name.length;
    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
employeesList([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);
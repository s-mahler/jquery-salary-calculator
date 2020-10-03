employeeArray = [];

$(document).ready(onReady);

function onReady () {
    $('#submitForm').on('click', addEmployee);
}

function addEmployee () {
    let employeeObject = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    };
    employeeArray.push(employeeObject);
    console.log(employeeArray);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    $('#employeeOut').empty().append(`
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID Number</th>
            <th>Job Title</th>
            <th>Annual Salary</th>
        </tr>
    `);
    for (let i = 0; i < employeeArray.length; i++) {
        $('#employeeOut').append(`
        <tr>    
            <td> ${employeeArray[i].firstName}</td>
            <td> ${employeeArray[i].lastName}</td>
            <td> ${employeeArray[i].id}</td>
            <td> ${employeeArray[i].jobTitle}</td>
            <td> ${employeeArray[i].annualSalary}</td>
            <td> <button>Delete</button> </td>
        </tr> 
        `);
    }
}

employees = []
employee = function(empCode,empName,salary){
    this.empCode = empCode;
    this.empName = empName;
    this.salary = salary;
}

function addEmployee(){
 
    empcode = document.getElementById("empcode").value;
    empname = document.getElementById("empname").value;
    salary = document.getElementById("salary").value;

    employees.push(new employee(empcode,empname,salary));
    console.log(employees)
    document.getElementById("empcode").value = " ";
    document.getElementById("empname").value= " ";
    document.getElementById("salary").value=0;

}

function displayEmployees(){
    data = "<tr> <th> Emp Code </th> <th> Emp Name </th> <th> Salary </th></tr>";
    for(emp of employees){
        data+=`<tr> <td> ${emp.empCode} </td> <td> ${emp.empName} </td> <td> ${emp.salary} </td></tr>`;
    }
    document.getElementById("empdata").innerHTML=data;
}
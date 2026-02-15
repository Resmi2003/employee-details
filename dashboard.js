// Welcome Username
const username = localStorage.getItem('uname');
head1.innerHTML = `Welcome ${username}`;


// Add Employee
function addEmployee() {

    let employee = {
        id: empid.value,
        name: empname.value,
        addr: empaddr.value,
        desg: empdesg.value,
        exp: empexp.value,
        sal: empsal.value
    }

    if (employee.id in localStorage) {
        alert("Employee already exists");
    }
    else {

        localStorage.setItem(employee.id, JSON.stringify(employee));

        alert("Employee details created");

        empid.value = "";
        empname.value = "";
        empaddr.value = "";
        empdesg.value = "";
        empexp.value = "";
        empsal.value = "";
    }
}


// Search Employee
function search() {

    let key = emp.value;

    let employee = JSON.parse(localStorage.getItem(key));

    if (!employee) {
        result.innerHTML = `<p class="text-red-600 mt-4">Employee not found</p>`;
        return;
    }

    result.innerHTML = `   

    <div class="bg-gray-100 p-4 rounded shadow max-w-md">
        <h5 class="mb-3 text-xl font-semibold text-blue-700">
            Employee Details
        </h5>

        <ul class="space-y-2 text-gray-700">
            <li><b>ID:</b> ${employee.id}</li>
            <li><b>Name:</b> ${employee.name}</li>
            <li><b>Address:</b> ${employee.addr}</li>
            <li><b>Designation:</b> ${employee.desg}</li>
            <li><b>Experience:</b> ${employee.exp}</li>
            <li><b>Salary:</b> ${employee.sal}</li>
        </ul>
    </div>

    `;
}


// Logout
function logout() {

    localStorage.clear();

    window.location = './login.html';
}
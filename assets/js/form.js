const form = document.getElementById("employeeForm");
const editData = localStorage.getItem("editEmp");

if (editData) {
  const emp = JSON.parse(editData);
  document.getElementById("empId").value = emp.id;
  document.getElementById("firstName").value = emp.firstName;
  document.getElementById("lastName").value = emp.lastName;
  document.getElementById("email").value = emp.email;
  document.getElementById("department").value = emp.department;
  document.getElementById("role").value = emp.role;
  localStorage.removeItem("editEmp");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newEmp = {
    id: document.getElementById("empId").value ? parseInt(document.getElementById("empId").value) : Date.now(),
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    department: document.getElementById("department").value,
    role: document.getElementById("role").value,
  };

  const index = employees.findIndex(e => e.id === newEmp.id);
  if (index >= 0) {
    employees[index] = newEmp;
  } else {
    employees.push(newEmp);
  }

  alert("Employee saved!");
  window.location.href = 'index.html';
});
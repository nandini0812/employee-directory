function renderList(data = employees) {
  const container = document.getElementById("employeeList");
  container.innerHTML = data.map(emp => `
    <div class="card">
      <strong>${emp.firstName} ${emp.lastName}</strong><br/>
      ${emp.email}<br/>
      ${emp.department} | ${emp.role}<br/>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    </div>
  `).join('');
}

function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  renderList(employees);
}

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  localStorage.setItem('editEmp', JSON.stringify(emp));
  window.location.href = 'form.html';
}

function toggleFilter() {
  document.getElementById("filterSection").classList.toggle("hidden");
}

function applyFilter() {
  const name = document.getElementById("filterFirstName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  let filtered = employees.filter(e =>
    (!name || e.firstName.toLowerCase().includes(name)) &&
    (!dept || e.department.toLowerCase().includes(dept)) &&
    (!role || e.role.toLowerCase().includes(role))
  );
  renderList(filtered);
}

function clearFilter() {
  document.getElementById("filterFirstName").value = '';
  document.getElementById("filterDepartment").value = '';
  document.getElementById("filterRole").value = '';
  renderList();
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  renderList(employees.filter(e =>
    e.firstName.toLowerCase().includes(val) ||
    e.email.toLowerCase().includes(val)
  ));
});

document.getElementById("sortBy").addEventListener("change", (e) => {
  const key = e.target.value;
  if (key) {
    const sorted = [...employees].sort((a, b) => a[key].localeCompare(b[key]));
    renderList(sorted);
  }
});

window.onload = renderList;
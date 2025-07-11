<#list employees as emp>
  <div class="card">
    <strong>${emp.firstName} ${emp.lastName}</strong><br/>
    ${emp.email}<br/>
    ${emp.department} | ${emp.role}<br/>
    <button onclick="editEmployee(${emp.id})">Edit</button>
    <button onclick="deleteEmployee(${emp.id})">Delete</button>
  </div>
</#list>
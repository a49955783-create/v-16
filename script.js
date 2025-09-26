let insurances = [];

function openAddForm() {
  document.getElementById('addForm').classList.remove('hidden');
}

function closeForm() {
  document.getElementById('addForm').classList.add('hidden');
}

function saveInsurance() {
  const name = document.getElementById('name').value;
  const nationalId = document.getElementById('nationalId').value;
  const category = document.getElementById('category').value;
  const expiryDate = document.getElementById('expiryDate').value;

  if (!name || !nationalId || !expiryDate) {
    alert('الرجاء إدخال جميع الحقول');
    return;
  }

  insurances.push({ name, nationalId, category, expiryDate });
  renderInsurance();
  closeForm();
}

function renderInsurance() {
  const list = document.getElementById('insuranceList');
  list.innerHTML = '';
  insurances.forEach((ins, i) => {
    const div = document.createElement('div');
    div.className = 'insurance-item';
    div.innerHTML = `<p><strong>${ins.name}</strong> - ${ins.nationalId}</p>
                     <p>الفئة: ${ins.category}</p>
                     <p>تاريخ الانتهاء: ${ins.expiryDate}</p>`;
    list.appendChild(div);
  });
}

function confirmDeleteAll() {
  if (confirm('هل أنت متأكد أنك تريد حذف جميع التأمينات؟')) {
    insurances = [];
    renderInsurance();
  }
}

function searchInsurance() {
  const query = document.getElementById('searchInput').value;
  const results = insurances.filter(ins => ins.name.includes(query) || ins.nationalId.includes(query));
  const list = document.getElementById('insuranceList');
  list.innerHTML = '';
  results.forEach(ins => {
    const div = document.createElement('div');
    div.className = 'insurance-item';
    div.innerHTML = `<p><strong>${ins.name}</strong> - ${ins.nationalId}</p>
                     <p>الفئة: ${ins.category}</p>
                     <p>تاريخ الانتهاء: ${ins.expiryDate}</p>`;
    list.appendChild(div);
  });
}

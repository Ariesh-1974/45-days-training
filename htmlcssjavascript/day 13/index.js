document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validate()) return;

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById('dob').value.trim();
    const location = document.getElementById('location').value;
    const subjects = Array.from(document.querySelectorAll('input[name="subject"]:checked'))
        .map(subject => subject.value)
        .join(', ');

    const editingRow = document.querySelector('form').dataset.editingRow;

    if (editingRow) {
        const row = document.querySelector(`#dataTable tbody tr[data-row-id="${editingRow}"]`);
        const cells = row.children;
        cells[0].textContent = name;
        cells[1].textContent = age;
        cells[2].textContent = phone;
        cells[3].textContent = gender;
        cells[4].textContent = subjects;
        cells[5].textContent = dob;
        cells[6].textContent = location;

        delete document.querySelector('form').dataset.editingRow;
    } else {
        const tableBody = document.querySelector('#dataTable tbody');
        const newRow = document.createElement('tr');

        const rowId = Date.now();
        newRow.setAttribute('data-row-id', rowId);

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${phone}</td>
            <td>${gender}</td>
            <td>${subjects}</td>
            <td>${dob}</td>
            <td>${location}</td>
            <td>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        const updateBtn = newRow.querySelector('.update-btn');
        const deleteBtn = newRow.querySelector('.delete-btn');

        updateBtn.addEventListener('click', function () {
            startEditRow(newRow);
        });

        deleteBtn.addEventListener('click', function () {
            newRow.remove();
        });
    }

    this.reset();
});

function validate() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = "Name must contain only letters and spaces.";
        nameError.classList.remove('hide');
        isValid = false;
    } else {
        nameError.classList.add('hide');
    }

    const age = document.getElementById('age').value.trim();
    if (!age || isNaN(age) || age <= 0 || age>=30) {
        alert("Please enter a valid age.");
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter the valid phone number.");
        isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select your gender.");
        isValid = false;
    }

    const subjects = Array.from(document.querySelectorAll('input[name="subject"]:checked'));
    if (subjects.length === 0) {
        alert("Please select at least one subject.");
        isValid = false;
    }

    const location = document.getElementById('location').value;
    if (!location) {
        alert("Please select a location.");
        isValid = false;
    }

    return isValid;
}

function startEditRow(row) {
    const cells = row.children;
    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('age').value = cells[1].textContent;
    document.getElementById('phone').value = cells[2].textContent;
    document.querySelector(`input[name="gender"][value="${cells[3].textContent}"]`).checked = true;
    const subjects = cells[4].textContent.split(', ');
    document.querySelectorAll('input[name="subject"]').forEach(subject => {
        subject.checked = subjects.includes(subject.value);
    });
    document.getElementById('dob').value = cells[5].textContent;
    document.getElementById('location').value = cells[6].textContent;
    document.querySelector('form').dataset.editingRow = row.getAttribute('data-row-id');
}

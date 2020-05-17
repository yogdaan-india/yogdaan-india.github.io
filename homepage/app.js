const form = document.querySelector('#add-query');

// saving Data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Contact Form').add({
        Name: form.Name.value,
        Phone: form.Phone.value,
        City: form.City.value
    });
    form.Name.value = '';
    form.City.value = '';
    form.Phone.value = '';
})


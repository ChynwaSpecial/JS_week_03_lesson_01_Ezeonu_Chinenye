function getFormvalue() {
    // Prevent form submission to avoid page reload
   event.preventDefault();

    const form = document.getElementById('form1');

    // Get the values of the inputs by their names
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    console.log("First name:", firstName);
    console.log("Last name:", lastName);
}

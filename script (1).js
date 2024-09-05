
document.getElementById('routineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let allChecked = true;

    checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });

    if (allChecked) {
        alert('Form submitted successfully!');
        // In a real application, you would send the data to a server here.
    } else {
        alert('Please complete all tasks before submitting.');
    }
});

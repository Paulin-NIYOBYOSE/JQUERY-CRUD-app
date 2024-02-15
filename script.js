$(document).ready(function() {
    // Function to fetch data from the backend and populate the table
    function fetchData() {
        $.ajax({
            url: 'backend.php',
            method: 'GET',
            success: function(response) {
                $('#dataTable tbody').html(response);
            }
        });
    }

    // Initial data load
    fetchData();

    // Submit form data using JQUERY
    $('#form').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        $.ajax({
            url: 'backend.php',
            method: 'POST',
            data: {name: name, email: email},
            success: function(response) {
                $('#form')[0].reset();
                fetchData(); // Reload data after successful submission
            }
        });
    });

    // Delete data using JQUERY
    $(document).on('click', '.deleteBtn', function() {
        var id = $(this).data('id');
        $.ajax({
            url: 'backend.php',
            method: 'POST',
            data: {id: id, action: 'delete'},
            success: function(response) {
                fetchData(); // Reload data after successful deletion
            }
        });
    });
});

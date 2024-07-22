// script.js
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    if (title && author && isbn) {
        const tableBody = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        tableBody.appendChild(row);

        // Clear input fields after adding the row
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
});

// Delegate event handling for dynamically added rows
document.getElementById('book-list').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete')) {
        const row = event.target.closest('tr');
        row.remove();
    }
});

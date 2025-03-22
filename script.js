$(document).ready(function () {
    // Aktifkan dropdown menu
    $('.dropdown-toggle').dropdown();
    
    // Aktifkan carousel dengan interval 3 detik
    $('.carousel').carousel({
        interval: 3000
    });
 document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
    
});


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form reload

        // Tampilkan alert sukses
        const alert = document.getElementById('successAlert');
        alert.classList.remove('d-none');

        // Bersihkan form setelah submit
        document.getElementById('contactForm').reset();

        // Hilangkan alert setelah 3 detik
        setTimeout(() => {
            alert.classList.add('d-none');
        }, 3000);
    });
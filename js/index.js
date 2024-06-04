document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const dcreportLink = document.getElementById('dcreport');
    const modal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    dcreportLink.addEventListener('click', (event) => {
        event.preventDefault();
        pdfFrame.src = 'files/dcreport.pdf'; // Path to your PDF file
        modal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            pdfFrame.src = ''; // Clear the src to stop the PDF from loading when modal is closed
        }
    });
});
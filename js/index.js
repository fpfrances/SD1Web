document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

function openPDF(pdfUrl) {
    const pdfViewer = document.getElementById('pdf-viewer');

    // Check if the viewer is already open with the same document
    if (pdfViewer.dataset.currentPdf === pdfUrl) {
        pdfViewer.style.height = "0";
        pdfViewer.dataset.currentPdf = "";  // Reset PDF data
        pdfViewer.innerHTML = "";  // Clear PDF
    } else {
        pdfViewer.innerHTML = `<iframe src="${pdfUrl}" width="100%" height="100%"></iframe>`;
        pdfViewer.style.height = "1130px";  // Expand to show the PDF
        pdfViewer.dataset.currentPdf = pdfUrl;  // Store the current PDF
    }
}
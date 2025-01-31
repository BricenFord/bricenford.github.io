// Keep track of current active section
let currentSection = 'home';

// Function to show selected section
function showSection(sectionId) {
    // Hide all sections and remove active class
    document.querySelectorAll('.container').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Show selected section and add active class
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';
    selectedSection.classList.add('active');
    
    // Update current section
    currentSection = sectionId;

    // Update URL hash without triggering scroll
    history.pushState(null, null, `#${sectionId}`);
}

// Handle page load and browser navigation
document.addEventListener('DOMContentLoaded', () => {
    // Show initial section based on URL hash or default to home
    const hash = window.location.hash.slice(1) || 'home';
    showSection(hash);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'home';
        showSection(hash);
    });
});

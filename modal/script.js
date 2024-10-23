// Get elements
const profilePic = document.getElementById('profilePic');
const popupModal = document.getElementById('popupModal');
const closeBtn = document.getElementById('closeBtn');

// Show the modal below the profile picture
profilePic.addEventListener('click', () => {
    const rect = profilePic.getBoundingClientRect(); // Get position of profile pic
    popupModal.style.top = `${rect.bottom + window.scrollY}px`; // Position below the pic
    popupModal.style.left = `${rect.left + window.scrollX}px`; // Align with pic
    popupModal.style.display = 'block';
});

// Hide the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    popupModal.style.display = 'none';
});

// Close the modal when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsidePopup = popupModal.contains(event.target);
    const isClickOnProfilePic = profilePic.contains(event.target);
    
    // If the click is outside the popup and not on the profile pic, hide the modal
    if (!isClickInsidePopup && !isClickOnProfilePic) {
        popupModal.style.display = 'none';
    }
});

// Optional: Close the modal when pressing the 'Esc' key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popupModal.style.display = 'none';
    }
});

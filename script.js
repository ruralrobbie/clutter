// Simple scroll effect: When user scrolls to the "method" section, add a fade-in animation to the action link
window.addEventListener('scroll', () => {
    const actionLink = document.querySelector('.action-link');
    const rect = actionLink.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        actionLink.style.animation = 'fadeIn 1s ease-in-out';
    }
});

// CSS for the fade-in animation (added dynamically)
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);

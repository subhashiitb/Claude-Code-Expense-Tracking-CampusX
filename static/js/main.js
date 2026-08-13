// main.js — students will add JavaScript here as features are built

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('video-modal');
    const demoVideo = document.getElementById('demo-video');
    const seeHowButton = document.querySelector('.hero-actions .btn-ghost');
    const closeButton = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (!seeHowButton || !modal) return;

    function openModal() {
        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
        if (demoVideo) {
            const src = demoVideo.src;
            demoVideo.src = '';
            demoVideo.src = src;
        }
    }

    seeHowButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});

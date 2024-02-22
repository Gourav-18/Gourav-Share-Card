const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
    console.log('Model is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}

function closeModal() {
    console.log('Model is closed');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}
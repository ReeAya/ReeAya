'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

const openModal = function() {
    console.log('Btn clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', openModal);

//modal.style.display = 'block'; display could be changed from 'none' to 'block' of instead of removing class 'hidden'

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    console.log(event.key);

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

document.addEventListener('keyup', function() {
    btnsShowModal.style.border = '0.1rem solid #d6b2ef';
});
//allows multiple elements with the same class to be selected and they can be manipulated
//for (let i = 0; i < btnsShowModal.length; i++)
//  console.log(btnsShowModal[i].textContent);CURRENT BTN
//shows text content for the 3 btns
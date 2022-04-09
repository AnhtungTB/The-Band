const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hien thi modal mua ve
function showBuyTickets() {
	modal.classList.add('open')
}
// An modal mua ve
function hideBuyTickets() {
	modal.classList.remove('open')
}


for (const buyBtn of buyBtns) {
	buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
	event.stopPropagation()
})
// Menu -header
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
console.log(mobileMenu);
var headerHeight = header.clientHeight;

// Dong mo mobile menu
mobileMenu.onclick = function() {
	var isClosed = header.clientHeight === headerHeight;
	if (isClosed) {
		header.style.height = 'auto';

	} else {
		header.style.height = null;
	}
}
// Tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems)
for (var i = 0; i < menuItems.length; i++) {
	var menuItem = menuItems[i];
	menuItem.onclick = function() {
		header.style.height = null;
	}
}
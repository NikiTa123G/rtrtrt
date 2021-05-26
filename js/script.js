var scrolled;
var timer;

window.onscroll = () => {
const scrollY = window.scrollY;
const windowHeight = window.innerHeight;
	
	if(scrollY>1) {
		let brackePoint = windowHeight;
		scrollTo(brackePoint);
	}
}

function scrollTo(brackePoint) {
	if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 100;
		timer = setTimeout(scrollTo(), 100);
	} else{
		clearTimeout(timer);

	}
}

let tabBtns = document.querySelectorAll('.tab_btn');
var tabActive = 0;

for(let i = 0; i < tabBtns.length; i++) {
	const tabBtn = tabBtns[i];
	tabBtn.addEventListener("click", function(e){
		removeClassTab();
		tabBtn.classList.add('active');
	});
}

function removeClassTab() {
	const activeTab = document.querySelector('.tab_btn.active');
	activeTab.classList.remove('active');
}

let loadAnims = document.querySelectorAll('.laod_anim');

document.addEventListener("DOMContentLoaded", function() {
	for(let i = 0; i < loadAnims.length; i++) {
		const loadAnim = loadAnims[i];
		loadAnim.classList.add('load');
	}
});

let lincksHover_1 = document.querySelectorAll('.tab_item.tab-1');
let imgesHover_1 = document.querySelectorAll('.wrap_img.tab-1');
let lincksHover_2 = document.querySelectorAll('.tab_item.tab-2');
let imgesHover_2 = document.querySelectorAll('.wrap_img.tab-2');
let lincksHover_3 = document.querySelectorAll('.tab_item.tab-3');
let imgesHover_3 = document.querySelectorAll('.wrap_img.tab-3');
let infBlocks = document.querySelectorAll('.tab_inf__inner');

var activeLinck = 0;

for(let i = 0; i < lincksHover_1.length; i++) {
	const linckHover = lincksHover_1[i];
	linckHover.addEventListener("click", function(e){
		activeLinck = i;
		removeClassLinck_1();
		linckHover.classList.add('active');
	});
}

function removeClassLinck_1() {
	const linckActive = document.querySelector('.tab_item.tab-1.active');
	linckActive.classList.remove('active');
}

for(let i = 0; i < lincksHover_2.length; i++) {
	const linckHover = lincksHover_2[i];
	linckHover.addEventListener("click", function(e){
		activeLinck = i;
		removeClassLinck_2();
		linckHover.classList.add('active');
	});
}

function removeClassLinck_2() {
	const linckActive = document.querySelector('.tab_item.tab-2.active');
	linckActive.classList.remove('active');
}

for(let i = 0; i < lincksHover_3.length; i++) {
	const linckHover = lincksHover_3[i];
	linckHover.addEventListener("click", function(e){
		activeLinck = i;
		removeClassLinck_3();
		linckHover.classList.add('active');
	});
}

function removeClassLinck_3() {
	const linckActive = document.querySelector('.tab_item.tab-3.active');
	linckActive.classList.remove('active');
}

document.querySelector('.content').onmousemove = function(e){
	console.log(activeLinck);
	if (!e.target.closest('.tab_item')) {
		// setTimeout(function() {
			removeClassImg();
			// if(tabActive === 0)
				imgesHover[activeLinck].classList.add('active_move');
				infBlocks[activeLinck].classList.add('active_move');
		// }, 1000);
		
	}
}

for(let i = 0; i < lincksHover_1.length; i++) {
	const imgHover = lincksHover_[i];
	const img = imgesHover_1[i];
	const infBlock = infBlocks_1[i];
	imgHover.addEventListener("mousemove", function(e){
		removeClassImg_1();
		
		img.classList.add('active_move');
		infBlock.classList.add('active_move');
		
	});
	// if ( === lincksHover) {}
}

function removeClassImg_1() {
	const infBlockActive = document.querySelector('.tab_inf__inner.tab-1.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-1.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}

for(let i = 0; i < lincksHover_2.length; i++) {
	const imgHover = lincksHover_2[i];
	const img = imgesHover_2[i];
	const infBlock = infBlocks_2[i];
	imgHover.addEventListener("mousemove", function(e){
		removeClassImg_2();
		
		img.classList.add('active_move');
		infBlock.classList.add('active_move');
		
	});
	// if ( === lincksHover) {}
}

function removeClassImg_2() {
	const infBlockActive = document.querySelector('.tab_inf__inner.tab-2.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-2.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}

for(let i = 0; i < lincksHover_3.length; i++) {
	const imgHover = lincksHover_3[i];
	const img = imgesHover_3[i];
	const infBlock = infBlocks_3[i];
	imgHover.addEventListener("mousemove", function(e){
		removeClassImg_3();
		
		img.classList.add('active_move');
		infBlock.classList.add('active_move');
		
	});
	// if ( === lincksHover) {}
}

function removeClassImg_3() {
	const infBlockActive = document.querySelector('.tab_inf__inner.tab-3.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-3.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}
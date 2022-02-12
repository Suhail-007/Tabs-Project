const description = [
		{
				image: './images/hero-bcg.jpeg',
				history: 'nihil accommodare sale altera eloquentiam efficitur vituperata verear quam quidam sodales antiopam nonumy lorem tractatos elementum propriae pulvinar dictum iriure feugait etiam penatibus omnesque mucius persecuti dictum conclusionemque ullamcorper labores mi euismod noster blandit contentiones definitionem placerat nibh libero porta',
				vision: `ridiculus sapientem liber gravida omittam quot nonumes iudicabit mandamus appareat mel sanctus eu veritus facilisi accusata vivamus nostrum no praesent usu volumus vituperat possim instructior gloriatur errem novum percipit ridens agam propriae atqui ignota oratio.
		<ul>
					<li>List item</li>
					<li>List item</li>
					<li>List item</li>
		</ul>`,
			about: 'tacimates malorum alterum fastidii vulputate inani penatibus ridiculus nobis ac tale tempus idque doming platea'	
		},
		{
				image: './images/Nature.jpg',
				history: 'eum constituto ferri porro consetetur fabulas habeo qualisque erroribus bibendum varius erat consul ullamcorper propriae maximus falli patrioque invidunt cursus duo in euismod id vitae',
				vision: 'dolorem quot pharetra equidem torquent dicit partiendo idque brute leo falli ipsum sem adversarium referrentur ea commune efficiantur netus pertinax',
			about: 'maximus adolescens ornatus lacus minim deserunt quisque ipsum venenatis prodesset harum percipit epicuri consequat arcu'	
		},
		{
				image: './images/Tree.jpg',
				history: 'lorem tractatos elementum propriae pulvinar dictum iriure feugait etiam penatibus omnesque mucius persecuti dictum conclusionemque ullamcorper labores mi euismod noster blandit contentiones definitionem placerat nibh libero porta',
				vision: 'accommodare qualisque mutat vituperata signiferumque propriae possit nostra turpis erat maecenas errem aenean laudem fabellas unum malesuada vituperatoribus falli conclusionemque',
			about: 'convallis consequat latine hac curabitur mediocritatem dicta possim pellentesque fringilla deseruisse egestas pretium saepe suas qualisque meliore simul feugait tota'	
		},
		{
				image: './images/Mountains.jpg',
				history: 'salutatus dignissim interdum oporteat fringilla id electram quas nostrum gravida cu dico meliore legimus scelerisque mutat viderer adolescens molestie ignota vituperata instructior utroque instructior convallis gubergren explicari est persecuti facilisis',
				vision: 'graece aliquet aeque luctus ac arcu eruditi oratio putent mediocritatem fugit in disputationi ultrices accumsan possim similique varius comprehensam porta iaculis nostrum',
			about: 'principes altera efficiantur pulvinar antiopam ei neque altera sea partiendo felis et solum indoctum euripidis civibus porro consequat fuisset delectus'	
		}		
];

const historyPara = document.querySelector('.history-para');
const visionPara = document.querySelector('.vision-para');
const aboutPara = document.querySelector('.about-para');	
const image = document.querySelector('.image > img');

window.addEventListener('DOMContentLoaded', () => {
		changeInfo(index);
})

//carousel Function
let index = 0;

function changeInfo(i) {	
	let newIndex = description[i];
	
	image.src = newIndex.image;
	historyPara.innerText = newIndex.history;
	visionPara.innerHTML = newIndex.vision;
	aboutPara.innerText = newIndex.about;
}

let carouselNextBtn = document.querySelector('[data-carousel-next]');

let carouselPrevBtn = document.querySelector('[data-carousel-prev]');

carouselNextBtn.addEventListener('click', () => {
		index++;
		if (index > description.length - 1) 	index = 0;
		changeInfo(index);
});

carouselPrevBtn.addEventListener('click', () => {
		index--;
		if (index < 0) index = description.length - 1;
		changeInfo(index);
});
//carousel Function end

const articleContainer = document.querySelector('.article');
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn-container > button');
const descContainer = document.querySelectorAll('.description > div');

articleContainer.addEventListener('click', e => {
//it will be use to select para later
		let btnDataset = e.target.dataset.btn;

		if (btnDataset) {
		//remove pre added active class
					buttons.forEach(btn => {
							btn.classList.remove('active');
							//add the active class on which button user clicking
							e.target.classList.add('active');
					})
		descContainer.forEach(div => div.classList.remove('active'));
		//select element
		const element = document.getElementById(btnDataset);
		element.classList.add('active');
		}				
})

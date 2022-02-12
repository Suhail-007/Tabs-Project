const articleContainer = document.querySelector('.article');

const container = document.querySelector('.container');

const buttons = document.querySelectorAll('.btn-container > button');

let descContainer = document.querySelectorAll('.description > div');

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
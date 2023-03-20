// Raw Data
const arrayRaw = [
	{
		'id' : 1,
		'name' : 'Gabriel',
		'cost' : 5.99,
		'desc' : `Adipisicing elit dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-1.jpeg`,
		'category' : 'Brunch'
	},{
		'id' : 2,
		'name' : 'Diner Double',
		'cost' : 25.99,
		'desc' : `Sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-2.jpeg`,
		'category' : 'Lunch'
	},{
		'id' : 3,
		'name' : 'Nyama Choma',
		'cost' : 36.99,
		'desc' : `Dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-3.jpeg`,
		'category' : 'Shakes'
	},{
		'id' : 4,
		'name' : 'Beef Sausages',
		'cost' : 1.99,
		'desc' : `Consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-4.jpeg`,
		'category' : 'Breakfast'
	},{
		'id' : 5,
		'name' : 'Brown Chapati',
		'cost' : 9.99,
		'desc' : `Dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-5.jpeg`,
		'category' : 'Lunch'
	},{
		'id' : 6,
		'name' : 'Ugali Saucer',
		'cost' : 7.99,
		'desc' : `Vertit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-6.jpeg`,
		'category' : 'Shakes'
	},{
		'id' : 7,
		'name' : 'Githeri',
		'cost' : 4.99,
		'desc' : `Ipsum dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-7.jpeg`,
		'category' : 'Dinner'
	},{
		'id' : 8,
		'name' : 'Sweet Potatoes',
		'cost' : 22.99,
		'desc' : `Zor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-8.jpeg`,
		'category' : 'Breakfast'
	},{
		'id' : 9,
		'name' : 'Chips Mayai',
		'cost' : 98.99,
		'desc' : `Mit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-9.jpeg`,
		'category' : 'Lunch'
	},{
		'id' : 10,
		'name' : 'Matumbo',
		'cost' : 11.99,
		'desc' : `Optimum amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-10.jpeg`,
		'category' : 'Shakes'
	},{
		'id' : 11,
		'name' : 'Buttermilk Pancakes',
		'cost' : 5.99,
		'desc' : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-1.jpeg`,
		'category' : 'Dinner'
	},{
		'id' : 12,
		'name' : 'Diner Double',
		'cost' : 25.99,
		'desc' : `Sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-2.jpeg`,
		'category' : 'Breakfast'
	},{
		'id' : 13,
		'name' : 'Nyama Choma',
		'cost' : 36.99,
		'desc' : `Accusamus golor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-3.jpeg`,
		'category' : 'Lunch'
	},{
		'id' : 14,
		'name' : 'Beef Sausages',
		'cost' : 1.99,
		'desc' : `Consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-4.jpeg`,
		'category' : 'Shakes'
	},{
		'id' : 15,
		'name' : 'Brown Chapati',
		'cost' : 9.99,
		'desc' : `Dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-5.jpeg`,
		'category' : 'Dinner'
	},{
		'id' : 16,
		'name' : 'Ugali Saucer',
		'cost' : 7.99,
		'desc' : `Vertit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-6.jpeg`,
		'category' : 'Breakfast'
	},{
		'id' : 17,
		'name' : 'Kunde',
		'cost' : 1.99,
		'desc' : `Ipsum dolor sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-7.jpeg`,
		'category' : 'Lunch'
	},{
		'id' : 18,
		'name' : 'Mchele na Beef',
		'cost' : 123.99,
		'desc' : `Tenetur delectus sit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-8.jpeg`,
		'category' : 'Shakes'
	},{
		'id' : 19,
		'name' : 'Chicken Curry',
		'cost' : 67.99,
		'desc' : `Dit amet consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-9.jpeg`,
		'category' : 'Dinner'
	},{
		'id' : 20,
		'name' : 'Muthokoi Special',
		'cost' : 14.99,
		'desc' : `Consectetur adipisicing elit. Non tenetur delectus sit accusamus.`,
		'img' : `assets/imgs/item-10.jpeg`,
		'category' : 'Breakfast'
	}
];

// variables & targets
const btnsContainer = document.querySelector('.navigation');
const contentContainer = document.querySelector('#content-container');

let arrayForDisplay = arrayRaw;

// FUNCTIONS:

// 1. Map array to HTML
function mapArrayToHTML(array) {

	const mappedContent = array.map(function(r) {

		return `<div class="col-md-6">
                    <div class="row">
                        <div class="col-5">
                            <div class="img" style="background-image: url(${r.img});">
                                <span class="badge">${r.category}</span>
                            </div>
                        </div>
                        <div class="col-7">
                            <h5>
                                <span>${r.name}</span>
                                <span>$${r.cost}</span>
                            </h5>
                            <p>${r.desc}</p>
                        </div>
                    </div> 
                </div>`;

	}).join('');

	contentContainer.innerHTML = mappedContent;
}

// 2. Filter array by category
function filterArrayByCategory(array, category) {

	return array.filter(function(r) {

		if(r.category === category) {
			
			return r;
		}

		if(category === "All") {

			return arrayRaw;
		}
	});
}

// 3. Get unique categories from array
function getUniqueCategories(array) {

	return array.reduce(function(values, item) {

		if(!values.includes(item.category)) {

			values.push(item.category);
		}

		return values;

	},["All"]); 
}

// 4. Map category buttons
function mapCategoryBtnstoHTML(categories) {

	const content = categories.map(function(r) {

		return `<button 
					class="btn btn-outline-secondary filter-btn me-1" 
					data-id="${r}" 
					type="button">
					${r}
				</button>`;

	}).join('');

	btnsContainer.innerHTML = content;
}

// 5. Toggle button active status
function setBtnActiveStatus(btn) {

	if(!btn.classList.contains('active')) {

		btn.classList.replace('btn-outline-secondary', 'active');
	}
}

// 6. Reset button status
function resetAllBtnStatus(e) {

	const siblings = e.currentTarget.parentNode.childNodes;

	siblings.forEach(function(r) {

		r.classList.replace('active', 'btn-outline-secondary');
	});
}

// 7. Set "All" categories button to active by default
function checkAllCatsBtn() {

	let btns = btnsContainer.childNodes;

	btns.forEach(function(btn) {

		if(btn.dataset.id === "All") {
			
			setBtnActiveStatus(btn);
		}
	});
}

// RUN: when page/DOM has fully loaded
window.addEventListener('DOMContentLoaded', function() {

	// 1. Get category buttons
	const categories = getUniqueCategories(arrayRaw);

	mapCategoryBtnstoHTML(categories);

	const filterBtns = document.querySelectorAll('.filter-btn');

	checkAllCatsBtn();

	// 2. Map the array content into HTML
	mapArrayToHTML(arrayForDisplay);

	// 3. IF category clicked, filter array content by respective category
	filterBtns.forEach(function(btn) {

		btn.addEventListener('click', function(e) {

			resetAllBtnStatus(e);

			setBtnActiveStatus(btn);

			const filterCategory = btn.dataset.id;

			const filteredArray = filterArrayByCategory(arrayRaw, filterCategory);

			mapArrayToHTML(filteredArray);

		});
	});
});
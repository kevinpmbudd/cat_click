var cat1 = {
	name: "smeow",
	count: 0,
	image: "img/cat1.jpg"
};

var cat2 = {
	name: "feelinus",
	count: 0,
	image: "img/cat2.jpg"
};

var cat3 = {
	name: "hairball",
	count: 0,
	image: "img/cat3.jpg"
};
var cat4 = {
	name: "hari",
	count: 0,
	image: "img/cat4.jpg"
};
var cat5 = {
	name: "whiskers",
	count: 0,
	image: "img/cat5.jpg"
};

var cats = [cat1,cat2,cat3,cat4,cat5];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = cat.name;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            $('#selectedCat').empty();

            var name = document.createElement('p');
            name.textContent = catCopy.name;
            $('#selectedCat').append(name);

            $('#selectedCat').append($('<img>', {
            	src: catCopy.image
            }));

            var click_count = document.createElement('p');
            click_count.textContent = catCopy.count;
            $('#selectedCat').append(click_count);

						$('img').click(function() {
							catCopy.count ++;
							click_count.textContent = catCopy.count;
						});

        };
    })(cat));

    $('#list').append(elem);
};
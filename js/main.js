// var count = 0;
// var count2 = 0;
// var name = "smeow";
// var name2 = "feelinus";

// $('#name').text(name);
// $('#name2').text(name2);

// $('#kitty').click(function(e) {
//   count ++;
//   console.log(count);
//   $('#count').text('You have clicked me ' + count + ' times');
// });

// $('#kitty2').click(function(e) {
//   count2 ++;
//   console.log(count2);
//   $('#count2').text('You have clicked me ' + count2 + ' times');
// });

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
            // alert(catCopy.name);
            $('#selectedCat').innerHTML ='';
            var name = document.createElement('p');
            name.textContent = catCopy.name;
            $('#selectedCat').append(name);
            $('#selectedCat').append($('<img>', {
            	src : catCopy.image
            }));
            var click_count = document.createElement('p');
            click_count.textContent = catCopy.count;
						$('#selectedCat').append(click_count);
						$('#selectedCat').click(function(e) {
							e.count ++;
							console.log(e.count);
							click_count.textContent = e.count;
						})(e);


        };
    })(cat));

    $('#list').append(elem);
    // document.body.appendChild(elem);
};
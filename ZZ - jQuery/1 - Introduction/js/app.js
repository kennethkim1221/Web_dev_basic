$("li").on("click", function() {
	$(this).text("Clicked!").delay(800).fadeOut(400);
});

$("p[class=texto]").on("click", function() {
	$(this).text("Clicked!").delay(800).fadeOut(400);
});



// element selectors
// $('li');
// $('a');
// $('img');

// decendant selectors
// $('p a')

// classes and IDS;
// $('.blog-post');
// $('#about');

// Attribute Selectors
// $("[name='newsletter']"); < - selects  only the node with atbr values

$(".loc").hover(
 function(){
    $(this).html("<strong>Location</strong> Your House?!");
  },
  function(){
    $(this).html("<strong>Location</strong> Treehouse Adoption Center");
  }
)

$('#add-pet').on('click', () => {
  console.log("Add pet clicked!");
  // Grab info from the form
  var $name = $('#pet-name');
  var $species = $('#pet-species');
  var $notes = $('#pet-notes');

  // Assemble the HTML of the new element
  var $newPet = $(
     '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
     '</p><p><strong>Species:</strong> ' + $species.val() +
     '</p><p><strong>Notes:</strong> ' + $notes.val()  +
     '</p><span class="close">&times;</span></div></section>'
  );

  // Attach the new element to the page
  $('#posted-pets').append($newPet);
    console.log("Appended!");

    // Make the 'x' in the corner remove the selection it's contained within
  $('.close').on('click', function() {
    $(this).parent().remove();
  });

  // Reset form fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");
});

// Add effect to the images
$('img,button,p').css('display', 'none').fadeIn(2000); //hide the image 1st to make fadeIn work. Add other tag by comma

$('.card').on('click', function() {
  $(this).toggleClass('selected')
});

$('.card').on('click', (event) => {
  console.log(event.target)
});

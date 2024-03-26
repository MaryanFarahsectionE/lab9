$(document).ready(function() {
  // i'm setting up a click event on each filter button
  $('.filter-btn').click(function() {
    var filterValue = $(this).attr('data-category'); // i grab the category i want to filter by
    $('.gallery-item').hide(); // first, i hide all items to start fresh
    if (filterValue == 'all') {
      $('.gallery-item').fadeIn(); // if i choose 'all', i make sure everything is visible again
    } else {
      // if it's not 'all', i only show the items that match the category i selected
      $('.gallery-item[data-category="' + filterValue + '"]').fadeIn();
    }
  });

  // now, i'm setting up the lightbox feature for each image in the gallery
  $('.gallery-item img').click(function() {
    var imgSrc = $(this).attr('src'); // i get the source of the clicked image
    $('#lightbox-img').attr('src', imgSrc); // and set it as the source for the lightbox image
    $('#lightbox').fadeIn(); // then, i make the lightbox visible
  });

  // i also need a way to close the lightbox, so i set up a click event on the close button and the lightbox itself
  $('#close, #lightbox').click(function() {
    $('#lightbox').fadeOut(); // this will hide the lightbox when i click close or outside the image
  });
});

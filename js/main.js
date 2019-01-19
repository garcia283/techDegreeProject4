// Target all links and add the data-lightbox
// attr and set its value to scenes
$('a').attr('data-lightbox', 'scenes');

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  maxWidth: 900,
  positionFromTop: 150
})

// include an event to show the arrows

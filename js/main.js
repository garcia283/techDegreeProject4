// Target all links and add the data-lightbox
// attr and set its value to scenes
$('a').attr('data-lightbox', 'scenes');

// Add lightbox2 plugin
lightbox.option({
  alwaysShowNavOnTouchDevices: true,
  resizeDuration: 200,
  wrapAround: true,
  maxWidth: 900,
  positionFromTop: 150
});

// Add HideSeek plugin
$('#search').hideseek({
  attribute: "title"
});

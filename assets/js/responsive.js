function isBreakpoint(size) {
  return $('.device-' + size).is(':visible');
}

$(function() {
  if (isBreakpoint('xs')) {
  }
});

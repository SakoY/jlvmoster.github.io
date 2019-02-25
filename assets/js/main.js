$(document).ready(function () {
  // get the header height programmatically
  var headerHeight = $('#navigation').outerHeight();

  // fix body offset from the header section
  $('body').attr('data-offset', headerHeight);
  $('body').css('padding-top', headerHeight + 'px');

  // fix section anchor offset from the header section
  $('a[href^="#"]').each(function () {
    var href = $(this).attr('href');
    $(`${href}`).css('padding-top', headerHeight + 'px');
    $(`${href}`).css('margin-top', -headerHeight + 'px');
  });
});

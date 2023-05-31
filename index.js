$("#btn1").on("click", function () {
  $("#heading").toggle();
});

function swap(selector1, selector2) {
  const element1 = $(selector1);
  const element2 = $(selector2);
  const tmp = $('<span>').hide();

  element1.before(tmp);
  element2.before(element1);
  tmp.replaceWith(element2);
};

$("#btn2").on("click", function () {
  swap("#first", "#second");
});

$(window).on('load', function () {
  const myModal = new bootstrap.Modal('.modal');
  myModal.show();
})
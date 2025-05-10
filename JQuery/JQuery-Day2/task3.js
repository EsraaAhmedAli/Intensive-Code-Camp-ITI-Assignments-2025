$(function () {
  $("#drag-img").draggable();

  $("#blackhole").droppable({
    drop: function (event, ui) {
      ui.draggable.animate({
        width: 0,
        height: 0,
        opacity: 0
      }, 1000);
    }
  });

  $("#img1").mouseenter(function () {
    $(this).effect("shake");
  });
});

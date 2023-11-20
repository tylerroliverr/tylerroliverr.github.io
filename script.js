document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;

      customCursor.style.left = x + 'px';
      customCursor.style.top = y + 'px';
    });
  });
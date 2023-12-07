$(document).ready(function () {
  $('#submit').hover(
    function () {
      document.querySelector('.login').style.border = '1px solid #28FFBF ';
    },
    function () {
      document.querySelector('.login').style.border = 'none ';
    }
  );

  $('#reset').hover(
    function () {
      document.querySelector('.login').style.border = '1px solid red ';
    },
    function () {
      document.querySelector('.login').style.border = 'none ';
    }
  );
});

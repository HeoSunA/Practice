(function (global) {
  'use strict';
  
  var fix_header;

  function init() {
    fix_header = document.querySelector('.fix-wrapper');
     console.log('fix_header:', fix_header);

    bind();
  }
  
  function bind() {
    global.addEventListener('scroll', function(e){
      var fix_header_scrollY = window.scrollY;
       console.log(fix_header_scrollY);
      if(fix_header_scrollY > 30) {
        $(fix_header).removeClass('none');
      }else {
        $(fix_header).addClass('none');
      }
    })
  }
  init();
    
})(window);
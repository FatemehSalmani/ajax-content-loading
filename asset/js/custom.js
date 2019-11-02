
$(document).ready(function () {
  
  
       
    (function () {
        let elements = document.getElementById("introduction")
        elements.forEach((el) => {
          el.opacity = 0
          el.display = 'initial'
          (function fadeIn() {
            (el.opacity += .1) < 1 ? setTimeout(fadeIn, 40) : 0
          })()
        })
        ;
 })();


})
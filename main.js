document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById('slider');
    var instances = M.Slider.init(elems, {duration:1000, interval:2500, indicators:false});

      var elems = document.querySelectorAll('select');
       var options = document.querySelectorAll('option');
       var instances = M.FormSelect.init(elems, options);



   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);


    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    console.log(document.body.scrollTop, document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    console.log()
    }

    
  });
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    // FADE IN EFFECTI //
    function animaatio() {

    const nayta = document.querySelectorAll(".naytaX");

    //laskee elementtiä ennen olevan yläosan koon.
    for (let i = 0; i < nayta.length; i++) {

      const ikkunanKorkeus = window.innerHeight;

      const elementYlaosa = nayta[i].getBoundingClientRect().top;
      const elementNakyviin = 150;

      //renderöi animaation 130px elementin jälkeen.
      if (elementYlaosa < ikkunanKorkeus - elementNakyviin) {
        nayta[i].classList.add("active");
      } 
      else {   
        nayta[i].classList.remove("active");      
      }
    }
  }
  window.addEventListener("scroll", animaatio);



  // TYPEWRITER EFFECTI //
  var typeWriterElement = document.getElementById('typewriter');

  var textArray = ["Joustavat", "Kevyet", "Mahtavat", "Modernit"];

  function delWriter(text, i, cb) {

    if (i >= 0 ) {

      typeWriterElement.innerHTML = text.substring(0, i--);
      var rndBack = 100 + Math.random() * 100;
      setTimeout(function() {
        
        delWriter(text, i, cb);
      },rndBack); 

    } else if (typeof cb == 'function') {

      setTimeout(cb,1000);
    }
  };


  function typeWriter(text, i, cb) {

    if ( i < text.length+1 ) {

      typeWriterElement.innerHTML = text.substring(0, i++);
      var rndTyping = 250 - Math.random() * 100;
      setTimeout( function () { 

        typeWriter(text, i++, cb)
      },rndTyping);

    } else if (i === text.length+1) {

      setTimeout( function () {
        delWriter(text, i, cb)
      },1000);
    }
  };

  function StartWriter(i) {

    if (typeof textArray[i] == "undefined") {
      setTimeout( function () {

        StartWriter(0)
      },1000);

    } else if(i < textArray[i].length+1) {

      typeWriter(textArray[i], 0, function () {

        StartWriter(i+1);
      });
    }  
  };

  setTimeout( function () {
    StartWriter(0);
  },1000);



  // SCROLL SMOOTH //
  $('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });

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



/* =================================================================
                  CONTACT FORM VALIDATION
   ================================================================= */


  //Käyttäjän vastaus- osiot
  const lomake = document.getElementById("lomake");
  const etunimi = document.getElementById("etunimi");
  const sukunimi = document.getElementById("sukunimi");
  const sahkoposti = document.getElementById("sahkoposti");
  const puhelinnumero = document.getElementById("puhelinnumero");
  const viesti = document.getElementById("viesti");

  //checkboxit
  let kayttoehdot = document.getElementById("kayttoehdot");


  //Auttaa viestin lähetysvaiheessa tarkistamaan kaikki kohdat.
  var tarkistus1 = false;
  var tarkistus2 = false;
  var tarkistus3 = false;
  var tarkistus4 = false;
  var tarkistus5 = false;
  var tarkistus6 = false;


  //Estää viestin lähettämisen ennen kuin viesti on tarkistettu
  lomake.addEventListener("submit", e =>{

      e.preventDefault();
      tarkistaViesti();  
  });


  //Sähköposti tarkistus
  const sahkopostiTarkistus = sahkoposti => {

      const sahkopostiSL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return sahkopostiSL.test(String(sahkoposti).toLowerCase());
  }


  //Puhelinnumero tarkistus
  const puhelinnumeroTarkistus = puhelinnumero => {

      const puhelinnumeroSL = /^\d{10}$/;
      return puhelinnumeroSL.test(String(puhelinnumero));
      
  }

  //Poistaa tyhjät kohdat.
  const etunimiArvo = etunimi.value.trim();
  const sukunimiArvo = sukunimi.value.trim();
  const sahkopostiArvo = sahkoposti.value.trim();
  const puhelinnumeroArvo = puhelinnumero.value.trim();
  const viestiArvo = viesti.value.trim();


  //Tarkistaa lomakkeen inputtien mahdolliset epäkohdat.
  const tarkistaViesti = (t) =>{
      
      //Muuttaa reunojen väriä & ilmoitusta inputin mukaan.
      //etunimi
      if(t>=1 || t==0) {
          if(etunimiArvo == "" || null) {
              etunimi.style.borderColor = "red";
              tarkistus1 = false;
          }
          else {
              etunimi.style.borderColor = "green";
              tarkistus1 = true;
          }
      }

      //sukunimi
      if(t>=2 || t==0) {
          if(sukunimiArvo == "" || null) {
              sukunimi.style.borderColor = "red";
              tarkistus2 = false;
          }
          else {
              sukunimi.style.borderColor = "green";
              tarkistus2 = true;
          }
      }

      //sahkoposti
      if(t>=3 || t==0) {
          if(sahkopostiArvo == "" || null) {
              sahkoposti.style.borderColor = "red";
              tarkistus3 = false;
          }
          else if (!sahkopostiTarkistus(sahkopostiArvo)) {
              sahkoposti.style.borderColor = "red";
              tarkistus3 = false;
          }
          else{
              sahkoposti.style.borderColor = "green";
              tarkistus3 = true;
          }
      }

      //puhelinnumero
      if(t>=4 || t==0) {
          if(puhelinnumeroArvo == "" || null) {
              puhelinnumero.style.borderColor = "red";
              tarkistus4 = false;
          }
          else if (!puhelinnumeroTarkistus(puhelinnumeroArvo)) {
              puhelinnumero.style.borderColor = "red";
              tarkistus4 = false;
          }
          else{
              puhelinnumero.style.borderColor = "green";
              tarkistus4 = true;
          }
      }

      //viesti
      if(t>=5 || t==0) {
          if(viestiArvo == "" || null) {
              viesti.style.borderColor = "red";
              tarkistus5 = false;
          }
          else {
              viesti.style.borderColor = "green";
              tarkistus5 = true;
          }
      }

      //debuggausta varten
      console.log(("ETUNIMI: "), tarkistus1, 
          (" SUKUNIMI: "), tarkistus2, 
          (" SAHKOPOSTI: "), tarkistus3, 
          (" PUHELINNUMERO: "), tarkistus4, 
          (" VIESTI: "),tarkistus5,
          (" KAYTTOEHDOT: "),tarkistus6);
  }




  //Lähettää viestin PHP:lle
  const viestinLahetys = () => {

      //Tarkistaa kaikki kentät.
      if(tarkistus1 == false || tarkistus2 == false || tarkistus3 == false || tarkistus4 == false || tarkistus5 == false || tarkistus6 == false){

          tarkistaViesti(1 && 2 && 3 && 4 && 5);
          console.log("vikaa kentissä");
      }
      else{ 

          console.log("viesti lähetys");

          const form = document.querySelector("form");

          form.onsubmit = (e)=>{

            e.preventDefault();

            //Luo pyynnön lomake tietojen lähetykseen PHP:lle
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "./php/Otayhteytta.php", true);
            
            let formData = new FormData(form);
            console.log(formData);

            //Lähettää PHP:lle
            xhr.send(formData);
            location.reload();
            alert("Viesti on lähetetty! Mikäli vastausta ei kuulu, ota rohkeasti yhteyttä suoraan sähköpostin kautta.")

          }
      
      }
  }
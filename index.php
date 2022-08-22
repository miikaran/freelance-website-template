<?php


  //Käyttäjän vastaukset
  $etunimi = htmlspecialchars($_POST['etunimi']);
  $sukunimi = htmlspecialchars($_POST['sukunimi']);
  $sahkoposti = htmlspecialchars($_POST['sahkoposti']);
  $puhelinnumero = htmlspecialchars($_POST['puhelinnumero']);
  $viesti = htmlspecialchars($_POST['viesti']);


  //Tarkistaa vastaukset serversidella ennen lähetystä.
  if(!empty($sahkoposti) && !empty($etunimi) && !empty($sukunimi) && !empty($puhelinnumero) && !empty($viesti)){

    if(filter_var($sahkoposti, FILTER_VALIDATE_EMAIL)){

      $receiver = "rantalaihomiika@gmail.com"; //Saajan sahkopostiosoite
      $subject = "Henkilolta: $etunimi <$sahkoposti>";

      //viestin rakenne
      $body = 
      "Nimi: $etunimi $sukunimi\n
       Sahkoposti: $sahkoposti\n
       Puhelinnumero: $puhelinnumero\n
       Viesti: $viesti";
      
      $sender = "From: $sahkoposti";


      //lähettää sähköpostin ao. parametrien mukaan.
      if(mail($receiver, $subject, $body, $sender)){

         echo "Viesti lahetetty";

      }else{

         echo "Viestia ei lahetetty";
      }

    }else{

      echo "Syota sopiva sahkopostiosoite";
    }

  }else{

    echo "Sahkoposti puuttuu";
  }

?>
<?php


  // KÄYTTÄJÄN VASTAUKSET //
  $etunimi = htmlspecialchars($_POST['etunimi']);
  $sukunimi = htmlspecialchars($_POST['sukunimi']);
  $sahkoposti = htmlspecialchars($_POST['sahkoposti']);
  $puhelinnumero = htmlspecialchars($_POST['puhelinnumero']);
  $viesti = htmlspecialchars($_POST['viesti']);


  // VALIDOI VASTAUKSET VIELÄ SERVER PUOLELLA //
  if(!empty($sahkoposti) && !empty($etunimi) && !empty($sukunimi) && !empty($puhelinnumero) && !empty($viesti)){

    if(filter_var($sahkoposti, FILTER_VALIDATE_EMAIL)){

      $receiver = "rantalaihomiika@gmail.com";
      $subject = "Henkilölta: $etunimi <$sahkoposti>";

      $body = 
      "Nimi: $etunimi $sukunimi\n
       Sahkoposti: $sahkoposti\n
       Puhelinnumero: $puhelinnumero\n
       Viesti: $viesti\n
      
      $sender = "From: $sahkoposti";

      //LÄHETTÄÄ SÄHKÖPOSTIN AO. PARAMETRIEN MUKAAN //
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
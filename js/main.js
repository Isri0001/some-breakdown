// // // // Cirkler på instruction-siden

// document.querySelector("#circle").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle").addEventListener("mouseout", headUnHighlight);
// document.querySelector("#circle").addEventListener("click", info);

// document.querySelector("#circle2").addEventListener("mouseover",headHighlight2);
// document.querySelector("#circle2").addEventListener("mouseout", headUnHighlight2);
// document.querySelector("#circle2").addEventListener("click", info2);

// document.querySelector("#circle3").addEventListener("mouseover", headHighlight3);
// document.querySelector("#circle3").addEventListener("mouseout", headUnHighlight3);
// document.querySelector("#circle3").addEventListener("click", info3);


// // Cirkel 1
// function headHighlight(){
//     console.log("headHighlight");
//     document.querySelector("#circle").style.fill = " #ffffffff";
// }


// function headUnHighlight(){
//     console.log("headUnHighlight");
//     document.querySelector("#circle").style.fill = " #FC3FA1";
// }


// function info(){console.log("info"); document.querySelector(".info-text > h2").textContent = "Fra reklamesøjle til arbejdsløs!";
//     document.querySelector(".info-text > article > p").textContent = "Igår lavede de sponsoreret content for tandblening - næste dag kunne de ikke logge ind. Når platforme forsvinder, forsvinder også levebrødet. Hvad sker der, når ens identitet og indkomst er bygget på likes og likes ikke længere findes?"}

// // Cirkel 2

//     function headHighlight2(){
//         console.log("headHighlight2");
//         document.querySelector("#circle2").style.fill = " #ffffffff";
//     }


// function headUnHighlight2(){
//     console.log("headUnHighlight2");
//     document.querySelector("#circle2").style.fill = " #FC3FA1";
// }



// function info2(){console.log("info2"); document.querySelector(".info-text > h2").textContent = "Branche i frit fald!";
//     document.querySelector(".info-text > article > p").textContent = "Influencer-industrien var vurderet til milliarder. Men ingen forudså hvor hurtigt det hele kunne styrte i grus. Kollapset har ramt bredt - fra mikro-influencers til store navne. Læs om udviklingen og hvordan branchen nu forsøger at finde fodfæste i et post-SoMe-landskab. "}

//     // Cirkel 3

//     function headHighlight3(){
//         console.log("headHighlight3");
//         document.querySelector("#circle3").style.fill = " #ffffffff";
//     }


// function headUnHighlight3(){
//     console.log("headUnHighlight3");
//     document.querySelector("#circle3").style.fill = " #FC3FA1";
// }



// function info3(){console.log("info3"); document.querySelector(".info-text > h2").textContent = "HJÆLP! Jeg er influencer!";
//     document.querySelector(".info-text > article > p").textContent = "Har du mistet din platform, dit publikum eller din plan? Uanset om du leder efter sparring, netværk eller bare nogen at dele panikken med, så er du ikke alene. Vi har samlet råd, overlevelsesstrategier og kontaktformular, så du kan få hjælp her og nu!"}





// Accept-knap
document.querySelector("#accept").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "Fra reklamesøjle til arbejdsløs!";
    document.querySelector(".info-text > article > p").textContent =
      "I går lavede de sponsoreret content for tandblegning – næste dag kunne de ikke logge ind. Når platforme forsvinder, forsvinder også levebrødet. Hvad sker der, når ens identitet og indkomst er bygget på likes og likes ikke længere findes?";
  });
  
  // Decline-knap
  document.querySelector("#decline").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "Branche i frit fald!";
    document.querySelector(".info-text > article > p").textContent =
      "Influencer-industrien var vurderet til milliarder. Men ingen forudså, hvor hurtigt det hele kunne styrte i grus. Kollapset har ramt bredt – fra mikro-influencers til store navne. Læs om udviklingen og hvordan branchen nu forsøger at finde fodfæste i et post-SoMe-landskab.";
  });
  
  // Remind me-knap
  document.querySelector("#Remind_me").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "HJÆLP! Jeg er influencer!";
    document.querySelector(".info-text > article > p").textContent =
      "Har du mistet din platform, dit publikum eller din plan? Uanset om du leder efter sparring, netværk eller bare nogen at dele panikken med – så er du ikke alene. Vi har samlet råd, overlevelsesstrategier og kontaktformular, så du kan få hjælp her og nu!";
  });



// Hover-effekt til accept-knap
document.querySelector("#accept").addEventListener("mouseover", () => {
    document.querySelector("#Accept_cirkel").style.fill = "#79c944";
  });
  document.querySelector("#accept").addEventListener("mouseout", () => {
    document.querySelector("#Accept_cirkel").style.fill = "#fbcded";
  });
  
  // Hover-effekt til decline-knap
  document.querySelector("#decline").addEventListener("mouseover", () => {
    document.querySelector("#Decline_cirkel").style.fill = "#fd0227";
  });
  document.querySelector("#decline").addEventListener("mouseout", () => {
    document.querySelector("#Decline_cirkel").style.fill = "#fbcded";
  });
  
  // Hover-effekt til Remind Me-knap
  document.querySelector("#Remind_me").addEventListener("mouseover", () => {
    document.querySelector("#Remind_me path").style.fill = "#ffffff";
  });
  document.querySelector("#Remind_me").addEventListener("mouseout", () => {
    document.querySelector("#Remind_me path").style.fill = "#fbcded";
  });




// Form


// // ########OPSUMMERING ####### Forvirring, kig på det inde på github

// // 
// const submit= document.querySelector("#submit_btn.");
// function submitForm(){}

// document.querySelector("#name").value;

// function submitForm(){document.querySelector("#sumName").textContent=document.querySelector("#name").value;}


// // RADIO BUTTONS###
// document.querySelector("#sumAntal").textContent = document.querySelector('input[name="zombie-count"]:checked').value;

// // reset button

// document.querySelector("#reset_btn").addEventListener("click",)
// function reset(){
//     document.querySelector("#webform").reset();
//     document.querySelector("#sum").style. visibility="hidden";
// }

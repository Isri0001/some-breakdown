console.log("JavaScript kører!");



// Accept-knap
document.querySelector("#accept").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "Find råd og værktøjer til at navigere i stilheden.";
    document.querySelector(".info-text > article > p").textContent =
      "Råd";
  });
  
  // Decline-knap
  document.querySelector("#decline").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "Mød andre, der står i samme situation.";
    document.querySelector(".info-text > article > p").textContent =
      "Mød andre";
  });
  
  // Remind me-knap
  document.querySelector("#Remind_me").addEventListener("click", () => {
    document.querySelector(".info-text > h2").textContent = "Tag en test og tjek dine abstinenser.";
    document.querySelector(".info-text > article > p").textContent =
      "Savner du notifikationer? Rækker du stadig ud efter din telefon – selvom skærmen er sort? Vores hurtige test hjælper dig med at finde ud af, hvor hårdt dit SoMe-breakdown har ramt. Få indsigt, gode råd og (måske) et grin med på vejen. Du er ikke alene.";
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

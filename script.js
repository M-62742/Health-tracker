"use strict";
const distance = [
  "Obesity",
  "Cardiovascular Diseases (e.g., Heart Disease, Stroke)",
  "Type 2 Diabetes",
  "Osteoporosis (Weak Bones)",
  "Mental Health Issues (e.g., Depression, Anxiety)",
  "Muscle Weakness and Reduced Mobility",
  "Chronic Fatigue Syndrome or Fibromyalgia",
  "High Blood Pressure (Hypertension)",
  "Sleep Disorders (e.g., Insomnia)",
  "Metabolic Syndrome",
  "Joint Pain and Arthritis",
];
const exercise = [
  "Heart Disease",
  "Obesity",
  "Type 2 Diabetes",
  "Mental Health Issues (e.g., Anxiety, Depression)",
  "Weak Muscles and Bones (e.g., Osteoporosis)",
  "Poor Metabolic Health (e.g., Metabolic Syndrome)",
  "Weaker Immune System",
];
const water = [
  "Kidney Stones",
  "Urinary Tract Infections (UTIs)",
  "Constipation",
  "Dehydration",
  "Kidney Damage",
  "Dry Skin and Poor Skin Health",
  "Joint Pain",
  "Poor Cognitive Function"
]
const heart = [
  "Kidney Stones",
  "Urinary Tract Infections (UTIs)",
  "Constipation",
  "Dehydration",
  "Kidney Damage",
  "Dry Skin and Poor Skin Health",
  "Joint Pain",
  "Poor Cognitive Function"
]

const bloodPressureDiseases = [
  "Heart attack",
  "Stroke",
  "Kidney disease",
  "Aneurysm",
  "Hypertensive retinopathy",
  "Dementia",
  "Shock",
  "Organ damage",
  "Fainting and falls",
  "Sepsis"
];
const stepsToOvercomeD = [
  "Follow a balanced diet rich in vegetables, fruits, lean proteins, and whole grains.",
  "Engage in regular physical activity, like brisk walking or swimming, for at least 150 minutes a week.",
  "Stay hydrated by drinking plenty of water.",
  "Maintain 7–9 hours of quality sleep per night.",
  "Consult a dietitian or healthcare provider for personalized advice."
];


const stepsToOvercomeW = [
  "Drink 8–12 cups of water daily to stay hydrated.",
  "Maintain a balanced diet rich in fiber, fruits, and vegetables.",
  "Limit high-sodium and high-oxalate foods.",
  "Incorporate citrus, like lemon water, to prevent kidney stones.",
  "Practice good personal hygiene to reduce UTI risks.",
  "Exercise regularly to improve digestion and joint health.",
  "Use moisturizers and consume omega-3-rich foods for skin health.",
  "Monitor dehydration signs like fatigue and dark urine.",
  "Manage chronic conditions like diabetes and high blood pressure.",
  "Include anti-inflammatory foods like turmeric and fish oil."
];
const stepsToOvercomeE = [
  "Healthy diet", 
  "Regular exercise", 
  "Manage stress", 
  "Take prescribed medications", 
  "Monitor health (e.g., blood sugar, blood pressure)", 
  "Maintain healthy weight", 
  "Get enough sleep", 
  "Quit smoking", 
  "Stay hydrated", 
  "Build a support system"
];
const stepsToOvercomeH = [
  "Stay hydrated", 
  "Eat a balanced diet", 
  "Exercise regularly", 
  "Manage stress", 
  "Get enough sleep", 
  "Regular medical check-ups", 
  "Practice good hygiene", 
  "Limit alcohol and caffeine", 
  "Avoid smoking", 
  "Use skin moisturizers"
];

const stepsToOvercomeB = [
  "Monitor blood pressure regularly", 
  "Adopt a heart-healthy diet (e.g., low sodium, high potassium)", 
  "Exercise regularly (e.g., walking, cycling)", 
  "Limit alcohol consumption", 
  "Quit smoking", 
  "Manage stress (e.g., meditation, yoga)", 
  "Take prescribed medications", 
  "Maintain healthy weight", 
  "Get enough sleep", 
  "Regular check-ups with healthcare provider"
];

function displayName() {
  let name1 = document.getElementById("name").value;
  let nalo = document.getElementById("nalo");
  nalo.textContent = `Name: ${name1}`;


  let age = document.getElementById("age").value;
  let age1 = document.getElementById("age1");
  age1.textContent = `Age : ${age}`;


  let gender = document.getElementById("gender").value;
  let gender1 = document.getElementById("gender1");
  gender1.textContent = `Gender : ${gender}`;



  function appendListItems(elementClass, items) {
    const ulElement = document.querySelector(elementClass); 
    if (!ulElement) {
      console.error(`Element with class "${elementClass}" not found.`);
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;                 
      fragment.appendChild(li);              
    });
    ulElement.appendChild(fragment);
  }



  let distanceValue = document.getElementById("distance").value;
  distanceValue = parseFloat(distanceValue);

   if(distanceValue < 2 && distanceValue > -1) {
    appendListItems(".listob", distance);
    appendListItems(".listof", stepsToOvercomeD)
  }


  let exerciseVal = document.querySelector("#exercise").value;
  console.log(exerciseVal)
  exerciseVal = parseFloat(exerciseVal);
  console.log(exerciseVal)
  if (exerciseVal < 10) {
    console.log("here")
    appendListItems(".listob", exercise);
    appendListItems(".listof",stepsToOvercomeE)
  }






  let waterVal = document.getElementById('water').value;
  waterVal = parseFloat(waterVal);

  if (waterVal < 2000)  {
    appendListItems(".listob", water);
    appendListItems(".listof", stepsToOvercomeW);
  }


  let heartval = document.getElementById("heartRate").value;
  heartval = parseFloat(heartval);
  
  if (heartval < 60 || heartval > 100) {
    appendListItems(".listob", heart);
    appendListItems(".listof",stepsToOvercomeH);
  }
 

  let bp = document.getElementById('bloodPressure').value;
  bp = parseFloat(bp);
  if (bp < 60 || bp > 90) {
    appendListItems(".listob", bloodPressureDiseases);
    appendListItems(".listof", stepsToOvercomeB);

  }
  scrollToElementById("res");

}

function scrollToElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Optional: defines where the element should align in the viewport (start, center, end)
    });
  } else {
    console.log("Element with id '" + elementId + "' not found.");
  }
}

document.addEventListener("DOMContentLoaded", function() {

document.getElementById("submit").addEventListener("click", () => {
  
  console.log("Button clicked");

  let form = document.getElementsByClassName("form")[0];

  let formva = document.querySelector(".inputs")
  // form.style.display = "block";
  //   form.style.height = "auto";
  //   form.style.justifyContent = "spacearound";
  //   displayName();

  if (validateForm(formva)) {
    form.style.display = "block";
    form.style.height = "auto";
    form.style.justifyContent = "spacearound";
    displayName();
  }
  // let btn = document.querySelector(".can");
  // btn.addEventListener("click", () => {
  //   form.style.display = "none";
  //   form.reset();
  //   console.log("Hello clicked");
  // });
});

function validateForm(form) {
  let inputs = form.querySelectorAll("input, select"); // Get all input and select fields
  for (let input of inputs) {
    // Check if the field is required and empty
    if (input.required && input.value.trim() === "") {
      alert("Please fill out all the fields.");
      return false; // Return false if validation fails
    }
  }
  return true; // Return true if all required fields are filled
}

})

document.getElementById('savePDF').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();
  html2canvas(document.getElementById('res'), {
    useCORS: true, // Allow CORS for images
    scale: 2,      // Higher scale for better quality
    logging: true, // Optional, logs info for debugging
  }).then(function(canvas) {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 297; // A4 width in landscape (mm)
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Proportional height
    let position = 10;

    // Add the first page with the content
    doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

    // Check if the content exceeds one page (height is too large)
    if (imgHeight > 287) {  // A4 height in landscape minus some padding
      let totalPages = Math.ceil(imgHeight / 287); // Calculate number of pages
      for (let i = 1; i < totalPages; i++) {
        doc.addPage('a4', 'landscape');
        doc.addImage(imgData, 'PNG', 10, position - (287 * i), imgWidth, imgHeight);
      }
    }

    // Save the generated PDF
    doc.save("form_data.pdf");
  });
});

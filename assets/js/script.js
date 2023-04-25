'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const resumeButtons = document.querySelectorAll('.rsd');
const resumeLink = 'https://drive.google.com/file/d/1T1fb-o2b3NbCVBClb4TS7VDRRief5Lha/view?usp=share_link';

resumeButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.open(resumeLink, '_blank');
    // Download PDF file
   download(resumeLink)
  });
});

function download(resumeLink) {
  console.log("hi")
  const a = document.createElement('a')
  a.href = resumeLink
  a.download = "file.pdf"
  a.click()
  
}


document.getElementById("download-btn").addEventListener("click", function() {
 // window.location.href = "https://drive.google.com/uc?id=1pQG8MxY_9_EEX_f1_jKrBqzPplnfYLJa";
  var link = document.createElement("a");
  link.href = "https://drive.google.com/uc?id=1pQG8MxY_9_EEX_f1_jKrBqzPplnfYLJa";
  link.download = "filename.pdf"; // Replace "filename.pdf" with the name you want to give to the downloaded file
  link.click();
});


/*=============== MENU SHOW Y HIDDEN =====================*/
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

/* =============MENU SHOW================= */
/* validate if constants exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*================== MENU CLOSE ===================*/
/* validate if constants exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*================== REMOVE MENU MOBILE ==========================*/
const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(element => {
    element.addEventListener('click', linkAction)
});
function linkAction(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show-menu');
}

/* ================  ACCORDIAN SKILLS     ====================== */
const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll(".skills_header");
console.log(skillsContent);
console.log(skillsHeader);

function toggleSkills(){
    let itemClass = this.parentNode.className;
    console.log(this.parentNode.ClassName);
    for(i = 0; i < skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_close'
        //console.log(skillsContent[i].className);
    }
    if(itemClass == 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
    
}

skillsHeader.forEach(element => {
    element.addEventListener('click',toggleSkills );
});

/* ===================  QUALIFICATION TABS  ===================== */
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        });
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active');
    })
});

/* =====================  SERVICES MODAL  ====================== */
const modalViews = document.querySelectorAll(".services_modal");
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}


modalBtns.forEach((modalBtn, i)=>{
   modalBtn.addEventListener('click', ()=>{
       modal(i);
   })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    })
})

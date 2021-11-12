const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu');
// const navLogo = document.querySelector('#navbar__logo');
const mobleMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobleMenu);
//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);

var icon = document.getElementById("dark_mode");
icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.herf = "fa-instagram";
    }else{
        icon.herf = "fa-moon";
    }
}


//about me
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
           tabContent.classList.remove('about_active')
        })
        target.classList.add('about_active')

        tabs.forEach(tab =>{
            tab.classList.remove('about_active')
        })
        tab.classList.add('about_active')
    })
})

//skills section
const modalViews = document.querySelectorAll('.skills_modal');
const modalBtns = document.querySelectorAll('.skills_button');
const modalCloses = document.querySelectorAll('.skills_modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active')
        })
    })
})



// const photo = document.querySelectorAll(".photo .image"),
//     previewBox = document.querySelector(".preview-box"),
//     previewImg = previewBox.querySelector("img"),
//     closeIcon = previewBox.querySelector(".icon");
//
// window.onload = () => {
//     for (let i=0; i < photo.length; i++){
//         let newIntex = i;
//         photo[i].onclick = () => {
//             console.log(i);
//             function preview(){
//                 let selectedImgUrl = photo[i].querySelector("img").src;
//                 previewImg.src = selectedImgUrl
//                 console.log(selectedImgUrl);
//             }
//             const prebtn = document.querySelector(".pre");
//             const nextbtn = document.querySelector(".next");
//             prebtn.onclick = () => {
//                 newIntex--;
//                 if(newIntex == 0){
//                     preview();
//                     prebtn.style.display = "none";
//                 }else{
//                     preview();
//                 }
//             }
//
//             nextbtn.onclick = () => {
//                 newIntex++;
//                 if(newIntex >= photo.length - 1){
//                     preview();
//                     nextbtn.style.display = "none";
//                 }else{
//                     preview();
//                 }
//             }
//
//             preview();
//             previewBox.classList.add("show");
//
//             closeIcon.onclick = () =>{
//                 previewBox.classList.remove("show")
//             }
//         }
//     }
// }

const photo  = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img");
    // closeIcon = previewBox.querySelector(".icon"),
window.onload = ()=>{
    for (let i = 0; i < photo.length; i++) {
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        photo[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                let imageURL = photo[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function

            // const preBtn = document.querySelector(".pre");
            // const nextBtn = document.querySelector(".next");
            // if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
            //     preBtn.style.display = "none";
            // }
            // if(newIndex >= photo.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
            //     nextBtn.style.display = "none";
            // }
            // preBtn.onclick = ()=>{
            //     newIndex--; //decrement index
            //     if(newIndex == 0){
            //         preview();
            //         preBtn.style.display = "none";
            //     }else{
            //         preview();
            //         nextBtn.style.display = "block";
            //     }
            // }
            // nextBtn.onclick = ()=>{
            //     newIndex++; //increment index
            //     if(newIndex >= photo.length - 1){
            //         preview();
            //         nextBtn.style.display = "none";
            //     }else{
            //         preview();
            //         preBtn.style.display = "block";
            //     }
            // }
            document.querySelector("body").style.overflow = "hidden";
        //     previewBox.classList.add("show");
        //     closeIcon.onclick = ()=>{
        //         newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        //         // preBtn.style.display = "block";
        //         // nextBtn.style.display = "block";
        //         previewBox.classList.remove("show");
        //         document.querySelector("body").style.overflow = "scroll";
        //     }
        }

    }
}
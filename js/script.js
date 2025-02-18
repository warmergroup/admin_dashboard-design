function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// const toggle = document.querySelector(".toggle");
// toggle.addEventListener('click',function(){
//     toggle.classList.toggle('active')
// })
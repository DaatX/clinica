/*Menu despegable*/

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

/*click para despegable*/

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/*para remover el despegable*/

menu.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
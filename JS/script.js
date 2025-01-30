let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        if(top=>offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function openTab(event, tabId) {
    // Hide all tab items with slide-out animation
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
        item.style.animation = 'slideOutToLeft 0.5s ease-in-out';
    });

    // Show the clicked tab content with slide-in animation
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
    tabContent.style.animation = 'slideInFromRight 0.5s ease-in-out';
}

$('.team-members').slick({
    slidesToShow: 3,
    speed: 300,
    prevArrow:'#left-arrow',
    nextArrow:'#right-arrow',
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]});
const main = document.querySelector('.main');
const about = document.querySelector('.popo');
const popup2 = document.querySelector('.popup2');
const ok = document.querySelector('.info-ok-btn');

about.onclick=()=>{
    popup2.classList.add('active');
    main.classList.add('active');
};
ok.onclick=()=>{
    popup2.classList.remove('active');
    main.classList.remove('active');
};

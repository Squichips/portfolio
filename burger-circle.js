
let sections = document.querySelectorAll('section');
let lienNav = document.querySelectorAll('nav a');
let navbar = document.querySelector('.content-nav');
let navbar123 = document.querySelector('.responsive-bar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            lienNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });

            let backgroundColor = window.getComputedStyle(sec).backgroundColor;
            navbar.style.backgroundColor = backgroundColor;
            navbar123.style.backgroundColor = backgroundColor;
        }
    });
};


let number = document.getElementById("HTML") ;
let counter = 0;
setInterval(() => {
    if(counter == 60){
        clearInterval();
        
    }else{
         counter += 1
    number.innerHTML = counter + "%"
    }
   
}, 35);
let number1 = document.getElementById("CSS") ;
let counter1 = 0;
setInterval(() => {
    if(counter1 == 50){
        clearInterval();
    }else{
         counter1 += 1
    number1.innerHTML = counter + "%"
    }
   
}, 35);
let number2 = document.getElementById("JS") ;
let counter2 = 0;
setInterval(() => {
    if(counter2 == 15){
        clearInterval();
    }else{
         counter2 += 1
    number2.innerHTML = counter + "%"
    }
   
}, 35);
let number3 = document.getElementById("SQL") ;
let counter3 = 0;
setInterval(() => {
    if(counter3 == 30){
        clearInterval();
    }else{
         counter3 += 1
    number3.innerHTML = counter + "%"
    }
   
}, 35);
let number4 = document.getElementById("PHP") ;
let counter4 = 0;
setInterval(() => {
    if(counter4 == 10){
        clearInterval();
    }else{
         counter4 += 1
    number4.innerHTML = counter + "%"
    }
   
}, 35);




 
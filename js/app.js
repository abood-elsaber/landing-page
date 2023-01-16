/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navUl = document.getElementById('navbar__list')
const sections = Array.from(document.querySelectorAll('section'));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function creatList ()
{
    for( const sec of sections)
    {
        list = document.createElement('li');
        list.innerHTML = `<li><a href = '#${sec.id}' data-nav = '${sec.id}' class="menu__link">${sec.dataset.nav}</a>`;
        navUl.appendChild(list);
    }

}
    creatList();

// Add class 'active' to section when near top of viewport


    window.onscroll = function ()
{

    document.querySelectorAll("section").forEach(function(active)
    {
        if
        ( active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150 ) {
            active.classList.add("your-active-class");
         } else {
            active.classList.remove("your-active-class");
        }
    });
};




// Scroll to anchor ID using scrollTO event
navUl.addEventListener("click" , (toSec)=> {
    toSec.preventDefault();
    if(toSec.target.dataset.nav){
        document.getElementById(`${toSec.target.dataset.nav}`)
        .scrollIntoView({ behavior: 'smooth'});
        setTimeout(()=> {
            location.hash = `${toSec.target.dataset.nav}`
        } , 170);
    }
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active








    






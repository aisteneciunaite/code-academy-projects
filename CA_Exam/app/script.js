// Scroll section into view
//create event listeners
//on click
//identify clicked section id
//scroll corresponding section into view

var arr = document.querySelectorAll('body > header > div > nav > a');

for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener('click', function() {
        document.getElementById(this.getAttribute('data-target')).scrollIntoView({behavior: "smooth"});
        event.preventDefault();
    })    
}


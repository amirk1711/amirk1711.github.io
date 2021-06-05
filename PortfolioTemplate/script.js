var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
var interval;

for(var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        // trim() is used to cut trim spaces
        // and then convert to lwer cases
        // now fetch target section
        var targetSection = document.getElementById(targetSectionId);

        // we vannot pass targetSection as an argument to function scrollVertically
        // bcz then it will be a fn call not fn passing
        // so we pass arguments alongside setInterval after time interval
        interval = setInterval(scrollVertically, 20, targetSection);    

        // or we can wtite like this
        // interval = setInterval(function(){
        //     scrollVertically(targetSection);
        // }, 20);
    });
}


function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// script for autofill skillbar


var progressBars = document.querySelectorAll('.skill-progress > div');
window.addEventListener('scroll', checkScroll);

function intialiseBar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for(let bars of progressBars){
    intialiseBar(bars);
}


function fillBar(bar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(currentWidth > targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}


function checkScroll(){
    for(let bar of progressBars){
        let barCoordinate = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && (barCoordinate.top <= (window.innerHeight - barCoordinate.height))){
            // this will only execute when skill container is visible on the screen
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(barCoordinate.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            intialiseBar(bar);
        }
    }
}
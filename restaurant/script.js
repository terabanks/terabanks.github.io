//.....Query Selectors.....//

//Navigation
const navHomeParent = document.querySelector("ul");
const navHomeChildren = navHomeParent.children;

//Body
const homeParent = document.querySelector(".home-border");
const homeChildren = homeParent.children;

//Form
const contactForm = document.querySelector(".form");
const submitted = document.querySelector(".submitted-form");

//.....Event Listeners.....//
for (let i = 0; i < navHomeChildren.length; i++) {
    homeFuncList = [showStory, showMenu, showChef, showContact];
    navHomeChildren[i].addEventListener("click", homeFuncList[i]);
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.style.display = "none";
    submitted.style.display = "flex";
});

//.....Functions.....//
function showStory(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < homeChildren.length; i++) {
        homeChildren[i].style.display = "none";
        console.log(this);
    }

    homeChildren[1].style.display = "flex";
    e.stopPropagation;
}
function showMenu(e) {
    e.preventDefault(); //Prevent page from auto refreshing
    window.location = "menu.html";
    e.stopPropagation;
}
function showChef(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < homeChildren.length; i++) {
        homeChildren[i].style.display = "none";
    }

    homeChildren[2].style.display = "flex";
    e.stopPropagation;
}
function showContact(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < homeChildren.length; i++) {
        homeChildren[i].style.display = "none";
    }

    homeChildren[3].style.display = "flex";
    e.stopPropagation;
}





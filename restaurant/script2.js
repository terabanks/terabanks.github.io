
//.....Query Selectors.....//
//--Body--//
const menuParent = document.querySelector(".menu-border");
const menuChildren = menuParent.children;

//--Navigation--//
const navMenuParent = document.querySelector("ul");
const navMenuChildren = navMenuParent.children;

//.....Event Listeners.....//
for (let i = 0; i < navMenuChildren.length; i++) {
    menuFuncList = [showApps, showEntrees, showSoupSides, showSalads, showDesserts, showDrinks];
    navMenuChildren[i].addEventListener("click", menuFuncList[i]);
}

//.....Functions.....//
function showApps(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[1].style.display = "flex";
    e.stopPropagation;
}

function showEntrees(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[2].style.display = "flex";
    e.stopPropagation;
}

function showSoupSides(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[3].style.display = "flex";
    e.stopPropagation;
}

function showSalads(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[4].style.display = "flex";
    e.stopPropagation;
}

function showDesserts(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[5].style.display = "flex";
    e.stopPropagation;
}

function showDrinks(e) {
    e.preventDefault(); //Prevent page from auto refreshing

    for (let i = 0; i < menuChildren.length; i++) {
        menuChildren[i].style.display = "none";
    }

    menuChildren[6].style.display = "flex";
    e.stopPropagation;
}



function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
document.getElementsByTagName("title")[0].textContent = "Mili's Portofolio"
    // Your code here
}

function changeHeader() {
    // Change the name in the h1 of the page to your name
document.getElementsByTagName("h1")[0].textContent = "Marian"
    // Your code here
}

function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
document.getElementsByTagName("p")[0].textContent = "...dj guga la felipa..."
    // Your code here
}

export {
    changeTitle,
    changeHeader,
    changeAboutMe
}
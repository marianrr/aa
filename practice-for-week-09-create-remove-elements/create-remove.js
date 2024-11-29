/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        const url = data.message; // URL of new dog image
        console.log(url)

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code hereh

//const breed = JSON.parse(url)
//console.log(breed)


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
const dog1 = document.createElement("img")
console.log(dog1)
dog1.setAttribute("src", url)
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
document.getElementsByTagName("ul")[0].appendChild(dog1)
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

const rmv = document.getElementsByTagName("ul")[0].firstElementChild
document.getElementsByTagName("ul")[0].removeChild(rmv) 



    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
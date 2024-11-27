const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.getElementsByClassName("seed"))
    // 2. Get all seedless fruit elements
    // Your code here


    console.log(document.getElementsByClassName("seedless"))
    // 3. Get first seedless fruit element
    // Your code here


    console.log(document.getElementsByClassName("seedless")[0])
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here


    console.log(document.getElementsByTagName("span")[0].textContent)
    // 5. Get all children of element "wrapper"
    // Your code here


    console.log(document.getElementById("wrapper"))
    // 6. Get all odd number list items in the list
    // Your code here


    console.log(document.getElementsByClassName("odd"))
    // 7. Get all even number list items in the list
    // Your code here
    const list1 = document.getElementsByTagName("ol")[0].children
for(let i = 1; i < list1.length; i += 2)  { 
    console.log(list1[i])
}
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here


    console.log(document.querySelector("p>a").textContent)
    // 9. Get "Amazon" list element
    // Your code here


    console.log(document.getElementsByClassName("social")[0])
    // 10. Get all unicorn list elements (not the image element)
    // Your code here

    console.log()
}

window.onload = select;
/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here

// function num1() {
//     return 1
// }

//  async function num2() {
//     return 2
// }
//  console.log('num1', num1())
//  console.log('num2', num2())
//  num2()
//  .then(result => console.log(result))

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

// async function miau() {
//     const lol = await num1()
//     console.log(lol)
//     console.log("waiting...")

// }
// miau()
// .then(() => console.log("kikila"))




/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here


// async function lo() {
//     let r = new Promise(resolve => {
//         resolve("dj guga")
//     console.log("kikila")
//     }
//     )
//     const pr = new Promise(resolve => {
//         setTimeout(() => {
//             resolve("done!!!")
//         }, 1500)
//     })
//     .then(r => console.log("second promise is", r))
// const res = await r
// console.log("my promise is", res)

// }

// lo()

//

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here











/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms){
return new Promise (resolve => setTimeout(resolve, ms))
}

// function cos(ms) {
// wait(ms)
// .then(() => console.log("...dj guga la felipa..."))
// }

// cos(2000)


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */


const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    for (let i = 1; i < 10; i++) {
        const random = Math.random();
        wait(2000 + random * 1000)
            .then(() => tryRandomPromise(random))
            .then(result => console.log('random try #', i, result))
            .catch(error => console.error('random try #', i, error));
    }
});





/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
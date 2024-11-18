/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
// const url = "/posts"
// const body = { message: "kikila" }
// headers = {
//   "Content-Type": "application/json"
// }
// const options = {
//   method: "GET",
//   headers: headers,
//   body: body
// }
// return fetch(url, options)
// .then(res => res.json())
// .then(data => console.log(data))





/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here

const url = "/posts"
const headers = { "Content-Type": "application/json"}
const body = JSON.stringify({message: "kikila one two three"})
const options = {
  method: "POST",
  headers: headers,
  body: body
}

return fetch(url, options)




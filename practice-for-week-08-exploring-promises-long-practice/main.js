// let didi = fetch("https://jsonplaceholder.org/posts")
// .then(res => res.json())
// .then(data => { 
//     console.log(data[0].id, "---", data[0].category, "---", data[0].updatedAt)

// return data.map(elem => console.log(elem.id, "---", elem.category, "---", elem.updatedAt))

// })


async function miau(li) {
    console.log(li, "start")
    await console.log(li, "middle")
    console.log(li, "end")
}

miau("first")
miau("second")
miau("third")
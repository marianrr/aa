function lo() {
    console.log("din functie")
    return () => console.log("din return")
}

lo()()
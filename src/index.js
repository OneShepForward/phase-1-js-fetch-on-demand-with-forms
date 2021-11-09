const init = () => {
    // set var for form
    const inputForm = document.querySelector("form");
    //  add listener
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault(); // stop refresh after submit
        // console.log(e);
        // console.log(e.target.children[1].value); // use of the target method
        const input = document.querySelector("#searchByID");
        // console.log(input);
        fetch(`http://localhost:3000/movies/${input.value}`) //returns a promise
        .then(resp => resp.json()) //returns another promise
        .then(data => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            title.innerText = data.title;
            summary.innerText = data.summary;
        }).catch(error => {
            console.warn(`Sorry, film buff. There was an error: ${error}`)
        });
        e.target.reset();
    });

}

document.addEventListener('DOMContentLoaded', init);
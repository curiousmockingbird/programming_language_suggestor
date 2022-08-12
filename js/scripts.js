window.onload = function () {
    let form = document.querySelector("form");

    function displayResults(event) {
        event.preventDefault();
        // get the user input values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = firstName + " " + lastName;
        const age = document.getElementById("userAge").value;
        const movies = document.querySelector("input[name='radio']:checked").value;
        const freeTime = document.getElementById("hobby").value;
        const animal = document.querySelector("input[name='animal']:checked").value;
        const scale = document.getElementById("range").value;

        document.getElementById("firstName").value = null;
        document.getElementById("lastName").value = null;
        document.getElementById("userAge").value = null;
        document.querySelector("input[name='radio']:checked").value = null;
        document.getElementById("hobby").value = null;
        document.querySelector("input[name='animal']:checked").value = null;
        document.getElementById("range").value = null;



    };

    form.addEventListener("submit", displayResults);
}
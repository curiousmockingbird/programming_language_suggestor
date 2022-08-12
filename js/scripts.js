window.onload = function () {
    let form = document.querySelector("form");

    function displayResults(event) {
        event.preventDefault();
        // get the user input values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = firstName + " " + lastName;
        const age = parseInt(document.getElementById("userAge").value);
        console.log(age);
        const movies = parseInt(document.querySelector("input[name='radio']:checked").value);
        console.log(movies);

        const freeTime = parseInt(document.getElementById("hobby").value);
        const animal = parseInt(document.querySelector("input[name='animal']:checked").value);
        const scale = document.getElementById("range").value;

        if ( age <= 30 && movies == 1 && freeTime === 1 && animal === 1 && scale < 5 )
         {
            console.log("Works");
            /* document.querySelector("div.javascript").removeAttribute("class", "hidden");*/        };

    };
    // function to clear forms
    function clearForm () {
        document.getElementById("firstName").value = null;
        document.getElementById("lastName").value = null;
        document.getElementById("userAge").value = null;
        document.getElementById("hobby").value = null;
        document.getElementById("range").value = "0";
    };

    form.addEventListener("submit", displayResults);
    form.addEventListener("submit", clearForm);
}
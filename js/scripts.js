window.onload = function () {
    let form = document.querySelector("form");

    function displayResults(event) {
        event.preventDefault();
        // get the user input values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = firstName + " " + lastName;
        const age = parseInt(document.getElementById("userAge").value);
        const movies = parseInt(document.querySelector("input[name='radio']:checked").value);
        const freeTime = parseInt(document.getElementById("hobby").value);
        const animal = parseInt(document.querySelector("input[name='animal']:checked").value);
        const scale = document.getElementById("range").value;
        // conditions for suggesting JavaScript after submission 
        if (age <= 30 && movies == 1 && freeTime === 1 && animal === 1 && scale < 5) {
            document.getElementById("results").removeAttribute("class", "hidden");
            document.getElementById("results").setAttribute("class", "col-6 bg-primary rule");
            document.getElementById("nameOfUser").innerHTML = userName + ",";
            document.getElementById("language").innerHTML = "JavaScript";

        }
        // conditions for suggesting C# after submission 
        else if (age > 30 && movies === 2 && freeTime === 2 && animal === 2 && scale > 5) {
            document.getElementById("results").removeAttribute("class", "hidden");
            document.getElementById("results").setAttribute("class", "col-6 bg-secondary rule");
            document.getElementById("nameOfUser").innerHTML = userName + ",";
            document.getElementById("language").innerHTML = "C#";

        }
        // else, suggest Python after submission 
        else {
            document.getElementById("results").removeAttribute("class", "hidden");
            document.getElementById("results").setAttribute("class", "col-6 bg-danger rule");
            document.getElementById("nameOfUser").innerHTML = userName + ",";
            document.getElementById("language").innerHTML = "Python";
        }

    };
    // function to clear forms
    function clearForm() {
        document.getElementById("firstName").value = null;
        document.getElementById("lastName").value = null;
        document.getElementById("userAge").value = null;
        document.getElementById("hobby").value = null;
        document.getElementById("range").value = "0";
    };

    form.addEventListener("submit", displayResults);
    form.addEventListener("submit", clearForm);
}
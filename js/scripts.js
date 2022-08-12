window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = firstName + " " + lastName;

        const age = document.getElementById("userAge").value;
        const movies = document.querySelector("input[name='radio']:checked").value;

        console.log(movies);

        const freeTime = document.getElementById("hobby").value;
        const animal = document.querySelector("input[name='animal']:checked").value;
        const scale = document.getElementById("range").value;

        console.log(freeTime);





    });
}
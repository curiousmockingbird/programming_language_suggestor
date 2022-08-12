window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const movies = document.querySelector("input[name='radio']:checked").value;
        console.log(userName);
        console.log(movies);


    });
}
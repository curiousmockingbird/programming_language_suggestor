window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        console.log(userName);

    });
}

// function to access user input and branching based on input
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
  const scale = parseInt(document.getElementById("range").value);

  let average = movies + freeTime + animal + scale;

  document.getElementById("results").setAttribute("class", "hidden");

  // display error message if user doesn't type in first name or last name or doesn't select free time activity 
  if (firstName === "" || lastName === "" || freeTime === 0) {
    document.getElementById("error").removeAttribute("class", "hidden");
    document.getElementById("error").setAttribute("class", "col-6 rule");
  // display error message after first successful submision, if the user doesn't type in first name or last name or doesn't select free time activity again
  // removes previous language seggested
  } else if (firstName === "" || lastName === "" || freeTime === 0 && average !== 0) {
    document.getElementById("error").removeAttribute("class", "hidden");
    document.getElementById("error").setAttribute("class", "col-6 rule");
    // conditions for suggesting JavaScript after submission 
  } else if (average >= 3 && average <= 8) {
    document.getElementById("error").setAttribute("class", "hidden");

    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("results").setAttribute("class", "col-6 bg-primary rule");
    document.getElementById("nameOfUser").innerHTML = userName + ",";
    document.getElementById("language").innerHTML = "JavaScript";
  }
  // conditions for suggesting C# after submission 
  else if (average > 8 && average < 15) {
    document.getElementById("error").setAttribute("class", "hidden");

    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("results").setAttribute("class", "col-6 bg-secondary rule");
    document.getElementById("nameOfUser").innerHTML = userName + ",";
    document.getElementById("language").innerHTML = "C#";

  }
  // else, suggest Python after submission 
  else {
    document.getElementById("error").setAttribute("class", "hidden");

    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("results").setAttribute("class", "col-6 bg-danger rule");
    document.getElementById("nameOfUser").innerHTML = userName + ",";
    document.getElementById("language").innerHTML = "Python";

  }
  // sets the average to 0
  average = 0;
}

// function to clear form after submission
function clearForm() {
  document.querySelector("form").reset();

};

//eventListener for load event
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  // eventListeners for submit event
  form.addEventListener("submit", displayResults);
  form.addEventListener("submit", clearForm);
});

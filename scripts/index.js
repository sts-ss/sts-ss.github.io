function sgpa() {
  b1.style.visibility = "visible";
  document.getElementById("ind").innerHTML =
    "Continue to calculate Semester GPA";
}

function cgpa() {
  b2.style.visibility = "visible";
  document.getElementById("ind").innerHTML =
    "Continue to calculate Cummulative GPA";
}

function rst() {
  b1.style.visibility = "hidden";
  b2.style.visibility = "hidden";
  document.getElementById("ind").innerHTML =
    "Select one of the given options to calculate grade point average.";
}

function calc() {
  document.getElementById("ind").value = "IDK.IDC";
}

document.getElementById("sgpa").addEventListener("click", sgpa);
document.getElementById("cgpa").addEventListener("click", cgpa);
document.getElementById("rst0").addEventListener("click", rst);
document.getElementById("cal1").addEventListener("click", calc);
document.getElementById("cal2").addEventListener("click", calc);
document.getElementById("rst1").addEventListener("click", clear1);
document.getElementById("rst2").addEventListener("click", clear2);

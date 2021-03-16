var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    document.getElementById("main").style.display = "none";
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function myFunction() {
    var x = document.getElementById("myInt");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}; 
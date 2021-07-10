var Sandwich = document.getElementsByClassName("sandwich")[0];

Sandwich.onclick = function Changing() {
    var View = document.getElementsByClassName("list-hidden")[0].style.display;
    if (View === "none") {
        document.getElementsByClassName("list-hidden")[0].style.display = "block";
        document.getElementsByClassName("list-hidden")[1].style.display = "block";
        document.getElementsByClassName("list-hidden")[2].style.display = "block";
    }
    else {
        document.getElementsByClassName("list-hidden")[0].style.display = "none";
        document.getElementsByClassName("list-hidden")[1].style.display = "none";
        document.getElementsByClassName("list-hidden")[2].style.display = "none";
    }
}
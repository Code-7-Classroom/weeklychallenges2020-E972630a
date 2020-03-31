var lessExpensive = [];
var moreExpensive = [];
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("fragrance");
  if (c == "all")
    c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1)
      addClass(x[i], "show");
  }
}
function addClass(element, name) {
  var i, lessExpensive, moreExpensive;
  lessExpensive = element.className.split(" ");
  moreExpensive = name.split(" ");
  for (i = 0; i < moreExpensive.length; i++) {
    if (lessExpensive.indexOf(moreExpensive[i]) == -1) {
      element.className += " " + moreExpensive[i];
    }
  }
}
function removeClass(element, name) {
  var i, lessExpensive, moreExpensive;
  lessExpensive = element.className.split(" ");
  moreExpensive = name.split(" ");
  for (i = 0; i < moreExpensive.length; i++) {
    while (lessExpensive.indexOf(moreExpensive[i]) > -1) {
      lessExpensive.splice(lessExpensive.indexOf(moreExpensive[i]), 1);
    }
  }
  element.className = lessExpensive.join(" ");
}

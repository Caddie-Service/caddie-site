function populateLineNumbers() {
  var container = document.getElementsByClassName("line-numbers")[0];
  var numbers = "";
  for(i=1; i<=100; i++) {
    numbers += i + " ";
  }
  container.innerHTML = numbers;
}
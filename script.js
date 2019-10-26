let main = function () {
  let priceInputElems = document.getElementsByClassName("priceInputs");
  let setupEvents = function () {
    Array.prototype.forEach.call(priceInputElems, (indivElem) => {
      indivElem.addEventListener('keyup', calculate);
    });
  }
  
  let calculate = function (inputElems) {
    let count = 0;
    let totalPrice = document.getElementById('total');
    Array.prototype.forEach.call(priceInputElems, (indivElem) => {
      if (indivElem.value != "") {
        count = count + indivElem.valueAsNumber;
      }
    });
    
    totalPrice.innerHTML = count;
    // console.log(count);
    count = 0;
  }
  setupEvents();
}

if (document.readyState === "complete") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
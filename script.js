let main = function () {
  let numInputs = 1;
  let newLabelElem;
  let newInputElem;
  let priceDiv = document.getElementById('priceContainer')
  let priceInputs = document.getElementsByClassName('priceInputs');
  let addInputBtn = document.getElementById('addInputBtn');

  let setupEvents = function () {
    Array.prototype.forEach.call(priceInputs, (indivElem) => {
      indivElem.addEventListener('keyup', calculate);
    });

    addInputBtn.addEventListener('click', (e) => {

      numInputs = numInputs + 1;

      newLabelElem = document.createElement('label');
      newInputElem = document.createElement('input');
      
      newLabelElem.innerHTML = "Price " + numInputs + ": ";

      newInputElem.setAttribute('class', 'priceInputs');
      newInputElem.setAttribute('type', 'number');
      newInputElem.setAttribute('placeholder', '$0.00');

      newLabelElem.append(newInputElem);
      priceDiv.append(newLabelElem);
    });
  }

  let calculate = function () {
    let count = 0;
    let totalPrice = document.getElementById('total');
    Array.prototype.forEach.call(priceInputs, (indivElem) => {
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

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
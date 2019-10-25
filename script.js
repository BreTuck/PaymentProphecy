let calculate = () => {
    let count = 0;

    let allPrices = document.getElementsByClassName("prices");
    let totalPrice = document.getElementById('total');

    Array.prototype.forEach.call(allPrices, (price) => {
      price.addEventListener('change', (e) => {
        Array.prototype.forEach.call(allPrices, (price) => {
            if (price.value != "") {
                count = count + price.valueAsNumber;
            }
        });
        totalPrice.innerHTML = count;
        // console.log(count);
        count = 0;
      });
    });
}

if (document.readyState === "complete") {
     calculate();
} else {
      document.addEventListener("DOMContentLoaded", calculate);
}
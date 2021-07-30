let total = 12000;
let delivery = 0;
const inputBox = document.querySelector('#delivery-mileage');
const check = document.querySelector("#delivery");
const totalBox = document.getElementById('total-cost');
const ghost = document.getElementById('ghost');

inputBox.addEventListener('blur', function(event) {
  let mileage = event.target.value;
  delivery = 0;
  if (+mileage >= 0) {
    if (check.checked) {
      delivery = +mileage;
    }
  }
  updateDOM()
});

check.addEventListener('click', function(e) {
  delivery = 0;
  if (e.target.checked) {
    delivery = +inputBox.value;
  }
  updateDOM()
});


[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
    item.addEventListener('click', function(e) {
         if (e.target.id != "delivery"){
            if (e.target.checked) {
                total += parseInt(e.target.value, 10)
              } else {
                total -= parseInt(e.target.value, 10)
              }
       }
      updateDOM()
    })
  });
  
  
function updateDOM() {
    totalBox.innerHTML = `$${(total+delivery).toLocaleString("en-US")}.00`
    ghost.value = total+delivery;
}

  document.addEventListener('click', e=> {
    console.log(e.target);
  })


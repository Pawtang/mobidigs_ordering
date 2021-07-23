let total = 12000;
const mileageElem = document.getElementById('delivery-mileage');

[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
  item.addEventListener('click', function(e) {
    const mileage = mileageElem.value;
      if (e.target.id == "delivery"){
        if (parseInt(mileage, 10) >= 0) {
        if (e.target.checked) {
          total += parseInt(mileage, 10)
        } else {
          total -= parseInt(mileage, 10)
        }
      }
    }
      else{
        if (e.target.checked) {
          total += parseInt(e.target.value, 10)
        } else {
          total -= parseInt(e.target.value, 10)
        }
    }
    document.getElementById('total-cost').innerHTML = `$${total.toLocaleString("en-US")}.00`
  })

})


document.addEventListener('click', e=> {
  console.log(e.target);

})

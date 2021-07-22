let total = 12000;
const mileage = "document.getElementById('delivery-mileage').value"
[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
  item.addEventListener('click', function(e) {
      if (e.target.id == "delivery"){
        if mileage >= 0 {
        if (e.target.checked) {
          total += parseInt(mileage)
        } else {
          total -= parseInt(mileage)
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

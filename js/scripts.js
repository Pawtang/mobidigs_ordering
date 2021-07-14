let total = 12000;
[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
  item.addEventListener('click', function(e) {
      if (e.target.id == "delivery"){
        if (e.target.checked) {
          total += parseInt(document.getElementById("delivery-mileage").value)
        } else {
          total -= parseInt(document.getElementById("delivery-mileage").value)
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

let total = 12000;
const mileageElem = document.getElementById('delivery-mileage');
let updateVal = 0;

document.getElementById('delivery-mileage').addEventListener('blur', function () {
  const check = document.getElementById('delivery');
    let mileage = mileageElem.value;
        if (parseInt(mileage, 10) >= 0) {
        if (check.checked) {
          total += parseInt(mileage, 10)
        } else {
          total -= parseInt(mileage, 10)
        }
  }
  document.getElementById('total-cost').innerHTML = `$${total.toLocaleString("en-US")}.00`;
});

[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
  item.addEventListener('click', function(e) {
       if (e.target.id == "delivery"){
    //     let mileage = mileageElem.value;
    //     if (parseInt(mileage, 10) >= 0) {
    //     if (e.target.checked) {
    //       updateVal = mileageElem.value;
    //       total += parseInt(updateVal, 10)
    //     } else {
    //       total -= parseInt(updateVal, 10)
    //     }
    //   }
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

});


document.addEventListener('click', e=> {
  console.log(e.target);

})

let total = 0;
[...document.getElementsByClassName('form-check-input has-value')].forEach(function(item) {
  item.addEventListener('click', function(e) {
      console.log('somethings working')
    if (e.target.checked) {
      total += parseInt(e.target.value, 10)
      console.log('checked');
    } else {
      total -= parseInt(e.target.value, 10)
      console.log('unchecked');
    }
    document.getElementById('total-cost').innerHTML = `$${total}.00`
  })

})
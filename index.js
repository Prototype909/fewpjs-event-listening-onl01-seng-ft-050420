function displayAlert(message) {
  alert(message);
}

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', displayAlert('I was clicked!'))
    //     input.addEventListener('click', function(event) {
    // alert('I was clicked!');
    // });
}

function displayAlert() {
  alert('I was clicked!');
}

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', displayAlert())
    //     input.addEventListener('click', function(event) {
    // alert('I was clicked!');
    // });
}

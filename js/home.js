
// step 1
document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    const addMonyInput = document.getElementById('input-add-mony').value;
    console.log(addMonyInput);
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
})
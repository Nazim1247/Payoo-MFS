
// step 1
document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    // step 2
    const addMonyInput = document.getElementById('input-add-mony').value;
    console.log(addMonyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput);
    // step 3
    if(pinNumberInput === '1234'){
        console.log('adding mony to your account');
        // step 4
    const balance = document.getElementById('account-balance').innerText;
    console.log(typeof balance);
    // step 5
    const addMonyNumber = parseFloat(addMonyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMonyNumber + balanceNumber;
    console.log(newBalance);
    // step 6
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add mony! please try again')
    }
    
})
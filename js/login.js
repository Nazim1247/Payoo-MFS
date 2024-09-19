// console.log('clicked');

// step 1 set event number
document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2 prevent default (prevent reloading browser)
    event.preventDefault();  // <-------- vejal to beginner

// step 3 get the phone number and pin
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber, pinNumber);
// step 4 validate phone and pin
if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html'
}
else{
    alert('wrong phone or pin');
}
})
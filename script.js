//login button 
document.getElementById('login-btn')
    .addEventListener('click', function(e){
        e.preventDefault()
        const mobileNumber = 12345678910;
        const pinNumber = 1234;

        const mobileNumberValue = document.getElementById('mobile-number').value;
        const mobileNumberValConverter = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValConverter = parseInt(pinNumberValue);

        if(mobileNumberValConverter === mobileNumber && pinNumberValConverter === pinNumber){
            document.getElementById("mobile-number").value = '';
            document.getElementById("pin-number").value = '';
            window.location.href = "home.html";
        }
        else{
            alert("Invalid credentials");
        }

    })
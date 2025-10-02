const validPin = 1234;
const couponPin = 1234;

//functions to get input values
function getInputValNumber(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseInt(inputValue);
    return inputValueNumber;
}

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

//function to get innerText
function getInnerTextNum(id){
    const val = document.getElementById(id).innerText;
    const valNumber = parseInt(val);
    return valNumber;
}

//function to set innerText
function setInnerText(val){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = val;
}


//function to active button when toggling
function handleBtn(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for(const btn of formBtns){
        btn.classList.remove("active", "border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    const addBtn = document.getElementById(id);
    addBtn.classList.add("active", "border-[#0874f2]", "bg-[#0874f20d]");
    addBtn.classList.remove("border-gray-300");
}

//function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = 'block';
}


//add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const bank = getInputValue('bank');
        const accountNumber = getInputValue('account-number');
        const amount = getInputValNumber('add-amount');
        const pin = getInputValNumber('add-pin');

        const availableBalance = getInnerTextNum('available-balance');

        if(accountNumber.length < 11){
            alert("please provide valid account number");
            return;
        }
        if(pin !== validPin){
            alert("please provide valid pin number");
            return;
        }

        const total = amount + availableBalance;

        setInnerText(total);

    }) 

//Cash Out money feature
document.getElementById('withdraw-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const agentNumber = getInputValue('agent-number');
        const amount = getInputValNumber('withdraw-amount');
        const pin = getInputValNumber('withdraw-pin');
        
        const availableBalance = getInnerTextNum('available-balance');

        if(agentNumber.length < 11){
            alert("please provide valid account number");
            return;
        }
        if(pin !== validPin){
            alert("please provide valid pin number");
            return;
        }

        const total = availableBalance - amount;
        setInnerText(total);
    })


//transfer money feature
document.getElementById('transfer-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const accountNumber = getInputValue('transfer-account-number');
        const amount = getInputValNumber('transfer-amount');
        const pin = getInputValNumber('transfer-pin');
        
        const availableBalance = getInnerTextNum('available-balance');

        if(accountNumber.length < 11){
            alert("please provide valid account number");
            return;
        }
        if(pin !== validPin){
            alert("please provide valid pin number");
            return;
        }

        const total = availableBalance - amount;
        setInnerText(total);
    })


//get bonas feature
document.getElementById('bonas1-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const pin = getInputValNumber('coupon-pin');
        const amount = 100;
        const availableBalance = getInnerTextNum('available-balance');
        if(pin !== couponPin){
            alert("please provide valid coupon number");
            return;
        }
        const total = availableBalance + amount;
        setInnerText(total);
    })


//pay bill feature
document.getElementById('pay-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const bill = getInputValue('bill');
        const accountNumber = getInputValue('biller-number');
        const amount = getInputValNumber('pay-amount');
        const pin = getInputValNumber('pay-pin');

        const availableBalance = getInnerTextNum('available-balance');

        if(accountNumber.length < 1){
            alert("please provide valid account number");
            return;
        }
        if(pin !== validPin){
            alert("please provide valid pin number");
            return;
        }

        const total = availableBalance - amount;

        setInnerText(total);

    }) 


//toggling feature

document.getElementById('add-button')
    .addEventListener('click', function(){
        handleToggle('add-money-parent');
        handleBtn('add-button');
});


document.getElementById('cash-out-button')
    .addEventListener('click', function(){
        handleToggle('cash-out-parent');
        handleBtn('cash-out-button');
    })

document.getElementById('transfer-button')
    .addEventListener('click', function(){
        handleToggle('transfer-money-parent');
        handleBtn('transfer-button');
    })

document.getElementById('bonas-button')
    .addEventListener('click', function(){
        handleToggle('get-bonas-parent');
        handleBtn('bonas-button');
    })

document.getElementById('payBill-button')
    .addEventListener('click', function(){
        handleToggle('pay-bil-parent');
        handleBtn('payBill-button');
    })
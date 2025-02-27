const addMoneySection = document.getElementById("addMoney");
const CashoutSection =  document.getElementById("cashOut");
const addMoney =  document.getElementById('add-money');
const cashOut = document.getElementById('cash-out')
CashoutSection.style.display = 'none';
document.getElementById('transacionPart').style.display = 'none'

addMoney.addEventListener('click', function(e){
    e.preventDefault();
    addMoneySection.style.display = 'block';
    CashoutSection.style.display = 'none';
    document.getElementById('transacionPart').style.display = 'none'
})
cashOut.addEventListener('click', function(e){
    e.preventDefault();
    addMoneySection.style.display = 'none';
    CashoutSection.style.display = 'block';
    document.getElementById('transacionPart').style.display = 'none'

})
document.getElementById('showTransaction').addEventListener('click', function(){
    CashoutSection.style.display = 'none';
    addMoneySection.style.display = 'none';
    document.getElementById('transacionPart').style.display = 'block';
    
})

document.getElementById('btn-addMoney').addEventListener('click', function(e){
    e.preventDefault()
    const AccountNumber = parseInt(document.getElementById('account').value);
    const Amount = parseFloat(document.getElementById('amount').value);
    const PIN = parseInt(document.getElementById('pin').value);
    if (Amount < 1){
        alert(`${Amount} Cannot be add! Please try another amount`)
    }else{
        if (PIN!=1234){
            alert('Wrong PIN Number')
        }else{
           const Balance = parseFloat(document.getElementById('balance').innerText);
           const displayBalance  =  document.getElementById('balance');
           const Updated_Balance  = Balance + Amount;
           displayBalance.innerText = Updated_Balance;
           document.getElementById('account').value = "";
           document.getElementById('amount').value = "";
           document.getElementById('pin').value = "";

           let parent = document.getElementById("ulTag");
           let li = document.createElement('li');
           let div = document.createElement('div');
           div.classList = `w-full h-fit p-3 m-2 bg-yellow-500 text-white font-semibold rounded-md flex justify-between`;
           let h1 = document.createElement('h1');
           let accText = document.createTextNode(AccountNumber);
           h1.appendChild(accText)
           div.appendChild(h1);

           let h2 =  document.createElement('h1');
           let amountText = document.createTextNode(`+${Amount}`);
           h2.appendChild(amountText);
           div.appendChild(h2);

           li.appendChild(div);
           parent.appendChild(li)

           
        }
    }
})
document.getElementById('cashout-btn').addEventListener('click', function(e){
    e.preventDefault();
    const OutAmount = parseFloat(document.getElementById('cashout-amount').value);
    const PIN = parseInt(document.getElementById('cashout-pin').value);
    if (PIN === 1234){
        const Balance = parseFloat(document.getElementById('balance').innerText);
        const displayBalance  =  document.getElementById('balance');
        displayBalance.innerText = Balance - OutAmount;

        document.getElementById('account').value = "";
        document.getElementById('amount').value = "";
        document.getElementById('pin').value = "";

        const CshoutAcc = parseInt(document.getElementById('cashout-account').value);
        const type = document.getElementById('cashOut-type').value;

        let parent = document.getElementById("ulTag");
            let li = document.createElement('li');
           let div = document.createElement('div');
           div.classList = `w-full h-fit p-3 m-2 bg-yellow-500 text-white font-semibold rounded-md flex justify-between`;
           let h1 = document.createElement('h1');
           let accText = document.createTextNode(`${type}: ${CshoutAcc}`);
           h1.appendChild(accText)
           div.appendChild(h1);

           let h2 =  document.createElement('h1');
           let amountText = document.createTextNode(`-${OutAmount}`);
           h2.appendChild(amountText);
           div.appendChild(h2);

           li.appendChild(div);
           parent.appendChild(li)
    }

})
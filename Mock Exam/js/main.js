var Info = {
    title:"Mohsin Zahid",
    balance: 800000,
    currency:"Dollars",
    IBAN:"PKN12345654321"
};

function Display() {
    document.getElementById("title").innerHTML = Info.title;
    document.getElementById("balance").innerHTML = Info.balance;
    document.getElementById("currency").innerHTML = Info.currency;
    document.getElementById("IBAN").innerHTML = Info.IBAN;
}
Display();

function Deposit()
{
    var value =document.getElementById("deposit").value;
    value =parseFloat(value);
    if(isNaN(value))
    {
        document.getElementById("deposit-msg").innerText = "";
        document.getElementById("deposit-msg").innerText = "Enter Valid Amount";
    }
    else
    {
        document.getElementById("deposit-msg").innerText = "";
        var amount= Info.balance;
        amount = amount+value;
        Info.balance = amount;
        Display();
        var row = "<tr>\n" +
            "        <th align=\"left\" valign=\"middle\" scope=\"col\">"+new Date().toLocaleString()+"</th>\n" +
            "        <th align=\"left\" valign=\"middle\" scope=\"col\">Debit</th>\n" +
            "        <th align=\"left\" valign=\"middle\" scope=\"col\">"+value+"</th>\n" +
            "    </tr>";
        document.getElementById("transaction-table").innerHTML += row;
    }
}

function withdraw()
{
    var value =document.getElementById("withdraw").value;
    value =parseFloat(value);
    if(isNaN(value))
    {
        document.getElementById("withdraw-msg").innerText = "Enter Valid Amount";
    }
    else
    {
        document.getElementById("withdraw-msg").innerText = "";
        if (value <= Info.balance)
        {
            var amount= Info.balance;
            amount = amount-value;
            Info.balance = amount;
            Display();
            var row = "<tr>\n" +
                "        <th align=\"left\" valign=\"middle\" scope=\"col\">"+new Date().toLocaleString()+"</th>\n" +
                "        <th align=\"left\" valign=\"middle\" scope=\"col\">Credit</th>\n" +
                "        <th align=\"left\" valign=\"middle\" scope=\"col\">"+value+"</th>\n" +
                "    </tr>";
            document.getElementById("transaction-table").innerHTML += row;
        }
        else
        {
            document.getElementById("withdraw-msg").innerText = "Don't have sufficient amount in account";
        }

    }
}
var amount = document.getElementById("deposit");
amount.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        Deposit();
    }
});

var amount = document.getElementById("withdraw");
amount.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        withdraw();
    }
});
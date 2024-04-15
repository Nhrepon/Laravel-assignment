//document.getElementById('root').innerHTML="Hello form js ";



class BankAccount{

    #AccountNumber="1001";
    #OwnerName="John Doe";

    #balance = 700;
    deposit(amount){
        this.#balance+=amount;
}
    cashOut(amount){
        this.#balance -= amount;
}
getBalance(){
    return this.#balance
}

displayAccountInfo(){
    return ("Account Number: "+ this.#AccountNumber + "\nOwner Name: "+ this.#OwnerName + "\nBalance: $" +this.#balance );
}
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());
account.cashOut(100);
console.log(account.getBalance());
console.log(account.displayAccountInfo());




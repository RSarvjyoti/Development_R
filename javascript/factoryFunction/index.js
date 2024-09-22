function account(accountNo, name, type, balance, active) {

    let accountDetails = {};

    accountDetails.accountNo = accountNo;
    accountDetails.name = name;
    accountDetails.type = type;
    accountDetails.balance = balance;
    accountDetails.active = active;

    return accountDetails;

}

let person1 = account(101920, "Sarvjyoti", "Saving", 25000, true);
let person2 = account(101921, "Surbhi", "Saving", 35000, true);
let person3 = account(101922, "Madhu", "Saving", 45000, true);

// console.log(person1);
// console.log(person2);


function restOperator(...persons){
    console.log(persons);
}

restOperator(person1, person2, person3);
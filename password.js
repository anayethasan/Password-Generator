const passwordBox = document.getElementById("password");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_=+[{]};:<>|./?";

const allCharSet = upperCase + lowerCase + number + symbol;

function creatPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allCharSet[Math.floor(Math.random() * allCharSet.length)];
    }
    passwordBox.value = password;

}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    
}
const email = "vasamelko@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
let find = email.slice(email.charAt("@") + 1);

console.log(username);
console.log(extension);
console.log(find);
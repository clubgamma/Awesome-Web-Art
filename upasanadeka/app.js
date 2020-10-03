const logo = document.querySelectorAll("#logo path");

console.log(logo);

for(i = 0; i<logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
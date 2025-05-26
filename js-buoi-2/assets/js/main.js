function lmao() {
    console.log("100");
}

lmao();

function sayHello(name) {
    console.log(`Oh hey you're back ${name}`);
}

sayHello(`fhisaf`);
sayHello(`fhisafewtew`);

// phep so sanh cu phap giong voi java
// === so sanh gia tri + kieu gia tri
// toan tu 3 ngoi A ? B : C
// B la true C la false
// if else giong c va java

function getDrink(money) {
    switch (money) {
        case 12000 : {
            console.log(`Ca phe sua`);
            break;
        }
        case 10000 : {
            console.log(`Ca phe da`);
            break;
        }
        case 8000 : {
            console.log(`Sting dau`);
            break;
        }
        case 2000 : {
            console.log(`Tra da`);
            break;
        }
        default : {
            console.log(`Tien nay hoi sai`);
            break;
        }
    }
}

getDrink(120050);
console.log(1+1);
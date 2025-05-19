// Bai 1
function calculateFactorial(n) {
    if (n < 0) return "So phai la so nguyen duong";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Bai 2
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Bai 3
function translate(countryCode) {
    switch (countryCode.toUpperCase()) {
        case 'VN':
            return 'Xin chao';
        case 'EN':
            return 'Hello';
        case 'JP':
            return 'こんにちわ';
        case 'CN':
            return '你好';
        case 'DE':
            return 'Hallo';
    }
}

// Bai 4
function subString(str) {
    return str.slice(0, 10) + '...';
}

console.log(calculateFactorial(5));
console.log(reverseString('hello'));
console.log(translate('JP'));
console.log(subString('xinchaoaebentechmaster'));
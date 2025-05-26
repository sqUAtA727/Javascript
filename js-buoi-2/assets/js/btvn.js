// Bai 1
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    
    return true;
}

function closeToX(arr, x) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    if (primes.length == 0) {
        return null;
    }

    let closest = primes[0];
    let minDistance = Math.abs(primes[0] - x);

    for (let i = 1; i < primes.length; i++) {
        const currDistance = Math.abs(primes[i] - x);
        if (currDistance < minDistance) {
            minDistance = currDistance;
            closest = primes[i];
        }
    }
    
    return closest;
}

let a = closeToX([1, 2, 3, 4, 5, 6, 7, 8], 6);
console.log(a);

// Bai 2
// Su dung lai function isPrime tren
function isPalindrome(num) {
    const str = num.toString();
    const length = str.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

function containsNo4(num) {
    return !num.toString().includes('4');
}

function findSpecialNumbers() {
    const ans = [];
    const s = 10000;
    const e = 9999999;   
    
    for (let i = s; i <= e; i++) {
        if (isPrime(i) && isPalindrome(i) && containsNo4(i)) {
            ans.push(i);
        }
    }
    
    return ans;
}
// Nhieu so qua chay cham
// const specialNumbers = findSpecialNumbers();
// console.log(specialNumbers);

// Bai 3
// Cung su dung lai function isPrime
function allDigitsArePrime(num) {
    const primeDigits = ['2', '3', '5', '7'];
    const digits = num.toString().split('');
    
    digits.forEach((digit,_) => {
        if (!primeDigits.includes(digit)) {
            return false;
        }
    });

    return true;
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findSpecial7DigitPrimes() {
    const result = [];
    const s = 1000000;
    const e = 9999999;
    
    for (let i = s; i <= e; i++) {
        if (isPrime(i) && allDigitsArePrime(i)) {
            const reversedNum = reverseNumber(i);
            if (isPrime(reversedNum)) {
                result.push(i);
            }
        }
    }
    
    return result;
}
// Cung nhu bai 2
// const specialPrimes = findSpecial7DigitPrimes();
// console.log(specialPrimes);

// Bai 4
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return { value: null, index: null, message: "Mảng phải có ít nhất 2 phần tử" };
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let largestIndex = -1;
    let secondLargestIndex = -1;
    let allEqual = true;

    const firstValue = arr[0];

    arr.forEach((num,_) => {
        if (num !== firstValue) {
            allEqual = false;
        }
    });

    if (allEqual) {
        return { value: null, index: null, message: "Tất cả phần tử trong mảng bằng nhau" };
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            secondLargestIndex = largestIndex;
            largest = arr[i];
            largestIndex = i;
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
            secondLargestIndex = i;
        }
    }

    return { 
        value: secondLargest, 
        index: secondLargestIndex,
        message: `Số lớn thứ hai là ${secondLargest} ở vị trí ${secondLargestIndex}`
    };
}

console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));

// Bai 5
function listPerfectSquares(m, n) {
    if (m >= n) {
        return {
            error: "Điều kiện m < n không được thỏa mãn",
            squares: [],
            count: 0
        };
    }

    const squares = [];
    let count = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        const square = i * i;
        if (square >= m && square <= n) {
            squares.push(square);
            count++;
        }
    }

    return {
        squares: squares,
        count: count,
        message: `Có ${count} số chính phương trong đoạn [${m}, ${n}]`
    };
}

console.log(listPerfectSquares(10, 50));

// Bai 6
function largestCommonIs1(m, n) {
    const min = Math.min(m, n);
    for (let i = 2; i <= min; i++) {
        if (m % i == 0 && n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(largestCommonIs1(10, 50));

// Bai 7 ham isPrime ngay dau
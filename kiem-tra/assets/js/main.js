// Bai 1
const getStringHasMaxLength = (arr) => {
    let maxLength = 0;
    arr.forEach(item => {
        if (item.length > maxLength) {
            maxLength = item.length;
        }
    });
    
    return arr.filter(item => item.length === maxLength);
};

console.log(getStringHasMaxLength(['a', 'ab', 'abc', 'abcd', 'abcde']));

// Bai 2
const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];

const filterUsers = (users) => {
    return users.filter(user => user.age > 25 && user.isStatus === true);
};

console.log(filterUsers(users));

const sortUsersByAge = (users) => {
    return users.sort((a, b) => a.age - b.age);
};

console.log(sortUsersByAge(users));

// Bai 3
const getCountElements = (arr) => {
    const result = {};

    arr.forEach(item => {
        if (result[item]) {
            result[item]++;
        } else {
            result[item] = 1;
        }
    });

    return result;
};

console.log(getCountElements(['a', 'b', 'a', 'c', 'b', 'a']));

// Bai 4
const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const renderQuiz = () => {
    const container = document.querySelector(".quiz-container");
    let quizHTML = ``;

    quizes.forEach(quiz => {
        quizHTML += `
            <div class="quiz-item">
                <h3>Câu ${quiz.id} : ${quiz.question}</h3>
                <div class="quiz-answer">
        `;

        quiz.answers.forEach(answer => {
            quizHTML += `
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}" value="${answer}">
                    <label>${answer}</label>
                </div>
            `;
        });

        quizHTML += `
                </div>
            </div>
        `;
    });

    container.innerHTML = quizHTML;
};

const randomAnswer = () => {
    quizes.forEach(quiz => {
        const radios = document.querySelectorAll(`input[name="${quiz.id}"]`);
        const randomIndex = Math.floor(Math.random() * radios.length);
        radios[randomIndex].checked = true;
    });
};

renderQuiz();
document.getElementById("btn").addEventListener("click", randomAnswer);
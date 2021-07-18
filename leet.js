const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const output = document.querySelector('#output');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    output.classList.add('result');
    output.innerHTML = '<p>loading...</p>';
    const name = nameInput.value;

    fetch(`https://competitive-coding-api.herokuapp.com/api/leetcode/${nameInput.value}`)
        .then((response) => response.json())
        .then((data) => {
            if (data['status'] == "Failed") {
                output.classList.remove('result');
                output.innerHTML = '';
                msg.classList.add('error');
                msg.innerHTML = 'Enter valid id';
                setTimeout(() => {
                    msg.classList.remove('error');
                    msg.innerHTML = '';
                }, 2000);
            }
            else {
                output.innerHTML = ``;
                const easy = data['easy_questions_solved'];
                const hard = data['hard_questions_solved'];
                const med = data['medium_questions_solved'];
                const total = data['total_problems_solved'];
                const points = data['contribution_points'];
                const repu = data['reputation'];
                output.innerHTML = `
                    <h3><a href="https://leetcode.com/${name}" target="_blank">${name}</a></h3>   
                    <p>Total Problems Solved:  ${total}</p>
                    <p>Easy: ${easy}, Medium: ${med}, Hard: ${hard}</p>
                    <p>Contribution points:  ${points} </p>
                    <p>Reputation:  ${repu}</p>
                `;
            }
        })
        .catch((err) => {
            alert('Error, please try again');
        });
    nameInput.value = '';
}
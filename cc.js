const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const output = document.querySelector('#output');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    output.classList.add('result');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://competitive-coding-api.herokuapp.com/api/codechef/${nameInput.value}`)
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
                const rating = data['rating'];
                const stars = data['stars'];
                const maxRating = data['highest_rating'];
                const noofcontest = data['contest_ratings'].length;
                const solved = data['fully_solved']['count'];
                const psolved = data['partially_solved']['count'];
                const username = data['user_details']['username'];
                output.innerHTML = `
                    <h3><a href="https://www.codechef.com/users/${username}" target="_blank">${username}</a></h3>   
                    <p>Rating:  ${rating} (${stars})</p>
                    <p>Highest rating:  ${maxRating} </p>
                    <p>No. of contests given:  ${noofcontest} </p>
                    <p>Problems Solved:  ${solved} + ${psolved} [full+partial]</p>
                `;
            }
        })
        .catch((err) => {
            alert('Error, please try again');
        });
    nameInput.value = '';
}
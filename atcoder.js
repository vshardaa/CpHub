const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const output = document.querySelector('#output');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    output.classList.add('result');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://competitive-coding-api.herokuapp.com/api/atcoder/${nameInput.value}`)
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
                const rank = data['rank'];
                const high = data['highest'];
                const username = data['username'];
                output.innerHTML = `
                    <h3><a href="https://atcoder.jp/users/${username}" target="_blank">${username}</a></h3>   
                    <p>Rating:  ${rating}</p>
                    <p>Highest rating:  ${high} </p>
                    <p>Global Rank:  ${rank} </p>
                `;
            }
        })
        .catch((err) => {
            alert('Error, please try again');
        });
    nameInput.value = '';
}
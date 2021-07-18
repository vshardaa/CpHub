const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const output = document.querySelector('#output');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    output.classList.add('result');
    output.innerHTML = '<p>loading...</p>';
    fetch(`https://codeforces.com/api/user.info?handles=${nameInput.value}`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            const rating = data['result']['0']['rating'];
            const rank = data['result']['0']['rank'];
            const maxRating = data['result']['0']['maxRating'];
            const maxRank = data['result']['0']['maxRank'];
            const handle = data['result']['0']['handle'];
            const friendOfCount = data['result']['0']['friendOfCount'];
            const contri = data['result']['0']['contribution'];

            output.innerHTML = `
            <h3><a href="https://codeforces.com/profile/${handle}" target="_blank">${handle}</a></h3>   
            <p>Rating: ${rating} (${rank})</p>
            <p>Max rating: ${maxRating} (${maxRank})</p>
            <p>Contribution: ${contri}</p>
            <p>Friend of: ${friendOfCount} users</p>
        `;
            console.log(data);
        })
        .catch((err) => {
            output.classList.remove('result');
            output.innerHTML = '';
            msg.classList.add('error');
            msg.innerHTML = 'Enter valid id';
            setTimeout(() => {
                msg.classList.remove('error');
                msg.innerHTML = '';
            }, 2000);
            // alert('Enter valid Cf id');
        });
    nameInput.value = '';
}
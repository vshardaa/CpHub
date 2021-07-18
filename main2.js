const bt2 = document.querySelector('#bt2');
const bt3 = document.querySelector('#bt3');
const bt4 = document.querySelector('#bt4');
const bt5 = document.querySelector('#bt5');
const bt6 = document.querySelector('#bt6');
const output = document.querySelector('#output');
const output1 = document.querySelector('#output1');
bt2.addEventListener('click', subbt2);
bt3.addEventListener('click', subbt3);
bt4.addEventListener('click', subbt4);
bt5.addEventListener('click', subbt5);
bt6.addEventListener('click', subbt6);

function subbt2() {
    output1.classList.remove('result2');
    output1.innerHTML = ``;
    output.classList.add('result2');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://kontests.net/api/v1/codeforces`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            if (data.length == 0) {
                output.innerHTML = `No Contests`;
            }
            else {
                data.forEach(function (i) {
                    const ott = document.createElement('ott');
                    if (i.status == "CODING") {
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : RUNNING</p> 
                    <br>
                `;
                    }
                    else {
                        var hr = "-";
                        var date = "-";
                        if (i.duration != '-') hr = i.duration / 3600;
                        if (i.start_time != '-') {
                            var datt = new Date(i.start_time);
                            var myar = datt.toString().split(" ");
                            date = `${myar[2]} ${myar[1]} ${myar[3]}, ${datt.toLocaleTimeString()}`
                        }
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr]</p> 
                    <br>
                `;
                    }
                    output.append(ott);
                });
            }
        })
        .catch((err) => {
            output.classList.remove('result2');
            alert('Error, try again');
        });
}

function subbt3() {
    output1.classList.remove('result2');
    output1.innerHTML = ``;
    output.classList.add('result2');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://kontests.net/api/v1/code_chef`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            if (data.length == 0) {
                output.innerHTML = `No Contests`;
            }
            else {
                data.forEach(function (i) {
                    const ott = document.createElement('ott');
                    if (i.status != "CODING") {
                        var hr = "-";
                        var date = "-";
                        if (i.duration != '-') hr = i.duration / 3600;
                        if (i.start_time != '-') {
                            var datt = new Date(i.start_time);
                            var myar = datt.toString().split(" ");
                            date = `${myar[2]} ${myar[1]} ${myar[3]}, ${datt.toLocaleTimeString()}`
                        }
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr]</p> 
                    <br>
                `;
                    }
                    output.append(ott);
                });
            }
        })
        .catch((err) => {
            output.classList.remove('result2');
            alert('Error, try again');
        });
}

function subbt4() {
    output1.classList.remove('result2');
    output1.innerHTML = ``;
    output.classList.add('result2');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://kontests.net/api/v1/leet_code`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            if (data.length == 0) {
                output.innerHTML = `No Contests`;
            }
            else {
                data.forEach(function (i) {
                    const ott = document.createElement('ott');
                    if (i.status == "CODING") {
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : RUNNING</p> 
                    <br>
                `;
                    }
                    else {
                        var hr = "-";
                        var date = "-";
                        if (i.duration != '-') hr = i.duration / 3600;
                        if (i.start_time != '-') {
                            var datt = new Date(i.start_time);
                            var myar = datt.toString().split(" ");
                            date = `${myar[2]} ${myar[1]} ${myar[3]}, ${datt.toLocaleTimeString()}`
                        }
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr]</p> 
                    <br>
                `;
                    }
                    output.append(ott);
                });
            }
        })
        .catch((err) => {
            output.classList.remove('result2');
            alert('Error, try again');
        });
}

function subbt5() {
    output1.classList.remove('result2');
    output1.innerHTML = ``;
    output.classList.add('result2');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://kontests.net/api/v1/kick_start`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            if (data.length == 0) {
                output.innerHTML = `No Contests`;
            }
            else {
                data.forEach(function (i) {
                    const ott = document.createElement('ott');
                    if (i.status == "CODING") {
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : RUNNING</p> 
                    <br>
                `;
                    }
                    else {
                        var hr = "-";
                        var date = "-";
                        if (i.duration != '-') hr = i.duration / 3600;
                        if (i.start_time != '-') {
                            var datt = new Date(i.start_time);
                            var myar = datt.toString().split(" ");
                            date = `${myar[2]} ${myar[1]} ${myar[3]}, ${datt.toLocaleTimeString()}`
                        }
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr]</p> 
                    <br>
                `;
                    }
                    output.append(ott);
                });
            }

        })
        .catch((err) => {
            output.classList.remove('result2');
            alert('Error, try again');
        });
}

function subbt6() {
    output1.classList.remove('result2');
    output1.innerHTML = ``;
    output.classList.add('result2');
    output.innerHTML = '<p>loading...</p>';

    fetch(`https://kontests.net/api/v1/at_coder`)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ``;
            if (data.length == 0) {
                output.innerHTML = `No Contests`;
            }
            else {
                data.forEach(function (i) {
                    const ott = document.createElement('ott');
                    if (i.status == "CODING") {
                        ott.innerHTML = `
                    <p><a href="${i.url}" target="_blank">${i.name}</a> : RUNNING</p> 
                    <br>
                `;
                    }
                    else {
                        var min = "-";
                        var hr = "-";
                        var date = "-";
                        if (i.duration != '-') {
                            hr = parseInt(i.duration / 3600);
                            min = parseInt((i.duration % 3600) / 60);
                        }
                        if (i.start_time != '-') {
                            var datt = new Date(i.start_time);
                            var myar = datt.toString().split(" ");
                            date = `${myar[2]} ${myar[1]} ${myar[3]}, ${datt.toLocaleTimeString()}`
                        }
                        if (min != "-" && min != 0) {
                            ott.innerHTML = `
                        <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr ${min}min]</p> 
                        <br>
                    `;
                        }
                        else {
                            ott.innerHTML = `
                        <p><a href="${i.url}" target="_blank">${i.name}</a> : ${date} [${hr}hr]</p> 
                        <br>
                    `;
                        }
                    }
                    output.append(ott);
                });
            }
        })
        .catch((err) => {
            output.classList.remove('result2');
            alert('Error, try again');
        });
}
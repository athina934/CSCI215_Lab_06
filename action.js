document.getElementById('name').onkeyup = function() {
    var regExp = new RegExp('<');
    if (regExp.test(document.getElementById('name').value)) {
        document.getElementById('name').style.backgroundColor='red';
    } else {
        document.getElementById('name').style.backgroundColor='';
    }
}

function myAjaxFunction() {
    alert("AJAX successful!");
    document.getElementById('name').reset();
    document.getElementById('age').reset();
    document.getElementById('email').reset();
}

document.getElementById('subscribe').onclick = function() {
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(document.getElementById('email').value)) {
        myAjaxFunction();
    } else {
        alert("Subscription could not be processed. Please try again.");
    }
}

document.getElementById('age').onkeyup = function() {
    // your reg exp wasn't working so I found this one on stack overflow and it worked
    // https://stackoverflow.com/questions/4271553/how-do-i-write-a-regular-expression-to-match-any-three-digit-number-value
    var regExp = new RegExp('[0-9][0-9][0-9]');
    if (regExp.test(document.getElementById('age').value)) {
        document.getElementById('age').style.backgroundColor = 'red';
    } else {
        document.getElementById('age').style.backgroundColor='';
    }
}
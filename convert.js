function wrong() {
    document.getElementById('myInput2').disabled = true;
    document.getElementById('myInput2').value = '';
}

function wrong2() {
    document.getElementById('myInput').disabled = true;
    document.getElementById('myInput').value = '';
}

function works() {
    document.getElementById('myInput2').disabled = false;
    document.getElementById('myInput2').value = '';
}

function works2() {
    document.getElementById('myInput').disabled = false;
    document.getElementById('myInput').value = '';
}

function myFunction() {
    var x = document.getElementById('myInput').value;
    var z = document.getElementById('myInput2').value;
    var y = document.getElementById('pix1').value;
    var res = document.getElementById('result1');

    if (x) {
        res.innerHTML = x / y + 'em';
    } else {
        res.innerHTML = z * y + 'px';
    }

    if (isNaN(x) || isNaN(z) || isNaN(y)) {
        res.innerHTML = 'Wrong input! Use numbers';
        res.style.color = 'red';
    } else {
        res.style.color = '';
    }
}


let counter_number = document.getElementById('counter_number');

let subtract_btn = document.getElementById('sub_count');

let add_btn = document.getElementById('add_count');


change_color = () => {
    if (Number(counter_number.innerHTML) == 0) {
        counter_number.style.color = "white"
    }
    else if (Number(counter_number.innerHTML) > 0) {
        counter_number.style.color = "crimson"
    }
    else {
        counter_number.style.color = "aquamarine"
    }
}

add_btn.onclick = () => {
    counter_number.innerHTML = Number(counter_number.innerHTML) + 1;
    change_color();
}

subtract_btn.onclick = () => {
    counter_number.innerHTML = Number(counter_number.innerHTML) - 1;
    change_color();
}
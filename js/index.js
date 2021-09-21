let input = document.querySelector(".input");
let select = document.querySelector(".select");
let output = document.querySelector(".output");
let values;
input.onkeyup = function() {
    values = Number(this.value);
    if (select.value === "op1") {
        output.innerHTML = (values * values) + values - 5;
    } else if (select.value === "op2") {
        output.innerHTML = (values * values * values) + 15 + values;
    } else if (select.value === "op3") {
        output.innerHTML = ((values * values * values * values) + (values * values)) * 5;
    } else if (select.value === "op4") {
        output.innerHTML = (values - 3) - 3;
    }
}
select.onchange = function() {
    values = Number(input.value);
    if (select.value === "op1") {
        output.innerHTML = (values * values) + values - 5;
    } else if (select.value === "op2") {
        output.innerHTML = (values * values * values) + 15 + values;
    } else if (select.value === "op3") {
        output.innerHTML = ((values * values * values * values) + (values * values)) * 5;
    } else if (select.value === "op4") {
        output.innerHTML = (values - 3) - 3;
    }
}
setInterval(() => {
    if (input.value == "") {
        output.innerHTML = "";
    }
}, 0);
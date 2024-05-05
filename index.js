$(document).ready(function () {
    $("#drop").select2({
        theme: 'bootstrap-5',
        dropdownCssClass: 'bigdrop'
    });
});
var items = document.querySelectorAll('.slider1 .slider-item1');
items.forEach(function (e) {
    const slide = 4;
    let next = e.nextElementSibling;
    for (var i = 0; i < slide; i++) {
        if (!next) {
            next = items[0]
        }
        let clonechild = next.cloneNode(true)
        e.appendChild(clonechild.children[0])
        next = next.nextElementSibling
    }
})
var ele = document.querySelectorAll('.slider2 .slider-item2');
ele.forEach(function (f) {
    const slide1 = 6;
    let next1 = f.nextElementSibling;
    for (var j = 0; j < slide1; j++) {
        if (!next1) {
            next1 = ele[0]
        }
        let clonechild1 = next1.cloneNode(true)
        f.appendChild(clonechild1.children[0])
        next1 = next1.nextElementSibling
    }
})
var ele = document.querySelectorAll('.slider3 .slider-item3');
ele.forEach(function (f) {
    const slide1 = 3;
    let next1 = f.nextElementSibling;
    for (var j = 0; j < slide1; j++) {
        if (!next1) {
            next1 = ele[0]
        }
        let clonechild1 = next1.cloneNode(true)
        f.appendChild(clonechild1.children[0])
        next1 = next1.nextElementSibling
    }
})
function toggle(a) {
    var x = document.getElementsByClassName("form");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(a).style.display = "block";
    if(a == "institute"){
        document.getElementById(a + 's').style.color = "#0a1724";
        document.getElementById(a + 's').style.backgroundColor = "transparent";
        document.getElementById(a + 's').style.backgroundImage = "linear-gradient(180deg, #FFEAEA 0%, #F7668A 100%)"
        document.getElementById(a + 's').style.borderColor = "#000";
        document.getElementById('organizations').style.color = "#8a8d91";
        document.getElementById('organizations').style.backgroundColor = "none";
        document.getElementById('organizations').style.backgroundImage = "none";
        document.getElementById('organizations').style.borderColor = "#0a0a0a";
    }
    else{
        document.getElementById(a + 's').style.color = "#0a1724";
        document.getElementById(a + 's').style.backgroundColor = "transparent";
        document.getElementById(a + 's').style.backgroundImage = "linear-gradient(180deg, #FFEAEA 0%, #F7668A 100%)"
        document.getElementById(a + 's').style.borderColor = "#000";
        document.getElementById('institutes').style.color = "#8a8d91";
        document.getElementById('institutes').style.backgroundColor = "transparent";
        document.getElementById('institutes').style.backgroundImage = "linear-gradient(180deg, #FFF 0%, #FFF 100%)";
        document.getElementById('institutes').style.borderColor = "#0a0a0a";
    }
}
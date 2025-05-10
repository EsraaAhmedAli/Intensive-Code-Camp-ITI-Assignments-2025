
var form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    var confirmSubmit = confirm("Are you sure you want to submit the form?");
    
    if (!confirmSubmit) {
        event.preventDefault();
        alert("Form submission canceled.");
    } else {
        alert("Form submitted successfully!");
    }
});


let obj = new EventTarget();  
let myEvent = new Event('custEvent');  
obj.addEventListener('custEvent', function () {
    console.log("Data not stored !");
});
let timer = setTimeout(function () {
    obj.dispatchEvent(myEvent);
}, 30000);  


document.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        obj.dispatchEvent(myEvent);
    }, 30000);  
});


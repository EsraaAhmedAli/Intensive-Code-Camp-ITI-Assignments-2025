
document.getElementById("saveBtn").addEventListener("click", function () {
    var usernm = document.getElementById("username").value;
    var userAge = document.getElementById("age").value;
    var selectedOption = document.querySelector('input[name="choice"]:checked');
    var favoriteColor = document.getElementById("color").value;

    if (!usernm || !userAge || !selectedOption || !favoriteColor) {
        alert("Please fill in all fields before registering.");
        return;
    }

    // عشان اخزن البيانات في ال cookie
    document.cookie = `usernm=${encodeURIComponent(usernm)};`;
    document.cookie = `userAge=${userAge};`;
    document.cookie = `selectedChoice=${selectedOption.value};`;
    document.cookie = `favoriteColor=${favoriteColor};`;


    let visitCount = getCookie("visitCount") ? parseInt(getCookie("visitCount")) : 0;
    visitCount++;
    document.cookie = `visitCount=${visitCount}; max-age=86400;`;
    alert("Data saved successfully! Redirecting...");
    window.location.href = "nextweb.html";
});



function getCookie(name) {
    let cookies = document.cookie.split("; ");
    let cookie = cookies.find(row => row.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}




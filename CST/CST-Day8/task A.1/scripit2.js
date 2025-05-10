window.onload = function () {
    displayUserInfo();
};

function displayUserInfo() {
    let usernm = getCookie("usernm");
    let selectedChoice = getCookie("selectedChoice");
    let favoriteColor = getCookie("favoriteColor");
    let visitCount = getCookie("visitCount") ? parseInt(getCookie("visitCount")) : 0;

    if (usernm && selectedChoice && favoriteColor) {
        let greetingElement = document.getElementById("greeting");
        let visitCountElement = document.getElementById("visitCount");

        // تغيير لون النصوص المطلوبة
        greetingElement.innerHTML = `Welcome <span style="color:${favoriteColor};">${usernm}</span>You Have visited this site `;
        visitCountElement.innerHTML = `<span style="color:${favoriteColor};">${visitCount}times </span> :)`;

        let profilePic = document.getElementById("profilePic");
        if (profilePic) {
            profilePic.src = selectedChoice === "male" ? "./images/1.jpg" : "./images/2.jpg";
        }
    } else {
        document.getElementById("greeting").innerText = "No user data found.";
    }
}

// دالة استرجاع الكوكيز
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    let cookie = cookies.find(row => row.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}


// <!-- setCookie("testCookie", "hello", -10); -->
// <!-- setCookie("", "hello", 3600); -->

// <!-- console.log(getCookie()); // بدون بارامتر، يجب أن يظهر خطأ
// console.log(getCookie("user", "extraParam")); // أكثر من بارامتر، يجب أن يظهر خطأ -->



// <!-- deleteCookie(); // بدون اسم، يجب أن يظهر خطأ
// deleteCookie(123); // اسم غير صالح، يجب أن يظهر خطأ -->

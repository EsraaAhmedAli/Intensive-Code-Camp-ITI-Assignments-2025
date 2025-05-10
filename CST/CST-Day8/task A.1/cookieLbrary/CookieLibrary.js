function setCookie(name, value, maxAge) {
    try {
        if (!name || typeof name !== "string" || typeof value === "undefined") {
            throw new Error("setCookie requires a valid name and value.");
        }
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (maxAge) {
            if (typeof maxAge !== "number" || maxAge <= 0) {
                throw new Error("maxAge should be a positive number.");
            }
            cookieString += `; max-age=${maxAge}`;
        }
        document.cookie = cookieString;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function getCookie(name) {
    try {
        if (!name || arguments.length !== 1) {
            throw new Error("getCookie requires exactly one parameter.");
        }
        let cookies = document.cookie.split("; ");
        let cookie = cookies.find(row => row.startsWith(name + "="));
        return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

function deleteCookie(name) {
    try {
        if (!name || typeof name !== "string") {
            throw new Error("deleteCookie requires a valid name.");
        }
        document.cookie = `${encodeURIComponent(name)}=; max-age=0; path=/`;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

document.getElementById("saveBtn").addEventListener("click", function () {
    var usernm = document.getElementById("username").value;
    var userAge = document.getElementById("age").value;
    var selectedOption = document.querySelector('input[name="choice"]:checked');
    var favoriteColor = document.getElementById("color").value;

    if (!usernm || !userAge || !selectedOption || !favoriteColor) {
        alert("Please fill in all fields before registering.");
        return;
    }

    setCookie("usernm", usernm, 86400);
    setCookie("userAge", userAge, 86400);
    setCookie("selectedChoice", selectedOption.value, 86400);
    setCookie("favoriteColor", favoriteColor, 86400);

    let visitCount = getCookie("visitCount") ? parseInt(getCookie("visitCount")) : 0;
    visitCount++;
    setCookie("visitCount", visitCount, 86400);
    
    alert("Data saved successfully! Redirecting...");
    window.location.href = "nextweb.html";
});





// <!-- setCookie("testCookie", "hello", -10); -->
// <!-- setCookie("", "hello", 3600); -->

// <!-- console.log(getCookie()); // بدون بارامتر، يجب أن يظهر خطأ
// console.log(getCookie("user", "extraParam")); // أكثر من بارامتر، يجب أن يظهر خطأ -->



// <!-- deleteCookie(); // بدون اسم، يجب أن يظهر خطأ
// deleteCookie(123); // اسم غير صالح، يجب أن يظهر خطأ -->
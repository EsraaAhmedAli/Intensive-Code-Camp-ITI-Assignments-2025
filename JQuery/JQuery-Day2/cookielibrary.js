(function (global) {
    var jq = jQuery.noConflict(); 

    var myCookie = {
        get cookies() {
            return document.cookie.split(';').map(c => c.trim());
        },

        getCookie: function (cookieName) {
            if (arguments.length !== 1 || typeof cookieName !== 'string' || cookieName === '') {
                throw new Error("Expected 1 parameter (string) for getCookie()");
            }

            for (let i in this.cookies) {
                const [name, value] = this.cookies[i].split('=');
                if (name === cookieName) {
                    return decodeURIComponent(value);
                }
            }
            return null;
        },

        setCookie: function (cookieName, cookieValue, expiryDate) {
            if (arguments.length < 2 || arguments.length > 3 || typeof cookieName !== 'string' || cookieName === '') {
                throw new Error("Invalid arguments: Expected 2 or 3 parameters (string, any, optional date)");
            }

            if (!/^[^;,\s]+$/.test(cookieName)) {
                throw new Error("Invalid cookie name: names cannot contain spaces, commas, or semicolons");
            }

            var cookieString = cookieName + "=" + encodeURIComponent(cookieValue) + "; path=/;";

            if (expiryDate) {
                var date = new Date(expiryDate);
                if (isNaN(date.getTime())) {
                    throw new Error("Invalid expiry date: must be a valid date string");
                }
                cookieString += "expires=" + date.toUTCString() + ";";
            }

            document.cookie = cookieString;
        },

        deleteCookie: function (cookieName) {
            if (arguments.length !== 1 || typeof cookieName !== 'string' || cookieName === '') {
                throw new Error("Invalid arguments: Expected 1 parameter");
            }

            document.cookie = cookieName + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        },

        allCookies: function () {
            if (arguments.length !== 0) {
                throw new Error("No parameters expected for allCookies()");
            }

            const cookieList = {};
            for (let i in this.cookies) {
                const [name, value] = this.cookies[i].split('=');
                if (name) {
                    cookieList[name.trim()] = decodeURIComponent(value || '');
                }
            }
            return cookieList;
        },

        checkIfCookieExist: function (cookieName) {
            if (arguments.length !== 1 || typeof cookieName !== 'string' || cookieName === '') {
                throw new Error("Expected 1 parameter (string) for checkIfCookieExist()");
            }

            for (let i in this.cookies) {
                const [name] = this.cookies[i].split('=');
                if (name === cookieName) {
                    console.log("Cookie exists");
                    return true;
                }
            }

            console.log("No such cookie with this name");
            return false;
        }
    };

   
    global.jq = jq;     
    global.$c = myCookie; 
})(window);



// $c.setCookie('testName', 'testValue', '2030-01-01');
// $c.getCookie('testName')
//$c.checkIfCookieExist('testName')
//($c.checkIfCookieExist('nonExistent')
//$c.allCookies()
//$c.deleteCookie('testName');
//$c.checkIfCookieExist('testName')
//try {
//     $c.setCookie('bad name', 'value');
// } catch (e) {
//     console.log(e.message); // Invalid cookie name: names cannot contain spaces, commas, or semicolons
// }

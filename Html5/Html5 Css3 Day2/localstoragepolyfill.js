var NewlocalStorage = (function () {
    var myCookie = {
        get cookies() {
            return document.cookie.split(';').map(c => c.trim());
        },

        getItem: function (key) {
            if (typeof key !== 'string') throw new Error("Key must be a string");
            for (let c of this.cookies) {
                const [name, value] = c.split('=');
                if (name === key) return value ? decodeURIComponent(value) : null;
            }
            return null;
        },

        setItem: function (key, value) {
            if (typeof key !== 'string') throw new Error("Key must be a string");
            // If value is null, treat it as an empty string
            const cookieValue = value === null ? '' : encodeURIComponent(value);
            const cookieString = `${key}=${cookieValue}; path=/;`;
            // Add a long expiration date (for example, 365 days)
            const expires = new Date();
            expires.setFullYear(expires.getFullYear() + 1);
            document.cookie = `${cookieString} expires=${expires.toUTCString()}`;
        },

        removeItem: function (key) {
            if (typeof key !== 'string') throw new Error("Key must be a string");
            document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        },

        clear: function () {
            for (let c of this.cookies) {
                const [name] = c.split('=');
                this.removeItem(name.trim());
            }
        },

        key: function (index) {
            if (typeof index !== 'number') throw new Error("Index must be a number");
            const all = this.cookies;
            if (index >= 0 && index < all.length) {
                return all[index].split('=')[0];
            }
            return null;
        },

        get length() {
            return this.cookies.length;
        }
    };

    return myCookie;
})();


// NewlocalStorage.setItem("user", "Ali");
// NewlocalStorage.setItem("age", "25");
// console.log(NewlocalStorage.getItem("user")); 
// console.log(NewlocalStorage.getItem("age"));  
// NewlocalStorage.removeItem("user");
// console.log(NewlocalStorage.getItem("user")); 

// console.log(NewlocalStorage.length); 


// NewlocalStorage.clear();
// console.log(NewlocalStorage.length); 

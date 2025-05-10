function openAndClone() {
    let childWindow = window.open("child.html", "childWindow");

   

    childWindow.onload = function () {

        let mainBody = document.querySelector(".center"); 
        let img = document.querySelector('#header img')
        let headerDiv = document.querySelector("#header");

       
        headerDiv.style.textAlign = "end";
        let listStyle = document.querySelectorAll('li')
        let ulNav = document.getElementById('nav')
        ulNav.style.textAlign = 'center'
        for(let i=0;i< listStyle.length ; i++){
            listStyle[i].style.listStyle = 'square'
            listStyle[i].style.listStylePosition = "inside"
        }

        
    

        let mainBodyClone = mainBody.cloneNode(true);
        let imgClone = img.cloneNode(true
            
        )
        let childDoc = childWindow.document;
        if (childDoc.body) {
            childDoc.body.appendChild(mainBodyClone);

            childDoc.body.appendChild(imgClone);           

        }
    };
}
let imgs = document.querySelectorAll('img')
let textArea = document.getElementById('txtArea')
let generateBtn = document.getElementById('generateBtn')
let imgSrc ;
let textValue;
let childWindow;

function checkDisbaledButton() {
    if(imgSrc  && textValue ){
        generateBtn.disabled = false;

    }
}


// اختيار صورة عند الضغط عليها
for(let i=0 ; i<imgs.length;i++) {
  
    imgs[i].addEventListener('click',function(e){
        imgSrc=e.target.getAttribute('src')

        for (let j = 0; j < imgs.length; j++) {
            imgs[j].classList.remove('active');
        }

        e.target.classList.add('active');
        checkDisbaledButton()

    
    })

}


// ادخال النص 
textArea.addEventListener('input',function(){
    textValue=this.value
    checkDisbaledButton()
    
})


// فتح نافذه جديده 

function openChildWindow() {
  
    
    let childWindow = window.open('./childcard.html', '', 'width=300,height=300');

    childWindow.onload = function () {
        let img = childWindow.document.createElement('img');
        let button = childWindow.document.createElement('button');
        let text = childWindow.document.createElement('p')
        img.style.width = '80%'; 
        button.textContent= 'close window'
        text.style.textAlign='center'
        button.style.display='block'
        button.style.margin='auto'
        button.addEventListener('click',function(){
            childWindow.close()
        })

        img.src = imgSrc  
       text.textContent = textValue
       
        childWindow.document.body.appendChild(img);
        childWindow.document.body.appendChild(text);
        childWindow.document.body.appendChild(button);
    };
}

generateBtn.addEventListener('click',openChildWindow)
generateBtn.disabled = true;

let paragraph = document.getElementById('PAR');
let borderColor ;  
let borderStyle ; 

function ChangeBorderColor(value) {
 
    borderColor = value;
    paragraph.style.border = "1px " + borderStyle + " " + borderColor;
}

function ChangeBorder(value) {
    borderStyle = value;
    paragraph.style.border = "1px " + borderStyle + " " + borderColor;
}

function ChangeDecorate(value) {
    paragraph.style.textDecoration= value

}
function ChangeTransform(value) {
    paragraph.style.textTransform = value
}

function ChangeIndent(value) {
    paragraph.style.textIndent = value
}

function ChangeLSpace(value) {
    paragraph.style.letterSpacing = value
}
function ChangeHeight(value) {

    paragraph.style.lineHeight = value
}
function ChangeAlign(val) {
    paragraph.style.textAlign = val
}

function ChangeFont(val) {
    paragraph.style.fontFamily = val
}
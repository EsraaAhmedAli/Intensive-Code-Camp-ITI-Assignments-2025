var star;
var i , j;
function star (stars){
for(i=0 ; i<stars ; i++){
    for(j=0 ;j<stars ; j++){
        if( i == j ||  j<i )
        document.writeln("*") ;
    }
    document.writeln("<br>")
}
}

star(3);
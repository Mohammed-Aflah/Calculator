function butttonclick(val){
    var scr=document.getElementById("screen");
    scr.value=scr.value+val;
}
function cleardisplay()
{
    document.getElementById("screen").value=""
}
function equalclick(){

    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

}
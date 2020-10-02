function day()
{
    document.getElementById("darkarea").style.opacity = "0";
    document.getElementById('area').style.opacity="1";
    document.getElementById('sun').style.top = "90px";
    document.getElementById('moon').style.top = "-350px";
}
function night()
{
    document.getElementById('sun').style.top = "-400px";
    document.getElementById('moon').style.top = "90px";
    document.getElementById("darkarea").style.opacity = "1";
    document.getElementById('area').style.opacity="0";
    
}
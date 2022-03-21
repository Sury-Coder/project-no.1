var CountNumberOFDiv = 0;
var DivControls = {
    "x":0,"y":0,"width":300,"height":300
}
var innerNumberOfDiv;
function CreatCanvas(width, height)
{
    CountNumberOFDiv++;
    document.getElementById("useAsCanvas").innerHTML+="<div class='CanvasDiv' id='Div"+CountNumberOFDiv+"'> </div>";
    var NewDiv = document.getElementById("Div"+CountNumberOFDiv);
    NewDiv.style.position = "absolute";
    var leftAlign = (width*1.0)/4;
    NewDiv.style.left = "calc(50% - "+leftAlign+"px)";
    NewDiv.style.top = "20%";
    NewDiv.style.width = ((width*1.0)/2)+"px";
    NewDiv.style.height= ((height*1.0)/2)+"px";
    NewDiv.style.backgroundColor = "white";
}
document.addEventListener("keydown",function(e){
    if(e.keyCode == 37)
    {
      ChangePosition(-5,0);
    }
    else if(e.keyCode == 38)
    {
        console.log("yaha tak to thik hai");
        ChangePosition(0,-5);
    }
    else if(e.keyCode == 39)
    {
        ChangePosition(5,0);
    }
    else if(e.keyCode == 40)
    {
        ChangePosition(0,5);
    }
    else if(e.keyCode == 90)
    {
        console.log("Yes ");
        for(i=1;i<=CountNumberOFDiv;i++)
        {
            var element =document.getElementById("Div"+i);
            var style = getComputedStyle(element);
            var width = parseFloat(style.width);
            var height = parseFloat(style.height);
            var left = parseFloat(style.left);
            document.getElementById("Div"+i).style.width = (width+((5*1.0*width)/100))+"px";
            document.getElementById("Div"+i).style.height =(height+((5*1.0*height)/100))+"px";
            document.getElementById("Div"+i).style.left =(left - ((5*1.0*width)/100)/2)+"px";
        }
        var textClass = document.getElementsByClassName("TextClass");
        for(i=0;i<textClass.length;i++)
        {
            var style = getComputedStyle(textClass[i]);
            var font_Size = parseFloat(style.fontSize);
            textClass[i].style.fontSize = (font_Size+0.2)+ "px";
        }
    }
    else if(e.keyCode == 88)
    {
        for(i=1;i<=CountNumberOFDiv;i++)
        {
            var element =document.getElementById("Div"+i);
            var style = getComputedStyle(element);
            var width = parseFloat(style.width);
            var height = parseFloat(style.height);
            var left = parseFloat(style.left);
            document.getElementById("Div"+i).style.width = (width-((5*1.0*width)/100))+"px";
            document.getElementById("Div"+i).style.height =(height-((5*1.0*height)/100))+"px";
            document.getElementById("Div"+i).style.left =(left + ((5*1.0*width)/100)/2)+"px";
        }
        var textClass = document.getElementsByClassName("TextClass");
        for(i=0;i<textClass.length;i++)
        {
            var style = getComputedStyle(textClass[i]);
            var font_Size = parseFloat(style.fontSize);
            textClass[i].style.fontSize = (font_Size-0.2)+ "px";
        }
    }
});
function ChangePosition(x,y)
{
    for(var i=1; i<=CountNumberOFDiv; i++)
    {
        var element =document.getElementById("Div"+i);
        var style = getComputedStyle(element);
        var left = parseInt(style.left);
        var top = parseInt(style.top);
        document.getElementById("Div"+i).style.left = (left+x)+"px";
        document.getElementById("Div"+i).style.top = (top+y)+"px";
        
    }
}
function CreatScreen()
{
    let a = document.getElementById("ScreenResoluton").value;
    let width, height;
    switch(a)
    {
        case "360X640":{

            width =360;
            height = 667;
        }
        break;
        case "411X823":{
            width =411;
            height = 823;
        }
        break;
        case "375X667":{
            width =375;
            height = 667;
        }
        break;
        case "414X736":{
            width=414;
            height=736;
        }
        break;
        case "768X1024":{
            width =768;
            height = 1024;
        }
        break;
        case "1024X1336":{
            width =1024;
            height = 1336;
        }
    }
    CreatCanvas(width,height);
}
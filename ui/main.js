var button = document.getElementById('counter');
var counter=0;
button.onclick = function()
{
    var request=new XMLHttprequest();
    request.onreadystatechange = function(){
    if(request.readystate === XMlHttprequest.DONE){
        if(request.status == 200){
        var counter= request.responseText;
        var span = document.getElementById('count');
        span.innerHTML=counter.toString();
    }
    }
    };

  request.open('GET','http://akshayama466.imad.hasura-app.io/counter',true);
  request.send(null);
};
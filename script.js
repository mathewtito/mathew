function fn(){
    var email=document.getElementById('take').value;
    var sub="req to connect";
    var body="hii";
    window.location.href="mailto:"+encodeURIComponent(email)+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body)+"&cc=mathewtito309@gmail.com";
}
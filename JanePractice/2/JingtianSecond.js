(function learnPageElement(){
    document.write("<ul>")
    document.write("<li>window.history.state: "+window.history.state+"</li>")
    document.write("<li>document.location.hash: "+document.location.hash+"</li>")
    document.write("<li>document.location.host: "+document.location.host+"</li>")
    document.write("<li>document.location.hostname: "+document.location.hostname+"</li>")
    document.write("<li>document.location.href: "+document.location.href+"</li>")
    document.write("<li>document.location.port: "+document.location.port+"</li>")
    document.write("<li>document.location.protocol: "+document.location.protocol+"</li>")
    document.write("</ul>")
}())

function goTop(){
    if(document.location.hash==""){
    var curURL=document.location.href;
    document.location.href=curURL+"#top"
    }
}
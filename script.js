

var profileName = document.querySelector("#name");

function changeProfileName(){
    profileName.innerHTML = "Adam Zachary";
}

var todd1 = document.querySelector("#toddImage");
var todd2 = document.querySelector("#toddName");
var accept1 = document.querySelector("#accept1");
var decline1 = document.querySelector("#decline1");

function removeRequest1(element){
    todd1.remove();
    todd2.remove();
    element.remove();
    accept1.remove();
    decline1.remove();
}

var phil1 = document.querySelector("#philImage");
var phil2 = document.querySelector("#philName");
var accept2 = document.querySelector("#accept2");
var decline2 = document.querySelector("#decline2");

function removeRequest2(element){
    phil1.remove();
    phil2.remove();
    element.remove();
    accept2.remove();
    decline2.remove();
}
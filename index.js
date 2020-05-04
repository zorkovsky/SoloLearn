function br() {document.write("<BR>")};

document.write("START");
br();br();


function buddy(name,nick) {
 this.name = name;
 this.nick = nick
 
 this.render = function() {

    document.write(this.name + " : " + this.nick)
 }

}   

var jim = new buddy("James","Jimmy");
var pet = new buddy("Peter","Pete");
var mik = new buddy("Michael","Mike");

jim.render();br
pet.render();

//comment SoloLearn
//comment SoloLearn II
//comment SoloLearn III
//comment Sololearn V (local)
//comment SoloLearn III (remote)
//comment SoloLearn IV (remote)
br.call();br();
document.write("END");

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

//comment SoloLearn III (remote)

br.call();br();
document.write("END");

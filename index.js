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

<<<<<<< HEAD
//comment SoloLearn
//comment SoloLearn II
//comment SoloLearn III
//comment SoloLearn III (remote)
//comment SoloLearn IV (remote)
//comment Sololearn V (local)
=======
//comment SoloLearn3

>>>>>>> SoloLearn3
br.call();br();
document.write("END");

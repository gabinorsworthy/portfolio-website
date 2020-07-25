var helloIntro = document.getElementsByClassName('hello-world')[0]
var introduction = document.getElementsByClassName('introduction')[0]

var typewriter = new Typewriter(helloIntro, {
    delay: 175
})

typewriter.typeString('hello, world!').start();

var typewriter2 = new Typewriter(introduction, {
})

typewriter2.pauseFor(2750).typeString('My name is Gabriele Norsworthy.')
    .pauseFor(700)
    .deleteChars(20)
    .typeString('Gabi.')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('Gibson.')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('Gibby.')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('Gabi.')
    .start();
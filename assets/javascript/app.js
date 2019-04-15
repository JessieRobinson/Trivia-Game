$('#start').on('click', function(){
    game.start();
})

$document.on('click', '#end', function(){
    game.done
})

var questions =[{
    question:""
    answers:[""]
    correctAnswer:""
},
{
question:""
    answers:[""]
    correctAnswer:""
},
{
question:""
    answers:[""]
    correctAnswer:""
},
{
question:""
    answers:[""]
    correctAnswer:""
},

]

var game = {
    correct:0,
    incorrect:0,
    counter:20,
    countdown: function(){
        game.counter--;
        $('#counter'.html)(game.counter);
        if(game.counter<==0){
            console.log("Time is up!");
            game.done();
        }
    }
},
start: function(){
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">20</span>')
    $('#start').remove();

    for(var i=0;i < questions.length;i++){
        $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
        for(var i=0; i< questions[i].answers.length; i++){
            $('#subwrapper').append("<input type='radio' name='question-"+i+"' value=)
        }
        
    }
}
$('#subwrapper').append('<br><button id="end">Done</button>')















$.each($('input[name="question-1"]:checked'),function(){
    if($(this).val()== questions[3].correctAnswer){
        game.correct++;
    }else {
        game.incorrect++;
    }
    console.log(this.value);
});

$.each($('input[name="question-2"]:checked'),function(){
    if($(this).val()== questions[3].correctAnswer){
        game.correct++;
    }else {
        game.incorrect++;
    }
    console.log(this.value);
});

$.each($('input[name="question-3"]:checked'),function(){
    if($(this).val()== questions[3].correctAnswer){
        game.correct++;
    }else {
        game.incorrect++;
    }
    console.log(this.value);
});

$.each($('input[name="question-4"]:checked'),function(){
    if($(this).val()== questions[3].correctAnswer){
        game.correct++;
    }else {
        game.incorrect++;
    }
    console.log(this.value);
});


this.result();

result:function(){
    clearInterval(timner);
    $('#subwrapper h2').remove;
    $('#subwrapper').html("<h2>All Done!</h2>");
    $('#subwrapper').append("<h3>Correct Answers:"= this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers:"= this.incorrect+"</h3>");
    $('#subwrapper').append("<h3>Unanswered:"+(questions.length-(this.incorrect+1)</h3>");
}

function check(){
    var score = 0
    var correct_answern_q1 = document.getElementById('q1_a1');
    var q1_answer2 = document.getElementById('q1_a2');
    var q1_answer3 = document.getElementById('q1_a3');
    var q1_answer4 = document.getElementById('q1_a4');

    if(correct_answern_q1.checked == true){
    score ++

    alert("Your answer is correct")
    }else{
        alert("Your answer is wrong")
    }

    // alert (" Your score is " +score+"/4")


    var correct_answern_q2 = document.getElementById('q2_a1');
    var q2_answer2 = document.getElementById('q2_a2');
    var q3_answer3 = document.getElementById('q2_a3');
    var q4_answer4 = document.getElementById('q2_a4');

    if(correct_answern_q2.checked == true){
    score ++

    alert("Your answer is correct")
    }else{
        alert("Your answer is wrong")
    }

    // alert (" Your score is " +score+"/4")


    var correct_answern_q3 = document.getElementById('q3_a3');
    var q3_answer2 = document.getElementById('q3_a1');
    var q3_answer3 = document.getElementById('q3_a2');
    var q3_answer4 = document.getElementById('q3_a4');

    if(correct_answern_q3.checked == true){
    score ++

    alert("Your answer is correct")
    }else{
        alert("Your answer is wrong")
    }

    alert (" Your score is " +score+"/3")

}
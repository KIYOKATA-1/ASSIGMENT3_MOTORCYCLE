var countDownDate = new Date("November 4, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    var minutes = Math. floor((distance % (1000* 60* 60)) / (1000*60));
    var seconds = Math. floor((distance % (1000*60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
},1000) 


var btnDone = document.getElementById('btnDone');
btnDone.addEventListener('click',function(){
    alert("Done!");
});


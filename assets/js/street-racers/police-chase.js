var run_script = 10;
var script_ran = 0;

function goDirection(directionl) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.street-racerz.com/chase.php?direction="+directionl, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
    };
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("gta=3&attempt=Attempt GTA&gta_2=true");
}



var start_app = setInterval(function(){
    if( script_ran >= run_script){
        clearInterval(start_app);
        console.log("App finsihed");
    }

    let directioni =  Math.floor(Math.random() * 4) + 1;
    let direction2 =  Math.floor(Math.random() * 4) + 1;
    let direction3 =  Math.floor(Math.random() * 4) + 1;

    goDirection(directioni);
    goDirection(direction2);
    goDirection(direction3);

    script_ran++;
    console.log("script ran: "+script_ran);

}, 210000);

let directioni =  Math.floor(Math.random() * 4) + 1;
let direction2 =  Math.floor(Math.random() * 4) + 1;
let direction3 =  Math.floor(Math.random() * 4) + 1;

goDirection(directioni);
goDirection(direction2);
goDirection(direction3);
script_ran++;
console.log("script ran: "+script_ran);

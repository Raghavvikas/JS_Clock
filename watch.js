var format = true;

function changeFormat(){
    
    format = !format;
}

function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    if(hours >= 12){
        period = "PM";
        hours = format ?  hours % 12 : hours;
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".meridian").innerHTML = period;


    
    // now Add current date, day, month & year
    
    const month = today.toLocaleString("default", {month: "short"});
    const year = today.getFullYear();
    const dayname = today.toLocaleString("default", {weekday: "long"});
    const day = today.getDate();

    document.querySelector(".month").innerHTML = month;
    document.querySelector(".day-name").innerHTML = dayname;
    document.querySelector(".day").innerHTML = day;
    document.querySelector(".year").innerHTML = year;


}

var updateclock = setInterval(clock,1000);

var themeSelection = document.querySelector(".light");

function attachEvents(){
    document.getElementById("colors").onchange = function(event){
        document.body.className = event.target.value;
        console.log(event);
    }
}
attachEvents();

setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// const changeFormat = document.querySelector(".input");

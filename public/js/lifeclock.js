$.fn.lifeclock = function() {

    this.css("background", "green");
    this.timerDisplay = this.find(".timerDisplay");
    this.timerDisplay.css("color", "white");

    this.timerValue = 0;
    this.lcTimerInterval = null;
    this.birthdate = "";

    this.setTimer = function(seconds) {
        this.timerValue = seconds;
        this.timerDisplay.html(seconds);

        return this;
    }

    this.getTimerDisplay = function(totalSec) {

        var timerDisplayStr = "";

        var years = parseInt(totalSec / 60 / 60 / 24 / 365);
        var days = parseInt( totalSec / 60 / 60 / 24) % 365;

        var hours = parseInt( totalSec / 3600 ) % 24;
        var minutes = parseInt( totalSec / 60 ) % 60;
        var seconds = totalSec % 60;

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerDisplayStr = years + " years " + days + " days " +
            hours + ":" + minutes + ":" + seconds;

        return timerDisplayStr;
    }

    this.startTimer = function() {
        var self = this;
        if (self.lcTimerInterval) {
            clearInterval(self.lcTimerInterval);
        }

        this.lcTimerInterval = setInterval(function() {
            self.timerValue--;
            if (self.timerValue <= 0) {
                clearInterval(self.lcTimerInterval);
                console.log("Stopped timer interval");
            }

            var timerDisplayStr = self.getTimerDisplay(self.timerValue);
            self.timerDisplay.html(timerDisplayStr);

        }, 1000);
    }

    this.startTimerByBirthDate = function(birthdate) {
        var self = this;
        self.birthdate = birthdate;

        // calculate life left in seconds
        var currentDate = new Date();
        var totalYears = 80;
        var totalSeconds = totalYears * 365 * 24 * 60 * 60;

        var bdDate = new Date(birthdate);
        var diffSeconds = Math.round((currentDate - bdDate) / 1000);
        var diffdays = diffSeconds / 60 / 60 / 24;

        // calculate seconds left in life
        self.timerValue = totalSeconds - diffSeconds;
        this.startTimer();
    }

    return this;
};
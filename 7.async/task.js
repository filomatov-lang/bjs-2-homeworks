class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(timeString, callback) {
        try {
            if (typeof(timeString) !== 'string' || typeof(callback) !== 'function') {
                throw new Error('Отсутствуют обязательные аргументы');
            }

            let [hours, minutes] = timeString.split(':');
            hours = parseInt(hours);
            minutes = parseInt(minutes);
            
            if ((hours < 0 || hours > 23) || (minutes < 0 || minutes > 59) || isNaN(hours) || isNaN(minutes)) {
                throw new Error('Введены некорректные значения времени');
            }

            hours = String(hours).padStart(2, '0');
            minutes = String(minutes).padStart(2, '0');
            let normalizedTime = hours + ':' + minutes;

            if (this.alarmCollection.find(item => item.time === normalizedTime)){
                console.warn('Уже присутствует звонок на это же время');
            }
            this.alarmCollection.push({
                callback: callback,
                time: normalizedTime,
                canCall: true
            });

        } catch (error) {
            throw error;
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        let hours = String(currentDate.getHours()).padStart(2, '0');
        let minutes = String(currentDate.getMinutes()).padStart(2, '0');
        let currentTime = hours + ':' + minutes;
        
        return currentTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            let currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {alarm.canCall = true;});
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
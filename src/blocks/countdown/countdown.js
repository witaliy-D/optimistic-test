// eslint-disable-next-line no-redeclare,no-unused-vars
/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function (){
  const deadline = 'September 1 2021 00:00:00 GMT+0300';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    // eslint-disable-next-line no-use-before-define
    const timeinterval = setInterval(updateClock, 1000);
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.countdown__days');
    const hoursSpan = clock.querySelector('.countdown__hours');
    const minutesSpan = clock.querySelector('.countdown__minutes');
    const secondsSpan = clock.querySelector('.countdown__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        clearInterval(timeinterval);
        // eslint-disable-next-line no-shadow
        const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('countdown', deadline);
      }

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }

    updateClock();
  }

  initializeClock('countdown', deadline);
});



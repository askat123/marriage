
function countdown() {
    const timer = document.getElementById('timer');
    const now = new Date().getTime();
    const targetDate = new Date('2023-12-31 23:59:59').getTime(); // Установите желаемую дату обратного отсчета

    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timer.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        timer.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        timer.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        timer.textContent = 'Время истекло!';
    }
}

setInterval(countdown, 1000);
countdown();




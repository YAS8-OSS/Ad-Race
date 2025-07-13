// الوقت النهائي (مثلاً بعد يوم)
const countdownDate = new Date("2025-07-20T23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "انتهى الوقت!";
  }
}, 1000);


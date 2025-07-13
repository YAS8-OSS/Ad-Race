// ضبط تاريخ انتهاء المسابقة (مثال: 5 أيام من الآن)
const countdownElement = document.getElementById('countdown');
const endDate = new Date();
endDate.setDate(endDate.getDate() + 5);

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    countdownElement.textContent = 'انتهت المسابقة، شكرًا لمشاركتكم!';
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent =
    `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// التعامل مع إرسال النموذج (مؤقت، ممكن تعدلي حسب طريقة الاستقبال)
document.getElementById('submissionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('شكرًا لمشاركتك! سيتم مراجعة الفيديو قريبًا.');
  this.reset();
});

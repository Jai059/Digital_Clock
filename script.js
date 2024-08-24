const digitalTime = () => {
  const clockContainer = document.querySelector('.clock-container');
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let am_pm = 'AM';

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    am_pm = 'PM';
  }

  const hour = h < 10 ? '0' + h : h;
  const minutes = m < 10 ? '0' + m : m;
  const seconds = s < 10 ? '0' + s : s;

  const time = `${hour}  :  ${minutes} : ${seconds}  ${am_pm}`;

  clockContainer.textContent = time;
};

setInterval(digitalTime, 1000);

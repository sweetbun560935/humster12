const GOGI = document.querySelector('.gogi__img');
const POINTS = document.querySelector('.points');

let pointNumber;

if (!localStorage.getItem('points')) {
  pointNumber = 0;
} else {
  pointNumber = localStorage.getItem('points');
  POINTS.innerHTML = pointNumber;
}

GOGI.addEventListener('click', function() {
  pointNumber++;
  localStorage.setItem('points', pointNumber);
  POINTS.innerHTML = localStorage.getItem('points');
  GOGI.classList.add('animate');
  setTimeout(function(){
    GOGI.classList.remove('animate');
  }, 1);
})
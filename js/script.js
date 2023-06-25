const inputUk = document.querySelector('#uk');
const inputTug = document.querySelector('#tug');

inputUk.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputTug.value = (+inputUk.value / data['current-tug'].tug).toFixed(2);
    } else {
      inputTug.value = "Что-то пошло не так";
    }
  });
});

inputTug.addEventListener('input', () => {
    const request = new XMLHttpRequest();
  
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
  
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response);
        inputUk.value = (+inputTug.value / data['current-uk'].uk).toFixed(2);
      } else {
        inputUk.value = "Что-то пошло не так";
      }
    });
  });
  

var xhr = new XMLHttpRequest();
xhr.open('GET', '/img/Shape_2.svg', true);
xhr.responseType = 'blob';

xhr.onload = function () {
  if (xhr.status === 200) {
    var reader = new FileReader();
    reader.onloadend = function () {
      var encodedSvg = reader.result;
      console.log(encodedSvg);
    };
    reader.readAsDataURL(xhr.response);
  }
};

xhr.send();
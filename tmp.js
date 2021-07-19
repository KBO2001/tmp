let xhr = new XMLHttpRequest();
xhr.open('GET', "tmp.json");

xhr.onload = () => {
  let responseJson = JSON.parse(xhr.response);
  console.log(responseJson[0][0]);
}

xhr.send();
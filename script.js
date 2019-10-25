(function () {
  function proto() {
    this.get = function (url, callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.response)
          callback(data)
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    }
  }
  function http() { }
  http.prototype = new proto()
  window.http = new http()
})()

http.get('/data.json', data => {
  let baseElement = document.getElementById("content")
  data.forEach(item => {
    let title = document.createElement('h3')
    let description = document.createElement('p')
    title.innerText = item.title
    description.innerText = item.description
    // TODO: add year and gender
    let element = document.createElement('div')
    element.classList.add('item')
    element.appendChild(title).appendChild(description)
    baseElement.appendChild(element)
  })
})
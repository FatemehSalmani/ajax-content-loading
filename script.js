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

// FIXME: to load from github.com shall use this address : 
// https://raw.githubusercontent.com/easa/ajax-content-loading/master/data.json
// instead of using '/data.json' in simple server
http.get('https://raw.githubusercontent.com/easa/ajax-content-loading/master/data.json', data => {
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

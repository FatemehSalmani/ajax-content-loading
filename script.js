(function () {
  function proto() {
    this.get = function (url, callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var data = this.response;
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
http.get('https://raw.githubusercontent.com/faslm/ajax-content-loading/master/data.json', data => {
  let baseElement = document.getElementById("introduction")
  data = JSON.parse(data)
  data.forEach(item => {
    let picture = document.createElement('img')
    let title = document.createElement('h3')
    let year = document.createElement('h6')
    let gender = document.createElement('h5')
    let distance  = document.createElement('br')
    let description = document.createElement('p')
  
    picture.src = item.picture
    title.innerText = item.title
    year.innerText = "("+item.year+")"
    gender.innerText ="gender:"+ item.gender
    description.innerText = item.description
  
    let element = document.createElement('div')
    element.classList.add('item')
    element.appendChild(picture)
    element.appendChild(title)
    element.appendChild(year)
    element.appendChild(gender)
    element.appendChild(distance)
    element.appendChild(description)
   
    baseElement.appendChild(element)
  })
  })

 // http.get('https://github.com/faslm/ajax-content-loading/blob/master/README.md', data => {
  //let baseElement = document.getElementById("header")
   // let description = document.createElement('p')
   // description.innerText = marked('data');
   // let element = document.createElement('div')
   // element.appendChild(description)
   // baseElement.appendChild(element)

  //})


 

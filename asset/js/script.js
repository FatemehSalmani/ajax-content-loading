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
http.get('https://faslm.github.io/ajax-content-loading/asset/js/data.json', data => {
  let baseElement = document.getElementById("introduction")
  data = JSON.parse(data)
  data.forEach(item => {
    let picture = document.createElement('img')
    let title = document.createElement('h2')
    let year = document.createElement('span')
    let gender = document.createElement('span')
    let distance  = document.createElement('br')
    let description = document.createElement('p')
  
    picture.src = item.picture
    title.innerText = item.title
    year.innerText = "("+item.year+")"
    gender.innerText ="gender:"+ item.gender
    description.innerText = item.description
  
    let element = document.createElement('article')
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

 http.get('https://faslm.github.io/ajax-content-loading/README.md', data => {
  let baseElement = document.getElementById("readmeContent")
  let readme = document.createElement('header')
  readme.classList.add('readmeMd')
  readme.innerHTML = marked(data);
  baseElement.appendChild(readme)
   

  })


  

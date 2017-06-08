'use strict'

var PAGE_URL = 'http://expressjs.com/en/4x/api.html'
var data = parse()
var input = document.getElementById('filter')

input.addEventListener('input', function () {
  var key = this.value.trim()
  filter(key, data)
})

input.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    this.value = ''
    filter()
  }
})

function parse() {
  var data = []
  var menu = document.getElementById('menu')
  var links = menu.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    var a = links[i]
    var href = a.getAttribute('href')
    if (href[0] === '#') {
      href = PAGE_URL + href
      a.setAttribute('href', href)
      var text = a.textContent.trim()
      data.push({
        text: text,
        _text: text.toLowerCase(),
        href: href
      })
    }
  }
  return data
}

function filter(key, data) {
  if (!key) {
    document.body.classList.remove('filtering')
    return
  }

  document.body.classList.add('filtering')
  var results = data.filter(function (x) {
    return x._text.indexOf(key) > -1
  })

  var items = results.map(function (x) {
    return '<li><a href="' + x.href + '">' + x.text + '</a></li>'
  })
  document.getElementById('menu2').innerHTML = items.join('\n')
}

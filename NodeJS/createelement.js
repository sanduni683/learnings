var element = document.createElement('div')
var element2 = document.createElement('div')
var element3 = document.createElement('div')

element.style.cssText = "width:200px; height:20px; background: green"
element2.style.cssText = "width:200px; height:20px; background: orange"
element3.style.cssText = "width:200px; height:20px; background: purple"


element.onclick = function () { alert("Helllo....!") }

//append element 'div' to body tag/node and this shws at tthe end of body tag(even after <script></script>)
document.body.appendChild(element)

//append element 'div' to body tag and before id="yellow"
var target1 = document.getElementById('yellow')

document.body.insertBefore(element2, target1)

//append element 'div' to body tag and before id="blue"
var target2 = document.getElementById('blue')

document.body.insertBefore(element3, target2)

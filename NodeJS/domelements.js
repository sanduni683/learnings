var pPara1 = document.getElementById("para1")

pPara1.innerText = "Welcome to <span>JavaScript World...! </span>"

pPara1.innerHTML += "There are lot of <span>interesting</span> things to learn"

//Cant use both outerHTML and outerText here , only first one executes.
pPara1.outerHTML = '<h2 id="para1">Welcome to &lt;span&gt;JavaScript World...! &lt;/span&gt;There are lot of <span>interesting</span> things to learn</h2>'

//pPara1.outerText = '<h5 id="para1">Welcome to &lt;span&gt;JavaScript World...! &lt;/span&gt;There are lot of <span>interesting</span> things to learn</h5>'

var spanH2 = document.querySelectorAll('h2 span')

spanH2[0].innerHTML = "new text here...."

//////////////////////JAVASCRIPT STYLING SAME AS CSS////////////////////////////////////////////////////////////////////////////////////////////

var el = document.getElementById('style')

//accessing property by property
el.style.background = "yellow"
el.style.color = "white"
/*
el.style.width = "200px"

//accessing whole cssText
el.style.cssText = "background : blue; color : white; width: 200px"
el.style.cssText += "height : 100px"
*/

//accessing pre-defined or computed styles
console.log(getComputedStyle(el))

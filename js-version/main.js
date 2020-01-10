//Created by smitbarmase on 7 Jan 2020
//JavaScript file for index.html

//GPA prototype
class GPA{
  grIntoCr = 0 //Sum of respective grade * credit
  totalCr = 0 //Sum of all credit
  dic = {'S':10, 'A':9, 'B':8, 'C':7, 'D':6, 'E':5, 'F':0}

  addSubject(gr,cr){ //Function for adding grade and credit
    this.grIntoCr += this.dic[gr.toUpperCase()]*cr
    this.totalCr += cr
  }

  getGpa(){ //Function for calculation
    return (this.grIntoCr/this.totalCr).toFixed(2)
  }
}

myGPA = new GPA()

//Prototype for Grade and Credit.
let inputPrototype = document.querySelector('tr').cloneNode(true)

//Add button listner.
document.querySelector('#add').addEventListener('click', function(){
  document.querySelector('tbody').appendChild(inputPrototype)
  inputPrototype = document.querySelectorAll('tr')[document.querySelectorAll('tr').length-1].cloneNode(true)
  document.querySelector('#result').textContent = 'Input data...'
})

//Calculate button listner.
document.querySelector('#calc').addEventListener('click', function(){
  //Clear existing variable data.
  myGPA.grIntoCr = 0
  myGPA.totalCr = 0
  document.querySelector('#result').remove()

  //Store data in variables from text field.
  document.querySelectorAll('tr').forEach(function(element){
    g = element.children[0].children[0].value
    c = Number(element.children[1].children[0].value)
    myGPA.addSubject(g,c)
  })

  //Calculate GPA with stored data.
  let result = document.createElement('h4')
  result.textContent = `Your GPA is ${myGPA.getGpa()}`
  result.id = "result"
  document.querySelector('body').appendChild(result)
})

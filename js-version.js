// Created by smitbarmase on 7 Jan 2020

class GPA {
  grIntoCr = 0 //Sum of respective grade * credit
  totalCr = 0 //Sum of all credit
  dic = {'S':10, 'A':9, 'B':8, 'C':7, 'D':6, 'E':5, 'F':0}

  addSubject(gr,cr) { //Function for adding grade and credit
    this.grIntoCr += this.dic[gr.toUpperCase()]*cr
    this.totalCr += cr
  }

  getGpa() { //Function for calculation
    return (this.grIntoCr/this.totalCr).toFixed(2)
  }
}

myGPA = new GPA() //User input here
myGPA.addSubject('A',4)
myGPA.addSubject('B',2)

console.log(myGPA.getGpa()) //Get 'GPA' here

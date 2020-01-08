// Created by smitbarmase on 7 Jan 2020

const GPA = {
  grIntoCr: 0, //Sum of respective grade * credit
  totalCr: 0, //Sum of all credit

  //Function for adding grade and credit for specific subject.
  addSubject: function(gr,cr) {
    gr = gr.toUpperCase()
    cr = Math.round(cr)

    switch (gr) {
      case 'S':
        this.grIntoCr += 10*cr
        break
      case 'A':
        this.grIntoCr += 9*cr
        break
      case 'B':
        this.grIntoCr += 8*cr
        break
      case 'C':
        this.grIntoCr += 7*cr
        break
      case 'D':
        this.grIntoCr += 6*cr
        break
      case 'E':
        this.grIntoCr += 5*cr
        break
      case 'F':
        this.grIntoCr += 0*cr
        break
      default:
    }
    this.totalCr += cr
  },

  //Calculation
  getGpa: function() {
    return (this.grIntoCr/this.totalCr).toFixed(2)
  }
}

//User input here //User can modify values here.
GPA.addSubject('A',4)
GPA.addSubject('B',2)

//Get 'GPA' here
console.log(GPA.getGpa())

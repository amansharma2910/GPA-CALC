const calculateBtn = document.querySelector('#calc') as HTMLButtonElement; // Calculate Button
const addBtn = document.querySelector('#add') as HTMLButtonElement; // Adding subject Button
const listEle = document.querySelector('#subList') as HTMLUListElement; // List (UL) Tag
const gradesInput = document.getElementsByClassName('grade'); // Grades Input field
const creditsInput = document.getElementsByClassName('credit'); // Credits Input field

// Calculating the GPA
// Calculate button event listener
calculateBtn?.addEventListener('click', _event => {
  const summationList: Array<number> = [];
  let totalCredit = 0;
  const gradeCal: any = { S: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };

  // Getting all the grades and credits of all the subjects and pushing them into "summationList"
  for (let i = 0; i < gradesInput.length; i++) {
    const gradeip = gradesInput[i] as HTMLInputElement; // NodeElement to HTML Input element
    const creditip = creditsInput[i] as HTMLInputElement; // NodeElement to HTML Input element
    const grade = gradeip.value.toUpperCase();
    const credit: number = +creditip.value;
    const multiply: number = gradeCal[grade] * credit;
    summationList.push(multiply); // Pushing multiply into the summation list
    totalCredit += credit; // Adding the credits of each subject
  }

  let finalSum = 0;
  summationList.forEach(ele => {
    finalSum += ele; // Adding the values in the summation list
  });

  const finalGPA = finalSum / totalCredit;
  const resultEle = document.querySelector('#result') as HTMLElement;
  resultEle.innerHTML = `Your GPA is ${finalGPA.toFixed(2)}`;
});

// Add subject event listener
addBtn?.addEventListener('click', _event => {
  const liTag = document.createElement('li') as HTMLLIElement;
  let indexVal = listEle.getElementsByTagName('li').length;
  liTag.innerHTML = ` <span class="index">${indexVal + 1})</span>
    <input class="name">
    <input class="grade" placeholder="Grades">
    <input class="credit" placeholder="Credits">
    <button class="remove" onclick="remove(this)">x</button>`;
  liTag.style.listStyle = 'none';
  listEle.appendChild(liTag);
});

// Remove subject listener
function remove(event: EventTarget) {
  const rem = (<HTMLElement>event).parentNode as HTMLLIElement;
  rem.style.display = 'none';
}

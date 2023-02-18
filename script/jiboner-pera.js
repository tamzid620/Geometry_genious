



// random hover =====
// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
  
//   document.querySelectorAll('card').addEventListener('mouseover', event => {
//         event.target.style.fill = randomColor();
//   });
const card1 = document .getElementById('card-1');
card1.addEventListener('mouseover', red);

function red(){
 document.body.style.backgroundColor = 'red';
}
const card2 = document .getElementById('card-2');
card1.addEventListener('mouseover', plum);

function plum(){
 document.body.style.backgroundColor = 'plum';
}
const card3 = document .getElementById('card-3');
card1.addEventListener('mouseover', purple);

function purple(){
 document.body.style.backgroundColor = 'purple';
}

const card4 = document .getElementById('card-4');
card1.addEventListener('mouseover', green);

function green(){
 document.body.style.backgroundColor = 'green';
}

const card5 = document .getElementById('card-5');
card1.addEventListener('mouseover', grey);

function grey(){
 document.body.style.backgroundColor = 'grey';
}

const card6 = document .getElementById('card-6');
card1.addEventListener('mouseover', blue);

function blue(){
 document.body.style.backgroundColor = 'blue';
}

const card7 = document .getElementById('card-7');
card1.addEventListener('mouseover', pink);

function pink(){
 document.body.style.backgroundColor = 'pink';
}

// blog link ==============

// btn triangle  col ==============
document.getElementById('btn-triangle').addEventListener('click', function(){

  const inputField1Element = document.getElementById('input-1');
  const inputField1tStirng = inputField1Element.value;
  const inputField1  = parseFloat(inputField1tStirng);
  if(isNaN(inputField1)){
    alert('please provide a valid number');
   
}
  else if(inputField1 <= 0){
    alert('please use positive number')
  }

  const inputField2Element = document.getElementById('input-2');
  const inputField2tStirng = inputField2Element.value;
  const inputField2  = parseFloat(inputField2tStirng);
  if(isNaN(inputField2)){
    alert('please provide a valid number');
}
else if(inputField2 <= 0){
  alert('please use positive number')

}

  const resulttriangleElement = document.getElementById('result-triangle');
  const resulttriangleString = resulttriangleElement.innerText;
  const resulttriangle = parseFloat(resulttriangleString);

    const mathtriangle = 0.5 * inputField1 * inputField2 ;
  resulttriangleElement.innerText = mathtriangle;
})

// btn rectangle  col ==============
document.getElementById('btn-rectangle').addEventListener('click', function(){

  const inputField3Element = document.getElementById('input-3');
  const inputField3tStirng = inputField3Element.value;
  const inputField3  = parseFloat(inputField3tStirng);
  if(isNaN(inputField3)){
    alert('please provide a valid number');
   
}
  else if(inputField3 <= 0){
    alert('please use positive number')
  }

  const inputField4Element = document.getElementById('input-4');
  const inputField4tStirng = inputField4Element.value;
  const inputField4  = parseFloat(inputField4tStirng);
  if(isNaN(inputField4)){
    alert('please provide a valid number');
}
else if(inputField4 <= 0){
  alert('please use positive number')

}

  const resultrectangleElement = document.getElementById('result-rectangle');
  const resultrectangleString = resultrectangleElement.innerText;
  const resultrectangle = parseFloat(resultrectangleString);

    const mathrectangle = inputField3 * inputField4 ;
  resultrectangleElement.innerText = mathrectangle;
})
// btn parallelogram col ============
document.getElementById('btn-parallelogram').addEventListener('click', function(){

  const inputField5Element = document.getElementById('input-5');
  const inputField5tStirng = inputField5Element.value;
  const inputField5  = parseFloat(inputField5tStirng);
  if(isNaN(inputField5)){
    alert('please provide a valid number');
   
}
  else if(inputField5 <= 0){
    alert('please use positive number')
  }

  const inputField6Element = document.getElementById('input-6');
  const inputField6tStirng = inputField6Element.value;
  const inputField6  = parseFloat(inputField6tStirng);
  if(isNaN(inputField6)){
    alert('please provide a valid number');
}
else if(inputField6 <= 0){
  alert('please use positive number')

}

  const resultparallelogramElement = document.getElementById('result-parallelogram');
  const resultparallelogramString = resultparallelogramElement.innerText;
  const resultparallelogram = parseFloat(resultparallelogramString);

    const mathparallelogram = inputField5 * inputField6 ;
  resultparallelogramElement.innerText = mathparallelogram;
})
// btn rhombus col ============
document.getElementById('btn-rhombus').addEventListener('click', function(){

  const inputField7Element = document.getElementById('input-7');
  const inputField7tStirng = inputField7Element.value;
  const inputField7  = parseFloat(inputField7tStirng);
  if(isNaN(inputField7)){
    alert('please provide a valid number');
   
}
  else if(inputField7 <= 0){
    alert('please use positive number')
  }

  const inputField8Element = document.getElementById('input-8');
  const inputField8tStirng = inputField8Element.value;
  const inputField8  = parseFloat(inputField8tStirng);
  if(isNaN(inputField8)){
    alert('please provide a valid number');
}
else if(inputField8 <= 0){
  alert('please use positive number')

}

  const resultrhombusElement = document.getElementById('result-rhombus');
  const resultrhombusString = resultrhombusElement.innerText;
  const resultrhombus = parseFloat(resultrhombusString);

    const mathrhombus = 0.5 * inputField7 * inputField8 ;
  resultrhombusElement.innerText = mathrhombus;
})
// btn pentagon col ============
document.getElementById('btn-pentagon').addEventListener('click', function(){

  const inputField9Element = document.getElementById('input-9');
  const inputField9tStirng = inputField9Element.value;
  const inputField9  = parseFloat(inputField9tStirng);
  if(isNaN(inputField9)){
    alert('please provide a valid number');
   
}
  else if(inputField9 <= 0){
    alert('please use positive number')
  }

  const inputField10Element = document.getElementById('input-10');
  const inputField10tStirng = inputField10Element.value;
  const inputField10  = parseFloat(inputField10tStirng);
  if(isNaN(inputField10)){
    alert('please provide a valid number');
}
else if(inputField10 <= 0){
  alert('please use positive number')

}

  const resultpentagonElement = document.getElementById('result-pentagon');
  const resultpentagonString = resultpentagonElement.innerText;
  const resultpentagon = parseFloat(resultpentagonString);

    const mathpentagon = 0.5 * inputField9 * inputField10 ;
  resultpentagonElement.innerText = mathpentagon;
})
// btn ellipse col ============
document.getElementById('btn-ellipse').addEventListener('click', function(){

  const inputField11Element = document.getElementById('input-11');
  const inputField11tStirng = inputField11Element.value;
  const inputField11  = parseFloat(inputField11tStirng);
  if(isNaN(inputField11)){
    alert('please provide a valid number');
   
}
  else if(inputField11 <= 0){
    alert('please use positive number')
  }

  const inputField12Element = document.getElementById('input-12');
  const inputField12tStirng = inputField12Element.value;
  const inputField12  = parseFloat(inputField12tStirng);
  if(isNaN(inputField12)){
    alert('please provide a valid number');
}
else if(inputField12 <= 0){
  alert('please use positive number')

}

  const resultellipseElement = document.getElementById('result-ellipse');
  const resultellipseString = resultellipseElement.innerText;
  const resultellipse = parseFloat(resultellipseString);

    const mathellipse = 3.14 * inputField11 * inputField12 ;
  resultellipseElement.innerText = mathellipse;
})








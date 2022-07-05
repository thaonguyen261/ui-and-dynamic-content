let form = document.querySelector('form');
let input = document.getElementById('input');
let result = document.getElementById('result');
let feedback = document.getElementById('feedback');
let error = 'No items entered';



function addItem(e){

   
   e.preventDefault();

      console.log(input.value);

      let li = document.createElement('li');
      li.textContent = input.value;


      if (input.value !== ''){

         result.appendChild(li);
         
         form.reset();
         form.focus();
         
      } else {
         feedback.innerHTML = error;
      }


};

// make validateForm listen for click event OR you could say
// register button btn for 'click' event
form.addEventListener('submit', addItem);

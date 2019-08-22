const form= document.getElementById('email-form'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('sendBtn');


 eventListeners();
 
 
 function eventListeners(){
     email.addEventListener('blur',validateEmail);
     subject.addEventListener('blur',validateForm);
     message.addEventListener('blur',validateForm);
     sendBtn.disabled= true;
     form.addEventListener('submit',submitEmail);
 }


 function validateForm(e){
     if(e.target.value.length >0){
        e.target.style.borderBottomColor = '#26a96a ';
        e.target.classList.remove("error");
        checkValidations();
     }else{
        e.target.classList.add("error");
        e.target.style.borderBottomColor = 'red ';
     }
 }

 function validateEmail(e){
     validateForm(e);
     let email = e.target.value;
     //console.log(email.indexOf('@'));
    if(email.indexOf('@') == -1 && email.indexOf('.') == -1){
        e.target.classList.add("error");
        e.target.style.borderBottomColor = 'red ';
        checkValidations();
    }else{
        e.target.classList.remove("error");
    }
 }


 function checkValidations(){
     if(email.value.indexOf('@') != -1 && subject.value.length != 0 && message.value.length != 0 ){
        sendBtn.disabled = false;
     }
     
 }

 function submitEmail(e){
     e.preventDefault();
    
     let spinner = document.querySelector('#spinner');
     let loaders = document.getElementById('loaders');
     let mailGif = document.createElement('img');
     mailGif.src = 'img/mail.gif';
     spinner.style.display = 'block';
     mailGif.style.display = 'none';
     loaders.appendChild(mailGif);
     setTimeout(()=>{
        spinner.style.display = 'none';
         mailGif.style.display = 'block';
      
     },3000);
 }
import * as formValid from './module.js';

function formValidation(){
    //get form
    const form = document.querySelector('form');

    function validation(e){
        //preventDefault
        e.preventDefault();
        //get-inputs except submit
        const inputs = form.querySelectorAll('input:not(#register-button) ');
      

        function inputValidate(input){

            if ((typeof(input)===null && typeof(input) === undefined)) {
                console.log('working');
                return;
                
            }else{
                if (input.value.trim() =='') {
                    //get input type
                const inputType = input.type;
                console.log(inputType);
    
                switch(inputType){
    
                    case 'text':{
                        if (input.value.trim()=='') {
    
                            formValid.showError(input, 'username is required')
                       }
                        else{
                            formValid.showSuccess(input)
                        }
                    }
                    break;
                    case 'email':{
                        if (input.value.trim()=='') {
    
                            formValid.showError(input, 'email is required')
                       }
                        else{
                            formValid.showSuccess(input)
                        }
                    }
                    break;
                    case 'password':{
                        if (input.value.trim()=='') {
    
                            formValid.showError(input, 'password is required')
                       }
                        else{
                            formValid.showSuccess(input)
                        }
                    }
                    break;
                }
                    
                }else{
                    const inputType2 = input.type;
                    
                    console.log(inputType2);
    
                    switch(inputType2){
                        case 'text':{
                            formValid.userNameValidation(input);
                        }
                        break;
                        case 'email':{
                            formValid.emailValidation(input)
                        }
                        break;
                        case 'password':{
                            formValid.passwordValidation(input)
                        }
                        break;
                    
                    
                    
                    
                    
                    
                    }
        
    
    
                }
    
              
            }
           

        }
        

    
    
    
    
    
        //foreach input validates
        inputs.forEach(inputValidate);
      
        // inputValidate(undefined)
      
    
    }










//events
form.addEventListener('submit', validation)

}











//
window.addEventListener('DOMContentLoaded', formValidation);
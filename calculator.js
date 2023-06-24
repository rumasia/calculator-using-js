let string="";
let buttons=document.querySelectorAll('.btn');
const displayInput=document.querySelector('.display');
const deleteBtn=document.getElementById('deleteBtn');
for(const button of buttons){
    button.addEventListener('click',function(event){
        if(event.target.dataset.id == '='){
            string.eval(string);
           document.getElementById('displayHere').value=string;
           

        }else if(event.target.dataset.id == 'DEL'){
            
        }
    else if(event.target.dataset.id == 'AC'){
   string="";
  document.getElementById('displayHere').value=string;

    }else{
        string = string + event.target.dataset.id;
      document.getElementById('displayHere').value=string;
    }
       
    
    })
}

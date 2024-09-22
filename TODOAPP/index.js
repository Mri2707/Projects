let TOdoList = JSON.parse(localStorage.getItem('TODOLIST')) || [];
displayItems();

function addtoDo(){  
   let inputElement = document.querySelector('#data-enter-button'); 
   let dateElement = document.querySelector('#date-enter-button');
   let timeElment = document.querySelector('#time-enter-button');
   
   let todoItem = inputElement.value.trim();   
   let todoDate  = dateElement.value.trim();
   let todotime = timeElment.value.trim();

   if(todoItem ==='' || todotime === '' || todoDate === ''){
    alert('Please Fill in all the boxes');
    return;
   }
   else{
   TOdoList.push({item:todoItem ,time:todotime, date:todoDate});
   localStorage.setItem('TODOLIST',JSON.stringify(TOdoList));
   inputElement.value = '';
   timeElment.value = '';
   dateElement.value = '';
   displayItems();
   }
}

function deleteItems(index){
    TOdoList.splice(index,1);
    localStorage.setItem('TODOLIST',JSON.stringify(TOdoList));
    displayItems();
}

function displayItems(){
    let displayElement = document.querySelector('.todo-container');
    
    let newHtml = '';
    for(let i = 0;i<TOdoList.length;i++){
        let {item,time,date} = TOdoList[i];
        newHtml += `          
            <span class = "span-items">${item}</span>
            <span class = "span-items">${time}</span>
            <span class = ""span-items>${date}</span>
            <button class = "imp-buttons" id = "del-button" onclick = "deleteItems(${i})"
            >Delete</button>
        `;
    }
    displayElement.innerHTML = newHtml;
}
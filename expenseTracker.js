
function submitUserDetails(event){
    event.preventDefault();
    const userDetails={

        expenseAmount:event.target.expenseAmount.value,
        description:event.target.description.value,
        expenseCategory:event.target.expenseCategory.value
        
    }
    const userDetailsJSON=JSON.stringify(userDetails);
    localStorage.setItem('userDetails',userDetailsJSON);

    const userDetailsJson1=localStorage.getItem('userDetails')

    if(userDetailsJson1){
        const userDetails2=JSON.parse(userDetailsJson1)
        displayOnPage(userDetails2);
        console.log(userDetails2)
    }

    
    document.getElementById('expenseAmount').value="";
    document.getElementById('description').value="";
    document.getElementById('expenseCategory').value="";  
}

function displayOnPage(userDetails2){
    
    
    const listItems=document.createElement('li')
    listItems.setAttribute('class','list-group-item font-monospace')
    
    listItems.appendChild(document.createTextNode(`

       EXPENSE AMOUNT : ${userDetails2.expenseAmount}\n
       DESCRIPTION : ${userDetails2.description} \n
       EXPENSE CATEGORY: ${userDetails2.expenseCategory}


    `))


    const unorderedList=document.querySelector('ul');
    unorderedList.setAttribute('class','list-group list-group')
    unorderedList.appendChild(listItems)

    const deleteBtn=document.createElement('button');
    deleteBtn.style.marginLeft="900px"
    deleteBtn.setAttribute('class','btn btn-outline-dark')
    deleteBtn.appendChild(document.createTextNode('DELETE'))
    listItems.appendChild(deleteBtn);

    const editBtn=document.createElement('button');
    editBtn.style.marginLeft='5px';
    editBtn.setAttribute('class','btn btn-outline-dark');
    editBtn.appendChild(document.createTextNode('EDIT'))
    listItems.appendChild(editBtn)
    
        

}
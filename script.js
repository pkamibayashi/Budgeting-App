
//Total Balance
let balanceElement = document.getElementById('balance')

//Value Input 

const valueInputElement = document.querySelector('input')

//Income/expense

const selectElement = document.querySelector('select')

//Addition Button 
const additionButtonElement = document.querySelector('footer button')

//Entry List 
const entryListElement = document.querySelector('ul')



function addEntry (amount, operation) {
  const listEntry = document.createElement('li')
  listEntry.classList.add(operation)

  const listEntryValue = document.createElement('strong')

  const listEntryDescription = document.createElement('em')
  listEntryDescription.innerText = 'Description'

  const listEntryOperator = document.createElement('span')

 


  if (operation === 'income'){
    listEntryOperator.innerText = '+'
  } else if (operation ==='expense'){
    listEntryOperator.innerText = '-'
  }


  listEntryValue.innerText = amount + "$";

  listEntry.appendChild(listEntryDescription)
  listEntry.appendChild(listEntryOperator)
  listEntry.appendChild(listEntryValue);


  entryListElement.appendChild(listEntry)
}

function updateBalance () {
  let total = 0
  for(let item of entryListElement.children){
    console.log(item)
    const valueElement = item.querySelector('strong')
    const operationElement = item.querySelector('span')

    const value = parseInt(valueElement.innerText); 
    const operation = operationElement.innerText

    if(operation === '+'){
      total = total + value
    } else if (operation === '-'){
      total = total - value
    }
  }

  balanceElement.innerText =  total + "$";
}



additionButtonElement.onclick = function () {
   const amount = valueInputElement.value;
   const operation = selectElement.value;

   addEntry(amount, operation);
   valueInputElement.value = ''

   updateBalance()
}
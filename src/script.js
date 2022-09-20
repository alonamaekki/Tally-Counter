// document.getElementById("count").innerText = 5


var count = 0


function increment()
{
   let countEl = document.getElementById("count-el")
  count = count + 1
  document.getElementById("count-el").innerText = count
  
}


function decrement()
{
  if (count > 0)
    {
    count = count - 1
    document.getElementById("count-el").innerText = count
    console.log(count)
    }
  else 
    {
      
      console.log("The current value cannot be less than 0")
      document.getElementById("count-el").innerText = count
    }
}

function save()
{
 let saveEl = document.getElementById("save-el")
 let countStr = count + " - "
 saveEl.textContent += countStr
  console.log(count)
  document.getElementById("count-el").innerText = 0
  count= 0
}
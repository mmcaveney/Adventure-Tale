// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.

function endGame(currentPage){
      
    for (let index=0; index < endingPages.length; index += 1){
          
        if (currentPage === endingPages[index]){
              return true
          }
      }
      
      return false
}


while(currentPage !== null){
    currentPage = prompt(pages[currentPage])
    
    currentPage= parseInt(currentPage)
    
    document.write(`<p>${pages[currentPage]}</p>`)
   
    if (endGame(currentPage)===true){
        document.write(`<h2>Game Over</h2>`)
        currentPage = null
    }
}        
            
            
        






    
      




function fetchdata(grade){
    fetch('data/main.json')
    .then(response => response.json())
    .then(data => {

        
        const grade_buttons = document.getElementsByClassName("grade_buttons")
        for (let i = 0; i < grade_buttons.length; i++) {
            grade_buttons[i].style.height = "45px";
          }
        const all_chapterdiv = document.getElementsByClassName("list_chapters")
        Array.from(all_chapterdiv).forEach(divs =>{
            divs.innerHTML = ""

        })

        const chapterdiv = document.getElementById("chapters_"+ grade)
            
        

        data['grade'+ grade].chapters.forEach(title => {
            const button = document.createElement('button')
            button.textContent = title
            button.className = "chapter_buttons"
            button.addEventListener('click',() => redirect(title.split(" ").join("_"),grade));
            

            chapterdiv.appendChild(button)


            
        });

    })

    .catch(error => {
        console.log(error)
    })

}



function redirect(info,grade){
    savePageState(grade)
    
    window.location.href = "pdf.html?file="+info + "&grade=" + grade
    
    


}


  

function savePageState(grade) {
    const state = {
      grade: grade,
    };
    //console.log(grade,"pushing")
    history.pushState(state, null, null);
  }
  

  window.addEventListener('popstate', function(event) {
    //console.log("looking")
    
    const savedState = event.state;
  
    
    if (savedState) {
      
      const savedGrade = savedState.grade;
      //console.log(savedGrade)

      fetchdata(savedGrade)
  
      
    }
  });
  


  function restorePageState() {
    const savedState = history.state;
  
    if (savedState) {
      const savedGrade = savedState.grade;
      
      fetchdata(savedGrade)
  
      // Restore the page to the saved state
      // ... Add your logic to set the grade and chapter to the saved values
    }
  }
  
  window.addEventListener('popstate', function(event) {
    restorePageState();
  });
  
  // Call restorePageState on page load
  document.addEventListener('DOMContentLoaded', function() {
    restorePageState();
  });
  

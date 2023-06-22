
function fetchdata(grade){
    fetch('data/main.json')
    .then(response => response.json())
    .then(data => {
        const grade_buttons = document.getElementById("grade_buttons_container")
        grade_buttons.style.display = "none"

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
    window.location.href = "pdf.html?file="+info.split(" ").join("_") + "&grade=" + grade


}







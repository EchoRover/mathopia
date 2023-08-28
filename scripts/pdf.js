function getdata(){

    const pdf_container = document.getElementById("pdf_container")

    var url = new URLSearchParams(window.location.search)
    var file = url.get('file').split("_").join(" ")
    var grade = url.get('grade')
    
    document.title = file;

    const pdf_file = document.createElement('iframe')

    pdf_file.src = "g" +grade + "math/" + file + ".pdf"
    pdf_file.className = "pdf_file"
    pdf_file.id = "pdf_file"

    
    pdf_container.append(pdf_file)

}


function hide_show_func(){
    let frame = document.getElementById("pdf_file")

    let button = document.getElementById("hide_show_button")

    if (frame.style.display === "none"){
        frame.style.display = "block"
        button.innerHTML =  "Show"
    }else{
        frame.style.display = "none"
        button.innerHTML = "Hide" 
    }
}


function goback(){
    const back_button = document.getElementById("back_button")
    back_button.addEventListener('click',function(){
        history.back()
    })
}

window.onload = function() {
    
    var button = document.getElementById("hide_show_button");
    var pdfFile = document.getElementById("pdf_file");

    
    button.onclick = function() {
        if (pdfFile.style.display === "none") {
            pdfFile.style.display = "block";
            button.innerHTML = "Hide";
        } else {
            pdfFile.style.display = "none";
            button.innerHTML = "Show";
        }
    };

    window.addEventListener("keydown",function(event){
        console.log(event.key)
        if (event.key === " " || event.key ==='s' || event.key ==="h"){
            
          hide_show_func()
      
        }
      })
};


function change(){
    const pdf_container = document.getElementById("pdf_container")
    pdf_container.style.dirplay = "block"
}


const allElements = document.querySelectorAll("*");

// Remove the onfocus attribute from each element
allElements.forEach((element) => {
    element.onfocus = null;
});

const dateContainer = document.getElementById("dateContainer");

const currentDate = new Date();

const options = { 
  weekday: "long", 
  month: "long", 
  day: "numeric", 
  year: "numeric" 
};

const formattedDate = currentDate.toLocaleDateString("en-US", options);

dateContainer.textContent = formattedDate;


getdata()

goback()
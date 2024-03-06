function listSantas(){
    //Intermediate
    let tasks = document.querySelectorAll(".santa");
    tasks.forEach((element) => { //elements are the santas
        element.addEventListener("click", function () {
            removeSanta(element);
        });
    });
    }
    function removeSanta(element){
    element.style.opacity = "0";
    element.style.transition = "1s";
    setTimeout(()=>{
        element.remove();
    },1000);
    }
    listSantas();


    
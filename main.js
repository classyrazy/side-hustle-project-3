var employeeNameInput = document.querySelector("#name"); 
var employeeWorkhoursInput = document.querySelector("#hours");
var employeeExtrahoursInput = document.querySelector("#extra-hours");
var submitBtn = document.querySelector(".submit-btn");

// var employeeWorkhours = employeeWorkhoursInput.value;
var mainCon = document.querySelector(".cal-con")

console.log("hello")
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    function tryShit(){
        if(employeeNameInput.value.length == 0 || employeeNameInput.value === null){
            console.log("this is empty")
        }else{
            var employeeName = employeeNameInput.value;
            console.log(employeeName)
        }
        if(employeeWorkhoursInput.value.length == 0 || employeeWorkhoursInput.value === null){
            console.log("this is empty2")
        }else{
            var employeeWorkhours = employeeWorkhoursInput.value;
            console.log(employeeWorkhours)
        }
        if(employeeWorkhours > 4){
            var employeeWorkhoursAnser = (employeeWorkhours- 4) * 200 + (employeeWorkhours * 1000)
        }else{
            employeeWorkhoursAnser = employeeWorkhours * 1000;
        }
        
        var anser = employeeName + " will have " + employeeWorkhoursAnser + "naira"
        mainCon.innerText = anser;
        if(employeeName === undefined || employeeWorkhours === undefined || employeeWorkhoursAnser === undefined){
            mainCon.innerText = "specify the values";
        }
    }
    tryShit(); 
    employeeNameInput.value = "";
    employeeWorkhoursInput.value = "";
    
});

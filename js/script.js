$(".changeBtn1").click(function(){
    console.log("click is working Btn 1");
   
        $(".firstDiv").addClass("firstDivNew");
 )};


$(".changeBtn1").click(function(){
    console.log("click is working Btn 2");

        $(".secondDiv").css("background","orange")
        $(".secondDiv").css("border-color", "purple")
    )};


$(".changeBtn1").click(function(){
    console.log("click is working Btn 3");


    )};



$(".changeBtn1").click(function(){
    console.log("click is working change all");

        $(".firstDiv").addClass("changeAllColors");
        $(".secondDiv").addClass("firstDivNew");
        $(".thirdDiv").css("background", "red");
        $(".thirdDiv").css("border-color", "orange");
    )};




 $(".hideBtn1").click(function(){
    $(".firstDiv").toggle();
 )}    
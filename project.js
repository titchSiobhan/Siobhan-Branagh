//Collapse Content Container 
let collapseContent = document.getElementsByClassName("hide")[0];
//Collapse Header (toggle button)
let collapseHeader = document.getElementsByClassName("title-arrow")[0];
/*Since we are using classes only for one elements on the DOM then we access the first element on the array */
//Always Starts in Hidden Mode
collapseContent.style.display = "none";
//Custom Javascript (You can Implement it in a better way!) (ES6)
//On Click Event the Header 
collapseHeader.addEventListener("click", toggleContent);

function toggleContent() {
  //For Toggling we need to know the current state of the collapse then change it
  if(collapseContent.style.display === "none") {
    //Collapse is already hidden, then show it
    collapseContent.style.display = "block";
    
  } else if (collapseContent.style.display === "block") {
    //Else, hide the collapse
    collapseContent.style.display = "none";
    
  }
}


//Collapse Content Container 
let collapseContent1 = document.getElementsByClassName("hide1")[0];
//Collapse Header (toggle button)
let collapseHeader1 = document.getElementsByClassName("title-arrow1")[0];
/*Since we are using classes only for one elements on the DOM then we access the first element on the array */
//Always Starts in Hidden Mode
collapseContent1.style.display = "none";
//Custom Javascript (You can Implement it in a better way!) (ES6)
//On Click Event the Header 
collapseHeader1.addEventListener("click", toggleContent1);

function toggleContent1() {
  //For Toggling we need to know the current state of the collapse then change it
  if(collapseContent1.style.display === "none") {
    //Collapse is already hidden, then show it
    collapseContent1.style.display = "block";
    
  } else if (collapseContent1.style.display === "block") {
    //Else, hide the collapse
    collapseContent1.style.display = "none";
    
  }
}


//Collapse Content Container 
let collapseContent2 = document.getElementsByClassName("hide2")[0];
//Collapse Header (toggle button)
let collapseHeader2 = document.getElementsByClassName("title-arrow2")[0];
/*Since we are using classes only for one elements on the DOM then we access the first element on the array */
//Always Starts in Hidden Mode
collapseContent2.style.display = "none";
//Custom Javascript (You can Implement it in a better way!) (ES6)
//On Click Event the Header 
collapseHeader2.addEventListener("click", toggleContent2);

function toggleContent2() {
  //For Toggling we need to know the current state of the collapse then change it
  if(collapseContent2.style.display === "none") {
    //Collapse is already hidden, then show it
    collapseContent2.style.display = "block";
    
  } else if (collapseContent2.style.display === "block") {
    //Else, hide the collapse
    collapseContent2.style.display = "none";
    
  }
}


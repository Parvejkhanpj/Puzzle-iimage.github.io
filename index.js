

function allowDrop(box) {
    box.preventDefault();
  } //This function allows the user to drop the image on the particular location user want
  
  function drag(box) {
    box.dataTransfer.setData("Text", box.target.id);
    box.dataTransfer.setData("parent", box.path[1].id);
  } //This function allows the user to drag the image from the original possion so that the user can drap the image
  
  function drop(box) {
    box.preventDefault();
  
    //This is the main function who is doing all the work here, this function allows the user to drag and drop the image a particular possition via replacing the current image possition where the user is dragging and droping the image, bacisally it creats a suffle via replacing the image with one and other one.
  
    var data = box.dataTransfer.getData("Text");
    var parent = box.dataTransfer.getData("parent");
    var parentDiv = document.getElementById(parent); //Defining some variables to help us setting getter and setter method
    var alreadyPresentImage = document.getElementById(box.path[0].id);
    var newImage = document.getElementById(data); //printing javascript on browser
  
    var secondParentDiv = document.getElementById(box.path[1].id);
    parentDiv.removeChild(newImage);
    parentDiv.appendChild(alreadyPresentImage); //here we are calling the function and setting the method
    secondParentDiv.appendChild(newImage);
  }
  
 
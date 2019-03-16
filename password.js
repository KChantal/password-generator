function getInput() {
    // Getting string from user input
    var newInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = null;
    
    // Setting up possible characters
    var possChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZxyz0123456789!@£#$%^&*?";

    // Inserting random characters into user input
    var newPassword = newInput.replace(/(.{1})/g, "$1" + possChars.charAt(Math.floor(Math.random() * possChars.length)));
    
    // return passwordArray
    document.getElementById("strongPassword").textContent = newPassword;
    
  }



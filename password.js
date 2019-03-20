function getInput() {
    // Getting string from user input
    var newInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = null;
    
    // Setting up possible characters & random selector function
    var possChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZxyz0123456789!@£#$%&*?";
    var randomCharFunction = function() {
      return possChars.charAt(Math.random() * possChars.length);
    };

    // Inserting random characters into user input
    var newPassword = newInput.replace(/(.{1})/g, function(x) {
      return x + randomCharFunction();
    }); 
  

    // return passwordArray
    document.getElementById("strongPassword").textContent = newPassword;
    
  }



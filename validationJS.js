function validateForm(event){
	event.preventDefault();
   var user = document.myForm.getUsername.value;
   var pwd = document.myForm.getPassword.value;
   var email = document.myForm.getEmailID.value;
   var mobile = document.myForm.getMobileNumber.value;

   if(user.length == 0){
      userError = 'Username should not be empty';
   }
   else if(user.length <= 3){
      userError = 'Username must contain minimum 4 characters';
   }
   else if(user.length > 18){
      userError = 'Username must contain only 17 characters';
   }
   document.getElementById('usernameError').innerHTML = userError;

   if(pwd.length == 0 ){
      passError = "Password Field must not be empty";
   }
   else if(pwd.length < 6){
      passError ="Password must contain  6 characters";
   }
   else if(pwd == user){
      passError = "Password must be different from Username";
   }
   document.getElementById('passwordError').innerHTML = passError;

   if(email.length == 0){
      emailError = "Email ID must not be empty";
   }
   else{
       var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       if(reg.test(email)==false){
          emailError = "Invalid Email ID";
       }
   }
   document.getElementById('emailIdError').innerHTML = emailError;

   if(mobile.length == 0){
      mobileError= "Mobile Number Field must not empty";
   }
   else{
      var mobileReg = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
      if(mobileReg.test(mobile)==false){
         mobileError = "Invalid Mobile Number";
      }
   }
   document.getElementById('MobileNumberError').innerHTML = mobileError;

}

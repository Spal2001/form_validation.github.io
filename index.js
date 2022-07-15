$(document).ready(function(){
    $("#usernamevalidate").hide();
    var user_name_error=true;
    var email_error=true;
    var password_error=true;
    var confirm_password_error=true;
    $('#uname').keyup(function(){
        username_validate();
    });
    function username_validate(){
        var username_val=$('uname').val();
        if(username_val.length==""){
            $('#usernamevalidate').show();
            $('#usernamevalidate').html('Username cannot be empty');
            $('usernamevalidate').css('color','red');
            user_name_error=false;
            return false;
        }
        else{
            $('#usernamevalidate').hide();
        }
        if(username_val.length<3 || username_val.length>10){
            $('#usernamevalidate').show();
            $('#usernamevalidate').html('Username should be of length 3 and 10');
            $('usernamevalidate').css('color','red');
            user_name_error=false;
            return false;
        }
        else{
            $('#usernamevalidate').hide();
        }
    }
    $('#uemail').keyup(function(){
        email_validate();
    });
    function email_validate(){
        let email_val=$('#uemail').val();
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(emailregex.test(email_val)){
            $('#emailvalidate').hide();
        }
        else{
            $('#emailvalidate').show();
            $('#emailvalidate').html('Please enter a valid email');
            $('#emailvalidate').css('color','red');
            email_error=false;
            return false;
        }
    }
    $('#password').keyup(function(){
        password_validate();
    });
    function password_validate()
    {
        let password_val=$('#password').val();
        var passwordRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
        if(passwordRegex.test(password_val)){
            $('#passwordvalidate').hide();
        }
        else{
            $('#passwordvalidate').show();
            $('#passwordvalidate').html('Please create a proper password');
            $('#passwordvalidate').css('color','red');
            password_error=false;
            return false;
        }
    }
    $('#cpassword').keyup(function(){
        confirm_pass_validate();
    });
    function confirm_pass_validate()
    {
        let cpassword_val=$('#cpassword').val();
        let pass=$('#password').val();
        if(cpassword_val==pass){
            $('#confirm').hide();
        }
        else{
            $('#confirm').show();
            $('#confirm').html('Password mismatch');
            $('#confirm').css('color','red');
        }
    }
    $('#submitbutton').click(function(){
        username_validate();
        email_validate();
        password_validate();
        confirm_pass_validate();
        if(user_name_error==true && email_error == true && password_error==true && confirm_password_error==true){
            return true;
        }
        else{
            return false;
        }
    });
});

function login()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

if(username == "Entri Elevate" && password == "admin123")
{
    alert('login successfully');
    window.location.href="https://webapp.entri.app/home";
    
}

else{

    alert('username or password incorrect.')
}

}
function forgotpassword()
{
    var email=prompt('Enter the email address');
    if(email)
    {
        alert('verification code sent to your email address')
    }
}

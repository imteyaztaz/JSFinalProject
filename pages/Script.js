function pushuser(Fullname,Email,Password){
 let user = {
    id: Number(new Date()),
    Fullname: Fullname,
    Email: Email,
    Password: Password,
  };
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;

}
function validateRegister(Email)
{
    usersdata = JSON.parse( localStorage.getItem("users") );
    
    for(var p in usersdata)
    {
       console.log(usersdata[p].Email);
      if(Email == userdata[p].Email )
      {
         alert("User All ready exist in");
         return false;
      }
    }
}

function validatelogin()
{
    usersdata = JSON.parse( localStorage.getItem('key_users' ) );
    var usernameinput   = document.getElementById("username");
    var passwordinput   = document.getElementById("password");
    for(var p in userdata)
    {
      console.log(p+':'+userdata[p].username+'|'+userdata[p].email);
      if(usernameinput==userdata[p].username && passwordinput==userdata[p].password)
      {
         alert("Logged in successfully");
      }
    }
  }



//var usersdata  = JSON.parse( localStorage.getItem("users"));
//console.log(usersdata);






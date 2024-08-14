function ISloggedinUser() {
  let Loguser = localStorage.getItem("UserEmail");
  if (Loguser == "" || Loguser == "undefined") {
    alert("User is not Loged In.");
    window.location.href = "./Welcome.html";
  }
}

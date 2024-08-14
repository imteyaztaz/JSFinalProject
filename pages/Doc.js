function Validate() {
  let filedes = document.getElementById("filedes").value;
  let fileName = document.getElementById("fileName").value;

  if (filedes == "") {
    alert("Please enter File description");
    return false;
  } else if (fileName == "") {
    alert("Please enter File Name");
    return false;
  }
  let doc = {
    id: Number(new Date()),
    filedes: filedes,
    fileName: fileName,
  };
  let docs = localStorage.getItem("docs")
    ? JSON.parse(localStorage.getItem("docs"))
    : [];
  docs.push(doc);
  localStorage.setItem("docs", JSON.stringify(docs));
  location.reload();
  S;
  return true;
}

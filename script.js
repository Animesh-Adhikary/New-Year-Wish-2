const generate = document.getElementById("generate");
const wishName = document.getElementById("wishName");
const link = document.getElementById("link");

// checking hitting method
var isTouchDevice = "ontouchstart" in document.documentElement;
var eventName = isTouchDevice ? "touchstart" : "click";

// Extracting name from url
const getQueryParams = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
const nameValue = getQueryParams("name");
console.log(nameValue);
wishName.innerHTML = `<h1>${nameValue}</h1>`; // embeding name into html


generate.addEventListener("click", () => {
  const name = document.getElementById("name").value;

  //generating link in frontend  --->
  const currentUrl = window.location.href;
  const modifiedName = name.replace(/ /g, "%20");
  const newUrl = `${currentUrl}?name=${modifiedName}`;
  console.log(newUrl);

// server connection--->
//   const serverConnection = async () => {
//     const data = { name: name };
//     const serverLink = "http://localhost:3000";
//     const postData = await fetch(serverLink + "/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (postData.ok) {
//       const response = await postData.text();
//       console.log(response);
//       link.value = response;
//     }
//   };
//   if (name) serverConnection();
//   else alert("please insert a name first.");
});

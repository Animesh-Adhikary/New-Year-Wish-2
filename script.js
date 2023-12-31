const generate = document.getElementById("generate");
const wishName = document.getElementById("wishName");
const copy = document.getElementById("copy");
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

generate.addEventListener(eventName, () => {
  const name = document.getElementById("name").value;

  //generating link in frontend  --->
  const currentUrl = window.location.href;
  const trimUrl = currentUrl.split("?")[0];
  const modifiedName = name.replace(/ /g, "%20");
  const newUrl = `${trimUrl}?name=${modifiedName}`;
  console.log(newUrl);
  link.value = newUrl;

  // copping the input value
  copy.addEventListener(eventName, () => {
    if (link.value) {
      const input = document.getElementById("link");
      input.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.log(err);
      }
      input.seSelectionRange(0, 0);
    }
  });

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

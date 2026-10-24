fetch("https://icanhazdadjoke.com/",{
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

})
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayJoke(data);
})
.catch((error) => console.error("FETCH ERROR:", error));


function displayJoke(data) {
  const joke_new = data.joke;
  const heading = document.getElementById("joke");
  heading.innerHTML = joke_new;


}
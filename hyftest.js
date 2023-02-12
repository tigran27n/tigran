// 1  Programming Basics
const movies = ["The Shawshank Redemption",
"The Godfather",
"The Dark Knight",
"12 Angry Men",
"The Lord Of The Rings",
"Pulp Fiction",
"The Good, the Bad and the Ugly",
"Forrest Gump"];

//1. Log out each movie title;
console.log(movies)

//2. Log out the number of words in each movie title.
movies.forEach(function(movies) {
console.log(`Numbers of words in the ${movies}" is ${movies.split(" ").length}.`);
   });
   

//2 DOM manipulation

var button = document.createElement("button");
button.innerHTML = "Green screen";
document.body.appendChild(button);
button.addEventListener("click", function() {
  // h1 tag
  var h1 = document.createElement("h1");
  h1.innerHTML = "Javascript test";
  document.body.appendChild(h1);
  // background color 
  document.body.style.backgroundColor = "green";
  // Disable 
  button.disabled = true;
});


// 3 Async API calls
fetch("https://reqres.in/api/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var users = data.data;
    for (var i = 0; i < 3; i++) {
      var user = users[i];
      var firstName = user.first_name;
      var avatar = user.avatar;
      var div = document.createElement("div");
      div.innerHTML = "<p>" + firstName + "</p><img src='" + avatar + "'>";
      document.body.appendChild(div);
    }
  });









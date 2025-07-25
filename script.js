document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Hozircha konsolga chiqaramiz
  console.log("Login ma'lumotlari:", username, password);

  // Keyinchalik serverga yuboriladi
});

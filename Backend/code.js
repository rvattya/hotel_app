const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Missing in your code
const cookieParser = require("cookie-parser");

const JWT_SECRET = "RANDOMTEXTDONOTCHANGE"; // Define JWT secret
const users = [
  { id: 1, email: "user@example.com", password: "123" },
];

// Middleware
app.use(cors({
  origin: "http://127.0.0.1:5500", // Frontend domain
  credentials: true, // Allow cookies to be sent from the frontend
}));
app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser());

// Route to handle login and set cookie
app.get("/set-cookie", (req, res) => {
  // const { email, password } = req.body; // Parse JSON from the request body
  // console.log("Request Body:", req.body); // Debug: Log the request body

  // const user = users.find((u) => u.email === email && u.password === password);

  // if (!user) {
  //   return res.status(401).json({ message: "Invalid credentials" });
  // }

  // const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
  //   expiresIn: "1h",
//   // });

  res.cookie("user", "ghfgh", {
    maxAge: 3600000, // 1 hour
    httpOnly: true,
    secure: false, // Use true in production with HTTPS
  });
console.log(req.cookies);
res.clearCookie("user")
  return res.status(200).json({ message: "Login successful" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ................
//sudardhan solution
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Login</title>
// </head>
// <body>
//   <div>
//     <h2>Login</h2>
//     <input type="email" id="email" placeholder="Email" required /> <br /><br />
//     <input type="password" id="password" placeholder="Password" required />
//     <br /><br />
//     <button onclick="login()">Login</button>
//   </div>
//   <script>
//     // async function login() {
//     //   const email = document.getElementById("email").value;
//     //   const password = document.getElementById("password").value;

//     //   const response = await fetch("http://localhost:3000/set-cookie", {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/json" },
//     //     credentials: "include", // Required to send cookies
//     //     body: JSON.stringify({ email, password }),
//     //   });

//     //   const data = await response.json();

//     //   if (response.ok) {
//     //     alert(data.message); // Show success message
//     //   } else {
//     //     alert(data.message); // Show error message
//     //   }
//     // }

//     fetch("http://localhost:3000/set-cookie")
//     .then(()=>console.log("successful"))
//   </script>
// </body>
// </html>








// const express = require("express");
// const app = express();
// const port = 3000;
// const cors = require("cors");
// const jwt = require("jsonwebtoken"); // Missing in your code
// const cookieParser = require("cookie-parser");

// const JWT_SECRET = "RANDOMTEXTDONOTCHANGE"; // Define JWT secret
// const users = [
//   { id: 1, email: "user@example.com", password: "123" },
// ];

// // Middleware
// app.use(cors({
//   origin: "http://127.0.0.1:5500", // Frontend domain
//   credentials: true, // Allow cookies to be sent from the frontend
// }));
// app.use(express.json()); // Middleware to parse JSON
// app.use(cookieParser());

// // Route to handle login and set cookie
// app.get("/set-cookie", (req, res) => {
//   // const { email, password } = req.body; // Parse JSON from the request body
//   // console.log("Request Body:", req.body); // Debug: Log the request body

//   // const user = users.find((u) => u.email === email && u.password === password);

//   // if (!user) {
//   //   return res.status(401).json({ message: "Invalid credentials" });
//   // }

//   // const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
//   //   expiresIn: "1h",
// //   // });

// //    res.cookie('token', token, {
// //      httpOnly: true, // Prevent access to cookies via JavaScript
// //      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
// //      maxAge: 60 * 60 * 1000, // 7 days in milliseconds
// //      sameSite: 'strict', // Protect against CSRF
// //    });
// // console.log(req.cookies);
// res.clearCookie("user")
//   return res.status(200).json({ message: "Login successful" });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// //    res.cookie('token', token, {
// //      httpOnly: true, // Prevent access to cookies via JavaScript
// //      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
// //      maxAge: 60 * 60 * 1000, // 7 days in milliseconds
// //      sameSite: 'strict', // Protect against CSRF
// //    });
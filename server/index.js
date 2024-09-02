// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';


// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());
// const PORT = process.env.PORT || 9000;
// mongoose.connect(process.env.MONGO_URI)

// .then(() => {
//   console.log("DB connected successfully");

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// })
// .catch((error) => {
//   console.log('Error connecting to MongoDB:', error.message);
// });

// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import authRoutes from "./Routes/authRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import './config/passportConfig.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://yogesh-frontend.saumic.com', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.options('*', cors()); // Handle preflight requests

app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

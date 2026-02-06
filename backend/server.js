/* Configure .env */
require("dotenv").config();

/* Create imports */
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;

/* Configure CORS */
const corsConfig = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsConfig));

/* Add parsing middleware */
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser);

/* Use routes */

/* Connect to MongoDB */
const mongooseConnect = async () => {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () => {
      console.log(`✅ App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    console.log("❌ Could not connect to MongoDB");
  }
};
mongooseConnect();

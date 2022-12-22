const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const URL = process.env.DB;
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(URL);
app.use(cors({ origin: '*' }));
const portalRoutes = require('./Routes/portalRoutes');



app.use('/portal', portalRoutes)


app.listen(process.env.PORT || 5000);


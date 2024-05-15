import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: 'config.env' });

const ATLAS_URI = process.env.ATLAS_URI || "";
const PORT = process.env.PORT || 1111;
const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Routes for the backend

// Database connection

mongoose.connect(ATLAS_URI);

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('DB connection error:', error);
});
db.once('open', () => {
    console.log('Connected to database');
});


//Error handling

//Server start

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default server;
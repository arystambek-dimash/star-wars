import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import planetRoutes from './routes/planets.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4444;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || "your-mongodb-uri-here";
mongoose.connect(uri)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB connection error:', err));

app.use('/api/planets', planetRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Star Wars Explorer API!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'client/build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server running on port ${PORT}`);
});

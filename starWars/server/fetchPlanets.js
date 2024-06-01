import axios from 'axios';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Planet from './models/Planet.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB connection error:', err));

const fetchAndSavePlanets = async () => {
    let url = 'https://swapi.dev/api/planets/';

    try {
        while (url) {
            const response = await axios.get(url);
            const planets = response.data.results;

            for (const planetData of planets) {
                const planet = new Planet({
                    name: planetData.name,
                    climate: planetData.climate,
                    population: planetData.population,
                    gravity: planetData.gravity,
                });
                await planet.save();
            }

            url = response.data.next;
        }

        console.log('All planets saved to database');
    } catch (error) {
        console.error('Error fetching planets:', error);
    } finally {
        mongoose.connection.close();
    }
};

fetchAndSavePlanets();

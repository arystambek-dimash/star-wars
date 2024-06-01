import express from 'express';
import Planet from '../models/Planet.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const {page = 1, limit = 10} = req.query;

    try {
        const planets = await Planet.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Planet.countDocuments();

        res.json({
            planets,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/search', async (req, res) => {
    const {name, climate, population, page = 1, limit = 10} = req.query;

    let filter = {};
    if (name) {
        filter.name = new RegExp(name, 'i');
    }
    if (climate) {
        filter.climate = new RegExp(climate, 'i');
    }
    if (population) {
        filter.population = population;
    }

    try {
        const planets = await Planet.find(filter)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Planet.countDocuments(filter);

        res.json({
            planets,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;

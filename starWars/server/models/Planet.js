import mongoose from 'mongoose';

const planetSchema = new mongoose.Schema({
    name: {type: String, required: true},
    climate: {type: String, required: true},
    population: {type: String, required: true},
    gravity: {type: String, required: true},
});

const Planet = mongoose.model('Planet', planetSchema);

export default Planet;

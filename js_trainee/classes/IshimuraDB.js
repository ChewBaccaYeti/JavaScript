"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
    MongoDB Atlas
    MongoDBCompass / Studio 3T
    mongoose
    node.js
    Typescript
*/
require('dotenv').config({ path: './.env.local' });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const username = process.env.MONGO_AEGIS_ADMIN;
const password = process.env.MONGO_AEGIS_PASS;
const database = process.env.MONGO_AEGIS_DB;
mongoose.connect(`mongodb+srv://${username}:${password}@${database}.fm1e1.mongodb.net/${database}?retryWrites=true&w=majority&appName=${database}`).then(() => {
    fetchMiners();
    console.log('Connection successful.');
}).catch((error) => {
    if (error instanceof Error) {
        throw error;
    }
    console.error(error);
});
const certificationSchema = new Schema({
    title: { type: String, required: true },
    dateObtained: { type: Date, required: true }
});
const equipmentSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    acquired: { type: Date, required: true }
});
const lastMissionSchema = new Schema({
    missionName: String,
    completedDate: Date
});
const CEC_schema = new Schema({
    name: String,
    role: {
        name: String,
        symbol: String,
    },
    avatar: String,
    species: String,
    citizenship: String,
    rank: { type: Number, min: 0 },
    directive: String,
    id: { type: String, required: true },
    birthdate: Date,
    experience: {
        years: Number,
        skills: [String],
    },
    certifications: [certificationSchema],
    equipment: [equipmentSchema],
    activeStatus: Boolean,
    lastMission: [lastMissionSchema]
});
const Miner = mongoose.model('Miner', CEC_schema, 'Miners');
;
class Prototype {
    constructor(name, role, avatar, species, citizenship, rank, directive, id, birthdate, experience, certifications, equipment, activeStatus, lastMission) {
        this.name = name;
        this.role = role;
        this.avatar = avatar;
        this.species = species;
        this.citizenship = citizenship;
        this.rank = rank;
        this.directive = directive;
        this.id = id;
        this.birthdate = birthdate;
        this.experience = experience;
        this.certifications = certifications;
        this.equipment = equipment;
        this.activeStatus = activeStatus;
        this.lastMission = lastMission;
    }
    RIG_data() {
        console.log(this);
    }
}
;
const fetchMiners = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const minersData = yield Miner.find();
        console.log('Miners: ', minersData);
        const minersArray = minersData.map((miner) => {
            return new Prototype(miner.name, miner.role, miner.avatar, miner.species, miner.citizenship, miner.rank, miner.directive, miner.id, miner.birthdate, miner.experience, miner.certifications, miner.equipment, miner.activeStatus, miner.lastMission);
        });
        minersArray.forEach(miner => miner.RIG_data());
    }
    catch (error) {
        console.error(error);
    }
    finally {
        mongoose.connection.close();
    }
});

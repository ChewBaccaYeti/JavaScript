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

mongoose.connect(
    `mongodb+srv://${username}:${password}@${database}.fm1e1.mongodb.net/${database}?retryWrites=true&w=majority&appName=${database}`
).then(() => {
    fetchMiners()
    console.log('Connection successful.')
}).catch((error: Error) => {
    if(error instanceof Error) {
        throw error
    }
    console.error(error)
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
    name : String,
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

interface MinerType {
    name: string;
    role: {
        name: string;
        symbol: string
    };
    avatar: string;
    species: string;
    citizenship: string;
    rank: number;
    directive: string;
    id: string;
    birthdate: Date;
    experience: {
        years: number,
        skills: string[]
    };
    certifications: {
        title: string,
        dateObtained: Date
    }[];
    equipment: {
        name: string;
        type: string;
        acquired: Date
    }[];
    activeStatus: boolean;
    lastMission: {
        missionName: string,
        completedDate: Date
    }
};

class Prototype {
    name : string;
    role: object;
    avatar: string;
    species: string;
    citizenship: string;
    rank: number;
    directive: string;
    id: string;
    birthdate: Date;
    experience: object;
    certifications: object;
    equipment: object;
    activeStatus: boolean;
    lastMission: object

    constructor( 
        name : string, 
        role: object, 
        avatar: string, 
        species: string, 
        citizenship: string, 
        rank: number, 
        directive: string, 
        id: string,
        birthdate: Date,
        experience: object,
        certifications: object,
        equipment: object,
        activeStatus: boolean,
        lastMission: object
    ) {
            this.name = name
            this.role = role
            this.avatar = avatar
            this.species = species
            this.citizenship = citizenship
            this.rank = rank
            this.directive = directive
            this.id = id
            this.birthdate = birthdate
            this.experience = experience
            this.certifications = certifications
            this.equipment = equipment
            this.activeStatus = activeStatus
            this.lastMission = lastMission
    }

    RIG_data() {
        console.log(this)
    }
};

const fetchMiners = async () => {
    try {
        const minersData: MinerType[] = await Miner.find() as MinerType[];
        console.log('Miners: ', minersData)

        const minersArray = minersData.map((miner: MinerType) => {
            return new Prototype(
                miner.name,
                miner.role,
                miner.avatar,
                miner.species,
                miner.citizenship,
                miner.rank,
                miner.directive,
                miner.id,
                miner.birthdate,
                miner.experience,
                miner.certifications,
                miner.equipment,
                miner.activeStatus,
                miner.lastMission
            )
        })

        minersArray.forEach(miner => miner.RIG_data());
    } catch(error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};
import express from "express";
import cors from "cors";
import { PROFILES } from "./mockDB";

const PORT = 4000;

const api = express();

api.use(cors());
api.use(express.json());

api.listen(PORT, () => {
    console.log(`API STARTED ON ${PORT}`);
});

api.get('/api/profiles', (req, res) => {
    const { query } = req;
    console.log(query);
    if (!query.search)
        return res.send({ count: PROFILES.length, profiles: PROFILES });
    
    const foundProfiles = PROFILES.filter(({ fullname }) => 
        fullname.toLowerCase().includes(query.search.toLowerCase())
    );

    res.send({ count: foundProfiles.length, profiles: foundProfiles });
});

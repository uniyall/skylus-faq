import express from 'express';
import mongoose from 'mongoose';
import { Faq, SuperUser } from './db.js'
import formatAllDocResponse from './utils/formatAllDocResponse.js'
const app = express();
const PORT = 7800;
import cors from 'cors'

app.use(express.json());
app.use(cors());

(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/skylusFaq');
        console.log('DB 💻 connected!')
    }
    catch (e) {
        console.log(e)
    }
})()


app.get('/', (req, res) => {
    res.json('All Okay 🙌');
})

app.get('/faq', async (req, res) => {
    try {
        const allDocs = await Faq.find({});

        const distinctCategories = await Faq.distinct("category").exec();
        const response = formatAllDocResponse(allDocs, distinctCategories);
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

app.post('/faq/new', async (req, res) => {
    try {
        const {
            question,
            answer,
            category
        } = await req.body;
        const newFaq = new Faq({
            question: question,
            answer: answer,
            category: category
        });

        await newFaq.save();

        console.log('Document created!');

        function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }

        await sleep(5000);
        res.status(200).json({
            mesage: 'Document created!'
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

app.get('/faq/options', async (req, res) => {
    try {
        const distinctCategories = await Faq.distinct("category").exec();
        res.status(200).json(distinctCategories)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { password } = req.body;
        const superPasswordDoc = await SuperUser.find({});
        const superPassword = superPasswordDoc[0].password;
        if (password === superPassword) {
            res.status(200).json({
                message: 'User authorized'
            })
        } else {
            res.status(401).json({
                message: 'User unauthorized, wrong password'
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
import express from 'express'
const Category = import('../models/Category.js');
 const router = express()
router.post('/', async (req, res) => {
    const newcat = new Category(req.body);
    try {
        const savedCat = await newcat.save();
        res.status(200).json(savedCat);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {

    try {
        const cats = await Category.find();
        res.status(200).json(cats)
    }
    catch (e) {
        res.status(500).json(e);
    }

})

export default router;
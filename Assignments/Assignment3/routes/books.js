const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/',async(req,res) => {
    try{
        const books = await Book.find();
        res.json(books);
    } catch(err){
        res.send('Error ' + err);
    }
})

router.get('/:id',async(req,res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch(err){
        res.send('Error ' + err);
    }
})

router.post('/', async(req,res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        availability: req.body.availability
    })

    try{
        const b1 = await book.save();
        res.json(b1);
    }catch(err){
        res.send('Error');
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const book = await Book.findById(req.params.id);
        book.availability = req.body.availability;
        const b1 = await book.save();
        res.json(b1);
    }catch(err){
        res.send('Error');
    }
})

router.delete('/:id',async(req,res) => {
    try{
        const book = await Book.findById(req.params.id);
        const b1 = await book.deleteOne();
        res.json({message: 'Book deleted'});
    }catch(err){
        res.send('Error'+err);
    }
})

module.exports = router;

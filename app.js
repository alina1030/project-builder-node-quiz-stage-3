const express = require('express');
const app = express();
const db = require('./connection');
const postModel = require('./postModel');
const postModelOption = require('./postModelOption');
const postModelAnswer = require('./postModelAnswer');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/questions',async(req,res)=>{
    const {question} = req.body;

    try{
        const newPost = await postModel.create({question});
        res.json(newPost)
    } catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/questions',async(req,res)=>{
    try{
        const questions = await postModel.find();
        res.json(questions);
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/questions/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put('/api/questions/:id',async(req,res)=>{
    const {id} = req.params;
    const {question} = req.body;
    try{
        const post = await postModel.findByIdAndUpdate(id,{question});
        res.json(post)
    }catch(error){
        res.status(500).send(error)
    }
})

app.delete('/api/questions/:id',async(req,res)=>{
    const {id} = req.params;
    
    try{
        const post = await postModel.findById(id);
        await post.remove();
        res.json('deleted successfully')
    }catch(error){
        res.status(500).send(error)
    }
})

/////////////////////////////////////////////
app.post('/api/options',async(req,res)=>{
    const {A,B,C} = req.body;

    try{
        const newPost = await postModelOption.create({A,B,C});
        res.json(newPost)
    } catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/options',async(req,res)=>{
    try{
        const options = await postModelOption.find();
        res.json(options);
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/options/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModelOption.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put('/api/options/:id',async(req,res)=>{
    const {id} = req.params;
    const {A,B,C} = req.body;
    try{
        const post = await postModelOption.findByIdAndUpdate(id,{A,B,C});
        res.json(post)
    }catch(error){
        res.status(500).send(error)
    }
})

app.delete('/api/options/:id',async(req,res)=>{
    const {id} = req.params;
    
    try{
        const post = await postModelOption.findById(id);
        await post.remove();
        res.json('deleted successfully')
    }catch(error){
        res.status(500).send(error)
    }
})
/////////////////////////////////////////////
app.post('/api/answers',async(req,res)=>{
    const {answer} = req.body;

    try{
        const newPost = await postModelAnswer.create({answer});
        res.json(newPost)
    } catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/answers',async(req,res)=>{
    try{
        const answers = await postModelAnswer.find();
        res.json(answers);
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/answers/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModelAnswer.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put('/api/answers/:id',async(req,res)=>{
    const {id} = req.params;
    const {answer} = req.body;
    try{
        const post = await postModelAnswer.findByIdAndUpdate(id,{answer});
        res.json(post)
    }catch(error){
        res.status(500).send(error)
    }
})

app.delete('/api/answers/:id',async(req,res)=>{
    const {id} = req.params;
    
    try{
        const post = await postModelAnswer.findById(id);
        await post.remove();
        res.json('deleted successfully')
    }catch(error){
        res.status(500).send(error)
    }
})



////////////////////////////////////////////
app.listen(3001, ()=>{
    console.log('Listening to 3001')
})
const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/", async (req,res,next)=>{
    try{
        const results = await db.query("SELECT * FROM fishes")
        return res.json(results.rows);
    } catch (err){
        return next(err)
    }
})

router.post("/", async (req,res,next)=>{
    try{
        const results = await db.query("INSERT INTO fishes (name,type) VALUES ($1,$2) RETURNING *",
        [req.body.name, req.body.type]
        )
        return res.json(results.rows[0]);
    } catch (err){
        return next(err)
    }
})

router.patch("/", async (req,res,next)=>{
    try{
        const results = await db.query("UPDATE fishes SET name = $1, type=$2 WHERE 1d=$3 RETURNING *",
        [req.body.name, req.body.type, req.params.id]
        )
        return res.json(results.rows[0]);
    } catch (err){
        return next(err)
    }
})


router.delete("/", async (req,res,next)=>{
    try{
        const results = await db.query("DELETE FROM fishes WHERE id = $1",
        [req.params.id]
        )
        return res.json(results.rows[0]);
    } catch (err){
        return next(err)
    }
})

module.exports = router;
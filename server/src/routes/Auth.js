const { Router } = require("express");
const uuidv4=require("uuid");
const bcrypt=require("bcrypt");
const express=require("express");
const router=express.Router();

router.post('/register',async (req,res)=>{
    const userId=uuidv4();
    const hashedPass=await bcrypt.hash(password,10);
    const token=serverClient.createToken(userId);
    res.send("Index");
});

router.post('/login',(req,res)=>{
    res.send("Index");
});

router.post("/register", async (req, res) => {
    try {
      const {name,username,email,password}=req.body;
      const userId = uuidv4();
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = serverClient.createToken(userId);
      res.json({ token,userId,name,username,email,hashedPassword });
    } catch (error) {
      res.json(error);
    }
});

router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const { users } = await serverClient.queryUsers({ name: username });
      if (users.length === 0) return res.json({ message: "User not found" });
  
      const token = serverClient.createToken(users[0].id);
      const passwordMatch = await bcrypt.compare(
        password,
        users[0].hashedPassword
      );
  
      if (passwordMatch) {
        res.json({
          token,
          firstName: users[0].firstName,
          lastName: users[0].lastName,
          username,
          userId: users[0].id,
        });
      }
    } catch (error) {
      res.json(error);
    }
});

module.exports=router;
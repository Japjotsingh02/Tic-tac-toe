const express=require("express");
const cors=require("cors");
const auth=require("./routes/Auth");
const StreamChat=require("stream-chat");
const app=express();
const router=express.Router();

app.use(cors());
app.use(express.json());
const api_key='t2k6kdquctwe';
const api_secret='utw3pedtxqc6x6utb9qcawmshwgggaw6v2hks4w99um8mz6v43yjumcfr7uge9fe';
const serverClient=new StreamChat.getInstance(api_key,api_secret);
app.use('/auth',auth);

app.listen(3001,()=>{
    console.log("My server");
});
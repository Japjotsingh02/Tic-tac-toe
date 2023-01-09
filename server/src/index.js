const express=require("express");
const cors=require("cors");
const auth=require("./routes/Auth");
const {StreamChat}=require("stream-chat");
const app=express();
const router=express.Router();

app.use(cors());
app.use(express.json());
const api_key=process.env.STREAM_CHAT_API_KEY;
const api_secret=process.env.STREAM_CHAT_API_SECRET;
const serverClient=StreamChat.getInstance(api_key,api_secret);
app.use('/auth',auth);

app.listen(3001,()=>{
    console.log("My server");
});
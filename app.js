const app=require("express")();
const parser=require("body-parser");

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

const twitter=require("./routes/twitterRoute");
app.use("/api",twitter);

app.listen(3000,()=>{
    console.log("Listenning on port 3000!");
});

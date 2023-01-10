const port=5000;
const express=require('express');
const mongose=require('mongoose');
const User=require('./models/user.models');

const db="mongodb+srv://husein:ministar123@cluster0.5o5czxa.mongodb.net/?retryWrites=true&w=majority"


mongose.set("strictQuery", false);
mongose.connect("mongodb+srv://husein:ministar123@cluster0.5o5czxa.mongodb.net/?retryWrites=true&w=majority", () => {
  console.log("Connected to MongoDB");
});


const app=express();

const cors=require('cors');

app.use(cors());
app.use(express.json())


app.post('/api/register',async(req,res)=>{
    console.log(req.body)
 
    try{
        const user=await User.create({
            name: req.body.name,
                email:req.body.email,
                password: req.body.password,
        },)
        res.json({status:'ok'});
    }catch(err){
        res.json({status:'error',error:'Dupli email'});
    }
})



app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})



app.listen(port,()=>{
console.log(`Servers se pokrece na portu broj ${port} `)
})

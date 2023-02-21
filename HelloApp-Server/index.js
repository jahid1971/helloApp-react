const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// app.use(cors());
app.use(
  cors({
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
  })
  );
app.use(express.json());



const uri = "mongodb+srv://db2:0CoeULYNrgLmL4dQ@cluster0.oqggt9s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const postCollection = client.db("helloApp").collection("posts");
    const commentCollection = client.db("helloApp").collection("comments");



    app.get('/', async (req, res) => {
      const query = {}
      const sort = { _id: -1 }
      const cursor = postCollection.find(query).sort(sort)
      const allPosts = await cursor.toArray()
      res.send(allPosts)

    })




    app.post('/', async (req, res) => {
      const userPost = req.body
      const result = await postCollection.insertOne(userPost)
      res.send(result)
      console.log(userPost)
    })



    app.patch('/updateLikes', async (req, res) => {
      const filterId = req.body.filterId
      const id = new ObjectId(filterId);
      const query = {_id: id}
      const newLike = req.body.like
      const addLikeStatus = req.body.addLike
      // console.log(addLikeStatus)
       
      let updateLikes;

      if(addLikeStatus)  {
          updateLikes = { $push: { likes: newLike}}
      }
      else updateLikes = { $pull: { likes: newLike}}

      const result = await postCollection.updateOne(query, updateLikes) ;
   
      res.send(result)
    })



// for commentCollection section

// get commentData with postID
app.get('/getComments/:postId', async (req, res) => {
  const postId = req.params.postId
  const query = {postId:postId}
  const sort = { _id: -1 }
  const cursor = commentCollection.find(query).sort(sort)
  const  comments = await cursor.toArray()
  res.send(comments)
  console.log(req.params.postId)

})

// upload comment
    app.post('/postComment', async (req, res) => {
      const comment = req.body. newComment
      const result = await commentCollection.insertOne(comment)
      res.send(result)
      console.log(result);
    })






  } finally {
  }
}
run().catch(console.log);








app.get("/", async (req, res) => {
  res.send("server running");
});

app.listen(port, () => console.log(`portal running 1 ${port}`));
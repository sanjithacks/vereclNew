const path = require("path");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
app.set("view engine", "ejs");
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());
//app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

/*Self def*/

// This is an async function
app.get("/", async (req, reply) => {
  //await reply.status(200).render("index");
  await reply.render(path.join(__dirname + '/views/index'))
});

app.use(async (req, res, next) => {
  try {
    await res.status(404).end("Not Found");
  } catch (error) {
    await res.status(500).end("Server error");
  }
});

app.listen(PORT, function () {
  //console.log("server running on port hurray" + PORT, "http://localhost:" + PORT);
});

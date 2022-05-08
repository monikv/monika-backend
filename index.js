let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  mongo = require('mongodb'),
  bodyParser = require('body-parser');

// Connect mongo
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)


const houseAPI = require('./routes/house.route')
const header = {
  origin:'*'
};
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors(header));
app.use(cors({
  methods: ['GET']
}));

// API
app.use('/api', houseAPI)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
app.use(express.static('public'));

app.get('/index',function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
  });

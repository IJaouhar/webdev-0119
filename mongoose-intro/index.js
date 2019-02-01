const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  owner: {
    type: String,
    required: true
  },
  nrOfLegs: {
    type: Number,
    default: 4
  }
})

// Connect to the database
mongoose.connect('mongodb://localhost:27017/mongoose-intro', { useNewUrlParser: true });

// Create the models or connect with collection in db
const Cat = mongoose.model('Cat', catSchema);
const Fish = mongoose.model('Fish', { name: String, age: Number });


const kitty = new Cat({
  name: 'Mia',
  owner: 'Franci'
});
const nemo = new Fish({name: 'Nemo'});
console.log("Not saved nemo", nemo);

// kitty.save()
//   .then((data) => {
//     console.log(data);
//     return Cat.find({})
//   })
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(error => {
//     console.log('There was an error ', error);
//   })

Fish.create({name: 'Dori'})
  .then((result) => {
    console.log('Created fish', result);
  })
  .catch(error => {
    console.log(error);
  })

Fish.findOne({name: 'Dori'})
  .then(fish => {
    fish.age = 2;
    console.log(fish);
    fish.save()
      .then((result) => {
        console.log('result after saving', result);
        console.log('saved');
        mongoose.connection.close();
      })
      .catch(err => {
        console.log(err);
      })
  })
  .catch(err => {
    console.log(err);
  })
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/mongoose-intro', { useNewUrlParser: true });

// Create the models or connect with collection in db
const Cat = mongoose.model('Cat', { name: String });
const Fish = mongoose.model('Fish', { name: String });


const kitty = new Cat({name: 'Kitty'});
const nemo = new Fish({name: 'Nemo'});

nemo.save()
  .then((data) => {
    console.log(data);
    return Cat.find({})
  })
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(error => {
    console.log('There was an error ', error);
  })


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hack_diversity:H70nZxcltZ7UwUx2@cluster0.pgkwzbh.mongodb.net/?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
})
	.then(() => console.log('established connection to database'))
  .catch( err => console.log('Something went wrong when connecting to database', err));
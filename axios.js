const axios = require('axios');

// Async/Await ES7
(async() =>{
   try{
     let resp = await axios.get('http://localhost:4000/users');
     resp.data.map(e =>{
        console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
     });
   } catch(error) {
      console.log(error);
   }
})();
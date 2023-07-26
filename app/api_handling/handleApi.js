const axios = require('axios');

 async function login (email,password) {
    try {
        let data = {email,password}
        let response = await axios.post('http://localhost:8080/login',data)
        console.log(`Response is ${response.data}`)
    }    
    catch (error) {
        console.error('Error sending data:', error.message);
    }

}

module.exports = { login };
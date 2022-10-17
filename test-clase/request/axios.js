const axios = require('axios')

axios.get ('https://jsonplaceholder.typicode.com/posts',{
    params: {name:'r2'},
    headers:{key: 'asdasd'}
})

    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('END'))
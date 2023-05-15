import express from 'express'
import { createRequire } from 'module'

const require=createRequire(import.meta.url)
const app = express();

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

app.get('/',(req,res)=>{
sdk.auth('rnd_Dj9BLHfuoLRdg6ECeaCYN55USn2F');
sdk.getServices({limit: '20'})
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err))
});


app.listen(3000, () => {
    console.log('App listening on port 3000');
});

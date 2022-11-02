const {parse} = require('csv-parse');

const fs = require('fs');

const results = [];
fs.createReadStream('kepler_data.csv')// stream
.pipe(parse({
    
    comment: '#',
    columns: true,
}))// parse
.on('data',(data)=>{

    results.push(data);

})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    console.log(results); //array of buffers of bytes!
    console.log('done');
});

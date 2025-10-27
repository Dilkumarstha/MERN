import http from 'http';

const app = http.createServer((req, res) => {
res.end('Hello World');


});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
}   );
import http from "http"
const app = http.createServer((req,res)=>{
    res.end("end")
})

app.listen(5000)


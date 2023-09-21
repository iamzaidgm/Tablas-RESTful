const express = require('express');

const app = express();

app.use(express.json());

app.get('/results/:n1/:n2', (request, response) => {
    const n1 = parseInt(request.params.n1);
    const n2 = parseInt(request.params.n2);
    const suma = n1+n2;

    response.send("Suma: " + suma);

});

app.post('/results', (request, response) => {
    const n1 = request.body.n1;
    const n2 = request.body.n2;
    const multiplicación = n1*n2;

    response.send("Multiplicación: " + multiplicación);
});

app.put('/results', (request, response) => {
    const n1 = parseInt(request.body.n1);
    const n2 = parseInt(request.body.n2);
    const división = n1/n2;

    response.send("División: " + división);
});

app.patch('/results', (request, response) => {
    const n1 = parseInt(request.body.n1);
    const n2 = parseInt(request.body.n2);
    const potencia = n1**n2;

    response.send("Potencia: " + potencia);
});

app.delete('/results/:n1/:n2', (request, response) => {
    const n1 = parseInt(request.params.n1);
    const n2 = parseInt(request.params.n2);
    const resta = n1-n2;

    response.send("Resta: " + resta);
});

app.listen(4000, () => {
    console.log("Server is running in port 4000");
});
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const db_users = {
    name: 'jan.testowy@wskz.pl', 
    pass: "aqLrvDJ348",
}

const customers = [
    { id: 1, name: 'Jan Testowy'},
    { id: 2, name: 'Paweł Testowy'},
    { id: 3, name: 'Wojtek Testowy'},
]

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
});


// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;

	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute query that'll select the account from the database based on the specified username and password
        if (db_users.name == username && db_users.pass == password ) {
            // Authenticate the user
            request.session.loggedin = true;
            request.session.username = username;
            // Redirect to home page
            response.redirect('/home');
        } else {
            response.send('Incorrect Username and/or Password!');
        }			
        response.end();

	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

// http://localhost:3000/success-registration
app.get('/success-registration', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Account created for: ' + request.session.username);
	} else {
		// Not register
		response.send('Please register to view this page!');
	}
	response.end();
});

// sendFile will go here
app.get('/registration', function(req, res) {
    res.sendFile(path.join(__dirname, '/registration.html'));
});


// http://localhost:3000/registration-check
app.post('/registration-check', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;

	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Authenticate the user
		request.session.loggedin = true;
		request.session.username = username;
		// Redirect to home page
		response.redirect('/success-registration');
	    response.end();
	} else {
		response.send('Please enter correct data!');
		response.end();
	}
});

// sendFile will go here
app.get('/new-page', function(req, res) {
    res.sendFile(path.join(__dirname, '/new-page.html'));
});

///API
app.get('/api/customers', (request, response) => {
    response.send(customers)
})

app.get('/api/customers/:id', (request, response) => {
    var index = request.params.id - 1
    response.send(customers[index])
})

app.post('/api/customers', (request, response) => {
    var customer = {
        id: customers.length + 1,
        name: request.body.name
    }
    customers.push(customer)
    response.send("Dodano klienta")
})

app.put('/api/customers/:id', (request, response) => {
    var index = request.params.id - 1
    customers[index].name = request.body.name
    response.send("Zaktualizowano klienta")
})

app.delete('/api/customers/:id', (request, response) => {
    var index = request.params.id - 1
    customers.splice(index, 1)
    response.send("Usunięto klienta")
})


app.listen(port);
console.log('Server started at http://localhost:' + port);
function fetchAllFromAuthRoute(){
    const fetch_url = `http://localhost:3000/authtest/getall`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

// * FETCH/POST to Auth/Create

function postToAuthRouteCreate() {
    const fetch_url = `http://localhost:3000/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;
    let authInputData = { authtestdata : { item: authTestDataInput } };

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}
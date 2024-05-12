fetch('https://data.api.xweather.com/conditions/51.22296631634084, 4.409946258392961?format=json&plimit=1&filter=5min&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        if (!json.success) {
            console.log('Oh no!');
        } else {
            console.log(json);
        }
    })
    .catch((error) => {
        console.log('Oh no!');
    });
const Client = {};
const BASE_APP_URL = process.env.BASE_APP_URL || `http://localhost:8000/`;
Client.get = async (url) => (new Promise((resolve, reject) => {
    debugger
    const request = new XMLHttpRequest();
    request.onload = (() => {
        const response = JSON.parse(request.response);
        if(response){
            resolve(response);
        } else {
            reject(response.errors);
        }
    });
    request.onerror = (e) => {
        reject(JSON.stringify(e));
    };
    request.open('GET', (BASE_APP_URL + url));
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
}));

export default Client;
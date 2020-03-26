import config from './../../config_triposo';

import RequestError from './../RequestError';
import getResponseContent from './../getResponseContent';


const triposoRequest = async function (endpoint, method, data) {
    const response = await fetch(`${config.API_URL}/${config.API_VERSION}/${endpoint}`, { 
        method,
        headers: {
            "X-Triposo-Account": `${config.API_ACCOUNT_ID}`,
            "X-triposo-Token": `${config.API_TOKEN}`
        },
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)
    if(response.ok) return content;

    throw new RequestError(response.statusText, response.status, content)
}

export default triposoRequest;
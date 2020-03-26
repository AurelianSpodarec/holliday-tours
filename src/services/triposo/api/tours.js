import triposoRequest from "../requests/request";

function getTourById(tourID) {
    const res = await triposoRequest(`tour.json?id=${tourID}`, 'GET')
    return res;
}

export {
    getTourById
}
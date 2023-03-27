import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function renders(token) {
    const promise = axios.get(`${BASE_URL}/memberships`, createConfig(token));
    return promise;
}

function displayPlan(token, idPlan) { 
    const promise = axios.get(`${BASE_URL}/memberships/${idPlan}`, createConfig(token));
    return promise;
}

function signPlan(token) {
    const promise = axios.post(`${BASE_URL}`, createConfig(token));
    return promise;
}

const apiPlan = { renders, displayPlan, signPlan };
export default apiPlan;
import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function renders(token) {
    const promise = axios.get(`${BASE_URL}`, createConfig(token));
    return promise;
}

function signPlan(token, idPlan) { 
    const promise = axios.get(`${BASE_URL}/${idPlan}`, createConfig(token));
    return promise;
}

const apiPlan = { renders, signPlan };
export default apiPlan;
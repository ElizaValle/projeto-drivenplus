import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function signPlan(token) {
    const promise = axios.get(`${BASE_URL}/memberships/idPlan`, createConfig(token));
    return promise;
}

const apiPlan = { signPlan };
export default apiPlan;
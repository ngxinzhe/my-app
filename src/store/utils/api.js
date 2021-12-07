import axios from 'axios'


export const service = axios.create({
    
    headers: {
        'Accept': 'Application/json'
    }

});

export function get(url, headers = {}, params = {}) {
    return service({
        method: 'GET',
        url: url,
        params: params,
        withCredentials: false,
        responseType: 'json',
        maxRedirects: 5,
        headers: headers,
    }).catch(error => {
        console.warn(error)
    })
}

export function post(url, payload, headers = {}) {
    return service({
        method: 'POST',
        url: url,
        data: payload,
        responseType: 'json',
        maxRedirects: 5,
        withCredentials: false,
        headers: headers,
    }).catch(error => {
        console.warn(error)
    })
}




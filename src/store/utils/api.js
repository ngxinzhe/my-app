import axios from 'axios'
import env from '../../../env.js'

export const service = axios.create({
    baseURL: env.base_url,
    headers: {
        'Authorization': `Basic ${Buffer.from(env.jira_token).toString('base64')}`,
        'Accept': 'Application/json'
    }

});

service.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

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



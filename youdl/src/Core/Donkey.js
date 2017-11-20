import React from 'react';

import {Bucket} from './Bucket.js';


export default class Donkey {
    static async get(url) {
        // token = await Bucket.get('token');
        token = "5SNgSBzLic6sGxP5GPCMq5jwMBaHyB";
        try {
            let response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 5SNgSBzLic6sGxP5GPCMq5jwMBaHyB'
                    }
                });
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    }

    // static post(url, body) {
    //     token = Bucket.get('token');
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization: Bearer ' + token,
    //         },
    //         body: JSON.stringify()
    //     });
    // }

    // static put(url) {
    //     console.warn(url);
    // }
}

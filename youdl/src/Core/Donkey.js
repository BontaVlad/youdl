import React from 'react';

import {Bucket} from './Bucket.js';


export default class Donkey {
    static async get(url) {
        // token = await Bucket.get('token');
        token = "xV64DnvkYoHPZdKqBAy8r7OceGr9Gh";
        try {
            let response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    }

    static async delete(url) {
        // token = await Bucket.get('token');
        token = "xV64DnvkYoHPZdKqBAy8r7OceGr9Gh";
        try {
            let response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
        }
        catch(error) {
            console.error(error);
        }
    }
    static async post(url, body) {
        token = "xV64DnvkYoHPZdKqBAy8r7OceGr9Gh";
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(body)
            });
        }
        catch(error) {
            console.error(error);
        }
    }

    // static put(url) {
    //     console.warn(url);
    // }
}

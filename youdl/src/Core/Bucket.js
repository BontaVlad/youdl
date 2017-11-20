import React from 'react'


BASE_KEY = 'youdl';

export default class Bucket {
    static async set(key, value) {
        try {
            await AsyncStorage.setItem('@' + BASE_KEY + ':' + key, value);
        } catch (error) {
            console.warn(error);
        }
    }

    static async get(key) {
        try {
            const value = await AsyncStorage.getItem('@' + BASE_KEY + ':' + 'key');
            if (value !== null){
                return value;
            }
        } catch (error) {

            console.warn(error);
        }
    }
}

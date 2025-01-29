import { Injectable } from "@angular/core";

// a service to set theme chosen by the user in local storage and retrieve it when the user visits the site again.
@Injectable({
    providedIn: 'root'
})

export class PersistenceService {
    // set the theme in local storage
    set(key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }
    get(key: string) {
        try {
            let data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }
}


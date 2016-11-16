import {Injectable} from '@angular/core';
//import {CLUBS} from './mock-clubs';
import {Club} from "./club";

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Best practice to apply a Decorator
@Injectable()
export class ClubService{

    private clubsUrl = 'app/clubs';  // URL to web api

    constructor(private http: Http) { }


    getClubs(): Promise<Club[]> {
        return this.http.get(this.clubsUrl)
            .toPromise()
            .then(response => response.json().data as Club[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /**
     * Return one club for the requested id
     * @param id
     * @returns {Promise<Club>}
     */
    getClub(id:number) : Promise<Club>{
        return this.getClubs()
            .then(clubs =>
                clubs.find(hero => hero.id === id));
    }
}

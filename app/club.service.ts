import {Injectable} from '@angular/core';
import {CLUBS} from './mock-clubs';
import {Club} from "./club";

// Best practice to apply a Decorator
@Injectable()
export class ClubService{
    getClubs() : Promise<Club[]>{
        return Promise.resolve(CLUBS);

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

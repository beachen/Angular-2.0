import {Injectable} from '@angular/core';
import {CLUBS} from './mock-clubs';
import {Club} from "./club";

// Best practice to apply a Decorator
@Injectable()
export class ClubService{
    getClubs() : Promise<Club[]>{
        return Promise.resolve(CLUBS);

    }
}

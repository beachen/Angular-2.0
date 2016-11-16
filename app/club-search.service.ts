import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs';
import { Club }             from './club';

@Injectable()
export class ClubSearchService {

    private clubsUrl = 'app/clubs/?name=${term}';  // URL to web api

    constructor(private http: Http) {}

    search(term: string): Observable<Club[]> {
        console.log("About to search for:" + term);
        return this.http
            .get('app/clubs/')
            .map((r: Response) =>
            {
                console.log("res:" + r.json().data);
                return r.json().data as Club[];
            })

    }
}
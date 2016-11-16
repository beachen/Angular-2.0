import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ClubSearchService } from './club-search.service';
import { Club } from './club';

@Component({
    selector: 'club-search',
    templateUrl: 'app/club-search.component.html',
    styleUrls: [ 'app/club-search.component.css' ],
    providers: [ClubSearchService]
})
export class ClubSearchComponent implements OnInit {
    clubs: Observable<Club[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private clubSearchService: ClubSearchService,
        private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {

        this.clubs = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => {term   // switch to new observable each time
                // return the http search observable
                let res :Observable<Club[]>  =  this.clubSearchService.search(term);
                if(res){
                    console.log("Message returened!!!!" );
                    return res;
                }
                else{
                    return Observable.of<Club[]>([]);
                }
                })

            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Club[]>([]);
            });

    }
    gotoDetail(club: Club): void {
        let link = ['/detail', club.id];
        this.router.navigate(link);
    }
}

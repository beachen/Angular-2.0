import {Component, Input, OnInit}           from '@angular/core';
import {ActivatedRoute, Params, Route}      from '@angular/router';
import { Location }                         from '@angular/common';

import {Club} from './club'
import 'rxjs/add/operator/switchMap';
import {ClubService} from "./club.service";

@Component({
        selector: "club-detail",
        styleUrls: ["/app/club-detail.component.css"],
        templateUrl: "/app/club-detail.component.html"
    }
)
export class ClubDetailComponent  implements  OnInit{

    // Decorator
    @Input()
    club : Club;
    constructor(private clubService: ClubService,
                private route: ActivatedRoute,
                private location: Location){

    }

    ngOnInit(): void {
       this.route.params
            .switchMap((params: Params) => this.clubService.getClub(+params['id']))
            .subscribe(club => this.club = club);
    }

    goBack(): void {
        this.location.back();
    }
}


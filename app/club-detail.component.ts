import {Component, Input, OnInit}           from '@angular/core';
import {ActivatedRoute, Params, Route}      from '@angular/router';
import { Location }                         from '@angular/common';

import {Club} from './club'
import 'rxjs/add/operator/switchMap';
import {ClubService} from "./club.service";

@Component({
    selector : "club-detail",
    template: `
          <div *ngIf="club">
            <h2>{{club.name}} details!</h2>
            <div><label>id: </label>{{club.id}}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="club.name" placeholder="name"/>
            </div>
            <button (click)="goBack()">Back</button>
          </div>
        `
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


import {Component, Input} from '@angular/core';
import {Club} from './club'

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
          </div>
        `
    }
)
export  class ClubDetailComponent{

    // Decorator
    @Input()
    club : Club;
}


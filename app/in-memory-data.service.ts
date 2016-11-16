import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let clubs = [
            {id: 1, name: 'Stockholm C'},
            {id: 2, name: 'Göteborg C'},
            {id: 3, name: 'Malmö C'},
            {id: 4, name: 'Uppsala C'}

        ];
        return {clubs};
    }
}

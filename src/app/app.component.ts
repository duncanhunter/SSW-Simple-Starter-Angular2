import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.component.html'
})
export class AppComponent { 
    binding: string = 'default binding value';
    link = 'http://angular.io';
    title: string = 'App Component';
    ngIf: string = ''
    hiddenText: string = ''
    item: string = ''
    items: string[] = []
    isPrimary: boolean = false;
    
    
    alert(clicked) {
        alert(clicked);   
    }
    
    addItems(item) {
        this.items.push(item);
    }
    
    activate() {
        this.isPrimary = !this.isPrimary;
    }
    
}



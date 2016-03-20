import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.component.html'
})
export class AppComponent { 
    title: string = 'App Component'
    
    
    testFunction() {
       let name = 'Bob';
       let friends = [] 
       
       friends.forEach(function (friend) {
           console.log(this.name);
       })
        
    }
    
}



import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    public collapsed = true;
    @Output() public featureSelected = new EventEmitter<string>();

    public onSelect(feature:string):void{
        this.featureSelected.emit(feature);
    }
}
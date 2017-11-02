import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { isAndroid, isIOS } from "platform";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    public apodTitle: string;
    public asteroidTitle: string;
    public roversTitle: string;
    public detailsTitle: string;
    public isAndroid: boolean = isAndroid;
    public isIos: boolean = isIOS;

    private drawer: RadSideDrawer;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
        this.apodTitle = "Astronomical \nPhoto \nof the Day";
        this.asteroidTitle = "Asteroids\n Proximity\n Checker";
        this.roversTitle = "Mars Rovers\n Photos\n Databank";
        this.detailsTitle = "About\n Cosmos Databank\n Application";
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();

        console.log("ngAfterViewInit: " + this.drawer);
    }

    public toggleDrawer() {
        console.log("toggle: " + this.drawer);
        this.drawer.toggleDrawerState();
    }
}

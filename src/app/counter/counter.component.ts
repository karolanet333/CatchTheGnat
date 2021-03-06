import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
declare var $:any;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

// Hardcoded date
    private eventDate: Date = new Date(2017, 9, 22);

    private diff: number;
    private countDownResult: number;
    private days: number = 0;
    private hours: number = 0;
    private minutes: number = 0;
    private seconds: number = 0;

    constructor() {

        Observable.interval(1000).map((x) => {
                this.diff = Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000);
            }).subscribe((x) => {           
                this.days = this.getDays(this.diff);
                this.hours = this.getHours(this.diff);
                this.minutes = this.getMinutes(this.diff);
                this.seconds = this.getSeconds(this.diff);
            });
    }

    ngOnInit(){

        setTimeout(() => {
            $("#slider").revolution(
            {
                delay:9000,
                startheight:450,
                startwidth:890,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                onHoverStop:"on",
                hideThumbs:200,
                navigationType:"bullet",
                navigationStyle:"round",
                navigationArrows:"none",

                touchenabled:"on",

                navOffsetHorizontal:0,
                navOffsetVertical:80,
                shadow:undefined,
                fullWidth:"on",
                fullScreen:"on"
            });
        }, 0);

        
    }

    getDays(t){
        var days;
        days = Math.floor(t / 86400);

        return days;
    }

    getHours(t){
        var days, hours;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;

        return hours;
    }

    getMinutes(t){
        var days, hours, minutes;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;

        return minutes;
    }

    getSeconds(t){
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;

        return seconds;
    }
}

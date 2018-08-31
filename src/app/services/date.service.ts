import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IMyDpOptions, IMyDate } from 'mydatepicker';

@Injectable()
export class DateService {

    private  Options: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        disableUntil: {year: 1910, month: 1, day: 1},
    };

    private OptionsDefault: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };

    constructor() {
        const vm = this;
        vm.setCurrentDate();
    }

    setCurrentDate() {
        const vm = this;
        const currentDate = new Date();
        const dateObj = {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        };
        vm.Options.disableSince = dateObj;
    }

    getCurrentDate() {
        const vm = this;
        const currentDate = new Date();
        const dateObj: IMyDate =  {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        };
        const obj = {
            date: dateObj,
            formatted: dateObj.day + '/' + dateObj.month + '/' + dateObj.year
        };
        return obj;
    }

    getCurrentDateTime() {
        const vm = this;
        const currentDate = new Date();
        const dateObj: IMyDateTime =  {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate(),
            hour: currentDate.getHours(),
            minute : currentDate.getMinutes()
        };

        const obj = {
            date: dateObj,
            // tslint:disable-next-line:max-line-length
            formatted: dateObj.day + '-' + dateObj.month + '-' + dateObj.year + ':' + currentDate.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
         };
        return obj;
    }

    datePickerOptions() {
        const vm = this;
        return vm.Options;
    }

    datePickerDefault() {
        const vm = this;
        return vm.OptionsDefault;
    }

    getCurrentYear() {
        const vm = this;
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    getFormattedDate(date) {
        if (date) {
            const sd = date.split('/');
            const dateObj = {};
            dateObj['year'] = sd[2];
            dateObj['month'] = (sd[1] && +sd[1] <= 9) ? sd[1].substring(1, 2) : sd[1];
            dateObj['day'] = (sd[0] && +sd[0] <= 9) ? sd[0].substring(1, 2) : sd[0];
            const returnObj = {
                date : dateObj,
                formatted: date
            };
            return returnObj;
        } else {
            return null;
        }
    }
}
export interface IMyDateTime {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
}

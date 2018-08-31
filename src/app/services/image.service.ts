import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../data.service';
import { AppSettings } from '../app.settings';
import { AppService } from '../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageViewComponent } from '../components/image-view/image-view.component';
import * as _ from 'lodash';


@Injectable()
export class ImageService {
    constructor(private dataService: DataService,
        private appService: AppService,
        private modalService: NgbModal) {}

    captureImage(fileInput: any, cb) {
        const vm = this;
        vm.appService.spinnerData = true;
        if (fileInput.target.files && fileInput.target.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e: any) {
            vm.mapImage(e.target.result, fileInput.target.files[0], cb);
            fileInput.target.value = '';
          };
          reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    mapImage(image, file, cb) {
        const vm = this;
        const randomNo = Math.random();
        const fd = new FormData();
        fd.append('file', file, file.name);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', AppSettings.api_endpoint + '/api/docs/upload', true);
        xhr.setRequestHeader('x-access-token', vm.appService.userObj.token);
        xhr.addEventListener('load', uploadComplete, false);
        xhr.send(fd);
        function uploadComplete(evt) {
          vm.appService.spinnerData = false;
          const responseStatus = evt.target.responseText;
          const response = JSON.parse(responseStatus);
          cb(response);
        }
    }

    imageView(file) {
    const vm = this;
        vm.dataService.getDataBg('/docs/fetch/' + file).subscribe(response => {
            if (response && response.data) {
                const modalRef = this.modalService.open(ImageViewComponent, { size: 'lg' });
                modalRef.componentInstance.image = response.data;
                modalRef.componentInstance.images = null;
            }
        });
    }

    multiImageView(datum) {
        const vm = this;
        const apiCalls = [];
        const files = [];
        _.each(datum, data => {
            apiCalls.push(vm.dataService.getDataBg('/docs/fetch/' + data.file));
        });
        forkJoin(
            apiCalls
        ).subscribe(response => {
            _.each(response, (res, i) => {
                if (!res['error']) {
                    const obj = {};
                    obj['file'] = res['data'];
                    obj['description'] = datum[i].type;
                    files.push(obj);
                }
                if (i === response.length - 1) {
                    const modalRef = this.modalService.open(ImageViewComponent, { size: 'lg' });
                    modalRef.componentInstance.image = null;
                    modalRef.componentInstance.images = files;
                }
            });
        });
    }

    getImagePath(file, cb) {
    const vm = this;
        vm.dataService.getData('/docs/fetch/' + file).subscribe(response => {
            if (response && response.data) {
                cb(response.data);
            }
        });
    }
}

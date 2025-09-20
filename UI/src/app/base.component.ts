import { Component, OnInit } from "@angular/core";
import { ServiceLocatorService } from "./service-locator.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    template: ''
})
export class BaseCtl implements OnInit {

    public form: any = {
        error: false, //error 
        inputerror: {}, // form input error messages
        message: null, //error or success message
        data: { id: null }, //form data
        searchParams: {}, //search form
        preload: [], // preload data
        list: [], // search list 
        pageNo: 0
    };

    public api: any = {
        endpoint: '',
        get: '',
        save: '',
        search: '',
        deleteMany: '',
        preload: '',
    }

    initApi(ep: any) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
    }

    constructor(public endpoint: String, public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {
        var _self = this;
        _self.initApi(endpoint);
    }

    ngOnInit(): void {
        this.preload();
    }

    preload() {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res: any) {
            if (res.success) {
                _self.form.preload = res.result;
            } else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    }

    submit() {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res: any) {
            _self.form.message = '';
            _self.form.inputerror = {};

            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                return _self.form.data.id;
            } else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
        });
    }
}
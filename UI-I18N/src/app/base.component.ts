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
        pageNo: 0,
        nextListSize: 0
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

        serviceLocator.getPathVariable(route, function (params: any) {
            _self.form.data.id = params["id"];
        })
    }

    ngOnInit(): void {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
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

    display() {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res: any) {
            if (res.success) {
                _self.form.data = res.result.data;
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
                _self.form.message = res.result.message;
                _self.form.data.id = res.result.data;
            } else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
        });
    }

    search() {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res: any) {
            _self.form.message = '';
            _self.form.list = [];
            if (res.success) {
                _self.form.error = false;
                _self.form.list = res.result.data;
                _self.form.nextListSize = res.result.nextListSize;
            } else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    }

    deleteMany(id: any) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.searchParams, function (res: any) {
            _self.form.message = '';
            _self.form.list = [];
            if (res.success) {
                _self.form.error = false;
                _self.form.message = res.result.message;
                _self.form.list = res.result.data;
                _self.form.nextListSize = res.result.nextListSize;
            } else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    }

    forward(page: any) {
        this.serviceLocator.forward(page);
    }

    reset() {
        location.reload();
    }
}
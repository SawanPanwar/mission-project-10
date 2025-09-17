import { Component, OnInit } from "@angular/core";


@Component({
    template: ''
})
export class BaseCtl implements OnInit {

    public form: any = {
        error: false, //error 
        message: null, //error or success message
        preload: [], // preload data
        data: { id: null }, //form data
        inputerror: {}, // form input error messages
        searchParams: {}, //search form
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

    constructor(public endpoint: String) {
        var _self = this;
        _self.initApi(endpoint);
    }

    ngOnInit(): void {

    }
}
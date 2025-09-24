import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { BaseCtl } from "./base.component";
import { ServiceLocatorService } from "./service-locator.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: ''
})
export class BaseListCtl extends BaseCtl {

    @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef>;

    deleteRecordList: any[] = [];

    isMasterSel: boolean = false;

    constructor(endpoint: String, locator: ServiceLocatorService, route: ActivatedRoute) {
        super(endpoint, locator, route);
    }

    override ngOnInit() {
        this.preload();
        this.search();
    }

    previous() {
        this.isMasterSel = false;
        this.form.pageNo--
        this.search();
    }

    next() {
        this.isMasterSel = false;
        this.form.pageNo++;
        this.search();
    }

    checkUncheckAll(event: any) {
        const checked = event.target.checked;
        this.checkboxes.forEach(cb => cb.nativeElement.checked = checked);
    }

    checklistUpdate() {
        const totalChecked = this.checkboxes.filter(cb => cb.nativeElement.checked).length;
        this.isMasterSel = totalChecked === this.form.list.length;
    }

    override deleteMany() {
        this.form.error = false;
        this.deleteRecordList = [];

        this.checkboxes.forEach(cb => {
            if (cb.nativeElement.checked) {
                this.deleteRecordList.push(cb.nativeElement.id);
            }
        });

        if (this.deleteRecordList.length > 0) {
            this.form.pageNo = 0;
            super.deleteMany(this.deleteRecordList + '?pageNo=' + this.form.pageNo);
        } else {
            this.form.error = true;
            this.form.message = "Select at least one record";
        }
        this.isMasterSel = false;
    }
}
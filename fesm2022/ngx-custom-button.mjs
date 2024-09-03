import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class NgxCustomButtonService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: NgxCustomButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: NgxCustomButtonService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: NgxCustomButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxCustomButtonComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: NgxCustomButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.2", type: NgxCustomButtonComponent, isStandalone: true, selector: "lib-ngx-custom-button", ngImport: i0, template: `
    <input type="button" name="Submit" value="Submit">
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.2", ngImport: i0, type: NgxCustomButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-custom-button', standalone: true, imports: [], template: `
    <input type="button" name="Submit" value="Submit">
  ` }]
        }] });

/*
 * Public API Surface of ngx-custom-button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCustomButtonComponent, NgxCustomButtonService };
//# sourceMappingURL=ngx-custom-button.mjs.map

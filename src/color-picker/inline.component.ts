import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Inline Mode sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'inline.html',
    styleUrls: ['inline.css'],
    encapsulation: ViewEncapsulation.None

})
export class InlineColorPickerComponent {
    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['inline.css'];
    }

    public ctrlSwitch: boolean = false;

    // function to handle the ColorPicker change event
    public change(args: ColorPickerEventArgs): void {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    }

    ngOnInit(): void {
        if (Browser.isDevice) {
            document.getElementById('inline-control').classList.add('e-mobile-control');
        }
    }
}
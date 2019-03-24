import {Component, Input} from '@angular/core';

@Component({
    selector: 'tab-title',
    templateUrl: './tab-title.component.html',
    styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent {
    @Input() index: string;
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input() caption: string;
  @Input() absoluteValue: number;
  @Input() relativeValue: number;
  @Input() absoluteUnit: string;

  constructor() {}

  ngOnInit(): void {}

  getAbsoluteText(): string {
    if (this.absoluteUnit) {
      return `${this.absoluteValue} ${this.absoluteUnit}`;
    }
    return this.absoluteValue.toString();
  }

  getRelativeText(): string {
    if (this.relativeValue !== undefined) {
      return `(+${this.relativeValue.toFixed(2)} %)`;
    }
    return '';
  }
}

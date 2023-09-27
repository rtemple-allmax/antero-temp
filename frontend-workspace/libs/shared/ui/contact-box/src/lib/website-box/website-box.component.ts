import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amx-website-box',
  templateUrl: './website-box.component.html',
  styleUrls: ['./website-box.component.scss'],
})
export class WebsiteBoxComponent implements OnInit {
  @Input() public label = '';
  @Input() public address = '';

  public url = '';
  
  public ngOnInit(): void {
    if (!this.address.startsWith('https://') && !this.address.startsWith('http://')) {
      this.url = 'http://' + this.address;
    } else {
      this.url = this.address;
    }
  }
}

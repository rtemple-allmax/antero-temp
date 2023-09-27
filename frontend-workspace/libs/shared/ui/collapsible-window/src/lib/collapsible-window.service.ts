import { Injectable } from '@angular/core';
import { CollapsibleWindowComponent } from './collapsible-window.component';

@Injectable({ providedIn: 'root' })
export class CollapsibleWindowService {
  private topOffset = 60;
  private modalHeaderHeight = 45;
  private margin = 8;
  
  public windows: CollapsibleWindowComponent[] = [];

  previousWindow: CollapsibleWindowComponent | null = null; 

  public registerWindow(window: CollapsibleWindowComponent): void {
    const found = this.windows.find(x => x.key === window.key);
    if (found) {
      // modal already registered
    } else {
      this.windows.push(window);
    }
    window.isMinimized = true;
    this.setPositions();
  }

  public deregisterWindow(window: CollapsibleWindowComponent): void {
    const index = this.windows.lastIndexOf(window);
    if (index >= 0) {
      this.windows.splice(index, 1);
    }

    window.isMinimized = false;
    window.top = '50%';
    window.left = '50%';
    window.transform = 'translate(-50%, -50%)';
    if (this.previousWindow && !this.previousWindow.isMinimized) {
      this.registerWindow(this.previousWindow);
    }
    this.previousWindow = window;
    this.setPositions();
  }

  public setPositions(): void {
    this.windows.forEach((m, i) => {
      m.top = `${ this.topOffset + ((this.modalHeaderHeight + this.margin) * i) }px`;
      m.left = 'calc(100% - 4px)'
      m.transform = 'translate(-100%, 0)';
    });
  }

  public removePrevious(window: CollapsibleWindowComponent): void {
    if (this.previousWindow === window) {
      this.previousWindow = null;
    }
  }
}

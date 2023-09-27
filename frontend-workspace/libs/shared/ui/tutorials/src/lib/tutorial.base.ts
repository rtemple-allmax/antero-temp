import { PersistenceService, PersistentDataKeys } from "@allmax-angular/antero-web/services/persistence";
import { Component, Input, OnInit } from "@angular/core";

@Component({ template: '' })
export class TutorialBaseComponent implements OnInit {
  @Input() public key: PersistentDataKeys = PersistentDataKeys.NONE;
  public showTutorial = true;

  constructor(protected presistence: PersistenceService) { }

  public ngOnInit(): void {
    this.update();
    this.presistence.changed.subscribe(() => this.update());

  }

  public dismissHandler(): void {
    if (this.key !== PersistentDataKeys.NONE) {
      this.presistence.set(this.key, 0);
      this.showTutorial = false;
    }
  }

  public update(): void {
    if (this.key !== PersistentDataKeys.NONE) {
      const data = this.presistence.get();
      if (data) {
        this.showTutorial = !!data[this.key];
      }
    } else {
      this.showTutorial = false;
    }
  }
}
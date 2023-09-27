import { EquipmentPart, Part } from '@allmax-angular/antero-web/entities';
import { Modals, PartData } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { CrudButtonComponent } from '@allmax-angular/shared/ui/buttons/crud-button';
import { PopoverButtonTypes } from '@allmax-angular/shared/ui/buttons/popover-button';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { EquipmentListItemBaseComponent } from '../equipment-list-item.base';

@Component({
  selector: 'ant-equipment-part-list-item',
  templateUrl: './equipment-part-list-item.component.html',
  styleUrls: ['./equipment-part-list-item.component.scss'],
})
export class EquipmentPartListItemComponent extends EquipmentListItemBaseComponent {
  @ViewChild(CrudButtonComponent) public crudBtn: Nullable<CrudButtonComponent>;
  @Input() public record: Nullable<PartData>;
  @Output() public avatarSelected = new EventEmitter<File>();


  public popoverTypes: typeof PopoverButtonTypes = PopoverButtonTypes;

  public moreOptions = [
    { text: 'Edit', icon: this.icons.editIcon, onItemClick: () => this.editHandler() },
    { text: 'Delete', icon: this.icons.editIcon, onItemClick: () => this.deleteHandler() },
  ]

  public get text(): string {
    return `${ this.record?.totalQuantity } ${ this.record?.units } in ${ this.record?.stockLocations?.length }`
  }

  public get popoverLabel(): string {
    if (!this.record) { return ''; }
    return `location${ this.record?.stockLocations.length > 1 ? 's' : ''}`;
  }

  // public ngAfterViewInit(): void {
  //   if (this.el?.nativeElement) {

  //   }
  // }

  public filesSelectedHandler(files: File[]): void {
    if (files.length > 0) {
      this.avatarSelected.emit(files[0]);
    }
  }

  public editHandler(): void {
    if (this.record) {
      this.store.selectedPartData = this.record;
      this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.UPDATE);

    }
  }

  public deleteHandler(): void {
    if (this.record) {
      this.store.selectedPartData = this.record;
      this.antero.openModal(Modals.EQUIPMENT_DELETE_PART);
    }
  }

  public closeMenu(): void {
    this.crudBtn?.close();
  }
}

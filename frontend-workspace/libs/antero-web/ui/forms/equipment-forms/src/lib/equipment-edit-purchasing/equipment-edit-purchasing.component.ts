import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EquipmentFormBaseComponent } from '../equipment-form.base';

@Component({
  selector: 'ant-equipment-edit-purchasing',
  templateUrl: './equipment-edit-purchasing.component.html',
  styleUrls: ['./equipment-edit-purchasing.component.scss'],
})
export class EquipmentEditPurchasingComponent extends EquipmentFormBaseComponent { }

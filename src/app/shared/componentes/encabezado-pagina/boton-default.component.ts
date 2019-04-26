import { EventEmitter, Input, Output } from '@angular/core';

export class BotonDefaultComponent  {
  private _tipo = 'button';
  private _claseColor = 'btn-primary';
  private _claseIcono = 'fa-question-circle';
  private _titulo: string;
  private _claseTamanio = '';
  private _disabled = false;
  private _visible = true;
  private _clic: EventEmitter<any>;
  constructor() {
    this._clic = new EventEmitter<any>();
  }

  hacerClic() {
    this._clic.emit();
  }

  get tipo(): string {
    return this._tipo;
  }

  @Input() set tipo(value: string) {
    this._tipo = value;
  }

  get claseColor(): string {
    return this._claseColor;
  }

  @Input() set claseColor(value: string) {
    this._claseColor = value;
  }

  get claseIcono(): string {
    return this._claseIcono;
  }

  @Input() set claseIcono(value: string) {
    this._claseIcono = value;
  }

  get titulo(): string {
    return this._titulo;
  }

  @Input() set titulo(value: string) {
    this._titulo = value;
  }

  get claseTamanio(): string {
    return this._claseTamanio;
  }

  @Input() set claseTamanio(value: string) {
    this._claseTamanio = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  @Input() set visible(value: boolean) {
    this._visible = value;
  }

  @Input() @Output() get clic(): EventEmitter<any> {
    return this._clic;
  }
}

import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DragDropService} from '../drag-drop.service';

@Directive({
  selector: '[appDrag][draggedClass][dragTag][dragData]'
})

export class DragDirective {
  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: string;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {

  }

  // tslint:disable-next-line:variable-name
  _isDraggable = false;

  get isDraggable() {
    return this._isDraggable;
  }

  // 包含appDrag标签
  @Input('appDrag')
  set isDraggable(val) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface DragData {
  tag: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  // tslint:disable-next-line:variable-name
  private _dragData = new BehaviorSubject<DragData>(null);

  constructor() {
    this._dragData.next(null);
  }

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  clearDragData() {
    this._dragData.next(null);
  }
}

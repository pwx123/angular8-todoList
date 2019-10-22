import {TodoListEffect} from './todoList.effect';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

export const effects = [
  TodoListEffect
];

@NgModule({
  imports: [
    EffectsModule.forRoot(effects)
  ]
})


export class AppEffectsModule {
}

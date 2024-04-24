import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemotestComponent } from "./componentes/memotest/memotest.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MemotestComponent, CommonModule]
})
export class AppComponent {
  title = 'memotest';
}

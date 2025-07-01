import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/Button/button.component';
import { FormComponent } from './components/Form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ButtonComponent, FormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TaskList';
}
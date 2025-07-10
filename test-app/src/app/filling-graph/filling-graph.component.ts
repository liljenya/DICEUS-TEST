import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filling-graph',
  standalone: true,
  imports: [],
  templateUrl: './filling-graph.component.html',
  styleUrl: './filling-graph.component.css'
})
export class FillingGraphComponent {
  @Input() value = 0;
}

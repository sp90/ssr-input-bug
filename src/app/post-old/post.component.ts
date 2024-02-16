import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-old',
  standalone: true,
  template: `
    <p>Old decorator input id: {{ id }}</p>
    <p>Old decorator input resolve: {{ some }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  @Input('id') id!: string;
  @Input('some') some!: string;
}

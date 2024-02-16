import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-old',
  standalone: true,
  template: `<p>Old decorator input: {{ id }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  @Input('id') id!: string;
}

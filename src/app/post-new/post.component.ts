import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-post-new',
  standalone: true,
  template: `
    <p>New signal based id: {{ id() }}</p>
    <p>New signal based resolve: {{ some() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  id = input.required()
  some = input.required()
}

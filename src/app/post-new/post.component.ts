import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-post-new',
  standalone: true,
  template: `<p>New signal based id: {{ id() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  id = input.required()
}

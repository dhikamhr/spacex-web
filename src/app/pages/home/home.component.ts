import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawgb5t: string = ' '
  rawhjde: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SpaceX')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SpaceX',
      },
    ])
  }
}

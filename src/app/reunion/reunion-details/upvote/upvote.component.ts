import { Component, Input, Output, EventEmitter } from '@angular/core'

import { ISession } from '../../../Models/index'

@Component({
  selector: 'upvote',
  template: `
            <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"> </i>                   

                    <div class="badge badge-inverse votingCount">

                        <div> {{count}}</div>
                    </div>
                </div>
            </div>
        </div>
        `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white'   /// si la valeur de voted change, celle de iconColor change aussi
    // permet de nous eviter de coder OnChanged pour changer iconColor lorsque le vote change.
  }
  @Output() vote = new EventEmitter
  iconColor: string

  onClick() {
    this.vote.emit({})
  }
}

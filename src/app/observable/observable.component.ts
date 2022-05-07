import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.data = new Observable(observable => {

      setTimeout(() => {
        observable.next('In Progress')
      }, 2000)

      setTimeout(() => {
        observable.next('Progressing')
      }, 5000)

      setTimeout(() => {
        observable.next('Completed')
      }, 8000)

      setTimeout(() => {
        // error
        observable.error('error')
      }, 8000)

      setTimeout(() => {
        // complete 停止監聽 observable
        observable.complete()
      }, 10000)

      setTimeout(() => {
        // 如果在 complete 後再加入 next 則不會跑這個程式碼
        observable.next('After Completion')
      }, 12000)

    })
    // 可以在同時訂閱多個 observable
    this.data.subscribe( val => {
      this.orderStatus = val
    })

    this.data.subscribe( val2 => {
      console.log('Second subscription');
    })
  }

}

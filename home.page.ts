import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  constructor(private toast : Toast) { }

  async displayToast() {
    this.toast.show(`This is sample toast message`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

}

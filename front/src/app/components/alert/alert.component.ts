import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  message: any;  
  @ViewChild('alert') alert: ElementRef;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => { 
          this.message = message; 
      });
      
  }
  
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  closeAlert(){
    this.message=false;
  }
  closeAlertAuto(){
    setTimeout(() => {      
      this.message=false;
    }, 12000);
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      //this.closeAlertAuto();
    }, 3000);
      
  }
}

import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

export interface BarcodeScan {
  text?: string;
  format?: string;
  cancelled?: boolean;
}

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  barcodeScan: BarcodeScan;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.barcodeScanner.scan().then((barcodeData: BarcodeScan) => {
      this.barcodeScan = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}



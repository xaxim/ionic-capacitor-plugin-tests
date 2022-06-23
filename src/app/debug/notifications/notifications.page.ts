import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
  DeliveredNotifications,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  token: Token;
  error: any;
  notifications: PushNotificationSchema[];
  actionsPerformed: ActionPerformed[];
  deliveredNotificationList: DeliveredNotifications;
  oldSchoolCheck = false;
  isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
  isChecking = false;

  constructor() { }

  ngOnInit() {
    this.notifications = [];
    this.actionsPerformed = [];

    if (this.oldSchoolCheck) {
      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
        }
      });

      PushNotifications.addListener('registration', (token: Token) => {
        alert('Push registration success, token: ' + token.value);
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      });

      PushNotifications.addListener(
        'pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          alert('Push received: ' + JSON.stringify(notification));
        },
      );

      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          alert('Push action performed: ' + JSON.stringify(notification));
        },
      );
    } else {

      if (this.isPushNotificationsAvailable) {
        this.addListeners();
        this.registerNotifications();
        this.getDeliveredNotifications();
      }
    }
  }

  async addListeners() {
    await PushNotifications.addListener('registration', token => {
      this.token = token;
      console.log('TOKEN: ', token);
    });

    await PushNotifications.addListener('registrationError', err => {
      this.error = err;
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      this.notifications.push(notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', actionPerformed => {
      this.actionsPerformed.push(actionPerformed);
    });
  };

  async registerNotifications() {
    this.isChecking = true;
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      this.error = 'User denied permissions!';
      this.isChecking = false;
      return;
    }

    await PushNotifications.register();
    this.isChecking = false;
  }

  async getDeliveredNotifications() {
    this.deliveredNotificationList = await PushNotifications.getDeliveredNotifications();
  }
}

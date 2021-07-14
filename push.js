import push from "web-push";

const vapidKeys = {
  publicKey: 'BBBOb2OcAhdShgXwN66yMx-_Z-fKY6L7nAd941qNOV9DXQFIs58UKU5HK7JCEIt5yUHXqFApWC9AfCc4eFOXK4o',
  privateKey: '1HnHE8kJi6l0gMBOHedUrnQ3MV5IRYZ7O7q3ofQ-wJo'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
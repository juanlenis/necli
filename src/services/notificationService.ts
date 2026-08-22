import { PushNotification } from 'react-native-push-notification';
import { Alert } from 'react-native';

const CHANNEL_ID = 'nequi_expense_tracker_channel';

const createNotificationChannel = () => {
  PushNotification.createChannel(
    {
      channelId: CHANNEL_ID,
      channelName: 'Nequi Expense Tracker Notifications',
      channelDescription: 'A channel to categorize your expenses and income',
      sound: 'default',
      importance: PushNotification.Importance.HIGH,
      vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`),
  );
};

const sendNotification = (message) => {
  PushNotification.localNotification({
    channelId: CHANNEL_ID,
    title: 'Nuevo mensaje de Nequi',
    message: message,
    playSound: true,
    soundName: 'default',
    actions: '["Clasificar", "Ignorar"]',
  });
};

const handleNotificationResponse = (response) => {
  if (response.action === 'Clasificar') {
    // Logic to navigate to the classification screen or show a modal
    Alert.alert('Clasificación', '¿Cómo deseas clasificar este gasto o ingreso?');
  }
};

export { createNotificationChannel, sendNotification, handleNotificationResponse };
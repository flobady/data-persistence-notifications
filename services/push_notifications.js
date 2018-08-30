import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

// mon backend server
const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

// pour envoyer la notification:
// http://rallycoding.herokuapp.com/api/tokens

export default async () => {

  let previousToken = await AsyncStorage.getItem('pushtoken');
  console.log(previousToken)

  if(previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(status !== 'granted') {
      return;
    }
    // on a les permission, on génère le push token qui identifiera ce user device
    let token = await Notifications.getExpoPushTokenAsync();
    // store le token in db
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    await AsyncStorage.setItem('pushtoken', token);
  }

};

// dans ce projet, aussi bien les notifciation que la persistence des data

import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Notifications } from 'expo';

import registerForNotifications from './services/push_notifications';
import Main from './screens/Main';


import { PersistGate } from 'redux-persist/integration/react'

class App extends React.Component {

  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {  // appelé dés qu'on reçoit une notification

      const { data: { text }, origin } = notification; // équivalent à const text= notification.data.text

      if(origin === 'received' && text) { // origin donne des infos sur le status de la notif (ça dépend de la plateforme os ou android, si on est dna sl'app ou pas, stephen dit que c'est nasty)
        // fait un appell serveur pour refresh...
        // ici on fait une alerte
        Alert.alert(
          'New Push Notification', //title of the alert
          text,
          [{ text: 'Ok buddy.' }]
        );
      }
    })
  }


  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Main />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBR1pl7vYjxX8iRQ_0b5B9XDRM1u9jbjPI",
    authDomain: "water-aa9c4.firebaseapp.com",
    projectId: "water-aa9c4",
    storageBucket: "water-aa9c4.firebasestorage.app",
    messagingSenderId: "839179323547",
    appId: "1:839179323547:web:cc0dff8998a7d1eed01e3e"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background mein notification handle karne ke liye
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3105/3105807.png', // Pani ka icon
    badge: 'https://cdn-icons-png.flaticon.com/512/3105/3105807.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

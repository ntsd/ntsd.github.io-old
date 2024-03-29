/* ===========================================================
 * sw-registration.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */

function handleRegistration(registration){
  console.log('Service Worker Registered. ', registration)
  registration.onupdatefound = (e) => {
    var installingWorker = registration.installing;
    installingWorker.onstatechange = (e) => {
      if (installingWorker.state !== 'installed') return;
      if (navigator.serviceWorker.controller) {
        console.log('SW is updated');
      } else {
        console.log('A Visit without previous SW');
      }
    };
  }
}

if(navigator.serviceWorker){
  // For security reasons, a service worker can only control the pages
  // that are in the same directory level or below it. That's why we put sw.js at ROOT level.
  navigator.serviceWorker
    .register('/sw.min.js')
    .then(registration => handleRegistration(registration))
    .catch(error => {console.log('ServiceWorker registration failed: ', error)})

  // register message receiver
  // https://dbwriteups.wordpress.com/2015/11/16/service-workers-part-3-communication-between-sw-and-pages/
  navigator.serviceWorker.onmessage = (e) => {
    console.log('SW: SW Broadcasting:', event);
    var data = e.data;
    
    if(data.command == "UPDATE_FOUND"){
      console.log("UPDATE_FOUND_BY_SW", data);
      // sendMessageToClientsAsync({
      //   'command': 'CONTENT_UP_TO_DATE',
      //   'url': fetched.url
      // })
      location.reload();
    }
  }
}

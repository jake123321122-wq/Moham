self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'تنبيه أمني جديد!';
    const options = {
        body: data,
        icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        badge: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification('Google Security', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://google.com')
    );
});

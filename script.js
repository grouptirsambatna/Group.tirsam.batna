function selectProduct(productName) {
    document.getElementById('selectedProduct').value = productName;
    alert('تم اختيار: ' + productName + '\nالرجاء إكمال ملء الاستمارة في الأسفل.');
    window.scrollTo({ top: document.getElementById('orderForm').offsetTop, behavior: 'smooth' });
}

function sendToWhatsApp(event) {
    event.preventDefault();
    const product = document.getElementById('selectedProduct').value;
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const state = document.getElementById('clientState').value;

    if (!product) {
        alert('الرجاء اختيار موديل الشاحنة أولاً!');
        return;
    }

    const whatsappNumber = "213657667002";
    const message = `السلام عليكم، أريد طلب شاحنة من موقعكم:\n\n🚚 الموديل: ${product}\n👤 الاسم: ${name}\n📞 الهاتــف: ${phone}\n📍 الولاية: ${state}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

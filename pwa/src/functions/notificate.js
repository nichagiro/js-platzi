export const sendNotificate = async ({ title, body, img } = {}) => {
    try {
        if (Notification.permission === 'granted') {
            const registration = await navigator.serviceWorker.getRegistration();
            registration.showNotification(title, { body, img })
        } else {
            alert(title)
            await Notification.requestPermission()
        }
    } catch ({ message }) { console.log('Notifications:', message) }
}




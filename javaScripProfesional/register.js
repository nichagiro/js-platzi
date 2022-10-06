if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .catch(error => { console.log(error.message) })
} else {
    console.log('EL NAVEGADOR NO SOPORTA SERVICE WORKER')
}









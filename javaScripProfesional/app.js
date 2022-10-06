const video = document.querySelector('video')
const button = document.querySelector('#play')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}


button.onclick = () => {
    (video.paused)
        ? video.play()
        : video.pause()
}

// OBSERVER
function callback(entries) {
    entries.forEach(entry => {
        (entry.isIntersecting)
            ? video.play()
            : video.pause()
    });
}
const observer = new IntersectionObserver(callback, options);
observer.observe(video);

// VISIBILITY DOCUMENT
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'visible') {
        video.play();
    } else {
        video.pause();
    }
});


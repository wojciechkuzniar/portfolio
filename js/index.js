const loader = document.getElementById('loader-wrapper');

window.addEventListener('load', () => {
    if(loader) {
        setTimeout(() => {
            loader.remove()
        }, 300);
    }
});
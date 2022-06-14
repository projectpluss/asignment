export function active() {
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename) {
        const listNav = document.querySelector(`.list-nav a[href='${filename}']`);
        if (!listNav) return;
        listNav.classList.remove('text-black');
        listNav.classList.add('text-[#FF6464]');
    }
}

export function Render(classElement, type) {
    const element = document.querySelector(classElement);
    if (element) {
        element.innerHTML = type;
        active();
    }
}
import { Render } from "./common";
import { listNavs } from "./data";

const menu = document.querySelector('#menu');
const listNav = document.querySelector('.list-nav');
const logo = document.querySelector('.logo');
// const featuredWorks = document.querySelector('.list-featured_work');
// const childElementCount = featuredWorks.childElementCount;

logo.addEventListener('click', () => {
    location.href = "/";
});

menu.addEventListener('click', () => {
    listNav.classList.toggle('hidden');
});

// window.addEventListener('resize', () => {
//     let width = document.documentElement.clientWidth;
//     let height = document.documentElement.clientHeight;
//     if (width < 640) {
//         featuredWorks.children[1].style = "display: none";
//         featuredWorks.children[2].style = "display: none";
//     } else {
//         featuredWorks.children[1].style = "display: flex";
//         featuredWorks.children[2].style = "display: flex";
//     }
// });

function showListNav(listNavs) {
    if (!Array.isArray(listNavs) || listNavs.length == 0) return;
    let result = "";
    for (let i = 0; i < listNavs.length; i++) {
        result += `
        <li class="min-w-[100px] text-center">
            <a href="${listNavs[i].href}" class="block py-4 text-xl text-black font-semibold hover:bg-[#3498db] hover:text-white">${listNavs[i].title}</a>
        </li>
        `;
    }
    return result;
}

Render(".list-nav", showListNav(listNavs));
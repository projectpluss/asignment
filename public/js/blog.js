import { Render } from "./common";
import { postsBlog } from "./data";

function RecentPostsF(postsBlog) {
    if (!Array.isArray(postsBlog) || postsBlog.length == 0) return;
    let result = "";
    for (let i = 0; i < postsBlog.length; i++) {
        result += `
        <div class="posts border-b-2 pb-4 mt-[50px]">
            <h2 class="font-medium text-[26px] md:text-[30px] text-[#21243D] py-2 hover:text-[#3498db] cursor-pointer">${postsBlog[i].title}</h2>
            <div class="flex py-2">
                <div class="time text-xl fotn-normal">${postsBlog[i].time}</div>
                <span class="mx-4">|</span>
                <div class="type text-xl text-[#8695A4]">${postsBlog[i].type}</div>
            </div>
            <p class="py-2">${postsBlog[i].content}</p>
        </div>
        `;
    }
    return result;
}

Render(".list-posts", RecentPostsF(postsBlog));
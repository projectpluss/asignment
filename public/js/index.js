import { Render } from "./common";
import { RecentPosts, dataFeaturedWorks } from "./data";

function RecentPostsF(RecentPosts) {
    if (!Array.isArray(RecentPosts) || RecentPosts.length == 0) return;
    let result = "";
    for (let i = 0; i < RecentPosts.length; i++) {
        result += `
        <div class="box-content bg-white p-4 rounded-[5px] ">
            <h3 class="title font-bold text-[26px] mb-[32px] ">${RecentPosts[i].title}</h3>
            <div class="timed font-regular text-lg mb-[26px] ">
                <span>${RecentPosts[i].time}</span>
                <span class="mx-4 ">|</span>
                <span>${RecentPosts[i].category}</span>
            </div>
            <p class="text-content text-left ">${RecentPosts[i].content}</p>
        </div>
        `;
    }
    return result;
}

function FeaturedWorks(dataFeaturedWorks) {
    if (!Array.isArray(dataFeaturedWorks) || dataFeaturedWorks.length == 0) return;
    let result = "";
    for (let i = 0; i < dataFeaturedWorks.length; i++) {
        result += `
        <div class="box-featured_work border-b-2 py-4 mb-[25px] flex flex-col md:flex-row">
            <img src="${dataFeaturedWorks[i].imageUrl}" alt="" class="object-cover">
            <div class="info-featured_work md:pl-5 ">
                <h3 class="title_work font-bold text-[24px] md:text-[30px] pt-[12px] md:pt-0 cursor-pointer hover:text-[#3498db]"><a href="works_detail.html?id_d=${dataFeaturedWorks[i].id}">${dataFeaturedWorks[i].title}</a></h3>
                <div class="py-[22px] ">
                    <span class="time font-bold inline bg-[#142850] text-white px-2 rounded-[15px] ">${dataFeaturedWorks[i].year}</span>
                    <div class="type-page inline mx-4 text-gray-400 ">${dataFeaturedWorks[i].page}</div>
                </div>
                <p class="text-content text-truncate line-3">${dataFeaturedWorks[i].content}</p>
            </div>
        </div>
        `;
    }
    return result;
}

Render(".list-content", RecentPostsF(RecentPosts));
Render(".list-featured_work", FeaturedWorks(dataFeaturedWorks));
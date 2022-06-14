import { Render } from "./common";
import { postWorks } from "./data";

function RecentPostsF(postWorks) {
    if (!Array.isArray(postWorks) || postWorks.length == 0) return;
    let result = "";
    for (let i = 0; i < postWorks.length; i++) {
        result += `
        <div class="box-featured_work border-b-2 py-4 mb-[25px] flex flex-col md:flex-row">
            <img src="${postWorks[i].imageUrl}" alt="" class="object-cover">
            <div class="info-featured_work md:pl-5 ">
                <h3 class="title_work font-bold text-[24px] md:text-[30px] pt-[12px] md:pt-0 cursor-pointer hover:text-[#3498db]"><a href="works_detail.html?id_d=${postWorks[i].id}">${postWorks[i].title}</a></h3>
                <div class="py-[22px] ">
                    <span class="time font-bold inline bg-[#142850] text-white px-2 rounded-[15px] ">${postWorks[i].year}</span>
                    <div class="type-page inline mx-4 text-gray-400 ">${postWorks[i].page}</div>
                </div>
                <p class="text-content text-truncate line-3">${postWorks[i].content}</p>
            </div>
        </div>
        `;
    }
    return result;
}

function urlId(params) {
    var url = window.location.href;
    var newUrl = new URL(url).searchParams.get(params);
    return newUrl;
}

function showDetail(postWorks) {
    if (!Array.isArray(postWorks) || postWorks.length == 0) return;
    const id = urlId("id_d");
    const product = postWorks.find((item) => item.id == id);
    if (!product) history.back();
    document.querySelector("#title").innerHTML = product.title;
    document.querySelector("#time").innerHTML = product.year;
    document.querySelector("#type").innerHTML = product.page;
    const content = document.querySelectorAll(".text-content");
    for (let i = 0; i < content.length; i++) {
        content[i].innerHTML = product.content;
    }

    // Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    // Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    // let result = "";

    // return result;
}
showDetail(postWorks);

Render(".list-featured_work", RecentPostsF(postWorks));
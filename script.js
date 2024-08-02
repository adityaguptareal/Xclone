let postInput=document.getElementById("postInput")

let postButton=document.getElementById("postButton")
let posts=document.querySelector(".postSection")
console.log(posts);


function newPost(content){
// Get the current date and time
let now = new Date();

// Extract date and time components
let year = now.getFullYear();
let month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
let day = now.getDate().toString().padStart(2, '0');
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');

// Format the date and time as needed
let formattedDate = `${year}-${month}-${day}`;
let formattedTime = `${hours}:${minutes}`;



let postCard=`<div id="post" class="border-t border-gray-700">
                <div id="postHeader" class="flex justify-between mx-2">
                    <div id="postHeaderLeft" class="flex gap-3 justify-center items-center">

                        <img src="https://pbs.twimg.com/profile_images/1810636079646851072/QUc4fGyY_bigger.jpg"
                            class="rounded-full w-10 ml-4 mt-4" alt="">
                        


                            <div id="postUserInfo" class="flex flex-col items-baseline md:items-center gap-0 md:gap-2 md:flex-row ">
                                <span id="ProfielNameForPost"
                                class="text-[15px] font-bold cursor-pointer hover:underline md:mt-0 mt-3">Aditya Kumar Gupta</span>
                            <span id="username" class="text-[15px] text-gray-400 cursor-pointer ">@Adityaguptareal</span>
                            <span id="duration" class="text-[15px]  text-gray-400 cursor-pointer hover:underline">.
                                ${formattedDate} ${formattedTime}</span>
                            </div>

                    </div>
               
                    <div id="PostHeaderRight" class=" text-gray-400 mx-4">
                        ...
                    </div>
                </div>
                <div id="postContent" class="my-[16px] mx-4 md:mx-[72px]">
               ${content}
                    
                </div>
                <div id="PostInteraction" class="my-5 flex items-center justify-between mx-2 md:mx-10">
                    <div id="comment" class="flex gap-1 w-fit text-gray-600 hover:text-sky-500 cursor-pointer"><svg viewBox="0 0 24 24"
                            aria-hidden="true"
                            class=" w-4 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                            <g>
                                <path
                                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                                    fill="#4b5563" class="hover:fill-sky-500"></path>
                            </g>
                        </svg>
                        6</div>
                    <div id="retweet" class="cursor-pointer">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                            class="r-4qtqp9 w-4 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                            <g>
                                <path
                                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                                    fill="#4b5563" class="hover:fill-green-600 p-3"></path>
                            </g>
                        </svg>
                    </div>
                    <div id="like" class="flex hover:text-pink-600 cursor-pointer gap-1 text-gray-600" >
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                            class="r-4qtqp9 w-4 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                            <g>
                                <path
                                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                    fill="#4b5563" class="hover:fill-pink-600"></path>
                            </g>
                        </svg>23
                    </div>
                    <div id="stats" class="flex text-gray-600 gap-1 hover:text-sky-600 cursor-pointer">
                        <span class="material-symbols-outlined">
                            bar_chart
                            </span>517
                    </div>

                    <div id="interactionRight" class="flex gap-2 items-center justify-center text-gray-700 cursor-pointer">

                        <div id="save" class=" hover:text-sky-600">
                            <span class="material-symbols-outlined">
                                bookmark
                                </span>


                        </div>
                        <div id="upload" class=" hover:text-sky-600"><span class="material-symbols-outlined">
                                upload
                            </span></div>
                    </div>
                </div>
            </div>`
// posts.innerHTML=posts.innerHTML+postCard
let newPostDiv=document.createElement("div")
newPostDiv.innerHTML=postCard
posts.insertBefore(newPostDiv.firstElementChild,posts.firstElementChild)
console.log(newPostDiv);


postInput=postInput.value=" "
}
postButton.addEventListener("click",()=>{

newPost(postInput.value)


})

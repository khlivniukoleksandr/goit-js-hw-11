import{a as l,S as m,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="52958686-1557e7ea2156d90b306934aa7";l.defaults.baseURL="https://pixabay.com/api/";l.defaults.params={key:d,image_type:"photo",orientation:"horizontal",safesearch:!0};const f=o=>l.get("",{params:{q:o}}).then(t=>t.data).catch(t=>console.log(t)),n=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=({webformatURL:o,largeImageURL:t,tags:s,likes:a,views:e,comments:r,downloads:i})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img 
                    class="gallery-image"
                    src="${o}" 
                    alt="${s}" 
                    width="360"
                    height="200"
                />
            </a>
            <div class="info flex">
                <p class="info-item"><strong>Likes</strong> ${a}</p>
                <p class="info-item"><strong>Views</strong> ${e}</p>
                <p class="info-item"><strong>Comments</strong> ${r}</p>
                <p class="info-item"><strong>Downloads</strong> ${i}</p>
            </div>
        </li>
    `,g=()=>{n&&(n.innerHTML="")},h=o=>{if(!n)return;const t=o.map(p).join("");n.innerHTML=t,b.refresh()},y=()=>{u.classList.remove("hidden")},L=()=>{u.classList.add("hidden")};let b=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t===""){c.error({message:"Search field cannot be empty!",position:"topRight"});return}g(),y(),f(t).then(s=>{console.log(s),s.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(s.hits)}).catch(s=>{console.error("Request failed:",s),c.error({message:"Failed to fetch images. Please check your network connection.",position:"topRight"})}).finally(()=>{L(),o.target.reset()})});
//# sourceMappingURL=index.js.map

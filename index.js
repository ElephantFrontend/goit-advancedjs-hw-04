var v=Object.defineProperty;var x=(r,e,a)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var f=(r,e,a)=>x(r,typeof e!="symbol"?e+"":e,a);import{a as g,i as p,S as w}from"./assets/vendor-tK733MBj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const n={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),notFoundText:document.querySelector(".not-found-text"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},d="active",i={query:"",page:1,perPage:15,maxPage:1},u=class u{constructor(e){e&&(this.button=e)}disable(){this.button.classList.add(u.HIDDEN_CLASS)}enable(){this.button.classList.remove(u.HIDDEN_CLASS)}};f(u,"HIDDEN_CLASS","hidden");let m=u;const l=new m(n.loadMoreBtn);g.defaults.baseURL="https://pixabay.com/api/";g.defaults.params={key:"49425225-4fab9228e9772b9206d5850f9",image_type:"photo",orientation:"horizontal",safesearch:!0};async function h(r,e=1,a=15){try{const s=await g.get("",{params:{q:r,page:e,per_page:a}}),{hits:t,total:o,totalHits:c}=s.data;return{hits:t,total:o,totalHits:c}}catch{throw new Error("Something went wrong while fetching images...")}}const y=r=>r.hits.map(({webformatURL:a,largeImageURL:s,tags:t,likes:o,views:c,comments:L,downloads:S})=>`
      <li class="gallery-item">
			    <a class="gallery-link" href="${s}">
				    <img
					    class="gallery-image"
					    src="${a}"
					    alt="${t}"
					  />
			    </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${o}
            </p>
            <p class="info-item">
              <b>Views:</b> ${c}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${L}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${S}
            </p>
          </div>
		    </li>
      `).join("");async function P(r){r.preventDefault(),n.notFoundText.textContent="",n.gallery.innerHTML="",l.disable(),i.page=1,i.maxPage=1;const e=r.currentTarget,a=e.elements.search.value.trim();if(!a){p.error({title:"Error",message:"Please enter a valid search query!"});return}n.loader.classList.add(d);try{const s=await h(a);if(n.loader.classList.remove(d),!s.hits||s.hits.length===0){n.notFoundText.innerHTML=`Sorry, there are no images matching your search <span class ="impotent">${userQuery}</span>. Please try again!`;return}i.query=a,i.maxPage=Math.ceil(s.totalHits/i.perPage),n.gallery.innerHTML=y(s),i.maxPage>1&&l.enable()}catch(s){n.loader.classList.remove(d),p.error({title:"Error",message:`Error: ${s}`})}finally{e.reset()}}function q(){const r=n.gallery.querySelector(".gallery-item");if(!r)return;const{height:e}=r.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"})}async function T(r){i.page+=1,l.disable(),n.loader.classList.add(d);try{const{query:e,page:a,perPage:s}=i,t=await h(e,a,s);n.gallery.insertAdjacentHTML("beforeend",y(t)),n.loader.classList.remove(d),l.enable(),q(),i.page<i.maxPage?l.enable():(l.disable(),n.notFoundText.textContent="We're sorry, but you've reached the end of search results..")}catch{l.disable()}}let b=new w(".gallery-link",{captionsData:"alt",captionDelay:250});n.searchForm.addEventListener("submit",async r=>{await P(r),b.refresh()});l.button.addEventListener("click",async()=>{await T(),b.refresh()});
//# sourceMappingURL=index.js.map

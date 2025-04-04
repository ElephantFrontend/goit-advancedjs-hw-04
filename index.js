import{i as a,S as m}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l={input:document.querySelector(".search-input"),list:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader")},d={BASE_URL:"https://pixabay.com/api/",API_KEY:"49425225-4fab9228e9772b9206d5850f9",IMAGE_TYPE:"photo",ORIENTATION:"horizontal",SEFESEARCH:!0},{BASE_URL:p,API_KEY:h,IMAGE_TYPE:g,ORIENTATION:y,SEFESEARCH:E}=d;function b(o){return o?(l.loader.classList.remove("hidden"),fetch(`${p}?key=${h}&q=${o}&image_type=${g}&orientation=${y}&safesearch=${E}`).then(r=>{if(!r.ok)throw new Error(`Error data: ${r.status}`);return r.json()}).then(r=>r.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search path. Please try again!"}),[]):r.hits).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again!"}),console.log(r)}).finally(()=>{l.loader.classList.add("hidden")})):(a.error({title:"Error",message:"Please enter a valid search path!"}),Promise.resolve([]))}function S(o){return o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
		    <li class="gallery-item">
			    <a class="gallery-link" href="${n}">
				    <img
					    class="gallery-image"
					    src="${i}"
					    alt="${e}"
					  />
			    </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${t}
            </p>
            <p class="info-item">
              <b>Views:</b> ${s}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${u}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${f}
            </p>
		    </li>`).join("")}const{form:L,input:$,list:c}=l;let P=new m(".gallery-link",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",o=>{o.preventDefault();const r=$.value.trim();c.innerHTML="",b(r).then(i=>{c.innerHTML=S(i),P.refresh()}).catch(i=>console.log(i))});
//# sourceMappingURL=index.js.map

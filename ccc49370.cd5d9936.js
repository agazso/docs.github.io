(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(115),c=t(121),i=t(109);var m=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,o=n.description,s=n.nextItem,u=n.prevItem,d=n.editUrl;return r.a.createElement(l.a,{title:i,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,d&&r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||u)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:s,prevItem:u}))))))}},116:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(114),c=t.n(l),i=t(111),m=t(108);a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(i.useHistory)(),s=Object(m.a)().siteConfig,u=(void 0===s?{}:s).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(53),t.e(55)]).then(t.bind(null,119)),t.e(36).then(t.t.bind(null,118,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}},121:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(110),c=t(107),i=t(120),m=t(109),o=t(123),s=t(112),u=t(47),d=t.n(u),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,g,v=e.children,p=e.frontMatter,E=e.metadata,b=e.truncated,_=e.isBlogPostPage,f=void 0!==_&&_,N=E.date,k=E.permalink,x=E.tags,w=E.readingTime,y=p.author,j=p.title,I=p.image,B=p.keywords,S=p.author_url||p.authorURL,M=p.author_title||p.authorTitle,O=p.author_image_url||p.authorImageURL,P=Object(s.a)(I,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,B&&B.length&&r.a.createElement("meta",{name:"keywords",content:B.join(",")}),I&&r.a.createElement("meta",{property:"og:image",content:P}),I&&r.a.createElement("meta",{property:"twitter:image",content:P}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),r.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],u=h[parseInt(t[1],10)-1],g=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},f?j:r.a.createElement(m.a,{to:k},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},u," ",g,", ",n," ",w&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},O&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:S,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:O,alt:y})),r.a.createElement("div",{className:"avatar__intro"},y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:S,target:"_blank",rel:"noreferrer noopener"},y)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},v)),(x.length>0||b)&&r.a.createElement("footer",{className:"row margin-vert--lg"},x.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),x.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:E.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,"Read More"))))))}}}]);
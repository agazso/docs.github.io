(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{116:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(114),l=t.n(c),i=t(111),s=t(108);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(i.useHistory)(),u=Object(s.a)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(53),t.e(55)]).then(t.bind(null,119)),t.e(36).then(t.t.bind(null,118,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}},92:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),l=t(110),i=t(115),s=t(109),o=t(108),u=t(112),m=t(93),d=t.n(m),h=[{title:c.a.createElement(c.a.Fragment,null,"Join the Swarm"),imageUrl:"img/undraw_Around_the_world_re_n353.svg",description:c.a.createElement(c.a.Fragment,null,"Welcome to the decentralised revolution. Swarm will make our data our own.")},{title:c.a.createElement(c.a.Fragment,null,"The Decentralised Internet"),imageUrl:"img/undraw_Master_plan_re_jvit.svg",description:c.a.createElement(c.a.Fragment,null,"Store and distribute file and data using a global p2p network of storers and relayers.")},{title:c.a.createElement(c.a.Fragment,null,"Get ready to make BZZ"),imageUrl:"img/undraw_Bitcoin_P2P_re_1xqa.svg",description:c.a.createElement(c.a.Fragment,null,"Start running the future Swarm client now and get ahead of the game. An incentivised network is coming.")}];function b(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(u.a)(a);return c.a.createElement("div",{className:Object(l.a)("col col--4",d.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(o.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(i.a,{title:"Bee Documentation",description:"Documentation for the Swarm Bee Client"},c.a.createElement("header",{className:Object(l.a)("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(s.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),c.a.createElement("main",null,h&&h.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},h.map((function(e,a){return c.a.createElement(b,Object(n.a)({key:a},e))})))))))}}}]);
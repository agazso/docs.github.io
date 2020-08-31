(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(104)),c={title:"Host Your Website Using ENS",id:"host-your-website-using-ENS"},i={unversionedId:"getting-started/host-your-website-using-ENS",id:"getting-started/host-your-website-using-ENS",isDocsHomePage:!1,title:"Host Your Website Using ENS",description:"Bee treats ENS as a first class citizen, wherever you can use a Swarm reference, you can also use an ENS domain where the content ENS Resolver record is set to be a bzz:// reference.",source:"@site/docs/getting-started/host-your-website-using-ENS.md",permalink:"/docs/getting-started/host-your-website-using-ENS",editUrl:"https://github.com/ethersphere/docs.github.io/docs/getting-started/host-your-website-using-ENS.md",sidebar:"someSidebar",previous:{title:"Upload a Directory",permalink:"/docs/getting-started/upload-a-directory"},next:{title:"Store with Encryption",permalink:"/docs/getting-started/store-with-encryption"}},s=[{value:"Link an ENS domain to a website.",id:"link-an-ens-domain-to-a-website",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bee treats ENS as a first class citizen, wherever you can use a Swarm reference, you can also use an ENS domain where the ",Object(o.b)("inlineCode",{parentName:"p"},"content")," ENS Resolver record is set to be a ",Object(o.b)("inlineCode",{parentName:"p"},"bzz://")," reference."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You may substitute ENS names for Swarm references in any of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"API methods")," where you would normally use a Swarm reference."))),Object(o.b)("h3",{id:"link-an-ens-domain-to-a-website"},"Link an ENS domain to a website."),Object(o.b)("p",null,"First we will need to upload some content to Swarm to get it's Swarm reference hash, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/upload-a-directory"}),"uploading a directory")," for more information."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl \\\n    -X POST \\\n    -H "Content-Type: application/x-tar" \\\n    --data-binary @my_website.tar http://localhost:8080/dirs\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"}\n')),Object(o.b)("p",null,"Next, we add a ",Object(o.b)("inlineCode",{parentName:"p"},"Content")," record to your ENS domain's resolver contract."),Object(o.b)("p",null,"We recommend the excellent ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.ens.domains/"}),"ENS Domains Dapp")," used with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://metamask.io/"}),"Metamask")," browser extension for registering and administrating your ENS domain."),Object(o.b)("p",null,"Once you have registered your name, and have connected Metamask with the relevant Ethereum account, set the resolver to use the public ENS if you have not already done so."),Object(o.b)("p",null,"Navigate to 'My Names', and select the name you want to link your Swarm content to."),Object(o.b)("p",null,"Press 'Set' next to your resolver record."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-1.png",alt:"alt text",title:"Press set resolver."}))),Object(o.b)("p",null,"Choose the public resolver."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-2.png",alt:"alt text",title:"Choose the public resolver."}))),Object(o.b)("p",null,"Press add a record."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-3.png",alt:"alt text",title:"Press add a record."}))),Object(o.b)("p",null,"Choose the Content Record type from the drop down menu."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-4.png",alt:"alt text",title:"Choose the content record type from the drop down menu."}))),Object(o.b)("p",null,"Add the Swarm reference you created earlier and press 'save'."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-5.png",alt:"alt text",title:"Add the Swarm reference you created earlier and press 'save'."}))),Object(o.b)("p",null,"Verify the Content Record has been created!"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-6.png",alt:"alt text",title:"Add the Swarm reference you created earlier."}))),Object(o.b)("p",null,"Done! Now you will be able to view your website using the ENS name instead of the Swarm Reference!"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ens-7.png",alt:"alt text",title:"Add the Swarm reference you created earlier."}))))}b.isMDXComponent=!0}}]);
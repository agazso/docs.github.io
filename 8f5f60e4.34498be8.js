(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(85)),i={title:"Upload and Download Files",id:"upload-and-download"},c={unversionedId:"getting-started/upload-and-download",id:"getting-started/upload-and-download",isDocsHomePage:!1,title:"Upload and Download Files",description:"Bee provides a convenient way of uploading your data into the Swarm. Once your data has been uploaded, it will be distributed and stored by a worldwide network of p2p nodes, and made available from Swarm's web gateways.",source:"@site/docs/getting-started/upload-and-download.md",permalink:"/docs/getting-started/upload-and-download",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/getting-started/upload-and-download.md",sidebar:"Balls",previous:{title:"Working With Your Node",permalink:"/docs/getting-started/working-with-your-node"},next:{title:"Upload a Directory",permalink:"/docs/getting-started/upload-a-directory"}},l=[{value:"Quick Upload",id:"quick-upload",children:[]},{value:"Download",id:"download",children:[]},{value:"Public Gateways",id:"public-gateways",children:[]}],d={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bee provides a convenient way of uploading your data into the Swarm. Once your data has been uploaded, it will be distributed and stored by a worldwide network of p2p nodes, and made available from Swarm's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org"}),"web gateways"),"."),Object(o.b)("h3",{id:"quick-upload"},"Quick Upload"),Object(o.b)("p",null,"Once your Bee node is running, a HTTP API is enabled for you to interact with. The command line utility ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ec.haxx.se/http/http-multipart"}),"curl")," is a great way to interact with a Bee node's API."),Object(o.b)("p",null,"First, let's check to see if the API is running as expected..."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:8080\n> Ethereum Swarm Bee\n")),Object(o.b)("p",null,"Once running, a file can be uploaded by making an HTTP POST request to the ",Object(o.b)("inlineCode",{parentName:"p"},"files")," endpoint of the Bee API. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -F file=@bee.jpg http://localhost:8080/files\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"bee.jpg")," is the path to the file that you would like to upload."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Data uploaded to the swarm is always public. In Swarm, sensitive files must be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/store-with-encryption"}),"encrypted")," before uploading to ensure their contents always remains private."))),Object(o.b)("p",null,"When succesful, a json formatted response will be returned, containing a ",Object(o.b)("strong",{parentName:"p"},"swarm reference")," or ",Object(o.b)("strong",{parentName:"p"},"hash")," which is the ",Object(o.b)("em",{parentName:"p"},"address")," of the uploaded file, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}\n')),Object(o.b)("p",null,"Keep this ",Object(o.b)("em",{parentName:"p"},"address")," safe, as we'll use it to retrieve our content later on."),Object(o.b)("p",null,"In Swarm, every piece of data has a unique ",Object(o.b)("em",{parentName:"p"},"address")," which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in Swarm super secure!"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. Head over to the advanced usage section to learn how to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/tags"}),"follow the status of your upload"),". "),Object(o.b)("p",{parentName:"div"},"Once your file has been ",Object(o.b)("strong",{parentName:"p"},"completely synced with the network"),", you will be able to turn off your computer and other nodes will take over to serve the data for you!"))),Object(o.b)("h2",{id:"download"},"Download"),Object(o.b)("p",null,"Once your file is uploaded into Swarm, it can be retrieved with a simple HTTP GET request."),Object(o.b)("p",null,"Substitute the ",Object(o.b)("em",{parentName:"p"},"hash")," in the last part of the url to be the reference to your own data."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -OJ http://localhost:8080/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4\n")),Object(o.b)("p",null,"You may even simply navigate to the URL in your browser:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}),"http://localhost:8080/files/042d4fe...2291dd4")),Object(o.b)("h2",{id:"public-gateways"},"Public Gateways"),Object(o.b)("p",null,"To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}),"https://gateway.ethswarm.org/files/042d4fe...2291dd4")))}s.isMDXComponent=!0},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?r.a.createElement(h,c(c({ref:t},d),{},{components:a})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(26),s=c.n(a),n=c(5),r=c(6),i=c.n(r),o=c(8),l=c(4),d=c(1),u=c.n(d),j=c(3),b=c(7),_=c.n(b);c(32),c(33);function m(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var h=c(0),O=function(){var e=Object(n.d)(),t=Object(l.a)(e,2),c=t[0],a=t[1],s=c.get("query")||"",r=Object(d.useState)(s),i=Object(l.a)(r,2),o=i[0],u=i[1],b=Object(j.m)(),_=b.pathname.split("/")[1],O=Object(d.useCallback)(function(e,t){var c=0;return function(){for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];window.clearTimeout(c),c=window.setTimeout((function(){e.apply(void 0,s)}),t)}}(a,1e3),[_]);return Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("input",{type:"text",className:"search__input",placeholder:"Search in ".concat(b.pathname.slice(21),"..."),value:o,onChange:function(e){return function(e){O(m(c,{query:e.target.value||null,currentPage:"1"})),u(e.target.value)}(e)}}),Object(h.jsx)("div",{className:"search__button",children:s?Object(h.jsx)("button",{type:"button","aria-label":"reset button",className:"search__reset",onClick:function(){u(""),a(m(c,{query:null}))}}):Object(h.jsx)("div",{className:"search__icon"})})]})},v=function(e,t){var c=Object(d.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return t}})),a=Object(l.a)(c,2),s=a[0],n=a[1];return[s,function(t){n(t),localStorage.setItem(e,JSON.stringify(t))}]},x=u.a.createContext({productsInCart:[],setProductsInCart:function(){}}),p=function(e){var t=e.children,c=v("cart",[]),a=Object(l.a)(c,2),s=a[0],n=a[1],r=Object(d.useMemo)((function(){return{productsInCart:s,setProductsInCart:n}}),[s]);return Object(h.jsx)(x.Provider,{value:r,children:t})},f=u.a.createContext({favouriteProducts:[],setFavouriteProducts:function(){}}),N=function(e){var t=e.children,c=v("favourite",[]),a=Object(l.a)(c,2),s=a[0],n=a[1],r=Object(d.useMemo)((function(){return{favouriteProducts:s,setFavouriteProducts:n}}),[s]);return Object(h.jsx)(f.Provider,{value:r,children:t})},g=(c(35),function(){return Object(h.jsx)(n.b,{to:"/react_phone-catalog",className:"logo",children:Object(h.jsx)("div",{className:"logo__img"})})}),y=function(){var e=Object(j.m)(),t=Object(d.useContext)(f).favouriteProducts,c=Object(d.useContext)(x).productsInCart,a=Object(d.useState)(!1),s=Object(l.a)(a,2),r=s[0],i=s[1],o=["/react_phone-catalog/phones","/react_phone-catalog/favourite","/react_phone-catalog/tablets","/react_phone-catalog/accessories","/react_phone-catalog/favourite"].includes(e.pathname),u=Object(d.useMemo)((function(){return t.length}),[t]),b=Object(d.useMemo)((function(){return c.reduce((function(e,t){return e+t.quantity}),0)}),[c]),m=function(){i((function(e){return!e}))};Object(d.useEffect)((function(){return document.documentElement.style.overflow=r?"hidden":"auto",function(){document.documentElement.style.overflow="auto"}}),[r]);var v=function(){i(!1)};return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("nav",{className:"header__nav",children:[Object(h.jsx)(g,{}),Object(h.jsx)("button",{type:"button",className:"header__burger",onClick:m,children:Object(h.jsx)("div",{className:"header__burger--icon"})}),Object(h.jsxs)("div",{className:_()("header__mobile mobile",{show:r,"show-menu":r}),children:[Object(h.jsxs)("div",{className:"mobile__header",children:[Object(h.jsx)(g,{}),Object(h.jsx)("button",{type:"button",className:"mobile__burger",onClick:m,children:Object(h.jsx)("div",{className:"mobile__burger--icon"})})]}),Object(h.jsx)("div",{className:"mobile__search",children:o&&Object(h.jsx)(O,{})}),Object(h.jsxs)("ul",{className:"mobile__menu",children:[Object(h.jsx)("li",{className:"mobile__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/",className:"header__link",onClick:v,children:"Home"})}),Object(h.jsx)("li",{className:"mobile__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/phones",className:"header__link",onClick:v,children:"Phones"})}),Object(h.jsx)("li",{className:"mobile__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/tablets",className:"header__link",onClick:v,children:"Tablets"})}),Object(h.jsx)("li",{className:"mobile__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/accessories",className:"header__link",onClick:v,children:"Accessories"})})]}),Object(h.jsxs)("div",{className:"mobile__buttons",children:[Object(h.jsx)(n.c,{to:"/react_phone-catalog/favourite",className:"header__button header__button--fav mobile__button",onClick:v,children:Object(h.jsx)("span",{className:_()("header__quantity",{active:u>0}),children:u})}),Object(h.jsx)(n.c,{to:"/react_phone-catalog/cart",className:"header__button header__button--cart mobile__button",onClick:v,children:Object(h.jsx)("span",{className:_()("header__quantity",{active:b>0}),children:b})})]})]}),Object(h.jsxs)("ul",{className:"header__menu",children:[Object(h.jsx)("li",{className:"header__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/",className:function(e){var t=e.isActive;return _()("header__link",{"header__link--active":t})},children:"Home"})}),Object(h.jsx)("li",{className:"header__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/phones",className:function(e){var t=e.isActive;return _()("header__link",{"header__link--active":t})},children:"Phones"})}),Object(h.jsx)("li",{className:"header__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/tablets",className:function(e){var t=e.isActive;return _()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(h.jsx)("li",{className:"header__item",children:Object(h.jsx)(n.c,{to:"/react_phone-catalog/accessories",className:function(e){var t=e.isActive;return _()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(h.jsxs)("div",{className:"header__buttons",children:[o&&Object(h.jsx)(O,{}),Object(h.jsx)(n.c,{to:"/react_phone-catalog/favourite",className:"header__button header__button--fav",children:Object(h.jsx)("span",{className:_()("header__quantity",{active:u>0}),children:u})}),Object(h.jsx)(n.c,{to:"/react_phone-catalog/cart",className:"header__button header__button--cart",children:Object(h.jsx)("span",{className:_()("header__quantity",{active:b>0}),children:b})})]})]})},P=(c(36),c(37),function(){return Object(h.jsxs)("div",{className:"scrollUp",children:[Object(h.jsx)("span",{className:"scrollUp__text",children:"Back to top"}),Object(h.jsx)("button",{className:"scrollUp__button",type:"button","aria-label":"Back to top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("div",{className:"scrollUp__arrow"})})]})}),C=(c(38),function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)(g,{}),Object(h.jsx)("nav",{className:"footer__nav",children:Object(h.jsxs)("ul",{className:"footer__list",children:[Object(h.jsx)(n.c,{to:"https://github.com/ZadorozhnyiYevhenii",className:"footer__item",children:"github"}),Object(h.jsx)(n.c,{to:"/contacts",className:"footer__item",children:"contacts"}),Object(h.jsx)(n.c,{to:"/rights",className:"footer__item",children:"rights"})]})}),Object(h.jsx)("div",{className:"footer_button",children:Object(h.jsx)(P,{})})]})}),k=c(9),w=(c(39),[c.p+"static/media/banner-phone.d7be5435.png",c.p+"static/media/banner-tablets.a962057c.png",c.p+"static/media/banner-accessories.bdd2e0fc.png"]),S=function(){var e=Object(d.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(){a((function(e){return(e+1)%w.length}))};return Object(d.useEffect)((function(){var e=setInterval(s,5e3);return function(){return clearInterval(e)}}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"carousel",children:[Object(h.jsxs)("div",{className:"carousel__content",children:[Object(h.jsx)("button",{onClick:function(){a((function(e){return 0===e?w.length-1:e-1}))},className:"carousel__button",type:"button",children:Object(h.jsx)("span",{className:"carousel__arrow--left"})}),Object(h.jsx)("div",{className:"carousel__images",children:w.map((function(e,t){return Object(h.jsx)("div",{className:"carousel__image",style:{opacity:t===c?1:0},children:Object(h.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"carousel__img"})},e)}))}),Object(h.jsx)("button",{onClick:s,className:"carousel__button",type:"button",children:Object(h.jsx)("span",{className:"carousel__arrow--right"})})]}),Object(h.jsx)("div",{className:"carousel__dots",children:w.map((function(e,t){return Object(h.jsx)("div",{onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||a(t)}(e,t)},className:_()("carousel__dot",{active:t===c}),onClick:function(){return a(t)}},e)}))})]})})},I=(c(40),c(41),c(11)),A=(c(42),"https://mate-academy.github.io/react_phone-catalog/_new");function D(e){return new Promise((function(t){setTimeout(t,e)}))}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),D(300).then((function(){return fetch(A+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var M,T=function(e){return q(e)},E=function(e){return T("/products/".concat(e,".json"))},F=(c(43),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),L=(c(44),function(e){var t=e.handleAddToFavourites,c=e.isItemFavourite;return Object(h.jsx)("button",{type:"button","aria-label":"fav",onClick:t,"data-cy":"addToFavorite",className:_()("favourite",{isItemFavourite:c})})}),B=(c(45),function(e){var t=e.handleAddToCart,c=e.id,a=Object(d.useContext)(x).productsInCart.some((function(e){return(e.phoneId===c||e.id===c)&&0!==e.quantity}));return Object(h.jsx)("button",{type:"button",className:_()("AddToCartButton",{isProductAdded:a}),onClick:function(){t()},children:a?"Added to cart":"Add to cart"})}),R=function(e){var t=e.product,c=t.image,a=t.name,s=t.price,r=t.fullPrice,u=t.screen,j=t.capacity,b=t.ram,_=t.itemId,m=t.category,O=t.id,v=Object(d.useState)(),p=Object(l.a)(v,2),N=p[0],g=p[1],y=Object(d.useState)(!1),P=Object(l.a)(y,2),C=P[0],w=P[1],S=Object(d.useState)(!1),A=Object(l.a)(S,2),D=A[0],q=A[1],M=Object(d.useContext)(f),T=M.favouriteProducts,R=M.setFavouriteProducts,U=Object(d.useContext)(x),z=U.productsInCart,$=U.setProductsInCart;Object(d.useEffect)((function(){return w(!0),function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(_);case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),q(!0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}()(),function(){w(!1)}}),[]);var J=Object(d.useRef)(null),Y=T.some((function(e){return e.id===O})),H=z.some((function(e){return e.id===O}));return Object(h.jsx)("div",{className:"ProductCard",ref:J,children:Object(h.jsxs)("div",{className:"ProductCard__content",children:[D&&!C&&Object(h.jsx)("div",{className:"ProductCard__error",children:Object(h.jsx)("h2",{children:"Product download error"})}),C&&!D?Object(h.jsx)(F,{}):!D&&Object(h.jsxs)(h.Fragment,{children:[N&&Object(h.jsx)(n.b,{to:"/react_phone-catalog/".concat(m,"/").concat(_),state:N,className:"ProductCard__photo",onClick:function(){window.scrollTo({top:0})},children:Object(h.jsx)("img",{src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(c),alt:"product",className:"ProductCard__img"})}),Object(h.jsxs)("div",{className:"ProductCard__wrap",children:[Object(h.jsx)("div",{className:"ProductCard__title",children:a}),Object(h.jsxs)("div",{className:"ProductCard__price",children:[Object(h.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(s)}),s&&Object(h.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(r)})]}),Object(h.jsxs)("div",{className:"ProductCard__details",children:[Object(h.jsxs)("div",{className:"ProductCard__details-item",children:[Object(h.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(h.jsx)("div",{className:"ProductCard__details-item__value",children:u||"-"})]}),Object(h.jsxs)("div",{className:"ProductCard__details-item",children:[Object(h.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(h.jsx)("div",{className:"ProductCard__details-item__value",children:j||"-"})]}),Object(h.jsxs)("div",{className:"ProductCard__details-item",children:[Object(h.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(h.jsx)("div",{className:"ProductCard__details-item__value",children:b||"-"})]})]}),Object(h.jsxs)("div",{className:"ProductCard__buttons",children:[Object(h.jsx)(B,{handleAddToCart:function(){if(H){var e=z.filter((function(e){return e.id!==O}));$(e)}else{var c=Object(I.a)(Object(I.a)({},t),{},{quantity:1});$([].concat(Object(k.a)(z),[c]))}},id:O}),Object(h.jsx)(L,{handleAddToFavourites:function(){if(Y){var e=T.filter((function(e){return e.id!==O}));R(e)}else R([].concat(Object(k.a)(T),[t]))},isItemFavourite:Y})]})]})]})]})})},U=u.a.memo((function(e){var t=e.title,c=e.products,a=Object(d.useState)(0),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(d.useMemo)((function(){return c.slice(n,n+4)}),[c,n]),o=0===n,u=n===c.length-4;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"ProductsSlider",children:[Object(h.jsxs)("div",{className:"ProductsSlider__content",children:[Object(h.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(h.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){r((function(e){return Math.max(0,e-1)}))},disabled:o,className:_()("ProductsSlider__button",{disabled:o}),children:Object(h.jsx)("div",{className:"arrow--left"})}),Object(h.jsx)("button",{type:"button",onClick:function(){r((function(e){return Math.min(e+1,c.length-4)}))},disabled:u,className:_()("ProductsSlider__button",{disabled:u}),children:Object(h.jsx)("div",{className:"arrow--right"})})]})]}),Object(h.jsx)("div",{className:_()("ProductsSlider__cards",{"ProductsSlider__card--animated":0!==n}),"data-cy":"cardsContainer",children:i.map((function(e){return Object(h.jsx)("div",{className:"ProductsSlider__card",children:Object(h.jsx)(R,{product:e})},e.id)}))})]})})}));c(46);!function(e){e.Phone="phones",e.Tablet="tablet",e.Accessory="accessory"}(M||(M={}));var z=function(e){var t=e.products,c=function(e,t){return e.filter((function(e){return e.category===t})).length};return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"category",children:Object(h.jsxs)("div",{className:"category__container",children:[Object(h.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(h.jsxs)("div",{className:"category__links","data-cy":"categoryLinksContainer",children:[Object(h.jsxs)(n.b,{to:"/react_phone-catalog/phones",className:"category__link",children:[Object(h.jsx)("div",{className:"category__image category__image--phone"}),Object(h.jsx)("h3",{className:"category__description",children:"Mobile phones"}),Object(h.jsx)("h4",{className:"category__quantity",children:"".concat(c(t,M.Phone)," models")})]}),Object(h.jsxs)(n.b,{to:"/react_phone-catalog/tablets",className:"category__link",children:[Object(h.jsx)("div",{className:"category__image category__image--tablet"}),Object(h.jsx)("h3",{className:"category__description",children:"Tablets"}),Object(h.jsx)("h4",{className:"category__quantity",children:"".concat(c(t,M.Tablet)," models")})]}),Object(h.jsxs)(n.b,{to:"/react_phone-catalog/accessories",className:"category__link",children:[Object(h.jsx)("div",{className:"category__image category__image--accessory"}),Object(h.jsx)("h3",{className:"category__description",children:"Accessories"}),Object(h.jsx)("h4",{className:"category__quantity",children:"".concat(c(t,M.Accessory)," models")})]})]})]})})})},$=u.a.memo((function(e){var t=e.products,c=Object(d.useMemo)((function(){return t.filter((function(e){return e.price})).sort((function(e,t){return t.price-e.price}))}),[t]),a=Object(d.useMemo)((function(){return Object(k.a)(t).sort((function(e,t){return t.year-e.year}))}),[t]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{}),Object(h.jsx)(U,{title:"Hot prices",products:c}),Object(h.jsx)(z,{products:t}),Object(h.jsx)(U,{title:"Brand new models",products:a})]})})),J=(c(47),c(48),function(){var e=Object(j.m)().pathname.split("/").filter((function(e){return""!==e})),t=function(e){var t="";return e.map((function(e){return t+="/".concat(e),{label:e.charAt(0).toUpperCase()+e.slice(1),link:t}}))}(e);return Object(h.jsx)("nav",{className:"breadCrumbs",children:Object(h.jsxs)("ul",{className:"breadCrumbs__list",children:[Object(h.jsx)("li",{className:"breadCrumbs__item",children:Object(h.jsx)(n.b,{to:"/react_phone-catalog",children:Object(h.jsx)("div",{className:"breadCrumbs__icon"})})}),0!==t.length&&Object(h.jsx)("div",{className:"breadCrumbs__arrow"}),t.map((function(c,a){var s=a===e.length-1,r=_()("breadCrumbs__item",{active:s});return Object(h.jsx)(d.Fragment,{children:s?Object(h.jsx)("li",{className:r,children:c.label},c.link):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:r,children:Object(h.jsx)(n.b,{to:"/react_phone-catalog/phones",className:"breadCrumbs__item--link",children:c.label})},c.link),0!==t.length&&Object(h.jsx)("div",{className:"breadCrumbs__arrow"})]})},c.link)}))]})})}),Y=(c(49),function(e){var t=e.options,c=e.value,a=e.onChange,s=Object(d.useState)(!1),n=Object(l.a)(s,2),r=n[0],i=n[1],o=function(){i((function(e){return!e}))},u=t.filter((function(e,t,c){return c.findIndex((function(t){return t.value===e.value}))===t})),j=u.find((function(e){return e.value===c}));"All"===u[0].label&&(u.length=1),Object(d.useEffect)((function(){var e=function(e){"Escape"===e.key&&i(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);return Object(h.jsxs)("div",{className:"DropDown",children:[Object(h.jsx)("div",{className:_()("DropDown__select",{"DropDown__select--is-active":r}),onClick:o,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),o())},role:"button",tabIndex:0,children:j?j.label:""}),r&&Object(h.jsx)("ul",{className:"DropDown__list",children:u.map((function(e){return Object(h.jsx)("li",{className:_()("DropDown__item",{"DropDown__item--selected":c===e.value}),onClick:function(){return t=e.value,a(t),void i(!1);var t},children:e.label},e.value)}))})]})}),H=[{value:"age",label:"Newest"},{value:"name",label:"Alphabetically"},{value:"price",label:"Cheapest"}],K=(c(25),function(e,t,c){var a=t<=3?2:t-1,s=Math.min(a+3,e.length-1);return e.slice(a,s).map((function(e){return Object(h.jsx)(n.b,{to:{search:m(c,{currentPage:"".concat(e)})},className:_()("pagination__button","pagination__button--page",{active:t===e}),children:e},e)}))}),W=function(e){var t=e.productsLength,c=e.pageSize,a=e.currentPage,s=Object(n.d)(),r=Object(l.a)(s,1)[0],i=function(e,t){for(var c=Math.ceil(e/t),a=[],s=0;s<=c;s+=1)a.push(s);return a}(t,c),o=i.length-1;return Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)(n.b,{className:"pagination__button pagination__button--prev",to:{search:m(r,{currentPage:1!==a?"".concat(a-1):"1"})},children:Object(h.jsx)("div",{className:"pagination__arrow pagination__arrow--left"})}),i.length>2&&Object(h.jsx)(n.b,{to:{search:m(r,{currentPage:"".concat(1)})},className:_()("pagination__button","pagination__button--page",{active:1===a}),children:1},1),a>3&&Object(h.jsx)("div",{className:"pagination__dots",children:"..."}),K(i,a,r),i.length-1>a&&Object(h.jsx)("div",{className:"pagination__dots",children:"..."}),Object(h.jsx)(n.b,{to:{search:m(r,{currentPage:"".concat(o)})},className:_()("pagination__button","pagination__button--page",{active:a===o}),children:o},o),Object(h.jsx)(n.b,{to:{search:m(r,{currentPage:"".concat(a!==o?a+1:o)})},className:"pagination__button pagination__button--next",children:Object(h.jsx)("div",{className:"pagination__arrow pagination__arrow--right"})})]})},Z=(c(50),function(e){var t=e.title;return Object(h.jsx)("div",{className:"notFound",children:Object(h.jsx)("h1",{className:"notFound__title",children:"".concat(t," not found")})})}),G=u.a.memo((function(e){var t=e.products,c=Object(n.d)(),a=Object(l.a)(c,2),s=a[0],r=a[1],i=s.get("query")||"",o=s.get("sortBy")||"age",u=s.get("pageSize")||4,b=s.get("currentPage")||1,_=Object(j.q)().category,O="";if(_){if(["phones","tablets","accessories"].includes(_))switch(_){case"phones":O="Mobile phones";break;case"tablets":O="Tablets";break;case"accessories":O="Accessories";break;default:O="Page"}else O="Page"}var v=Object(d.useMemo)((function(){return _&&["phones","tablets","accessories"].includes(_)?t.filter((function(e){switch(_){case"phones":return e.category===M.Phone;case"tablets":return e.category===M.Tablet;case"accessories":return e.category===M.Accessory;default:return!1}})):[]}),[t,_]),x=Object(d.useMemo)((function(){return v.filter((function(e){var t=i.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[v,i]),p=Object(d.useMemo)((function(){var e=Object(k.a)(x);switch(o){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":e.sort((function(e,t){return e.price-t.price}));break;case"age":default:e.sort((function(e,t){return t.year-e.year}))}return e}),[o,x]),f=(+b-1)*+u,N=f+ +u,g=Object(d.useMemo)((function(){return p.slice(f,+N)}),[p,f,N]),y=p.length,P=[4,8,16,y],C=y>4&&+u!==+y;return Object(h.jsx)("div",{className:"productPage",children:Object(h.jsxs)("div",{className:"container",children:[!g.length&&!i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(J,{}),Object(h.jsx)(Z,{title:O})]}),!g.length&&i?Object(h.jsx)("p",{className:"productPage__empty",children:"No Results"}):!!g.length&&Object(h.jsxs)("div",{className:"productPage__content",children:[Object(h.jsx)(J,{}),Object(h.jsx)("h1",{className:"productPage__title",children:O}),Object(h.jsx)("h3",{className:"productPage__subtitle",children:"".concat(y," models")}),Object(h.jsxs)("div",{className:"productPage__filters",children:[Object(h.jsxs)("div",{className:"productPage__filter",children:[Object(h.jsx)("div",{className:"productPage__label",children:"Sort by"}),Object(h.jsx)(Y,{options:H,value:o,onChange:function(e){r(m(s,{sortBy:e||null,currentPage:"1"}))}})]}),Object(h.jsxs)("div",{className:"productPage__filter",children:[Object(h.jsx)("div",{className:"productPage__label",children:"Items on page"}),Object(h.jsx)(Y,{options:P.map((function(e){return{value:String(e),label:e===y?"All":String(e)}})),value:String(u),onChange:function(e){r(m(s,{pageSize:e||null,currentPage:"1"}))}})]})]}),Object(h.jsx)("div",{className:"productPage__list",children:g.map((function(e){return Object(h.jsx)(R,{product:e},e.id)}))}),C&&y>0&&Object(h.jsx)(W,{currentPage:+b,pageSize:+u,productsLength:y})]})]})})})),Q=(c(51),c(52),function(){var e=Object(j.o)();return Object(h.jsxs)("button",{type:"button",onClick:function(){return e(-1)},className:"back",children:[Object(h.jsx)("div",{className:"back__image"}),Object(h.jsx)("span",{className:"back__title",children:"Back"})]})}),V=function(e){var t=e.products,c=Object(d.useState)(!1),a=Object(l.a)(c,2),s=a[0],r=a[1],u=Object(d.useState)(),b=Object(l.a)(u,2),m=b[0],O=b[1],v=Object(d.useState)(),p=Object(l.a)(v,2),N=p[0],g=p[1],y=Object(d.useState)(null===N||void 0===N?void 0:N.image),P=Object(l.a)(y,2),C=P[0],w=P[1],S=Object(j.m)().pathname,A=Object(j.q)().productId,D=void 0===A?"":A,q=Object(d.useContext)(x),M=q.productsInCart,E=q.setProductsInCart,R=Object(d.useContext)(f),z=R.favouriteProducts,$=R.setFavouriteProducts;Object(d.useEffect)((function(){r(!0)}),[]);var Y=function(){var e=Object(o.a)(i.a.mark((function e(){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("/products/".concat(D,".json"));case 3:c=e.sent,a=t.find((function(e){return e.phoneId===D})),D===c.id&&(g(a),O(c)),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error product details");case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){Y()}),[D]),Object(d.useEffect)((function(){(null===m||void 0===m?void 0:m.images[0])!==C&&w(null===m||void 0===m?void 0:m.images[0])}),[null===m||void 0===m?void 0:m.images]);var H=M.some((function(e){return e.phoneId===(null===m||void 0===m?void 0:m.id)})),K=z.some((function(e){return e.phoneId===(null===m||void 0===m?void 0:m.id)})),W=Object(d.useMemo)((function(){return Object(k.a)(t).sort((function(){return Math.random()-.5})).filter((function(e){return e.id!==(null===N||void 0===N?void 0:N.id)}))}),[t,N]);return Object(h.jsxs)("div",{className:"ProductDetailsPage",children:[s&&Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"container",children:[m&&!s&&Object(h.jsxs)("div",{className:"ProductDetailsPage__content",children:[Object(h.jsx)(J,{}),Object(h.jsx)("div",{className:"productPage__back",children:Object(h.jsx)(Q,{})}),Object(h.jsx)("h1",{className:"ProductDetailsPage__title",children:null===m||void 0===m?void 0:m.name}),Object(h.jsxs)("div",{className:"ProductDetailsPage__main",children:[Object(h.jsx)("ul",{className:"ProductDetailsPage__list",children:null===m||void 0===m?void 0:m.images.map((function(e){return Object(h.jsx)("li",{className:"ProductDetailsPage__photo",onClick:function(){return w(e)},children:Object(h.jsx)("img",{className:"ProductDetailsPage__photo-img",src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(e),alt:"product img"})},e)}))}),Object(h.jsx)("div",{className:"ProductDetailsPage__current",children:Object(h.jsx)("img",{src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(C),alt:"main img",className:"ProductDetailsPage__current-img"})}),Object(h.jsxs)("div",{className:"ProductDetailsPage__characteristics",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__colors colors",children:[Object(h.jsx)("div",{className:"colors__text",children:"Available colors"}),Object(h.jsx)("div",{className:"colors__list",children:null===m||void 0===m?void 0:m.colorsAvailable.map((function(e){return Object(h.jsx)(n.b,{to:S.replace(null===m||void 0===m?void 0:m.color,e),className:_()("colors__link",{"colors__link-active":e===(null===m||void 0===m?void 0:m.color)}),children:Object(h.jsx)("div",{className:"colors__link-color colors__link-color--".concat(e)})},e)}))})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__capacities capacities",children:[Object(h.jsx)("div",{className:"capacities__text",children:"Select capacity"}),Object(h.jsx)("div",{className:"capacities__list",children:null===m||void 0===m?void 0:m.capacityAvailable.map((function(e){return Object(h.jsx)(n.b,{to:S.replace(null===m||void 0===m?void 0:m.capacity.toLowerCase(),e.toLowerCase()),type:"button",className:_()("capacities__link",{"capacities__link-active":e===(null===m||void 0===m?void 0:m.capacity)}),children:e},e)}))})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__price price",children:[Object(h.jsx)("div",{className:"price__normal",children:"$".concat(null===m||void 0===m?void 0:m.priceDiscount)}),N&&Object(h.jsx)("div",{className:"price__without-discount",children:"$".concat(null===m||void 0===m?void 0:m.priceRegular)})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__buttons buttons",children:[Object(h.jsx)(B,{handleAddToCart:function(){if(H){var e=M.filter((function(e){return e.phoneId!==(null===m||void 0===m?void 0:m.id)}));E(e)}else if(N){var t=Object(I.a)(Object(I.a)({},N),{},{quantity:1});E([].concat(Object(k.a)(M),[t]))}},id:D}),Object(h.jsx)(L,{handleAddToFavourites:function(){if(K){var e=z.filter((function(e){return e.phoneId!==(null===m||void 0===m?void 0:m.id)}));$(e)}else N&&$([].concat(Object(k.a)(z),[N]))},isItemFavourite:K})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__details details",children:[Object(h.jsxs)("div",{className:"details__item",children:[Object(h.jsx)("div",{className:"details__name",children:"Screen"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.screen)||"-"})]}),Object(h.jsxs)("div",{className:"details__item",children:[Object(h.jsx)("div",{className:"details__name",children:"Resolution"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.resolution)||"-"})]}),Object(h.jsxs)("div",{className:"details__item",children:[Object(h.jsx)("div",{className:"details__name",children:"Processor"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.processor)||"-"})]}),Object(h.jsxs)("div",{className:"details__item",children:[Object(h.jsx)("div",{className:"details__name",children:"RAM"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.ram)||"-"})]})]})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__id",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__id-name",children:"ID:"}),Object(h.jsx)("div",{className:"ProductDetailsPage__id-value",children:(null===m||void 0===m?void 0:m.id)||"-"})]})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__about about","data-cy":"productDescription",children:[Object(h.jsx)("h2",{className:"about__title",children:"About"}),Object(h.jsx)("div",{className:"about__description",children:null===m||void 0===m?void 0:m.description.map((function(e){return e.text}))})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__tech tech",children:[Object(h.jsx)("h2",{className:"tech__title",children:"Tech specs"}),Object(h.jsxs)("div",{className:"tech__details details",children:[Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Screen"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.screen)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Resolution"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.resolution)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Processor"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.processor)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"RAM"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.ram)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Built in memory"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.capacity)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Camera"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.camera)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Zoom"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.zoom)||"-"})]}),Object(h.jsxs)("div",{className:"details__item details__item--tech",children:[Object(h.jsx)("div",{className:"details__name",children:"Wifi"}),Object(h.jsx)("div",{className:"details__value",children:(null===m||void 0===m?void 0:m.cell)||"-"})]})]})]})]}),Object(h.jsx)("div",{className:"productCardPage__slider",children:Object(h.jsx)(U,{title:"You may also like",products:W})})]}),!m&&!s&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Q,{})})]})]})},X=(c(53),c(54),"PLUS"),ee="MINUS",te=function(e){var t=e.product,c=t.name,a=t.id,s=t.quantity,n=t.image,r=t.price,i=Object(d.useContext)(x),o=i.productsInCart,l=i.setProductsInCart,u=r*s,j=function(e){l(o.filter((function(t){return t.id!==e})))},b=function(e,t){var c=o.some((function(t){return t.id===e}));s&&c&&(t===X&&l(o.map((function(t){return t.id===e?Object(I.a)(Object(I.a)({},t),{},{quantity:s+1}):t}))),t===ee&&l(o.map((function(t){return t.id===e?Object(I.a)(Object(I.a)({},t),{},{quantity:s-1}):t}))),0===s&&j(e))};return Object(h.jsxs)("div",{className:"cartItem",children:[Object(h.jsx)("button",{type:"button",className:"cartItem__removeBtn",onClick:function(){return j(a)},children:Object(h.jsx)("div",{className:"cartItem__cross"})}),Object(h.jsx)("div",{className:"cartItem__photo",children:Object(h.jsx)("img",{src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(n),alt:"product img",className:"cartItem__img"})}),Object(h.jsx)("div",{className:"cartItem__title",children:c}),Object(h.jsx)("button",{type:"button",className:"cartItem__decrease",onClick:function(){return b(a,ee)},children:"-"}),Object(h.jsx)("div",{className:"cartItem__quantity",children:s}),Object(h.jsx)("button",{type:"button",className:"cartItem__increase",onClick:function(){return b(a,X)},children:"+"}),Object(h.jsx)("div",{className:"cartItem__price",children:"$".concat(u)})]})},ce=(c(55),function(e){var t=e.onClose;return Object(h.jsx)("div",{className:"popup",children:Object(h.jsxs)("div",{className:"popup__container",children:[Object(h.jsx)("h2",{className:"popup__title",children:"We are sorry, but this feature is not implemented yet"}),Object(h.jsx)("button",{className:"popup__btn",onClick:t,type:"button",children:"Close"})]})})}),ae=function(){var e=Object(d.useContext)(x).productsInCart,t=Object(d.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=e.reduce((function(e,t){return e+t.price*t.quantity}),0),i=Object(d.useMemo)((function(){return e.reduce((function(e,t){return e+t.quantity}),0)}),[e]),o=function(){s((function(e){return!1===e}))};return function(e){Object(d.useEffect)((function(){var t=document.querySelector("body");return t&&(e?(t.classList.add("popup-open"),t.style.overflow="hidden"):(t.classList.remove("popup-open"),t.style.overflow="auto")),function(){t&&(t.classList.remove("popup-open"),t.style.overflow="auto")}}),[e])}(a),Object(h.jsx)("div",{className:"CartPage",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"CartPage__content",children:[Object(h.jsx)(Q,{}),0===i?Object(h.jsxs)("h1",{className:"CartPage__title CartPage__title--no-products",children:["Your cart is empty. Maybe you want to choose something in"," ",Object(h.jsx)(n.b,{className:"CartPage__link",to:"/react_phone-catalog/phones",children:"Phones"}),","," ",Object(h.jsx)(n.b,{className:"CartPage__link",to:"/react_phone-catalog/tablets",children:"Tablets"})," ","or"," ",Object(h.jsx)(n.b,{className:"CartPage__link",to:"/react_phone-catalog/accessories",children:"Accessories"})," ","?"]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"CartPage__title",children:"Cart"}),Object(h.jsxs)("div",{className:"CartPage__blocks",children:[Object(h.jsx)("div",{className:"CartPage__list",children:e.map((function(e){return 0!==e.quantity&&Object(h.jsx)(te,{product:e},e.id)}))}),Object(h.jsx)("div",{className:"CartPage__checkout",children:Object(h.jsxs)("div",{className:"CartPage__checkout-content",children:[Object(h.jsx)("div",{className:"CartPage__checkout-title",children:"$".concat(r)}),Object(h.jsx)("div",{className:"CartPage__checkout-subtitle",children:"Total for ".concat(i," items")}),Object(h.jsx)("button",{type:"button",className:"CartPage__checkout-button",onClick:o,children:"Checkout"}),a&&Object(h.jsx)(ce,{onClose:o})]})})]})]})]})})})},se=(c(56),function(){var e=Object(d.useContext)(f).favouriteProducts,t=Object(n.d)(),c=Object(l.a)(t,1)[0].get("query")||"",a=Object(d.useMemo)((function(){return e.filter((function(e){var t=c.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[e,c]);return Object(h.jsx)("div",{className:"favourites",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"favourites__content",children:[Object(h.jsx)(J,{}),0===a.length&&!c&&Object(h.jsxs)("h1",{className:"favourites__title favourites__title--nothing",children:["You have not any favourite products. Maybe you want to choose something"," ",Object(h.jsx)(n.b,{to:"/react_phone-catalog/phones",className:"favourites__link",children:"Phone"}),","," ",Object(h.jsx)(n.b,{to:"/react_phone-catalog/tablets",className:"favourites__link",children:"Tablets"})," ","or"," ",Object(h.jsx)(n.b,{to:"/react_phone-catalog/accessories",className:"favourites__link",children:"Accessories"})," ","?"]}),0===a.length&&c&&Object(h.jsx)("p",{children:"No search results"}),a.length>0&&Object(h.jsxs)("div",{className:"favourites__wrap",children:[Object(h.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(h.jsx)("div",{className:"favourites__quantity",children:"".concat(a.length," items")}),Object(h.jsx)("div",{className:"favourites__list",children:a.map((function(e){return Object(h.jsx)(R,{product:e},e.id||e.phoneId)}))})]})]})})})}),ne=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("/products.json");case 3:t=e.sent,a(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Loading products error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){s()}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{children:Object(h.jsxs)(N,{children:[Object(h.jsx)(y,{}),Object(h.jsx)("main",{className:"main__content",children:Object(h.jsx)(j.c,{children:Object(h.jsxs)(j.a,{path:"/react_phone-catalog/",children:[Object(h.jsx)(j.a,{index:!0,element:Object(h.jsx)($,{products:c})}),Object(h.jsxs)(j.a,{path:":category",children:[Object(h.jsx)(j.a,{index:!0,element:Object(h.jsx)(G,{products:c})}),Object(h.jsx)(j.a,{path:":productId",element:Object(h.jsx)(V,{products:c})})]}),Object(h.jsx)(j.a,{path:"cart",element:Object(h.jsx)(ae,{})}),Object(h.jsx)(j.a,{path:"favourite",element:Object(h.jsx)(se,{})})]})})}),Object(h.jsx)(C,{})]})})})};s.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(ne,{})}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.537907c6.chunk.js.map
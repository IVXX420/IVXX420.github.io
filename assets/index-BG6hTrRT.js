import{r as l,b as x,u as j,d as N,R as y,e as g}from"./vendor-BgtTl8gP.js";import{u as v,T,a as E}from"./ton-BQgPduZD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var m={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,O=Symbol.for("react.element"),R=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,b=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function p(t,s,i){var n,r={},o=null,c=null;i!==void 0&&(o=""+i),s.key!==void 0&&(o=""+s.key),s.ref!==void 0&&(c=s.ref);for(n in s)F.call(s,n)&&!w.hasOwnProperty(n)&&(r[n]=s[n]);if(t&&t.defaultProps)for(n in s=t.defaultProps,s)r[n]===void 0&&(r[n]=s[n]);return{$$typeof:O,type:t,key:o,ref:c,props:r,_owner:b.current}}d.Fragment=R;d.jsx=p;d.jsxs=p;m.exports=d;var e=m.exports,u={},h=x;u.createRoot=h.createRoot,u.hydrateRoot=h.hydrateRoot;function C(){const[t]=v();return{connected:t.connected,wallet:t.account,connect:()=>{t.connectWallet()},disconnect:()=>{t.disconnect()}}}async function P(t){throw new Error("TonAPI key is not configured. Please set VITE_TON_API_KEY in your .env file")}function I(t){const[s,i]=l.useState([]),[n,r]=l.useState(!1),[o,c]=l.useState(null),f=async()=>{try{r(!0),c(null);const a=await P(t);i(a)}catch(a){c(a instanceof Error?a.message:"Failed to fetch NFTs"),console.error("Error fetching NFTs:",a)}finally{r(!1)}};return l.useEffect(()=>{t&&f()},[t]),{nfts:s,loading:n,error:o,refetch:f}}function L({collectionAddress:t}){const{nfts:s,loading:i,error:n}=I(t);return i?e.jsx("div",{className:"loading",children:"Loading NFTs from collection..."}):n?e.jsxs("div",{className:"error",children:[e.jsxs("p",{children:["Error loading NFTs: ",n]}),e.jsxs("p",{children:["Collection address: ",t]})]}):!s||s.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No NFTs found in collection"}),e.jsxs("p",{children:["Collection address: ",t]})]}):e.jsxs("div",{className:"nft-gallery",children:[e.jsxs("div",{className:"collection-info",children:[e.jsxs("h3",{children:["Collection: ",t]}),e.jsxs("p",{children:["Total NFTs: ",s.length]})]}),e.jsx("div",{className:"nft-grid",children:s.map(r=>e.jsxs("div",{className:"nft-card",children:[e.jsx("img",{src:r.metadata.image,alt:r.metadata.name}),e.jsxs("div",{className:"nft-info",children:[e.jsx("h3",{children:r.metadata.name}),e.jsx("p",{children:r.metadata.description}),e.jsxs("p",{className:"address",children:[r.address.slice(0,8),"...",r.address.slice(-8)]})]})]},r.address))})]})}function S(){const{connected:t}=C();return e.jsxs("div",{className:"app",children:[e.jsxs("header",{className:"app-header",children:[e.jsx("h1",{children:"TON NFT Gallery"}),e.jsx(T,{})]}),e.jsx("main",{className:"app-main",children:t?e.jsx(L,{collectionAddress:"EQDk8N7xM5D669LC2YACrseBJtk_MObtou0x-Qn4jxBDxfXk"}):e.jsxs("div",{className:"connect-prompt",children:[e.jsx("h2",{children:"Welcome to TON NFT Gallery"}),e.jsx("p",{children:"Please connect your wallet to view NFTs"})]})})]})}function B(){const t=j();return e.jsxs("div",{className:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:(t==null?void 0:t.message)||"Unknown error"})}),e.jsx("button",{onClick:()=>window.location.href="/IVXX420.github.io/",children:"Return to Home"})]})}const U=N([{path:"/",element:e.jsx(S,{}),errorElement:e.jsx(B,{})}],{basename:"/IVXX420.github.io"}),X="https://ivxx420.github.io/IVXX420.github.io/tonconnect-manifest.json";u.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(E,{manifestUrl:X,children:e.jsx(g,{router:U})})}));
//# sourceMappingURL=index-BG6hTrRT.js.map

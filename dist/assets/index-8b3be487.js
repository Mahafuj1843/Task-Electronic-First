(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let a=document.querySelector(".search-box"),i=document.querySelector(".search-container"),u=document.querySelector(".close-search"),l=document.querySelector(".overlay-content"),o=document.querySelector(".navigation li"),d=document.querySelector(".overlay");a.addEventListener("click",()=>{i.classList.toggle("active")});u.addEventListener("click",()=>{i.classList.toggle("active")});o.addEventListener("click",()=>{l.classList.toggle("active"),o.classList.toggle("active")});d.addEventListener("click",()=>{l.classList.toggle("active"),o.classList.toggle("active")});
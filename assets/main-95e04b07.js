(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();$(document).ready(function(){$(".optical").click(function(t){t.preventDefault(),$(".sunglass").fadeOut(500),$(".func").fadeOut(500),$(".classic").fadeIn(1e3)}),$(".sunglasses").click(function(t){t.preventDefault(),$(".classic").fadeOut(500),$(".func").fadeOut(500),$(".sunglass").fadeIn(1e3)}),$(".function").click(function(t){t.preventDefault(),$(".classic").fadeOut(500),$(".sunglass").fadeOut(500),$(".func").fadeIn(1e3)})});$(document).ready(function(){$(".taipeiDetail-1").click(function(t){t.preventDefault(),$(".shop").fadeOut(500),$(".shopLocate .taipeiDetail-1").fadeIn(1e3)})});$(document).ready(function(){$(".more-1").click(function(t){t.preventDefault(),$(".blog").fadeOut(500),$(".more1Content").fadeIn(1e3)}),$(".ellipsisAfter-more.item1").click(function(t){t.preventDefault(),$(".blog").fadeOut(500),$(".more1Content").fadeIn(1e3)}),$(".blogContent .item1 h2,img").click(function(t){t.preventDefault(),$(".blog").fadeOut(500),$(".more1Content").fadeIn(1e3)})});console.log("Hello world!");

/**
 * @name GifMaster
 * @author ender
 * @authorId 286600830013145089
 * @version 1.0
 * @description import & export your gifs 
 * @invite https://discord.gg/rEDCnRwbHU
 * @source https://github.com/Endxca/GifMaster
 * @updateUrl https://raw.githubusercontent.com/Endxca/GifMaster/main/GifMaster.plugin.js
 */
 module.exports = class GifMaster {
load() {frame();}
start() {this.load();} 
stop() {}
getName() {
    return 'GifMaster';
  }
  getVersion() {
    return '1.0';
  }
  getAuthor() {
    return 'Ender';
  }
  getDescription() {
    return 'import & export gif';
  }
};
function trie(e){var res=[];document.querySelectorAll("div").forEach(i=>{if(i.className.includes(e)){res.push(i);}});return res;}
function bigtest(elm){return typeof(elm)!="undefined" && elm!="" && elm!=null}
window.isnothere=true;
if(!window.intervalId){window.intervalId = setInterval(frame,2);}
const rnd=26;
function frame(){
	var a=trie("container");
	var b=trie("fade");
	if(window.isnothere && document.getElementsByTagName('gifmaster').length!=0){document.querySelectorAll('gifmaster').forEach(i=>i.remove());}
	if(a!="" && b!=""){
		a=Array.prototype.slice.call( a, 0 );
		b=Array.prototype.slice.call( b, 0 );
		var elem = null;
		if(bigtest(a.filter(item => b.includes(item))[0])){
			elem=a.filter(item => b.includes(item))[0];
			if(bigtest(elem)){elem = elem.parentElement.parentElement.parentElement;}
			if(bigtest(elem) && bigtest(elem.children[0])){ elem = elem.children[0];}
			if(bigtest(elem.children[0])){ elem = elem.children[0];}
			clearInterval(window.intervalId);
			setTimeout(function(){
				if(!elem.innerHTML.includes(rnd)){elem.innerHTML+="<button id='"+rnd+"' class='"+elem.children[1].children[0].className+"'>export</button><button id='s"+rnd+"' class='"+elem.children[1].children[0].className+"'>import</button>";
				document.getElementById(rnd).addEventListener('click',()=>{ 
					if(gifs!=""){
					v=document.createElement("input");
					var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[['extra_id']]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default){for(let e in t.default){if(e==="getIsFavorite"){var gifs=t.default.getFavorites();}}}}
					v.value=JSON.stringify(gifs);
					v.id="32";
					document.body.appendChild(v);
					v.select();
					v.setSelectionRange(0, 99999);
					document.execCommand("copy");
					v.remove();
					BdApi.showToast("copy to clipboard");
				}else{BdApi.showToast('nothing to copy',{type:"warning"});}});
				document.getElementById('s'+rnd).addEventListener('click',()=>{
				toastinput(elem.children[1].children[0].className,elem.parentElement.parentElement.parentElement);
				});
			}
				//var fav=elem.parentElement.parentElement.parentElement.children[1].children[1].children[1].children[1].children[0].children[0].children[0];
				clearInterval(window.intervalId);
				console.log("debug1");
				window.intfind = setInterval(()=>{find(elem.parentElement.parentElement);},1);
			},200);
		}
	}
}
function find(elem){
if(!document.body.innerHTML.includes(elem.outerHTML)){
clearInterval(window.intfind);
console.log("debug2");
window.isnothere=true;
window.intervalId = setInterval(frame,2);
}else{window.isnothere=false;}
}

function toastinput(cla,paren){
	if(document.getElementsByTagName('gifmaster').length==0){
s=document.createElement("gifmaster");
s.style="position: absolute; top: 35vh; right: 45vw; width: fit-content; height: 5vh; background-color: rgb(51, 51, 51); border-radius: 4px; z-index: 4000; padding: 2vw;";
s.innerHTML="<input type='text' placeholder='gifs list in text' style='margin-right:1.2vw'/><button id='55' class='"+cla+"'>import</button>";
paren.appendChild(s);
document.getElementById("55").addEventListener('click',()=>{
var input=document.getElementsByTagName('gifmaster')[0].children[0].value;
if(input && input.startsWith("[")){
	try{input=JSON.parse(input);}catch(e){console.log(e);return BdApi.showToast('please enter a valid saved gifs list',{type: "error"});}
	for(f in input){var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[['extra_id']]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t){for(let e in t){if(e=="addFavoriteGIF"){
		//console.log(input[f].url.split("tenor.com/view/")[1].split('-gif-')[0]);
		t.addFavoriteGIF(input[f]);
	
	}}}}}
	BdApi.showToast("import completed!",{type: "success"});
	setTimeout(()=>{BdApi.showToast("need to reload...");setTimeout(()=>{document.location="";},2500);},1000);
	}else{console.log(input," s");BdApi.showToast('please enter a valid saved gifs list',{type: "error"});}
},false);
}else{document.querySelectorAll('gifmaster').forEach(i=>i.remove());return toastinput();}
}

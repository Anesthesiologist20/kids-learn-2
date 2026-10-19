/* Kids Learn 2: device-local, per-child progress. No cloud sync or tracking. */
(function(g){'use strict';
const PREFIX='kl2:progress:v1:';
function cleanChild(child){return ['sakinah','aboud','raghd'].includes(child)?child:null}
function empty(){return {stars:0,attempts:0,correct:0,completed:0,mistakes:{},updated:null}}
function read(child){if(!cleanChild(child))return empty();try{const data=JSON.parse(localStorage.getItem(PREFIX+child)||'null');return data&&typeof data==='object'?Object.assign(empty(),data):empty()}catch(e){return empty()}}
function save(child,data){if(!cleanChild(child))return false;try{localStorage.setItem(PREFIX+child,JSON.stringify(data));return true}catch(e){return false}}
function answer(child,lesson,question,correct){const d=read(child);d.attempts++;if(correct){d.correct++;d.stars+=10;if(d.mistakes[lesson+'::'+question])delete d.mistakes[lesson+'::'+question]}else{const key=lesson+'::'+question;d.mistakes[key]=(d.mistakes[key]||0)+1}d.updated=new Date().toISOString();save(child,d);return d}
function finish(child){const d=read(child);d.completed++;d.stars+=20;d.updated=new Date().toISOString();save(child,d);return d}
function review(child,lesson){return Object.entries(read(child).mistakes).filter(([k])=>!lesson||k.startsWith(lesson+'::')).map(([k,n])=>({question:k.split('::').slice(1).join('::'),count:n})).sort((a,b)=>b.count-a.count)}
g.KidsProgress={read,answer,finish,review};
})(window);

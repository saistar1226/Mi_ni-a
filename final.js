(()=>{
const $=s=>document.querySelector(s),{burst}=window.D;
const board=$('#vaultBoard'),msg=$('#vaultMsg');let found=0,started=false;
function spawn(){if(!started)return;const b=document.createElement('button');b.className='star-dot';b.textContent=['✦','⭐','✨'][Math.floor(Math.random()*3)];b.style.left=(4+Math.random()*90)+'%';b.style.top=(5+Math.random()*82)+'%';b.onclick=()=>{if(!started)return;found++;b.remove();msg.textContent=`Estrellas encontradas: ${found} / 15`;burst(b.getBoundingClientRect().x,b.getBoundingClientRect().y,6);if(found>=15){started=false;msg.textContent='🌟 COFRE ABIERTO. Ahora sí, baja un poquito...';const box=$('#finalBox');box.style.display='block';burst(innerWidth/2,innerHeight/2,120);setTimeout(()=>box.scrollIntoView({behavior:'smooth',block:'center'}),250)}else spawn()};board.appendChild(b)}
$('#startVault').onclick=()=>{started=true;found=0;msg.textContent='Estrellas encontradas: 0 / 15';board.innerHTML='';for(let i=0;i<2;i++)spawn()};
const no=$('#noBtn'),yes=$('#yesBtn'),love=$('#loveMsg');
function moveNo(e){e?.preventDefault();const area=no.parentElement.getBoundingClientRect();const maxX=Math.max(20,area.width-no.offsetWidth-15);no.style.position='absolute';no.style.left=(5+Math.random()*maxX)+'px';no.style.top=(Math.random()*55)+'px'}
['mouseenter','pointerdown','touchstart'].forEach(ev=>no.addEventListener(ev,moveNo,{passive:false}));
yes.onclick=()=>{love.textContent='SABÍA QUE IBAS A DECIR QUE SÍ 😭🫶💙';love.style.display='block';burst(innerWidth/2,innerHeight/2,55)};
$('#mega').onclick=()=>{for(let i=0;i<160;i++)setTimeout(()=>burst(Math.random()*innerWidth,Math.random()*innerHeight,2),i*16)};
})();
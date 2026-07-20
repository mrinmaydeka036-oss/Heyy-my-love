/* ==========================
   ELEMENTS
========================== */

const intro = document.getElementById("intro");
const story = document.getElementById("story");
const ending = document.getElementById("ending");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const typing = document.getElementById("typing");

const music = document.getElementById("music");

/* ==========================
   STORY
========================== */

const pages = [

`I know...

I hurt you.

And no matter how many times I say...

"I'm Sorry"

I know it can never erase the pain
I caused.`,

`I'm not here
to make excuses.

I'm not here
to prove myself right.

I'm here because...

I genuinely regret
hurting you.`,

`I know...

You blocked me.

And honestly...

I understand why.

I'm not trying
to force my way
back into your life.

This website...

is simply the only place

where I could tell you...

I'm truly sorry.`,

`You deserved

Patience...

Respect...

Understanding...

I'm sorry
I couldn't give you
those things
when you needed them
the most.`,

`If I could go back...

I'd choose

Your Smile ❤️

Over every argument.

Every...

Single...

Time.`,

`Maybe...

I can't change
the past.

But I can change
myself.

Because...

You deserved
a better version
of me.`,

`I miss...

Your smile.

Your voice.

Your silly fights.

Your laughter.

I miss...

Us. ❤️`,

`I'm not asking you
to forgive me today.

Take all
the time
you need.

Your feelings
matter.

I'll respect
whatever
you decide.`
];

let current = 0;

/* ==========================
   START
========================== */

startBtn.onclick = () => {

intro.classList.remove("active");

story.classList.add("active");

music.play().catch(()=>{});

showPage();

}

/* ==========================
   TYPEWRITER
========================== */

function typeWriter(text){

typing.innerHTML="";

let i=0;

let timer=setInterval(()=>{

typing.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},35);

}

/* ==========================
   SHOW PAGE
========================== */

function showPage(){

typeWriter(pages[current]);

  }

/* ==========================
   CONTINUE BUTTON
========================== */

nextBtn.onclick = () => {

current++;

if(current >= pages.length){

story.classList.remove("active");
ending.classList.add("active");
return;

}

showPage();

};

/* ==========================
   FORGIVE BUTTON
========================== */

document.getElementById("forgive").onclick = () => {

document.querySelector(".finalText").innerHTML =

`❤️

Thank You...

You just made me
the happiest person alive.

I promise...

I'll let my actions
speak louder
than my words.

I Love You Forever ❤️`;

createHeartBurst();

};

/* ==========================
   NEED MORE TIME
========================== */

document.getElementById("time").onclick = () => {

document.querySelector(".finalText").innerHTML =

`🤍

That's okay.

I'll respect
your decision.

Thank you
for reading
till the end.

Take all
the time
you need.

I genuinely wish
you happiness.

❤️`;

};

/* ==========================
   RAIN
========================== */

const rain=document.getElementById("rain");

for(let i=0;i<120;i++){

const d=document.createElement("div");

d.className="drop";

d.style.left=Math.random()*100+"vw";

d.style.animationDuration=(0.7+Math.random()*0.7)+"s";

d.style.animationDelay=Math.random()*2+"s";

rain.appendChild(d);

}

/* ==========================
   STARS
========================== */

const stars=document.getElementById("stars");

for(let i=0;i<80;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*4+"s";

stars.appendChild(s);

}

/* ==========================
   FLOATING HEARTS
========================== */

const hearts=document.getElementById("hearts");

function createHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(16+Math.random()*18)+"px";

h.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},10000);

}

setInterval(createHeart,700);

/* ==========================
   HEART BURST
========================== */

function createHeartBurst(){

for(let i=0;i<35;i++){

setTimeout(createHeart,i*70);

}

           }

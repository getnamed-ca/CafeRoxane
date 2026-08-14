/* Cafe Roxane main.js */
"use strict";

/* ============ i18n ============ */
const I18N = {
  en: {
    "nav.story":"our story","nav.menu":"menu","nav.gallery":"gallery","nav.find":"find us","nav.reserve":"Reserve",
    "hero.relax":"Relax","hero.sip":"Sip","hero.enjoy":"Enjoy",
    "story.eyebrow":"our story",
    "story.p1":"Roxane arrived in Canada in 1960 and never called anywhere else home but this neighborhood. From 1977 until 2014, she lived in this very building and helped run the small family business that once stood where you are today.",
    "story.p2":"She knew everyone by name, welcomed all with warmth, and became a true pillar of the community. To many, Roxane was more than a familiar face. She was the heart of Mile End.",
    "story.p3":"This café stands as an ode to her memory, her spirit, and the neighborhood she loved so deeply.",
    "story.sign":"Roxane's corner of Mile End. Come see why.",
    "menu.eyebrow":"menu","menu.title":"Our Creations",
    "menu.drinks":"Drinks","menu.food":"Food",
    "gal.eyebrow":"gallery","gal.title":"Our World",
    "priv.eyebrow":"your space","priv.title":"Reserve the Room",
    "priv.copy":"The salon and the terrace are yours to book, free of charge. Bring your people; we'll bring the coffee.",
    "priv.l1":"Musicians, come jam on the terrace",
    "priv.l2":"Tech & science meetups in the salon",
    "priv.l3":"Readings, clubs, birthdays, whatever gathers you",
    "priv.cta":"Reserve the room",
    "find.eyebrow":"find us","find.title":"Come Visit",
    "find.wk":"Monday – Friday","find.we":"Saturday – Sunday",
    "find.cta":"Reserve the room for an event",
    "slogan.sub":"Written on our window, meant from the heart",
    "footer.rights":"© 2026 Café Roxane. All rights reserved.",
    "modal.eyebrow":"free to book","modal.title":"Reserve the room",
    "modal.sub":"Tell us about your gathering: jam session, tech meetup, science night, anything. The space is free; you and your guests just eat and drink with us. We'll confirm by email.",
    "modal.space":"Which space?","modal.salon":"The salon","modal.salonSub":"inside, cozy & warm","modal.terrace":"The terrace","modal.terraceSub":"outside, seasonal",
    "modal.date":"Date","modal.size":"Party size","modal.type":"What kind of event?",
    "modal.typePick":"Choose one…","modal.typeMusic":"Musicians / jam session","modal.typeTech":"Technology meetup","modal.typeScience":"Science meetup","modal.typeOther":"Something else",
    "modal.name":"Name","modal.phone":"Phone","modal.email":"Email","modal.msg":"Anything we should know?",
    "modal.send":"Send request","modal.note":"Your request goes to the Café Roxane team at caferoxane@gmail.com.",
    "confirm.title":"See you soon.","confirm.p":"The Café Roxane team will confirm your reservation by email shortly.",
    "hours.wkT":"7 am – 8 pm","hours.weT":"8 am – 7 pm",
    "cookies.text":"We only use essential cookies, just enough to remember your language. Nothing for tracking or ads.",
    "cookies.ok":"Got it",
    "follow.eyebrow":"before you go","follow.title":"Stay in the loop",
    "follow.copy":"Jazz on the terrace, new pastries, meetups in the salon: it all lands on our socials first. Follow along so you never miss a thing.",
    "follow.ig":"Follow on Instagram","follow.fb":"Follow on Facebook","follow.no":"No thanks, just the coffee",
    "legal.privacyLink":"Privacy Policy","legal.termsLink":"Terms & Conditions","legal.title":"The small print",
    "legal.privacyTitle":"Privacy Policy",
    "legal.privacy1":"We're a coffee shop, not a data company. This site uses only essential cookies, enough to remember your language and that you've seen our notices. No tracking, no analytics profiles, no ads.",
    "legal.privacy2":"If you send us a reservation request, we use your name and contact details only to respond to you. We never sell or share your information. To have it deleted, email caferoxane@gmail.com.",
    "legal.termsTitle":"Terms & Conditions",
    "legal.terms1":"Menu items and prices may change without notice; the counter has the final word. Reserving the salon or terrace is free; a reservation is only confirmed once our team replies by email.",
    "legal.terms2":"Photos, logo and text on this site belong to Café Roxane. This site is governed by the laws of Québec, Canada. Questions? caferoxane@gmail.com or come say hello at 248 Rue Villeneuve Ouest."
  },
  fr: {
    "nav.story":"notre histoire","nav.menu":"menu","nav.gallery":"galerie","nav.find":"nous trouver","nav.reserve":"Réserver",
    "hero.relax":"Détendez-vous","hero.sip":"Sirotez","hero.enjoy":"Profitez",
    "story.eyebrow":"notre histoire",
    "story.p1":"Roxane est arrivée au Canada en 1960 et n'a jamais appelé un autre endroit que ce quartier son chez-soi. De 1977 à 2014, elle a vécu dans ce même bâtiment et a aidé à faire fonctionner le petit commerce familial qui se trouvait là où vous êtes aujourd'hui.",
    "story.p2":"Elle connaissait tout le monde par son nom, accueillait chacun avec chaleur et est devenue un véritable pilier de la communauté. Pour beaucoup, Roxane était plus qu'un visage familier. Elle était le cœur du Mile End.",
    "story.p3":"Ce café est un hommage à sa mémoire, à son esprit et au quartier qu'elle a tant aimé.",
    "story.sign":"Le coin de Roxane, au cœur du Mile End. Venez voir pourquoi.",
    "menu.eyebrow":"menu","menu.title":"Nos Créations",
    "menu.drinks":"Boissons","menu.food":"Cuisine",
    "gal.eyebrow":"galerie","gal.title":"Notre Univers",
    "priv.eyebrow":"votre espace","priv.title":"Réservez le Salon",
    "priv.copy":"Le salon et la terrasse sont à vous, gratuitement. Amenez votre monde ; on s'occupe du café.",
    "priv.l1":"Musiciens, venez jammer sur la terrasse",
    "priv.l2":"Meetups techno & science dans le salon",
    "priv.l3":"Lectures, clubs, anniversaires, tout ce qui vous rassemble",
    "priv.cta":"Réserver le salon",
    "find.eyebrow":"nous trouver","find.title":"Venez Nous Voir",
    "find.wk":"Lundi – Vendredi","find.we":"Samedi – Dimanche",
    "find.cta":"Réserver le salon pour un événement",
    "slogan.sub":"Écrit sur notre vitrine, senti du fond du cœur",
    "footer.rights":"© 2026 Café Roxane. Tous droits réservés.",
    "modal.eyebrow":"réservation gratuite","modal.title":"Réservez le salon",
    "modal.sub":"Parlez-nous de votre rassemblement : jam, meetup techno, soirée science, peu importe. L'espace est gratuit ; vous et vos invités mangez et buvez avec nous. Confirmation par courriel.",
    "modal.space":"Quel espace ?","modal.salon":"Le salon","modal.salonSub":"à l'intérieur, chaleureux","modal.terrace":"La terrasse","modal.terraceSub":"à l'extérieur, saisonnier",
    "modal.date":"Date","modal.size":"Nombre de personnes","modal.type":"Quel genre d'événement ?",
    "modal.typePick":"Choisissez…","modal.typeMusic":"Musiciens / jam","modal.typeTech":"Meetup technologie","modal.typeScience":"Meetup science","modal.typeOther":"Autre chose",
    "modal.name":"Nom","modal.phone":"Téléphone","modal.email":"Courriel","modal.msg":"Autre chose à savoir ?",
    "modal.send":"Envoyer la demande","modal.note":"Votre demande est envoyée à l'équipe du Café Roxane à caferoxane@gmail.com.",
    "confirm.title":"À bientôt.","confirm.p":"L'équipe du Café Roxane confirmera votre réservation par courriel sous peu.",
    "hours.wkT":"7 h – 20 h","hours.weT":"8 h – 19 h",
    "cookies.text":"Nous n'utilisons que des témoins essentiels, juste assez pour retenir votre langue. Rien pour le suivi ni la publicité.",
    "cookies.ok":"Compris",
    "follow.eyebrow":"avant de partir","follow.title":"Restez dans la boucle",
    "follow.copy":"Jazz sur la terrasse, nouvelles pâtisseries, meetups au salon : tout paraît d'abord sur nos réseaux. Suivez-nous pour ne rien manquer.",
    "follow.ig":"Suivre sur Instagram","follow.fb":"Suivre sur Facebook","follow.no":"Non merci, juste le café",
    "legal.privacyLink":"Politique de confidentialité","legal.termsLink":"Modalités et conditions","legal.title":"Les petites lignes",
    "legal.privacyTitle":"Politique de confidentialité",
    "legal.privacy1":"Nous sommes un café, pas une entreprise de données. Ce site n'utilise que des témoins essentiels, assez pour retenir votre langue et le fait que vous avez vu nos avis. Aucun suivi, aucun profilage, aucune publicité.",
    "legal.privacy2":"Si vous nous envoyez une demande de réservation, vos nom et coordonnées ne servent qu'à vous répondre. Nous ne vendons ni ne partageons jamais vos informations. Pour les faire supprimer : caferoxane@gmail.com.",
    "legal.termsTitle":"Modalités et conditions",
    "legal.terms1":"Les items du menu et les prix peuvent changer sans préavis ; le comptoir a le dernier mot. Réserver le salon ou la terrasse est gratuit ; une réservation n'est confirmée qu'à la réponse de notre équipe par courriel.",
    "legal.terms2":"Les photos, le logo et les textes de ce site appartiennent au Café Roxane. Ce site est régi par les lois du Québec, Canada. Des questions ? caferoxane@gmail.com ou passez nous voir au 248, rue Villeneuve Ouest."
  }
};

/* ============ menu data (scraped from caferoxane.com, 2026-08-13) ============ */
const MENU = {
  drinks: [
    {cat:{en:"Coffee",fr:"Cafés"},items:[
      [{en:"Espresso",fr:"Espresso"},"3.00"],[{en:"Double Espresso",fr:"Espresso double"},"4.00"],
      [{en:"Americano",fr:"Americano"},"4.00"],[{en:"Macchiato",fr:"Macchiato"},"3.75"],
      [{en:"Cortado",fr:"Cortado"},"4.25"],[{en:"Cappuccino",fr:"Cappuccino"},"4.75"],
      [{en:"Flat White",fr:"Flat White"},"4.75"],[{en:"Latte",fr:"Latte"},"5.25"],
      [{en:"Mocha",fr:"Mocha"},"6.00"],[{en:"Dirty Chai Latte",fr:"Dirty Chai Latte"},"6.50"]]},
    {cat:{en:"Iced Coffee",fr:"Cafés froids"},items:[
      [{en:"Iced Americano",fr:"Americano glacé"},"4.50"],[{en:"Iced Latte",fr:"Latte glacé"},"6.00"],
      [{en:"Freddo Espresso",fr:"Freddo Espresso"},"5.00"],[{en:"Freddo Cappuccino",fr:"Freddo cappuccino"},"6.00"],
      [{en:"Frappé",fr:"Frappé"},"6.00"],[{en:"Iced Dirty Chai Latte",fr:"Dirty Chai Latte glacé"},"6.50"]]},
    {cat:{en:"Teas & Sweet Drinks",fr:"Thés & douceurs"},items:[
      [{en:"Tea & Herbal Tea",fr:"Thé & tisanes"},"4.00"],[{en:"Hot Chocolate",fr:"Chocolat chaud"},"4.00"],
      [{en:"London Fog",fr:"London Fog"},"5.50"],[{en:"Chai",fr:"Chai"},"5.50"],
      [{en:"Matcha",fr:"Matcha"},"5.50"],[{en:"Iced Matcha",fr:"Matcha glacé"},"6.00"],
      [{en:"Smoothie",fr:"Smoothie"},"9.95"]]},
    {cat:{en:"Cold Drinks",fr:"Boissons froides"},items:[
      [{en:"Bottled Water",fr:"Bouteille d'eau"},"1.50"],[{en:"Soft Drink",fr:"Breuvage"},"2.50"],
      [{en:"San Pellegrino 250ml",fr:"San Pellegrino 250ml"},"3.00"],[{en:"Flavoured San Pellegrino",fr:"San Pellegrino aromatisée"},"3.25"],
      [{en:"Orangina",fr:"Orangina"},"3.25"],[{en:"Juice",fr:"Jus"},"4.00"],
      [{en:"Limited-Edition Drink",fr:"Boisson édition limitée"},"8.00"]]}
  ],
  food: [
    {cat:{en:"Sandwiches",fr:"Sandwichs"},items:[
      [{en:"Cream Cheese Bagel",fr:"Bagel fromage à la crème"},"4.00"],[{en:"Grilled Cheese",fr:"Grilled cheese"},"6.50"],
      [{en:"Tuna Sandwich",fr:"Sandwich thon"},"6.50"],[{en:"Breakfast Sandwich",fr:"Sandwich déjeuner"},"6.95"],
      [{en:"Croque-Monsieur",fr:"Croque-monsieur"},"9.95"],[{en:"Caprese Panini",fr:"Panini Caprese"},"10.95"],
      [{en:"Classic Sandwich",fr:"Sandwich classique"},"12.95"],[{en:"Sausage Panini",fr:"Panini à la saucisse"},"12.95"],
      [{en:"Chicken Sandwich",fr:"Sandwich au poulet"},"13.95"],[{en:"Italian Focaccia",fr:"Focaccia italienne"},"13.95"],
      [{en:"Auber-Gino Focaccia",fr:"Focaccia Auber-Gino"},"14.95"],[{en:"Smoked Salmon Bagel",fr:"Bagel saumon fumé"},"16.00"],
      [{en:"Vegetarian Focaccia",fr:"Focaccia végétarienne"},"16.95"],[{en:"Turkey, Apple & Brie Focaccia",fr:"Focaccia dinde pomme et brie"},"16.95"],
      [{en:"Sicilian Chicken Sandwich",fr:"Sandwich au poulet sicilien"},"16.95"]]},
    {cat:{en:"Kitchen",fr:"Cuisine"},items:[
      [{en:"Soup of the Day",fr:"Soupe du jour"},"6.00"],[{en:"Quiche",fr:"Quiche"},"6.50"],
      [{en:"Breakfast Wrap",fr:"Wrap déjeuner"},"7.00"],[{en:"Vegetarian Wrap",fr:"Wrap végétarien"},"10.00"],
      [{en:"Mediterranean Salad",fr:"Salade méditerranéenne"},"12.00"],[{en:"Chicken Caesar Salad",fr:"Salade césar au poulet"},"13.50"],
      [{en:"Pizza Margherita",fr:"Pizza Margherita"},"13.50"],[{en:"Pizza La Bologna",fr:"Pizza La Bologna"},"17.50"]]},
    {cat:{en:"Pastries",fr:"Pâtisseries"},items:[
      [{en:"Muffins",fr:"Muffins"},"2.50"],[{en:"Croissant",fr:"Croissant"},"2.95"],
      [{en:"Chocolatine",fr:"Chocolatines"},"3.75"],[{en:"Cheddar Croissant",fr:"Croissant cheddar"},"3.95"],
      [{en:"Banana Bread",fr:"Pain à la banane"},"4.50"],[{en:"Danish",fr:"Danois"},"4.95"],
      [{en:"Spanakopita",fr:"Spanakopita"},"6.50"],[{en:"Tiropita",fr:"Tiropita"},"6.50"]]},
    {cat:{en:"Cakes & Pies",fr:"Gâteaux & tartes"},items:[
      [{en:"Raspberry Financier",fr:"Financier aux framboises"},"2.90"],[{en:"Tigré",fr:"Tigré"},"4.00"],
      [{en:"Lemon Cookie",fr:"Biscuit au citron"},"3.00"],[{en:"Lemon Ricotta Cookie",fr:"Biscuit citron et ricotta"},"3.50"],
      [{en:"Chocolate Marshmallow Cookie",fr:"Biscuit chocolat et guimauve"},"3.95"],[{en:"Matcha Cookie",fr:"Biscuit matcha"},"3.95"],
      [{en:"Oatmeal Cookie",fr:"Biscuit à l'avoine"},"3.95"],[{en:"Double Chocolate Cookie",fr:"Biscuit double chocolat"},"3.95"],
      [{en:"Biscotti",fr:"Biscotti"},"4.00"],[{en:"Nutella Horn",fr:"Corne au Nutella"},"4.50"],
      [{en:"Brownie",fr:"Brownie"},"4.50"],[{en:"Coffee Cake",fr:"Gâteau au café"},"4.50"],
      [{en:"Dessert of the Day",fr:"Dessert du jour"},"6.95"]]}
  ]
};

/* ============ gallery data: 7 images for the zoom parallax (center image zooms full screen) ============ */
const GALLERY = [
  ["terrace_view_performers",   {en:"Music on the terrace",fr:"Musique sur la terrasse"}],
  ["cafe_roxane_front_entrance",{en:"The front entrance",fr:"L'entrée principale"}],
  ["cafe_roxane_terasse",       {en:"Under the red umbrellas",fr:"Sous les parasols rouges"}],
  ["bleubery_cheese_cake_plate",{en:"Blueberry cheesecake",fr:"Gâteau au fromage aux bleuets"}],
  ["cafe_roxane_display_counter",{en:"Pastries in the display",fr:"Pâtisseries au comptoir"}],
  ["cafe_roxane_rear_terrace",  {en:"The back terrace",fr:"La terrasse arrière"}],
  ["interior_key_lime_pie1",    {en:"Inside the salon",fr:"À l'intérieur du salon"}]
];

/* ============ state ============ */
let lang = "en";
try { lang = localStorage.getItem("roxane-lang") || "en"; } catch(e){}
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ render menu (category tabs, like the original site) ============ */
const CATS = [...MENU.drinks, ...MENU.food];
let currentCat = 0;
function renderMenu(){
  $("#menuTabs").innerHTML = CATS.map((g,i)=>
    `<button class="menu-tab" role="tab" aria-selected="${i===currentCat}" data-i="${i}">${g.cat[lang]}</button>`).join("");
  renderMenuItems(false);
}
function renderMenuItems(animate){
  $("#menuItems").innerHTML = CATS[currentCat].items.map(([n,p])=>
    `<div class="menu-item"><span class="n">${n[lang]}</span><span class="dots"></span><span class="p">$${p}</span></div>`).join("");
  if(animate && window.gsap && !reduced)
    gsap.from("#menuItems .menu-item",{opacity:0,y:16,duration:.45,stagger:.03,ease:"power2.out",clearProps:"all"});
}
$("#menuTabs").addEventListener("click",e=>{
  const b = e.target.closest(".menu-tab");
  if(!b || +b.dataset.i === currentCat) return;
  currentCat = +b.dataset.i;
  $$("#menuTabs .menu-tab").forEach((t,i)=>t.setAttribute("aria-selected",String(i===currentCat)));
  renderMenuItems(true);
});

/* ============ render gallery zoom parallax ============ */
function renderGallery(){
  const host = $("#zoomSticky");
  if(!host.children.length){
    host.innerHTML = GALLERY.map(([f,cap])=>`
      <div class="zp-item"><div class="zp-frame">
        <img src="assets/web/${f}.webp" alt="${cap[lang]}">
      </div></div>`).join("");
  } else {
    /* language switch: update alt text only, keep GSAP tweens alive */
    $$("#zoomSticky img").forEach((img,i)=>img.alt = GALLERY[i][1][lang]);
  }
}

/* ============ i18n apply ============ */
function applyLang(next){
  lang = next;
  try { localStorage.setItem("roxane-lang", lang); } catch(e){}
  document.documentElement.lang = lang === "fr" ? "fr-CA" : "en";
  $$("[data-i18n]").forEach(el=>{
    const t = I18N[lang][el.dataset.i18n];
    if(t !== undefined) el.textContent = t;
  });
  /* keep sub-labels inside modal space options (textContent wipes children) */
  $$(".space-opt").forEach((opt,i)=>{
    const span = opt.querySelector("span");
    const main = I18N[lang][i===0?"modal.salon":"modal.terrace"];
    const sub  = I18N[lang][i===0?"modal.salonSub":"modal.terraceSub"];
    span.innerHTML = `${main} <small>${sub}</small>`;
  });
  /* hours values */
  $$(".hours p").forEach((p,i)=>{
    p.lastElementChild.textContent = I18N[lang][i===0?"hours.wkT":"hours.weT"];
  });
  $$(".lang-toggle button").forEach(b=>b.setAttribute("aria-pressed", String(b.dataset.lang===lang)));
  renderMenu();
  renderGallery();
  if(window.ScrollTrigger) ScrollTrigger.refresh();
}
$$(".lang-toggle button").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));

/* ============ mobile menu ============ */
const burger = $("#burger"), mobileMenu = $("#mobileMenu");
burger.addEventListener("click",()=>{
  const open = mobileMenu.classList.toggle("open");
  burger.classList.toggle("open",open);
  burger.setAttribute("aria-expanded",String(open));
});
$$("#mobileMenu a, #mobileMenu .js-open-modal").forEach(el=>el.addEventListener("click",()=>{
  mobileMenu.classList.remove("open");burger.classList.remove("open");burger.setAttribute("aria-expanded","false");
}));

/* ============ reservation modal ============ */
const modal = $("#reserveModal"), form = $("#reserveForm"), confirmBox = $("#confirmBox");
$$(".js-open-modal").forEach(b=>b.addEventListener("click",()=>{
  form.style.display = "";
  confirmBox.style.display = "none";
  const d = $("#fDate");
  d.min = new Date(Date.now() + 864e5).toISOString().slice(0,10); /* from tomorrow */
  modal.showModal();
}));
$("#modalClose").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{ if(e.target === modal) modal.close(); });
form.addEventListener("submit",e=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const spaceTxt = I18N[lang][data.space==="terrace"?"modal.terrace":"modal.salon"];
  const dateTxt = new Date(data.date+"T12:00:00").toLocaleDateString(lang==="fr"?"fr-CA":"en-CA",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  $("#confirmSummary").textContent = lang==="fr"
    ? `${spaceTxt} · ${dateTxt} · ${data.size} personnes. Merci ${data.name}!`
    : `${spaceTxt} · ${dateTxt} · party of ${data.size}. Thank you, ${data.name}!`;
  form.style.display = "none";
  confirmBox.style.display = "block";
  /* DEMO MODE: delivery to caferoxane@gmail.com will be wired to a form service before launch. */
  console.log("[Roxane] reservation request (demo):", data);
});

/* ============ cookie notice (essential only) ============ */
const cookieBox = $("#cookieBox");
let cookiesAck = false;
try { cookiesAck = localStorage.getItem("roxane-cookies") === "ok"; } catch(e){}
if(!cookiesAck) setTimeout(()=>cookieBox.classList.add("show"), 1400);
$("#cookieOk").addEventListener("click",()=>{
  try { localStorage.setItem("roxane-cookies","ok"); } catch(e){}
  cookieBox.classList.remove("show");
});

/* ============ follow popup (end of scroll, first visit, momofuku-style) ============ */
const followModal = $("#followModal");
let followSeen = false;
try { followSeen = localStorage.getItem("roxane-follow") === "seen"; } catch(e){}
function maybeShowFollow(){
  if(followSeen || $("#reserveModal").open || followModal.open) return;
  followSeen = true;
  try { localStorage.setItem("roxane-follow","seen"); } catch(e){}
  followModal.showModal();
}
const followIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ maybeShowFollow(); followIO.disconnect(); } });
},{threshold:.5});
followIO.observe($("#slogan"));
$("#followClose").addEventListener("click",()=>followModal.close());
$("#followNo").addEventListener("click",()=>followModal.close());
followModal.addEventListener("click",e=>{ if(e.target === followModal) followModal.close(); });

/* ============ legal modal ============ */
const legalModal = $("#legalModal");
$$(".legal-links button").forEach(b=>b.addEventListener("click",()=>{
  legalModal.showModal();
  const target = b.dataset.legal === "terms" ? "#legalTerms" : "#legalPrivacy";
  $(target).scrollIntoView({block:"start"});
}));
$("#legalClose").addEventListener("click",()=>legalModal.close());
legalModal.addEventListener("click",e=>{ if(e.target === legalModal) legalModal.close(); });

/* ============ spinning spoons favicon ============ */
(function(){
  if(reduced) return; /* the GIF href still animates in browsers that support it */
  const link = $("#favicon");
  const img = new Image();
  img.src = "assets/web/favicon_spin.png";
  img.onload = ()=>{
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const x = c.getContext("2d");
    let a = 0;
    setInterval(()=>{
      a = (a + 5) % 360;
      x.clearRect(0,0,64,64);
      x.save(); x.translate(32,32); x.rotate(a*Math.PI/180); x.drawImage(img,-32,-32,64,64); x.restore();
      link.href = c.toDataURL("image/png");
    }, 150);
  };
})();

/* ============ header state ============ */
const header = $("#header");
addEventListener("scroll",()=>{ header.classList.toggle("solid", scrollY > innerHeight*0.5); },{passive:true});

/* ============ GSAP scroll choreography ============ */
window.addEventListener("load",()=>{
  applyLang(lang); /* initial render */

  if(!window.gsap){ $$(".reveal").forEach(el=>el.style.opacity=1); return; }
  gsap.registerPlugin(ScrollTrigger);

  if(reduced){
    /* render final states, no motion */
    $$(".reveal").forEach(el=>{el.style.opacity=1;el.style.transform="none";});
    gsap.set("#heroScrim",{opacity:0});
    gsap.set("#heroTagline",{opacity:1,letterSpacing:".25em"});
    header.classList.add("solid");
    dockLogoStatic();
    return;
  }

  /* --- hero: pinned scroll-scrub --- */
  const heroVideo = $("#heroVideo");
  const heroLogo  = $("#heroLogo");
  const logoSlot  = $("#logoSlot");

  /* scrub video time with scroll */
  const scrubVideo = ()=> {
    if(!heroVideo.duration) return;
    const st = ScrollTrigger.getById("heroPin");
    if(st) heroVideo.currentTime = Math.min(heroVideo.duration - 0.05, heroVideo.duration * st.progress * 0.92);
  };
  heroVideo.addEventListener("loadedmetadata",()=>{ heroVideo.currentTime = 0; });

  const heroTl = gsap.timeline({
    scrollTrigger:{
      id:"heroPin", trigger:"#hero", start:"top top", end:"+=220%",
      scrub:0.6, pin:true, anticipatePin:1, onUpdate:scrubVideo
    }
  });

  /* tagline tracks in on load, next to the centered logo */
  gsap.fromTo("#heroTagline",
    {opacity:0,letterSpacing:".95em"},
    {opacity:1,letterSpacing:".25em",duration:1.2,delay:.5,ease:"power2.out"});

  /* the moment scrolling starts: scrim lifts, logo darts to the corner, tagline vanishes */
  heroTl
    .to("#heroScrim",{opacity:0,duration:.12,ease:"none"},0)
    .to("#heroTagline",{opacity:0,y:-24,duration:.07,overwrite:"auto"},0)
    .to("#heroArrow",{opacity:0,duration:.05},0)
    .to("#heroVignette",{opacity:1,duration:.3,ease:"none"},.1);

  /* logo FLIP-style move on the same scrub */
  const positionLogo = ()=>{
    gsap.set(heroLogo,{clearProps:"transform"});
    const a = heroLogo.getBoundingClientRect();
    const b = logoSlot.getBoundingClientRect();
    const scale = Math.min(b.width / a.width, b.height / a.height);
    const dx = (b.left + b.width/2)  - (a.left + a.width/2);
    const dy = (b.top  + b.height/2) - (a.top  + a.height/2);
    return {dx,dy,scale};
  };
  let t = positionLogo();
  const logoTween = gsap.fromTo(heroLogo,
    {x:0,y:0,scale:1},
    {x:()=>t.dx, y:()=>t.dy, scale:()=>t.scale, ease:"power2.out", immediateRender:false,
     scrollTrigger:{trigger:"#hero", start:"top top", end:"+=30%", scrub:0.4}});
  addEventListener("resize",()=>{ t = positionLogo(); logoTween.scrollTrigger.refresh(); logoTween.invalidate(); });

  /* after hero: clone logo into header slot for the rest of the page */
  ScrollTrigger.create({
    trigger:"#story", start:"top 70%",
    onEnter:dockLogoStatic, onLeaveBack:undockLogoStatic
  });

  /* --- masked word-by-word title reveals --- */
  if(window.SplitText){
    $$(".section-title").forEach(t=>{
      gsap.set(t,{opacity:1,y:0});
      const split = new SplitText(t,{type:"words",mask:"words"});
      gsap.from(split.words,{yPercent:120,duration:.85,stagger:.08,ease:"power3.out",
        scrollTrigger:{trigger:t,start:"top 86%"}});
    });
  }

  /* --- section reveals (all text slowly appears on scroll) --- */
  $$(".reveal").forEach(el=>{
    if(el.classList.contains("section-title") && window.SplitText) return;
    gsap.to(el,{opacity:1,y:0,duration:.9,ease:"power3.out",
      scrollTrigger:{trigger:el,start:"top 88%"}});
  });
  /* menu items get their own stagger the first time they scroll in */
  gsap.from("#menuItems .menu-item",{opacity:0,y:16,duration:.5,stagger:.035,ease:"power2.out",
    scrollTrigger:{trigger:"#menuItems",start:"top 85%"},clearProps:"all"});
  /* zoom parallax: 7 frames scale at different rates, center image fills the screen */
  const ZOOM_SCALES = [4,5,6,5,6,8,9];
  const zoomTl = gsap.timeline({scrollTrigger:{
    trigger:"#zoomWrap", start:"top top", end:"bottom bottom",
    scrub:.5, pin:"#zoomSticky", pinSpacing:false}});
  $$("#zoomSticky .zp-item").forEach((it,i)=>zoomTl.to(it,{scale:ZOOM_SCALES[i],ease:"none"},0));

  /* --- food photos drift in beside the menu --- */
  $$(".menu-side img").forEach((img,i)=>{
    gsap.from(img,{opacity:0,y:70,duration:.9,ease:"power3.out",
      scrollTrigger:{trigger:img,start:"top 94%"}});
  });
  $$(".menu-side").forEach((side,i)=>{
    gsap.to(side,{y:i===0?-50:-90,ease:"none",
      scrollTrigger:{trigger:"#menu",start:"top bottom",end:"bottom top",scrub:1}});
  });

  /* --- rotating spoon sunbursts --- */
  gsap.to("#menuSpoons",{rotation:70,ease:"none",
    scrollTrigger:{trigger:"#menu",start:"top bottom",end:"bottom top",scrub:1}});
  gsap.to("#slogan .spoons",{rotation:150,ease:"none",
    scrollTrigger:{trigger:"#slogan",start:"top bottom",end:"bottom top",scrub:1}});

  /* --- slow parallax on media sections --- */
  $$(".parallax-media").forEach(m=>{
    gsap.fromTo(m,{yPercent:-8},{yPercent:8,ease:"none",
      scrollTrigger:{trigger:m.parentElement,start:"top bottom",end:"bottom top",scrub:0.5}});
  });

  /* --- gallery parallax drift --- */
  $$(".gal-item").forEach((el,i)=>{
    gsap.fromTo(el,{y:i%2?40:10},{y:i%2?-30:-5,ease:"none",
      scrollTrigger:{trigger:"#gallery",start:"top bottom",end:"bottom top",scrub:0.8}});
  });

  /* --- slogan tracking-in at end of scroll --- */
  gsap.fromTo("#sloganText",
    {opacity:0,letterSpacing:".6em"},
    {opacity:1,letterSpacing:".14em",duration:1,ease:"power2.out",
     scrollTrigger:{trigger:"#slogan",start:"top 75%",end:"top 30%",scrub:0.7}});

  ScrollTrigger.refresh();
});

/* dock a small logo into the header slot (after hero, and under reduced motion) */
function dockLogoStatic(){
  if($("#logoSlot img")) return;
  const img = document.createElement("img");
  img.src = "assets/web/logo_light.svg"; img.alt = "Café Roxane";
  img.style.cssText = "height:100%;width:auto;object-fit:contain";
  $("#logoSlot a").appendChild(img);
  gsap && gsap.set("#heroLogo",{opacity:0});
}
function undockLogoStatic(){
  const img = $("#logoSlot img");
  if(img) img.remove();
  gsap && gsap.set("#heroLogo",{opacity:1});
}

/* hero arrow */
$("#heroArrow").addEventListener("click",()=>$("#story").scrollIntoView({behavior:"smooth"}));

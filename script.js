const defaultData = {
  districts: [
    {id:"bogura",name:"বগুড়া",en:"Bogura",division:"রাজশাহী",region:"উত্তরবঙ্গ",famous:["বগুড়ার দই","মহাস্থানগড়","আলু ও কৃষিপণ্য"],food:["দই"],places:["মহাস্থানগড়"],rivers:["করতোয়া"],area:"প্রায় 2,898 কিমি²",upazila:12,people:"প্রশাসনিক তথ্য এখানে আপডেটযোগ্য",history:"প্রাচীন পুন্ড্রবর্ধন অঞ্চলের গুরুত্বপূর্ণ অংশ হিসেবে বগুড়ার ঐতিহাসিক গুরুত্ব রয়েছে।",source:"Bangladesh National Portal / Banglapedia"},
    {id:"comilla",name:"কুমিল্লা",en:"Cumilla",division:"চট্টগ্রাম",region:"পূর্ববঙ্গ",famous:["রসমালাই","ময়নামতি","খাদি"],food:["রসমালাই"],places:["শালবন বিহার","ময়নামতি"],rivers:["গোমতী"],area:"প্রায় 3,087 কিমি²",upazila:17,people:"প্রশাসনিক তথ্য এখানে আপডেটযোগ্য",history:"কুমিল্লা ময়নামতি-লালমাই প্রত্নাঞ্চলের জন্য বিশেষভাবে পরিচিত।",source:"Bangladesh National Portal / Banglapedia"},
    {id:"chapainawabganj",name:"চাঁপাইনবাবগঞ্জ",en:"Chapainawabganj",division:"রাজশাহী",region:"উত্তরবঙ্গ",famous:["আম","রেশম","গোমস্তাপুরের ঐতিহ্য"],food:["আম"],places:["ছোট সোনা মসজিদ","দরসবাড়ি"],rivers:["পদ্মা","মহানন্দা"],area:"প্রায় 1,703 কিমি²",upazila:5,people:"প্রশাসনিক তথ্য এখানে আপডেটযোগ্য",history:"বাংলার উত্তর-পশ্চিমাঞ্চলের ঐতিহাসিক জনপদগুলোর সঙ্গে এই অঞ্চলের দীর্ঘ সম্পর্ক রয়েছে।",source:"Bangladesh National Portal / Banglapedia"},
    {id:"dhaka",name:"ঢাকা",en:"Dhaka",division:"ঢাকা",region:"পূর্ববঙ্গ",famous:["রাজধানী","পুরান ঢাকা","বাণিজ্য ও সংস্কৃতি"],food:["বাকরখানি","কাচ্চি"],places:["লালবাগ কেল্লা","আহসান মঞ্জিল","জাতীয় সংসদ ভবন"],rivers:["বুড়িগঙ্গা","তুরাগ","বালু"],area:"প্রশাসনিক তথ্য আপডেটযোগ্য",upazila:5,people:"বহু জাতীয় পর্যায়ের ব্যক্তিত্বের সঙ্গে সম্পর্কিত",history:"ঢাকা বাংলাদেশের রাজধানী ও রাজনৈতিক-সাংস্কৃতিক কেন্দ্র।",source:"Bangladesh National Portal / Banglapedia"},
    {id:"sylhet",name:"সিলেট",en:"Sylhet",division:"সিলেট",region:"পূর্ববঙ্গ",famous:["চা","হাওর","পাথর"],food:["সাতকরা-ভিত্তিক রান্না"],places:["জাফলং","রাতারগুল","শাহজালাল (র.) মাজার"],rivers:["সুরমা","কুশিয়ারা"],area:"প্রশাসনিক তথ্য আপডেটযোগ্য",upazila:13,people:"তথ্য Admin Panel থেকে সম্প্রসারণযোগ্য",history:"সিলেটের ইতিহাসে প্রাচীন জনপদ, সুফি ঐতিহ্য ও চা-অর্থনীতির গুরুত্বপূর্ণ ভূমিকা রয়েছে।",source:"Bangladesh National Portal / Banglapedia"},
    {id:"khulna",name:"খুলনা",en:"Khulna",division:"খুলনা",region:"দক্ষিণবঙ্গ",famous:["সুন্দরবন","চিংড়ি","শিল্প"],food:["চিংড়ি"],places:["সুন্দরবন","রূপসা নদীর তীর"],rivers:["রূপসা","ভৈরব"],area:"প্রশাসনিক তথ্য আপডেটযোগ্য",upazila:9,people:"তথ্য Admin Panel থেকে সম্প্রসারণযোগ্য",history:"দক্ষিণ-পশ্চিমাঞ্চলের নদী, বন্দর ও সুন্দরবনকেন্দ্রিক অর্থনীতি খুলনার পরিচয়ের গুরুত্বপূর্ণ অংশ।",source:"Bangladesh National Portal / Banglapedia"}
  ],
  divisions:["ঢাকা","চট্টগ্রাম","রাজশাহী","খুলনা","বরিশাল","সিলেট","রংপুর","ময়মনসিংহ"],
  sectors:[
    {n:1,commander:"মেজর জিয়াউর রহমান (প্রাথমিক পর্যায়)",area:"চট্টগ্রাম, পার্বত্য চট্টগ্রাম ও আশপাশের এলাকা"},
    {n:2,commander:"মেজর খালেদ মোশাররফ",area:"ঢাকা, কুমিল্লা ও নোয়াখালী অঞ্চলের অংশ"},
    {n:3,commander:"মেজর কে. এম. শফিউল্লাহ",area:"সিলেট, কিশোরগঞ্জ ও আশপাশের এলাকা"},
    {n:4,commander:"মেজর সি. আর. দত্ত",area:"সিলেটের পূর্বাঞ্চল"},
    {n:5,commander:"মেজর মীর শওকত আলী",area:"সিলেটের উত্তরাঞ্চল ও সীমান্ত এলাকা"},
    {n:6,commander:"উইং কমান্ডার এম. খদেমুল বাশার",area:"রংপুর ও দিনাজপুরের অংশ"},
    {n:7,commander:"মেজর নাজমুল হক / পরবর্তী পর্যায়ে অন্যান্য কমান্ডার",area:"রাজশাহী, পাবনা, বগুড়া ও আশপাশের এলাকা"},
    {n:8,commander:"মেজর আবু ওসমান চৌধুরী",area:"কুষ্টিয়া, যশোর, খুলনা ও ফরিদপুরের অংশ"},
    {n:9,commander:"মেজর এম. এ. জলিল",area:"বরিশাল ও পটুয়াখালীসহ দক্ষিণাঞ্চল"},
    {n:10,commander:"নৌ-কমান্ডো",area:"নৌ অভিযান; নির্দিষ্ট স্থল সীমানা ছিল না"},
    {n:11,commander:"মেজর আবু তাহের",area:"ময়মনসিংহ, টাঙ্গাইল ও আশপাশের এলাকা"}
  ]
};

let db = JSON.parse(localStorage.getItem("bdExplorerDB") || "null") || defaultData;
let favorites = JSON.parse(localStorage.getItem("bdExplorerFav") || "[]");
let currentPage = "home";

function saveDB(){localStorage.setItem("bdExplorerDB",JSON.stringify(db))}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function showPage(page, arg=""){
  currentPage=page;
  const main=document.getElementById("main");
  if(page==="home") main.innerHTML=homePage();
  else if(page==="map") main.innerHTML=mapPage();
  else if(page==="districts") main.innerHTML=districtPageList();
  else if(page==="search") main.innerHTML=searchPage(arg);
  else if(page==="detail") main.innerHTML=detailPage(arg);
  else if(page==="more") main.innerHTML=morePage();
  else if(page==="sectors") main.innerHTML=sectorsPage();
  else if(page==="constitution") main.innerHTML=constitutionPage();
  else if(page==="quiz") main.innerHTML=quizPage();
  else if(page==="favorites") main.innerHTML=favoritesPage();
  else if(page==="about") main.innerHTML=aboutPage();
  window.scrollTo({top:0,behavior:"smooth"});
}
function districtCard(d){
 return `<article class="card district-card" onclick="showPage('detail','${d.id}')">
   <div class="emoji">📍</div><h3>${esc(d.name)}</h3><p>${esc(d.division)} বিভাগ • ${esc(d.region)}</p>
   <span class="tag">${esc(d.famous[0]||"তথ্য দেখুন")}</span>
 </article>`;
}
function homePage(){
 return `<section class="hero"><div class="hero-content">
  <div>🇧🇩 বাংলাদেশের ইন্টার‌্যাক্টিভ জ্ঞানভাণ্ডার</div>
  <h1>আমার বাংলাদেশ</h1>
  <p>৬৪ জেলা, ৮ বিভাগ, ইতিহাস, সংস্কৃতি, খাবার, মানুষ, পর্যটন ও বাংলাদেশের গুরুত্বপূর্ণ জ্ঞান—এক জায়গায়।</p>
  <div class="searchbox"><input id="heroSearch" placeholder="জেলা, খাবার, মানুষ বা স্থান খুঁজুন..." onkeydown="if(event.key==='Enter')searchFrom('heroSearch')"><button onclick="searchFrom('heroSearch')">খুঁজুন</button></div>
 </div></section>
 <section class="section"><div class="section-head"><h2>🗺️ বাংলাদেশের মানচিত্র</h2><button class="btn alt" onclick="showPage('map')">Explore Map</button></div>
  <div class="map-wrap"><div class="map-shape"><div class="map-label">বাংলাদেশ</div></div></div>
 </section>
 <section class="section"><div class="section-head"><h2>🌍 চার অঞ্চল</h2><p>আঞ্চলিক/ঐতিহাসিক শ্রেণিবিন্যাস</p></div>
  <div class="grid">${regionCard("উত্তরবঙ্গ","উত্তরের ঐতিহাসিক ও সাংস্কৃতিক পরিচয়","green")}${regionCard("পূর্ববঙ্গ","পূর্বাঞ্চলের ঐতিহাসিক পরিচয়","blue")}${regionCard("পশ্চিমবঙ্গ","পশ্চিমাঞ্চলের আঞ্চলিক পরিচয়","orange")}${regionCard("দক্ষিণবঙ্গ","দক্ষিণাঞ্চলের নদী-উপকূলীয় পরিচয়","red")}</div>
  <div class="source">নোট: “বঙ্গ” অঞ্চলগুলো বাংলাদেশের সরকারি প্রশাসনিক বিভাগ নয়; অ্যাপের গবেষণা/ব্যবহৃত আঞ্চলিক শ্রেণিবিন্যাস হিসেবে দেখানো হবে। জেলা-ভিত্তিক শ্রেণিবিন্যাসে মতভেদ থাকতে পারে।</div>
 </section>
 <section class="section"><div class="section-head"><h2>📊 দ্রুত তথ্য</h2></div><div class="grid">
  ${stat("📍","64","জেলা")}${stat("🏛️","8","বিভাগ")}${stat("🪖","11","মুক্তিযুদ্ধ সেক্টর")}${stat("📜","1","সংবিধান")}
 </div></section>
 <section class="section"><div class="section-head"><h2>📚 বাংলাদেশ জ্ঞান</h2></div><div class="feature-grid">
  ${feature("📜","সংবিধান","constitution")}${feature("🪖","১১ সেক্টর","sectors")}${feature("🇧🇩","মুক্তিযুদ্ধ","sectors")}${feature("🎯","বাংলাদেশ GK","quiz")}${feature("❤️","পছন্দের","favorites")}
 </div></section>
 <section class="section"><div class="section-head"><h2>📍 নির্বাচিত জেলা</h2><button class="btn alt" onclick="showPage('districts')">সব ৬৪ জেলা</button></div>
  <div class="grid">${db.districts.map(districtCard).join("")}</div>
 </section>${footer()}`;
}
function regionCard(n,t,c){return `<div class="card region ${c}" onclick="filterRegion('${n}')"><h3>${n}</h3><p>${t}</p></div>`}
function stat(i,n,t){return `<div class="card stat"><div class="stat-icon">${i}</div><div><strong>${n}</strong><span>${t}</span></div></div>`}
function feature(i,t,p){return `<div class="feature" onclick="showPage('${p}')"><div style="font-size:27px">${i}</div><b>${t}</b></div>`}
function mapPage(){
 return `<section class="section-head"><div><h2>🗺️ Interactive Bangladesh Map</h2><p>জেলা ও অঞ্চল explore করুন</p></div></section>
 <div class="map-wrap"><div class="map-shape" onclick="showPage('districts')"><div class="map-label">🇧🇩</div></div></div>
 <div class="toolbar"><select onchange="filterDivision(this.value)"><option value="">সব বিভাগ</option>${db.divisions.map(x=>`<option>${x}</option>`).join("")}</select>
 <select onchange="filterRegion(this.value)"><option value="">সব অঞ্চল</option><option>উত্তরবঙ্গ</option><option>পূর্ববঙ্গ</option><option>পশ্চিমবঙ্গ</option><option>দক্ষিণবঙ্গ</option></select></div>
 <div id="mapDistricts" class="grid">${db.districts.map(districtCard).join("")}</div>${footer()}`;
}
function districtPageList(){
 return `<section class="section-head"><div><h2>📍 ৬৪ জেলা</h2><p>জেলা অনুযায়ী তথ্য explore করুন</p></div></section>
 <div class="toolbar"><input id="districtFilter" placeholder="জেলার নাম লিখুন..." oninput="filterDistricts(this.value)"></div>
 <div id="districtGrid" class="grid">${db.districts.map(districtCard).join("")}</div>${footer()}`;
}
function filterDistricts(q){const a=db.districts.filter(d=>(d.name+" "+d.en+" "+d.division+" "+d.region+" "+d.famous.join(" ")).toLowerCase().includes(q.toLowerCase()));document.getElementById("districtGrid").innerHTML=a.length?a.map(districtCard).join(""):"<div class='card'>কোনো তথ্য পাওয়া যায়নি।</div>"}
function filterDivision(v){const a=v?db.districts.filter(d=>d.division===v):db.districts;document.getElementById("mapDistricts").innerHTML=a.map(districtCard).join("")}
function filterRegion(v){if(currentPage!=="map")showPage("map");setTimeout(()=>{const a=v?db.districts.filter(d=>d.region===v):db.districts;document.getElementById("mapDistricts").innerHTML=a.map(districtCard).join("")},50)}
function detailPage(id){
 const d=db.districts.find(x=>x.id===id);if(!d)return `<div class="card">জেলা পাওয়া যায়নি।</div>`;
 const fav=favorites.includes(id);
 return `<div class="detail-head"><div><div>🇧🇩 ${esc(d.en)}</div><h1>${esc(d.name)}</h1><p>${esc(d.division)} বিভাগ • ${esc(d.region)}</p></div><div class="detail-actions"><button class="btn alt" onclick="toggleFav('${id}')">${fav?"❤️ Saved":"♡ Favorite"}</button><button class="btn" onclick="shareDistrict('${id}')">📤 Share</button></div></div>
 <div class="info-grid">
  <div class="card"><h3>📍 প্রশাসনিক তথ্য</h3><p><b>বিভাগ:</b> ${esc(d.division)}</p><p><b>অঞ্চল:</b> ${esc(d.region)}</p><p><b>উপজেলা:</b> ${d.upazila}</p><p><b>আয়তন:</b> ${esc(d.area)}</p><div class="source">তথ্যসূত্র: ${esc(d.source)}</div></div>
  <div class="card"><h3>⭐ এই জেলা কিসের জন্য বিখ্যাত?</h3><ul class="list">${d.famous.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="card"><h3>🍛 বিখ্যাত খাবার</h3><ul class="list">${d.food.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="card"><h3>🏞️ দর্শনীয় স্থান</h3><ul class="list">${d.places.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="card"><h3>🌊 গুরুত্বপূর্ণ নদী</h3><ul class="list">${d.rivers.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="card"><h3>📜 জেলার ইতিহাস</h3><p>${esc(d.history)}</p></div>
  <div class="card"><h3>👤 বিখ্যাত মানুষ</h3><p>এই তালিকা Admin Panel থেকে ছবি, পরিচয় ও জেলার সঙ্গে সম্পর্কসহ সম্প্রসারণযোগ্য।</p></div>
  <div class="card"><h3>🇧🇩 মুক্তিযুদ্ধ</h3><p>যুদ্ধ, বধ্যভূমি, স্মৃতিস্তম্ভ ও মুক্তিযোদ্ধাদের তথ্য Admin CMS থেকে যোগ করা যাবে।</p></div>
  <div class="card"><h3>🌾 কৃষি ও পণ্য</h3><p>কৃষিপণ্য, শিল্প, রপ্তানি ও ঐতিহ্যবাহী পেশার তথ্য যোগযোগ্য।</p></div>
 </div>
 <section class="section"><div class="card"><h3>📸 Gallery</h3><p>District photo gallery এখানে যুক্ত হবে। Admin Panel থেকে ছবি upload/add করা যাবে।</p></div></section>
 ${footer()}`;
}
function searchPage(q=""){
 return `<section class="section-head"><div><h2>🔎 Smart Search</h2><p>জেলা, খাবার, মানুষ, স্থান, নদী, ইতিহাস বা পণ্য খুঁজুন</p></div></section>
 <div class="searchbox" style="border:1px solid var(--border);box-shadow:none"><input id="globalSearch" value="${esc(q)}" placeholder="যেমন: দই, মহাস্থানগড়, বগুড়া..." oninput="runSearch(this.value)"><button onclick="runSearch(document.getElementById('globalSearch').value)">খুঁজুন</button></div>
 <div id="searchResults" class="grid section">${q?searchResults(q):"<div class='card'>আপনার অনুসন্ধান লিখুন।</div>"}</div>${footer()}`;
}
function runSearch(q){document.getElementById("searchResults").innerHTML=searchResults(q)}
function searchResults(q){const a=db.districts.filter(d=>(d.name+" "+d.en+" "+d.division+" "+d.region+" "+d.famous.join(" ")+" "+d.food.join(" ")+" "+d.places.join(" ")+" "+d.rivers.join(" ")+" "+d.history).toLowerCase().includes(q.toLowerCase()));return a.length?a.map(districtCard).join(""):"<div class='card'>কোনো matching তথ্য পাওয়া যায়নি।</div>"}
function searchFrom(id){showPage("search",document.getElementById(id).value)}
function sectorsPage(){return `<section class="section-head"><div><h2>🪖 মুক্তিযুদ্ধের ১১ সেক্টর</h2><p>প্রাথমিক overview — বিস্তারিত তথ্য ও source Admin CMS-এ সম্প্রসারণযোগ্য</p></div></section><div class="grid grid-3">${db.sectors.map(s=>`<div class="card"><div style="font-size:28px">🪖</div><h3>সেক্টর ${s.n}</h3><p><b>কমান্ড:</b> ${esc(s.commander)}</p><p><b>অঞ্চল:</b> ${esc(s.area)}</p></div>`).join("")}</div><div class="card section"><b>তথ্য যাচাই:</b> মুক্তিযুদ্ধের সেক্টর ও কমান্ডার সংক্রান্ত তথ্য প্রকাশের আগে সরকারি/প্রামাণ্য মুক্তিযুদ্ধ বিষয়ক উৎস দিয়ে যাচাই করা হবে।</div>${footer()}`}
function constitutionPage(){return `<section class="section-head"><div><h2>📜 বাংলাদেশের সংবিধান</h2><p>সহজ ভাষায় সংবিধান বোঝার জন্য কাঠামোবদ্ধ জ্ঞানভাণ্ডার</p></div></section><div class="grid grid-3">${["প্রস্তাবনা","মৌলিক অধিকার","রাষ্ট্র পরিচালনার মূলনীতি","রাষ্ট্রপতি","প্রধানমন্ত্রী ও মন্ত্রিসভা","জাতীয় সংসদ","বিচার বিভাগ","নির্বাচন","স্থানীয় সরকার","সাংবিধানিক প্রতিষ্ঠান","তফসিল","অনুচ্ছেদসমূহ"].map((x,i)=>`<div class="card"><div style="font-size:25px">📜</div><h3>${x}</h3><p>এই বিষয়টি Admin Panel থেকে verified source, ব্যাখ্যা ও reference সহ যুক্ত করা যাবে।</p></div>`).join("")}</div><div class="card section"><b>নোট:</b> সংবিধানের মূল আইনগত পাঠের ক্ষেত্রে সরকারি/প্রামাণিক প্রকাশনা অনুসরণ করা হবে। অ্যাপের explanatory text মূল সংবিধানের বিকল্প নয়।</div>${footer()}`}
function quizPage(){const qs=[["বগুড়া কোন বিভাগের অন্তর্ভুক্ত?",["ঢাকা","রাজশাহী","খুলনা","সিলেট"],1],["কুমিল্লার সঙ্গে কোন খাবারের পরিচিতি বেশি?",["রসমালাই","দই","আম","সাতকরা"],0],["বাংলাদেশের মুক্তিযুদ্ধে মোট কতটি সেক্টর ছিল?",["7","9","11","13"],2]];const q=qs[Math.floor(Math.random()*qs.length)];return `<section class="section-head"><div><h2>🎯 বাংলাদেশ GK Quiz</h2><p>সঠিক উত্তর নির্বাচন করুন</p></div></section><div class="card" style="max-width:720px;margin:auto"><h2>${q[0]}</h2>${q[1].map((x,i)=>`<button class="quiz-option" onclick="quizAnswer(${i},${q[2]})">${String.fromCharCode(65+i)}. ${x}</button>`).join("")}<p id="quizMsg"></p></div>${footer()}`}
function quizAnswer(i,c){document.getElementById("quizMsg").innerHTML=i===c?"🎉 সঠিক উত্তর!":"❌ ভুল উত্তর। আবার চেষ্টা করুন।"}
function favoritesPage(){const a=db.districts.filter(d=>favorites.includes(d.id));return `<section class="section-head"><div><h2>❤️ পছন্দের জেলা</h2><p>${a.length}টি district saved</p></div></section><div class="grid">${a.length?a.map(districtCard).join(""):"<div class='card'>এখনও কোনো জেলা favorite করা হয়নি।</div>"}</div>${footer()}`}
function toggleFav(id){if(favorites.includes(id))favorites=favorites.filter(x=>x!==id);else favorites.push(id);localStorage.setItem("bdExplorerFav",JSON.stringify(favorites));showPage("detail",id)}
function morePage(){return `<section class="section-head"><div><h2>☰ আরও</h2><p>বাংলাদেশকে আরও জানুন</p></div></section><div class="more-grid">
 ${more("🪖","১১ সেক্টর","মুক্তিযুদ্ধের সেক্টর","sectors")}${more("📜","সংবিধান","রাষ্ট্রের মৌলিক কাঠামো","constitution")}${more("🎯","Quiz","বাংলাদেশ GK","quiz")}${more("❤️","Favorites","সংরক্ষিত জেলা","favorites")}${more("ℹ️","About","Developer & project","about")}${more("🔐","Admin","Content Management","admin")}
 </div>${footer()}`}
function more(i,t,s,p){return `<div class="more-item" onclick="${p==='admin'?'openAdmin()':`showPage('${p}')`}"><div style="font-size:30px">${i}</div><b>${t}</b><span>${s}</span></div>`}
function aboutPage(){return `<section class="card" style="text-align:center;padding:40px"><div style="font-size:55px">🇧🇩</div><h1>Bangladesh Explorer</h1><p>Created by <strong>Raju Ahammed</strong></p><p>একটি interactive Bangladesh knowledge, map & travel guide platform.</p><a class="btn" href="https://t.me/r366grp" target="_blank" rel="noopener">Telegram: @r366grp</a><div class="footer">© Raju Ahammed — Bangladesh Explorer</div></section>`}
function footer(){return `<div class="footer">© Raju Ahammed — Bangladesh Explorer • <a href="https://t.me/r366grp" target="_blank" rel="noopener">@r366grp</a></div>`}
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("bdTheme",document.body.classList.contains("dark")?"dark":"light")}
if(localStorage.getItem("bdTheme")==="dark")document.body.classList.add("dark");

function openAdmin(){
 const m=document.getElementById("modal");m.classList.remove("hidden");
 m.innerHTML=`<div class="modal-box"><div class="modal-head"><h2>🔐 Admin Panel</h2><button class="close" onclick="closeModal()">✕</button></div>
 <div id="adminBody"><div class="form"><label>Admin Code</label><input id="adminCode" type="password" placeholder="Admin code"><button class="btn" onclick="adminLogin()">Login</button><p id="loginMsg" style="color:var(--red)"></p></div></div></div>`;
}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function adminLogin(){
 const code=document.getElementById("adminCode").value;
 // Frontend demo only. For production, authentication MUST move to a secure backend.
 if(code==="Raju366")renderAdmin();
 else document.getElementById("loginMsg").textContent="ভুল code। Production version-এ server-side lockout/authentication ব্যবহার করতে হবে।";
}
function renderAdmin(){
 document.getElementById("adminBody").innerHTML=`<div class="admin-grid">
 <div class="admin-card"><h3>📊 Dashboard</h3><p>${db.districts.length}টি loaded district • ${db.divisions.length} division • ${db.sectors.length} sectors</p></div>
 <div class="admin-card"><h3>⚙️ Security</h3><p>Admin code change ও escalating lockout-এর backend version যুক্ত করার জন্য প্রস্তুত structure।</p><button class="btn alt" onclick="changeCodeInfo()">Code Change</button></div>
 <div class="admin-card"><h3>📍 District Content</h3><button class="btn" onclick="addDistrictForm()">+ Add District</button></div>
 <div class="admin-card"><h3>📸 Picture / Gallery</h3><p>Image fields ও gallery data model প্রস্তুত। Production-এ cloud storage যুক্ত হবে।</p></div>
 <div class="admin-card"><h3>🧩 Dynamic Sections</h3><p>নতুন category/section যোগ করার CMS structure রাখা হয়েছে।</p></div>
 <div class="admin-card"><h3>💾 Backup</h3><button class="btn alt" onclick="downloadBackup()">Export JSON Backup</button></div>
 </div><div class="section"><h3>District Manager</h3><div class="grid">${db.districts.map(d=>`<div class="card"><b>${esc(d.name)}</b><p>${esc(d.division)} • ${esc(d.region)}</p><button class="btn alt" onclick="editDistrict('${d.id}')">Edit</button> <button class="btn red" onclick="deleteDistrict('${d.id}')">Delete</button></div>`).join("")}</div></div>`;
}
function changeCodeInfo(){alert("Production deployment-এ Admin Code backend/database-এ secure hash হিসেবে রাখতে হবে। এই GitHub-only demo-তে code client-side হওয়ায় এটি secure authentication নয়.")}
function addDistrictForm(d=null){
 document.getElementById("adminBody").innerHTML=`<div class="form"><h3>${d?"✏️ Edit":"➕ Add"} District</h3>
 <label>জেলার নাম</label><input id="fName" value="${esc(d?.name||"")}"><label>English Name</label><input id="fEn" value="${esc(d?.en||"")}">
 <label>বিভাগ</label><input id="fDiv" value="${esc(d?.division||"")}"><label>অঞ্চল</label><input id="fReg" value="${esc(d?.region||"")}">
 <label>কিসের জন্য বিখ্যাত (comma দিয়ে)</label><input id="fFam" value="${esc(d?.famous?.join(", ")||"")}">
 <label>খাবার (comma দিয়ে)</label><input id="fFood" value="${esc(d?.food?.join(", ")||"")}">
 <label>দর্শনীয় স্থান (comma দিয়ে)</label><input id="fPlace" value="${esc(d?.places?.join(", ")||"")}">
 <label>নদী (comma দিয়ে)</label><input id="fRiver" value="${esc(d?.rivers?.join(", ")||"")}">
 <label>ইতিহাস</label><textarea id="fHist">${esc(d?.history||"")}</textarea>
 <label>তথ্যসূত্র</label><input id="fSource" value="${esc(d?.source||"")}">
 <label>📸 Cover Image URL</label><input id="fImage" value="${esc(d?.image||"")}" placeholder="https://...">
 <button class="btn" onclick="saveDistrictForm('${d?.id||""}')">Save</button><button class="btn alt" onclick="renderAdmin()">Back</button></div>`;
}
function editDistrict(id){addDistrictForm(db.districts.find(x=>x.id===id))}
function saveDistrictForm(id){
 const name=document.getElementById("fName").value.trim();if(!name)return alert("জেলার নাম দিন");
 const obj={id:id||name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+Date.now(),name,en:document.getElementById("fEn").value,division:document.getElementById("fDiv").value,region:document.getElementById("fReg").value,famous:split(document.getElementById("fFam").value),food:split(document.getElementById("fFood").value),places:split(document.getElementById("fPlace").value),rivers:split(document.getElementById("fRiver").value),history:document.getElementById("fHist").value,source:document.getElementById("fSource").value,image:document.getElementById("fImage").value,upazila:0,area:"Admin থেকে আপডেটযোগ্য",people:"Admin থেকে আপডেটযোগ্য"};
 const i=db.districts.findIndex(x=>x.id===id);if(i>=0)db.districts[i]=obj;else db.districts.push(obj);saveDB();renderAdmin();alert("Saved")}
function split(x){return x.split(",").map(s=>s.trim()).filter(Boolean)}
function deleteDistrict(id){if(confirm("এই district delete করবেন?")){db.districts=db.districts.filter(x=>x.id!==id);saveDB();renderAdmin()}}
function downloadBackup(){const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="bangladesh-explorer-backup.json";a.click();URL.revokeObjectURL(a.href)}
async function shareDistrict(id){const d=db.districts.find(x=>x.id===id),text=`🇧🇩 ${d.name} — Bangladesh Explorer\n${d.division} বিভাগ • ${d.region}`;if(navigator.share)await navigator.share({title:d.name,text});else navigator.clipboard?.writeText(text).then(()=>alert("Share text copied"))}

showPage("home");

// ── LOGOTIPOS DE PARTIDOS Y NÚMERO DE SENADORES Y DIPUTADOS EN EL HEMICICLO ────────────────────────────────
const PARTIDOS = {
    'AHORA NACION':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/ahora-nacion.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },    
    'ALIANZA PARA EL PROGRESO':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-para-el-progreso.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'ALIANZA UNIDAD NACIONAL':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-unidad-nacional.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'AVANZA PAÍS':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/avanza-pais.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },
    'COOPERACIÓN POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/cooperacion-popular.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'APRA':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/apra.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },
    'FE EN EL PERÚ':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/fe-en-el-peru.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FRENTE DE LA ESPERANZA':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/frente-esperanza.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FRENTE POPULAR AGRÍCOLA FIA DEL PERÚ':  { logo:'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/frepap.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FUERZA POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/fuerza-popular.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FUERZA Y LIBERTAD':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-fuerza-y-libertad.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'INTEGRIDAD DEMOCRÁTICA':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/integridad-democratica.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'JUNTOS POR EL PERÚ':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/juntos-por-el-peru.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'LIBERTAD POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/libertad-popular.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'OBRAS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/obras.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PAÍS PARA TODOS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/pais-para-todos.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO DEMOCRÁTICO FEDERAL': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-federal.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO DEL BUEN GOBIERNO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-del-buen-gobierno.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO MORADO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-morado.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO PATRIÓTICO DEL PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-patriotico-del-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },  
    'PERÚ LIBRE': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-libre.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PERÚ MODERNO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-moderno.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PERÚ PRIMERO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-primero.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PRIMERO LA GENTE': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/primero-la-gente.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PODEMOS PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/podemos-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PROGRESEMOS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/progresemos.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'RENOVACIÓN POPULAR': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/renovacion-popular.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'SALVEMOS AL PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/salvemos-al-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'SÍ CREO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/si-creo.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'SOMOS PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/somos-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'UNIDAD NACIONAL': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/unidad-nacional.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'VENCEREMOS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/venceremos.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'VERDE': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-verde.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
};

// ── DEMO HEMICICLO DATA ────────────────────────
const HEM = {
    sen:{
        nacional:{'FUERZA POPULAR - FP':18,'ALIANZA PERU - AP':22,'ACCION POPULAR - APC':12,'AHORA NACION - AN':8},
        regional:{'FUERZA POPULAR - FP':14,'ALIANZA PERU - AP':16,'ACCION POPULAR - APC':18,'AHORA NACION - AN':12}
    },
    dip:{
        nacional:{'FUERZA POPULAR - FP':42,'ALIANZA PERU - AP':36,'ACCION POPULAR - APC':28,'AHORA NACION - AN':24},
        regional:{'FUERZA POPULAR - FP':36,'ALIANZA PERU - AP':28,'ACCION POPULAR - APC':38,'AHORA NACION - AN':28}
    }
};

// ── REGION MAP ────────────────────────────────
const REGION_MAP = {
  'PE-AMA':'Amazonas','PE-ANC':'Ancash','PE-APU':'Apurímac',
  'PE-ARE':'Arequipa','PE-AYA':'Ayacucho','PE-CAJ':'Cajamarca',
  'PE-CAL':'El Callao','PE-CUS':'Cusco','PE-HUC':'Huánuco',
  'PE-HUV':'Huancavelica','PE-ICA':'Ica','PE-JUN':'Junín',
  'PE-LAL':'La Libertad','PE-LAM':'Lambayeque','PE-LIM':'Lima',
  'PE-LMA':'Lima Metropolitana','PE-LOR':'Loreto','PE-MDD':'Madre de Dios',
  'PE-MOQ':'Moquegua','PE-PAS':'Pasco','PE-PIU':'Piura',
  'PE-PUN':'Puno','PE-SAM':'San Martín','PE-TAC':'Tacna',
  'PE-TUM':'Tumbes','PE-UCA':'Ucayali'
};

// ── STATE ─────────────────────────────────────
let filtroGlobal = 'diputado';
let mapaFiltro = 'senador';
let hemTab = 'nacional';
let openBancada = null;
let selectedRegion = null;
let searchDiputado = '';
let searchSenador  = '';

// ── HELPERS ───────────────────────────────────
function initiales(nombre) {
  return (nombre||'').trim().split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
}


// ── BANCADAS ──────────────────────────────────
function renderBancadas() {
    const grid = document.getElementById('bancadas-grid');
    const tipo = filtroGlobal;
    const q = (filtroGlobal === 'diputado' ? searchDiputado : searchSenador).trim().toLowerCase()
        .replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u');
    // Group by partido
    const grupos = {};
    candidatos.forEach(c => {
        if(c.tipoCandidatura !== tipo) return;
        if(q) {
            const nombre  = (c.nombre||'').toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u');
            const partido = (c.partido||'').toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u');
            if(!nombre.includes(q) && !partido.includes(q)) return;
        }
        grupos[c.partido] = grupos[c.partido]||[];
        grupos[c.partido].push(c);
    });
    grid.innerHTML = '';
    Object.entries(grupos).forEach(([partido, miembros]) => {
        const meta = PARTIDOS[partido]||{sigla:partido.slice(0,3), color:'#888', bg:'#eee'};
        const card = document.createElement('div');
        card.className = 'bancada-card';
        //card.style.borderTopColor = meta.color;
        card.style.borderTopWidth = '1px';
        card.innerHTML = `
        <div class="bc-sigla"><img src="${meta.logo}"></div>        
        <div class="bc-total">${miembros.length}</div>
    `;
    //<div class="bc-nombre">${partido}</div>
    card.onclick = () => openBancadaPanel(partido, miembros, card);
    grid.appendChild(card);
    });
    // hide panel
    document.getElementById('bancada-panel').classList.remove('open');
    document.getElementById('bancada-panel').style.display='none';
    openBancada = null;
}

function openBancadaPanel(partido, miembros, cardEl) {
    const panel = document.getElementById('bancada-panel');
    const list = document.getElementById('panel-list');
    const cv = document.getElementById('panel-cv');
    // toggle
    if(openBancada === partido) {
        panel.style.display='none';
        panel.classList.remove('open');
        cardEl.classList.remove('open');
        openBancada=null; return;
    }
    document.querySelectorAll('.bancada-card').forEach(c=>c.classList.remove('open'));
    cardEl.classList.add('open');
    openBancada = partido;
    const meta = PARTIDOS[partido]||{sigla:'?',color:'#888',bg:'#eee'};
    list.innerHTML = miembros.map((c,i)=>`
        <div class="panel-list-item" onclick="showCV(${i},this)" data-idx="${i}">
            <div class="pi-avatar" style="color:${meta.color}"><img src="${meta.logo}"></div>
            <div class="pi-name">${c.nombre}<br><span style="color: #000;font-size:.72rem">${c.departamento||c.circunscripcion||''}</span></div>
            ${c.delitos?'<span class="pi-badge tag-alerta">⚠</span>':''}
        </div>
    `).join('');
    cv.innerHTML = '<p class="cv-placeholder">Selecciona un candidato para ver su hoja de vida</p>';
    panel.style.display='flex';
    panel.classList.add('open');
    // scroll panel into view
    panel.scrollIntoView({behavior:'smooth',block:'nearest'});
    // store miembros for showCV
    panel._miembros = miembros;
}

function closeFichaCV() {
    const cv = document.getElementById('panel-cv');
    cv.innerHTML = '<p class="cv-placeholder">Selecciona un candidato para ver su hoja de vida</p>';
    document.querySelectorAll('.panel-list-item').forEach(x => x.classList.remove('active'));
}

function showCV(idx, el) {
    const panel = document.getElementById('bancada-panel');
    const miembros = panel._miembros || [];
    const c = miembros[idx];
    if (!c) return;
    document.querySelectorAll('.panel-list-item').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    const cv = document.getElementById('panel-cv');

    const foto = c.fotoCandidato || './img/fotos-candidatos/avatar-candidato.png';
    const region = c.departamento || c.circunscripcion || '';

    cv.innerHTML = `
    <div class="ficha-wrap">

      <!-- Botón cerrar -->
      <div class="ficha-close-row">
        <button class="ficha-close-btn" onclick="closeFichaCV()">✕</button>
      </div>

      <!-- Encabezado -->
      <div class="ficha-header-card">
        <div class="ficha-header-inner">
          <div class="ficha-header-left">
            <div class="ficha-nombre">${c.nombre}</div>
            ${c.edad ? `<div class="ficha-edad">${c.edad} años</div>` : ''}
            ${region ? `<div class="ficha-region">Región: ${region}</div>` : ''}
          </div>
          <div class="ficha-avatar-wrap">
            <img src="${foto}" alt="${c.nombre}" class="ficha-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
          </div>
        </div>
      </div>

      <!-- Perfil profesional -->
      <div class="ficha-card">
        <div class="ficha-card-title">¿Cuál es su perfil profesional?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-3">
          <div class="ficha-field">
            <div class="ficha-field-label">Profesión declarada</div>
            <div class="ficha-field-value">${c.profesion || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Formación más alta alcanzada</div>
            <div class="ficha-field-value">${c.formacion || c.educacionGrupo || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Campo principal de especialización</div>
            <div class="ficha-field-value">${c.especializacion || 'No declara'}</div>
          </div>
        </div>
      </div>

      <!-- Experiencia en el Estado -->
      <div class="ficha-card">
        <div class="ficha-card-title">¿Qué experiencia tiene en el Estado o en funciones de poder?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-3">
          <div class="ficha-field">
            <div class="ficha-field-label">Experiencia en el sector público</div>
            <div class="ficha-field-value">${c.expPublica || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Rol más relevante declarado</div>
            <div class="ficha-field-value">${c.experienciaLaboral || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Experiencia internacional</div>
            <div class="ficha-field-value">${c.expInternacional || 'No declara'}</div>
          </div>
        </div>
      </div>

      <!-- Trayectoria política + Sentencias (dos columnas) -->
      <div class="ficha-row-2">
        <div class="ficha-card">
          <div class="ficha-card-title">¿Ha tenido trayectoria política previa?</div>
          <hr class="ficha-divider">
          <div class="ficha-field">
            <div class="ficha-field-label">Cargos de elección popular</div>
            <div class="ficha-field-value">${c.cargosEleccion || 'No registra'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Cargos políticos o partidarios</div>
            <div class="ficha-field-value">${c.cargosPartidarios || 'No registra'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Continuidad política</div>
            <div class="ficha-field-value">${c.continuidad || 'No declara'}</div>
          </div>
        </div>

        <div class="ficha-card">
          <div class="ficha-card-title">¿Registra sentencias o procesos judiciales?</div>
          <hr class="ficha-divider">
          <div class="ficha-field">
            <div class="ficha-field-label">Sentencias judiciales declaradas</div>
            <div class="ficha-field-value ${c.delitos ? 'ficha-alerta' : ''}">${c.sentencias || 'No registra sentencias'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Demandas fundadas en su contra</div>
            <div class="ficha-field-value">${c.demandas || 'No registra'}</div>
          </div>
        </div>
      </div>

      <!-- Ingresos -->
      <div class="ficha-card ficha-card-ingresos">
        <div class="ficha-card-title">¿Cuánto dinero declara haber ganado?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-2">
          <div class="ficha-ingresos-amount">
            <div class="ficha-field-label">Ingresos anuales declarados (último año)</div>
            <div class="ficha-big-amount">${c.ingresos || 'No declara'}</div>
          </div>
          <div class="ficha-ingresos-origen">
            <div class="ficha-field-label">Origen principal de los ingresos</div>
            <div class="ficha-field-value">${c.origenIngresos || 'No declara'}</div>
          </div>
        </div>
      </div>

      <!-- Patrimonio -->
      <div class="ficha-card">
        <div class="ficha-card-title">¿Qué patrimonio declara?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-2">
          <div class="ficha-field">
            <div class="ficha-field-label">Bienes inmuebles</div>
            <div class="ficha-field-value">${c.inmuebles || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Bienes muebles (vehículos u otros)</div>
            <div class="ficha-field-value">${c.muebles || 'No declara'}</div>
          </div>
        </div>
      </div>

      <!-- Bio / resumen conjunto -->
      ${c.bio ? `
      <div class="ficha-card ficha-card-bio">
        <div class="ficha-bio-title">¿Qué nos dice su hoja de vida en conjunto?</div>
        <div class="ficha-bio-text">${c.bio}</div>
      </div>` : ''}

      <!-- Fuente -->
      <div class="ficha-card ficha-card-source">
        <div class="ficha-card-title">¿De dónde sale esta información?</div>
        <hr class="ficha-divider">
        <div class="ficha-source-text">
          <strong>Fuente:</strong><br>
          Declaración Jurada de Hoja de Vida presentada ante el Jurado Nacional de Elecciones (JNE).
        </div>
      </div>

      <!-- Descarga PDF -->
      <div class="ficha-pdf-row">
        <span class="ficha-pdf-label">Transparencia:</span>
        ${c.pdfLink
          ? `<a class="ficha-pdf-btn" href="${c.pdfLink}" target="_blank" rel="noopener">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               Descargar hoja de vida original en PDF
             </a>`
          : `<span class="ficha-pdf-btn ficha-pdf-disabled">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               Descargar hoja de vida original en PDF
             </span>`
        }
      </div>

    </div>
  `;
}

// ── HEMICICLOS ────────────────────────────────
function buildHemSVG(data, totalSeats) {
  const W=340, H=180, cx=W/2, cy=H, R=148, r=116;
  const entries = Object.entries(data);
  let dots=[];
  let rows=4;
  // place dots in arc rows
  for(let row=0;row<rows;row++){
    let rad = r+(R-r)*row/(rows-1);
    let arcLen = Math.PI*rad;
    let n = Math.round(totalSeats*(arcLen/(Math.PI*((R+r)/2)))/rows);
    for(let i=0;i<n;i++){
      let ang = Math.PI + (Math.PI*i/(n-1));
      dots.push({x:cx+rad*Math.cos(ang), y:cy+rad*Math.sin(ang)});
    }
  }
  dots = dots.slice(0,totalSeats);
  // assign colors
  let colored=[], offset=0;
  entries.forEach(([partido,count])=>{
    const meta=PARTIDOS[partido]||{color:'#ccc'};
    for(let i=0;i<count&&offset<dots.length;i++,offset++) colored.push(meta.color);
  });
  while(colored.length<dots.length) colored.push('#ccc');
  let svgDots = dots.map((d,i)=>`<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="4.5" fill="${colored[i]}"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <path d="M ${cx-R} ${cy} A ${R} ${R} 0 0 1 ${cx+R} ${cy}" fill="none" stroke="#e8e4dc" stroke-width="3"/>
    ${svgDots}
  </svg>`;
}

function buildHemiciclo(containerId, tipo, nivel) {
  const data = HEM[tipo][nivel];
  const total = tipo==='sen'?60:130;
  const entries = Object.entries(data);
  const mid = Math.ceil(entries.length/2);
  const leftEntries = entries.slice(0,mid);
  const rightEntries = entries.slice(mid);

  function badge(partido, count) {
    const meta=PARTIDOS[partido]||{sigla:'?',color:'#888',bg:'#eee'};
    const pct = Math.round(count/total*100);
    return `<div class="hem-logo-badge" style="border-color:${meta.color}20">
      <span style="color:${meta.color};font-size:.7rem;font-weight:700;text-align:center;line-height:1.2">${meta.sigla}</span>
      <div class="hem-tt">
        <strong>${partido}</strong><br>
        ${count} escaños &middot; ${pct}%
      </div>
    </div>`;
  }

  const leftHTML = leftEntries.map(([p,n])=>badge(p,n)).join('');
  const rightHTML = rightEntries.map(([p,n])=>badge(p,n)).join('');
  const svgHTML = buildHemSVG(data,total);
  const totalActual = Object.values(data).reduce((a,b)=>a+b,0);

  document.getElementById(containerId).innerHTML = `
<div class="hem-logos-col">${leftHTML}</div>
    <div class="hem-svg-wrap">
      ${svgHTML}
      <div class="hem-total-badge">${totalActual} / ${total} escaños</div>
    </div>
    <div class="hem-logos-col right">${rightHTML}</div>
  `;
}

// ── HEM TOGGLE ────────────────────────────────
function onHemToggle(input) {
  const block = input.closest('.hem-image-block');
  const idx = input.checked ? 1 : 0;
  block.querySelectorAll('.hem-toggle-opt').forEach((opt, i) => {
    opt.classList.toggle('active', i === idx);
  });
  const tabs = [...block.querySelectorAll('.hem-tab')];
  if (tabs[idx]) setHemImageTab(tabs[idx]);
}

// ── HEM-IMAGE-BLOCK: función genérica reutilizable ──────────────────────────
// Funciona con cualquier .hem-image-block: lee las imágenes desde data-attrs
// del bloque padre, hace fade suave y marca el tab activo dentro de ese bloque.
function setHemImageTab(btn) {
  const block = btn.closest('.hem-image-block');
  if (!block) return;

  // Actualizar tab activo SOLO dentro de este bloque
  block.querySelectorAll('.hem-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Determinar qué imagen mostrar (tab A = primero, tab B = segundo)
  const tabs = [...block.querySelectorAll('.hem-tab')];
  const idx  = tabs.indexOf(btn);
  const imgKey = idx === 0 ? 'tabAImg' : 'tabBImg';
  const newSrc = block.dataset[imgKey];

  const img = block.querySelector('.hem-img');
  if (!img || !newSrc || img.getAttribute('src') === newSrc) return;

  // Fade out → swap src → fade in
  img.classList.add('fading');
  const alt = btn.textContent.trim();
  setTimeout(() => {
    img.src = newSrc;
    img.alt = `Hemiciclo ${alt}`;
    img.classList.remove('fading');
  }, 250);

  // Alternar grupos de hotspots (--a / --b)
  const suffix = idx === 0 ? 'a' : 'b';
  block.querySelectorAll('.hem-hotspots').forEach(g => {
    g.hidden = !g.classList.contains(`hem-hotspots--${suffix}`);
  });
}

// Click/tap en hotspot → toggle tooltip (para móvil)
function clampTooltip(hs) {
    const tip = hs.querySelector('.hem-tooltip');
    if (!tip) return;
    tip.style.left = '';
    requestAnimationFrame(() => {
        const r = tip.getBoundingClientRect();
        const pad = 8;
        if (r.left < pad) {
            tip.style.left = `calc(50% + ${pad - r.left}px)`;
        } else if (r.right > window.innerWidth - pad) {
            tip.style.left = `calc(50% - ${r.right - (window.innerWidth - pad)}px)`;
        }
    });
}

document.addEventListener('click', function(e) {
  const hs = e.target.closest('.hem-hotspot');
  if (hs) {
    hs.closest('.hem-img-wrap').querySelectorAll('.hem-hotspot.is-open').forEach(h => {
      if (h !== hs) h.classList.remove('is-open');
    });
    hs.classList.toggle('is-open');
    if (hs.classList.contains('is-open')) clampTooltip(hs);
    e.stopPropagation();
    return;
  }
  document.querySelectorAll('.hem-hotspot.is-open').forEach(h => h.classList.remove('is-open'));
});

// ── MAPA ──────────────────────────────────────
function onMapaToggle(input) {
    const idx = input.checked ? 1 : 0;
    document.querySelectorAll('.mapa-toggle-opt').forEach((opt, i) => {
        opt.classList.toggle('active', i === idx);
    });
    const btns = [...document.querySelectorAll('.mapa-filter-btn')];
    if (btns[idx]) btns[idx].click();
}

function setMapaFiltro(tipo, btn) {
    mapaFiltro = tipo;
    document.querySelectorAll('.mapa-filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    if(selectedRegion) showMapaResults(selectedRegion);
}

function showMapaResults(regionId) {
    selectedRegion = regionId;
    const regionName = REGION_MAP[regionId]||regionId;
    const lista = document.getElementById('mapa-list');
    // normalize for matching
    const norm = s=>(s||'').toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u');
    const filtered = candidatos.filter(c=>
        c.tipoCandidatura === mapaFiltro &&
        norm(c.departamento||c.circunscripcion||'').includes(norm(regionName))
    );
    const regionHeader = `<div class="mapa-region-header">
        <span class="region-name-badge">${regionName}</span>
        <span class="mapa-region-count">( ${filtered.length}${filtered.length!==1? ' )': ' )'}</span>
    </div>`;
    if(!filtered.length) {
        lista.innerHTML = regionHeader + `<p class="mapa-empty">Sin candidatos registrados en esta región</p>`;
        return;
    }
    lista.innerHTML = regionHeader +
        filtered.map(c=>{
            const meta = PARTIDOS[c.partido] || {logo:'', sigla:'?', color:'#888', bg:'#eee'};
            const foto = c.fotoCandidato || '';
            return `<div class="mapa-cand-item">
                <img class="mapa-cand-logo" src="${meta.logo}" alt="${c.partido}">
                <img class="mapa-cand-photo" src="${foto}" alt="${c.nombre}">
                <div class="mapa-cand-info">
                <div class="mapa-cand-name">${c.nombre}</div>
                </div>
            </div>`;
    }).join('');
}

function initMapa() {
  document.querySelectorAll('#peru-svg .rpath').forEach(path=>{
    path.addEventListener('click', function(){
      document.querySelectorAll('#peru-svg .rpath').forEach(p=>p.classList.remove('selected'));
      this.classList.add('selected');
      showMapaResults(this.id);
    });
    path.addEventListener('mouseenter', function(){
      this.setAttribute('data-title', this.getAttribute('title'));
    });
  });
}

// ── PARALLAX STORIES ──────────────────────────
let pxFiltroActual = 'diputado';

function setPxFiltro(tipo, btn) {
  pxFiltroActual = tipo;
  // Update button styles
  document.querySelectorAll('.px-intro-tab').forEach(b => b.classList.remove('px-intro-tab--active'));
  btn.classList.add('px-intro-tab--active');
  // Recalculate and update stats
  const st = calcPxStats(tipo);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('px-stat-total',     st.total   || '—');
  set('px-stat-delitos',   st.delitos || '—');
  set('px-stat-mujeres',   st.mujeres ? st.mujeres + '%' : '—');
  set('px-stat-univ',      st.univ    ? st.univ    + '%' : '—');
  set('px-stat-delitos-2', st.delitos || '—');
  // Update faces grid to reflect tipo
  const grid = document.getElementById('px-faces-grid');
  if (grid) {
    grid.innerHTML = '';
    const sample = candidatos.filter(c => c.tipoCandidatura === tipo).slice(0, 84);
    sample.forEach((c, i) => {
      const face = document.createElement('div');
      face.className = 'px-face ' + (c.delitos ? (i % 3 === 0 ? 'px-face--red' : 'px-face--orange') : 'px-face--gray');
      face.title = c.nombre + ' · ' + c.partido;
      face.textContent = initiales(c.nombre);
      grid.appendChild(face);
    });
  }
  // Swap BG images (BG 1 y los px-bg-img--bg de los demás)
  document.querySelectorAll('.px-bg-img[data-src-dip]').forEach(img => {
    img.src = tipo === 'diputado' ? img.dataset.srcDip : img.dataset.srcSen;
  });
  // Regenerar hemiciclos SVG con datos del tipo correcto
  const hemKey  = tipo === 'diputado' ? 'dip' : 'sen';
  const total   = tipo === 'diputado' ? 130 : 60;
  const hemData = (HEM && HEM[hemKey] && HEM[hemKey].nacional) ? HEM[hemKey].nacional : {};
  ['px-hem-2', 'px-hem-3', 'px-hem-4'].forEach(id => {
    const wrap = document.getElementById(id);
    if (wrap) wrap.innerHTML = buildHemSVG(hemData, total);
  });
}

function calcPxStats(tipo) {
  tipo = tipo || pxFiltroActual || 'diputado';
  const sub = candidatos.filter(c => c.tipoCandidatura === tipo);
  const total = sub.length;
  const delitos = sub.filter(c => c.delitos).length;
  const mujeres = total ? Math.round(sub.filter(c => c.genero === 'F').length / total * 100) : 0;
  const univ    = total ? Math.round(sub.filter(c => c.educacionGrupo === 'universitario').length / total * 100) : 0;
  return { total, delitos, mujeres, univ };
}

function initPxStories() {
  /* ── 1. Stats ── */
  const st = calcPxStats(pxFiltroActual);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('px-stat-total',     st.total || '—');
  set('px-stat-delitos',   st.delitos);
  set('px-stat-mujeres',   st.mujeres + '%');
  set('px-stat-univ',      st.univ + '%');
  set('px-stat-delitos-2', st.delitos);

  /* ── 2. Hemiciclo SVGs into each bg ── */
  const hemData  = (HEM && HEM.dip && HEM.dip.nacional) ? HEM.dip.nacional : {};
  ['px-hem-1','px-hem-2','px-hem-3','px-hem-4'].forEach(id => {
    const wrap = document.getElementById(id);
    if (wrap) wrap.innerHTML = buildHemSVG(hemData, 130);
  });

  /* ── 3. Faces grid (BG 5) ── */
  const grid = document.getElementById('px-faces-grid');
  if (grid) {
    const dips = candidatos.filter(c => c.tipoCandidatura === 'diputado').slice(0, 84);
    dips.forEach((c, i) => {
      const face = document.createElement('div');
      face.className = 'px-face ' + (c.delitos ? (i % 3 === 0 ? 'px-face--red' : 'px-face--orange') : 'px-face--gray');
      face.title = c.nombre + ' · ' + c.partido;
      face.textContent = initiales(c.nombre);
      grid.appendChild(face);
    });
  }

  /* ── 4. Crossfade backgrounds + slide cards on scroll ── */
  const stories  = document.getElementById('px-stories');
  const bgsEl    = document.getElementById('px-bgs');
  const bgEls    = Array.from(document.querySelectorAll('.px-bg'));
  const scenes   = Array.from(document.querySelectorAll('.px-scene'));
  const cardEls  = Array.from(document.querySelectorAll('.px-card'));
  const VH       = () => window.innerHeight;

  function onScroll() {
    const scrollY   = window.scrollY;
    const storiesTop  = stories.getBoundingClientRect().top + scrollY;
    const storiesBot  = storiesTop + stories.offsetHeight;

    /* Show/hide the entire fixed-bg container */
    const visible = scrollY + VH() > storiesTop && scrollY < storiesBot;
    bgsEl.classList.toggle('px-vis', visible);
    if (!visible) return;

    /* For each scene compute a "center progress":
       progress = 0 when scene centre is at viewport bottom
       progress = 1 when scene centre is at viewport top        */
    scenes.forEach((scene, i) => {
      const rect      = scene.getBoundingClientRect();
      const sceneH    = scene.offsetHeight;
      const sceneMid  = rect.top + sceneH / 2;         // distance of mid from viewport top
      // progress: 0 = mid at bottom of viewport, 1 = mid at top
      const raw       = 1 - sceneMid / VH();
      const progress  = Math.max(0, Math.min(1, raw));

      /* ── Background opacity: full 1 in the middle third, fades in/out ── */
      const fadeZone  = 0.28;  // fraction of 0→1 used for fade in/out
      const fadeIn    = Math.min(1, progress / fadeZone);
      const fadeOut   = Math.min(1, (1 - progress) / fadeZone);
      bgEls[i].style.opacity = String(Math.min(fadeIn, fadeOut));

      /* ── Card: slides up once progress > 0.35 ── */
      const cardStart = 0.35;
      const cardProg  = Math.max(0, Math.min(1, (progress - cardStart) / 0.22));
      const ty        = (1 - cardProg) * 70;
      const op        = cardProg;
      cardEls[i].style.transform = `translateY(${ty.toFixed(1)}px)`;
      cardEls[i].style.opacity   = op.toFixed(3);
      // Override transition for scroll-driven (instant) vs IO-driven (smooth)
      cardEls[i].style.transition = cardProg > 0 && cardProg < 1
        ? 'none'
        : 'transform .95s cubic-bezier(.22,.68,0,1.15), opacity .8s ease';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on init
}

// ── GLOBAL FILTER ─────────────────────────────
function setFiltroGlobal(tipo, btn) {
  filtroGlobal = tipo;
  document.querySelectorAll('.hf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const input = document.getElementById('buscador-input');
  if (input) input.value = tipo === 'diputado' ? searchDiputado : searchSenador;
  renderBancadas();
}

function onBuscadorInput(val) {
  if (filtroGlobal === 'diputado') searchDiputado = val;
  else searchSenador = val;
  renderBancadas();
}

// ── PARLAMENTO ANDINO ──────────────────────────────
let paMiembros = [];

function initParlamentoAndino() {
    paMiembros = candidatos.filter(c => c.tipoCandidatura === 'parlamento_andino');
    const el = document.getElementById('pa-avatars');
    if (!el || paMiembros.length === 0) return;
    el.innerHTML = paMiembros.map((c, i) => {
        const foto = c.fotoCandidato || './img/fotos-candidatos/avatar-candidato.png';
        const meta = PARTIDOS[c.partido] || {};
        return `<div class="pa-avatar-card${i === 0 ? ' active' : ''}" onclick="showPaCV(${i},this)">
            <div class="pa-avatar-ring">
                <img src="${foto}" alt="${c.nombre}" class="pa-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
            </div>
            ${meta.logo ? `<img src="${meta.logo}" alt="${c.partido}" class="pa-partido-logo">` : ''}
            <div class="pa-nombre">${c.nombre}</div>
            ${c.edad ? `<div class="pa-edad">${c.edad} años</div>` : ''}
        </div>`;
    }).join('');
    showPaCV(0, el.querySelector('.pa-avatar-card'));
}

function showPaCV(idx, el) {
    const c = paMiembros[idx];
    if (!c) return;
    document.querySelectorAll('.pa-avatar-card').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    const panel = document.getElementById('pa-panel');
    const foto = c.fotoCandidato || './img/fotos-candidatos/avatar-candidato.png';
    const region = c.departamento || c.circunscripcion || '';
    panel.innerHTML = `
    <div class="ficha-wrap">
      <div class="ficha-header-card">
        <div class="ficha-header-inner">
          <div class="ficha-header-left">
            <div class="ficha-nombre">${c.nombre}</div>
            ${c.edad ? `<div class="ficha-edad">${c.edad} años</div>` : ''}
            ${region ? `<div class="ficha-region">Región: ${region}</div>` : ''}
          </div>
          <div class="ficha-avatar-wrap">
            <img src="${foto}" alt="${c.nombre}" class="ficha-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
          </div>
        </div>
      </div>
      <div class="ficha-card">
        <div class="ficha-card-title">¿Cuál es su perfil profesional?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-3">
          <div class="ficha-field">
            <div class="ficha-field-label">Profesión declarada</div>
            <div class="ficha-field-value">${c.profesion || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Formación más alta alcanzada</div>
            <div class="ficha-field-value">${c.formacion || c.educacionGrupo || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Campo principal de especialización</div>
            <div class="ficha-field-value">${c.especializacion || 'No declara'}</div>
          </div>
        </div>
      </div>
      <div class="ficha-card">
        <div class="ficha-card-title">¿Qué experiencia tiene en el Estado o en funciones de poder?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-3">
          <div class="ficha-field">
            <div class="ficha-field-label">Experiencia en el sector público</div>
            <div class="ficha-field-value">${c.expPublica || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Rol más relevante declarado</div>
            <div class="ficha-field-value">${c.experienciaLaboral || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Experiencia internacional</div>
            <div class="ficha-field-value">${c.expInternacional || 'No declara'}</div>
          </div>
        </div>
      </div>
      <div class="ficha-row-2">
        <div class="ficha-card">
          <div class="ficha-card-title">¿Ha tenido trayectoria política previa?</div>
          <hr class="ficha-divider">
          <div class="ficha-field">
            <div class="ficha-field-label">Cargos de elección popular</div>
            <div class="ficha-field-value">${c.cargosEleccion || 'No registra'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Cargos políticos o partidarios</div>
            <div class="ficha-field-value">${c.cargosPartidarios || 'No registra'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Continuidad política</div>
            <div class="ficha-field-value">${c.continuidad || 'No declara'}</div>
          </div>
        </div>
        <div class="ficha-card">
          <div class="ficha-card-title">¿Registra sentencias o procesos judiciales?</div>
          <hr class="ficha-divider">
          <div class="ficha-field">
            <div class="ficha-field-label">Sentencias judiciales declaradas</div>
            <div class="ficha-field-value ${c.delitos ? 'ficha-alerta' : ''}">${c.sentencias || 'No registra sentencias'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Demandas fundadas en su contra</div>
            <div class="ficha-field-value">${c.demandas || 'No registra'}</div>
          </div>
        </div>
      </div>
      <div class="ficha-card ficha-card-ingresos">
        <div class="ficha-card-title">¿Cuánto dinero declara haber ganado?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-2">
          <div class="ficha-ingresos-amount">
            <div class="ficha-field-label">Ingresos anuales declarados (último año)</div>
            <div class="ficha-big-amount">${c.ingresos || 'No declara'}</div>
          </div>
          <div class="ficha-ingresos-origen">
            <div class="ficha-field-label">Origen principal de los ingresos</div>
            <div class="ficha-field-value">${c.origenIngresos || 'No declara'}</div>
          </div>
        </div>
      </div>
      <div class="ficha-card">
        <div class="ficha-card-title">¿Qué patrimonio declara?</div>
        <hr class="ficha-divider">
        <div class="ficha-cols-2">
          <div class="ficha-field">
            <div class="ficha-field-label">Bienes inmuebles</div>
            <div class="ficha-field-value">${c.inmuebles || 'No declara'}</div>
          </div>
          <div class="ficha-field">
            <div class="ficha-field-label">Bienes muebles (vehículos u otros)</div>
            <div class="ficha-field-value">${c.muebles || 'No declara'}</div>
          </div>
        </div>
      </div>
      ${c.bio ? `
      <div class="ficha-card ficha-card-bio">
        <div class="ficha-bio-title">¿Qué nos dice su hoja de vida en conjunto?</div>
        <div class="ficha-bio-text">${c.bio}</div>
      </div>` : ''}
      <div class="ficha-card ficha-card-source">
        <div class="ficha-card-title">¿De dónde sale esta información?</div>
        <hr class="ficha-divider">
        <div class="ficha-source-text">
          <strong>Fuente:</strong><br>
          Declaración Jurada de Hoja de Vida presentada ante el Jurado Nacional de Elecciones (JNE).
        </div>
      </div>
      <div class="ficha-pdf-row">
        <span class="ficha-pdf-label">Transparencia:</span>
        ${c.pdfLink
          ? `<a class="ficha-pdf-btn" href="${c.pdfLink}" target="_blank" rel="noopener">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               Descargar hoja de vida original en PDF
             </a>`
          : `<span class="ficha-pdf-btn ficha-pdf-disabled">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               Descargar hoja de vida original en PDF
             </span>`
        }
      </div>
    </div>`;
}

// ── INIT ──────────────────────────────────────
(function init() {
  renderBancadas();
  initMapa();
  initPxStories();
  initParlamentoAndino();
})();
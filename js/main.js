// ── LOGOTIPOS DE PARTIDOS Y NÚMERO DE SENADORES Y DIPUTADOS EN EL HEMICICLO ────────────────────────────────
const PARTIDOS = {
    'AHORA NACION - AN':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/ahora-nacion.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },    
    'ALIANZA PARA EL PROGRESO':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-para-el-progreso.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'ALIANZA UNIDAD NACIONAL':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-unidad-nacional.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'AVANZA PAÍS':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/avanza-pais.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },
    'COOPERACIÓN POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/cooperacion-popular.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'APRA':   { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/apra.jpg',  color:'#c0392b', bg:'#fde8e8', total:{sen:8, dip:22} },
    'FE EN EL PERÚ':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/fe-en-el-peru.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FRENTE DE LA ESPERANZA':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/frente-esperanza.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FRENTE POPULAR AGRÍCOLA FIA DEL PERÚ':  { logo:'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/frepap.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FUERZA POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/fuerza-popular.jpg',  color:'#ff6b02', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'FUERZA Y LIBERTAD':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/alianza-fuerza-y-libertad.jpg',  color:'#e67e22', bg:'#fef5e8', total:{sen:22,dip:36} },
    'INTEGRIDAD DEMOCRÁTICA':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/integridad-democratica.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'JUNTOS POR EL PERU':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/juntos-por-el-peru.jpg',  color:'#60b123', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'LIBERTAD POPULAR':  { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/libertad-popular.jpg',  color:'#2980b9', bg:'#e8f4fd', total:{sen:18,dip:42} },
    'PARTIDO CIVICO OBRAS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/obras.jpg', color:'#015700', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PAÍS PARA TODOS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/pais-para-todos.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO DEMOCRÁTICO FEDERAL': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-federal.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO DEL BUEN GOBIERNO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-del-buen-gobierno.jpg', color:'#c4b90c', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO MORADO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-morado.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PARTIDO PATRIÓTICO DEL PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/partido-patriotico-del-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },  
    'PERÚ LIBRE': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-libre.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PERÚ MODERNO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-moderno.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PERÚ PRIMERO': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/peru-primero.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PRIMERO LA GENTE': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/primero-la-gente.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PODEMOS PERÚ': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/podemos-peru.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'PROGRESEMOS': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/progresemos.jpg', color:'#27ae60', bg:'#e8f8ef', total:{sen:12,dip:30} },
    'RENOVACION POPULAR': { logo:'https://nuevasnarrativasec.github.io/candidatos-2026/img/logos/renovacion-popular.jpg', color:'#019ddc', bg:'#e8f8ef', total:{sen:12,dip:30} },
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
  'PE-CAL':'Callao','PE-CUS':'Cusco','PE-HUC':'Huánuco',
  'PE-HUV':'Huancavelica','PE-ICA':'Ica','PE-JUN':'Junín',
  'PE-LAL':'La Libertad','PE-LAM':'Lambayeque','PE-LIM':'Lima',
  'PE-LOR':'Loreto','PE-MDD':'Madre de Dios',
  'PE-MOQ':'Moquegua','PE-PAS':'Pasco','PE-PIU':'Piura',
  'PE-PUN':'Puno','PE-SAM':'San Martín','PE-TAC':'Tacna',
  'PE-TUM':'Tumbes','PE-UCA':'Ucayali'
};

// ── STATE ─────────────────────────────────────
let filtroGlobal = 'diputado';
let mapaFiltro = 'diputado';
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
    Object.entries(grupos).sort((a, b) => b[1].length - a[1].length).forEach(([partido, miembros]) => {
        const meta = PARTIDOS[partido]||{sigla:partido.slice(0,3), color:'#888', bg:'#eee'};
        const card = document.createElement('div');
        card.className = 'bancada-card';
        card.style.borderColor = meta.color;
        card.style.borderWidth = '2px';
        card.innerHTML = `
        <div class="bc-sigla"><img src="${meta.logo}"></div>        
        <div class="bc-total">${miembros.length}</div>
    `;
    //<div class="bc-nombre">${partido}</div>
    card.onclick = () => openBancadaPanel(partido, miembros, card);
    grid.appendChild(card);
    });
    const allFiltered = Object.values(grupos).flat();
    if (q && allFiltered.length === 1) {
        const partido = allFiltered[0].partido;
        const cardEl = grid.querySelector('.bancada-card');
        if (cardEl) {
            openBancada = null; // prevent toggle-close on repeated auto-select
            openBancadaPanel(partido, grupos[partido], cardEl);
            const firstItem = document.getElementById('panel-list').querySelector('.panel-list-item');
            if (firstItem) showCV(0, firstItem);
        }
    } else {
        document.getElementById('bancada-panel').classList.remove('open');
        document.getElementById('bancada-panel').style.display='none';
        openBancada = null;
    }
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
        <div class="panel-list-item${c.nota ? ' panel-list-item--pendiente' : ''}" onclick="showCV(${i},this)" data-idx="${i}">
            <div class="pi-avatar" style="color:${meta.color}"><img src="${meta.logo}"></div>
            <div class="pi-name">${c.nombre}<br><span style="color: #000;font-size:.72rem">${c.circunscripcion||''}</span></div>
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
    const partidoColor = (PARTIDOS[c.partido] || {}).color || '#ED6A08';

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
            ${c.edad ? `<div class="ficha-meta-row"><span class="ficha-meta-lbl">Edad:</span> ${c.edad} años</div>` : ''}
            ${c.departamento ? `<div class="ficha-meta-row"><span class="ficha-meta-lbl">Lugar de nacimiento:</span> ${c.departamento}</div>` : ''}
            ${c.circunscripcion ? `<div class="ficha-meta-row"><span class="ficha-meta-lbl">Circunscripción:</span> ${c.circunscripcion}</div>` : ''}
          </div>
          <div class="ficha-avatar-wrap" style="border-color:${partidoColor}">
            <img src="${foto}" alt="${c.nombre}" class="ficha-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
          </div>
        </div>
      </div>

      ${c.nota ? `
      <!-- Nota de advertencia -->
      <div class="ficha-nota-dark">${c.nota}</div>` : ''}

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

      <!-- Fuente + Descarga PDF -->
      <div class="ficha-card ficha-card-source">
        <div class="ficha-bio-title">¿De dónde sale esta información?</div>
        <div class="ficha-source-pdf-row">
          <div class="ficha-source-text">
            <strong>Fuentes y alcance:</strong><br>
            Los datos provienen de las hojas de vida presentadas ante el JNE por los candidatos que obtuvieron una curul en las Elecciones 2026. Al tratarse de información declarada por cada postulante, pueden existir omisiones, imprecisiones o diferencias en los criterios de registro.
          </div>
          ${c.pdfLink
            ? `<a class="ficha-pdf-btn" href="${c.pdfLink}" target="_blank" rel="noopener">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                 Descargar hoja de vida original en PDF
               </a>`
            : `<span class="ficha-pdf-btn ficha-pdf-disabled">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                 Descargar hoja de vida original en PDF
               </span>`
          }
        </div>
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
  const footnote = block.querySelector('.hem-footnote');
  if (footnote) footnote.hidden = idx !== 1;
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
    const normRegion = norm(regionName);
    const isLima = normRegion === 'lima';
    const filtered = candidatos.filter(c=>{
        if(c.tipoCandidatura !== mapaFiltro) return false;
        const circ = norm(c.circunscripcion||'');
        if(circ === 'unico nacional') return isLima;
        if(isLima) return circ === 'lima' || circ === 'lima metropolitana';
        return circ === normRegion;
    });
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
    if(path.id === 'PE-LKT') {
      path.style.pointerEvents = 'none';
      path.style.cursor = 'default';
      path.style.opacity = '0.4';
      return;
    }
    path.addEventListener('click', function(){
      document.querySelectorAll('#peru-svg .rpath').forEach(p=>p.classList.remove('selected'));
      this.classList.add('selected');
      showMapaResults(this.id);
    });
    path.addEventListener('mouseenter', function(){
      this.setAttribute('data-title', this.getAttribute('title'));
    });
  });
  // Select Lima by default
  const limaPath = document.querySelector('#peru-svg .rpath#PE-LIM');
  if(limaPath) limaPath.classList.add('selected');
  showMapaResults('PE-LIM');
}

// ── PARALLAX STORIES ──────────────────────────
let pxFiltroActual = 'diputado';

const PX_CARD_CONTENT = {
  diputado: [
    {
      unit: 'Lejos de la paridad',
      desc: 'De los 130 diputados electos, <span class="cian">54 son mujeres (41%)</span> y <span class="verde">76 hombres (59%)</span>.'
    },
    {
      unit: 'Generación X al mando',
      desc: 'La edad promedio de los diputados electos es de 48 años. <span class="negro">El más joven tiene</span> <span class="cian">28 años</span> <span class="negro">y el de mayor edad,</span> <span class="verde">77</span>.'
    },
    {
      unit: 'Alta presencia de posgrado',
      desc: 'Según la información consignada en las hojas de vida presentadas ante el JNE, <span class="cian">37 diputados</span> electos cuentan con <span class="cian">grado de magíster</span> <span class="verde">y 5 con doctorado</span>.'
    },
    {
      unit: 'Romina Alejandra Uribe Sáenz <span style="color: #c4b90c; display: block;">Partido del Buen Gobierno</span>',
      desc: '<span class="negro">Es la diputada electa más joven.</span> Según su hoja de vida presentada ante el JNE, tiene 28 años.',
      logo: 'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/partido-del-buen-gobierno.jpg',
      logoAlt: 'Partido del Buen Gobierno'
    },
    {
      unit: 'Javier Alejandro Castro Cruz <span style="color: #ee6c0a; display: block;">Fuerza Popular</span>',
      desc: 'Según la información consignada en su hoja de vida presentada ante el JNE, Javier Alejandro Castro Cruz (Fuerza Popular) <span class="negro">registra cinco sentencias penales con penas cumplidas y cuatro sentencias no penales.</span> Las sentencias penales corresponden a procesos por difamación, injuria y calumnia, mientras que las no penales están vinculadas a materias familiar, alimentaria y contractual.',
      logo: 'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/fuerza-popular-2.jpg',
      logoAlt: 'Fuerza Popular'
    },
    {
      unit: 'Luis Aurelio Masco Cáceres <span style="color: #2c6111; display: block;">Partido Cívico Obras</span>',
      desc: 'Según su hoja de vida presentada ante el JNE, consigna ingresos superiores a <span class="negro">S/ 3,3 millones,</span> la cifra más alta entre los diputados electos.',
      logo: 'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/partido-civico-obras.jpg',
      logoAlt: 'Partido Cívico Obras'
    },
    {
      unit: 'Mayor representación femenina',
      desc: 'El Partido del Buen Gobierno registra la mayor proporción de mujeres entre las bancadas de diputados electos. De sus <span class="negro">14 escaños</span>, <span class="rojo">8 corresponden a mujeres</span> y <span class="amarillo">6 a hombres</span>.'
    },
    {
      unit: 'Sin educación universitaria',
      desc: 'Según la información consignada en las hojas de vida presentadas ante el JNE, el Partido Cívico Obras concentra la mayor cantidad de diputados electos que no registran estudios superiores. <span class="negro">Cuatro de sus representantes no consignan educación superior en sus declaraciones. </span>'
    },
    {
      unit: 'Más excongresistas',
      desc: 'Fuerza Popular es el partido con más diputados electos que registran experiencia parlamentaria previa. En total, <span class="negro">13 de sus representantes cuentan con antecedentes parlamentarios.</span>'
    },
    null
  ],
  senador: [
    {
      unit: 'Sin paridad',
      desc: 'De los 60 senadores electos, <span class="cian">16 son mujeres (27%)</span> y <span class="verde">44 hombres (73%)</span>.'
    },
    {
      unit: 'Baby Boomers al mando',
      desc: 'La edad promedio de los senadores electos es de 64 años. El menor registra <span class="cian">39 años</span> y el mayor <span class="verde">79</span>.'
    },
    {
      unit: 'Posgrado presente',
      desc: 'Según sus hojas de vida, <span class="cian">21 senadores</span> electos cuentan con <span class="cian">grado de magíster</span> <span class="verde">y 5 con doctorado</span>.'
    },
    {
      unit: 'Sentencias declaradas',
      desc: '<span class="cian">4 senadores electos</span> declaran sentencias penales en sus hojas de vida, mientras que <span class="verde">7 senadores consignan sentencias no penales</span> en los registros ante el JNE.'
    },
    null, // índice 4 → pxs-5, manejado por renderPxScene8 (senador)
    {
      unit: 'Elard Galo <span style="color: #ee6c0a; display: block;">Fuerza Popular</span>',
      desc: 'Según la información consignada en las hojas de vida presentadas ante el JNE, Elard Galo (Fuerza Popular) reporta <span class="negro">ingresos superiores a S/ 5,2 millones,</span> la cifra más alta entre los senadores electos.',
      logo: 'https://nuevasnarrativasec.github.io/congreso-2026/img/logos-partidos/fuerza-popular-2.jpg',
      logoAlt: 'Fuerza Popular'
    },
    {
      unit: 'Sin ingresos declarados',
      desc: 'Según la información consignada en las hojas de vida presentadas ante el JNE, <span class="negro">cinco senadores electos no registran ingresos declarados:</span> Sarafín Andrés Luján, Iber Antenor Olarte, Walter Francisco Gago Rodríguez, Lourdes Alcorta y Miguel Ángel Velásquez García.'
    },
    {
      unit: 'Mayor representación masculina',
      desc: 'Juntos por el Perú es la bancada con la mayor proporción de hombres entre los senadores electos. <span class="negro">De sus 11 escaños</span>, <span class="rojo">10 corresponden a hombres</span> y <span class="verde">1 a una mujer</span>.'
    },
    {
      unit: 'Sin estudios universitarios',
      desc: 'Juntos por el Perú concentra la mayor cantidad de senadores electos que no registran estudios universitarios. <span class="negro">Tres de sus representantes —Serafín Andrés Luján, José Mercedes Castillo Terrones y Andrés Avelino Ramos Huillcas— no consignan estudios universitarios en sus declaraciones.</span>'
    },
    {
      unit: 'Más excongresistas',
      desc: 'Fuerza Popular es el partido con más senadores electos que registran experiencia parlamentaria previa. <span class="negro">En total, 15 de sus representantes fueron congresistas en periodos anteriores.</span>'
    },
  ]
};

// ── PERSONAS SIN INGRESOS DECLARADOS (pxs-10 senadores) ──────────────────────
// Editable manualmente: agrega, quita o cambia el orden de los objetos
const PX_SEN10_PEOPLE = [
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/serafin-lujan.png',
    nombre:  'Sarafín Andrés Luján',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/iber-olarte.png',
    nombre:  'Iber Antenor Olarte',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/walter-gago.png',
    nombre:  'Walter Francisco Gago Rodríguez',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/lourdes-alcorta.png',
    nombre:  'Lourdes Alcorta',
    partido: 'RENOVACION POPULAR',
    display: 'Renovación Popular',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/miguel-velasquez.png',
    nombre:  'Miguel Ángel Velásquez García',
    partido: 'RENOVACION POPULAR',
    display: 'Renovación Popular',
  },
];

// ── PERSONAS SIN ESTUDIOS UNIVERSITARIOS (pxs-9 senadores) ───────────────────
// Editable manualmente: agrega, quita o cambia el orden de los objetos
const PX_SEN9_ESTUDIOS_PEOPLE = [
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/senadores/serafin-lujan.png',
    nombre:  'Serafín Andrés Luján',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/juntos-por-el-peru/jose-castillo-terrones.png',
    nombre:  'José Mercedes Castillo Terrones',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
  {
    foto:    'https://nuevasnarrativasec.github.io/congreso-2026/img/fotos-candidatos/juntos-por-el-peru/andres-avelino-ramos-huillcas.png',
    nombre:  'Andrés Avelino Ramos Huillcas',
    partido: 'JUNTOS POR EL PERU',
    display: 'Juntos por el Perú',
  },
];

function renderPxScene8(tipo) {
  const sceneId = tipo === 'senador' ? 'pxs-5' : 'pxs-8';
  const scene = document.getElementById(sceneId);
  if (!scene) return;
  const card = scene.querySelector('.px-card');
  if (!card) return;

  if (tipo === 'diputado') {
    // pxs-5 card structure is destroyed by renderPxScene8(senador); rebuild always.
    const pxs5 = document.getElementById('pxs-5');
    const pxs5Card = pxs5 ? pxs5.querySelector('.px-card') : null;
    if (pxs5Card) {
      pxs5Card.style.background = '';
      pxs5Card.style.boxShadow  = '';
      pxs5Card.style.maxWidth   = '';
      const c = PX_CARD_CONTENT.diputado[4];
      pxs5Card.innerHTML = `<div class="box-info-con-logo">
        <img src="${c.logo || ''}" alt="${c.logoAlt || ''}" width="100%">
        <div class="px-unit" style="line-height:1.2;">${c.unit}</div>
      </div>
      <p class="px-desc">${c.desc}</p>`;
    }
    return;
  }

  // Senador: custom card styles
  card.style.background  = 'transparent';
  card.style.boxShadow   = 'none';
  card.style.maxWidth    = '500px';

  // Senador: candidatos destacados con sentencias declaradas
  const PX_SEN_SENTENCIAS_NAMES = [
    'Walter Francisco Gago Rodríguez',
    'Percy Herbert Osorio Palpan'
  ];
  const allSenadores = (typeof candidatos !== 'undefined' ? candidatos : []).filter(c => c.tipoCandidatura === 'senador');
  const senConSentencias = PX_SEN_SENTENCIAS_NAMES.map(name => allSenadores.find(c => c.nombre === name)).filter(Boolean);

  const cardsHtml = senConSentencias.map(c => {
    const p = (typeof PARTIDOS !== 'undefined' && PARTIDOS[c.partido]) || {};
    const color = p.color || '#888';
    const logo  = p.logo  || '';
    const foto  = c.fotoCandidato || '';
    const avatarInner = foto
      ? `<img src="${foto}" alt="${c.nombre}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
      : `<span style="font-size:1rem;font-weight:700;color:#fff;background:${color};width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;">${(c.nombre||'').trim().split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</span>`;
    const sentDescHtml = (() => {
      const raw = (c.sentencias || '').replace(/^Sí\s+/i, '').trim();
      if (!raw) return '';
      const cap = raw.charAt(0).toUpperCase() + raw.slice(1);
      const highlighted = cap.replace(/(\d+\s+sentencias?(?:\s+no\s+penales?|\s+penales?)?)/i, '<span>$1</span>');
      return `<p>${highlighted}</p>`;
    })();
    return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;">
      <div style="flex-shrink:0;width:65px;height:65px;border-radius:50%;padding:2px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;overflow:hidden;background:${color};">
        ${avatarInner}
      </div>
      <div style="flex:1;background:#f5f8ff;border-radius:14px;padding:12px 25px;box-shadow:0 1px 5px rgba(0,0,0,.09);">            
            ${logo ? `<img src="${logo}" alt="${c.partido}" style="height:30px;object-fit:contain;margin-bottom:3px;display:inline-block; vertical-align:top;">` : ''}   
            <div class="info-candidato-sentencias" style="display:inline-block; vertical-align:top; line-height: 1.1; margin-bottom: 5px;">         
                <div style="font-family: 'Roboto', sans-serif; font-size:.85rem; font-weight:800;color:#111; display: inline-block; vertical-align: top;">${c.nombre}</div>
                <div style="font-family: 'Roboto', sans-serif; font-size:.85rem; font-weight:800;color:${color};margin-bottom:1px;">${c.partido}</div>
            </div>
        <div style="font-size:.72rem;color:#666;margin-top:2px;" class="texto-sentencia">${sentDescHtml}</div>
      </div>
    </div>`;
  }).join('');

  card.innerHTML = `  
    <div>${cardsHtml}</div>`;
}

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
  // Swap card content for scenes 1-7
  const cardContent = PX_CARD_CONTENT[tipo];
  if (cardContent) {
    ['pxs-1', 'pxs-2', 'pxs-3', 'pxs-4', 'pxs-5', 'pxs-6', 'pxs-7', 'pxs-8', 'pxs-9', 'pxs-10'].forEach((id, i) => {
      if (tipo === 'senador' && id === 'pxs-5') return; // handled by renderPxScene8
      const scene = document.getElementById(id);
      if (!scene || !cardContent[i]) return;
      const unit = scene.querySelector('.px-unit');
      const desc = scene.querySelector('.px-desc');
      if (unit) unit.innerHTML = cardContent[i].unit;
      if (desc) desc.innerHTML = cardContent[i].desc;
      const logoWrap = scene.querySelector('.box-info-con-logo');
      const logoImg = logoWrap ? logoWrap.querySelector('img') : null;
      const hasPartyUnit = cardContent[i].unit && cardContent[i].unit.includes('<span');
      if (logoImg) {
        logoImg.style.display = hasPartyUnit ? '' : 'none';
        if (hasPartyUnit && cardContent[i].logo) {
          logoImg.src = cardContent[i].logo;
          if (cardContent[i].logoAlt) logoImg.alt = cardContent[i].logoAlt;
        }
      }
      // People grid para pxs-7 senador (Sin ingresos declarados)
      if (id === 'pxs-7') {
        const wrap6 = scene.querySelector('.px-card-wrap');
        let grid = scene.querySelector('.px-people-grid');
        if (tipo === 'senador') {
          if (!grid && wrap6) {
            grid = document.createElement('div');
            grid.className = 'px-people-grid';
            wrap6.appendChild(grid);
            wrap6.style.flexDirection = 'column';
            wrap6.style.alignItems    = 'center';
          }
          if (grid) {
            grid.innerHTML = PX_SEN10_PEOPLE.map(p => {
              const col = (PARTIDOS[p.partido] || {}).color || '#888';
              return `<div class="px-person">
                <div class="px-person-avatar" style="border-color:${col};background:${col};">
                  <img src="${p.foto}" alt="${p.nombre}">
                </div>
                <div class="px-person-nombre">${p.nombre}</div>
                <div class="px-person-partido" style="color:${col};">${p.display || p.partido}</div>
              </div>`;
            }).join('');
          }
        } else {
          if (grid) grid.remove();
          if (wrap6) { wrap6.style.flexDirection = ''; wrap6.style.alignItems = ''; }
        }
      }
      // People grid para pxs-9 senador (Sin estudios universitarios)
      if (id === 'pxs-9') {
        const wrap9 = scene.querySelector('.px-card-wrap');
        let grid9 = scene.querySelector('.px-people-grid');
        if (tipo === 'senador') {
          if (!grid9 && wrap9) {
            grid9 = document.createElement('div');
            grid9.className = 'px-people-grid';
            wrap9.appendChild(grid9);
            wrap9.style.flexDirection = 'column';
            wrap9.style.alignItems    = 'center';
          }
          if (grid9) {
            grid9.innerHTML = PX_SEN9_ESTUDIOS_PEOPLE.map(p => {
              const col = (PARTIDOS[p.partido] || {}).color || '#888';
              return `<div class="px-person">
                <div class="px-person-avatar" style="border-color:${col};background:${col};">
                  <img src="${p.foto}" alt="${p.nombre}">
                </div>
                <div class="px-person-nombre">${p.nombre}</div>
                <div class="px-person-partido" style="color:${col};">${p.display || p.partido}</div>
              </div>`;
            }).join('');
          }
        } else {
          if (grid9) grid9.remove();
          if (wrap9) { wrap9.style.flexDirection = ''; wrap9.style.alignItems = ''; }
        }
      }
    });
  }
  const pxs4 = document.getElementById('pxs-4');
  if (pxs4) pxs4.style.display = '';
  const pxs10 = document.getElementById('pxs-10');
  if (pxs10) pxs10.style.display = tipo === 'diputado' ? 'none' : '';
  renderPxScene8(tipo);
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

    /* Show/hide the fixed-bg: only once #px-stories top has passed the viewport top */
    const visible = scrollY >= storiesTop && scrollY < storiesBot;
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
      // Hint opacity: show bg-1 at 0.8 as soon as section is visible, fades as crossfade takes over
      const hintOp    = (i === 0) ? 0.8 * Math.max(0, 1 - progress / (fadeZone * 1.5)) : 0;
      bgEls[i].style.opacity = String(Math.max(hintOp, Math.min(fadeIn, fadeOut)));

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

  // Apply default (diputado) card content so backgrounds match cards from the start
  const initDipBtn = document.getElementById('px-tab-dip');
  if (initDipBtn) setPxFiltro('diputado', initDipBtn);
}

// ── GLOBAL FILTER ─────────────────────────────
function setFiltroGlobal(tipo, btn) {
  const input = document.getElementById('buscador-input');
  const currentVal = input ? input.value : '';
  filtroGlobal = tipo;
  document.querySelectorAll('.hf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (input) {
    // Si había algo escrito, llevarlo al nuevo filtro; si no, restaurar lo que había
    const carryOver = currentVal.trim().length > 0;
    if (carryOver) {
      if (tipo === 'diputado') searchDiputado = currentVal;
      else searchSenador = currentVal;
      input.value = currentVal;
    } else {
      input.value = tipo === 'diputado' ? searchDiputado : searchSenador;
    }
    const wrap = document.querySelector('.hero-search');
    if (wrap) wrap.classList.toggle('has-value', input.value.trim().length > 0);
  }
  renderBancadas();
}

function onBuscadorInput(val) {
  const prevVal = filtroGlobal === 'diputado' ? searchDiputado : searchSenador;
  if (filtroGlobal === 'diputado') searchDiputado = val;
  else searchSenador = val;
  const wrap = document.querySelector('.hero-search');
  if (wrap) wrap.classList.toggle('has-value', val.trim().length > 0);
  // Scroll suave al entrar la primera letra
  if (val.trim().length > 0 && prevVal.trim().length === 0) {
    const filtros = document.querySelector('.box-filtros');
    if (filtros) filtros.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  renderBancadas();
}

function clearBuscador() {
  const input = document.getElementById('buscador-input');
  if (!input) return;
  input.value = '';
  onBuscadorInput('');
  input.focus();
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
        return `<div class="pa-avatar-card" onclick="showPaCV(${i},this)">
            <div class="pa-avatar-ring">
                <img src="${foto}" alt="${c.nombre}" class="pa-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
            </div>
            ${meta.logo ? `<img src="${meta.logo}" alt="${c.partido}" class="pa-partido-logo">` : ''}
            <div class="pa-nombre">${c.nombre}</div>
            ${c.edad ? `<div class="pa-edad">${c.edad} años</div>` : ''}
        </div>`;
    }).join('');
}

function showPaCV(idx, el) {
    const c = paMiembros[idx];
    if (!c) return;
    document.querySelectorAll('.pa-avatar-card').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    const panel = document.getElementById('pa-panel');
    const foto = c.fotoCandidato || './img/fotos-candidatos/avatar-candidato.png';
    const region = c.departamento || c.circunscripcion || '';
    const partidoColor = (PARTIDOS[c.partido] || {}).color || '#ED6A08';
    panel.innerHTML = `
    <div class="ficha-wrap">
      <div class="ficha-header-card">
        <div class="ficha-header-inner">
          <div class="ficha-header-left">
            <div class="ficha-nombre">${c.nombre}</div>
            ${c.edad ? `<div class="ficha-edad">${c.edad} años</div>` : ''}
            ${region ? `<div class="ficha-region">Región: ${region}</div>` : ''}
          </div>
          <div class="ficha-avatar-wrap" style="border-color:${partidoColor}">
            <img src="${foto}" alt="${c.nombre}" class="ficha-avatar-img" onerror="this.src='./img/fotos-candidatos/avatar-candidato.png'">
          </div>
        </div>
      </div>
      ${c.nota ? `<div class="ficha-nota-dark">${c.nota}</div>` : ''}
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
        <div class="ficha-bio-title">¿De dónde sale esta información?</div>
        <div class="ficha-source-pdf-row">
          <div class="ficha-source-text">
            <strong>Fuentes y alcance:</strong><br>
            Los datos provienen de las hojas de vida presentadas ante el JNE por los candidatos que obtuvieron una curul en las Elecciones 2026. Al tratarse de información declarada por cada postulante, pueden existir omisiones, imprecisiones o diferencias en los criterios de registro.
          </div>
          ${c.pdfLink
            ? `<a class="ficha-pdf-btn" href="${c.pdfLink}" target="_blank" rel="noopener">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                 Descargar hoja de vida original en PDF
               </a>`
            : `<span class="ficha-pdf-btn ficha-pdf-disabled">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                 Descargar hoja de vida original en PDF
               </span>`
          }
        </div>
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
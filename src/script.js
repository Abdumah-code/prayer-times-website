// ─── MONTH FILE MAP ──────────────────────────────────────────────────────────
const monthFiles = {
    0: 'january', 1: 'february', 2: 'march', 3: 'april',
    4: 'may', 5: 'june', 6: 'july', 7: 'august',
    8: 'september', 9: 'october', 10: 'november', 11: 'december'
};

// ─── PRAYER ICONS ────────────────────────────────────────────────────────────
const PRAYER_ICONS = {
    fajr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v1m0 16v1M4.2 4.2l.7.7m13.9 13.9.7.7M3 12h1m16 0h1M4.9 19.1l.7-.7M18.4 5.6l.7-.7"/><path d="M12 8a4 4 0 0 1 0 8" /></svg>`,
    shuruk: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.5-7.5-1.5 1.5m-9 9-1.5 1.5m13.5 0-1.5-1.5m-9-9L5.5 4.5"/></svg>`,
    thuhr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2"/></svg>`,
    asr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="5"/><path d="M3 12h1m16 0h1M12 3v1m0 16v1"/></svg>`,
    maghrib: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 19a7 7 0 0 1 14 0"/><path d="M12 3v2m-7 2 1.5 1.5M19 7l-1.5 1.5M3 13h2m14 0h2"/></svg>`,
    ishaa: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
};

const PRAYER_KEYS = ['fajr', 'shuruk', 'thuhr', 'asr', 'maghrib', 'ishaa'];

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const translations = {
    en: {
        title: 'Prayer Times',
        month: '',
        day: 'Day',
        fajr: 'Fajr', shuruk: 'Shuruk', thuhr: 'Dhuhr',
        asr: 'Asr', maghrib: 'Maghrib', ishaa: 'Ishaa',
        monthlyView: 'Monthly View', dailyView: 'Daily View',
        nextPrayer: 'Next Prayer',
        allPrayersDone: 'All prayers done for today',
        projectDescription: 'This website is a charitable project, completely free for the sake of Allah. May it help you pray on time. Keep us in your sincere prayers—may Allah bless this effort, benefit the Ummah, and reward everyone involved.',
        missionStatement: 'We created this website for free to help Muslims pray on time. May Allah accept it and make it beneficial for everyone.',
        memberName1: 'Abdullah', memberRole1: 'Web developer',
        memberName2: 'Ammar', memberRole2: 'UX designer'
    },
    sv: {
        title: 'Bönetider',
        month: '',
        day: 'Dag',
        fajr: 'Fajr', shuruk: 'Shuruk', thuhr: 'Dhuhr',
        asr: 'Asr', maghrib: 'Maghrib', ishaa: 'Ishaa',
        monthlyView: 'Månads Visning', dailyView: 'Daglig Visning',
        nextPrayer: 'Nästa bön',
        allPrayersDone: 'Alla böner är klara för idag',
        projectDescription: 'Denna webbplats är ett välgörenhetsprojekt, helt gratis för Allahs skull. Må den hjälpa dig att be i tid. Kom ihåg oss i dina böner — må Allah välsigna detta arbete, gynna umman och belöna alla inblandade.',
        missionStatement: 'Vi skapade denna webbplats gratis för att hjälpa muslimer att be i tid. Må Allah acceptera den och göra den till nytta för alla.',
        memberName1: 'Abdullah', memberRole1: 'Webbutvecklare',
        memberName2: 'Ammar', memberRole2: 'UX-designer'
    },
    ar: {
        title: 'مواقيت الصلاة',
        month: '',
        day: 'اليوم',
        fajr: 'الفجر', shuruk: 'الشروق', thuhr: 'الظهر',
        asr: 'العصر', maghrib: 'المغرب', ishaa: 'العشاء',
        monthlyView: 'عرض شهري', dailyView: 'عرض يومي',
        nextPrayer: 'الصلاة التالية',
        allPrayersDone: 'تمت جميع الصلوات لليوم',
        days: { Sunday: 'أحد', Monday: 'اثنين', Tuesday: 'ثلاثاء', Wednesday: 'أربعاء', Thursday: 'خميس', Friday: 'جمعة', Saturday: 'سبت' },
        projectDescription: 'هذا الموقع مشروع خيري مجاني تماماً لوجه الله تعالى. نرجو أن يساعدكم على أداء الصلاة في وقتها. لا تنسونا من صالح دعائكم — نسأل الله أن يبارك هذا الجهد وينفع به الأمة ويجزي كل من ساهم فيه.',
        missionStatement: 'أنشأنا هذا الموقع مجاناً لمساعدة المسلمين على أداء الصلاة في وقتها. نسأل الله أن يتقبله ويجعله نافعاً للجميع.',
        memberName1: 'عبد الله', memberRole1: 'مطور ويب',
        memberName2: 'عمار', memberRole2: 'مصمم تجربة المستخدم'
    }
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let currentLanguage = 'sv';
let currentView = 'monthly';
let countdownInterval = null;

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    loadPrayerTimes();
    updateHeroDate();
});

// ─── LANGUAGE ────────────────────────────────────────────────────────────────
function setLanguage(language) {
    currentLanguage = language;
    document.body.setAttribute('lang', language);

    const t = translations[language];

    document.getElementById('title').textContent = t.title;
    document.getElementById('day-header').textContent = t.day;
    document.getElementById('fajr-header').textContent = t.fajr;
    document.getElementById('shuruk-header').textContent = t.shuruk;
    document.getElementById('thuhr-header').textContent = t.thuhr;
    document.getElementById('asr-header').textContent = t.asr;
    document.getElementById('maghrib-header').textContent = t.maghrib;
    document.getElementById('ishaa-header').textContent = t.ishaa;

    document.getElementById('btn-monthly').textContent = t.monthlyView;
    document.getElementById('btn-daily').textContent = t.dailyView;

    document.getElementById('project-description').textContent = t.projectDescription;
    document.getElementById('mission-statement').textContent = t.missionStatement;
    document.getElementById('member-name-1').textContent = t.memberName1;
    document.getElementById('member-role-1').textContent = t.memberRole1;
    document.getElementById('member-name-2').textContent = t.memberName2;
    document.getElementById('member-role-2').textContent = t.memberRole2;

    updateSectionLabel();
    loadPrayerTimes();
    updateHeroDate();
}

// ─── VIEW TOGGLE ─────────────────────────────────────────────────────────────
function setView(view) {
    currentView = view;

    document.getElementById('btn-monthly').classList.toggle('active', view === 'monthly');
    document.getElementById('btn-daily').classList.toggle('active', view === 'daily');

    updateSectionLabel();
    loadPrayerTimes();
}

function updateSectionLabel() {
    const t = translations[currentLanguage];
    const label = currentView === 'monthly'
        ? t.monthlyView.toUpperCase()
        : t.dailyView.toUpperCase();

    document.getElementById('section-label').textContent = label;
}

// ─── HERO DATE ───────────────────────────────────────────────────────────────
function updateHeroDate() {
    const now = new Date();
    const locale = currentLanguage === 'ar' ? 'ar-EG' : currentLanguage;

    const dayName = now.toLocaleDateString(locale, { weekday: 'long' });
    const gregDate = now.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    document.getElementById('calendar-day').textContent = dayName;
    document.getElementById('calendar-gregorian-date').textContent = gregDate;

    const hijriLocale =
        currentLanguage === 'ar' ? 'ar-SA-u-ca-islamic' :
        currentLanguage === 'sv' ? 'sv-SE-u-ca-islamic' :
        'en-US-u-ca-islamic';

    const hijriDate = new Intl.DateTimeFormat(hijriLocale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);

    document.getElementById('calendar-islamic-date').textContent = hijriDate;
}

// ─── LOAD CSV ────────────────────────────────────────────────────────────────
async function loadPrayerTimes() {
    try {
        const now = new Date();
        const monthName = monthFiles[now.getMonth()];
        const year = now.getFullYear();
        const fileName = `data/${monthName} ${year}.csv`;

        const response = await fetch(fileName);

        if (!response.ok) {
            console.error(`Error fetching ${fileName}:`, response.statusText);
            return;
        }

        const text = await response.text();
        const rows = text.trim().split('\n').slice(1);

        const data = rows
            .map(row => row.split(','))
            .filter(cols => cols.length >= 8 && cols[0].trim());

        if (data.length > 0) {
            const sampleDate = new Date(data[0][0].trim());
            const localeCode = currentLanguage === 'ar' ? 'ar-EG' : currentLanguage;
            const monthLocalized = sampleDate.toLocaleString(localeCode, { month: 'long' });

            translations[currentLanguage].month = monthLocalized;
            document.getElementById('month-header').textContent = monthLocalized;
        }

        const todayFormatted = now.toLocaleDateString('en-CA');
        const todayRow = data.find(row => row[0].trim() === todayFormatted);

        const tableData = currentView === 'daily'
            ? data.filter(row => row[0].trim() === todayFormatted)
            : data;

        generatePrayerTable(tableData);
        populateTodayCard(todayRow);

        if (todayRow) startCountdown(todayRow);

    } catch (error) {
        console.error('Error loading CSV:', error);
    }
}

// ─── TODAY PRAYER CARD ───────────────────────────────────────────────────────
function populateTodayCard(todayRow) {
    const container = document.getElementById('today-prayer-list');
    if (!container) return;

    if (!todayRow) {
        container.innerHTML = '';
        return;
    }

    const times = todayRow.slice(2, 8).map(t => t.trim());
    const t = translations[currentLanguage];
    const names = [t.fajr, t.shuruk, t.thuhr, t.asr, t.maghrib, t.ishaa];
    const nextIdx = getNextPrayerIndex(times);

    container.innerHTML = PRAYER_KEYS.map((key, i) => {
        const isNext = i === nextIdx;

        return `
            <div class="prayer-row${isNext ? ' active' : ''}">
                <div class="prayer-left">
                    <span class="prayer-icon">${PRAYER_ICONS[key]}</span>
                    <span class="prayer-name">${names[i]}</span>
                </div>
                <div class="prayer-right">
                    <span class="prayer-time">${times[i]}</span>
                    ${isNext ? `<span class="countdown-badge" id="inline-countdown">–</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function getNextPrayerIndex(times) {
    const now = new Date();

    for (let i = 0; i < times.length; i++) {
        const [h, m] = times[i].split(':').map(Number);
        const prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);

        if (prayerTime > now) return i;
    }

    return -1;
}

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────
function startCountdown(todayRow) {
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => tickCountdown(todayRow), 1000);
    tickCountdown(todayRow);
}

function tickCountdown(todayRow) {
    const times = todayRow.slice(2, 8).map(t => t.trim());
    const nextIdx = getNextPrayerIndex(times);
    const timerEl = document.getElementById('countdown-timer');
    const badgeEl = document.getElementById('inline-countdown');
    const t = translations[currentLanguage];

    if (nextIdx === -1) {
        if (timerEl) timerEl.textContent = t.allPrayersDone;
        if (badgeEl) badgeEl.textContent = '✓';
        return;
    }

    const [h, m] = times[nextIdx].split(':').map(Number);
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    const diff = next - now;

    const hh = Math.floor(diff / 3600000);
    const mm = Math.floor((diff % 3600000) / 60000);
    const ss = Math.floor((diff % 60000) / 1000);

    const label = [t.fajr, t.shuruk, t.thuhr, t.asr, t.maghrib, t.ishaa][nextIdx];
    const timeStr = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;

    if (timerEl) timerEl.textContent = `${t.nextPrayer}: ${label} ${timeStr}`;
    if (badgeEl) badgeEl.textContent = timeStr;
}

// ─── TABLE ───────────────────────────────────────────────────────────────────
function generatePrayerTable(data) {
    const tbody = document.querySelector('.prayer-times tbody');
    const cardContainer = document.getElementById('prayer-cards-container');

    tbody.innerHTML = '';
    cardContainer.innerHTML = '';

    const isMobile = window.innerWidth <= 768;
    const todayFormatted = new Date().toLocaleDateString('en-CA');
    const t = translations[currentLanguage];

    data.forEach(row => {
        const date = new Date(row[0].trim());
        const dayNumber = date.getDate();
        const rowDateFormatted = date.toLocaleDateString('en-CA');
        const isToday = rowDateFormatted === todayFormatted;

        let dayName = date.toLocaleDateString(
            currentLanguage === 'ar' ? 'ar-EG' : currentLanguage,
            { weekday: 'long' }
        );

        if (currentLanguage === 'ar') {
            const engDay = date.toLocaleDateString('en-US', { weekday: 'long' });
            dayName = 'ال' + translations.ar.days[engDay];
        }

        if (isMobile) {
            const card = document.createElement('div');
            card.className = 'prayer-card' + (isToday ? ' highlight' : '');

            card.innerHTML = `
                <div><label>${t.month}:</label><span>${dayNumber}</span></div>
                <div><label>${t.day}:</label><span>${dayName}</span></div>
                <div><label>${t.fajr}:</label><span>${row[2].trim()}</span></div>
                <div><label>${t.shuruk}:</label><span>${row[3].trim()}</span></div>
                <div><label>${t.thuhr}:</label><span>${row[4].trim()}</span></div>
                <div><label>${t.asr}:</label><span>${row[5].trim()}</span></div>
                <div><label>${t.maghrib}:</label><span>${row[6].trim()}</span></div>
                <div><label>${t.ishaa}:</label><span>${row[7].trim()}</span></div>
            `;

            cardContainer.appendChild(card);
        } else {
            const tr = document.createElement('tr');
            if (isToday) tr.classList.add('highlight');

            tr.innerHTML = `
                <td>${dayNumber}</td>
                <td>${dayName}</td>
                <td>${row[2].trim()}</td>
                <td>${row[3].trim()}</td>
                <td>${row[4].trim()}</td>
                <td>${row[5].trim()}</td>
                <td>${row[6].trim()}</td>
                <td>${row[7].trim()}</td>
            `;

            tbody.appendChild(tr);
        }
    });
}

// ─── LEGACY COMPAT ───────────────────────────────────────────────────────────
function highlightToday(data) {
    // Handled by generatePrayerTable via .highlight class
}

function updateDateTime() {
    const el = document.getElementById('current-date-time');
    if (!el) return;

    const now = new Date();
    const locale = currentLanguage === 'ar' ? 'ar-EG' : currentLanguage;

    el.textContent = now.toLocaleDateString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

setInterval(updateDateTime, 1000);

// ─── SERVICE WORKER ──────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(reg => {
            console.log('Service Worker registered:', reg);

            if ('PeriodicSyncManager' in window) {
                reg.periodicSync.register('daily-sync', {
                    minInterval: 24 * 60 * 60 * 1000
                }).catch(err => console.error('Periodic Sync failed:', err));
            }
        })
        .catch(err => console.error('Service Worker registration failed:', err));
}

navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.action === 'highlight') highlightToday([]);
});

function downloadPrayerPDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    const now = new Date();
    const locale = currentLanguage === "ar" ? "ar-EG" : currentLanguage;

    const gregorianMonth = now.toLocaleDateString(locale, {
        month: "long",
        year: "numeric"
    });

    const hijriLocale =
        currentLanguage === "ar" ? "ar-SA-u-ca-islamic" :
        currentLanguage === "sv" ? "sv-SE-u-ca-islamic" :
        "en-US-u-ca-islamic";

    const islamicMonth = new Intl.DateTimeFormat(hijriLocale, {
        month: "long",
        year: "numeric"
    }).format(now);

    const title = "Bönetider";
    const subtitle = `Norrköping • ${gregorianMonth} • ${islamicMonth}`;

    const table = document.getElementById("prayer-times-table");
    const rows = [];

    table.querySelectorAll("tbody tr").forEach(tr => {
        const cells = [...tr.querySelectorAll("td")].map(td => td.textContent.trim());
        rows.push(cells);
    });

    const headers = [[
        "Datum",
        "Dag",
        "Fajr",
        "Shuruk",
        "Dhuhr",
        "Asr",
        "Maghrib",
        "Ishaa"
    ]];

    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text(title, 105, 22, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(subtitle, 105, 31, { align: "center" });

    doc.setDrawColor(30);
    doc.line(20, 38, 190, 38);

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 45,
        theme: "grid",
        styles: {
            font: "helvetica",
            fontSize: 9,
            halign: "center",
            valign: "middle",
            cellPadding: 2.2
        },
        headStyles: {
            fillColor: [32, 84, 69],
            textColor: [255, 255, 255],
            fontStyle: "bold"
        },
        alternateRowStyles: {
            fillColor: [245, 248, 247]
        },
        margin: {
            left: 12,
            right: 12
        }
    });

    const pageHeight = doc.internal.pageSize.height;

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(
        "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا",
        105,
        pageHeight - 18,
        { align: "center" }
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(
        "Sura An-Nisa 4:103",
        105,
        pageHeight - 12,
        { align: "center" }
    );

    const fileMonth = now.toLocaleDateString("en-US", { month: "long" }).toLowerCase();
    const fileYear = now.getFullYear();

    doc.save(`bonetider ${fileMonth} ${fileYear}.pdf`);
}
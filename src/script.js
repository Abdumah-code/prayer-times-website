const translations = {
    en: {
        title: 'Prayer Times',
        day: 'Day',
        fajr: 'Fajr',
        shuruk: 'Shuruk',
        thuhr: 'Thuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        ishaa: 'Ishaa'
    },
    sv: {
        title: 'Bönetider',
        day: 'Dag',
        fajr: 'Fajr',
        shuruk: 'Shuruk',
        thuhr: 'Dhuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        ishaa: 'Ishaa'
    },
    ar: {
        title: 'مواقيت الصلاة',
        day: 'اليوم',
        fajr: 'الفجر',
        shuruk: 'الشروق',
        thuhr: 'الظهر',
        asr: 'العصر',
        maghrib: 'المغرب',
        ishaa: 'العشاء',
        days: {
            Sunday: 'أحد',
            Monday: 'اثنين',
            Tuesday: 'ثلاثاء',
            Wednesday: 'أربعاء',
            Thursday: 'خميس',
            Friday: 'جمعة',
            Saturday: 'سبت'
        }
    }
};

let currentLanguage = 'en';
let currentView = 'monthly';

function setLanguage(language) {
    currentLanguage = language;
    document.body.setAttribute('lang', language);

    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('day-header').textContent = translations[language].day;
    document.getElementById('fajr-header').textContent = translations[language].fajr;
    document.getElementById('shuruk-header').textContent = translations[language].shuruk;
    document.getElementById('thuhr-header').textContent = translations[language].thuhr;
    document.getElementById('asr-header').textContent = translations[language].asr;
    document.getElementById('maghrib-header').textContent = translations[language].maghrib;
    document.getElementById('ishaa-header').textContent = translations[language].ishaa;

    loadPrayerTimes();
    updateDateTime();
}

function setView(view) {
    currentView = view;
    loadPrayerTimes();
}

async function loadPrayerTimes() {
    try {
        const response = await fetch('data/reformatted_prayer_times.csv');
        const text = await response.text();
        const rows = text.split('\n').slice(1);
        const data = rows.map(row => row.split(',')).filter(columns => columns.length >= 8 && columns[0]);

        const today = new Date();
        const todayFormatted = today.toLocaleDateString('en-CA');

        let filteredData;
        if (currentView === 'daily') {
            filteredData = data.filter(row => row[0].trim() === todayFormatted);
        } else {
            filteredData = data;
        }

        generatePrayerTable(filteredData);
        highlightToday(filteredData);
    } catch (error) {
        console.error('Error loading CSV:', error);
    }
}

function generatePrayerTable(data) {
    const tbody = document.querySelector('.prayer-times tbody');
    tbody.innerHTML = '';

    data.forEach(row => {
        const date = new Date(row[0].trim());

        let dayName;
        if (currentLanguage === 'ar') {
            const englishDayName = date.toLocaleDateString('en-US', { weekday: 'long' });
            dayName = 'ال' + translations.ar.days[englishDayName];
        } else {
            dayName = date.toLocaleDateString(currentLanguage, { weekday: 'long' });
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${dayName}</td>
            <td>${row[2].trim()}</td>
            <td>${row[3].trim()}</td>
            <td>${row[4].trim()}</td>
            <td>${row[5].trim()}</td>
            <td>${row[6].trim()}</td>
            <td>${row[7].trim()}</td>
        `;
        tbody.appendChild(tr);
    });
}

function highlightToday(data) {
    const today = new Date();
    const todayFormatted = today.toLocaleDateString('en-CA');
    const todayIndex = data.findIndex(row => row[0].trim() === todayFormatted);

    if (todayIndex === -1) {
        console.log('Today not found in data.');
        return;
    }

    const rows = document.querySelectorAll('.prayer-times tbody tr');
    rows.forEach((row, index) => {
        if (index === todayIndex) {
            row.classList.add('highlight');
            row.querySelectorAll('td').forEach(td => {
                td.style.backgroundColor = '#99ccff';
            });
        } else {
            row.classList.remove('highlight');
            row.querySelectorAll('td').forEach(td => {
                td.style.backgroundColor = '';
            });
        }
    });
}



function updateDateTime() {
    const dateTimeElement = document.getElementById('current-date-time');
    
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-EG' : currentLanguage, options);

    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', () => {
    loadPrayerTimes();
    updateDateTime();
});
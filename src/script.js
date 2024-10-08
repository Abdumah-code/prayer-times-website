const translations = {
    en: {
        title: 'Prayer Times',
        month: 'Oct',
        day: 'Day',
        fajr: 'Fajr',
        shuruk: 'Shuruk',
        thuhr: 'Thuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        ishaa: 'Ishaa',
        monthlyView: 'Monthly View',
        dailyView: 'Daily View',
        nextPrayer: 'Next Prayer',
        allPrayersDone: 'All prayers done for today'
    },
    sv: {
        title: 'Bönetider',
        month: 'Okt',
        day: 'Dag',
        fajr: 'Fajr',
        shuruk: 'Shuruk',
        thuhr: 'Dhuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        ishaa: 'Ishaa',
        monthlyView: 'Månads Visning',
        dailyView: 'Daglig Visning',
        nextPrayer: 'Nästa bön',
        allPrayersDone: 'Alla böner är klara för idag'
    },
    ar: {
        title: 'مواقيت الصلاة',
        month: 'أكتوبر',
        day: 'اليوم',
        fajr: 'الفجر',
        shuruk: 'الشروق',
        thuhr: 'الظهر',
        asr: 'العصر',
        maghrib: 'المغرب',
        ishaa: 'العشاء',
        monthlyView: 'عرض شهري',
        dailyView: 'عرض يومي',
        nextPrayer: 'الصلاة التالية',
        allPrayersDone: 'تمت جميع الصلوات لليوم',
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



let currentLanguage = 'sv';
let currentView = 'daily';

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('sv');
    loadPrayerTimes();
    updateDateTime();
    startCountdown();
});

function startCountdown(data) {
    const today = new Date();
    const todayFormatted = today.toLocaleDateString('en-CA');
    const todayData = data.find(row => row[0].trim() === todayFormatted);

    if (!todayData) {
        document.getElementById('countdown-timer').textContent = `${translations[currentLanguage].nextPrayer}: ${translations[currentLanguage].allPrayersDone}`;
        return;
    }

    function findNextPrayerTime() {
        const now = new Date();
        const prayerTimes = [
            todayData[2].trim(),
            todayData[3].trim(),
            todayData[4].trim(),
            todayData[5].trim(),
            todayData[6].trim(),
            todayData[7].trim()
        ];

        for (let time of prayerTimes) {
            const [hours, minutes] = time.split(':').map(Number);
            const prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (prayerTime > now) {
                return prayerTime;
            }
        }
        return null;
    }

    function updateCountdown() {
        const nextPrayerTime = findNextPrayerTime();

        if (!nextPrayerTime) {
            document.getElementById('countdown-timer').textContent = translations[currentLanguage].allPrayersDone;
            return;
        }

        const now = new Date();
        const timeDiff = nextPrayerTime - now;

        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').textContent = `${translations[currentLanguage].nextPrayer}: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}


function setLanguage(language) {
    currentLanguage = language;
    document.body.setAttribute('lang', language);

    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('month-header').textContent = translations[language].month;
    document.getElementById('day-header').textContent = translations[language].day;
    document.getElementById('fajr-header').textContent = translations[language].fajr;
    document.getElementById('shuruk-header').textContent = translations[language].shuruk;
    document.getElementById('thuhr-header').textContent = translations[language].thuhr;
    document.getElementById('asr-header').textContent = translations[language].asr;
    document.getElementById('maghrib-header').textContent = translations[language].maghrib;
    document.getElementById('ishaa-header').textContent = translations[language].ishaa;

    // Update the view toggle buttons
    document.querySelector('#view-toggle button:nth-child(1)').textContent = translations[language].monthlyView;
    document.querySelector('#view-toggle button:nth-child(2)').textContent = translations[language].dailyView;

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

        startCountdown(data);
    } catch (error) {
        console.error('Error loading CSV:', error);
    }
}


function generatePrayerTable(data) {
    const tbody = document.querySelector('.prayer-times tbody');
    const cardContainer = document.getElementById('prayer-cards-container');
    tbody.innerHTML = '';
    cardContainer.innerHTML = '';

    const isMobile = window.innerWidth <= 768;
    const today = new Date();
    const todayFormatted = today.toLocaleDateString('en-CA');

    data.forEach(row => {
        const date = new Date(row[0].trim());
        const dayNumber = date.getDate();
        const rowDateFormatted = date.toLocaleDateString('en-CA');
        
        let dayName = date.toLocaleDateString(currentLanguage, { weekday: 'long' });
        if (currentLanguage === 'ar') {
            const englishDayName = date.toLocaleDateString('en-US', { weekday: 'long' });
            dayName = 'ال' + translations.ar.days[englishDayName];
        }

        if (isMobile) {
            // Create a card for mobile
            const card = document.createElement('div');
            card.classList.add('prayer-card');

            // Highlight today's card
            if (rowDateFormatted === todayFormatted) {
                card.classList.add('highlight');
            }

            card.innerHTML = `
                <div><label>${translations[currentLanguage].month}:</label> <span>${dayNumber}</span></div>
                <div><label>${translations[currentLanguage].day}:</label> <span>${dayName}</span></div>
                <div><label>${translations[currentLanguage].fajr}:</label> <span>${row[2].trim()}</span></div>
                <div><label>${translations[currentLanguage].shuruk}:</label> <span>${row[3].trim()}</span></div>
                <div><label>${translations[currentLanguage].thuhr}:</label> <span>${row[4].trim()}</span></div>
                <div><label>${translations[currentLanguage].asr}:</label> <span>${row[5].trim()}</span></div>
                <div><label>${translations[currentLanguage].maghrib}:</label> <span>${row[6].trim()}</span></div>
                <div><label>${translations[currentLanguage].ishaa}:</label> <span>${row[7].trim()}</span></div>
            `;
            cardContainer.appendChild(card);

        } else {
            // Create table rows for larger screens
            const tr = document.createElement('tr');
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

            if (rowDateFormatted === todayFormatted) {
                tr.classList.add('highlight'); // Add highlight class for table row
            }

            tbody.appendChild(tr);
        }
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
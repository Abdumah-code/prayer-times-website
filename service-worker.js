self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'daily-sync') {
        event.waitUntil(syncDailyHighlight());
    }
});

async function syncDailyHighlight() {
    const today = new Date().toISOString().split('T')[0];
    const clients = await self.clients.matchAll();
    for (const client of clients) {
        client.postMessage({ action: 'highlight', date: today });
    }
}

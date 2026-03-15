// ============================================================
// PALAMINI AUTO — Configurazione Baserow
// ============================================================
// Dove trovare questi valori:
// - BASEROW_URL: di solito https://api.baserow.io (cloud ufficiale)
// - BASEROW_TOKEN: baserow.io → il tuo profilo → Settings → API tokens → crea uno nuovo
// - BASEROW_DATABASE_ID: apri il tuo database su Baserow → guarda l'URL
//   es. baserow.io/database/123/ → il numero è il DATABASE ID
// - BASEROW_PASSWORD: la password che vuoi usare per entrare nell'app
// ============================================================

const BASEROW_URL      = "https://api.baserow.io";
const BASEROW_TOKEN    = "CoWju8QeRzlV5or7HSoz6y1Zc8FhYSFm";
const BASEROW_PASSWORD = "segreto2026";

// Mappa nome foglio → ID tabella Baserow
// Trovi gli ID in: Settings → Database Token → vedi gli ID accanto ai nomi
// Oppure dall'URL quando sei dentro la tabella: /database/393688/table/885660/
const BASEROW_TABLES = {
    "SAT":        885660,
    "CALENDARIO": 885659,
    // Aggiungi le altre tabelle man mano che le importi:
    "_CONFIG": 886190,
    // "PNM":      000000,
    // "NOLEGGIO": 000000,
};

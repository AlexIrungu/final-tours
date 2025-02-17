const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// List of translation instances to try
const LIBRETRANSLATE_INSTANCES = [
    'https://translate.argosopentech.com',
    'https://libretranslate.de',
    'https://translate.terraprint.co'
];

app.post('/translate', async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    
    // Try each translation instance until one works
    for (const baseUrl of LIBRETRANSLATE_INSTANCES) {
        try {
            const response = await fetch(`${baseUrl}/translate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body),
                timeout: 5000 // 5 second timeout
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return res.json(data);
        } catch (error) {
            console.error(`Translation error for ${baseUrl}:`, error);
            // Continue to next instance if available
            continue;
        }
    }

    // If all instances failed
    return res.status(500).json({ 
        error: 'All translation services failed. Please try again later.',
        details: 'Unable to connect to any translation service'
    });
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
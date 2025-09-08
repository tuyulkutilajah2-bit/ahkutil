// render-config.js
const fs = require('fs');
const out = '/app/librechat.custom.json';
const cfg = {
  version: '1.2.8',
  endpoints: {
    custom: [{
      id: 'gemini-rotator',
      name: 'Gemini (Rotator)',
      type: 'google',
      baseURL: process.env.GEMINI_ROTATOR_BASE,
      apiKey: process.env.ROTATOR_DUMMY_KEY || 'rotator',
      headers: { 'x-rotator-secret': process.env.ROTATOR_SECRET },
      models: { default: ['gemini-2.5-pro','gemini-2.5-flash','gemini-2.0-flash'] },
      customParams: {
        defaultParamsEndpoint: 'google',
        stream: false,
        generationConfig: { responseMimeType: 'text/plain', maxOutputTokens: 1024 }
      },
      titleModel: 'gemini-2.5-flash',
      summarizeModel: 'gemini-2.5-flash'
    }]
  }
};
fs.writeFileSync(out, JSON.stringify(cfg, null, 2));
console.log('Wrote', out);

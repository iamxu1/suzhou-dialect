const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/vocabulary', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vocabulary.html'));
});

app.get('/api/vocabulary', (req, res) => {
    const category = req.query.category;
    const vocabularyPath = path.join(__dirname, 'data', 'vocabulary.json');
    
    fs.readFile(vocabularyPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading vocabulary data:', err);
            return res.status(500).json({ error: 'Failed to read vocabulary data' });
        }
        
        const vocabulary = JSON.parse(data);
        
        if (category && category !== 'all') {
            const filtered = vocabulary.filter(item => item.category === category);
            return res.json(filtered);
        }
        
        res.json(vocabulary);
    });
});

app.get('/api/categories', (req, res) => {
    const vocabularyPath = path.join(__dirname, 'data', 'vocabulary.json');
    
    fs.readFile(vocabularyPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading vocabulary data:', err);
            return res.status(500).json({ error: 'Failed to read vocabulary data' });
        }
        
        const vocabulary = JSON.parse(data);
        const categories = [...new Set(vocabulary.map(item => item.category))];
        res.json(categories);
    });
});

app.listen(PORT, () => {
    console.log(`苏州话教学网站运行在 http://localhost:${PORT}`);
});

document.addEventListener('DOMContentLoaded', function() {
    const vocabularyContainer = document.getElementById('vocabulary-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let currentCategory = 'all';
    
    // 加载词汇数据
    async function loadVocabulary(category = 'all') {
        try {
            const url = category === 'all' 
                ? '/api/vocabulary' 
                : `/api/vocabulary?category=${category}`;
            
            const response = await fetch(url);
            const vocabulary = await response.json();
            
            renderVocabulary(vocabulary);
        } catch (error) {
            console.error('加载词汇失败:', error);
            vocabularyContainer.innerHTML = '<div class="loading">加载失败，请刷新重试</div>';
        }
    }
    
    // 渲染词汇列表
    function renderVocabulary(vocabulary) {
        if (vocabulary.length === 0) {
            vocabularyContainer.innerHTML = '<div class="loading">暂无词汇数据</div>';
            return;
        }
        
        vocabularyContainer.innerHTML = vocabulary.map(item => `
            <div class="vocabulary-card">
                <div class="vocabulary-chinese">${item.chinese}</div>
                <div class="vocabulary-pinyin">${item.pinyin}</div>
                <div class="vocabulary-meaning">${item.meaning}</div>
                <div class="vocabulary-example">例：${item.example}</div>
                <div class="vocabulary-audio">
                    <button class="audio-btn" onclick="playAudio('${item.category}', '${item.id}', 'standard')">
                        ▶ 标准发音
                    </button>
                    <button class="audio-btn" onclick="playAudio('${item.category}', '${item.id}', 'slow')">
                        ▶ 慢速发音
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // 分类筛选按钮事件
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            loadVocabulary(currentCategory);
        });
    });
    
    // 初始加载
    loadVocabulary();
});
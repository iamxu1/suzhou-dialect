document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
    
    const vocabularyContainer = document.getElementById('vocabulary-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    console.log('找到元素:', { vocabularyContainer, filterButtons });
    
    if (!vocabularyContainer) {
        console.error('找不到 vocabulary-container 元素');
        return;
    }
    
    let currentCategory = 'all';
    
    function loadVocabulary(category = 'all') {
        console.log('加载词汇，分类:', category);
        
        try {
            let vocabulary = vocabularyData;
            
            if (category !== 'all') {
                vocabulary = vocabularyData.filter(item => item.category === category);
            }
            
            console.log('词汇数据:', vocabulary);
            renderVocabulary(vocabulary);
        } catch (error) {
            console.error('加载词汇失败:', error);
            vocabularyContainer.innerHTML = `<div class="loading">加载失败，请刷新重试<br>错误信息: ${error.message}</div>`;
        }
    }
    
    // 渲染词汇列表
    function renderVocabulary(vocabulary) {
        console.log('渲染词汇，数量:', vocabulary.length);
        
        if (!vocabulary || vocabulary.length === 0) {
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
        
        console.log('渲染完成');
    }
    
    // 分类筛选按钮事件
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('点击分类按钮:', this.dataset.category);
            
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            loadVocabulary(currentCategory);
        });
    });
    
    // 初始加载
    console.log('开始加载词汇');
    loadVocabulary();
});
let currentAudio = null;

function playAudio(category, word, type = 'standard') {
    const audioPath = `audio/${category}/${word}_${type}.mp3`;
    
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    currentAudio = new Audio(audioPath);
    
    currentAudio.play().catch(error => {
        console.error('Audio play error:', error);
        alert('音频文件暂未添加，请稍后再试');
    });
    
    currentAudio.onended = () => {
        currentAudio = null;
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

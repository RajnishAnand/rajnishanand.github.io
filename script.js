document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for terminal prompts
    const typingTexts = document.querySelectorAll('.typing-text');
    
    typingTexts.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        
        // Delay each section's typing animation
        setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50);
        }, index * 1000); // Stagger the animations
    });
    
    // Terminal cursor blinking effect
    const terminalPrompts = document.querySelectorAll('.terminal-prompt');
    
    terminalPrompts.forEach(prompt => {
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '█';
        prompt.appendChild(cursor);
        
        // Blink the cursor
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
    
    // Add noise texture to background
    function createNoiseTexture() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 200;
        canvas.height = 200;
        
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const value = Math.floor(Math.random() * 255);
            data[i] = value;     // red
            data[i + 1] = value; // green
            data[i + 2] = value; // blue
            data[i + 3] = 10;    // alpha
        }
        
        ctx.putImageData(imageData, 0, 0);
        return canvas.toDataURL();
    }
    
    // Add hover effect to links
    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.innerHTML = `> ${link.textContent}`;
        });
        
        link.addEventListener('mouseout', () => {
            link.innerHTML = link.textContent.replace('> ', '');
        });
    });
});

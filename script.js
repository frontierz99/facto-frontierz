const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.getAttribute('data-text');
            let i = 0;
            el.innerText = '';
            const timer = setInterval(() => {
                if (i < text.length) {
                    el.append(text[i]);
                    i++;
                } else { clearInterval(timer); }
            }, 40);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.decrypt').forEach(el => {
    el.setAttribute('data-text', el.innerText);
    el.innerText = '';
    observer.observe(el);
});
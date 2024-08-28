document.addEventListener("DOMContentLoaded", function() {
    const headlines = [
        "We Grow Your Profit With Tailored IT Solutions For Your Business",
        "Raising World Class Tech Professionals",
        "Innovating Technology for a Better Tomorrow",
        "Empowering Your Business with Cutting-Edge IT Solutions"
    ];

    const paragraphs = [
        "Welcome to Techifice, where we specialize in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to boosting productivity.",
        "At Techifice, we focus on developing tech professionals who excel in the industry. Our mission is to raise world-class talent that drives innovation.",
        "Our team at Techifice is committed to creating technological advancements that benefit your business and the community.",
        "With our state-of-the-art IT solutions, we ensure that your business is always at the forefront of technology and efficiency."
    ];

    let currentIndex = 0;

    function updateText() {
        const headlineElement = document.querySelector('.tg-element-title');
        const paragraphElement = document.querySelector('.hero3 p');

        // Create fade-out effect
        headlineElement.classList.add('fade-out');
        paragraphElement.classList.add('fade-out');

        setTimeout(() => {
            // Change text after fade-out
            headlineElement.textContent = headlines[currentIndex];
            paragraphElement.textContent = paragraphs[currentIndex];

            // Create fade-in effect
            headlineElement.classList.remove('fade-out');
            paragraphElement.classList.remove('fade-out');

            currentIndex = (currentIndex + 1) % headlines.length;
        }, 500); // Match the duration of fade-out
    }

    // Initial text setup
    updateText();

    // Change text every 3 seconds
    setInterval(updateText, 3000);
});

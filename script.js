function showComingSoon() {
    alert("Coming soon...");
}

// โค้ดสำหรับหน้า Welcome และ CV
document.addEventListener('DOMContentLoaded', (event) => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const cvContainer = document.querySelector('.cv-container');

    const welcomeDuration = 2500; // ระยะเวลาที่หน้า Welcome Fade Out เสร็จ (2 วินาที)
    const cvFadeInDelay = 500; // ระยะเวลาหน่วงก่อน CV จะ Fade In (0.5 วินาที)

    // กำหนดเวลาการแสดงหน้า Welcome
    setTimeout(() => {
        // เริ่ม fade out หน้า Welcome
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.visibility = 'hidden';

        // หน่วงเวลาก่อนที่ CV จะ Fade In
        setTimeout(() => {
            // ทำให้ CV Fade In
            cvContainer.style.visibility = 'visible';
            cvContainer.style.opacity = '1';
        }, cvFadeInDelay);

    }, welcomeDuration);
});
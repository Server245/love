document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    "หยิบโทรศัพท์ ขึ้นมาถ่ายหน่อยสิ 📱 ",
    "ดีงับ แฟนพี่ ❤️",
    "นี้ก็ 2 เดือนแล้วน้า ที่เราเป็นแฟนกัน",
    "ไวเนอะว่ามั้ย",
    "โห้ ถ้านับตั้งแต่จีบก็ 4 เดือนแล้วอ่ะ",
    "ไม่รู้นะมันอาจจะแค่ไม่กี่เดือนสำหรับหนู",
    "แต่สำหรับพี่แม่งนานอยู่นะ",
    "อยากให้นานกว่านี้จัง",
    "เห้ออ",
    "มีความสุขอ่ะ",
    "ไม่รู้พิมพ์ไรละนึกไม่ออก",
    "อ้อ",
    "รู้ละ",
    "พี่รักหนูนะ",
    "ถึงจะทะเลาะกันบ่อยไปนิด",
    "แต่พี่ก็",
    "ไม่เคยคิดจะทิ้งนุ่นไปไหน",
    "happy mensiversary 2M นะค้าบบ ❤",
    "i love you❤️ (อีกรอบ)",
    "อยู่ให้ครบทุก M นะ",
    "อิอิ💝"
];

let currentPage = 0;
let isLastPage = false;

function showMessage() {

    const $message = $('.message');{

    // เปลี่ยนข้อความ แต่ยังไม่แสดง (ซ่อน opacity = 0 ก่อน)
    $message
        .css('opacity', '0') // ซ่อนไว้ก่อน
        .text(messages[currentPage]); // อัปเดตข้อความ

    // ลบคลาสเก่าแล้วเพิ่มใหม่เพื่อเริ่มแอนิเมชัน
    $message.removeClass('fade-in');

    // ดีเลย์เล็กน้อยให้ DOM รีเซ็ตก่อนใส่คลาส
    setTimeout(() => {
        $message.addClass('fade-in');
    }, 10);
}

    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);



showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.play().catch(error => console.log('Autoplay prevented', error));
    }

    music.addEventListener('play', () => {
    });

    music.addEventListener('pause', () => {
    });

    setInterval(() => {
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);

function search() {
    var searchInput = document.getElementById('searchInput').value;
    var searchEngine = document.getElementById('searchEngine').value;
    var searchUrl = searchEngine + encodeURIComponent(searchInput);
    window.open(searchUrl, '_blank');
}

function navigateTo(url) {
    window.open(url, '_blank');
}

// 目标日期：2024年5月15日18:00
var targetDate = new Date("2024-05-15T18:00:00").getTime();

// 更新倒计时的函数
function updateCountdown() {
    // 当前日期和时间
    var now = new Date().getTime();
    
    // 距离目标日期的时间差（毫秒）
    var timeDiff = targetDate - now;

    // 计算剩余的天、小时、分钟和秒
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // 更新页面上显示的倒计时
    document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);

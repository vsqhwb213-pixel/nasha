// Проверка: вошел ли юзер
const user = localStorage.getItem('nasha_user');

if (!user && window.location.pathname.includes('create.html')) {
    alert("FAILED: Please log in to your account!");
    window.location.href = 'login.html';
}

// Функция сохранения проекта
function saveToCloud(videoUrl) {
    let projects = JSON.parse(localStorage.getItem('nasha_projects') || '[]');
    projects.push({
        author: user,
        link: videoUrl,
        time: new Date().toLocaleTimeString()
    });
    localStorage.setItem('nasha_projects', JSON.stringify(projects));
}


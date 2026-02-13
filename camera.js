async function startMedia() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('view').srcObject = stream;
    } catch (err) {
        console.error("No access to cam/mic", err);
    }
}

function applyFilter(type) {
    document.getElementById('view').style.filter = type;
}

startMedia();


function formatDate(date) {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [month.padStart(2, '0'), day.padStart(2, '0'), year].join('/');
}

function generateReport() {
    const projectName = document.getElementById('projectName').value;
    const weekStartDate = document.getElementById('weekStartDate').value;
    const weekEndDate = document.getElementById('weekEndDate').value;
    const upcomingUpdates = document.getElementById('upcomingUpdates').value;
    const workedOn = document.getElementById('workedOn').value;
    const pendingItems = document.getElementById('pendingItems').value;
    const needApproval = document.getElementById('needApproval').value;
    const delays = document.getElementById('delays').value;

    const formattedWeekStartDate = formatDate(weekStartDate);
    const formattedWeekEndDate = formatDate(weekEndDate);

    const reportOutput = document.getElementById('reportOutput');
    reportOutput.innerHTML = `
        <h2>Weekly Report for ${projectName}</h2>
        <p><strong>Week Date:</strong> ${formattedWeekStartDate} - ${formattedWeekEndDate}</p>
        <p><strong>Hey team, here's your weekly update for ${formattedWeekStartDate} - ${formattedWeekEndDate}:</strong></p>
        <p><strong>🚀 Upcoming Updates:</strong><br>${upcomingUpdates}</p>
        <p><strong>👩‍💻 What's been worked on this week:</strong><br>${workedOn}</p>
        <p><strong>⏳ Action/Pending items:</strong><br>${pendingItems}</p>
        <p><strong>✔️ Need approval:</strong><br>${needApproval}</p>
        <p><strong>⏰ Delays:</strong><br>${delays}</p>
    `;
    reportOutput.style.display = 'block';
    document.getElementById('downloadPDF').style.display = 'block';
}

function clearForm() {
    document.getElementById('reportForm').reset();
    document.getElementById('reportOutput').style.display = 'none';
    document.getElementById('downloadPDF').style.display = 'none';
}


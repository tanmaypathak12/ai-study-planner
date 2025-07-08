function generatePlan() {
  const subjects = document.getElementById("subjects").value.split(",").map(s => s.trim());
  const collegeHours = document.getElementById("collegeHours").value.split(",").map(s => s.trim());
  const totalStudyHours = parseInt(document.getElementById("totalHours").value);

  if (subjects.length === 0 || isNaN(totalStudyHours)) {
    alert("Please enter valid subjects and study hours.");
    return;
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Your Weekly Study Plan:</h3>";

  let studySlots = [];
  for (let hour = 6; hour < 24; hour++) {
    let skip = false;
    for (const cHour of collegeHours) {
      const [start, end] = cHour.split("-").map(Number);
      if (hour >= start && hour < end) {
        skip = true;
        break;
      }
    }
    if (!skip) studySlots.push(hour);
  }

  if (studySlots.length < totalStudyHours) {
    outputDiv.innerHTML += "<p>⚠️ Not enough hours available in your day after skipping college time!</p>";
    return;
  }

  let subjectIndex = 0;
  let planHTML = "<ul>";
  for (let i = 0; i < totalStudyHours; i++) {
    const hour = studySlots[i];
    const subject = subjects[subjectIndex];
    planHTML += `<li><strong>${hour}:00</strong> → ${subject}</li>`;
    subjectIndex = (subjectIndex + 1) % subjects.length;
  }
  planHTML += "</ul>";

  outputDiv.innerHTML += planHTML;
}

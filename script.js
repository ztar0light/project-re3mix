document.getElementById('theme-toggle-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    AOS.refresh();
});

function showFeatureDetails(featureNumber) {
    const allFeatureDetails = document.querySelectorAll('.feature-detail-content');

    allFeatureDetails.forEach(detail => detail.style.display = 'none');
    document.getElementById(`feature-detail-${featureNumber}`).style.display = 'block';
    document.getElementById('feature-details').style.display = 'block';
    document.getElementById(`feature-detail-${featureNumber}`).scrollIntoView({ behavior: 'smooth' });
}

AOS.init({
    duration: 1000,
    once: true
});

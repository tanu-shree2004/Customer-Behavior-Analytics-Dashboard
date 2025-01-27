// Sample data for charts
const purchasingData = [12, 19, 3, 5, 2, 3];
const preferencesData = [7, 11, 5, 8, 3];
const engagementData = [10, 15, 8, 12];

// Function to create charts
function createCharts() {
    const ctxPurchasing = document.getElementById('purchasingChart').getContext('2d');
    const purchasingChart = new Chart(ctxPurchasing, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Purchases',
                data: purchasingData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255,159,64,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxPreferences = document.getElementById('preferencesChart').getContext('2d');
    const preferencesChart = new Chart(ctxPreferences, {
        type: 'pie',
        data: {
            labels: ['Preference A', 'Preference B', 'Preference C', 'Preference D'],
            datasets: [{
                label: '% of Preferences',
                data: preferencesData,
                backgroundColor: [
                    'rgba(255,99,132)',
                    'rgba(54,162,235)',
                    'rgba(255,206,86)',
                    'rgba(75,192,192)'
                ],
                hoverOffset: 4
            }]
        }
    });

    const ctxEngagement = document.getElementById('engagementChart').getContext('2d');
    const engagementChart = new Chart(ctxEngagement,{
        type:'line',
        data:{
            labels:['January','February','March','April'],
            datasets:[{
                label:'Engagement Level',
                data:engagementData,
                fill:false,
                borderColor:'rgb(75 ,192 ,192)',
                tension:.1
            }]
        }
    });
}

// Initialize charts on page load
window.onload = createCharts;

document.addEventListener('DOMContentLoaded', function() {
    // Get stored login info
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    // Get the broker info from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const brokerId = urlParams.get('broker');
    const username = localStorage.getItem('username');

    // Set the username from login
    document.getElementById('username').value = username || 'user@example.com';

    // Update broker information based on the broker ID
    updateBrokerInfo(brokerId);

    // Form validation
    const brokerAuthForm = document.getElementById('broker-auth-form');
    const brokerPasswordInput = document.getElementById('broker-password');
    const passwordError = document.getElementById('password-error');
    const cancelBtn = document.getElementById('cancel-btn');

    brokerAuthForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        if (!brokerPasswordInput.value.trim()) {
            passwordError.style.display = 'block';
            return;
        } else {
            passwordError.style.display = 'none';
        }

        // Simulate broker connection
        const brokerName = document.getElementById('broker-name').textContent;
        const saveCredentials = document.getElementById('save-creds').checked;

        // In a real app, you would send this data to your backend
        console.log('Connecting to broker:', {
            broker: brokerName,
            username: document.getElementById('username').value,
            password: brokerPasswordInput.value,
            pin: document.getElementById('pin').value,
            saveCredentials: saveCredentials
        });

        // Simulate successful connection
        alert(`Successfully connected to ${brokerName}!`);

        // Store connected broker in local storage for demo
        const connectedBrokers = JSON.parse(localStorage.getItem('connectedBrokers') || '[]');
        if (!connectedBrokers.includes(brokerId)) {
            connectedBrokers.push(brokerId);
            localStorage.setItem('connectedBrokers', JSON.stringify(connectedBrokers));
        }

        // Redirect back to dashboard
        window.location.href = 'dashboard.html';
    });

    // Cancel button
    cancelBtn.addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });

    // Function to update broker information
    function updateBrokerInfo(brokerId) {
        const brokerIcons = {
            'angelone': '🔰',
            'zerodha': '🔶',
            'hdfc': '🏦',
            'icici': '💼',
            'upstox': '📊',
            'groww': '📈',
            'kotak': '💰',
            '5paisa': '💹'
        };

        const brokerNames = {
            'angelone': 'Angel One',
            'zerodha': 'Zerodha',
            'hdfc': 'HDFC Securities',
            'icici': 'ICICI Direct',
            'upstox': 'Upstox',
            'groww': 'Groww',
            'kotak': 'Kotak Securities',
            '5paisa': '5Paisa'
        };

        const brokerIcon = document.getElementById('broker-icon');
        const brokerName = document.getElementById('broker-name');

        if (brokerIcons[brokerId]) {
            brokerIcon.textContent = brokerIcons[brokerId];
        }

        if (brokerNames[brokerId]) {
            brokerName.textContent = brokerNames[brokerId];
            document.title = `InvestTrack - ${brokerNames[brokerId]} Authentication`;
        }
    }
});

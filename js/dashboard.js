document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
      window.location.href = 'index.html';
    }
    
    // Modal functionality
    const modal = document.getElementById('broker-modal');
    const addBrokerBtn = document.getElementById('add-broker-btn');
    const closeModal = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const viewPortfolioBtn = document.getElementById('view-portfolio-btn');
    
    addBrokerBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Form submission
    const brokerForm = document.getElementById('broker-form');
    
    brokerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const brokerSelect = document.getElementById('broker-select');
      const clientId = document.getElementById('client-id');
      const password = document.getElementById('password');
      
      // Validate form (simple validation)
      if (!brokerSelect.value) {
        alert('Please select a broker');
        return;
      }
      
      if (!clientId.value) {
        alert('Please enter your client ID');
        return;
      }
      
      if (!password.value) {
        alert('Please enter your password');
        return;
      }
      
      // Simulate connecting to broker
      alert(`Successfully connected to ${brokerSelect.options[brokerSelect.selectedIndex].text}`);
      
      // Close modal and reset form
      modal.style.display = 'none';
      brokerForm.reset();
      
      // In a real app, you would update the UI to show the newly connected broker
    });
    
    // Navigate to portfolio page
    viewPortfolioBtn.addEventListener('click', function() {
      window.location.href = 'portfolio.html';
    });
    
    // Make the broker cards clickable to show connection details (except add-broker)
    const brokerCards = document.querySelectorAll('.broker-card:not(.add-broker)');
    brokerCards.forEach(card => {
      card.addEventListener('click', function() {
        const brokerName = this.querySelector('.broker-name').textContent;
        const isConnected = this.querySelector('.broker-status').classList.contains('status-connected');
        
        if (isConnected) {
          alert(`You are connected to ${brokerName}. View your investments in the portfolio section.`);
        } else {
          // Open the modal to connect
          modal.style.display = 'block';
          // Find and select the appropriate broker in dropdown
          const brokerSelect = document.getElementById('broker-select');
          for (let i = 0; i < brokerSelect.options.length; i++) {
            if (brokerSelect.options[i].text === brokerName) {
              brokerSelect.selectedIndex = i;
              break;
            }
          }
        }
      });
    });
  });
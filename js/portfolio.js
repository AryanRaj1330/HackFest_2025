// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all tab content
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      // Show content corresponding to clicked tab
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId + '-content').classList.add('active');
    });
  });
  
  // Filter functionality
  document.getElementById('broker-filter').addEventListener('change', function() {
    filterHoldings();
  });
  
  document.getElementById('sort-filter').addEventListener('change', function() {
    sortHoldings();
  });
  
  document.getElementById('search-input').addEventListener('input', function() {
    searchHoldings();
  });
  
  // Refresh button action
  document.getElementById('refresh-btn').addEventListener('click', function() {
    alert('Refreshing portfolio data...');
    // Here you would make an API call to refresh the data
  });
  
  // Placeholder functions for filters
  function filterHoldings() {
    const broker = document.getElementById('broker-filter').value;
    console.log(`Filtering by broker: ${broker}`);
    // Actual filtering logic would go here
  }
  
  function sortHoldings() {
    const sortBy = document.getElementById('sort-filter').value;
    console.log(`Sorting by: ${sortBy}`);
    // Actual sorting logic would go here
  }
  
  function searchHoldings() {
    const query = document.getElementById('search-input').value;
    console.log(`Searching for: ${query}`);
    // Actual search logic would go here
  }
  
  // Function to simulate chart loading (for demo)
  function initializeCharts() {
    const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
    chartPlaceholders.forEach(placeholder => {
      placeholder.innerHTML = 'Chart loading...';
      setTimeout(() => {
        placeholder.innerHTML = placeholder.textContent.includes('pie chart') ? 
          'Asset allocation pie chart visualization (simulated)' : 
          'Portfolio performance visualization (simulated)';
      }, 1000);
    });
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
  });
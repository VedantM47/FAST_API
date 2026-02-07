// API base URL - change this if your API runs on a different port
const API_URL = "http://127.0.0.1:8000/crud";

async function callAPI(method) {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    
    // Disable all buttons during request
    buttons.forEach(btn => btn.disabled = true);
    
    // Show loading state
    resultElement.innerHTML = `
        <span class="status-indicator status-loading"></span>
        <span class="loading">Sending ${method} request...</span>
    `;
    
    try {
        // Prepare request options
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        // Add body for POST, PUT, PATCH requests
        if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
            options.body = JSON.stringify({
                name: `Sample ${method} data`,
                description: `This is a test ${method} request`
            });
        }
        
        // Make API call
        const response = await fetch(API_URL, options);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON response
        const data = await response.json();
        
        // Display success result
        displayResult(data, 'success');
        
    } catch (error) {
        // Display error
        displayError(error);
    } finally {
        // Re-enable all buttons
        buttons.forEach(btn => btn.disabled = false);
    }
}

function displayResult(data, status) {
    const resultElement = document.getElementById("result");
    
    let resultHTML = `
        <span class="status-indicator status-success"></span>
        <span class="success">SUCCESS</span><br><br>
        <strong>Operation:</strong> ${data.operation}<br>
        <strong>Message:</strong> ${data.message}<br>
    `;
    
    // Add data if present
    if (data.data) {
        resultHTML += `<strong>Data:</strong><br>${JSON.stringify(data.data, null, 2)}`;
    }
    
    resultElement.innerHTML = resultHTML;
}

function displayError(error) {
    const resultElement = document.getElementById("result");
    
    let errorMessage = error.message;
    
    // Provide helpful error messages
    if (error.message.includes('Failed to fetch')) {
        errorMessage = `Cannot connect to API server. 
        
Please make sure:
1. FastAPI server is running (use: uvicorn main:app --reload)
2. Server is running on http://127.0.0.1:8000
3. CORS is properly configured`;
    }
    
    resultElement.innerHTML = `
        <span class="status-indicator status-error"></span>
        <span class="error">ERROR</span><br><br>
        <strong>Message:</strong> ${errorMessage}
    `;
}

// Test API connection on page load
window.addEventListener('load', async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/');
        if (response.ok) {
            console.log('✅ API server is running and accessible');
        }
    } catch (error) {
        console.warn('⚠️ Cannot connect to API server. Make sure it is running.');
        document.getElementById("result").innerHTML = `
            <span class="status-indicator status-error"></span>
            <span class="error">API Server Not Running</span><br><br>
            Please start the FastAPI server using:<br>
            <code>uvicorn main:app --reload</code>
        `;
    }
});
document.getElementById('fundraiser-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const goal = parseFloat(document.getElementById('goal').value);
    const description = document.getElementById('description').value;

    // Creating a unique ID for each fundraiser (could be done more robustly with a backend system)
    const fundraiserId = title.toLowerCase().replace(/\s+/g, '-') + '-id'; // Simple slug generation

    // Creating a dummy raised amount (just for demonstration)
    const raised = Math.random() * goal; // Random raised amount for demo
    const progressPercentage = (raised / goal) * 100;

    const campaignSection = document.querySelector('.campaign-list');
    const campaignDiv = document.createElement('div');
    campaignDiv.classList.add('campaign');

    campaignDiv.innerHTML = `
        <h3><a href="fundraiser-details.html?id=${fundraiserId}">${title}</a></h3>
        <p>Raised: $${raised.toFixed(2)} / Goal: $${goal}</p>
        <div class="progress-bar">
            <div class="progress" style="width: ${progressPercentage}%;"></div>
        </div>
    `;

    campaignSection.appendChild(campaignDiv);

    // Reset the form after submission
    document.getElementById('fundraiser-form').reset();
});

// Simulated data for autocomplete suggestions
const suggestions = ["Consumer Rights", "Labor Laws", "Human Rights", "Property Rights", "Family Law", "Environmental Law"];

// Function to handle autocomplete suggestions
function showSuggestions() {
  const input = document.getElementById('issue').value.toLowerCase();
  const suggestionBox = document.getElementById('suggestions');
  suggestionBox.innerHTML = '';
  const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(input));
  filteredSuggestions.forEach(suggestion => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion');
    suggestionItem.textContent = suggestion;
    suggestionItem.addEventListener('click', () => {
      document.getElementById('issue').value = suggestion;
      suggestionBox.innerHTML = '';
    });
    suggestionBox.appendChild(suggestionItem);
  });
}

// Function to search laws based on user input
async function searchLaws() {
  const issue = document.getElementById('issue').value;
  // Call to legal API to fetch laws based on the entered issue
  const laws = await fetchLawsFromAPI(issue);
  displayLaws(laws);
}

// Function to fetch laws from a legal API
async function fetchLawsFromAPI(issue) {
    // Implement logic to fetch laws from a legal API based on the entered issue
    // Example: const response = await fetch(`https://legal-api.com/search?issue=${issue}`);
    //          const data = await response.json();
    //          return data.laws;
    // For demonstration, returning hardcoded laws
    return [
      { title: "Consumer Protection Act", description: "Laws related to consumer rights and protection." },
      { title: "Employment Rights Act", description: "Laws related to employment rights and obligations." },
      { title: "Human Rights Act", description: "Laws related to fundamental human rights and freedoms." },
      // Add more laws as needed
    ];
  }

// Function to display laws on the page
function displayLaws(laws) {
  const lawsContainer = document.getElementById('laws');
  lawsContainer.innerHTML = '';

  if (laws.length === 0) {
    lawsContainer.innerHTML = 'No laws found for the entered issue.';
    return;
  }

  laws.forEach(law => {
    const lawItem = document.createElement('div');
    lawItem.classList.add('law');
    lawItem.innerHTML = `
      <h3>${law.title}</h3>
      <p>${law.description}</p>
    `;
    lawsContainer.appendChild(lawItem);
  });
}

// Event listeners
document.getElementById('issue').addEventListener('input', showSuggestions);

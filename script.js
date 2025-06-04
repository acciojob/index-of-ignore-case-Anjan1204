// Function to find case-insensitive index of a substring
function indexOfIgnoreCase(str, subStr) {
  if (!subStr) return 0; // Edge case: empty substring always matches at index 0
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}

// Handle button click
function handleSearch() {
  const str = document.getElementById('mainStr').value;
  const subStr = document.getElementById('subStr').value;
  const index = indexOfIgnoreCase(str, subStr);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Result: ${index}`;
}

function initializeWebsite() {
  console.log('Template');
}

document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.navbar').style.display = 'flex'; // Display the navbar
  document.querySelector('.button').style.display = 'none'; // Hide the button
  document.querySelector('.spacer').style.display = 'none'; // Hide the spacer to keep title even
});

document.querySelector('.navitem').addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('navitem')) {
    document.querySelector('.navbar').style.display = 'none'; // Hide the navbar
    document.querySelector('.button').style.display = 'flex'; // Display the button
    document.querySelector('.spacer').style.display = 'flex'; // Display the spacer to keep title even
  }
});

export default initializeWebsite;

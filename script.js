function getAddressAndMapLink() {
  const lat = document.getElementById('lat').value;
  const lng = document.getElementById('lng').value;

  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      .then(response => response.json())
      .then(data => {
          const address = data.display_name;
          const mapLink = `https://maps.google.com/maps?q=${lat},${lng}`;

          document.getElementById('address').innerText = address;
        
          document.getElementById('mapLink').setAttribute('href', mapLink);
          document.getElementById('mapLink').innerText = mapLink;
          document.getElementById('AddBar').style.display = 'block';
          document.getElementById('LinkBar').style.display = 'block';
      
      })
      .catch(error => {
          console.log('Error:', error);
      });
}

function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const latitude = urlParams.get('lat');
  const longitude = urlParams.get('lng');

  if (latitude && longitude) {
      document.getElementById('lat').value = latitude;
      document.getElementById('lng').value = longitude;
      getAddressAndMapLink();
  }
}

window.onload = getURLParams;
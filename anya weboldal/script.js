// A modal megnyitása és a képek betöltése
function showAdditionalImages(propertyId) {
  const modal = document.getElementById('imageModal');
  const modalImages = document.getElementById('modalImages');

  // Töröljük az előző képeket
  modalImages.innerHTML = '';

  // Kép hozzáadása a modalhoz (pl. 3 képet adunk hozzá minden ingatlanhoz)
  for (let i = 1; i <= 3; i++) {
      let img = document.createElement('img');
      img.src = `./img/ház${propertyId}_${i}.jpg`;  // Példa: ház1_1.jpg, ház1_2.jpg, ház1_3.jpg
      img.alt = `Ház ${propertyId} - ${i}. kép`;
      modalImages.appendChild(img);
  }

  modal.style.display = 'block';
}

// A modal bezárása
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}


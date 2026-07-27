onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// === KODE UNTUK ANIMASI AMPLOP SPESIAL ===
const specialEnvelope = document.getElementById('envelope-wrapper');
let isSpecialEnvelopeOpened = false;

if (specialEnvelope) {
    specialEnvelope.addEventListener('click', () => {
        if (!isSpecialEnvelopeOpened) {
            specialEnvelope.classList.add('is-open');
            isSpecialEnvelopeOpened = true; 
        }
    });
}

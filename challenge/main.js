document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');
  const splash = document.querySelector('#splash');
  const loading = document.querySelector('#splash .loading');
  const startButton = document.querySelector('#splash .start-button');

  const creditsToggle = document.querySelector('#splash .show-credits');
  const creditsList = document.querySelector('#splash .credits-list');

  const emitEvent = (eventName, listeners) => {
    listeners.forEach((listener) => {
      const el = document.querySelector(listener);
      el.emit(eventName);
    })
  };

  const emitMediaEvent = (eventType, listeners) => {
    listeners.forEach((listener) => {
      const el = document.querySelector(listener);
      el.components.sound[eventType]();
    })
  };

  const activateSoundsForTouch = () => {
    const sounds = document.querySelectorAll('a-sound')
    sounds.forEach((soundEl) => {
      soundEl.components.sound.playSound();
      soundEl.components.sound.stopSound();
    })
  };

  scene.addEventListener('loaded', function(e) {
    setTimeout(() => {
      loading.style.display = 'none';
      splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
      startButton.style.opacity = 1;
      creditsToggle.style.opacity = 1;
    }, 50);
  });

  creditsToggle.addEventListener('click', function(e) {
    e.preventDefault();

    var display = creditsList.style.display === 'none' ||
      creditsList.style.display === '' ? 'block' : 'none';

    creditsList.style.display = display;

    return false;
  });

  startButton.addEventListener('click', function(e) {
    activateSoundsForTouch();
    splash.style.display = 'none';
  });
  document.querySelector('#putin').addEventListener('click', function(e) {
    document.querySelector('#door').emit('open');
    document.querySelector('#rig').emit('microw');
  });
  document.querySelector('#closem').addEventListener('click', function(e) {
    document.querySelector('#door').emit('close');
  });
  document.querySelector('#play1').addEventListener('click', function(e) {
    document.querySelector('#m-light').emit('close');
        document.querySelector('#bag').emit('microwin3');
          document.querySelector('#bag').emit('microwin4');
        document.querySelector('#bagbig').emit('bigbag2');
        document.querySelector('#bagbig').emit('bigbag');
        document.querySelector('#pop').emit('bigpop2');
        document.querySelector('#pop').emit('bigpop');
        document.querySelector('#video1').emit('play130');
        document.querySelector('#video1').emit('end130');
        document.querySelector('#progress').emit('mw130');
        document.querySelector('#bar').emit('mw130b');
  });
  document.querySelector('#play2').addEventListener('click', function(e) {
        document.querySelector('#video2').emit('play30');
        document.querySelector('#video2').emit('end30');
        document.querySelector('#progress').emit('mw30');
        document.querySelector('#bar').emit('mw30b');
        document.querySelector('#pop2').emit('smpop2');
        document.querySelector('#pop2').emit('smpop');
        document.querySelector('#bagbig').emit('bigbag4');
  });
  document.querySelector('#stop').addEventListener('click', function(e) {
        document.querySelector('#door').emit('open');
        document.querySelector('#m-light').emit('open');
  });

  document.querySelector('#right').addEventListener('click', function(e) {
    document.querySelector('#bag').emit('microwin');
    document.querySelector('#bag').emit('microwin2');

  })
  document.querySelector('#final').addEventListener('click', function(e) {
            document.querySelector('#bagbig').emit('bigbag3');
            document.querySelector('#door').emit('close');
            document.querySelector('#comp').emit('done');
            document.querySelector('#comp').emit('done2');
          });

});

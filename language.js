function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


// When the page loads, check if a language is set in cookies and use it
document.addEventListener('DOMContentLoaded', function () {
  var selectedLanguage = getCookie('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }
});

function changeLanguage(language) {
  // Get all the text content that needs to be translated
  var translatableElements = document.querySelectorAll('[data-translate]');

  // Define translation texts for English and Polish
  var translations = {
    en: {
      home: 'Home',
      about: 'About',
      games: 'Games',
      contact: 'Contact',
      welcome: "Welcome to Koder's website",
      desc: 'Koder is an aspiring game developer who is passionate about creating unique and exciting games.',
      learnmore: 'Learn More',
      game1desc: 'Survive as the hamster and prepare to get out of the home',
      game2desc: 'Run with your hamster through apocalyptic world',
      game3desc: 'Asteroid Rain is my first game in Unity. It is about avoiding flying asteroids in space',
      game4desc: 'A game about shooting with Power Ups and more...',
      game5desc: 'You are a superhero and you kill people instead of rescuing them',
      game6desc: 'Dive into a dirty ocean and clean it! Be aware of oxygen and other dangers!',
      game7desc: 'You can find other games on my itch.io',
      game8desc: "Survive in Klaus Schwab's world and reduce your carbon footprint!",
      game7: 'Other Games',
      project1title: 'Esp8266 WiFi robot',
      project1desc: 'A simple robot made with the esp8266 and L298N module',
      buttonrobot: 'See how it works ⚙',
      latestgames: 'Latest Games',
      download: 'Download Now! 🎮',
      seenow: 'See now 👀',
      copyright: ' &copy; 2023 Koder. All rights reserved',
      aboutme: 'Aspiring game developer working on games for mobile and PC <br> One year of experience with Unity and C#.<br> Proficient with version control systems like git.',
      skillstitle:'Skills',
      codelanguages:'Programming languages: C#',
      gameengines:'Game engines: Unity',
      grafics:'Graphics software: Pixelorama , Canva ',
      sound:'Sound design software: Audacity, BoscaCeoil',
      AI:'AI systems: Chat GPT, Dalle 2, Midjourney, Bing AI',
      otherprojects: 'Other projects:',
      socials:'Socials:',
      yt:'Click to go to the Youtube📷',
      tk:'Click to go to Tiktok📱',
      tw:'Click to go to X',
      dc:'Click to go to Discord💻',
      contact:'Contact:',
      linktree:'All my other socials',
    },
    pl: {
      home: 'Strona główna',
      about: 'O mnie',
      games: 'Gry',
      contact: 'Kontakt',
      welcome: 'Witaj na stronie Kodera',
      desc: 'Koder to początkujący twórca gier, którego pasją jest tworzenie wyjątkowych i ekscytujących gier.',
      learnmore: 'Dowiedz się więcej',
      game1desc: 'Przetrwaj jako chomik i przygotuj się do ucieczki z domu',
      game2desc: 'Biegnij ze swoim chomikiem przez apokaliptyczny świat',
      game3desc: 'Asteroid Rain to moja pierwsza gra w Unity. Chodzi w niej o unikanie latających asteroid w kosmosie',
      game4desc: 'Gra o strzelaniu z powerupami i nie tylko...',
      game5desc: 'Jesteś superbohaterem i zamiast ratować, zabijasz ludzi',
      game6desc: 'Zanurz się w brudnym oceanie i oczyść go! Uważaj na tlen i inne niebezpieczeństwa!',
      game7desc: 'Inne gry znajdziesz na moim itch.io',
     game8desc: "Przetrwaj w świecie Klausa Schwaba i zmniejsz swój ślad węglowy!",
    
      game7: 'Inne gry',
      project1title: 'Robot Esp8266 WiFi',
      project1desc: 'Prosty robot wykonany z modułu esp8266 i L298N',
      buttonrobot: 'Zobacz jak to działa ⚙',
      latestgames: 'Najnowsze gry',
      seenow: 'Zobacz już teraz 👀',
      download: 'Pobierz już teraz! 🎮',
      copyright: ' &copy; Wszelkie Prawa Zastrzeżone. 2023 Koder. ',
      aboutme: 'Aspirujący twórca gier pracujący nad grami na urządzenia mobilne i PC <br> Rok doświadczenia z Unity i C#.<br> Dobry w systemach kontroli wersji, takich jak git.',
      skillstitle: 'Umiejętności',
      codelanguages:'Języki programowania: C#',
      gameengines:'Silniki gry: Unity',
      grafics:'Oprogramowanie graficzne: Pixelorama, Canva',
      sound:'Oprogramowanie do projektowania dźwięku: Audacity, BoscaCeoil',
      AI:'Systemy AI: Czat GPT, Dalle 2, Midjourney, Bing AI',
      socials:'Media Społecznościowe:',
      yt:'Kliknij, aby przejść do Youtube📷',
      tk:'Kliknij, aby przejść do Tiktoka📱',
      tw:'Kilknij, aby przejść do X',
      dc:'Kilknij, aby przejść do Discorda💻',
      otherprojects:'Inne projekty',
      contact1:'Kontakt:',
      linktree:'Wszystkie moje inne media społecznościowe',
    }
  };

  // Update text content based on the selected language
  translatableElements.forEach(element => {
    var key = element.getAttribute('data-translate');
    element.innerHTML = translations[language][key];
  });

  setCookie('selectedLanguage', language, 30); // Cookie expires in 30 days
}

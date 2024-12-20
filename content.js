function moveStreamInfo() {
  const checkInterval = setInterval(() => {
    // Präziserer Selektor für das Twitch-Element
    const streamInfo = document.querySelector('div[class*="ScTransitionBase"][class*="channel-root__upper-watch"]');
    const targetElement = document.querySelector('div[class*="root-scrollable"][data-a-target="root-scroller"]');
    
    if (streamInfo && targetElement) {
      clearInterval(checkInterval);
      
      // Sicherstellen, dass das ursprüngliche Styling erhalten bleibt
      const originalStyle = streamInfo.getAttribute('style');
      
      // Element verschieben
      targetElement.parentNode.insertBefore(streamInfo, targetElement.nextSibling);
      
      // Ursprüngliches Styling wiederherstellen und anpassen
      streamInfo.setAttribute('style', `${originalStyle} margin-top: 1rem;`);
      
      console.log('Stream Info wurde verschoben und Styling angepasst');
    }
  }, 1000); // Prüfe jede Sekunde
}

// Initiales Ausführen
moveStreamInfo();

// Erneut ausführen bei Navigation/Seitenwechsel innerhalb von Twitch
document.addEventListener('visibilitychange', moveStreamInfo);
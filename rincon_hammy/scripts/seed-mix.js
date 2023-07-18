document.addEventListener("DOMContentLoaded", function() {
    const logoDiscord = document.getElementById("logoDiscord");
  
    if (logoDiscord) {
      logoDiscord.addEventListener("mouseover", () => {
        logoDiscord.setAttribute("src", "img/discord_mouseover.png");
      });
  
      logoDiscord.addEventListener("mouseout", () => {
        logoDiscord.setAttribute("src", "img/discord.png");
      });
    } else {
      console.error("El elemento con ID 'logoDiscord' no se encuentra en el DOM.");
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const logoDiscord = document.getElementById("logo_ig");
  
    if (logoDiscord) {
      logoDiscord.addEventListener("mouseover", () => {
        logoDiscord.setAttribute("src", "img/Instagram_mouseover.png");
      });
  
      logoDiscord.addEventListener("mouseout", () => {
        logoDiscord.setAttribute("src", "img/Instagram.png");
      });
    } else {
      console.error("El elemento con ID 'logo_tiktok' no se encuentra en el DOM.");
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const logoDiscord = document.getElementById("logo_tiktok");
  
    if (logoDiscord) {
      logoDiscord.addEventListener("mouseover", () => {
        logoDiscord.setAttribute("src", "img/Tiktok_mouseover.png");
      });
  
      logoDiscord.addEventListener("mouseout", () => {
        logoDiscord.setAttribute("src", "img/Tiktok.png");
      });
    } else {
      console.error("El elemento con ID 'logo_tiktok' no se encuentra en el DOM.");
    }
  });
  
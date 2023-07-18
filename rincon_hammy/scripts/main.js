const socialNetwork_click = document.getElementById("logo_ds");

socialNetwork_click.addEventListener("mouseover", () => {
    const mySrc = socialNetwork_click.getAttribute("src");
    if (mySrc === "img/discord.png") {
        socialNetwork_click.setAttribute("src", "img/discord_mouseover.png");
    } else {
        socialNetwork_click.setAttribute("src", "img/discord.png"   );
    }
});

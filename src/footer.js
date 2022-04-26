const footer = document.getElementsByTagName("footer")[0];

const renderFooter = () => {
    const creditsBuilder = document.createElement("div");
    creditsBuilder.classList.add("credits");
    const gameLink = document.createElement("a");
    gameLink.innerHTML = "Restaurant built by Air_Canada787 - www.roblox.com";
    gameLink.href = "https://www.roblox.com/games/3398014311/Restaurant-Tycoon-2";
    creditsBuilder.appendChild(gameLink);
    const creditsIcons = document.createElement("div");
    creditsIcons.classList.add("credits");
    const iconsLink = document.createElement("a");
    iconsLink.innerHTML = "Icons taken from Font Awesome - www.fontawesome.com";
    iconsLink.href = "https://fontawesome.com/";
    creditsIcons.appendChild(iconsLink);
    
    footer.appendChild(creditsBuilder);
    footer.appendChild(creditsIcons);
}

export { renderFooter }
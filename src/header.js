const header = document.getElementsByTagName("header")[0];

const renderHeader = () => {
    const nav = document.createElement("nav");
    const navItems = document.createElement("ul");
    navItems.classList.add("nav-items");
    nav.appendChild(navItems);
    const navBtns = ["Home", "Menu", "Contact"];
    for (let i=0; i<navBtns.length; i++) {
        const navItem = document.createElement("li");
        const navItemLink = document.createElement("a");
        navItem.appendChild(navItemLink);
        navItemLink.id = `${navBtns[i]}`;
        navItemLink.innerText = `${navBtns[i]}`;
        navItems.appendChild(navItem);
    }
    nav.appendChild(navItems);

    header.appendChild(nav);
}

export { renderHeader }
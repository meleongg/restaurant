import Lemonade from "../src/images/menu/lemonade.jpeg";
import StrawMango from "../src/images/menu/straw-mango.jpeg";
import Shrimp from "../src/images/menu/shrimp.jpeg";
import Squid from "../src/images/menu/squid.jpeg";
import Lobster from "../src/images/menu/lobster.jpeg";
import Octopus from "../src/images/menu/octopus.jpeg";

const content = document.getElementById("content");

const beverages = [{name: "Lemonade", 
                    price: 3, 
                    desc: "Freshly squeezed lemonade to quench your thirst.", 
                    photo: Lemonade}, 
                   {name: "Strawberry Mango Smoothie", 
                    price: 5, 
                    desc: "The restaurant owner's very own favourite strawberry mango smoothie.", 
                    photo: StrawMango}];

const apps = [{name: "Shrimp Tasters",
               price: 12,
               desc: "Awesome shrimp tasters for shrimps.",
               photo: Shrimp},
              {name: "Grilled Squid",
               price: 13.50,
               desc: "Enjoy fresh squid caught from Squid Game.",
               photo: Squid}];
              
const mains = [{name: "Lobster Deluxe",
                price: 24.50,
                desc: "Muscular dungeoness lobster.",
                photo: Lobster},
               {name: "Octopus Mix",
                price: 22,
                desc: "A mix of every type of octopus out there, whether cashier, handsome, or rich.",
                photo: Octopus}];

const menu = [{name: "Beverages",
               arr: beverages}, 
              {name: "Appetizers",
               arr: apps}, 
              {name: "Main Courses",
               arr: mains}];

const createTitle = (name) => {
    const title = document.createElement("div");
    title.classList.add("category-title");
    const header = document.createElement("h2");
    header.innerText = `${name}`;
    title.appendChild(header);
    return title;
}

const renderMenu = () => {
    for (let i=0; i<menu.length; i++) {
        const title = createTitle(menu[i].name);
        let menuPart = menu[i].arr;
        content.appendChild(title);
        for (let j=0; j<menuPart.length; j++) {
            let menuItemObj = menuPart[j];

            const menuItem = document.createElement("div");
            menuItem.classList.add("card");
            menuItem.classList.add("menu-item");

            const itemTitle = document.createElement("div");
            itemTitle.classList.add("menu-item-title");

            const itemName = document.createElement("h2");
            itemName.classList.add("card-heading");
            itemName.innerText = `${menuItemObj.name}`;
            itemTitle.appendChild(itemName);

            const itemPrice = document.createElement("h2");
            itemPrice.classList.add("price");
            itemPrice.innerText = `$${menuItemObj.price}`; 
            itemTitle.appendChild(itemPrice);

            const itemText = document.createElement("p");
            itemText.classList.add("card-text");
            itemText.innerText = `${menuItemObj.desc}`;

            const itemImg = new Image();
            itemImg.src = menuItemObj.photo;
            menuItem.appendChild(itemTitle);
            menuItem.appendChild(itemText);
            menuItem.appendChild(itemImg);

            content.appendChild(menuItem);
        }
    }
}

export { renderMenu }
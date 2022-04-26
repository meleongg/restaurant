import AirCan from "../src/images/contact/manager.png";
import ManOf from "../src/images/contact/marketing.png";
import Dar from "../src/images/contact/beta-tester.png";

const content = document.getElementById("content");

const AC787 = {name: "Air_Canada787",
               position: "Owner",
               phone: "473-398-9328",
               email: "goatMan@roblox.com",
               photo: AirCan}

const MOC = {name: "ManOfChenna",
            position: "Manager",
            phone: "438-293-0238",
            email: "theGoatest@roblox.com",
            photo: ManOf}

const DT = {name: "Dareetos",
            position: "Food Safety",
            phone: "233-589-0230",
            email: "doritos@roblox.com",
            photo: Dar}

const contacts = [AC787, MOC, DT];

const renderContact = () => {
    for (let i=0; i<contacts.length; i++) {
        let contact = contacts[i];

        const contactItem = document.createElement("div");
        contactItem.classList.add("card");
        contactItem.classList.add("contact-item");

        const contactItemContainer = document.createElement("div");
        contactItemContainer.classList.add("contact-item-container");
        contactItem.appendChild(contactItemContainer);

        const textInfo = document.createElement("div");
        textInfo.classList.add("text-info");
        contactItemContainer.appendChild(textInfo);

        const name = document.createElement("h2");
        name.classList.add("card-heading");
        name.classList.add("person-name");
        name.innerText = contact.name;
        textInfo.appendChild(name);

        const contactInfo = document.createElement("div");
        contactInfo.classList.add("contact-info");
        textInfo.appendChild(contactInfo);

        const position = document.createElement("p");
        position.classList.add("position");
        position.innerText = contact.position;
        contactInfo.appendChild(position);

        const phone = document.createElement("p");
        phone.classList.add("phone");
        phone.innerText = contact.phone;
        contactInfo.appendChild(phone);

        const email = document.createElement("p");
        email.classList.add("email");
        email.innerText = contact.email;
        contactInfo.appendChild(email);

        const avatar = new Image();
        avatar.src = contact.photo;
        contactItemContainer.appendChild(avatar);

        content.appendChild(contactItem);
    }
}

export { renderContact }
function selectTruck(truckName) {

    document.getElementById("truck").value = truckName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


document
    .getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const wilaya =
            document.getElementById("wilaya").value.trim();

        const commune =
            document.getElementById("commune").value.trim();

        const truck =
            document.getElementById("truck").value;

        const message =
            document.getElementById("message").value.trim();


        const whatsappNumber = "213564095631";


        const text =
`🚛 *GROUP TIRSAM BATNA*

📋 *Nouvelle demande*

👤 Nom: ${firstName}
👤 Prénom: ${lastName}
📞 Téléphone: ${phone}

📍 Wilaya: ${wilaya}
🏘️ Commune: ${commune}

🚛 Véhicule demandé:
${truck}

📝 Message:
${message}

Merci.`;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

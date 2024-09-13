const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');

        const features = {
            battery: {
                title: "Long Battery Life",
                description: "Our speaker boasts an impressive 20-hour battery life, ensuring your music keeps playing throughout your day or night. The built-in 4400mAh rechargeable battery can be fully charged in just 4 hours via USB-C."
            },
            water: {
                title: "Water Resistant",
                description: "With an IPX7 rating, this speaker is fully protected against water immersion up to 1 meter for 30 minutes. Perfect for pool parties, beach days, or singing in the shower!"
            },
            sound: {
                title: "Powerful Sound",
                description: "Experience room-filling sound with our advanced audio technology. Dual 10W drivers and passive radiators deliver crisp highs, rich mids, and deep bass for an immersive listening experience."
            }
        };

        function openModal(feature) {
            modalTitle.textContent = features[feature].title;
            modalDescription.textContent = features[feature].description;
            modal.style.display = "block";
        }

        function closeModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }
let selectedColor = 'Black';
        let quantity = 1;

        function selectColor(element) {
            document.querySelectorAll('.color-option').forEach(option => option.classList.remove('selected'));
            element.classList.add('selected');
            selectedColor = element.getAttribute('data-color');
        }

        function changeQuantity(change) {
            quantity = Math.max(1, Math.min(10, quantity + change));
            document.getElementById('quantity').value = quantity;
        }

        function validateForm() {
            // Basic form validation
            const requiredFields = ['name', 'email', 'address', 'city', 'country', 'zip'];
            for (const field of requiredFields) {
                const element = document.getElementById(field);
                if (!element.value) {
                    alert(`Please fill out the ${field} field.`);
                    return false;
                }
            }

            // If all validations pass, show order summary
            const name = document.getElementById('name').value;
            alert(`Thank you for your order, ${name}!\n\nOrder Summary:\n- Ultra Bass Bluetooth Speaker\n- Color: ${selectedColor}\n- Quantity: ${quantity}\n- Total: $${(99.99 * quantity).toFixed(2)}`);
            return false; // Prevent form submission for this example
        }
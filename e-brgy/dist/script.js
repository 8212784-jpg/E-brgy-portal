// Wait for the complete DOM layout to finish initialization
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the form element
    const requestForm = document.getElementById("portalForm");
    
    // Initialize Bootstrap modal programmatically to manipulate its behavior
    const feedbackModal = new bootstrap.Modal(document.getElementById("statusModal"));
    const modalBody = document.getElementById("modalFeedbackMessage");

    // Add a listener to control browser submit procedures
    requestForm.addEventListener("submit", function (event) {
        
        // Prevent default form reloading actions
        event.preventDefault();

        // Perform custom Bootstrap validations check
        if (!requestForm.checkValidity()) {
            event.stopPropagation();
            // Injecting modern bootstrap native layout visual indicators
            requestForm.classList.add("was-validated");
        } else {
            // SUCCESS LOGIC: Read input variables dynamically from DOM
            const residentName = document.getElementById("fullName").value;
            const chosenDoc = document.getElementById("docType").value;

            // DOM MANIPULATION: Construct text context without reloading layout
            modalBody.innerHTML = `
                <p>Mabuhay, <strong>${residentName}</strong>!</p>
                <p>Your civic application file for a <strong>${chosenDoc}</strong> has been successfully transmitted directly into our registry queue system.</p>
                <p class="mb-0 text-muted small"><em>Reference Tracking ID: EB-${Math.floor(100000 + Math.random() * 900000)}</em></p>
            `;

            // Display our custom responsive programmatic Bootstrap Modal feedback
            feedbackModal.show();

            // Clear visual state components and inputs safely 
            requestForm.classList.remove("was-validated");
            requestForm.reset();
        }
    });
});
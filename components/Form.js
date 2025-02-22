import { validateForm } from "../utils/validation.js";

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.innerHTML = `
            <h2>Registration Form</h2>

            <div class="progressbar">
                <div class="prog-step"></div>
                <div class="prog-step"></div>
            </div>

            <label>Company Name</label><br>
            <input type="text" id="companyName">
            <span class="error" id="companyNameError"></span><br><br>

            <label>Company Registration Number</label><br>
            <input type="text" id="CRN">
            <span class="error" id="CRN_Error"></span><br><br>

            <label>Email</label><br>
            <input type="text" id="email">
            <span class="error" id="emailError"></span><br><br>

            <label>Phone Number</label><br>
            <input type="text" id="phoneNumber">
            <span class="error" id="phoneError"></span><br><br>

            <label>Password</label><br>
            <input type="text" id="password">
            <span class="error" id="passwordError"></span><br><br>

            <label>Confirm Password</label><br>
            <input type="text" id="confirm">
            <span class="error" id="confirmError"></span><br><br>

            <label>Business Type</label> <br>
            <select id="bsnsType">
                <option value="">Select</option>
                <option value="instit">Institution</option>
                <option value="comp">Compny</option>
            </select>
            <span class="error" id="typeError"></span><br><br>

            <label> I agree to the terms and conditions</label><br>
            <input type="checkbox" id="agree" value="Boat"><br>

            <button type="submit">Submit</button><br>
        `;

        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const copName = document.getElementById("companyName").value.trim();
        const CRN = document.getElementById("CRN").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirm = document.getElementById("confirm").value;
        const bsnsType = document.getElementById("bsnsType").value;

        const errors = validateForm(copName, CRN, email, phoneNumber, password, confirm, bsnsType);

        document.getElementById("companyNameError").textContent = errors.copName || "";
        document.getElementById("CRN_Error").textContent = errors.CRN || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneError").textContent = errors.phoneNumber || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmError").textContent = errors.confirm || "";
        document.getElementById("typeError").textContent = errors.bsnsType || "";

        if (!errors.copName && !errors.CRN && !errors.email && !errors.phoneNumber && !errors.password && !errors.confirm && !errors.bsnsType) {
            alert("Registration successful!");
            localStorage.setItem("user", JSON.stringify({ copName, CRN, email, phoneNumber, password, confirm, bsnsType}));
        }
    }

    render(parent) {
        parent.appendChild(this.form);
    }

}
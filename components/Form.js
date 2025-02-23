import { validateForm } from "../utils/validation.js";

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.innerHTML = `
            <h2>Registration Form</h2>

            <div class="progressbar">
                <div class="prog-step prog-step-active" data-title="Facility contact info"></div>
                <div class="prog-step prog-step-unactive" data-title="Main facility data"></div>
            </div><br>



            <label>Company Name</label>
            <input type="text" id="companyName">
            <span class="error" id="companyNameError"></span><br><br><br>

            <label>Company Registration Number</label>
            <input type="text" id="crn">
            <span class="error" id="crn_error"></span><br><br><br>

            <label>Email</label>
            <input type="text" id="email">
            <span class="error" id="emailError"></span><br><br><br>

            <label>Phone Number</label>
            <input type="text" id="phoneNumber">
            <span class="error" id="phoneError"></span><br><br><br>



            <label>Password</label><br>
            <input type="password" id="password">
            <span class="error" id="passwordError"></span><br><br><br>

            <label>Confirm Password</label><br>
            <input type="password" id="confirm">
            <span class="error" id="confirmError"></span><br><br><br>



            <label>City</label><br>
            <input type="text" id="city">
            <span class="error" id="cityError"></span><br><br><br>

            <label>Region</label><br>
            <input type="text" id="region">
            <span class="error" id="regionError"></span><br><br><br>

            <label>Zip Code</label><br>
            <input type="text" id="zipCode">
            <span class="error" id="zipCodeError"></span><br><br><br>



            <label>Business Type</label>
            <select id="bsnsType">
                <option value="">Select</option>
                <option value="instit">Institution</option>
                <option value="comp">Compny</option>
            </select>
            <span class="error" id="typeError"></span><br><br><br>

            <input type="checkbox" id="agree" value="Boat">
            <label> I agree to the terms and conditions</label><br>
            <span class="error" id="agrementError"></span><br><br><br>

            <button type="submit">Submit</button>
        `;

        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const copName = document.getElementById("companyName").value.trim();
        const crn = document.getElementById("crn").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();

        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        const city = document.getElementById("city").value.trim();
        const region = document.getElementById("region").value.trim();
        const zipCode = document.getElementById("zipCode").value.trim();

        const bsnsType = document.getElementById("bsnsType").value;
        const agree = document.getElementById("agree").value;

        const errors = validateForm(copName, crn, email, phoneNumber, password, confirm, city, region, zipCode, bsnsType, agree);

        document.getElementById("companyNameError").textContent = errors.copName || "";
        document.getElementById("crn_error").textContent = errors.crn || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneError").textContent = errors.phoneNumber || "";

        document.getElementById("cityError").textContent = errors.crn || "";
        document.getElementById("regionError").textContent = errors.crn || "";
        document.getElementById("zipCodeError").textContent = errors.crn || "";

        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmError").textContent = errors.confirm || "";

        document.getElementById("typeError").textContent = errors.bsnsType || "";
        document.getElementById("agrementError").textContent = errors.bsnsType || "";

        if (!errors.copName && !errors.crn && !errors.email && !errors.phoneNumber && !errors.password && !errors.confirm && !errors.city && !errors.region && !errors.zipCode && !errors.bsnsType && !errors.agree) {
            alert("Registration successful!");
            localStorage.setItem("user", JSON.stringify({ copName, crn, email, phoneNumber, password, confirm, city, region, zipCode, bsnsType, agree}));
        }
    }

    render(parent) {
        parent.appendChild(this.form);
    }

}
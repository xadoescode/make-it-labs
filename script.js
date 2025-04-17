function calculatePrice() {
    let filamentType = document.getElementById("filamentType").value;
    let weight = parseFloat(document.getElementById("weightInput").value);
    let total_price = 0;
    let breakdownText = "";

    if (weight <= 0 || isNaN(weight)) {
        document.getElementById("result").innerHTML = "Please enter a valid weight.";
        document.getElementById("breakdown").innerHTML = "";
        return;
    }

    if (filamentType === "pla_matte" || filamentType === "pla_pro") {
        // Graduated tiered pricing breakdown
        let tier1 = Math.min(weight, 50) * 0.17;
        let tier2 = Math.max(0, Math.min(weight - 50, 150)) * 0.16;
        let tier3 = Math.max(0, weight - 200) * 0.15;

        total_price = tier1 + tier2 + tier3;

        breakdownText = `
            1g ~ 50g @ RM0.17/g = RM${tier1.toFixed(2)} <br>
            51g ~ 200g @ RM0.16/g = RM${tier2.toFixed(2)} <br>
            201g+ @ RM0.15/g = RM${tier3.toFixed(2)}
        `;
    } else if (filamentType === "pla_silk") {
        // Fixed price: RM0.20/g
        total_price = weight * 0.20;
        breakdownText = `Fixed RM0.20/g x ${weight}g = RM${total_price.toFixed(2)}`;
    } else if (filamentType === "multi_colour") {
        // Fixed price: RM0.18/g
        total_price = weight * 0.18;
        breakdownText = `Fixed RM0.18/g x ${weight}g = RM${total_price.toFixed(2)}`;
    }

    document.getElementById("result").innerHTML = `Total Price: RM${total_price.toFixed(2)}`;
    document.getElementById("breakdown").innerHTML = breakdownText;
}

const pass = document.getElementById("pass");
const c_pass = document.getElementById("c_pass");
const validation = document.getElementById("validation");


function checkPass() {
    if (pass.value !== "") {
        if (pass.value === c_pass.value) {
            validation.textContent = "";
            pass.style.backgroundColor = "rgb(124, 219, 124)";
            pass.style.borderColor = "green";
            c_pass.style.backgroundColor = "rgb(124, 219, 124)";
            c_pass.style.borderColor = "green";
            
        } else {
            validation.textContent = "*Passwords do not match";
            pass.style.backgroundColor = "rgb(232, 146, 146)";
            pass.style.borderColor = "red";
            c_pass.style.backgroundColor = "rgb(232, 146, 146)";
            c_pass.style.borderColor = "red";
            
        }
    }
    else{
        validation.textContent = "*Passwords do not match";
        pass.style.backgroundColor = "rgb(232, 146, 146)";
        pass.style.borderColor = "red";
        c_pass.style.backgroundColor = "rgb(232, 146, 146)";
        c_pass.style.borderColor = "red";
    }
}

pass.addEventListener("input", checkPass);
c_pass.addEventListener("input", checkPass);

checkPass();
// untuk menambahkan efek aktif ke menu yang dipilih
var menuItems = document.querySelectorAll(".menu a");

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        // hapus class "active" dari semua menu item
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });
        // tambahkan class "active" ke menu item yang dipilih
        this.classList.add("active");
    });
});

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const formData = {
        name,
        email,
        city,
        zipCode,
        status
    };

    return formData;
}

function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkboxIsChecked() {
    const isChecked = document.getElementById('status').checked;
    return isChecked;
}

function validateFormData(formData) {
    // Check if formData object is null
    if (!formData) {
        return false;
    }

    // Check if zipCode is a number
    const isZipCodeValid = isNumber(formData.zipCode);

    // Check if checkbox is checked
    const isCheckboxChecked = checkboxIsChecked();

    // Return true if all conditions are true
    return isZipCodeValid && isCheckboxChecked;
}

function submit() {
    const formData = handleGetFormData();

    const validasi = validateFormData(formData);

    // Jika hasil validasi adalah false, tampilkan pesan peringatan di dalam div dengan id "warning"
    if (!validasi) {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").textContent = ""; // hapus pesan peringatan jika valid
        // Lakukan tindakan selanjutnya jika inputan valid, misalnya kirim data ke server atau tampilkan hasil pengisian form
        console.log(formData);
        alert("Data berhasil diisi!");
    }
}
// Panggil fungsi submit ketika form disubmit
document.getElementById("form-id").addEventListener("submit", submit);
submit(event.preventDefault());

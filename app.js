const modal = document.getElementsByClassName("modal-wrapper");
function openModal(name = "", mrp = ""){
    modal[0].classList.remove("hidden");
    if (name != "" && mrp != "") {
        document.getElementById("name").innerHTML = name;
        document.getElementById("mrp").innerHTML = mrp;
    }
};

const closeModal = () => {
    modal[0].classList.add("hidden");
};
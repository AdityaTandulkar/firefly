const modal = document.getElementsByClassName("modal-wrapper");
function openModal(name = "", mrp = ""){
    modal[0].classList.remove("hidden");
    if (name != "" && mrp != "") {
        document.getElementsByClassName("mrp-wrapper")[0].innerHTML = name;
        document.getElementsByClassName("mrp-wrapper")[1].innerHTML = mrp;
    }
};

const closeModal = () => {
    modal[0].classList.add("hidden");
};
let game = {
    atoms: 0,
    getatoms: 0
}

showTab("atoms")

document.getElementById("atomsbtn").addEventListener("click", () => {
    showTab("atoms")
});
document.getElementById("settingsbtn").addEventListener("click", () => {
    showTab("settings")
});
document.getElementById("contactbtn").addEventListener("click", () => {
    showTab("contact")
});

setInterval(() => {
    document.getElementById("atomsamount").textContent = game.atoms;
    document.getElementById("getatomscount").textContent = game.getatoms;
});
setInterval(() => {
    game.getatoms++;
}, 1000);
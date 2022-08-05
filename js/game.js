let game = {
    atoms: 0,
    getatoms: 0,
    upgrades: {
        gai: 1
    }
}

showTab("atoms")

document.getElementById("atomsbtn").addEventListener("click", () => {
    showTab("atoms")
});
document.getElementById("upgbtn").addEventListener("click", () => {
    showTab("upgrades")
});
document.getElementById("settingsbtn").addEventListener("click", () => {
    showTab("settings")
});
document.getElementById("contactbtn").addEventListener("click", () => {
    showTab("contact")
});

setInterval(() => {
    document.getElementById("atomsamount").textContent = Math.floor(game.atoms);
    document.getElementById("getatomscount").textContent = Math.floor(game.getatoms);
});
setInterval(() => {
    game.getatoms+=game.upgrades.gai;
}, 1000);
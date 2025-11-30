// depends on load-data.js to be loaded first.

function makeSuits() {
    let template = document.getElementById("suit-template");
    for (i = 0; i < gamedata.suits.length; i++) {
        let suitData = gamedata.suits[i];
        let suitNode = template.cloneNode(true);

        suitNode.removeAttribute("style");
        suitNode.removeAttribute("id");
        suitNode.setAttribute("onclick", "placeSuitData(" + i + ");");
        suitNode.className = suitData.Faction === "1" ? "banzai" : "atlas";

        suitNode.firstElementChild.setAttribute("alt", "[" + suitData.Name + " icon]");
        suitNode.firstElementChild.setAttribute("src", "/img/exosuits/ex_" + suitData.Filename + ".png");

        suitNode.lastElementChild.innerText = suitData.Name;

        template.parentElement.appendChild(suitNode);
    }
    template.remove();

    placeSuitData(0);
    document.getElementsByTagName("article")[0].removeAttribute("style");
}

function placeSuitData(index) {
    let suitData = gamedata.suits[index];

    document.getElementById("suit-name").innerText = suitData.Name;
    document.getElementById("suit-show").innerText = (suitData.ShowName === "Banzai Squadron" || suitData.ShowName === "Atlas Brigade") ? "Project Exonaut" : suitData.ShowName;
    document.getElementById("suit-image").setAttribute("alt", "[" + suitData.Name + " icon]");
    document.getElementById("suit-image").setAttribute("src", "/img/exosuits/ex_" + suitData.Filename + ".png");
    document.getElementById("suit-description").innerText = suitData.Description;
    document.getElementById("suit-faction").innerText = suitData.Faction === "1" ? "Banzai Squadron" : "Atlas Brigade";
    document.getElementById("suit-cost").innerText = suitData.Cost;
    document.getElementById("suit-guest").innerText = suitData.Guest === "1" ? "Yes" : "No";
    document.getElementById("suit-shield").innerText = suitData.Health;
    document.getElementById("suit-shield-regen-speed").innerText = suitData.Regen_Speed;
    document.getElementById("suit-shield-regen-delay").innerText = suitData.Regen_Delay;
    document.getElementById("suit-run-speed-modifier").innerText = suitData.Run_Spd_Adj;
    document.getElementById("suit-roll-speed").innerText = suitData.Roll_Spd;
    document.getElementById("suit-roll-recovery-speed").innerText = suitData.Roll_Rcvy;
    document.getElementById("suit-jetpack-speed-modifier").innerText = suitData.Jetpack_Spd_Adj;
    document.getElementById("suit-jetpack-speed-factor").innerText = suitData.Jetpack_Vrt_Spd;
    document.getElementById("suit-airdash-max-speed").innerText = suitData.Airdash_Spd_Max;
    document.getElementById("suit-airdash-max-distance").innerText = suitData.Airdash_Dst_Max;
    document.getElementById("suit-airdash-speed-decay").innerText = suitData.Airdash_Sbd_Rt;
    document.getElementById("suit-ground-jetpack-acceleration").innerText = suitData.Acc_Grnd;
    document.getElementById("suit-air-jetpack-acceleration").innerText = suitData.Acc_Air;
    document.getElementById("suit-max-fuel").innerText = suitData.Fuel_Max;
    document.getElementById("suit-fuel-regen-speed").innerText = suitData.Fuel_Regen;
    document.getElementById("suit-fuel-regen-delay").innerText = suitData.Fuel_Delay;
    document.getElementById("suit-boost-pickup-time").innerText = suitData.Timer_Boosts;
    document.getElementById("suit-special-weapon-pickup-time").innerText = suitData.Timer_Sp_Weps;
    document.getElementById("suit-crash-free-time").innerText = suitData.Timer_Free;
    document.getElementById("suit-special-weapon-cooldown").innerText = suitData.CoolDown_Sp_Weps;

    let modData = gamedata.mods[suitData.WeaponMod - 1];

    document.getElementById("mod-name").innerText = modData.Name;
    document.getElementById("mod-description").innerText = modData.Description;
    document.getElementById("mod-delta-projectiles-per-fire").innerText = modData.Num_Projectiles;
    document.getElementById("mod-delta-projectiles-spread").innerText = modData.Angle_Range;
    document.getElementById("mod-delta-clip-size").innerText = modData.Clip_Size;
    document.getElementById("mod-delta-clip-count").innerText = modData.Num_Clips;
    document.getElementById("mod-delta-fire-rate").innerText = modData.Fire_Rate;
    document.getElementById("mod-delta-reload-rate").innerText = modData.Reload_Rate;
    document.getElementById("mod-delta-range").innerText = modData.Projectile_Range;
    document.getElementById("mod-delta-accuracy").innerText = modData.Projectile_Accuracy;
    document.getElementById("mod-delta-damage-per-projectile").innerText = modData.Damage_Per_Projectile;

    let weaponData = gamedata.weapons[modData.WeaponID - 1];

    document.getElementById("mod-weapon-name").innerText = weaponData.Name;
    document.getElementById("mod-weapon-image").setAttribute("alt", "[" + weaponData.Name + " icon]");
    document.getElementById("mod-weapon-image").setAttribute("src", "/img/weapons/" + encodeURIComponent(weaponData.Name) + ".jpg");
    document.getElementById("mod-total-projectiles-per-fire").innerText = Number(modData.Num_Projectiles) + Number(weaponData.Projectiles);
    document.getElementById("mod-total-projectiles-spread").innerText = Number(modData.Angle_Range) + Number(weaponData.Angle);
    document.getElementById("mod-total-clip-size").innerText = Number(modData.Clip_Size) + Number(weaponData.Clip_Size);
    document.getElementById("mod-total-clip-count").innerText = weaponData.Num_Clips === "9999" ? "infinite" : Number(modData.Num_Clips) + Number(weaponData.Num_Clips);
    document.getElementById("mod-total-fire-rate").innerText = (Number(modData.Fire_Rate) + Number(weaponData.Fire_Rate)).toFixed(2);
    document.getElementById("mod-total-reload-rate").innerText = (Number(modData.Reload_Rate) + Number(weaponData.Reload_Rate)).toFixed(2);
    document.getElementById("mod-total-range").innerText = Number(modData.Projectile_Range) + Number(weaponData.Range);
    document.getElementById("mod-total-accuracy").innerText = Number(modData.Projectile_Accuracy) + Number(weaponData.Accuracy);
    document.getElementById("mod-total-damage-per-projectile").innerText = Number(modData.Damage_Per_Projectile) + Number(weaponData.Damage);
}

getGamedata(makeSuits);

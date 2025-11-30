// depends on load-data.js to be loaded first.

function makeWeapons() {
    let template = document.getElementById("weapon-template");
    for (i = 0; i < gamedata.weapons.length; i++) {
        let weaponData = gamedata.weapons[i];
        let weaponNode = template.cloneNode(true);

        weaponNode.removeAttribute("style");
        weaponNode.removeAttribute("id");
        weaponNode.setAttribute("onclick", "placeWeaponData(" + i + ");");

        weaponNode.firstElementChild.setAttribute("alt", "[" + weaponData.Name + " icon]");
        weaponNode.firstElementChild.setAttribute("src", "/img/weapons/" + encodeURIComponent(weaponData.Name) + ".jpg");

        weaponNode.lastElementChild.innerText = weaponData.Name;

        template.parentElement.appendChild(weaponNode);
    }
    template.remove();

    placeWeaponData(0);
    document.getElementsByTagName("article")[0].removeAttribute("style");
}

function placeWeaponData(index) {
    let weaponData = gamedata.weapons[index];
    let projectileType = "";
    let explosive = false;
    switch (index) {
        case 5:
        case 8:
            projectileType = "Grenade";
            explosive = true;
            break;
        case 6:
            projectileType = "Hitscan";
            explosive = false;
            break;
        case 7:
            projectileType = "Rocket";
            explosive = true;
            break;
        default:
            projectileType = "Bullet";
            explosive = false;
            break;
    }

    document.getElementById("weapon-name").innerText = weaponData.Name;
    document.getElementById("weapon-image").setAttribute("alt", "[" + weaponData.Name + " icon]");
    document.getElementById("weapon-image").setAttribute("src", "/img/weapons/" + encodeURIComponent(weaponData.Name) + ".jpg");
    document.getElementById("weapon-description").innerText = weaponData.Description;
    document.getElementById("weapon-projectile-type").innerText = projectileType;
    document.getElementById("weapon-projectiles-per-fire").innerText = weaponData.Projectiles;
    document.getElementById("weapon-projectiles-spread").innerText = weaponData.Angle;
    document.getElementById("weapon-clip-size").innerText = weaponData.Clip_Size;
    document.getElementById("weapon-clip-count").innerText = weaponData.Num_Clips === "9999" ? "infinite" : weaponData.Num_Clips; // 9999 is just used to refer to infinity
    document.getElementById("weapon-fire-rate").innerText = weaponData.Fire_Rate;
    document.getElementById("weapon-reload-rate").innerText = index === 8 ? "pickup" : weaponData.Reload_Rate;
    document.getElementById("weapon-range").innerText = explosive || weaponData.Range === "9999" ? "infinite" : weaponData.Range;
    document.getElementById("weapon-accuracy").innerText = weaponData.Accuracy;
    document.getElementById("weapon-damage-per-projectile").innerText = weaponData.Damage;
    document.getElementById("weapon-first-explosion-radius").innerText = explosive ? weaponData.Radius1 : "N/A";
    document.getElementById("weapon-first-explosion-radius-damage").innerText = explosive ? weaponData.Radius1_Damage : "N/A";
    document.getElementById("weapon-second-explosion-radius").innerText = explosive ? weaponData.Radius2 : "N/A";
    document.getElementById("weapon-second-explosion-radius-damage").innerText = explosive ? weaponData.Radius2_Damage : "N/A";
    document.getElementById("weapon-time-to-detonate").innerText = projectileType === "Grenade" ? weaponData.Expire_Time : "N/A";
    document.getElementById("weapon-velocity").innerText = projectileType === "Hitscan" ? "infinite" : weaponData.Velocity;
}

getGamedata(makeWeapons);

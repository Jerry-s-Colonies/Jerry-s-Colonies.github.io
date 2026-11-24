/* Jerry's Nations Wiki — Guide Module 5: Military, Battles, Raids, Bounties & Quests */
window.JN_GUIDE_MODULES = window.JN_GUIDE_MODULES || [];
window.JN_GUIDE_MODULES.push(
  {
    id: "military-army",
    group: "warfare",
    kicker: { en: "13. Armed Forces", fr: "13. Forces Armees" },
    title: {
      en: "Military System: Grades, 9 Classes, Barracks, Training & Command Sword",
      fr: "Armee : Grades, 9 Classes, Casernes, Entrainement & Epee de Commandement",
    },
    subtitle: {
      en: "Recruiting Soldiers/Knights, all 4 Military Grades & 9 Classes, Martial Stats, Training Dummies, Real Ammo, Captain/General Auras, Medics & Tactical Orders.",
      fr: "Enrolement des soldats, 4 Grades & 9 Classes, Stats martiales, Mannequins DPS, Munitions reelles, Auras, Docteurs de guerre & Epee de Commandement.",
    },
    featuredBlocks: ["military_station"],
    featuredItems: ["jn:training_dummy", "jn:bandage"],
    searchKeywords:
      "military battle table soldier knight captain general warrior archer crossbowman tank royal guard cavalry doctor dummy ammo aura command sword focus fire barracks",
    sections: [
      {
        heading: { en: "Enrollment, 4 Military Grades & Veteran Records", fr: "Enrolement, 4 Grades & Dossier de Veteran" },
        html: {
          en: `
            <ul>
              <li><strong>Battle Table (<code>jn:military_station</code>)</strong>: Craft <code>1x Iron Sword + 3x Iron Ingots + 3x Planks</code>. Opens 5 tabs: Soldiers, Regiments, Barracks, Training Camp, Logistics/Supplies.</li>
              <li><strong>Enrollment &amp; Demobilization</strong>: Enrolls adult (&ge;18) <code>unassigned</code> NPCs within <strong>64 blocks</strong> into <code>jn:knight_male/female</code> while preserving genetics, name, and 6+16 gear (saves clothes &amp; bed). Demobilizing saves a <strong>Veteran Record</strong> (kills, martial stats, training rank/XP, last grade &amp; class) if ever re-enlisted!</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Grade</th><th>Max HP</th><th>Base Attack</th><th>Promotion Requirements &amp; Tech</th></tr></thead>
              <tbody>
                <tr><td><strong>Soldier</strong></td><td>20 HP</td><td>1 (Melee group: 5)</td><td>Initial rank. Classes: Warrior, Archer, Crossbowman, Guardian, Doctor</td></tr>
                <tr><td><strong>Knight</strong></td><td>40 HP</td><td>2 (Tank: 6)</td><td><code>mil_rank_knight</code> (T1, 2 PR). Classes: Warrior, Elite Guard, Tank, Royal Guard, Cavalry, Doctor</td></tr>
                <tr><td><strong>Captain</strong></td><td>60 HP</td><td>4 (x1.25 atk)</td><td><code>mil_rank_captain</code> (T2, 4 PR). Must be Knight in regiment with 0 Captains &amp; <strong>Leadership &gt; 10</strong>. Becomes regiment leader</td></tr>
                <tr><td><strong>General</strong></td><td>100 HP</td><td>6 (x1.3 atk)</td><td><code>mil_rank_general</code> (T4, 6 PR). Must be Captain with <strong>Leadership &gt; 18</strong>. <strong>Max 1 General per nation</strong></td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <ul>
              <li><strong>Table de Bataille (<code>jn:military_station</code>)</strong> : Craft <code>1x Epee fer + 3x Lingots fer + 3x Planches</code>. 5 onglets : Soldats, Regiments, Casernes, Entrainement, Intendance.</li>
              <li><strong>Enrolement &amp; Demobilisation</strong> : Enrole les adultes (&ge;18 ans) <code>unassigned</code> dans un rayon de <strong>64 blocs</strong> en conservant ADN, nom et inventaire. Demobiliser archive un <strong>Dossier de Veteran</strong> restaure s'il re-enrole !</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Grade</th><th>PV max</th><th>Degats base</th><th>Prerequis de promotion &amp; Recherche</th></tr></thead>
              <tbody>
                <tr><td><strong>Soldat</strong></td><td>20 PV</td><td>1 (Melee : 5)</td><td>Grade initial. Classes : Guerrier, Archer, Arbaletrier, Gardien, Docteur</td></tr>
                <tr><td><strong>Chevalier</strong></td><td>40 PV</td><td>2 (Tank : 6)</td><td><code>mil_rank_knight</code> (T1, 2 PR). Classes : Guerrier, Garde Elite, Tank, Garde Royal, Cavalier, Docteur</td></tr>
                <tr><td><strong>Capitaine</strong></td><td>60 PV</td><td>4 (x1.25 atq)</td><td><code>mil_rank_captain</code> (T2, 4 PR). Chevalier en regiment sans Capitaine + <strong>Commandement &gt; 10</strong>. Chef de regiment</td></tr>
                <tr><td><strong>General</strong></td><td>100 PV</td><td>6 (x1.3 atq)</td><td><code>mil_rank_general</code> (T4, 6 PR). Capitaine + <strong>Commandement &gt; 18</strong>. <strong>1 seul General par nation</strong></td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
      {
        heading: { en: "All 9 Military Classes & Martial Stats", fr: "Les 9 Classes Militaires & Stats Martiales" },
        html: {
          en: `
            <p>Paid from Nation Treasury (or personal coins), discounted <strong>-30%</strong> by <code>mil_logistics_recruitment</code>.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Class</th><th>Cost</th><th>Allowed Grades</th><th>Tech</th><th>Special Behavior &amp; Kit</th></tr></thead>
              <tbody>
                <tr><td><strong>Warrior</strong></td><td>40</td><td>Soldier, Knight</td><td>None</td><td>Standard melee infantry</td></tr>
                <tr><td><strong>Archer</strong></td><td>50</td><td>Soldier</td><td><code>mil_class_skirmishers</code></td><td>48b range, 1.0–2.2s rate; starter Bow + 64 Arrows (consumes real arrows!)</td></tr>
                <tr><td><strong>Crossbowman</strong></td><td>60</td><td>Soldier</td><td><code>mil_class_skirmishers</code></td><td>48b range, 1.5–2.5s rate; starter Crossbow + 64 Arrows</td></tr>
                <tr><td><strong>Guardian</strong></td><td>50</td><td>Soldier</td><td><code>mil_class_guardians</code></td><td>Defender specialist class</td></tr>
                <tr><td><strong>Doctor</strong></td><td>50</td><td>Soldier, Knight</td><td><code>mil_class_doctor</code></td><td>Heals allies within 14b every 5 min (1 Bandage -&gt; 50% HP, <strong>75% with <code>mil_med_bandages</code></strong>)</td></tr>
                <tr><td><strong>Tank</strong></td><td>80</td><td>Knight</td><td><code>mil_class_tanks</code></td><td>Scale x1.05, <strong>85% Knockback Resistance</strong>, <strong>-25% damage taken</strong>, x0.85 speed</td></tr>
                <tr><td><strong>Elite Guard</strong></td><td>90</td><td>Knight</td><td><code>mil_class_elite_guard</code></td><td>Heavy shock unit</td></tr>
                <tr><td><strong>Royal Guard</strong></td><td>100</td><td>Knight</td><td><code>mil_class_royal_guard</code></td><td><strong>-15% damage taken</strong>, x1.5 speed, 56b detection range</td></tr>
                <tr><td><strong>Cavalry</strong></td><td>120</td><td>Knight</td><td><code>mil_class_cavalry</code></td><td>Mounted assault unit</td></tr>
              </tbody>
            </table></div>
            <ul>
              <li><strong>Martial Stats (1–20)</strong>: Derived from civilian Strength/Agility/Precision/Constitution/Leadership. +1 to all 4 per Training Rank up (5 Ranks: 100 / 250 / 500 / 1,000 XP; capped at L1 base, L2 with <code>drills_1</code>, L4 <code>drills_2</code>, L5 <code>mastery</code>). Intelligence boosts XP learning by <code>x1.0 / x1.25 (&ge;11) / x1.50 (&ge;16)</code> (+25 XP/kill).</li>
              <li><strong>Permanent Bedrock Buffs</strong>: <code>meleeMastery &ge;5 / &ge;10 / &ge;15</code> sets permanent base attack to <strong>4 / 7 / 10</strong>. <code>fortitude &ge;10 / &ge;15</code> grants permanent <strong>-20% / -40% damage taken</strong>.</li>
            </ul>
          `,
          fr: `
            <p>Payee en Tresorerie (ou pieces perso), reduite de <strong>-30%</strong> via <code>mil_logistics_recruitment</code>.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Classe</th><th>Cout</th><th>Grades</th><th>Recherche</th><th>Stats &amp; Equipement</th></tr></thead>
              <tbody>
                <tr><td><strong>Guerrier</strong></td><td>40</td><td>Soldat, Chevalier</td><td>Aucune</td><td>Infanterie corps a corps</td></tr>
                <tr><td><strong>Archer</strong></td><td>50</td><td>Soldat</td><td><code>mil_class_skirmishers</code></td><td>Portee 48b, cadence 1.0-2.2s ; Arc + 64 Fleches (consomme de vraies fleches)</td></tr>
                <tr><td><strong>Arbaletrier</strong></td><td>60</td><td>Soldat</td><td><code>mil_class_skirmishers</code></td><td>Portee 48b, cadence 1.5-2.5s ; Arbalete + 64 Fleches</td></tr>
                <tr><td><strong>Gardien</strong></td><td>50</td><td>Soldat</td><td><code>mil_class_guardians</code></td><td>Unite defensive</td></tr>
                <tr><td><strong>Docteur</strong></td><td>50</td><td>Soldat, Chevalier</td><td><code>mil_class_doctor</code></td><td>Soigne allies dans 14b / 5 min (1 Bandage -&gt; 50% PV, <strong>75% avec <code>mil_med_bandages</code></strong>)</td></tr>
                <tr><td><strong>Garde Lourd</strong></td><td>80</td><td>Chevalier</td><td><code>mil_class_tanks</code></td><td>Taille x1.05, <strong>85% anti-recul</strong>, <strong>-25% degats subis</strong>, vitesse x0.85</td></tr>
                <tr><td><strong>Garde d'Elite</strong></td><td>90</td><td>Chevalier</td><td><code>mil_class_elite_guard</code></td><td>Unite d'elite</td></tr>
                <tr><td><strong>Garde Royal</strong></td><td>100</td><td>Chevalier</td><td><code>mil_class_royal_guard</code></td><td><strong>-15% degats subis</strong>, vitesse x1.5, detection 56b</td></tr>
                <tr><td><strong>Cavalier</strong></td><td>120</td><td>Chevalier</td><td><code>mil_class_cavalry</code></td><td>Cavalerie</td></tr>
              </tbody>
            </table></div>
            <ul>
              <li><strong>Stats Martiales &amp; Rangs</strong> : 5 Rangs d'entrainement (100/250/500/1000 XP ; plafond Niv. 1-&gt;2-&gt;4-&gt;5 par recherches), +1 aux 4 stats/rang. Combat = +25 XP/kill (multiplie x1.0 / x1.25 / x1.50 selon Intelligence).</li>
              <li><strong>Bonus permanents</strong> : <code>meleeMastery &ge;5 / &ge;10 / &ge;15</code> -&gt; attaque <strong>4 / 7 / 10</strong>. <code>fortitude &ge;10 / &ge;15</code> -&gt; <strong>-20% / -40% degats recus</strong>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Training Dummies, Barracks, Auras & Command Sword", fr: "Mannequins, Casernes, Auras & Epee de Commandement" },
        html: {
          en: `
            <ul>
              <li><strong>Training Dummy</strong> (<code>jn:training_dummy</code> — craft: <code>Hay Block + Stick + Planks</code>): Requires <code>mil_training_drills_1</code> &amp; placement inside a Barracks (30b radius). Hitting it acts as a live DPS meter (floating damage &amp; ActionBar). Assigned soldiers gain <strong>+1 base XP every 10s (6 XP/min)</strong>, credited on release, and ignore external orders while training.</li>
              <li><strong>Regiments &amp; Barracks</strong>: Regiment max size: <strong>4</strong> (base) -&gt; <strong>7</strong> (<code>mil_regiment_cohesion</code>) -&gt; <strong>10</strong> (<code>mil_regiment_grand</code>). 1 Barracks max per territory (30b radius; forbidden on Hamlets &amp; Farmlands). Quotas: Capital <strong>3 regiments</strong>, Fortress <strong>2</strong>, City/Town/Outpost <strong>1</strong> (+1 everywhere with <code>mil_logistics_garrison</code>).</li>
              <li><strong>Ammo Rule</strong>: Archers &amp; Crossbowmen consume <strong>1 real Arrow per shot</strong>; if out of arrows, they switch to melee until resupplied (checked every 3s).</li>
              <li><strong>Command Auras</strong>: Captain Aura (<code>mil_aura_captain</code>) = <strong>Strength I</strong> to own regiment within <strong>32 blocks</strong>. General Aura (<code>mil_aura_general</code>) = <strong>Strength II + Speed I</strong> to all nation troops AND allied players within <strong>100 blocks</strong>.</li>
              <li><strong>Command Sword</strong> (<code>mil_tactics_sword</code> + <code>military_command</code> perm): Rename any Vanilla sword at an anvil to include <code>"Command Sword"</code> / <code>"Commander Sword"</code> / <code>"Epee de Commandement"</code>. Right-click affects troops within <strong>48 blocks</strong> (whole army or specific regiment) with 5 orders: <strong>Rally (Follow)</strong>, <strong>Hold Position (Stay)</strong>, <strong>Charge (Melee)</strong>, <strong>Free Patrol</strong>, and <strong>Coordinated Volley</strong> (<code>mil_tactics_focus_fire</code> — grants Ranged troops Speed II + Strength II for 10s).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Mannequin d'Entrainement</strong> (<code>jn:training_dummy</code> — craft : <code>Botte paille + Baton + Planches</code>) : Requiert <code>mil_training_drills_1</code> et pose en Caserne (30b). Sert aussi de testeur de DPS pour les joueurs. Le soldat gagne <strong>+1 XP brut / 10s (6 XP/min)</strong>, encaisse a la liberation.</li>
              <li><strong>Regiments &amp; Casernes</strong> : Taille regiment <strong>4 -&gt; 7 -&gt; 10</strong>. Max 1 Caserne/territoire (interdit en Hameau/Terres agricoles) : Capitale <strong>3 reg.</strong>, Forteresse <strong>2</strong>, Cite/Bourg/Avant-poste <strong>1</strong> (+1 avec <code>mil_logistics_garrison</code>).</li>
              <li><strong>Munitions reelles</strong> : consomme 1 vraie fleche par tir ; passe en melee si rupture jusqu'au ravitaillement.</li>
              <li><strong>Auras</strong> : Capitaine (<code>mil_aura_captain</code>) = <strong>Force I</strong> au regiment dans <strong>32 blocs</strong>. General (<code>mil_aura_general</code>) = <strong>Force II + Vitesse I</strong> a toute l'armee + joueurs membres dans <strong>100 blocs</strong>.</li>
              <li><strong>Epee de Commandement</strong> (<code>mil_tactics_sword</code>) : renommez toute epee Vanilla sur enclume avec <code>"Epee de Commandement"</code> / <code>"Command Sword"</code>. Portee <strong>48 blocs</strong>, 5 ordres : <strong>Rassemblement</strong>, <strong>Tenir Position</strong>, <strong>Assaut</strong>, <strong>Patrouille</strong> et <strong>Salve Coordonnee</strong> (<code>mil_tactics_focus_fire</code> : Vitesse II + Force II 10s aux archers/arbaletriers).</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "battles-raids",
    group: "warfare",
    kicker: { en: "14. Sieges & Bestiary", fr: "14. Sieges & Bestiaire" },
    title: {
      en: "Territorial Siege Battles & Marauder Raids",
      fr: "Batailles de Siege, Maraudeurs & Raids",
    },
    subtitle: {
      en: "180-second siege capture mechanics, abandon drain, kill penalties, Marauder Raid triggers, wave compositions, and full 5-mob Marauder Bestiary.",
      fr: "Capture de parcelles en 180s, drain d'abandon, declenchement des raids, vagues exactes et bestiaire complet des 5 Maraudeurs.",
    },
    searchKeywords:
      "battle siege 180s war capture raid marauder bad omen raid omen swordsman arbalist captain privateer airship horuphant totem saddle firework",
    sections: [
      {
        heading: { en: "Territorial Siege Battles", fr: "Batailles Territoriales (Sieges)" },
        html: {
          en: `
            <ul>
              <li><strong>Prerequisites</strong>: Active War between nations, perm <code>battle_declare</code>, target is a <strong>non-capital cell</strong> not already under siege, defender not under Organization Ceasefire.</li>
              <li><strong>Duration</strong>: Configurable slider from <strong>5 to 180 minutes</strong> (default 30 min). <em>Note: Battles run in memory (not persisted across server restarts).</em></li>
              <li><strong>Capture Rules (Live ActionBar HUD)</strong>:
                <ul>
                  <li>Standing Challenger player(s) inside the 100x100 cell fill progress at <strong>+1s/s</strong>.</li>
                  <li>Reaching <strong>180 seconds (3 min)</strong> flips cell control (initial defender becomes the Challenger and can counter-capture!).</li>
                  <li><strong>Abandon Drain</strong>: 0 Challengers in cell drains progress at <strong>-6s/s</strong> (empties in 30s).</li>
                  <li><strong>Death Penalty</strong>: Each Challenger killed by the holding side removes <strong>-20 seconds</strong> of progress.</li>
                </ul>
              </li>
              <li><strong>Outcome</strong>: Holding side when timer expires wins <strong>+500 Nation XP</strong>. If <code>battleCaptureEnabled = true</code>, the cell and its sub-city permanently transfer to the winner.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Prerequis</strong> : Guerre active, perm <code>battle_declare</code>, parcelle cible <strong>non-capitale</strong> hors Cessez-le-feu. Duree reglable : <strong>5 a 180 minutes</strong> (defaut 30 min ; gestion en memoire).</li>
              <li><strong>Capture en direct</strong> : occupant Attaquant dans la cellule = <strong>+1s/s</strong>. Atteindre <strong>180 secondes (3 min)</strong> retourne le controle (reprises possibles jusqu'a fin du chrono). 0 Attaquant = vidage a <strong>-6s/s</strong> (30s). Chaque attaquant tue par le detenteur retire <strong>-20 secondes</strong>.</li>
              <li><strong>Victoire</strong> : le detenteur final gagne <strong>+500 XP Nation</strong> et capture la parcelle/sous-ville si <code>battleCaptureEnabled = true</code>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Marauder Raids & Full 5-Enemy Bestiary", fr: "Raids de Maraudeurs & Bestiaire Complet" },
        html: {
          en: `
            <ul>
              <li><strong>Wild Patrols &amp; Trigger</strong>: Only <strong>Marauder Captains</strong> spawn naturally in the Overworld (light 0–7, 24–44b away) with <strong>2–3 escort Swordsmen/Arbalists</strong>. Killing a wild Captain grants <strong>Bad Omen</strong> for <strong>1 hour (up to Level V)</strong>. Entering any claimed nation territory with Bad Omen or Raid Omen starts a Raid (scaled by difficulty: <code>easy x0.5 / normal x1.0 / hard x1.5</code>).</li>
              <li><strong>Waves &amp; Outcomes</strong>: <strong>3 or 4 waves</strong> (50/50), 5s delay between waves, spawning 14–24b away. Per-wave base formula: <code>2 + 2*wave</code> Swordsmen, <code>1 + wave</code> Arbalists, <code>floor(wave/2)</code> Captains, <code>wave&gt;=3 ? wave-2 : 0</code> Privateers, and <strong>1–2 Horuphants</strong> on the final wave (and penultimate wave if 4 waves).
                <br><strong>Victory</strong>: <strong>+50 Nation Mood</strong> &amp; <strong>+350 Nation XP</strong>. <strong>Defeat</strong> (0 defenders in territory for 60s): marauders despawn, <strong>-30 Mood</strong>, and <strong>30–150 food points stolen</strong>!</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Marauder</th><th>HP / Speed / Atk</th><th>Special Abilities</th><th>Loot Drops</th></tr></thead>
              <tbody>
                <tr><td><strong>Swordsman</strong></td><td>24 HP | 0.35 | 6 dmg</td><td>Iron Sword rush</td><td>50% 0–5 Coins, 25% 0–3 Iron, 8% (+2%/Looting) Ominous Bottle (I–V), <strong>2% (+0.5%/L) Marauder March Disc</strong></td></tr>
                <tr><td><strong>Arbalist</strong></td><td>24 HP | 0.35 | Crossbow</td><td>Every 10–20s swaps to <strong>Firework Bolt</strong> (power 1.6, pierces shield knockback)</td><td>50% 0–5 Coins, 25% 2–6 Arrows</td></tr>
                <tr><td><strong>Captain</strong></td><td>30 HP | 0.35 | Support</td><td><strong>Heal Aura</strong> every 15s (Regen V 5s in 20b); summons <strong>2–3 Reinforcements</strong> per 2 allied deaths (max 3 calls)</td><td>50% 0–5 Coins, 25% Nation Flag, 8% 0–2 Regen Potions</td></tr>
                <tr><td><strong>Privateer</strong></td><td>28 HP | Fly 0.2 | 6 dmg</td><td>Airship at +12b altitude; shoots reflectable <strong>Fireballs</strong> every 3s; invulnerable crash-dive &le;14 HP (power 3 fire explosion, no block break)</td><td>50% 0–5 Coins, 50% 2–4 Gunpowder</td></tr>
                <tr><td><strong>Horuphant</strong></td><td><strong>100 HP</strong> | 0.4 | <strong>18 dmg</strong> (75% KB Res)</td><td>8-dmg AoE (3.2b/s), Charge &amp; Ram (2.5 KB), <strong>50% Shield Block Stun (2s) -&gt; 6-dmg Shockwave Roar (4b)</strong></td><td>50% 0–5 Coins, 50% Saddle, <strong>8% Totem of Undying</strong></td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <ul>
              <li><strong>Patrouilles &amp; Declenchement</strong> : Seul le <strong>Capitaine Maraudeur</strong> spawne naturellement (lumiere 0–7) avec <strong>2–3 gardes</strong>. Le tuer donne <strong>Mauvais Presage (1h, jusqu'a V)</strong>. Entrer dans un territoire revendique avec Mauvais Presage / Presage de Raid lance le raid (difficulte <code>x0.5 / x1.0 / x1.5</code>).</li>
              <li><strong>Vagues &amp; Issue</strong> : <strong>3 ou 4 vagues</strong> (5s d'intervalle) : Epeistes, Arbaletriers, Capitaines, Corsaires volants (V3–4) et <strong>1–2 Horuphants</strong> en vague finale. <strong>Victoire</strong> : <strong>+50 Moral, +350 XP</strong>. <strong>Defaite</strong> (60s sans defenseur) : <strong>-30 Moral &amp; vol 30–150 vivres</strong>.</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Maraudeur</th><th>PV / Vit. / Atq</th><th>Capacites speciales</th><th>Butin</th></tr></thead>
              <tbody>
                <tr><td><strong>Epeiste</strong></td><td>24 PV | 0.35 | 6 degats</td><td>Assaut Epee de fer</td><td>50% 0–5 Pieces, 25% Fer, 8% Bouteille Sinistre (I–V), <strong>2% Disque Marauder March</strong></td></tr>
                <tr><td><strong>Arbaletrier</strong></td><td>24 PV | 0.35 | Arbalete</td><td>Toutes les 10–20s : <strong>Carreau d'artifice</strong> anti-bouclier</td><td>50% 0–5 Pieces, 25% 2–6 Fleches</td></tr>
                <tr><td><strong>Capitaine</strong></td><td>30 PV | 0.35 | Soutien</td><td><strong>Aura Regeneration V</strong> (5s, 20b) chaque 15s + <strong>2–3 Renforts</strong> / 2 morts (max 3 fois)</td><td>50% 0–5 Pieces, 25% Drapeau de Colonie, 8% Potions Regen</td></tr>
                <tr><td><strong>Corsaire</strong></td><td>28 PV | Vol 0.2 | 6 degats</td><td>Vole a +12b, tire boulets renvoyables / 3s ; <strong>Crash invulnerable &le;14 PV</strong> (explosion feu puissance 3 sans casser blocs)</td><td>50% 0–5 Pieces, 50% Poudre a canon</td></tr>
                <tr><td><strong>Horuphant</strong></td><td><strong>100 PV</strong> | 0.4 | <strong>18 degats</strong> (75% anti-KB)</td><td>AoE 8 degats, Belier, <strong>50% Etourdissement sur bouclier (2s) -&gt; Rugissement 6 degats</strong></td><td>50% 0–5 Pieces, 50% Selle, <strong>8% Totem d'immortalite</strong></td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
    ],
  },
  {
    id: "bounties-quests",
    group: "warfare",
    kicker: { en: "15. Contracts & Quests", fr: "15. Contrats & Quetes" },
    title: {
      en: "Bounty Board, Player Contracts & All 163 Quests",
      fr: "Panneau de Primes, Contrats Joueurs & Les 163 Quetes",
    },
    subtitle: {
      en: "PvP Bounties (anti-ally exploit rules), 60-min 10-slot board rotation, Player-to-Player item contracts, all 30 Nation Quests (F–S) & 133 Citizen Quests.",
      fr: "Primes PvP, rotation 10 slots toutes les 60 min, contrats d'objets entre joueurs, les 30 Quetes de Nation (F–S) & les 133 Quetes Citoyennes.",
    },
    featuredBlocks: ["bounty_board"],
    searchKeywords:
      "bounty board pvp contract rotation player quest nation quest rank f e d c b a s warden wither dragon citizen quest epic supply chain",
    sections: [
      {
        heading: { en: "Bounty Board, PvP Bounties & Player Contracts", fr: "Panneau de Primes, Primes PvP & Contrats Joueurs" },
        html: {
          en: `
            <ul>
              <li><strong>Bounty Board (<code>jn:bounty_board</code>)</strong>: Craft <code>3x Paper + 4x Planks</code>. 10-slot (5x2) grid rotating every <strong>60 minutes</strong> (configurable 30/60/120/180m): <strong>Slots 0–2</strong> (Rank F), <strong>Slots 3–4</strong> (Rank E), <strong>Slots 5–7</strong> (Ranks D–B), <strong>Slots 8–9</strong> (Ranks B–S). Max <strong>3 active quests</strong> simultaneously (configurable 2–5).</li>
              <li><strong>PvP Bounties</strong> (<code>bounty_post</code> perm): Minimum <strong>10 coins</strong> (slider 10–500 G), stackable on same target, optional anonymous posting, funded from inventory or Nation Treasury (100% refund on cancel). <strong>Anti-Exploit</strong>: PvE deaths never claim bounties; killing a <strong>same-nation or allied-nation</strong> player blocks payout! Legitimate kills grant total coins + <strong>+150 Nation XP (+250 if rival nation)</strong>.</li>
              <li><strong>Player Item Contracts</strong>: Requires owning a placed <strong>Mailbox</strong>. Specify any valid item (qty 1–64), Rank (F–S), coin reward (&ge;5 G), and XP reward paid upfront. Another player delivers items to claim rewards while items go directly to your Mailbox!</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Panneau de Primes (<code>jn:bounty_board</code>)</strong> : Craft <code>3x Papier + 4x Planches</code>. Grille 5x2 (10 emplacements) tournant toutes les <strong>60 min</strong> (reglable 30/60/120/180m) : <strong>Slots 0–2</strong> (F), <strong>Slots 3–4</strong> (E), <strong>Slots 5–7</strong> (D–B), <strong>Slots 8–9</strong> (B–S). Max <strong>3 quetes actives</strong> (2–5).</li>
              <li><strong>Primes PvP</strong> (<code>bounty_post</code>) : Min <strong>10 pieces</strong> (10–500 G), cumulables, anonymat possible, remboursables. <strong>Anti-Exploit</strong> : morts PvE ignorees ; tuer un membre de la <strong>meme nation ou allie</strong> bloque l'encaissement ! Prime legitime = cagnotte + <strong>+150 XP Nation (+250 si ennemi/autre nation)</strong>.</li>
              <li><strong>Contrats entre Joueurs</strong> : Exige une <strong>Boite aux Lettres</strong> posee. Quantite 1–64, recompense pieces (&ge;5 G) &amp; XP preleves d'avance ; objets livres dans votre Boite aux Lettres.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 30 Nation Quests (Ranks F to S)", fr: "Les 30 Quetes de Nation (Rangs F a S)" },
        dynamicWidget: "nation_quests",
        html: { en: "", fr: "" },
      },
      {
        heading: { en: "133 Citizen & Profession Dialogue Quests", fr: "Catalogue des 133 Quetes Citoyennes & Metiers" },
        html: {
          en: `
            <p>Talking to NPC Citizens via their <strong>1,608 dialogue nodes</strong> unlocks <strong>133 Citizen Quests</strong> (79 item retrieval, 21 courier delivery, 17 mob bounty, 10 exploration, 6 multi-bounty):</p>
            <ul>
              <li><strong>Farmer (10 quests)</strong>: Crops, undead/marauder clearing, deliveries &amp; the 3-stage <strong>Epic Colony Supply Chain</strong> (<code>200 G, 350 Player XP, 500 Nation XP, 3 Diamonds + loot rolls</code> for Enchanted Golden Apples / Emerald &amp; Iron Blocks).</li>
              <li><strong>Miner (10 quests)</strong>: Ores/metals + <em>Warden Hunt</em> (<code>64 G, 250 XP, 12 Diamonds</code>).</li>
              <li><strong>Lumberjack (2) &amp; Fisher (2)</strong>: Timber/Creeper clearing &amp; Cod/Drowned hunts.</li>
              <li><strong>Scouting / Studio Misc (47 quests)</strong>: Regional timber harvests, mail runs, combat gear &amp; multi-mob bounties (up to 6 Diamonds).</li>
              <li><strong>Researchers &amp; Clerics (15)</strong>: Paper, Amethyst, Redstone, Copper, Witches, Obsidian, Mushrooms, Nether Wart, Blaze Powder, Ghast Tear (40–150 G, 70–350 XP).</li>
              <li><strong>Hunters &amp; Tailors (15)</strong>: Rabbit Hides, Feathers, Phantoms, String, Leather, Wool, Dyes, Banners (45–95 G, 120–220 XP).</li>
              <li><strong>Knights &amp; Guards (15)</strong>: Iron gear, Shields, Arrows, Zombies, Spiders, Pillagers, Creepers, Military exploration (50–110 G, 90–260 XP).</li>
              <li><strong>Citizens, Hearth &amp; Merchants (15)</strong>: Bread, Baked Potatoes, Candles, Flower Pots, Gold/Emeralds, Sugar Cane, Dried Kelp, Copper (35–140 G, 70–320 XP).</li>
            </ul>
          `,
          fr: `
            <p>Discuter avec vos citoyens (<strong>1 608 dialogues</strong>) donne acces a <strong>133 Quetes Citoyennes</strong> (79 collectes, 21 livraisons, 17 chasses, 10 explorations, 6 multi-chasses) :</p>
            <ul>
              <li><strong>Fermier (10)</strong> : Recoltes, chasses et la chaine epique en 3 etapes <strong>Colony Supply Chain</strong> (<code>200 G, 350 XP Joueur, 500 XP Nation, 3 Diamants + table butin</code>).</li>
              <li><strong>Mineur (10)</strong> : Minerais &amp; chasse au Warden (<code>64 G, 250 XP, 12 Diamants</code>).</li>
              <li><strong>Bucheron (2) &amp; Pecheur (2)</strong> : Bois, Creepers, Morues &amp; Noyes.</li>
              <li><strong>Messagerie &amp; Divers Metiers (47)</strong> : Livraisons, bois regionaux, equipement &amp; multi-chasses.</li>
              <li><strong>Chercheurs &amp; Pretres (15)</strong> : Papier, Amethyste, Redstone, Sorcieres, Obsidienne, Verrues Nether, Poudre Blaze, Larme Ghast (40–150 G).</li>
              <li><strong>Chasseurs &amp; Tailleurs (15)</strong> : Lapins, Plumes, Phantoms, Cuir, Laine, Teintures, Bannieres (45–95 G).</li>
              <li><strong>Chevaliers &amp; Gardes (15)</strong> : Equipement fer, Boucliers, Fleches, Pillards, Creepers (50–110 G).</li>
              <li><strong>Citoyens, Foyer &amp; Marchands (15)</strong> : Bougies, Pots, Pains, Lingots d'Or, Emeraudes, Cuivre (35–140 G).</li>
            </ul>
          `,
        },
      },
    ],
  },
);

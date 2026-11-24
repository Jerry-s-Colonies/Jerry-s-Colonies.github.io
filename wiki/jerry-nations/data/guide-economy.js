/* Jerry's Nations Wiki — Guide Module 4: Workstations, Construction & Research */
window.JN_GUIDE_MODULES = window.JN_GUIDE_MODULES || [];
window.JN_GUIDE_MODULES.push(
  {
    id: "workstations-guide",
    group: "economy",
    kicker: { en: "10. Production Economy", fr: "10. Economie Productive" },
    title: {
      en: "Workstations (L1-L5) & All 16 Citizen Professions",
      fr: "Stations de Travail (Niv. 1-5) & Les 16 Metiers Citoyens",
    },
    subtitle: {
      en: "Exact production cycles, upgrade costs, adjacent chest rules, tool/fuel consumption, and full breakdowns of all 7 production stations.",
      fr: "Cycles de production, couts d'amelioration, regles de coffre, usure des outils/combustibles et detail complet des 7 stations de production.",
    },
    featuredBlocks: [
      "miner_station",
      "farm_station",
      "logger_station",
      "hunter_station",
      "cook_station",
      "craft_station",
      "courier_station",
    ],
    searchKeywords:
      "workstation miner farm logger hunter ranch cook craft smelter courier 1200 ticks upgrade 100 250 600 1500 fuel chest zone productivity",
    sections: [
      {
        heading: { en: "Universal Rules & Level 1-5 Progression", fr: "Regles Communes & Progression Niv. 1-5" },
        html: {
          en: `
            <p>There are <strong>16 Citizen Professions</strong>: <code>unassigned</code>, <code>builder</code>, <code>accountant</code>, <code>farmer</code>, <code>miner</code>, <code>logger</code>, <code>fisher</code>, <code>hunter</code> (Rancher), <code>cook</code>, <code>artisan</code>, <code>courier</code>, <code>doctor</code>, <code>knight</code>, <code>merchant</code>, <code>researcher</code>, and <code>cleric</code>.</p>
            <ul>
              <li><strong>Cycle &amp; Schedule</strong>: Runs every <strong>1,200 ticks (1 real minute)</strong> during <strong>daytime only</strong> (ticks <code>0–12500</code>). Pauses at night. Halts completely if worker catches <strong>Flu</strong> or <strong>Black Plague</strong>.</li>
              <li><strong>Adjacent Storage Required</strong>: Must touch at least 1 inventory block (Chest, Barrel, etc.) on any of its 6 faces to supply tools/fuel/inputs and receive outputs.</li>
              <li><strong>Worker Recruitment</strong>: Scans adult unassigned/matching NPCs within <strong>48 blocks</strong>, sorted by relevant skill (<code>1–20</code>).</li>
              <li><strong>Actions per Minute by Skill</strong>: <code>1–5</code> = <strong>1</strong> | <code>6–10</code> = <strong>1–2 (50%)</strong> | <code>11–15</code> = <strong>2</strong> | <code>16–20</code> = <strong>2–3 (50%)</strong>, capped by remaining tool durability/fuel charges. Workers auto-equip spare tools from the adjacent chest.</li>
              <li><strong>Floating Status Icons (y+1.2)</strong>: <strong>Red</strong> = missing chest, missing tool/fuel, or missing required blocks | <strong>Yellow</strong> = no worker, night, or empty zone | <strong>Green</strong> = operational.</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Level</th><th>Coin Cost</th><th>Required Tech</th><th>Cost Discount Tech</th><th>Default Radius</th><th>Nation XP</th></tr></thead>
              <tbody>
                <tr><td><strong>1</strong></td><td>0 (Craft/Place)</td><td>None</td><td>—</td><td>8 (17x17) | Courier: 16</td><td>—</td></tr>
                <tr><td><strong>2</strong></td><td><strong>100 coins</strong></td><td><code>station_level_2</code></td><td>-5% (<code>station_efficiency_i</code>)</td><td>10 (21x21) | Courier: 24</td><td><strong>+150 XP</strong></td></tr>
                <tr><td><strong>3</strong></td><td><strong>250 coins</strong></td><td><code>station_level_3</code></td><td>-10% (<code>ii</code>)</td><td>12 (25x25) | Courier: 32</td><td><strong>+225 XP</strong></td></tr>
                <tr><td><strong>4</strong></td><td><strong>600 coins</strong></td><td><code>station_level_4</code></td><td>-15% (<code>iii</code>)</td><td>14 (29x29) | Courier: 48</td><td><strong>+300 XP</strong></td></tr>
                <tr><td><strong>5</strong></td><td><strong>1,500 coins</strong></td><td><code>station_level_5</code></td><td>-20% (<code>iv</code>)</td><td>16 (33x33) | Courier: 64</td><td><strong>+375 XP</strong></td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <p>Il existe <strong>16 Metiers Citoyens</strong> : <code>unassigned</code>, <code>builder</code>, <code>accountant</code>, <code>farmer</code>, <code>miner</code>, <code>logger</code>, <code>fisher</code>, <code>hunter</code> (Eleveur), <code>cook</code>, <code>artisan</code>, <code>courier</code>, <code>doctor</code>, <code>knight</code>, <code>merchant</code>, <code>researcher</code> et <code>cleric</code>.</p>
            <ul>
              <li><strong>Cycle &amp; Horaires</strong> : <strong>1 200 ticks (1 minute reelle)</strong> de <strong>jour uniquement</strong> (ticks <code>0–12500</code>). S'arrete la nuit ou si l'ouvrier a la <strong>Grippe / Peste Noire</strong>.</li>
              <li><strong>Coffre adjacent obligatoire</strong> : inventaire sur une des 6 faces pour outils, combustibles, intrants et recoltes.</li>
              <li><strong>Rendement par competence (1–20)</strong> : <code>1–5</code> = <strong>1</strong> | <code>6–10</code> = <strong>1–2 (50%)</strong> | <code>11–15</code> = <strong>2</strong> | <code>16–20</code> = <strong>2–3 (50%)</strong> actions/min. Reequipement automatique depuis le coffre.</li>
              <li><strong>Marqueurs (y+1.2)</strong> : <strong>Rouge</strong> = coffre/outil/bloc requis manquant | <strong>Jaune</strong> = sans ouvrier, nuit ou zone vide | <strong>Vert</strong> = actif.</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Niveau</th><th>Cout</th><th>Recherche requise</th><th>Reduction cout</th><th>Rayon defaut</th><th>XP Nation</th></tr></thead>
              <tbody>
                <tr><td><strong>1</strong></td><td>0</td><td>Aucune</td><td>—</td><td>8 (17x17) | Coursier : 16</td><td>—</td></tr>
                <tr><td><strong>2</strong></td><td><strong>100</strong></td><td><code>station_level_2</code></td><td>-5% (<code>station_efficiency_i</code>)</td><td>10 | Coursier : 24</td><td><strong>+150 XP</strong></td></tr>
                <tr><td><strong>3</strong></td><td><strong>250</strong></td><td><code>station_level_3</code></td><td>-10% (<code>ii</code>)</td><td>12 | Coursier : 32</td><td><strong>+225 XP</strong></td></tr>
                <tr><td><strong>4</strong></td><td><strong>600</strong></td><td><code>station_level_4</code></td><td>-15% (<code>iii</code>)</td><td>14 | Coursier : 48</td><td><strong>+300 XP</strong></td></tr>
                <tr><td><strong>5</strong></td><td><strong>1 500</strong></td><td><code>station_level_5</code></td><td>-20% (<code>iv</code>)</td><td>16 | Coursier : 64</td><td><strong>+375 XP</strong></td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
      {
        heading: { en: "Detailed Breakdown of All 7 Production Stations", fr: "Detail Complet des 7 Stations de Production" },
        html: {
          en: `
            <ul>
              <li><strong>1. Mining Station (<code>jn:miner_station</code>, skill: Mining)</strong>: No surface zone. Worker goes underground during daytime shift (<code>invisibility</code> + <code>jn:is_in_mine</code>). Requires any Vanilla Pickaxe.
                <ul>
                  <li>L1: Coal 60%, Raw Copper 40% | L2: Coal 50%, Copper 30%, Raw Iron 20% | L3: Coal 40%, Copper 25%, Iron 20%, Raw Gold 10%, Redstone 5% | L4: Coal 32%, Copper 22%, Iron 20%, Gold 13%, Redstone 7%, Lapis 4%, Diamond 2% | L5: Coal 28%, Copper 20%, Iron 20%, Gold 14%, Redstone 8%, Lapis 4%, <strong>Diamond 5%, Netherite Scrap 1%</strong>.</li>
                </ul>
              </li>
              <li><strong>2. Farm Station (<code>jn:farm_station</code>, skill: Farming)</strong>: Requires Hoe. Harvests &amp; replants live crops in radius (<code>dy -2..+2</code>). L1: Wheat, Carrots, Potatoes, Beetroot | L2+: Sweet Berries, Sugar Cane/Bamboo, Pumpkins/Melons | L3+: Auto-seeds empty farmland + fertilizes +2 stages (1/2/3 plants at L3/L4/L5) | L4: +1 crop bonus | L5: +2 crop bonus. Output multiplied by <em>Farming I–IV</em> (<strong>x1.2 / x1.3 / x1.5 / x1.7</strong>, excluding seeds).</li>
              <li><strong>3. Logging Station (<code>jn:logger_station</code>, skill: Strength)</strong>: Requires Axe. Anti-grief BFS detects natural trees only (natural soil + leaves, up to 96 logs). Cuts top-down (4 / 6 / 8 / 10 / 16 logs/action at L1–L5) and replants matching Sapling (all 9 wood types). L2+: drops 1–2 Sticks; L3+: 35% Apple on Oak/Dark Oak; L4–L5: +1/+2 bonus logs &amp; fertilizes saplings.</li>
              <li><strong>4. Ranching Station (<code>jn:hunter_station</code>, skill: max Precision/Farming)</strong>: Requires Shears or Sword. Manages 7 species (Sheep, Chicken, Cow, Mooshroom, Pig, Rabbit, Goat). Always keeps <strong>min 2 adults/species</strong>, culls surplus for meat/leather, auto-breeds if under capacity (6 / 8 / 10 / 12 / 16 beasts; 1–2 births/day; 4-min breed cooldown), and collects passive Wool/Eggs/Leather/Mushrooms without killing. L4/L5 add +1/+2 bonus drops.</li>
              <li><strong>5. Cooking Station (<code>jn:cook_station</code>, skill: max Cooking/Farming)</strong>: Needs <strong>1 / 1 / 2 / 2 / 3 Smokers or Furnaces</strong> in zone + Fuel in chest (Coal Block 80, Dried Kelp Block 20, Blaze Rod 12, Coal/Charcoal 8, Logs 4, Planks 2, Stick 1). L1: all raw meats/fish &amp; baked potatoes | L2: 2 Wheat -&gt; Bread, 3 Beetroot -&gt; Beetroot Soup | L3: Pumpkin Pie, Rabbit Stew, 4 Cookies | L4: +1 bonus dish | L5: 2 Carrot + Gold Ingot -&gt; 2 Golden Carrots + <strong>+2 bonus dishes</strong>.</li>
              <li><strong>6. Crafting Station (<code>jn:craft_station</code>, skill: max Engineering/Mining)</strong>: Needs <strong>1 / 1 / 1+1 Anvil / 2+1 / 2+2 Blast Furnaces + Anvils</strong> in zone + Fuel. <strong>3 cyclable priority modes</strong> (with auto-fallback):
                <ul>
                  <li><em>Smelt</em>: L1 Raw Copper -&gt; Ingot (+1 bonus L4–5) &amp; Logs -&gt; 4 Sticks | L2 Raw Iron | L3 Raw Gold | L5: 2 Netherite Scrap + 2 Gold -&gt; 1 Netherite Ingot.</li>
                  <li><em>Tools</em>: L1–2 Leather Boots | L3+ Shears &amp; Iron Pick/Axe/Hoe/Sword/Boots | L5 Diamond Pick/Axe/Hoe/Sword.</li>
                  <li><em>Supplies &amp; Remedies</em>: L2+: 2 Wool -&gt; <strong>1 Bandage (2 at L4+)</strong> straight into <strong>Military Emergency Reserve</strong>; L3+: 1 Feather + 1 Stick -&gt; <strong>4 Arrows</strong> into <strong>Military Ammo Reserve</strong>; L2+: <code>jn:organic_extract</code>; L3+: TB Remedy; L4+: Plague Remedy.</li>
                </ul>
              </li>
              <li><strong>7. Courier Station (<code>jn:courier_station</code>, skill: max Speed/Strength)</strong>: Needs Boots/Lead/Saddle + <strong>1 / 2 / 2 / 3 / 4 Chests or Barrels</strong> nearby. Radius <strong>16 / 24 / 32 / 48 / 64</strong>; throughput <code>8 / 16 / 24 / 32 / 64 x actions</code>. Moves (1) raw foods -&gt; Cooking Station, (2) raw materials -&gt; Crafting Station, (3) <strong>L3+: auto-refills 2 spare tools &amp; 8 fuel</strong> across linked stations, and (4) centralizes all finished goods into Courier's chest.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>1. Station Miniere (<code>jn:miner_station</code>, stat : Minage)</strong> : Pas de zone. Le mineur part sous terre le jour (<code>invisibility</code>). Exige une Pioche. L1: Charbon 60%, Cuivre 40% | L2: +Fer 20% | L3: +Or 10%, Redstone 5% | L4: +Lapis 4%, Diamant 2% | L5: <strong>Diamant 5%, Debris Netherite 1%</strong>.</li>
              <li><strong>2. Station Agricole (<code>jn:farm_station</code>, stat : Agriculture)</strong> : Exige une Houe. Recolte et replante les cultures du monde (<code>dy -2..+2</code>). L1: Ble, Carottes, Patates, Betteraves | L2+: Baies, Canne/Bambou, Citrouilles/Pasteques | L3+: Semis auto sur terre labouree + fertilisation +2 stades | L4/L5: +1/+2 recolte bonus, multiplies par <em>Agriculture I–IV</em> (<strong>x1.2 a x1.7</strong>).</li>
              <li><strong>3. Station Forestiere (<code>jn:logger_station</code>, stat : Force)</strong> : Exige une Hache. Scan anti-grief BFS sur vrais arbres uniquement (sol naturel + feuilles, max 96 buches). Coupe 4/6/8/10/16 buches/action et replante la pousse (9 essences). L2+: batons ; L3+: 35% pomme (chene/chene noir) ; L4–L5: +1/+2 buches + fertilisation.</li>
              <li><strong>4. Station d'Elevage (<code>jn:hunter_station</code>, stat : max Precision/Agriculture)</strong> : Exige Cisailles ou Epee. Gere 7 especes (Mouton, Poulet, Vache, Champimeuh, Cochon, Lapin, Chevre). Garde toujours <strong>min 2 adultes/espece</strong>, abat le surplus, reproduit auto (plafond 6/8/10/12/16, cooldown 4 min), recolte laine/oeufs/cuir passifs (+1/+2 bonus L4/L5).</li>
              <li><strong>5. Station Culinaire (<code>jn:cook_station</code>, stat : max Cuisine/Agriculture)</strong> : Exige <strong>1 / 1 / 2 / 2 / 3 Fumoirs ou Fourneaux</strong> + Combustible (Bloc charbon 80, Varech 20, Blaze 12, Charbon 8, Buches 4, Planches 2, Baton 1). L1 viandes/poissons/patates | L2 pain/soupe betterave | L3 tarte/ragout/cookies | L4 +1 plat bonus | L5 carottes dorees + <strong>+2 plats bonus</strong>.</li>
              <li><strong>6. Station d'Artisanat (<code>jn:craft_station</code>, stat : max Ingenierie/Minage)</strong> : Exige <strong>1 / 1 / 1+1 Enclume / 2+1 / 2+2 Hauts Fourneaux + Enclumes</strong> + Combustible. <strong>3 modes cyclables</strong> : Fonderie (Cuivre -> Fer -> Or -> Netherite L5), Outillage (Cuir -> Fer/Cisailles L3 -> Diamant L5), Intendance (2 Laine -> <strong>Bandages vers Reserve Militaire</strong> ; Plume+Baton -> <strong>4 Fleches vers Munitions Militaires</strong> ; Extrait/Remedes TB &amp; Peste).</li>
              <li><strong>7. Station de Coursier (<code>jn:courier_station</code>, stat : max Vitesse/Force)</strong> : Exige Bottes/Laisse/Selle + <strong>1/2/2/3/4 Coffres/Tonneaux</strong>. Rayon <strong>16/24/32/48/64</strong>. Transfere vivres crus -> Cuisine, materiaux -> Artisanat, <strong>Niv. 3+: maintient 2 outils &amp; 8 combustibles dans les stations</strong>, et centralise les produits finis.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "construction-blueprints",
    group: "economy",
    kicker: { en: "11. Architecture & Building", fr: "11. Architecture & Chantiers" },
    title: {
      en: "Blueprints, Builders & All 52 Official Structures",
      fr: "Construction, Plans & Les 52 Structures Officielles",
    },
    subtitle: {
      en: "How to place 3D particle holograms with Isometric/Sky cameras, supply or fund materials, assign Builders, scan custom structures, and browse all 52 blueprints.",
      fr: "Placement par hologramme 3D et camera Iso/Ciel, depot ou financement des materiaux, batisseurs, scanner custom et catalogue complet des 52 plans.",
    },
    featuredBlocks: ["construction_board", "construction_site_board"],
    featuredItems: ["jn:blueprint", "jn:architect_scanner"],
    searchKeywords:
      "construction blueprint table site board builder time formula hologram isometric sky camera custom scanner 32768 materials funding house cottage smeltery townhall",
    sections: [
      {
        heading: { en: "Blueprint Table, Hologram Placement & Site Board", fr: "Table a Plans, Placement 3D & Panneau de Chantier" },
        html: {
          en: `
            <ul>
              <li><strong>Blueprint Table (<code>jn:construction_board</code>)</strong>: Craft <code>3x Paper + 3x Planks + 1x Stick</code>. Opens the Construction Hub with 3 tabs: <strong>Builder Team</strong> (64b adult <code>builder</code> NPCs), <strong>Active Sites</strong>, and <strong>Blueprint Catalog</strong> (1x <code>minecraft:paper</code> per official blueprint, or paper + 10–250 coins for custom plans).</li>
              <li><strong>3D Hologram &amp; Control Pad</strong>: Craft <code>jn:blueprint</code> (<code>Paper + Lapis</code>; Sneak+Right-click opens catalog). Normal Right-click starts Blueprint Mode: renders a <code>jn:selection_box</code> particle outline (no leftover entities) with <strong>Isometric</strong> and <strong>Sky (2D Zenith)</strong> cameras, plus a <strong>3x3 Shift Pad</strong> (<code>X±1</code>, <code>Y±1</code>, <code>Z±1</code>, <code>+90 deg Rotate</code>, <code>Camera Toggle</code>, <code>Confirm</code>).</li>
              <li><strong>Terrain Check &amp; Site Prep</strong>: Requires <code>-64 &lt;= minY &lt;= maxY &lt;= 319</code>, &ge;20% solid ground under base, and zero illegal corner blocks (bedrock, barrier, command/structure/portal). Clears volume and levels base with <code>packed_mud</code>/<code>mud_bricks</code> (backed up so cancelling restores original terrain and refunds all deposited/funded materials!). Places <strong>Construction Site Board</strong> (<code>jn:construction_site_board</code>) on the edge.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Table a Plans (<code>jn:construction_board</code>)</strong> : Craft <code>3x Papier + 3x Planches + 1x Baton</code>. Hub en 3 volets : <strong>Equipe de batisseurs</strong>, <strong>Chantiers en cours</strong> et <strong>Atelier des plans</strong> (1x papier par plan officiel ; papier + 10-250 pieces pour plan custom).</li>
              <li><strong>Previsualisation 3D &amp; Pad 3x3</strong> : Craft <code>jn:blueprint</code> (<code>Papier + Lapis</code> ; Sneak+Clic ouvre le catalogue). Clic droit normal active la boite de particules <code>jn:selection_box</code> avec cameras <strong>Isometrique</strong> / <strong>Ciel 2D</strong> et pad (<code>X±1, Y±1, Z±1, Rotation +90°, Changer Camera, Valider</code>).</li>
              <li><strong>Chantier &amp; Annulation</strong> : Exige &ge;20% sol solide et pas de blocs interdits aux coins. Nivele en boue sechee (sauvegarde integrale : annuler restaure le terrain et rend materiaux/pieces !). Pose le <strong>Panneau de Chantier</strong> (<code>jn:construction_site_board</code>).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Materials, Funding, Builders & Completion Rewards", fr: "Materiaux, Financement, Batisseurs & Recompenses" },
        html: {
          en: `
            <ul>
              <li><strong>Material Reductions &amp; Treasury Funding</strong>: <em>Efficient Construction I/II/III</em> cuts requirements by <strong>10% / 20% / 30%</strong>. <em>Funding I/II</em> lets authorized treasurers pay for up to <strong>50%</strong> of total items at <strong>6 or 4 coins/item</strong>.</li>
              <li><strong>Builder Requirement</strong>: Once materials reach 100%, construction timer ONLY progresses while at least 1 adult <strong>Builder</strong> NPC is assigned (1 site per builder). Floating markers: Yellow = needs materials; Red = ready but 0 Builders assigned.</li>
              <li><strong>Exact Build Time Formula</strong>:
                <br><code>baseSeconds = max(10, (totalSolidBlocks * 2) + (width * length))</code>
                <br>Scaled by World Speed (<code>instant=0 / fast=x0.5 / normal=x1 / slow=x2</code>), divided by <em>Quick Build I–III</em> (<code>1.10 / 1.20 / 1.30</code>), and reduced by Builders' combined Crafting/Constitution stats: <strong>-2% per point, capped at -75%</strong>.</li>
              <li><strong>Completion Rewards</strong>: <strong>+200 Nation XP</strong> + Mood bonus by size: <strong>+20</strong> (small), <strong>+35</strong> (medium), <strong>+60</strong> (large: volume &ge;400 or materials &ge;150 — all 52 official structures grant +60).</li>
              <li><strong>Admin Architect's Scanner</strong> (<code>jn:architect_scanner</code> — craft: <code>1x Amethyst Shard + 2x Gold Ingot</code>): Admin-only 2-point scan (max <strong>32,768 blocks</strong>, rejects containers to prevent item duplication) to publish custom blueprints at 10–250 coins.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Reductions &amp; Financement</strong> : <em>Construction efficace I/II/III</em> reduit les couts de <strong>10% / 20% / 30%</strong>. <em>Financement I/II</em> permet de payer jusqu'a <strong>50%</strong> des materiaux en Tresorerie a <strong>6 ou 4 pieces/item</strong>.</li>
              <li><strong>Role du Batisseur</strong> : a 100% materiaux, le chrono n'avance QUE si au moins 1 PNJ <code>builder</code> adulte est affecte.</li>
              <li><strong>Formule de duree</strong> : <code>max(10, totalSolidBlocks * 2 + L * P)</code> en secondes, ajuste par Vitesse Monde (<code>0 / x0.5 / x1 / x2</code>), divise par <em>Construction rapide I–III</em> (<code>1.10 / 1.20 / 1.30</code>), puis reduit de <strong>-2% par point d'Artisanat des batisseurs (max -75%)</strong>.</li>
              <li><strong>Recompenses</strong> : <strong>+200 XP Nation</strong> + <strong>+20 / +35 / +60 Moral</strong> (les 52 structures officielles donnent +60).</li>
              <li><strong>Scanner d'Architecte (Admins)</strong> (<code>jn:architect_scanner</code>) : scan A-&gt;B (max <strong>32 768 blocs</strong>, coffres interdits anti-duplication) pour vendre des plans custom a 10–250 pieces.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 52 Official Structures Catalog", fr: "Catalogue des 52 Structures Officielles" },
        dynamicWidget: "structures",
        html: { en: "", fr: "" },
      },
    ],
  },
  {
    id: "research-tree",
    group: "economy",
    kicker: { en: "12. Science & Technology", fr: "12. Science & Technologies" },
    title: {
      en: "Research Tables & Complete 76-Technology Tree",
      fr: "Tables de Recherche & Arbre des 76 Technologies",
    },
    subtitle: {
      en: "Parallel multi-table research queues, Researcher Intelligence speed scaling (-40% max), RP generation (+2/level), and all 76 technologies.",
      fr: "Tables de recherche paralleles, bonus d'Intelligence du chercheur (-40% max), points PR (+2/niveau) et catalogue des 76 technologies.",
    },
    featuredBlocks: ["research_table"],
    searchKeywords:
      "research table technology pr points researcher intelligence 40% refund queue 76 farming construction diplomacy economics defense sanitary",
    sections: [
      {
        heading: { en: "Research Table Rules, Speed & Points", fr: "Fonctionnement des Tables, Vitesse & Points (PR)" },
        html: {
          en: `
            <ul>
              <li><strong>Research Table (<code>jn:research_table</code>)</strong>: Craft <code>1x Book + 1x Paper + 2x Wooden Slabs + 2x Logs</code>.</li>
              <li><strong>Parallel Queues</strong>: Nations can build and register <strong>multiple Research Tables</strong> — each has its own Researcher, active project, and queue for parallel research.</li>
              <li><strong>Researcher Speed Bonus</strong>: Scans adult NPCs within <strong>64 blocks</strong> sorted by Intelligence (<code>1–20</code>). Cuts duration by <strong>2% per point (-2% to -40% max at 20/20)</strong>. If the researcher dies/leaves, the timer pauses until reassigned.</li>
              <li><strong>Research Points (RP) &amp; Refunds</strong>: Awarded at <strong>+2 RP per global nation level gained</strong> (plus <strong>+15 Nation XP</strong> when a tech finishes). Cancelling active/queued research or breaking a table <strong>refunds 100% of spent RP</strong>.</li>
              <li><strong>Base Durations</strong>: Tier-0/1 1-RP techs = <strong>10m (600s)</strong> | 1-RP Tier 2+ = <strong>15m</strong> | 2-RP = <strong>25–35m</strong> | 3-RP = <strong>50–60m</strong> | 4-RP = <strong>90–120m</strong>.</li>
              <li><strong>71 Implemented + 5 Planned</strong>: 71 technologies are fully active in gameplay; 5 nodes (<code>foreign_aid</code>, <code>divine_leadership</code>, <code>scholarly_methods_i/ii/iii</code>) are marked unimplemented in code.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Table de Recherche (<code>jn:research_table</code>)</strong> : Craft <code>1x Livre + 1x Papier + 2x Dalles + 2x Buches</code>.</li>
              <li><strong>Multi-Tables Paralleles</strong> : Une nation peut poser <strong>plusieurs Tables de Recherche</strong> ayant chacune leur chercheur et leur file d'attente.</li>
              <li><strong>Reduction par Intelligence</strong> : Chercheur scanne a <strong>64 blocs</strong>. Reduit la duree de <strong>2% par point d'Intelligence (-2% a -40% max)</strong>. Met en pause si le chercheur meurt.</li>
              <li><strong>Points PR &amp; Remboursement</strong> : <strong>+2 PR par niveau de nation</strong> (+ <strong>+15 XP Nation</strong> par tech terminee). Annuler ou casser une table <strong>rembourse 100% des PR</strong>.</li>
              <li><strong>71 Actives + 5 Prevues</strong> : 71 technologies actives en jeu ; 5 noeuds sont marques non implementes dans le code (<code>foreign_aid</code>, <code>divine_leadership</code>, <code>scholarly_methods_i/ii/iii</code>).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 76 Technologies Across 7 Categories", fr: "Les 76 Technologies sur 7 Categories" },
        dynamicWidget: "research",
        html: { en: "", fr: "" },
      },
    ],
  },
);

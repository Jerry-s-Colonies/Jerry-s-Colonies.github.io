/* Jerry's Nations Wiki — Guide Module 3: Citizens, Hearths, Food, Diseases & Mail */
window.JN_GUIDE_MODULES = window.JN_GUIDE_MODULES || [];
window.JN_GUIDE_MODULES.push(
  {
    id: "citizens-lifecycle",
    group: "society",
    kicker: { en: "7. Population", fr: "7. Population" },
    title: {
      en: "NPC Citizens: Recruitment, Births, Genetics, Shops & Graves",
      fr: "Citoyens PNJ : Recrutement, Naissances, Genetique, Boutiques & Tombes",
    },
    subtitle: {
      en: "Complete citizen simulation: invitations, Mendelian inheritance, 4 ethnicities, 10 skills, 1,608 dialogues, 8 shop catalogs, 11-slot inventory, claim containment & graves.",
      fr: "Simulation complete des citoyens : invitations, heredite mendelienne, 4 ethnies, 10 stats, 1 608 dialogues, 8 boutiques, inventaire 11 slots, confinement & tombes.",
    },
    featuredBlocks: ["grave", "hearth", "mayor_table"],
    featuredItems: ["jn:citizenship_invitation", "jn:coin"],
    searchKeywords:
      "citizen recruit invitation birth genetics consanguinity child growth adult ethnicity skin clothing stats hunger energy mood dialogue shop inventory bag totem containment grave",
    sections: [
      {
        heading: { en: "Recruitment, Birth Conditions & Mendelian Genetics", fr: "Recrutement, Naissances & Genetique Mendelienne" },
        html: {
          en: `
            <ul>
              <li><strong>Citizenship Invitation</strong> (<code>jn:citizenship_invitation</code> — craft: <code>9x Books</code>): Right-click to choose Male/Female NPC, spawns 2 blocks ahead, matches biome ethnicity &amp; regional clothing, grants <strong>+60 Nation XP</strong>. Requires <code>citizen_recruit_dismiss</code> &amp; free NPC capacity.</li>
              <li><strong>Daily Natural Births</strong> (checked at dawn / new day, <strong>10% daily chance</strong>):
                <ul>
                  <li>Max <strong>3 pending births</strong> at once; total citizens + pending &lt; Nation Tier NPC cap.</li>
                  <li>No Tier 4 Famine &amp; Nation Mood &ge; <code>-500</code>.</li>
                  <li>Requires an eligible fertile couple aged <strong>18–60</strong> passing strict <strong>anti-consanguinity checks up to 2nd degree</strong> (bans self, parent/child, grandparent, full &amp; half siblings, first cousins).</li>
                  <li><strong>Hearth Rule</strong>: If your nation owns Hearths, requires a Hearth with a free bed, a cohabiting couple, and <strong>no existing child (&lt;18)</strong> already living there (1 child max per Hearth until adulthood).</li>
                  <li><strong>Confirmation</strong>: Leader confirms pending birth at the Leader Table (can rename child), spawns at Age 1, assigns bed, grants <strong>+60 Nation XP</strong>.</li>
                </ul>
              </li>
              <li><strong>Genetics & Growth</strong>: Gender 50/50; <strong>5 stats from father + 5 from mother</strong>, each skill has a <strong>5% mutation chance (+1 or +2)</strong>. Skin/Hair/Eyes blend parent &amp; ethnic pools (White+Black yields 55% Bronze). Life stages: <em>Baby</em> (&lt;6), <em>Kid</em> (6–12), <em>Teen</em> (13–17), <em>Adult</em> (18+). Grows <strong>+1 year naturally every morning</strong> (17 days) or <strong>+1 year instantly</strong> when fed any of the <strong>18 growth foods</strong> (apple, bread, cooked meats, carrot, potato, cake, pie, berries, etc.).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Invitation Citoyenne</strong> (<code>jn:citizenship_invitation</code> — craft : <code>9x Livres</code>) : choix Homme/Femme, spawne a 2 blocs, apparence &amp; tenue adaptees au biome, <strong>+60 XP Nation</strong> (perm <code>citizen_recruit_dismiss</code>).</li>
              <li><strong>Naissances Quotidiennes</strong> (aube / nouveau jour, <strong>10% de chance/jour</strong>) :
                <ul>
                  <li>Max <strong>3 naissances en attente</strong> ; population + attente &lt; plafond du Palier.</li>
                  <li>Pas de Famine Tier 4 et Moral &ge; <code>-500</code>.</li>
                  <li>Couple adulte nubile (<strong>18 a 60 ans</strong>) sans lien de parente jusqu'au <strong>2e degre</strong> (interdit soi-meme, parent/enfant, grand-parent, fratrie/demi-fratrie, cousins germains).</li>
                  <li><strong>Regle des Foyers</strong> : exige un Foyer avec 1 lit libre, couple cohabitant et <strong>0 autre enfant (&lt;18 ans)</strong> dans ce foyer.</li>
                  <li>Validation manuelle par le dirigeant a la Table du Maire (renommage possible), <strong>+60 XP Nation</strong>.</li>
                </ul>
              </li>
              <li><strong>Genetique & Croissance</strong> : 5 stats du pere + 5 de la mere + <strong>5% mutation (+1/+2)</strong> par stat. Stades : <em>Bebe</em> (&lt;6), <em>Enfant</em> (6–12), <em>Adolescent</em> (13–17), <em>Adulte</em> (18+). Croissance : <strong>+1 an/jour</strong> au lever du soleil OU <strong>+1 an instantane</strong> avec l'un des <strong>18 aliments de croissance</strong>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Skills, Needs, Dialogues, 11-Slot Inventory & Containment", fr: "Stats, Besoins, Dialogues, Inventaire 11 Slots & Confinement" },
        html: {
          en: `
            <ul>
              <li><strong>10 Skills (1–20)</strong>: <em>Strength, Agility, Precision, Constitution, Farming, Mining, Crafting, Intelligence, Commerce, Leadership</em>. Recruits start aged 18–45; rolls weight Novice (1–5, 60% base) -> Skilled (6–10, 25%) -> Expert (11–15, 12%) -> Master (16–20, 3%), boosted by Nation Tier.</li>
              <li><strong>Needs</strong>: Hunger &amp; Energy start at 100 and drop <code>-1% / 60s</code> (floor 5%); Mood = <code>floor(hunger*0.5 + energy*0.5)</code>. Direct feeding (8 basic foods) restores 100% Hunger, +25% Energy, +10 Mood, and full HP.</li>
              <li><strong>Interactions &amp; 1,608 Dialogues</strong>: Right-click for split-UI Info, 1,608 profession dialogues &amp; quests, Follow/Stay/Free orders (<code>citizen_orders</code>), Trade Shops, or Give Remedy. Sneak + Right-click opens <strong>11-Slot 3D Inventory</strong> (0–3 Armor, 4 Mainhand, 5 Offhand, 6 Bag/Bundle, 7–10 Bag Expansion Slots — <strong>Totems of Undying strictly banned</strong>; auto-closes beyond 6 blocks or 60s).</li>
              <li><strong>Claim Containment</strong>: Every 3s (or on damage outside claims), wandering non-following citizens outside nation/sector borders teleport safely home with <strong>Resistance V (5s) + Slow Falling I (3s)</strong>.</li>
              <li><strong>Graves (<code>jn:grave</code>)</strong>: Citizens/Soldiers leave a protective gravestone storing all items and exact cause of death. Cannot be broken while holding items (<code>grave_inspect</code> / <code>grave_loot</code>). Looting destroys the grave and deducts <strong>25% max durability</strong> per durable item (leaving at least 1 durability).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>10 Competences (1–20)</strong> : <em>Force, Agilite, Precision, Constitution, Agriculture, Minage, Artisanat, Intelligence, Commerce, Commandement</em>. Recrues 18–45 ans ; tirage pondere (Novice 60%, Qualifie 25%, Expert 12%, Maitre 3%) ameliore par le Palier.</li>
              <li><strong>Besoins</strong> : Faim &amp; Energie baissent de <code>-1% / 60s</code> (min 5%). Nourrissage direct restaure 100% Faim, +25% Energie, +10 Moral et 100% PV.</li>
              <li><strong>Interactions &amp; 1 608 Dialogues</strong> : Clic droit pour Infos, Dialogues/Quetes, Ordres (Suivre/Rester/Libre), Boutiques ou Soin. Sneak+Clic droit ouvre l'<strong>Inventaire 11 slots</strong> (0–3 Armure, 4–5 Mains, 6 Sac, 7–10 Extensions de sac — <strong>Totems interdits</strong>).</li>
              <li><strong>Confinement territorial</strong> : verifie toutes les 3s ; tout citoyen hors frontieres (hors ordre suivre / mine) est rapatrie avec <strong>Resistance V (5s) + Chute lente I (3s)</strong>.</li>
              <li><strong>Tombes (<code>jn:grave</code>)</strong> : conservent tout l'equipement et la cause exacte du deces. Incassable tant que pleine (<code>grave_inspect</code> / <code>grave_loot</code>). Piller inflige <strong>-25% durabilite max</strong> aux objets durables (min 1 pt restant).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 8 Citizen Shop Catalogs (Coins / Emeralds 1:1)", fr: "Les 8 Catalogues de Boutiques Citoyennes (1:1 Pieces/Emeraudes)" },
        html: {
          en: `
            <p>Requires <code>citizen_trade</code>. Buys accept <code>jn:coin</code> first, then Emeralds (or Nation Treasury if permitted); sells pay in <code>jn:coin</code>.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Profession</th><th>Player Buys (Price)</th><th>Player Sells to NPC (Reward)</th></tr></thead>
              <tbody>
                <tr><td><strong>Farmer</strong></td><td>Wheat/Beet Seeds x16 (1), Carrot/Potato/Wheat x8 (1), Bread/Apple x4 (1), Berries x12 (1), Iron Hoe (5)</td><td>Wheat/Carrot/Potato/Beetroot x16 (+1), Pumpkin x4 (+1), Melon Slice x24 (+1)</td></tr>
                <tr><td><strong>Miner</strong></td><td>Torch x16 (1), Coal x8 (1), Raw Copper/Lapis x8 (2), Raw Iron x4 (2), Redstone x12 (2), Iron Pickaxe (5)</td><td>Coal x16 (+1), Raw Iron x8 (+2), Raw Copper x16 (+2), Raw Gold x6 (+2), Cobble x64 (+1)</td></tr>
                <tr><td><strong>Logger</strong></td><td>Oak/Birch/Spruce Log x8 (1), Sapling x4 (1), Charcoal x8 (1), Apple x6 (1), Iron Axe (5)</td><td>Oak/Birch/Spruce Log x16 (+1), Stick x32 (+1)</td></tr>
                <tr><td><strong>Hunter/Rancher</strong></td><td>Wool x8 (1), Leather x6 (2), Egg x12 (1), Beef/Pork x6 (2), Mutton x6 (1), Lead x2 (2), Shears (4)</td><td>Wool x16 (+1), Leather x8 (+2), Egg x16 (+1), Feather x24 (+1), Beef/Pork x10 (+2)</td></tr>
                <tr><td><strong>Fisher</strong></td><td>Cod x8 (1), Salmon x6 (1), Cooked Cod x6 (2), Cooked Salmon x4 (2), Dried Kelp x16 (1), Rod (3)</td><td>Cod x12 (+1), Salmon x10 (+1), Tropical Fish x4 (+1), Pufferfish x2 (+1)</td></tr>
                <tr><td><strong>Cleric</strong></td><td>Glass Bottle x8 (1), Nether Wart x4 (2), Magma Cream x2 (2), Gunpowder x4 (2), Glowstone x6 (2), Potion (4)</td><td>Brown/Red Mushroom x10 (+1), Spider Eye x6 (+1), Rotten Flesh x24 (+1)</td></tr>
                <tr><td><strong>Knight</strong></td><td>Arrow x16 (1), Iron Sword/Shield (4), Iron Helmet (6), Chestplate (10), Leggings (8), Boots (5)</td><td>Iron Ingot x8 (+4), Bow (+1), Bone x16 (+1)</td></tr>
                <tr><td><strong>Unassigned</strong></td><td>Bread x4 (1), Torch x12 (1), String x6 (1), Leather x4 (2)</td><td>Wheat x16 (+1), Cobble x64 (+1), Stick x32 (+1)</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <p>Permission <code>citizen_trade</code>. Achats en <code>jn:coin</code> puis Emeraudes (ou Tresorerie) ; ventes payees en <code>jn:coin</code>.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Metier</th><th>Achat au PNJ (Prix)</th><th>Vente au PNJ (Gain)</th></tr></thead>
              <tbody>
                <tr><td><strong>Fermier</strong></td><td>Graines Ble/Betterave x16 (1), Carotte/Patate/Ble x8 (1), Pain/Pomme x4 (1), Baies x12 (1), Houe fer (5)</td><td>Ble/Carotte/Patate/Betterave x16 (+1), Citrouille x4 (+1), Pasteque x24 (+1)</td></tr>
                <tr><td><strong>Mineur</strong></td><td>Torche x16 (1), Charbon x8 (1), Cuivre brut/Lapis x8 (2), Fer brut x4 (2), Redstone x12 (2), Pioche fer (5)</td><td>Charbon x16 (+1), Fer brut x8 (+2), Cuivre brut x16 (+2), Or brut x6 (+2), Cobble x64 (+1)</td></tr>
                <tr><td><strong>Bucheron</strong></td><td>Buche Chene/Bouleau/Sapin x8 (1), Pousse x4 (1), Charbon bois x8 (1), Pomme x6 (1), Hache fer (5)</td><td>Buche x16 (+1), Baton x32 (+1)</td></tr>
                <tr><td><strong>Eleveur</strong></td><td>Laine x8 (1), Cuir x6 (2), Oeuf x12 (1), Boeuf/Porc x6 (2), Mouton x6 (1), Laisse x2 (2), Cisailles (4)</td><td>Laine x16 (+1), Cuir x8 (+2), Oeuf x16 (+1), Plume x24 (+1), Boeuf/Porc x10 (+2)</td></tr>
                <tr><td><strong>Pecheur</strong></td><td>Morue x8 (1), Saumon x6 (1), Morue cuite x6 (2), Saumon cuit x4 (2), Varech x16 (1), Canne (3)</td><td>Morue x12 (+1), Saumon x10 (+1), Poisson tropical x4 (+1), Globe x2 (+1)</td></tr>
                <tr><td><strong>Pretre</strong></td><td>Fiole x8 (1), Verrue Nether x4 (2), Creme magma x2 (2), Poudre x4 (2), Glowstone x6 (2), Potion (4)</td><td>Champignon brun/rouge x10 (+1), Oeil araignee x6 (+1), Chair putrefiee x24 (+1)</td></tr>
                <tr><td><strong>Chevalier</strong></td><td>Fleche x16 (1), Epee/Bouclier fer (4), Casque (6), Plastron (10), Jambieres (8), Bottes fer (5)</td><td>Lingot fer x8 (+4), Arc (+1), Os x16 (+1)</td></tr>
                <tr><td><strong>Sans metier</strong></td><td>Pain x4 (1), Torche x12 (1), Ficelle x6 (1), Cuir x4 (2)</td><td>Ble x16 (+1), Cobble x64 (+1), Baton x32 (+1)</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
    ],
  },
  {
    id: "hearth-housing",
    group: "society",
    kicker: { en: "8. Housing & Comfort", fr: "8. Foyer & Confort" },
    title: {
      en: "Hearth Multiblock, Beds, Comfort Tiers & Sleep Cycle",
      fr: "Foyer (Hearth), Lits, Scores de Confort & Cycle de Sommeil",
    },
    subtitle: {
      en: "3-block Hearth construction, bed scanning, comfort productivity boosts (+0% to +25%), wood fuel values, night sleep & 50% disease immunity.",
      fr: "Multibloc 3 blocs, scan de lits, bonus de confort (+0% a +25%), valeurs du bois, cycle nocturne et immunite maladies 50%.",
    },
    featuredBlocks: ["hearth"],
    searchKeywords: "hearth multiblock bed comfort slum cottage comfortable manor productivity wood fuel sleep curfew night particle",
    sections: [
      {
        heading: { en: "3-Block Multiblock, Bed Scan & Wood Fuel", fr: "Multibloc 3 Blocs, Scan de Lits & Combustible Bois" },
        html: {
          en: `
            <ul>
              <li><strong>Block &amp; Placement</strong>: <code>jn:hearth</code> (light level 15, immovable). Automatically spawns a <strong>3-block wide multiblock</strong> (left / center / right) — requires 2 adjacent air blocks laterally and valid build permissions. Breaking any part drops 1 Hearth.</li>
              <li><strong>Scan Volume</strong>: Horizontal radius <strong>6 blocks default</strong> (configurable in UI: <code>3, 5, 8, 10, 12, 16</code>); vertical <strong>-2 below to +4 above</strong>. Automatically claims unoccupied bed heads (<code>minecraft:bed</code>), excluding beds already owned by other Hearths.</li>
              <li><strong>Wood Fuel</strong>: Starts with <strong>16 units</strong> (max <strong>64</strong>). Consumes <strong>1 unit per night</strong> (at tick 12800) only if at least 1 citizen lives there. Fuels: <strong>Coal/Charcoal/Logs/Wood = 4</strong>, <strong>Planks = 1</strong>, <strong>Stick = 0.25</strong> (Sneak + Right-click while holding fuel for quick refuel).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Bloc &amp; Pose</strong> : <code>jn:hearth</code> (lumiere 15, indeplacable). Multibloc de <strong>3 blocs de large</strong> (exige 2 cases d'air laterales + permission de pose). Casser une partie detruit les 3 et droppe 1 Hearth.</li>
              <li><strong>Zone de scan</strong> : Rayon horizontal <strong>6 blocs par defaut</strong> (reglable : <code>3, 5, 8, 10, 12, 16</code>) ; vertical <strong>-2 a +4</strong>. Detecte les tetes de lit libres (exclut ceux des autres Foyers).</li>
              <li><strong>Combustible Bois</strong> : Stock initial <strong>16</strong> (max <strong>64</strong>). Consomme <strong>1 unite par nuit</strong> (tick 12800) si au moins 1 resident assigne. Valeurs : <strong>Charbon/Buches = 4</strong>, <strong>Planches = 1</strong>, <strong>Baton = 0,25</strong> (Sneak+Clic avec combustible pour recharger vite).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Comfort Score (Max 31 pts) & Sleep Cycle", fr: "Score de Confort (Max 31 pts) & Sommeil" },
        html: {
          en: `
            <ul>
              <li><strong>Scored Blocks inside Scan Volume</strong>: Carpets (<code>1 pt</code>, max 4 = 4), Chests/Barrels (<code>2 pts</code>, max 3 = 6), Lanterns/Candles (<code>2 pts</code>, max 3 = 6), Bookshelves/Lecterns (<code>3 pts</code>, max 3 = 9), Crafting Table/Flower Pot/Brewing Stand (<code>2 pts</code>, max 3 = 6). Theoretical Max = <strong>31 pts</strong>.</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Comfort Tier</th><th>Score Range</th><th>Workstation Productivity</th><th>Wake-Up Mood Bonus</th></tr></thead>
              <tbody>
                <tr><td><strong>Rustic Slum</strong></td><td>0 – 3 pts</td><td><strong>+0%</strong></td><td>+0</td></tr>
                <tr><td><strong>Cottage</strong></td><td>4 – 8 pts</td><td><strong>+10%</strong></td><td>+10</td></tr>
                <tr><td><strong>Comfortable Home</strong></td><td>9 – 14 pts</td><td><strong>+15%</strong></td><td>+15</td></tr>
                <tr><td><strong>Bourgeois Manor</strong></td><td>15+ pts</td><td><strong>+25%</strong></td><td>+20</td></tr>
              </tbody>
            </table></div>
            <ul>
              <li><strong>Sleep Cycle (12800–23200)</strong>: Citizens within <strong>24 blocks</strong> of their bed auto-sleep (or from <strong>anywhere</strong> with <em>Night Curfew</em> research / manual Emergency Curfew).</li>
              <li><strong>Warm vs Cold Wake-Up</strong>: If <code>woodFuel &gt; 0</code>, residents wake with 100% Energy, Comfort Mood + Productivity tag, Regeneration I (5s), and a <strong>50% immunity chance against disease outbreak &amp; daily contagion</strong>. If cold (<code>0 wood</code>), they wake at 70% Energy, -5 Mood, and 0 productivity/regeneration.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Blocs comptes</strong> : Tapis (<code>1 pt</code>, max 4), Coffres/Tonneaux (<code>2 pts</code>, max 3), Lanternes/Bougies (<code>2 pts</code>, max 3), Bibliotheques/Pupitres (<code>3 pts</code>, max 3), Etabli/Pot de fleur/Alambic (<code>2 pts</code>, max 3). Max = <strong>31 pts</strong>.</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Palier de Confort</th><th>Score</th><th>Bonus Productivite</th><th>Bonus Humeur Reveil</th></tr></thead>
              <tbody>
                <tr><td><strong>Taudis Rustique</strong></td><td>0 – 3 pts</td><td><strong>+0%</strong></td><td>+0</td></tr>
                <tr><td><strong>Chaumiere</strong></td><td>4 – 8 pts</td><td><strong>+10%</strong></td><td>+10</td></tr>
                <tr><td><strong>Maison Confortable</strong></td><td>9 – 14 pts</td><td><strong>+15%</strong></td><td>+15</td></tr>
                <tr><td><strong>Manoir Bourgeois</strong></td><td>15+ pts</td><td><strong>+25%</strong></td><td>+20</td></tr>
              </tbody>
            </table></div>
            <ul>
              <li><strong>Sommeil (12800–23200)</strong> : couche auto si &lt; <strong>24 blocs</strong> (ou a distance illimitee avec recherche <em>Couvre-feu nocturne</em> / couvre-feu d'urgence).</li>
              <li><strong>Foyer chaud vs froid</strong> : avec bois (&gt;0), 100% Energie, bonus Confort/Humeur, Regeneration I (5s) et <strong>50% d'immunite contre apparition &amp; contagion des maladies</strong>. A sec (0 bois), 70% Energie, -5 Humeur, aucun bonus.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "food-disease-mail",
    group: "society",
    kicker: { en: "9. Logistics, Health & Mail", fr: "9. Vivres, Sante & Courrier" },
    title: {
      en: "Food Crate, Diseases & Doctor Station, Mailboxes & Special Items",
      fr: "Caisse de Nourriture, Maladies & Docteur, Boites aux Lettres & Objets",
    },
    subtitle: {
      en: "97 food items (Vanilla + Farmer's Delight), Food Tiers 1-4 starvation mechanics, all 5 Diseases & Doctor Hospitals, 16 Mailboxes & Royal Crowns.",
      fr: "97 aliments (Vanilla + Farmer's Delight), Tiers alimentaires 1-4, les 5 Maladies & Hopitaux, 16 Boites aux Lettres & Couronnes Royales.",
    },
    featuredBlocks: ["food_crate", "doctor_station", "red_mailbox", "blue_mailbox", "white_mailbox"],
    featuredItems: ["jn:remedy_flu", "jn:remedy_dysentery", "jn:remedy_tuberculosis", "jn:remedy_smallpox", "jn:remedy_plague", "jn:organic_extract", "jn:bandage", "jn:music_disc_marauder_march"],
    searchKeywords:
      "food crate farmers delight famine starvation tier 4 disease flu dysentery tuberculosis smallpox black plague doctor station remedy bandage mailbox delivery delay crown eckosoldier",
    sections: [
      {
        heading: { en: "Food Crates, Daily Rations & Famine Mechanics", fr: "Caisses de Nourriture, Rations & Famine" },
        html: {
          en: `
            <ul>
              <li><strong>Food Crate</strong> (<code>jn:food_crate</code> — craft: <code>8x Planks + 1x Chest</code>): Must be placed on claimed land. Base capacity: <strong>500 food points/crate</strong> -> <strong>1,000 / 2,000 / 3,000</strong> via <em>Expanded Storage I/II/III</em>. Can be privatized between <strong>Civilian Reserve</strong> and <strong>Military Rations</strong>.</li>
              <li><strong>Food Point Values (97 supported items)</strong>: All Vanilla meats/fish/crops/stews/berries (37 items) = <strong>1 pt</strong>; Enchanted Golden Apple = <strong>2 pts</strong>; Cake = <strong>6 pts</strong>. Farmer's Delight: 53 simple meals = <strong>1 pt</strong>; Pies = <strong>4 pts</strong>; Roast Chicken / Stuffed Pumpkin / Glazed Ham / Shepherd's Pie = <strong>6 pts</strong>.</li>
              <li><strong>Daily Sunset Consumption &amp; Offline Protection</strong>: Civilians cost <code>2/day</code> normal (Soldiers cost double = <code>4/day</code>), scaled by world config &amp; reduced up to <strong>-40%</strong> via <em>Efficient Rations I/II</em> (-10%/-25%) + <em>Field Rations</em> (-15%). With <em>Emergency Production</em>, spends up to 25 Treasury coins/day at 10 food/coin. <strong>Offline Protection:</strong> if <strong>0 members of the nation are online</strong>, daily food drain, starvation progression, and disease progression/deaths are automatically paused.</li>
              <li><strong>4 Food Tiers</strong>: Tier 1 (&ge;100%: +5 Mood), Tier 2 (75–99%: -5 Mood), Tier 3 (50–74%: -5 Mood, -5% output), Tier 4 Famine (&lt;50%: -10 Mood, -5% output, Slowness+Weakness 24h, blocks births). Nations recover only <strong>+1 Tier per day</strong>. On <strong>3+ consecutive days in Tier 4</strong>, lethal starvation begins at <code>5% + 2%*(days-3)</code> per NPC (max 50%, 1–2 deaths/day, -20 Mood each).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Caisse de Nourriture</strong> (<code>jn:food_crate</code> — craft : <code>8x Planches + 1x Coffre</code>) : a poser en territoire revendique. Capacite : <strong>500 pts/caisse</strong> -> <strong>1 000 / 2 000 / 3 000</strong> avec <em>Stockage agrandi I/II/III</em>. Privatisable Civils / Rations Militaires.</li>
              <li><strong>Valeurs nutritives (97 items)</strong> : plats/viandes/legumes Vanilla (37) = <strong>1 pt</strong> ; Pomme doree enchantee = <strong>2 pts</strong> ; Gateau = <strong>6 pts</strong>. Farmer's Delight : 53 plats simples = <strong>1 pt</strong> ; Tartes = <strong>4 pts</strong> ; Poulet roti / Citrouille farcie / Jambon glace / Hachis = <strong>6 pts</strong>.</li>
              <li><strong>Demande quotidienne &amp; Protection Hors-Ligne</strong> : Civils = <code>2/jour</code> normal, Soldats = <code>4/jour</code> (reduit jusqu'a <strong>-40%</strong> par recherches). <em>Production d'urgence</em> achete auto jusqu'a 25 pieces/jour (10 pts/piece). <strong>Protection hors-ligne :</strong> si <strong>aucun membre de la nation n'est connecte</strong>, la consommation de vivres, la famine et les deces/maladies sont automatiquement mis en pause.</li>
              <li><strong>4 Paliers & Mortalite</strong> : Tier 1 (+5 Moral), Tier 2 (-5 Moral), Tier 3 (-5 Moral, -5% prod.), Tier 4 Famine (-10 Moral, Lenteur+Faiblesse 1j, bloque naissances). Remontee limitee a <strong>+1 Tier/jour</strong>. A partir du <strong>3e jour en Tier 4</strong>, deces de famine (<code>5%</code> a <code>50%</code>, 1–2 morts/jour, -20 Moral).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 5 Diseases & Doctor Station (Infirmary / Hospital)", fr: "Les 5 Maladies & Station Medicale (Infirmerie / Hopital)" },
        html: {
          en: `
            <p>Every <strong>10 Minecraft days</strong>, nations at <strong>Tier 2+</strong> roll an outbreak check (base <strong>20%</strong>, reduced -10/-15/-20% by <em>Healthy Conditions I–III</em>; bedless citizens are prioritized; warm Hearths grant 50% immunity).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Disease</th><th>Min Tier</th><th>Weight (-50% Tech)</th><th>Daily Spread</th><th>Lethality</th><th>Effects</th><th>Remedy Craft (-&gt; x2)</th></tr></thead>
              <tbody>
                <tr><td><strong>Flu</strong></td><td>2</td><td>55 (<code>sanitary_flu</code>)</td><td>Doubles/day</td><td>Non-lethal</td><td>Slowness I + <strong>halts workstation</strong></td><td>Honey Bottle + Dandelion + Bottle</td></tr>
                <tr><td><strong>Dysentery</strong></td><td>2</td><td>20 (<code>sanitary_dysentery</code>)</td><td>+1/day</td><td>Non-lethal</td><td>Wastes <strong>2 food/sick/day</strong></td><td>Charcoal + Apple + Bowl</td></tr>
                <tr><td><strong>Tuberculosis</strong></td><td>3</td><td>10 (<code>sanitary_tuberculosis</code>)</td><td>+1 every 2 days</td><td><strong>Fatal (4 days)</strong></td><td>Weakness I (-15 Mood on death)</td><td>Organic Extract + Brown Mushroom + Bottle</td></tr>
                <tr><td><strong>Smallpox</strong></td><td>3</td><td>10 (<code>sanitary_smallpox</code>)</td><td>+1/day</td><td><strong>Fatal (4 days)</strong></td><td>Slowness I + Weakness I</td><td>Honey Bottle + Slime Ball + Bottle</td></tr>
                <tr><td><strong>Black Plague</strong></td><td>4</td><td>5 (<code>sanitary_plague</code>)</td><td><strong>+5/day</strong></td><td><strong>Fatal (2 days)</strong></td><td>Slowness+Weakness + <strong>halts workstation</strong></td><td>Organic Extract + Fermented Spider Eye + Blaze Powder</td></tr>
              </tbody>
            </table></div>
            <p><strong>Doctor Station</strong> (<code>jn:doctor_station</code>, unlocked by <code>sanitary_doctor_station</code>): Level 1 cures <strong>1 patient/day</strong> automatically; Level 2 (<strong>500 coins</strong> + <code>station_level_2</code>) cures <strong>unlimited patients/day</strong>. Auto-care uses 1 matching remedy from adjacent chest + <strong>10 coins from Treasury</strong>; Doctor Intelligence grants <strong>2% per point (max 40%)</strong> chance to save the remedy! Manual cure (no coin fee) &amp; 5-coin full HP heal also available.</p>
          `,
          fr: `
            <p>Tous les <strong>10 jours</strong>, les nations de <strong>Palier 2+</strong> testent une epidemie (base <strong>20%</strong>, reduite -10/-15/-20% par <em>Hygiene Publique I–III</em> ; citoyens sans lit cibles en priorite ; Foyer chaud = 50% immunite).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Maladie</th><th>Tier min</th><th>Poids (-50% Tech)</th><th>Contagion</th><th>Mortalite</th><th>Effets</th><th>Remede (craft -&gt; x2)</th></tr></thead>
              <tbody>
                <tr><td><strong>Grippe</strong></td><td>2</td><td>55 (<code>sanitary_flu</code>)</td><td>Double/jour</td><td>Non mortelle</td><td>Lenteur I + <strong>arrete station</strong></td><td>Fiole miel + Pissenlit + Fiole verre</td></tr>
                <tr><td><strong>Dysenterie</strong></td><td>2</td><td>20 (<code>sanitary_dysentery</code>)</td><td>+1/jour</td><td>Non mortelle</td><td>Gaspille <strong>2 vivres/malade/jour</strong></td><td>Charbon bois + Pomme + Bol</td></tr>
                <tr><td><strong>Tuberculose</strong></td><td>3</td><td>10 (<code>sanitary_tuberculosis</code>)</td><td>+1 / 2 jours</td><td><strong>Mortelle (4j)</strong></td><td>Faiblesse I (-15 Moral au deces)</td><td>Extrait organique + Champignon brun + Fiole</td></tr>
                <tr><td><strong>Variole</strong></td><td>3</td><td>10 (<code>sanitary_smallpox</code>)</td><td>+1/jour</td><td><strong>Mortelle (4j)</strong></td><td>Lenteur I + Faiblesse I</td><td>Fiole miel + Slime + Fiole verre</td></tr>
                <tr><td><strong>Peste Noire</strong></td><td>4</td><td>5 (<code>sanitary_plague</code>)</td><td><strong>+5/jour</strong></td><td><strong>Mortelle (2j)</strong></td><td>Lenteur+Faiblesse + <strong>arrete station</strong></td><td>Extrait organique + Oeil araignee fermente + Poudre blaze</td></tr>
              </tbody>
            </table></div>
            <p><strong>Station Medicale</strong> (<code>jn:doctor_station</code>, requiert <code>sanitary_doctor_station</code>) : Niv. 1 soigne <strong>1 patient/jour</strong> auto ; Niv. 2 (<strong>500 pieces</strong> + <code>station_level_2</code>) soigne en <strong>illimite</strong>. Preleve remede du coffre + <strong>10 pieces en Tresorerie</strong> ; l'Intelligence du Docteur offre <strong>2%/pt (max 40%)</strong> d'economiser le remede. Soins manuels (0 piece) et soin PV complet (5 pieces) inclus.</p>
          `,
        },
      },
      {
        heading: { en: "16 Mailboxes, Delivery Delays, Crowns, Disc & EckoSoldier", fr: "16 Boites aux Lettres, Delais, Couronnes, Disque & EckoSoldier" },
        html: {
          en: `
            <ul>
              <li><strong>Mailboxes</strong> (16 dye colors, craft: <code>Chest + Dye + Fence + Cobble Slab</code>): Send items (slider 1–64 + 128-char note) to online or <strong>offline players</strong> (40-entry inbox/outbox), or claim Land Sale Proceeds.</li>
              <li><strong>Delivery Speeds</strong>: World <code>instant</code> (0s), <code>quick</code> (1–5 min), <code>normal</code> (30–108 min). Reduced by <strong>-15 / -25 / -40 min</strong> via <em>Courier I/II/III</em>, and capped at <strong>10 min max</strong> between allied nations via <em>Trusted Exchange</em>.</li>
              <li><strong>12 Royal Crowns Death Protection</strong>: Crowns (<code>jn:crown</code> .. <code>jn:wreath_crown</code>, +4 Armor) are saved on lethal damage and auto-restored to Head/inventory on respawn (still droppable manually).</li>
              <li><strong>Special Items</strong>: Music Disc <code>Marauder March</code> (3m 17.6s, comparator 7, dropped by Swordsmen) &amp; <code>jn:eckosoldier</code> (levitates to Levitation VI at t=11s and explodes like TNT at t=14s).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Boites aux Lettres</strong> (16 couleurs, craft : <code>Coffre + Colorant + Barriere + Dalle pierre</code>) : envoi d'objets (1–64 + note 128 car.) meme aux <strong>joueurs hors-ligne</strong> (historique 40 entrees) + retrait des ventes foncieres.</li>
              <li><strong>Delais</strong> : <code>instant</code> (0s), <code>quick</code> (1–5 min), <code>normal</code> (30–108 min). Reduits de <strong>-15 / -25 / -40 min</strong> (<em>Courrier I/II/III</em>) et plafonnes a <strong>10 min max</strong> entre allies (<em>Echange de confiance</em>).</li>
              <li><strong>Protection des 12 Couronnes Royales</strong> : sauvegardees en cas de mort et restituees au respawn (toujours jetables manuellement).</li>
              <li><strong>Objets speciaux</strong> : Disque <code>Marauder March</code> (3m17.6s, comparateur 7) &amp; <code>jn:eckosoldier</code> (levite jusqu'au niv. VI a 11s et explose comme une TNT a 14s).</li>
            </ul>
          `,
        },
      },
    ],
  },
);

/* Frontier Engine & Extension Wiki — Chapters 6 to 12: Battle Pass, Quests, Ranks, Custom, Lootboxes, Death Chests & Siege Cannons */
window.FE_GUIDE_MODULES = window.FE_GUIDE_MODULES || [];
window.FE_GUIDE_MODULES.push(
  {
    id: "frontier-pass",
    group: "battlepass-progress",
    kicker: { en: "6. FrontierPass (1-112)", fr: "6. FrontierPass (1-112)" },
    title: {
      en: "FrontierPass Progression & All 112 Tier Rewards",
      fr: "Progression FrontierPass & Les 112 Recompenses",
    },
    subtitle: {
      en: "Single unified free track with linear 100 XP per tier (11,200 XP max), Coins, 4,200 Nation XP, 6 Lootbox Keys, and automatic Burgher/Noble ranks.",
      fr: "Piste gratuite unifiee (100 XP fixes par palier, 11 200 XP max), 400 Coins, 4 200 XP de Nation, 6 Cles Lootbox et deblocage des rangs Bourgeois et Noble.",
    },
    featuredItems: ["fe:key_common", "fe:key_rare", "fe:key_epic", "fe:key_legendary", "fe:frontier_token_info"],
    searchKeywords: "frontierpass battlepass 112 tiers xp coins nation xp bourgeois tier 50 noble tier 100 netherite ingot 112 keys",
    sections: [
      {
        heading: { en: "Linear XP Curve & Key Milestones", fr: "Courbe d'XP Lineaire & Paliers Cles" },
        html: {
          en: `
            <ul>
              <li><strong>Unified Track</strong>: There is <strong>no paid/premium separation</strong> — every player unlocks all <strong>112 tiers</strong> on one free progression track (<code>/frontier:pass</code>).</li>
              <li><strong>Exact Formula</strong>: Fixed <strong>100 XP per tier</strong> (<code>XP_PER_TIER = 100</code>, maximum cumulative XP = <code>11,200 XP</code>). You can claim individually or hit <strong>Claim All</strong> across 19 UI pages (6 tiers per page).</li>
              <li><strong>Major Rewards Total</strong>: <strong>400 Coins</strong> (Tiers 21, 41, 61, 81, 101), <strong>4,200 Nation XP</strong> (every 10 tiers from #10 to #100 — requires belonging to a nation in Jerry's Nations), <strong>6 Lootbox Keys</strong> (#15/#33 Pioneer, #48/#68 Vanguard, #88 Conqueror, #108 Imperial), <strong>Bourgeois Rank</strong> at Tier <strong>50</strong>, <strong>Noble Rank</strong> at Tier <strong>100</strong>, and <strong>1x Netherite Ingot</strong> at Tier <strong>112</strong>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Piste Unique Gratuite</strong> : Aucun passe payant — tous les joueurs progressent sur la meme piste jusqu'au <strong>Palier 112</strong> (<code>/frontier:pass</code>).</li>
              <li><strong>Formule Exacte</strong> : <strong>100 XP fixes par palier</strong> (plafond <code>11 200 XP</code>). Recuperation individuelle ou en 1 clic via <strong>Tout reclamer</strong> sur 19 pages (6 paliers/page).</li>
              <li><strong>Cumuls Majeurs</strong> : <strong>400 Coins</strong> (Paliers 21, 41, 61, 81, 101), <strong>4 200 XP Nation</strong> (tous les 10 paliers #10..#100 si membre d'une nation), <strong>6 Cles Lootbox</strong> (#15/#33 Pionnier, #48/#68 Avant-Garde, #88 Conquerant, #108 Imperiale), rang <strong>Bourgeois</strong> au Palier <strong>50</strong>, rang <strong>Noble</strong> au Palier <strong>100</strong> et <strong>1x Lingot de Netherite</strong> au Palier <strong>112</strong>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Complete 112-Tier Explorer", fr: "Explorateur Complet des 112 Paliers" },
        html: {
          en: `<p>Filter by reward type or search any item below:</p>`,
          fr: `<p>Filtrez par type de recompense ou recherchez un item ci-dessous :</p>`,
        },
        dynamicWidget: "bp_tiers",
      },
    ],
  },
  {
    id: "pass-quests",
    group: "battlepass-progress",
    kicker: { en: "7. Daily & Weekly Quests", fr: "7. Quetes du Passe" },
    title: {
      en: "70 Pass Quests, Reset Timers & Detection Rules",
      fr: "Les 70 Quetes (Daily & Weekly), Resets & Regles",
    },
    subtitle: {
      en: "Full searchable catalog of all 60 Daily and 10 Weekly quests, deterministic server-wide rotation, and exact anti-exploit tracking rules.",
      fr: "Catalogue complet des 60 quetes journalieres et 10 hebdomadaires, tirage mondial synchronise, horaires de reset et regles exactes de validation.",
    },
    searchKeywords: "quests daily weekly reset 00:00 utc 225 xp 580 xp mine ores crops growth 7 hostile mobs travel distance",
    sections: [
      {
        heading: { en: "Quest Schedules & Detection Rules", fr: "Cycles de Reset & Validation en Jeu" },
        html: {
          en: `
            <ul>
              <li><strong>Daily Rotation (4 quests/day, max 225 XP/day)</strong>: Resets globally every day at <strong>00:00 UTC</strong>. All players share the same deterministic draw: <strong>1 Easy (+25 XP) + 2 distinct Medium (+50 XP x2) + 1 Hard (+100 XP)</strong> from a 60-quest pool.</li>
              <li><strong>Weekly Rotation (4 quests/week, max 580 XP/week)</strong>: Resets every <strong>7 days</strong> anchored to world origin: <strong>1 Easy (+80 XP) + 2 distinct Medium (+140 XP x2) + 1 Hard (+220 XP)</strong> from a 10-quest pool.</li>
              <li><strong>Strict Tracking Rules</strong>:
                <ul>
                  <li><code>harvest_crops</code> / <code>harvest_specific</code>: Only counts fully mature crops (<code>growth === 7</code>: wheat, carrots, potatoes, beetroot).</li>
                  <li><code>mine_ores</code>: Counts any <code>*_ore</code> block or <code>minecraft:ancient_debris</code>.</li>
                  <li><code>kill_mobs</code>: Counts 28 hostile mob types (Zombies, Skeletons, Creepers, Spiders, Pillagers, Nether/End mobs, etc.).</li>
                  <li><code>travel_blocks</code> &amp; <code>play_minutes</code>: Sampled every 100 ticks (5s); horizontal walk step only counted if <code>0.25 &lt; dist &lt; 40</code> blocks (teleports excluded).</li>
                </ul>
              </li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Rotation Journaliere (4 quetes/jour, max 225 XP/jour)</strong> : Reset fixe chaque jour a <strong>00h00 UTC</strong>. Tirage identique pour tout le serveur : <strong>1 Facile (+25 XP) + 2 Moyennes distinctes (+50 XP x2) + 1 Difficile (+100 XP)</strong> parmi 60 quetes.</li>
              <li><strong>Rotation Hebdomadaire (4 quetes/semaine, max 580 XP/semaine)</strong> : Cycle de <strong>7 jours</strong> depuis l'origine du monde : <strong>1 Facile (+80 XP) + 2 Moyennes distinctes (+140 XP x2) + 1 Difficile (+220 XP)</strong> parmi 10 quetes.</li>
              <li><strong>Regles strictes de comptage</strong> :
                <ul>
                  <li><code>harvest_crops</code> : Uniquement les cultures a maturite (<code>growth === 7</code> : ble, carottes, patates, betteraves).</li>
                  <li><code>mine_ores</code> : Tout bloc finissant par <code>_ore</code> plus <code>minecraft:ancient_debris</code>.</li>
                  <li><code>kill_mobs</code> : 28 mobs hostiles pris en compte.</li>
                  <li><code>travel_blocks</code> : Echantillonne toutes les 5s ; ignore les teleportations (pas valide si <code>0.25 &lt; dist &lt; 40</code>).</li>
                </ul>
              </li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 70 Quests Explorer", fr: "Explorateur des 70 Quetes" },
        html: {
          en: `<p>Browse every quest across all 6 difficulty pools:</p>`,
          fr: `<p>Parcourez toutes les quetes des 6 pools de difficulte :</p>`,
        },
        dynamicWidget: "bp_quests",
      },
    ],
  },
  {
    id: "ranks-economy",
    group: "identity-loot",
    kicker: { en: "8. Ranks, Vault & Codes", fr: "8. Rangs, Coffre & Codes" },
    title: {
      en: "All 18 Ranks, Safe Vault Limits & Gift Codes",
      fr: "Les 18 Rangs, Coffre-Fort Protege & Codes Cadeaux",
    },
    subtitle: {
      en: "Every rank badge rendered in-game via glyph_E5, Safe Vault coin protection caps (10,000 to 2,000,000), player transfers, and Gift Codes.",
      fr: "Tous les badges de rangs affiches en jeu, plafonds de protection du Coffre-Fort (10 000 a 2 000 000 Coins), transferts et Codes Cadeaux.",
    },
    featuredItems: ["fe:frontier_token_info", "fe:key_rare", "fe:key_epic"],
    searchKeywords: "rank roturier bourgeois noble conqueror sovereign emperor fre_og frost champion hero astral youtuber helper mod smod admin manager owner bank vault coins transfer pay gift code",
    sections: [
      {
        heading: { en: "Safe Vault Economy (/frontier:menu -> Economy)", fr: "Coffre-Fort Protege (Economie)" },
        html: {
          en: `
            <ul>
              <li>Deposit and withdraw physical Coins (<code>jn:coin</code>) safely into your player-bound Vault (<code>bankBalance</code>) via quick presets (<code>10, 50, 100, 500, 1,000, 5,000</code>, custom amount, Deposit All, Withdraw All).</li>
              <li><strong>Capacity Formula</strong>: Your maximum Vault limit equals the <strong>highest bankLimit among your equipped rank and ALL ranks you have ever unlocked</strong> (<code>10,000</code> Commoner, <code>250,000</code> Burgher, <code>1,000,000</code> Noble / Special, <code>1,500,000</code> Champion / Sovereign, up to <code>2,000,000</code> Emperor / Hero / Astral / Staff).</li>
              <li><strong>Player-to-Player Transfers</strong>: Send Coins directly between online players' Safe Vaults via <strong>Economy &rarr; Transfer Coins</strong>, <strong>Sneak + Right-Click &rarr; Send Coins</strong>, or <code>/frontier:pay &lt;player&gt; &lt;amount&gt;</code>.</li>
              <li><strong>Gift Codes</strong>: Redeem promotional codes inside <code>/frontier:menu</code> &rarr; <strong>Gift Codes</strong> (1 use per player, case-insensitive). Can grant Frontier Tokens, Coins, Pass XP, Items, Ranks, or Cosmetics.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li>Deposez et retirez vos pieces physiques (<code>jn:coin</code>) dans votre Coffre-Fort personnel (<code>bankBalance</code>) via boutons rapides (<code>10, 50, 100, 500, 1 000, 5 000</code>, montant libre, Tout deposer/retirer).</li>
              <li><strong>Regle du Plafond</strong> : Votre capacite maximale prend toujours le <strong>maximum entre votre rang equipe et tous les rangs debloques</strong> (<code>10 000</code> Roturier, <code>250 000</code> Bourgeois, <code>1 000 000</code> Noble / Speciaux, <code>1 500 000</code> Champion / Souverain, jusqu'a <code>2 000 000</code> Empereur / Hero / Astral / Staff).</li>
              <li><strong>Transferts entre joueurs</strong> : Envoyez des Coins directement d'un Coffre-Fort a un autre joueur en ligne via <strong>Economie &rarr; Transferer Coins</strong>, <strong>Sneak + Clic droit &rarr; Transferer Coins</strong> ou <code>/frontier:pay &lt;joueur&gt; &lt;montant&gt;</code>.</li>
              <li><strong>Codes Cadeaux</strong> : Echangeables dans <code>/frontier:menu</code> &rarr; <strong>Codes Cadeaux</strong> (1 fois par joueur). Permettent de gagner Jetons, Coins, XP Pass, items, rangs ou cosmetiques.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "All 18 Server Ranks & Badges", fr: "Tableau Complet des 18 Rangs & Badges" },
        html: {
          en: `<p>Every badge below is extracted directly from the live server's <code>FrontierExtensionRP/font/glyph_E5.png</code> (<code>\\uE500</code>–<code>\\uE515</code>). Note that <strong>CONQUEROR</strong>, <strong>SOVEREIGN</strong>, and <strong>EMPEROR</strong> are currently marked <em>Unavailable</em> in-game, while <strong>FRE-OG</strong>, <strong>FROST</strong>, <strong>CHAMPION</strong>, <strong>HERO</strong>, <strong>ASTRAL</strong>, and <strong>YOUTUBER</strong> are command-unlock specials.</p>`,
          fr: `<p>Chaque badge ci-dessous est extrait directement du fichier actif du serveur <code>FrontierExtensionRP/font/glyph_E5.png</code> (<code>\\uE500</code>–<code>\\uE515</code>). A noter que <strong>CONQUEROR</strong>, <strong>SOVEREIGN</strong> et <strong>EMPEROR</strong> sont actuellement marques <em>Indisponibles</em> en jeu, tandis que <strong>FRE-OG</strong>, <strong>FROST</strong>, <strong>CHAMPION</strong>, <strong>HERO</strong>, <strong>ASTRAL</strong> et <strong>YOUTUBER</strong> sont des rangs speciaux deblocables par commande.</p>`,
        },
        dynamicWidget: "ranks_table",
      },
    ],
  },
  {
    id: "player-customization",
    group: "identity-loot",
    kicker: { en: "9. Customization & HUD", fr: "9. Customisation & HUD" },
    title: {
      en: "Player Customization (/frontier:custom) & Permanent HUD",
      fr: "Customisation (/frontier:custom) & HUD Permanent",
    },
    subtitle: {
      en: "Preview Name Colors, Chat Styles, Particle Auras & Kill Effects in real time, plus full breakdown of the permanent Frontier HUD.",
      fr: "Simulateur interactif de Couleur de Pseudo, Style de Chat, Aura & Kill FX en Jetons Frontier, et detail du HUD permanent.",
    },
    featuredItems: ["fe:frontier_token_info"],
    searchKeywords: "custom customization frontier tokens name color chat style aura particles kill fx titles soon hud coordinates territory emblem",
    sections: [
      {
        heading: { en: "Interactive NameTag, Chat & Cosmetics Simulator", fr: "Simulateur Interactif NameTag, Chat & Cosmetiques" },
        html: {
          en: `<p>Combine a Rank badge, 8 Name Colors, 7 Chat Styles, 7 Orbiting Auras (1 particle every 10 ticks at radius 0.65), and 6 Kill Effects below to preview your exact in-game appearance and Frontier Token cost. Note: <strong>Player Titles</strong> (<code>fe.custom.btn.titles</code>) are temporarily <em>Coming Soon</em>.</p>`,
          fr: `<p>Combinez un badge de Rang, 8 Couleurs de Pseudo, 7 Styles de Chat, 7 Auras (1 particule toutes les 10 ticks a rayon 0.65) et 6 Effets de Kill pour previsualiser votre rendu et le cout en Jetons Frontier. Note : les <strong>Titres</strong> sont temporairement marques <em>Bientot disponible</em>.</p>`,
        },
        dynamicWidget: "custom_preview",
      },
      {
        heading: { en: "Permanent Frontier HUD (ui/fe_hud.json)", fr: "HUD Permanent The Frontier (ui/fe_hud.json)" },
        html: {
          en: `
            <ul>
              <li><strong>Always Active</strong>: Replaces vanilla top-left player doll and vanilla coordinates (adds a 42px chat offset). No manual HUD toggle exists.</li>
              <li><strong>Top-Left Kingdom Emblem</strong>: Displays your 3D live player portrait, live <strong>X / Y / Z coordinates</strong> (refreshed every 6 ticks / 0.3s), and live <strong>100x100 Territory Status</strong> (<code>Free Territory</code>, <code>Capital (Nation)</code>, <code>City (Nation)</code>, <code>Nether</code>, or <code>The End</code> — cached 5s via <code>jn_api</code>).</li>
              <li><strong>Top-Right Economy Bar</strong>: Live display of your <strong>Safe Vault Coins</strong> and <strong>Frontier Tokens</strong>. Automatically pauses briefly during full-screen Lootbox reveal titles.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Toujours Actif</strong> : Remplace le portrait joueur et les coordonnees vanilla en haut a gauche (decale le chat de 42px). Aucun interrupteur de desactivation.</li>
              <li><strong>Embleme Haut-Gauche</strong> : Portrait joueur 3D en direct, coordonnees <strong>X / Y / Z</strong> (toutes les 6 ticks / 0.3s) et statut du <strong>Territoire 100x100</strong> (<code>Territoire Libre</code>, <code>Capitale (Nation)</code>, <code>Ville (Nation)</code>, <code>Nether</code> ou <code>L'End</code>).</li>
              <li><strong>Barre Economie Haut-Droite</strong> : Affiche votre <strong>Coffre-Fort Coins</strong> et vos <strong>Jetons Frontier</strong> en temps reel.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "lootboxes-keys",
    group: "identity-loot",
    kicker: { en: "10. 3D Lootboxes & Keys", fr: "10. Lootboxes 3D & Cles" },
    title: {
      en: "4 Animated Lootboxes, Keys & Exact Drop Probabilities",
      fr: "Les 4 Lootboxes 3D, Cles & Probabilites Exactes",
    },
    subtitle: {
      en: "Every rarity (Pioneer, Vanguard, Conqueror, Imperial), physical 3-second opening sequence, and exact verified drop percentages (sum = 100%).",
      fr: "Chaque rarete (Pionnier, Avant-Garde, Conquerant, Imperiale), animation physique d'ouverture de 3s et taux de drop exacts.",
    },
    featuredItems: ["fe:key_common", "fe:key_rare", "fe:key_epic", "fe:key_legendary"],
    searchKeywords: "lootbox pioneer common vanguard rare conqueror epic imperial legendary key drop rate chance netherite nether star totem",
    sections: [
      {
        heading: { en: "How Lootboxes Work", fr: "Fonctionnement & Ouverture 3D" },
        html: {
          en: `
            <ul>
              <li><strong>2 Ways to Open</strong>: Right-click / hit a physical animated <code>fe:lootbox_*</code> entity in-world, OR run <code>/frontier:lootbox [rarity]</code> anywhere.</li>
              <li><strong>Physical Sequence (3.0s)</strong>: Consumes 1 matching key (<code>fe:key_*</code>) from inventory, plays lock clicks at ticks 7 &amp; 14 with rarity build-up particles, awards the weighted drop + reveal title at <strong>tick 22 (1.1s)</strong>, and closes the chest at tick 52 (2.6s). Concurrency locks prevent double opens.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>2 Modes d'Ouverture</strong> : Clic droit / frappe sur une caisse 3D physique <code>fe:lootbox_*</code> dans le monde, OU commande <code>/frontier:lootbox [rarete]</code> n'importe ou.</li>
              <li><strong>Sequence Animee (3.0s)</strong> : Consomme 1 cle (<code>fe:key_*</code>), joue l'animation de deverrouillage (ticks 7 &amp; 14), attribue le butin et le titre au <strong>tick 22 (1.1s)</strong>, puis referme le coffre au tick 52. Verrous anti-double ouverture actifs.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Exact Drop Tables & Odds (100% Verified)", fr: "Tables de Drops & Probabilites Exactes" },
        html: {
          en: `<p>Every crate's drop table weights sum strictly to <strong>100%</strong>:</p>`,
          fr: `<p>Chaque table ci-dessous totalise exactement <strong>100%</strong> :</p>`,
        },
        dynamicWidget: "lootbox_tables",
      },
    ],
  },
  {
    id: "death-chest-guide",
    group: "survival-siege",
    kicker: { en: "11. Death Chest & Compass", fr: "11. Coffre de Mort" },
    title: {
      en: "Anti-Lava Death Chests & /frontier:death Recovery Compass",
      fr: "Coffres de Mort Anti-Lave & Boussole /frontier:death",
    },
    subtitle: {
      en: "How live inventory snapshots save your gear from lava, exact 3-pass placement rules, public access policy, and real-time 8-direction guidance.",
      fr: "Sauvegarde de l'equipement contre la lave par instantane continu, placement en 3 passes, regle d'acces public, suppression a vide et guidage temps reel.",
    },
    searchKeywords: "death chest lava liquid keepInventory void vanishing curse public empty delete compass /frontier:death coords",
    sections: [
      {
        heading: { en: "Death Chest Rules & Edge Cases (battlepass_death_chest.js)", fr: "Mecanismes & Cas Limites du Coffre de Mort" },
        html: {
          en: `
            <ul>
              <li><strong>Anti-Lava / Anti-Water Snapshot</strong>: Maintains a continuous live snapshot of inventory + armor + offhand. On death in lava/water, searches up to <strong>+28 blocks</strong> for the liquid surface and places a <strong>54-slot double chest</strong> using a 3-pass non-destructive search (dry solid-backed &rarr; above liquid surface &rarr; dry/aquatic fallback).</li>
              <li><strong>Ground Anti-Dupe Sweep</strong>: Clears vanilla drops within <code>5.5</code> blocks on ticks 0, +1, and +3 so items are safely secured inside the chest without duplication (surplus &gt;54 stacks drops safely above).</li>
              <li><strong>No Lock / Public Chest</strong>: The double chest is <strong>not locked</strong> — any player who reaches it can loot it.</li>
              <li><strong>No Time Expiration</strong>: Chests <strong>never despawn over time</strong> (world registry cap: 300 entries). Once all items are removed, both chest blocks disappear automatically within 20 ticks (or 5 ticks after closing) with smoke particles.</li>
              <li><strong>Exclusions (No Chest Created)</strong>: <code>keepInventory = true</code>, <strong>Void deaths</strong> (below <code>heightRange.min</code> or Void damage), completely empty inventories, or items enchanted with <strong>Curse of Vanishing</strong> (excluded).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Instantanee Anti-Lave / Anti-Eau</strong> : Maintient un instantane continu de l'inventaire, armure et main secondaire. En cas de mort dans la lave ou l'eau, remonte jusqu'a <strong>+28 blocs</strong> et pose un <strong>double coffre (54 slots)</strong> en 3 passes sans casser de blocs solides.</li>
              <li><strong>Nettoyage Anti-Duplication</strong> : Nettoie les drops au sol dans un rayon de <code>5.5</code> blocs aux ticks 0, +1 et +3. Le surplus au-dela de 54 stacks est depose au-dessus.</li>
              <li><strong>Coffre Public (Sans Verrou)</strong> : Le double coffre est <strong>entierement public et ouvert a tous</strong> — protegez ou recuperez rapidement votre zone.</li>
              <li><strong>Aucune Expiration Temporelle</strong> : Le coffre ne disparait jamais avec le temps (max 300 suivis mondiaux) ; il s'efface automatiquement avec fumee des qu'il est entierement vide.</li>
              <li><strong>Exclusions</strong> : <code>keepInventory = true</code>, <strong>mort dans le Vide</strong> (pas de coffre), inventaire vide, ou objets avec <strong>Malediction de disparition</strong> (exclus).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "/frontier:death ActionBar Compass", fr: "Guidage Temps Reel (/frontier:death)" },
        html: {
          en: `
            <ul>
              <li><strong>Chat Alerts</strong>: Immediately prints exact Death Chest coordinates at death and again 15 ticks after respawn.</li>
              <li><strong>Live Tracking</strong>: Run <code>/frontier:death</code> (or <code>on</code> / <code>off</code> / <code>coords</code>) to show an ActionBar HUD every <strong>4 ticks</strong> with exact 3D distance in meters, coordinates, <strong>8 relative directions</strong> (<code>FRONT</code>, <code>FR-RIGHT</code>, <code>RIGHT</code>, etc.), and vertical delta (<code>±Y</code> when <code>|dy| &gt;= 3</code>).</li>
              <li><strong>Auto-Disable</strong>: Automatically turns off with a chime once you arrive within <strong>3.0 blocks</strong>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Alertes Chat</strong> : Envoie les coordonnees exactes a la mort puis un rappel 15 ticks apres reapparition.</li>
              <li><strong>Boussole Temps Reel</strong> : <code>/frontier:death</code> (<code>toggle</code>/<code>on</code>/<code>off</code>/<code>coords</code>) actualise la barre d'action toutes les <strong>4 ticks</strong> avec distance 3D exacte, coordonnees, <strong>8 directions relatives</strong> (<code>DEVANT</code>, <code>AV-DROITE</code>, etc.) et decalage vertical (<code>±Y</code> si <code>|dy| &gt;= 3</code>).</li>
              <li><strong>Arret Automatique</strong> : Se coupe des que vous arrivez a moins de <strong>3.0 blocs</strong>.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "siege-cannons-windmills",
    group: "survival-siege",
    kicker: { en: "12. Siege Cannons & World", fr: "12. Canons & Moulins" },
    title: {
      en: "Siege Cannons, Swivel Cannons & Classic Windmills",
      fr: "Canons de Siege, Couleuvrines & Moulins a Vent",
    },
    subtitle: {
      en: "Complete engineering guide to the Modded Crafting Table, Siege & Swivel Cannon ballistics, 3 firing modes, vehicle ship mode, and Classic Windmills.",
      fr: "Guide complet de l'Etabli Modde, balistique des Canons de Siege et Couleuvrines, 3 modes de tir, mode navire et Moulins a Vent Classiques.",
    },
    featuredBlocks: ["modded_crafting_table", "cannon", "swivel_cannon"],
    featuredItems: ["mship:cannon_barrel", "mship:cannon_ball", "mship:cannon_remote", "hc:classic_windmill_reguler"],
    searchKeywords: "cannon swivel cannonball barrel remote modded crafting table power 3 power 2 4.1s pitch windmill ship isOnShip",
    sections: [
      {
        heading: { en: "Siege Cannon vs Swivel Cannon Comparison", fr: "Comparatif : Canon de Siege vs Couleuvrine Pivotante" },
        html: {
          en: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Spec</th><th>Siege Cannon (<code>mship:cannon</code>)</th><th>Swivel Cannon (<code>mship:swivel_cannon</code>)</th></tr></thead>
              <tbody>
                <tr><td><strong>Footprint &amp; Placement</strong></td><td><strong>2 horizontal blocks</strong> (<code>mship:cannon_block</code> part 0 + part 1)</td><td><strong>1 block</strong>; banned within the 8 adjacent blocks of any cannon/helm</td></tr>
                <tr><td><strong>Horizontal Aim (Yaw)</strong></td><td>Fixed placement cardinal direction (<code>lock_rider_rotation: 0</code>)</td><td>Full <strong>360-degree rotation</strong> while mounted</td></tr>
                <tr><td><strong>Vertical Aim (Pitch)</strong></td><td><code>-49.0°</code> (up) to <code>+18.5°</code> (down)</td><td><code>-49.0°</code> (up) to <code>+18.5°</code> (down)</td></tr>
                <tr><td><strong>Shell Velocity</strong></td><td><strong>2.0</strong> (tag <code>cannon</code>)</td><td><strong>1.5</strong> (tag <code>swivel_cannon</code>)</td></tr>
                <tr><td><strong>Explosion Power</strong></td><td><strong>Power 3</strong> (Creeper strength, <code>causes_fire: false</code>)</td><td><strong>Power 2</strong> (<code>causes_fire: false</code>)</td></tr>
                <tr><td><strong>Firing Cycle</strong></td><td colspan="2"><strong>1.0s ignition fuse</strong> &rarr; <strong>3.1s reload cooldown</strong> (<strong>4.1s total</strong> between shots)</td></tr>
                <tr><td><strong>Ammunition</strong></td><td colspan="2"><code>mship:cannon_ball</code> (1 Stone on Stonecutter, stack 8). Consumed in Survival only; gunpowder is NOT consumed on fire.</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Caracteristique</th><th>Canon de Siege (<code>mship:cannon</code>)</th><th>Couleuvrine Pivotante (<code>mship:swivel_cannon</code>)</th></tr></thead>
              <tbody>
                <tr><td><strong>Emprise &amp; Pose</strong></td><td><strong>2 blocs horizontaux</strong> (part 0 arriere + part 1 avant)</td><td><strong>1 seul bloc</strong> ; pose interdite dans les 8 blocs voisins d'un canon/gouvernail</td></tr>
                <tr><td><strong>Rotation (Yaw)</strong></td><td>Direction cardinale fixe</td><td>Rotation libre a <strong>360 degres</strong> une fois monte</td></tr>
                <tr><td><strong>Elevation (Pitch)</strong></td><td><code>-49.0°</code> (haut) a <code>+18.5°</code> (bas)</td><td><code>-49.0°</code> (haut) a <code>+18.5°</code> (bas)</td></tr>
                <tr><td><strong>Velocite du Boulet</strong></td><td><strong>2.0</strong> (tag <code>cannon</code>)</td><td><strong>1.5</strong> (tag <code>swivel_cannon</code>)</td></tr>
                <tr><td><strong>Explosion</strong></td><td><strong>Puissance 3</strong> (type Creeper, sans feu)</td><td><strong>Puissance 2</strong> (sans feu)</td></tr>
                <tr><td><strong>Cadence</strong></td><td colspan="2"><strong>1.0s meche</strong> &rarr; <strong>3.1s rechargement</strong> (<strong>4.1s au total</strong> entre deux tirs)</td></tr>
                <tr><td><strong>Munition</strong></td><td colspan="2"><code>mship:cannon_ball</code> (1 Pierre au Tailleur de pierre, stack 8). Consomme 1 boulet en Survie uniquement (0 poudre au tir).</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
      {
        heading: { en: "3 Firing Modes, Ship Mode & Classic Windmills", fr: "3 Modes de Tir, Mode Navire & Moulins a Vent" },
        html: {
          en: `
            <ul>
              <li><strong>Mode 1 — Direct Hand Load</strong>: Right-click the cannon block while holding <code>mship:cannon_ball</code> (when unmounted) to consume 1 shell and fire.</li>
              <li><strong>Mode 2 — Mounted Rider Control</strong>: Right-click without a shell to ride the cannon, aim with your camera, and press <strong>Jump</strong> to fire (draws 1 Cannon Ball from anywhere in your inventory; blocked underwater).</li>
              <li><strong>Mode 3 — Cannon Remote (<code>mship:cannon_remote</code>)</strong>: Right-click any cannon to bind it (unlimited cannons per remote, 1 remote per cannon), then use in-hand to fire all bound cannons in that dimension in a single salvo. <em>Survival Note</em>: Its craft recipe currently requires <code>minecraft:ender_pearl</code>, which is purged by <code>restrictions.js</code>.</li>
              <li><strong>Vehicle / Ship Mode (<code>mship:isOnShip</code>)</strong>: Supports mounted moving-ship cannons with <code>0.9x0.9</code> entity hitboxes and despawn protection.</li>
              <li><strong>Classic Windmill (<code>hc:classic_windmill</code>)</strong>: Only 1 entity model exists with <strong>4 color skins</strong> (Plain, Red, Green, Blue). Right-click barehanded to toggle <code>spin_180</code> animation (+ 19s audio loop within 16 blocks), <strong>Sneak + Right-Click</strong> to cycle paint color, or break with any <strong>Axe</strong> to pick up.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Mode 1 — Tir Direct</strong> : Clic droit sur le bloc avec un <code>mship:cannon_ball</code> en main (si personne n'est monte).</li>
              <li><strong>Mode 2 — Pilotage Monte</strong> : Clic droit sans boulet pour monter, visez avec la camera et appuyez sur <strong>Saut</strong> pour tirer (consomme depuis tout l'inventaire ; bloque sous l'eau).</li>
              <li><strong>Mode 3 — Telecommande (<code>mship:cannon_remote</code>)</strong> : Clic droit sur plusieurs canons pour les appairer sur le meme canal et declencher une salve synchrone dans toute la dimension. <em>Note Survie</em> : sa recette demande actuellement une <code>minecraft:ender_pearl</code> bloquee par <code>restrictions.js</code>.</li>
              <li><strong>Mode Vehicule / Navire (<code>mship:isOnShip</code>)</strong> : Prend en charge les canons embarques sur structures mobiles.</li>
              <li><strong>Moulin a Vent Classique (<code>hc:classic_windmill</code>)</strong> : Entite unique a <strong>4 couleurs</strong> (Neutre, Rouge, Vert, Bleu). Clic droit a main nue pour activer la rotation et le son (16 blocs), <strong>Sneak + Clic droit</strong> pour changer la peinture, coup de <strong>Hache</strong> pour le recuperer en item.</li>
            </ul>
          `,
        },
      },
    ],
  }
);

/* Jerry's Nations Wiki — Guide Module 1: Founding, Tiers, Territory & Economy */
window.JN_GUIDE_MODULES = window.JN_GUIDE_MODULES || [];
window.JN_GUIDE_MODULES.push(
  {
    id: "founding-flags",
    group: "foundations",
    kicker: { en: "1. Getting Started", fr: "1. Demarrage" },
    title: {
      en: "Founding a Nation, Sub-Cities & Flags",
      fr: "Fonder une Nation, Sous-Villes & Drapeaux",
    },
    subtitle: {
      en: "Everything required to establish your first colony claim, customize banners, link your Leader Table, and expand into sub-cities.",
      fr: "Tout ce qu'il faut pour fonder votre premiere colonie, personnaliser vos drapeaux, lier votre Table du Maire et etendre vos sous-villes.",
    },
    featuredBlocks: ["mayor_table", "iron_flagpole", "oak_flagpole", "globe", "taxation_table"],
    featuredItems: ["jn:colony_flag", "jn:cosmetic_flag", "jn:crown", "jn:coin"],
    searchKeywords:
      "founding creation colony_flag flagpole fence wall crown sub-city banner studio pattern color mayor table 300 blocks cosmetic flag",
    sections: [
      {
        heading: { en: "Founding Requirements & Rules", fr: "Conditions & Regles de Fondation" },
        html: {
          en: `
            <ul>
              <li><strong>Dimension</strong>: <strong>Overworld only</strong> (<code>minecraft:overworld</code>). Nations and claims cannot be created in the Nether or The End.</li>
              <li><strong>Player Affiliation</strong>: You must not currently belong to any nation (neither as leader nor member).</li>
              <li><strong>Founding Item</strong>: <strong>Nation Flag</strong> (<code>jn:colony_flag</code>) — crafted with <code>4x Wool</code> in a cross around <code>1x Stick</code>.</li>
              <li><strong>Mandatory Support Block</strong>: Must be placed on top of a <strong>Fence</strong>, <strong>Wall</strong>, or <strong>Flagpole</strong> (auto-snaps to the top of a flagpole column within a <strong>3-block click radius</strong>).</li>
              <li><strong>14 Flagpole Variants</strong>: Iron, Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Mangrove, Cherry, Bamboo, Crimson, Warped, Pale Oak, and Poplar. Craft: <code>1x Gold Nugget</code> + <code>2x Planks</code> (or <code>2x Iron Ingots</code>) vertically for <strong>2 flagpoles</strong>. Right-clicking a flagpole with another of the same type stacks it to the top and links base/mid/top textures.</li>
              <li><strong>Claim Validation</strong>: The <code>100x100</code> grid cell must be free and the flagpole top must not already hold a flag. There is no fixed block-distance minimum between capitals beyond distinct free grid cells.</li>
              <li><strong>Co-Founders Rule</strong>: Default <code>minFounders = 1</code> (solo founding). On servers configured with <code>minFounders &gt; 1</code> (up to <code>10</code>), invited nationless players have <strong>30 seconds</strong> to accept before finalization.</li>
            </ul>
            <div class="callout callout-tip">
              <div class="callout-title">Abandon & Disconnect Protection</div>
              If you cancel the founding wizard or disconnect mid-setup, the temporary flag is cleanly removed and your <code>jn:colony_flag</code> is refunded in Survival (immediately or on reconnect).
            </div>
          `,
          fr: `
            <ul>
              <li><strong>Dimension</strong> : <strong>Overworld uniquement</strong> (<code>minecraft:overworld</code>). Impossible de fonder une nation ou un claim dans le Nether ou l'End.</li>
              <li><strong>Affiliation</strong> : Le joueur ne doit appartenir a aucune nation (ni dirigeant, ni membre).</li>
              <li><strong>Item de fondation</strong> : <strong>Drapeau de Colonie</strong> (<code>jn:colony_flag</code>) — craft : <code>4x Laine</code> en croix autour de <code>1x Baton</code>.</li>
              <li><strong>Support obligatoire</strong> : Doit etre pose sur une <strong>cloture</strong>, un <strong>muret</strong> ou un <strong>mat</strong> (accroche auto au sommet de la colonne, detection elargie a <strong>3 blocs</strong>).</li>
              <li><strong>14 Variantes de Mats</strong> : Fer, Chene, Sapin, Bouleau, Acajou, Acacia, Chene noir, Paletuvier, Cerisier, Bambou, Carmin, Biscornu, Chene pale et Peuplier. Recette : <code>1x Pepite d'or</code> + <code>2x Planches</code> (ou <code>2x Lingots de fer</code>) en colonne -> <strong>2 mats</strong>. Clic droit avec le meme mat l'empile au sommet.</li>
              <li><strong>Validation de parcelle</strong> : La cellule <code>100x100</code> doit etre libre et le sommet du mat inoccupé. Pas de distance fixe imposee en blocs au-dela de cellules distinctes.</li>
              <li><strong>Co-fondateurs</strong> : Par defaut <code>minFounders = 1</code> (fondation solo). Si un serveur configure <code>minFounders &gt; 1</code> (max <code>10</code>), les invites sans nation ont <strong>30 secondes</strong> pour accepter.</li>
            </ul>
            <div class="callout callout-tip">
              <div class="callout-title">Securite anti-abandon</div>
              Annuler l'assistant ou se deconnecter en cours de creation supprime le drapeau temporaire et rembourse votre <code>jn:colony_flag</code> en Survie (immediatement ou a la reconnexion).
            </div>
          `,
        },
      },
      {
        heading: { en: "The 8-Step Creation Wizard & Leader Table", fr: "Assistant en 8 Etapes & Table du Maire" },
        html: {
          en: `
            <ol>
              <li><strong>Nation Name</strong>: 3 to 24 characters.</li>
              <li><strong>Capital Name</strong>: 2 to 24 characters (defaults to Nation Name if empty).</li>
              <li><strong>Base Flag Color</strong>: Pick from <strong>24 colors</strong>.</li>
              <li><strong>Flag Studio</strong>: Customize patterns & layers with live camera preview.</li>
              <li><strong>Royal Crown</strong>: Choose <strong>1 of 12 free 3D Royal Crowns</strong> (auto-equipped on Head if empty, otherwise inventory). Protected on death.</li>
              <li><strong>Elections Setup</strong>: Optional immediate activation or configure later at the Leader Table.</li>
              <li><strong>Co-Founders</strong>: Only shown if server requires <code>minFounders &gt; 1</code>.</li>
            </ol>
            <p>Craft and place the <strong>Leader Table</strong> (<code>jn:mayor_table</code>: <code>1x Book + 3x Wooden Slabs + 2x Logs</code>). It automatically binds to the nearest nation flag within <strong>300 blocks</strong> (<code>MAX_FLAG_RANGE_BLOCKS = 300</code>) and serves as your nation's governance hub.</p>
          `,
          fr: `
            <ol>
              <li><strong>Nom de la Nation</strong> : 3 a 24 caracteres.</li>
              <li><strong>Nom de la Capitale</strong> : 2 a 24 caracteres (defaut = nom de la nation si vide).</li>
              <li><strong>Couleur de base</strong> : choix parmi <strong>24 couleurs</strong>.</li>
              <li><strong>Studio de Drapeau</strong> : personnalisation complete avec camera de previsualisation.</li>
              <li><strong>Couronne Royale</strong> : choix gratuit parmi <strong>12 modeles 3D</strong> (equipee sur la tete si libre). Protegee contre la perte a la mort.</li>
              <li><strong>Configuration des Elections</strong> : activables des la creation ou plus tard.</li>
              <li><strong>Co-fondateurs</strong> : affiche uniquement si <code>minFounders &gt; 1</code> sur le serveur.</li>
            </ol>
            <p>Craftez et posez la <strong>Table du Maire</strong> (<code>jn:mayor_table</code> : <code>1x Livre + 3x Dalles bois + 2x Buches</code>). Elle se lie au drapeau de colonie le plus proche dans un rayon de <strong>300 blocs</strong> et sert de tableau de bord central.</p>
          `,
        },
      },
      {
        heading: { en: "Sub-Cities, Flag Studio & Cosmetic Flags", fr: "Sous-Villes, Studio de Drapeau & Drapeaux Cosmetiques" },
        html: {
          en: `
            <ul>
              <li><strong>Founding a Sub-City</strong>: Unlocked at <strong>Nation Tier 3+</strong>. A member with <code>territory_expand</code> places a <code>jn:colony_flag</code> on a mount in any unclaimed <code>100x100</code> Overworld cell. Name length: 2–24 characters; pick an unlocked Territory Type. Inherits capital banner automatically at no coin cost.</li>
              <li><strong>Flag Studio Engine</strong>: <strong>59 patterns</strong> x <strong>24 colors</strong> = <strong>1,416 combinations</strong> (plus empty slot 0 = 1,417 native textures, and 32 API slots). Stack up to <strong>10 layers</strong>, reorder, delete, <strong>rotate 90 degrees</strong> around the pole, or reset to white. Includes a 2-second (40-tick) live camera preview after each edit.</li>
              <li><strong>Flag Relocation Permissions</strong>: Editing banners requires <code>table_banner</code>; relocating a sub-city flag requires <code>flag_relocate_subcity</code>; relocating the capital flag requires sovereign permission <code>capital_flag_relocate</code>.</li>
              <li><strong>Cosmetic Flag</strong> (<code>jn:cosmetic_flag</code>): Shapeless craft from <code>1x jn:colony_flag</code>. Displays and auto-syncs (every 5s / on banner edit) any chosen nation's banner. Right-click to configure or rotate; hit to retrieve as item (requires <code>cosmetic_flag_manage</code> in territory).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Fonder une Sous-Ville</strong> : Debloquee au <strong>Palier 3+</strong>. Un membre ayant <code>territory_expand</code> pose un <code>jn:colony_flag</code> sur un support dans une parcelle <code>100x100</code> libre de l'Overworld. Nom 2-24 car., choix du Type de territoire debloque. Herite automatiquement de la banniere de la capitale (0 piece).</li>
              <li><strong>Studio de Drapeau</strong> : <strong>59 motifs</strong> x <strong>24 couleurs</strong> = <strong>1 416 combinaisons</strong> (+ slot 0 vide = 1 417 textures natives, et 32 slots API). Jusqu'a <strong>10 calques</strong> superposables, reordonnables, pivotables a <strong>90°</strong>, avec camera libre de 2 secondes (40 ticks) apres chaque edition.</li>
              <li><strong>Permissions Drapeau</strong> : editer = <code>table_banner</code> ; deplacer drapeau sous-ville = <code>flag_relocate_subcity</code> ; deplacer drapeau capitale = permission souveraine <code>capital_flag_relocate</code>.</li>
              <li><strong>Drapeau Cosmetique</strong> (<code>jn:cosmetic_flag</code>) : craft sans forme avec <code>1x jn:colony_flag</code>. Affiche et synchronise en direct (toutes les 5s) la banniere de la nation choisie. Clic droit pour editer/pivoter, frapper pour recuperer (<code>cosmetic_flag_manage</code>).</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "tiers-xp",
    group: "foundations",
    kicker: { en: "2. Progression", fr: "2. Progression" },
    title: {
      en: "Nation Tiers (0-9), Levels (1-100) & XP Sources",
      fr: "Paliers de Nation (0-9), Niveaux (1-100) & Sources d'XP",
    },
    subtitle: {
      en: "Complete progression curve from Settlement to Superpower Nation, including Research Point gains and exact territory/citizen unlocks.",
      fr: "Courbe complete de Campement a Superpuissance, incluant les gains de Points de Recherche et deblocages exacts de territoires/citoyens.",
    },
    searchKeywords: "tier level xp research points settlement commonwealth superpower citizen cap subcity claims",
    sections: [
      {
        heading: { en: "10 Nation Tiers & 100 Global Levels", fr: "Les 10 Paliers & 100 Niveaux Globaux" },
        html: {
          en: `
            <p>Each Tier spans <strong>10 sub-levels</strong> (100 levels total; Level 100 is reached at <strong>105,000 XP</strong>). Every global level gained awards <strong>+2 Research Points (RP)</strong> (up to 198 cumulative RP). Note: <code>getTierMaxMembers()</code> returns <code>Infinity</code> in current gameplay, so human player membership has no hard cap.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Tier</th><th>Rank Name</th><th>XP Required (Levels)</th><th>Capital Claims</th><th>Max Sub-Cities</th><th>Max NPC Citizens</th><th>Unlocked Territory Types</th></tr></thead>
              <tbody>
                <tr><td><strong>0</strong></td><td>Settlement</td><td>0 XP (Lvl 1–10)</td><td>1 cell (100x100)</td><td>0</td><td>4</td><td>Capital</td></tr>
                <tr><td><strong>1</strong></td><td>Commonwealth</td><td>500 XP (Lvl 11–20)</td><td>5 cells (Cross +4)</td><td>0</td><td>8</td><td>—</td></tr>
                <tr><td><strong>2</strong></td><td>State</td><td>1,500 XP (Lvl 21–30)</td><td>9 cells (3x3 = 300x300)</td><td>0</td><td>12</td><td>—</td></tr>
                <tr><td><strong>3</strong></td><td>Developing State</td><td>3,500 XP (Lvl 31–40)</td><td>9 cells (3x3)</td><td>1</td><td>16</td><td>Farmland, Outpost</td></tr>
                <tr><td><strong>4</strong></td><td>Advanced State</td><td>7,000 XP (Lvl 41–50)</td><td>9 cells (3x3)</td><td>2</td><td>20</td><td>Hamlet / Village</td></tr>
                <tr><td><strong>5</strong></td><td>Nation</td><td>12,000 XP (Lvl 51–60)</td><td>9 cells (3x3)</td><td>4</td><td>25</td><td>Market Town</td></tr>
                <tr><td><strong>6</strong></td><td>Rising Nation</td><td>20,000 XP (Lvl 61–70)</td><td>9 cells (3x3)</td><td>6</td><td>30</td><td>—</td></tr>
                <tr><td><strong>7</strong></td><td>Established Nation</td><td>32,000 XP (Lvl 71–80)</td><td>9 cells (3x3)</td><td>8</td><td>35</td><td>Great City</td></tr>
                <tr><td><strong>8</strong></td><td>Great Nation</td><td>50,000 XP (Lvl 81–90)</td><td>9 cells (3x3)</td><td>9</td><td>40</td><td>—</td></tr>
                <tr><td><strong>9</strong></td><td>Superpower Nation</td><td>75,000 XP (Lvl 91–100)</td><td>9 cells (3x3)</td><td>10</td><td>50</td><td>Imperial Fortress</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <p>Chaque Palier contient <strong>10 sous-niveaux</strong> (100 niveaux globaux ; Niveau 100 atteint a <strong>105 000 XP</strong>). Chaque niveau global octroie <strong>+2 Points de Recherche (PR)</strong> (max 198 PR). En jeu, <code>getTierMaxMembers()</code> retourne <code>Infinity</code> (aucune limite de joueurs humains).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Palier</th><th>Nom</th><th>XP requise (Niveaux)</th><th>Capitale (Parcelles)</th><th>Sous-villes max</th><th>Citoyens PNJ max</th><th>Territoires debloques</th></tr></thead>
              <tbody>
                <tr><td><strong>0</strong></td><td>Campement</td><td>0 XP (Niv. 1–10)</td><td>1 parcelle (100x100)</td><td>0</td><td>4</td><td>Capitale</td></tr>
                <tr><td><strong>1</strong></td><td>Communaute</td><td>500 XP (Niv. 11–20)</td><td>5 parcelles (Croix)</td><td>0</td><td>8</td><td>—</td></tr>
                <tr><td><strong>2</strong></td><td>Etat</td><td>1 500 XP (Niv. 21–30)</td><td>9 parcelles (3x3 = 300x300)</td><td>0</td><td>12</td><td>—</td></tr>
                <tr><td><strong>3</strong></td><td>Etat en Developpement</td><td>3 500 XP (Niv. 31–40)</td><td>9 parcelles (3x3)</td><td>1</td><td>16</td><td>Terres Agricoles, Avant-poste</td></tr>
                <tr><td><strong>4</strong></td><td>Etat Avance</td><td>7 000 XP (Niv. 41–50)</td><td>9 parcelles (3x3)</td><td>2</td><td>20</td><td>Hameau / Village</td></tr>
                <tr><td><strong>5</strong></td><td>Nation</td><td>12 000 XP (Niv. 51–60)</td><td>9 parcelles (3x3)</td><td>4</td><td>25</td><td>Bourgade Marchande</td></tr>
                <tr><td><strong>6</strong></td><td>Nation Emergente</td><td>20 000 XP (Niv. 61–70)</td><td>9 parcelles (3x3)</td><td>6</td><td>30</td><td>—</td></tr>
                <tr><td><strong>7</strong></td><td>Nation Etablie</td><td>32 000 XP (Niv. 71–80)</td><td>9 parcelles (3x3)</td><td>8</td><td>35</td><td>Grande Cite</td></tr>
                <tr><td><strong>8</strong></td><td>Grande Nation</td><td>50 000 XP (Niv. 81–90)</td><td>9 parcelles (3x3)</td><td>9</td><td>40</td><td>—</td></tr>
                <tr><td><strong>9</strong></td><td>Superpuissance</td><td>75 000 XP (Niv. 91–100)</td><td>9 parcelles (3x3)</td><td>10</td><td>50</td><td>Forteresse Imperiale</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
      {
        heading: { en: "Exact Nation XP Sources", fr: "Sources Exactes d'XP de Nation" },
        html: {
          en: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Action</th><th>XP Awarded</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Recruit / Birth NPC Citizen</td><td><strong>+60 XP</strong></td><td>Per NPC recruited with Invitation or confirmed birth</td></tr>
                <tr><td>New Player Joins Nation</td><td><strong>+120 XP</strong></td><td>Once per player per nation (anti-rejoin farm guard)</td></tr>
                <tr><td>Claim PvP Bounty</td><td><strong>+150 XP</strong> (+<strong>100</strong> bonus)</td><td><strong>+250 XP total</strong> if target belongs to another nation</td></tr>
                <tr><td>Defend Against Marauder Raid</td><td><strong>+350 XP</strong></td><td>Awarded upon clearing all raid waves (+50 Mood)</td></tr>
                <tr><td>Upgrade Workstation</td><td><strong>75 x New Level</strong></td><td>+150 (L2), +225 (L3), +300 (L4), +375 (L5)</td></tr>
                <tr><td>Win Territory Siege Battle</td><td><strong>+500 XP</strong></td><td>Hold target cell when battle timer expires</td></tr>
                <tr><td>Complete Blueprint Construction</td><td><strong>+200 XP</strong></td><td>Plus +20 / +35 / +60 Mood depending on building size</td></tr>
                <tr><td>Unlock Research Technology</td><td><strong>+15 XP</strong></td><td>Per completed technology node</td></tr>
                <tr><td>Found International Organization / Lvl 5 Resolution</td><td><strong>+50 XP</strong></td><td>Resolution XP goes to Secretary-General's nation</td></tr>
                <tr><td>Nation & Citizen Quests</td><td><strong>10 – 500 XP</strong></td><td>Varies by quest rank/chain</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Action</th><th>XP octroyee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Recrutement / Naissance Citoyen PNJ</td><td><strong>+60 XP</strong></td><td>Par invitation utilisee ou naissance validee</td></tr>
                <tr><td>Nouveau Joueur Membre</td><td><strong>+120 XP</strong></td><td>Une seule fois par joueur dans une meme nation</td></tr>
                <tr><td>Prime PvP accomplie</td><td><strong>+150 XP</strong> (+<strong>100</strong> bonus)</td><td><strong>+250 XP total</strong> si la cible vient d'une autre nation</td></tr>
                <tr><td>Victoire Raid de Maraudeurs</td><td><strong>+350 XP</strong></td><td>A l'elimination de toutes les vagues (+50 Moral)</td></tr>
                <tr><td>Amelioration Station de Travail</td><td><strong>75 x Niveau atteint</strong></td><td>+150 (Niv 2), +225 (Niv 3), +300 (Niv 4), +375 (Niv 5)</td></tr>
                <tr><td>Victoire Bataille (Siege)</td><td><strong>+500 XP</strong></td><td>Detenir la parcelle a la fin du chronometre</td></tr>
                <tr><td>Chantier de Construction acheve</td><td><strong>+200 XP</strong></td><td>Plus +20 / +35 / +60 Moral selon envergure</td></tr>
                <tr><td>Technologie debloqueee (Recherche)</td><td><strong>+15 XP</strong></td><td>A chaque technologie terminee</td></tr>
                <tr><td>Fondation Organisation / Resolution Niv. 5</td><td><strong>+50 XP</strong></td><td>Resolution versee a la nation du Secretaire General</td></tr>
                <tr><td>Quetes de Nation & Citoyens</td><td><strong>10 – 500 XP</strong></td><td>Variable selon le rang ou la chaine</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
    ],
  },
  {
    id: "territory-protection",
    group: "foundations",
    kicker: { en: "3. Territory & Security", fr: "3. Territoire & Securite" },
    title: {
      en: "Territory Grid, Land Trading, Biomes & Protections",
      fr: "Grille Territoriale, Achat de Terres, Biomes & Protections",
    },
    subtitle: {
      en: "100x100 claim rules, 7 territory types, inter-nation land deals, interactive map, 78 role permissions, and border particle legends.",
      fr: "Regles des parcelles 100x100, 7 types de territoires, ventes de terres, carte interactive, 78 permissions de roles et particules de frontieres.",
    },
    featuredBlocks: ["globe", "mayor_table"],
    featuredItems: ["jn:atlas", "jn:colony_flag"],
    searchKeywords:
      "territory claim 100x100 grid land purchase buyout biome fog of war map protection grief piston pvp friendly fire roles permissions titles borders",
    sections: [
      {
        heading: { en: "100x100 Grid, 7 Territory Types & Land Trading", fr: "Grille 100x100, 7 Types de Territoires & Ventes Foncieres" },
        html: {
          en: `
            <ul>
              <li><strong>Cell Size</strong>: Every claim cell is <strong>100 x 100 blocks</strong> (<code>gridX = floor(x/100)</code>, <code>gridZ = floor(z/100)</code>), bedrock to build limit in the Overworld.</li>
              <li><strong>7 Territory Types</strong>: Capital (<code>capital</code>, T0), Farmland (<code>farmland</code>, T3), Outpost (<code>outpost</code>, T3), Hamlet / Village (<code>hamlet</code>, T4 — cannot build military barracks), Market Town (<code>town</code>, T5), Great City (<code>city</code>, T7), Imperial Fortress (<code>fortress</code>, T9). Sub-cities can be abandoned on-site via the Leader Table (<code>subcity_abandon</code>).</li>
              <li><strong>Land Purchase & Nation Buyout</strong> (Diplomacy -> Land Purchase, sovereign perm <code>land_purchase_manage</code>):
                <ul>
                  <li>Buy <strong>targeted sub-cities</strong> or execute a <strong>full buyout of an entire nation</strong> (price 1 to 2,147,483,647 coins).</li>
                  <li>Buyer proposes a suggested price; seller sets the final price upon approval. Approved offers expire after <strong>30 real-time minutes</strong> (<code>1,800,000 ms</code>).</li>
                  <li>Blocked while an international <strong>Diplomatic Embargo</strong> is active between the nations.</li>
                  <li><em>Partial buyout</em>: lands & flags transfer to buyer, coins go to seller's treasury. <em>Total buyout</em>: seller capital becomes a <code>town</code> sub-city under buyer, members/NPCs/treasury balance transfer to buyer, seller nation dissolves, and the <strong>sale price</strong> becomes a personal balance claimable in physical <code>jn:coin</code> via <em>Claim Sale Proceeds</em>.</li>
                </ul>
              </li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Taille d'une parcelle</strong> : <strong>100 x 100 blocs</strong> (<code>gridX = floor(x/100)</code>, <code>gridZ = floor(z/100)</code>) sur toute la hauteur de l'Overworld.</li>
              <li><strong>7 Types de territoires</strong> : Capitale (T0), Terres Agricoles (T3, pas de caserne), Avant-poste (T3), Hameau/Village (T4, pas de caserne), Bourgade Marchande (T5), Grande Cite (T7), Forteresse Imperiale (T9). Abandon sur place a la Table du Maire (<code>subcity_abandon</code>).</li>
              <li><strong>Achat de Terres & Rachat de Nation</strong> (Diplomatie -> Achat de terres, perm souveraine <code>land_purchase_manage</code>) :
                <ul>
                  <li>Achat d'une/plusieurs <strong>sous-villes</strong> OU <strong>rachat integral d'une nation</strong> (prix de 1 a 2 147 483 647 pieces).</li>
                  <li>L'acheteur propose un montant, le vendeur fixe le prix final en approuvant. Fenetre de paiement : <strong>30 minutes reelles</strong>.</li>
                  <li>Bloque en cas d'<strong>Embargo diplomatique</strong>.</li>
                  <li><em>Vente partielle</em> : parcelles transferees, prix verse en tresorerie vendeuse. <em>Rachat total</em> : capitale vendeuse devient sous-ville <code>town</code>, membres/PNJ/tresorerie transferes a l'acheteur, l'ancienne nation est dissoute, et l'ancien dirigeant encaisse le <strong>prix de vente en <code>jn:coin</code> physiques</strong> (Mailbox / bouton Produits de vente).</li>
                </ul>
              </li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Biomes, Interactive Map & Border Particles", fr: "Biomes, Carte Interactive & Particules de Frontieres" },
        html: {
          en: `
            <ul>
              <li><strong>11 Cartographic Biomes</strong>: Plains, Desert, Savanna, Jungle, Mountains, Ocean, Taiga & Forest, Swamp, Badlands, Snowy Plains, Ice/Glacier. <em>Note</em>: Biome types are visual/cartographic in Territory Map UI and grant no hidden production modifiers.</li>
              <li><strong>Fog of War Discovery</strong>: Passive walking logs current sector every <strong>5s (100 ticks)</strong>. Holding an <strong>Atlas</strong> (mainhand or offhand) scans every <strong>0.5s (10 ticks)</strong> on sector crossings and reveals the current sector <strong>plus all 8 adjacent sectors</strong>.</li>
              <li><strong>Interactive Map (11x7 = 77 cells)</strong>: Accessible via <code>jn:atlas</code>, <code>jn:globe</code>, or Leader Table. Colors: <strong>Green</strong> (Yours), <strong>Blue</strong> (Allied), <strong>Gray</strong> (Neutral), <strong>Red</strong> (Enemy). Click any cell to inspect coordinates, bounds, biome, owner, and recenter.</li>
              <li><strong>Border Particles</strong>: Automatically shown when holding <code>jn:colony_flag</code>, or toggled permanently in Territory Management (radius <strong>20 blocks</strong>, spacing 3 blocks, refresh every 0.6s): <strong>Golden Wax</strong> (Own land), <strong>White Endrod</strong> (Wilderness), <strong>Flames</strong> (Rival territory).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>11 Categories de Biomes</strong> : Plaines, Desert, Savane, Jungle, Montagnes, Ocean, Taiga & Foret, Marais, Badlands, Plaines Enneigees, Banquise/Glace. <em>Note</em> : purement cartographiques dans la UI (aucun bonus economique cache).</li>
              <li><strong>Brouillard de guerre</strong> : marche passive enregistre le secteur toutes les <strong>5s (100 ticks)</strong>. Tenir un <strong>Atlas</strong> scanne toutes les <strong>0,5s (10 ticks)</strong> aux frontieres et revele le secteur courant <strong>+ les 8 secteurs adjacents</strong>.</li>
              <li><strong>Carte Interactive (11x7 = 77 parcelles)</strong> : via <code>jn:atlas</code>, <code>jn:globe</code> ou Table du Maire. Couleurs : <strong>Vert</strong> (Votre nation), <strong>Bleu</strong> (Allie), <strong>Gris</strong> (Neutre), <strong>Rouge</strong> (Ennemi). Clic sur une case pour infos et recentrage.</li>
              <li><strong>Particules de Frontieres</strong> : auto en tenant <code>jn:colony_flag</code> ou toggle permanent (rayon <strong>20 blocs</strong>, pas 3 blocs, maj 0,6s) : <strong>Etincelles dorees</strong> (Votre territoire), <strong>Blanc Endrod</strong> (Zone sauvage), <strong>Flammes</strong> (Territoire rival).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Claim Protections, PvP, Roles (78 Perms) & Titles", fr: "Protections de Claim, PvP, Roles (78 Perms) & Titres" },
        html: {
          en: `
            <ul>
              <li><strong>Strict Territory Protections</strong>: Unauthorized players are blocked from breaking/placing blocks, buckets/fluids, fire/flint/TNT/End crystals, boats/minecarts/armor stands/spawn eggs/item frames/paintings, terrain tools (hoes/shovels/axes/bonemeal/shears/dyes), containers (chests, barrels, shulkers, hoppers, furnaces, crafting/enchant/smithing tables, beacons), doors/trapdoors/redstone, jukeboxes, and every <code>jn:*</code> workstation individually.</li>
              <li><strong>Anti-Grief Pistons & Explosions</strong>: Cross-border piston push/pull is blocked; explosions automatically strip all claimed blocks from their blast list.</li>
              <li><strong>PvP & Friendly Fire</strong>: Same-nation friendly fire is <strong>OFF by default</strong> (enabled per role via <code>friendly_fire</code> or nation toggle; leader has <code>leaderFriendlyFire</code>). Allied / same-Organization PvP is <strong>automatically blocked</strong>. <strong>Blue Helmets</strong> have total mutual PvP immunity.</li>
              <li><strong>Custom Roles & Permissions</strong>: Up to <strong>5 custom roles</strong>, <strong>78 granular permissions</strong> across 10 categories (including 9 Sovereign permissions OFF by default) + <strong>7 Role Presets</strong> + separate <strong>Visitor</strong>, <strong>General Ally</strong>, and <strong>Specific Ally</strong> permission profiles. Anti-escalation prevents non-leaders from granting perms they do not hold. Leader can simulate Visitor / Ally / Role views.</li>
              <li><strong>Leader Titles</strong>: <strong>18 presets</strong> (Ruler, King, Queen, Emperor, Empress, President, Lord, Lady, Duke, Duchess, Chancellor, Governor, Commander, Mayor, Sultan, Chieftain, Sovereign) + custom title (max 24 chars).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Protections strictes en territoire</strong> : blocage de casse/pose, fluides, feu/briquet/TNT/cristaux, bateaux/minecarts/porte-armures/cadres/tableaux, outils de terrain (houes/pelles/cisailles/poudre d'os), conteneurs (coffres, tonneaux, shulkers, entonnoirs, fours, tables), portes/trappes/redstone, jukebox, et chaque station <code>jn:*</code> via sa permission dediee.</li>
              <li><strong>Pistons & Explosions</strong> : pistons transfrontaliers bloques ; degats d'explosions neutralises sur tout bloc revendique.</li>
              <li><strong>PvP & Tir Allie</strong> : tir allie interne <strong>desactive par defaut</strong> (toggle global/role/dirigeant). PvP entre nations alliees ou meme Organisation <strong>bloque</strong>. <strong>Casques Bleus</strong> immunises mutuellement en PvP.</li>
              <li><strong>Roles & Permissions</strong> : max <strong>5 roles personnalises</strong>, <strong>78 permissions</strong> en 10 categories (dont 9 souveraines desactivees par defaut), <strong>7 modeles</strong>, profils separes <strong>Visiteurs</strong>, <strong>Allies communs</strong> et <strong>Allies specifiques</strong>. Anti-escalade de droits et mode simulation Visiteur/Allie.</li>
              <li><strong>Titres de Dirigeant</strong> : <strong>18 titres predefinis</strong> + titre personnalise (max 24 car.).</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "economy-mood",
    group: "foundations",
    kicker: { en: "4. Economy & Happiness", fr: "4. Economie & Moral" },
    title: {
      en: "Treasury, Coinage, Tax Table & Nation Mood",
      fr: "Tresorerie, Monnaie, Table des Impots & Moral de Nation",
    },
    subtitle: {
      en: "1:1 physical coin banking, 14-day NPC taxation mechanics, payment probability formulas, and every positive/negative Mood factor (-1000 to +1000).",
      fr: "Banque 1:1 en pieces, impots sur les PNJ tous les 14 jours, probabilites de recouvrement et tous les facteurs du Moral (-1000 a +1000).",
    },
    featuredBlocks: ["taxation_table", "mayor_table"],
    featuredItems: ["jn:coin"],
    searchKeywords: "treasury coin tax taxation table 14 days mood morale happy revolt accounting patron charitable bonus accountant",
    sections: [
      {
        heading: { en: "Currency, Treasury & Accountant Banking", fr: "Monnaie, Tresorerie & Guichet du Comptable" },
        html: {
          en: `
            <ul>
              <li><strong>Currency</strong>: Physical <strong>Coin</strong> (<code>jn:coin</code>), converted <strong>1:1</strong> with the digital Nation Treasury (scoreboard <code>jn_treasury</code>, 32-bit cap <code>2,147,483,647</code>).</li>
              <li><strong>Two Banking Channels</strong>:
                <ol>
                  <li><strong>Leader Table</strong> (<code>treasury_deposit</code> / <code>treasury_withdraw</code>): free slider up to held/available coins.</li>
                  <li><strong>Accountant NPC (<code>accountant</code>)</strong>: Quick Deposits (<code>16 / 64 / All / Custom 1–1000</code>), Quick Withdrawals (<code>16 / 64 / 128 / Custom up to 512</code>), plus Financial Ledger ratings: <em>Critical (&lt;200)</em>, <em>Balanced (200–999)</em>, <em>Comfortable (1,000–4,999)</em>, <em>Flourishing (5,000+)</em>.</li>
                </ol>
              </li>
              <li><strong>Hybrid Payment System</strong>: Shops, construction funding, bounties, and military recruitment spend personal inventory coins first or draw directly from Nation Treasury if permitted (<code>treasury_spend_services</code> / <code>treasury_withdraw</code>). Note: there are no automatic periodic salary payouts.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Monnaie</strong> : <strong>Piece</strong> (<code>jn:coin</code>), conversion <strong>1:1</strong> avec la Tresorerie numerique (<code>jn_treasury</code>, plafond <code>2 147 483 647</code>).</li>
              <li><strong>Acces bancaires</strong> :
                <ol>
                  <li><strong>Table du Maire</strong> (<code>treasury_deposit</code> / <code>treasury_withdraw</code>) : curseur libre.</li>
                  <li><strong>Citoyen Comptable (<code>accountant</code>)</strong> : Depots rapides (<code>16 / 64 / Tout / 1-1000</code>), Retraits (<code>16 / 64 / 128 / max 512 par retrait</code>) et Grand Livre : <em>Critique (&lt;200)</em>, <em>Equilibree (200-999)</em>, <em>Confortable (1000-4999)</em>, <em>Florissante (5000+)</em>.</li>
                </ol>
              </li>
              <li><strong>Paiement hybride</strong> : boutiques, chantiers, primes et recrutement militaire peuvent prelever en inventaire ou en tresorerie nationale (<code>treasury_spend_services</code>). Aucun systeme de salaires automatiques.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Tax Table & 14-Day Collection Formulas", fr: "Table des Impots & Formules de Collecte (14 jours)" },
        html: {
          en: `
            <ul>
              <li><strong>Block</strong>: <strong>Tax Table</strong> (<code>jn:taxation_table</code> — craft: <code>1x Coin + 3x Wooden Slabs + 2x Logs</code>). Requires claimed territory and permission <code>tax_manage</code>.</li>
              <li><strong>Taxpayers</strong>: <strong>Active NPC Citizens only</strong> (even in unloaded chunks). Human players are never taxed.</li>
              <li><strong>Tax Rate & Cycle</strong>: Rate <code>1</code> to <code>5</code> coins per NPC (OFF by default). Collected once every <strong>14 in-game days</strong> (<code>336,000 ticks</code>).</li>
              <li><strong>Payment Probability per Citizen</strong>: Let <code>happiness = (mood + 1000) / 2000</code> (<code>0..1</code>). Range rolled each cycle: <code>[10% + 75%*happiness + accounting ; 15% + 80%*happiness + accounting]</code> (capped at 100%).
                <ul>
                  <li>Mood <code>-1000</code>: <strong>10%–15%</strong> | Mood <code>0</code>: <strong>47.5%–55%</strong> | Mood <code>+1000</code>: <strong>85%–95%</strong>.</li>
                  <li><em>Accounting I/II/III</em>: <strong>+5% / +10% / +15%</strong> payment chance.</li>
                  <li><em>Charitable Bonus</em>: <strong>5% chance</strong> per paying NPC to add <strong>+1 bonus coin</strong>.</li>
                </ul>
              </li>
              <li><strong>Daily Mood Penalty</strong>: Applied every day taxes are enabled: <code>round(2000 * rate / 10 * (1 - patronReduction))</code> = <strong>-200 / -400 / -600 / -800 / -1,000 Mood/day</strong> (reduced 5% / 10% / 15% by <em>Patron I/II/III</em>).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Bloc</strong> : <strong>Table des Impots</strong> (<code>jn:taxation_table</code> — recette : <code>1x Piece + 3x Dalles bois + 2x Buches</code>), en territoire revendique (<code>tax_manage</code>).</li>
              <li><strong>Contribuables</strong> : <strong>Uniquement les citoyens PNJ actifs</strong> (meme en chunks decharges). Les joueurs humains ne paient jamais d'impots.</li>
              <li><strong>Taux & Cycle</strong> : Taux de <strong>1 a 5 pieces</strong> / PNJ (desactive par defaut). Collecte tous les <strong>14 jours in-game</strong> (<code>336 000 ticks</code>).</li>
              <li><strong>Probabilite de paiement</strong> : avec <code>happiness = (mood + 1000) / 2000</code> : fourchette <code>[10% + 75%*happiness + comptabilite ; 15% + 80%*happiness + comptabilite]</code> (max 100%).
                <ul>
                  <li>Moral <code>-1000</code> : <strong>10%-15%</strong> | Moral <code>0</code> : <strong>47,5%-55%</strong> | Moral <code>+1000</code> : <strong>85%-95%</strong>.</li>
                  <li><em>Comptabilite I/II/III</em> : <strong>+5% / +10% / +15%</strong>. <em>Dons charitables</em> : <strong>5% de chance</strong> d'ajouter <strong>+1 piece bonus</strong> par payeur.</li>
                </ul>
              </li>
              <li><strong>Penalite quotidienne de Moral</strong> : <strong>-200 / -400 / -600 / -800 / -1 000</strong> points par jour (reduit de 5% / 10% / 15% par <em>Mecene I/II/III</em>).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Nation Mood Scale (-1000 to +1000) & Effects", fr: "Echelle du Moral (-1000 a +1000) & Effets" },
        html: {
          en: `
            <p>Starts at <code>0</code>. Tiers: <strong>Radiant</strong> (<code>+750..+1000</code>), <strong>Happy</strong> (<code>+250..+749</code>), <strong>Neutral</strong> (<code>-249..+249</code>), <strong>Unhappy</strong> (<code>-749..-250</code>), <strong>In Revolt</strong> (<code>-1000..-750</code>).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Positive Factors</th><th>Gain</th><th>Negative Factors</th><th>Loss</th></tr></thead>
              <tbody>
                <tr><td>Food Tier 1 (&gt;=100% daily rations)</td><td><strong>+5 / day</strong></td><td>Food Tier 2 or 3 (&lt;100% rations)</td><td><strong>-5 / day</strong></td></tr>
                <tr><td>Finished Small Building (vol &lt;=120, mats &lt;=40)</td><td><strong>+20</strong></td><td>Food Tier 4 (&lt;50%, Famine)</td><td><strong>-10 / day</strong></td></tr>
                <tr><td>Finished Medium Building</td><td><strong>+35</strong></td><td>Citizen Starvation Death</td><td><strong>-20 / death</strong></td></tr>
                <tr><td>Finished Large Building (vol &gt;=400 or mats &gt;=150)</td><td><strong>+60</strong></td><td>Citizen Lethal Disease Death</td><td><strong>-15 / death</strong></td></tr>
                <tr><td>Marauder Raid Victory</td><td><strong>+50</strong></td><td>Marauder Raid Defeat (abandoned)</td><td><strong>-30</strong></td></tr>
                <tr><td>Org Lvl 4+ Humanitarian Convoy</td><td><strong>+15</strong></td><td>Org Embargo Passed Against Nation</td><td><strong>-10</strong></td></tr>
                <tr><td>Org Lvl 5 Daily Prestige</td><td><strong>+10 / day</strong></td><td>Daily Taxes (Rate 1–5)</td><td><strong>-200 to -1,000 / day</strong></td></tr>
              </tbody>
            </table></div>
            <div class="callout callout-warn">
              <div class="callout-title">Mechanical Impacts</div>
              Mood directly controls <strong>NPC Tax collection rates (10% to 95%)</strong> and <strong>completely blocks NPC Citizen Births if Mood drops below -500</strong>.
            </div>
          `,
          fr: `
            <p>Depart a <code>0</code>. Paliers : <strong>Radieuse</strong> (<code>+750..+1000</code>), <strong>Heureuse</strong> (<code>+250..+749</code>), <strong>Neutre</strong> (<code>-249..+249</code>), <strong>Mecontente</strong> (<code>-749..-250</code>), <strong>En Revolte</strong> (<code>-1000..-750</code>).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Facteurs Positifs</th><th>Gain</th><th>Facteurs Negatifs</th><th>Perte</th></tr></thead>
              <tbody>
                <tr><td>Alimentation Tier 1 (&gt;=100% ration)</td><td><strong>+5 / jour</strong></td><td>Alimentation Tier 2 ou 3 (&lt;100%)</td><td><strong>-5 / jour</strong></td></tr>
                <tr><td>Petite Construction achevee</td><td><strong>+20</strong></td><td>Alimentation Tier 4 (Famine)</td><td><strong>-10 / jour</strong></td></tr>
                <tr><td>Moyenne Construction achevee</td><td><strong>+35</strong></td><td>Deces par Famine</td><td><strong>-20 / mort</strong></td></tr>
                <tr><td>Grande Construction (vol &gt;=400 / mats &gt;=150)</td><td><strong>+60</strong></td><td>Deces par Maladie Mortelle</td><td><strong>-15 / mort</strong></td></tr>
                <tr><td>Victoire Raid de Maraudeurs</td><td><strong>+50</strong></td><td>Defaite Raid de Maraudeurs</td><td><strong>-30</strong></td></tr>
                <tr><td>Convoi Humanitaire (Org Niv. 4+)</td><td><strong>+15</strong></td><td>Embargo International recu</td><td><strong>-10</strong></td></tr>
                <tr><td>Prestige Organisation Niv. 5</td><td><strong>+10 / jour</strong></td><td>Impots actifs (Taux 1–5)</td><td><strong>-200 a -1 000 / jour</strong></td></tr>
              </tbody>
            </table></div>
            <div class="callout callout-warn">
              <div class="callout-title">Impacts mecaniques</div>
              Le Moral pilote la <strong>probabilite de paiement des impots PNJ (10% a 95%)</strong> et <strong>bloque totalement les naissances de citoyens PNJ sous -500</strong>.
            </div>
          `,
        },
      },
    ],
  },
);

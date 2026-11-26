/* ============================================================================
 * JOBS & SKILL TREES WIKI — Core Progression & Blacksmith Complete Guide
 * Zero-emoji, strictly code-verified from JobsSkillsBP v1.0.0
 * ========================================================================== */

window.JS_GUIDE_MODULES = [
  {
    id: "jobs-overview",
    groupId: "core-system",
    kicker: { en: "SYSTEM ARCHITECTURE • 8 PROFESSIONS • 156 SKILLS", fr: "ARCHITECTURE SYSTEME • 8 METIERS • 156 COMPETENCES" },
    title: { en: "Jobs System, Commands & 3D Minigames", fr: "Systeme de Metiers, Commandes & Mini-jeux 3D" },
    subtitle: {
      en: "How to choose a profession, unlock nodes using vanilla XP levels, configure Magnet & Sneak skills, and master the 3D forge_bar minigames.",
      fr: "Comment choisir un metier, debloquer vos talents avec les niveaux d'XP vanilla, gerer l'Aimant / Sneak et maitriser les mini-jeux 3D.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Opening the Skill Menu & Commands", fr: "Ouvrir le Menu & Commandes Disponibles" },
        lead: {
          en: "Every player can access the interactive OreUI Jobs & Skill Trees menu through a craftable item, slash commands, or chat shortcuts.",
          fr: "Chaque joueur accede au menu interactif OreUI des Metiers & Competences via le Livre des Metiers, les commandes slash ou les raccourcis chat.",
        },
        recipeId: "jobskills:skill_book",
        table: {
          headers: {
            en: ["Access Method", "Command / Input", "Cooldown / Notes"],
            fr: ["Methode d'acces", "Commande / Entree", "Delai / Notes"],
          },
          rows: [
            ["<code>jobskills:skill_book</code>", { en: "Right-click anywhere with Book of Professions", fr: "Clic droit n'importe ou avec le Livre des Metiers" }, { en: "1s debounce; shapeless craft: 1 Book + 1 Lapis Lazuli", fr: "Anti-spam 1s ; craft libre : 1 Livre + 1 Lapis-Lazuli" }],
            ["<code>/jobskills:skills</code>", { en: "Slash command (also <code>/jobskills:jobs</code>, <code>/jobskills:metier</code>)", fr: "Commande slash (aussi <code>/jobskills:jobs</code>, <code>/jobskills:metier</code>)" }, { en: "Opens main menu or active skill tree (0.5s delay)", fr: "Ouvre le menu principal ou l'arbre actif (delai 0.5s)" }],
            ["<code>/frontier:jobs</code>", { en: "Frontier Extension unified command bridge", fr: "Passerelle commande unifiee Frontier Extension" }, { en: "Triggers <code>scriptevent jobskills:open_menu</code>", fr: "Declenche <code>scriptevent jobskills:open_menu</code>" }],
            ["<code>!skills</code> / <code>!jobs</code> / <code>!metier</code>", { en: "Chat shortcuts (also prefix <code>.</code>)", fr: "Raccourcis chat (prefixe <code>!</code> ou <code>.</code>)" }, { en: "Cancelled from public chat and opens menu automatically", fr: "Masque du chat public et ouvre automatiquement le menu" }],
          ],
        },
        callouts: [
          {
            kind: "info",
            title: { en: "Core Progression Rules (Verified)", fr: "Regles Fondamentales de Progression (Verifiees)" },
            items: {
              en: [
                "<strong>1 Active Profession:</strong> Each player commits to one profession at a time (saved compactly in Dynamic Property <code>jobskills_data</code>).",
                "<strong>Progressive Skill Cost (x2 per Tree Tier):</strong> There is no separate custom job XP bar. Unlock costs double with each vertical tier from bottom to top: <code>10</code> (Roots) &rarr; <code>20</code> &rarr; <code>40</code> &rarr; <code>80</code> &rarr; <code>160</code> vanilla XP levels (free in Creative). Direct path to 1 ultimate = <code>310</code> lvls; full job mastery = <code>660</code> (Lumberjack), <code>930</code> (Blacksmith), <code>950</code> (Rancher/Farmer/Fisher/Hunter/Knight), or <code>1,330</code> (Miner).",
                "<strong>2 Personal Toggles (Settings Menu):</strong> <strong>Magnet</strong> (pulls matching profession drops within <code>6.5 blocks</code> every 10 ticks) and <strong>Sneak Skills</strong> (disables Sneak+Use workstation/vein/treecap triggers when building).",
                "<strong>Reset / Switch Profession:</strong> Available inside Settings. Resets the active profession and all unlocked nodes — <strong>spent XP levels are not refunded</strong>.",
              ],
              fr: [
                "<strong>1 Metier Actif :</strong> Chaque joueur choisit un seul metier a la fois (sauvegarde compacte dans <code>jobskills_data</code>).",
                "<strong>Cout Progressif par Palier (x2 / Palier) :</strong> Aucune jauge d'XP metier separee. Le cout double a chaque palier de bas en haut : <code>10</code> (Racines) &rarr; <code>20</code> &rarr; <code>40</code> &rarr; <code>80</code> &rarr; <code>160</code> niveaux d'XP vanilla (gratuit en Creatif). Une branche directe jusqu'a 1 ultime coute <code>310</code> niv. ; tout maxer coute <code>660</code> (Bucheron), <code>930</code> (Forgeron), <code>950</code> (Eleveur/Fermier/Pecheur/Chasseur/Chevalier) ou <code>1 330</code> (Mineur).",
                "<strong>2 Options Personnelles (Parametres) :</strong> <strong>Aimant (Magnet)</strong> (attire les drops du metier sous <code>6.5 blocs</code> toutes les 10 ticks) et <strong>Competences Sneak</strong> (desactive les triggers Sneak+Clic pour construire tranquille).",
                "<strong>Reinitialisation / Changement :</strong> Disponible dans les Parametres. Efface le metier actif et les talents — <strong>l'XP depensee n'est pas remboursee</strong>.",
              ],
            },
          },
        ],
      },
      {
        num: "02",
        title: { en: "Overview of All 8 Professions & Total XP Costs", fr: "Presentation des 8 Metiers & Couts Totaux XP" },
        lead: {
          en: "Click any role card below to jump directly to its complete illustrated guide, workstation workflows, and stat tables. Costs scale x2 per tree tier (10 / 20 / 40 / 80 / 160 XP levels).",
          fr: "Cliquez sur n'importe quelle carte metier ci-dessous pour ouvrir sa presentation complete, ses schemas d'artisanat et ses tableaux de stats. Le cout double a chaque palier (10 / 20 / 40 / 80 / 160 niveaux XP).",
        },
        widget: "jobs-overview-cards",
        table: {
          headers: {
            en: ["Profession", "Total Nodes", "Tier Breakdown (T1 / T2 / T3 / T4 / T5)", "Full Mastery Total"],
            fr: ["Metier", "Total Noeuds", "Repartition (P1=10 / P2=20 / P3=40 / P4=80 / P5=160)", "Total pour Maxer"],
          },
          rows: [
            [{ en: "Miner", fr: "Mineur" }, "<code>23</code>", "<code>3 / 5 / 6 / 6 / 3</code>", "<strong>1,330 XP Lvls</strong>"],
            [{ en: "Lumberjack", fr: "Bucheron" }, "<code>14</code>", "<code>2 / 4 / 4 / 3 / 1</code>", "<strong>660 XP Lvls</strong>"],
            [{ en: "Blacksmith", fr: "Forgeron" }, "<code>19</code>", "<code>3 / 5 / 6 / 3 / 2</code>", "<strong>930 XP Lvls</strong>"],
            [{ en: "Rancher", fr: "Eleveur" }, "<code>20</code>", "<code>3 / 6 / 6 / 3 / 2</code>", "<strong>950 XP Lvls</strong>"],
            [{ en: "Farmer", fr: "Fermier" }, "<code>20</code>", "<code>3 / 6 / 6 / 3 / 2</code>", "<strong>950 XP Lvls</strong>"],
            [{ en: "Fisher", fr: "Pecheur" }, "<code>20</code>", "<code>3 / 6 / 6 / 3 / 2</code>", "<strong>950 XP Lvls</strong>"],
            [{ en: "Hunter", fr: "Chasseur" }, "<code>20</code>", "<code>3 / 6 / 6 / 3 / 2</code>", "<strong>950 XP Lvls</strong>"],
            [{ en: "Knight", fr: "Chevalier" }, "<code>20</code>", "<code>3 / 6 / 6 / 3 / 2</code>", "<strong>950 XP Lvls</strong>"],
          ],
        },
      },
      {
        num: "03",
        title: { en: "The 3D Minigame Engine (jobskills:forge_bar)", fr: "Moteur des Mini-jeux 3D (jobskills:forge_bar)" },
        lead: {
          en: "Artisan professions spawn an interactive floating 3D bar entity directly above workstations, supporting three distinct visual modes.",
          fr: "Les metiers artisanaux font apparaitre une jauge 3D interactive au-dessus de l'etabli, avec 3 modes de jeu distincts.",
        },
        entityShowcase: [
          "jobskills:forge_bar (Anvil Mode 0)",
          "jobskills:forge_bar (Heat Mode 1)",
          "jobskills:forge_bar (Soak Mode 2)",
        ],
        table: {
          headers: {
            en: ["Mode", "Used By", "Controls & Scoring"],
            fr: ["Mode", "Metiers / Etablis", "Controles & Calcul du Score"],
          },
          rows: [
            ["<strong>Mode 0: Anvil Strike</strong>", { en: "Blacksmith (Armor/Weapon Forging, Steel Plates, Repair, Salvage)", fr: "Forgeron (Forge Armes/Armures, Plaques d'Acier, Reparation, Recyclage)" }, { en: "Must hold <code>jobskills:forge_hammer</code> (even Creative!). Strike block as red slider passes Green (<code>+1.0</code>) or Yellow (<code>+0.72</code>). Miss = <code>-0.45</code>. Score clamped <code>15–100</code>.", fr: "Exige <code>jobskills:forge_hammer</code> en main (meme Creatif !). Frappez quand le curseur rouge croise le Vert (<code>+1.0</code>) ou Jaune (<code>+0.72</code>). Rate = <code>-0.45</code>. Score <code>15–100</code>." }],
            ["<strong>Mode 1: Heat / Timing</strong>", { en: "Blacksmith (Stage 1 Heat, Drying, Steel), Farmer (Smoker), Fisher (Barrel), Hunter (Fletching), Knight (Grindstone)", fr: "Forgeron (Chauffe Etape 1, Sechage, Acier), Fermier (Fumoir), Pecheur (Tonneau), Chasseur (Archerie), Chevalier (Meule)" }, { en: "Cursor rises automatically. Normal click blows bellows (<code>+0.08</code>); Sneak+Click locks timing. Steel smelting sets <code>failOnOverheat: true</code> — letting it hit top red wastes materials!", fr: "Le curseur monte automatiquement. Clic normal = souffle (<code>+0.08</code>) ; Sneak+Clic valide. La fonte d'acier active <code>failOnOverheat</code> : monter en zone rouge detruit le fer !" }],
            ["<strong>Mode 2: 5s Blue Soak</strong>", { en: "Blacksmith Stage 1 Leather Tanning (Water Cauldron)", fr: "Forgeron Etape 1 Tannage du Cuir (Chaudron d'Eau)" }, { en: "Automatic <code>100-tick (5.0s)</code> hydration gauge with synchronized ActionBar progress. Stay near cauldron until bar completes.", fr: "Jauge bleue automatique de <code>100 ticks (5,0s)</code> avec barre ActionBar synchronisee. Restez a portee du chaudron jusqu'a la fin." }],
          ],
        },
      },
      {
        num: "04",
        title: { en: "Active Abilities & Server Armor Synergy", fr: "Pouvoirs Actifs & Synergie Armure Serveur" },
        lead: {
          en: "Seven professions unlock a special active ability inside the Skill Menu (1 vanilla XP level per activation), plus universal Frontier Epic Knights armor synergy.",
          fr: "Sept metiers debloquent un pouvoir actif declenchable depuis le Menu (1 niveau d'XP vanilla par activation), en plus d'une synergie universelle d'armure.",
        },
        table: {
          headers: {
            en: ["Profession", "Active Skill", "Cost / Cooldown", "Exact Effect"],
            fr: ["Metier", "Pouvoir Actif", "Cout / Delai", "Effet Exact"],
          },
          rows: [
            [{ en: "Miner", fr: "Mineur" }, "<strong>Tunnelier 1x2</strong>", { en: "1 XP lvl / 10 min duration", fr: "1 niv. XP / Duree 10 min" }, { en: "Every mined pickaxe block also breaks the block directly beneath it (y-1).", fr: "Chaque bloc mine a la pioche casse aussi le bloc situe juste en dessous (y-1)." }],
            [{ en: "Blacksmith", fr: "Forgeron" }, "<strong>Emergency Weld</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "Repairs +30% max durability across all 4 armor slots + mainhand item.", fr: "Restaure +30% de durabilite max sur les 4 pieces d'armure portees + objet en main." }],
            [{ en: "Rancher", fr: "Eleveur" }, "<strong>Herd Blessing</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "16-block radius: heals animals to 100%, grows babies instantly, applies Resistance II & Regen II (2m).", fr: "Rayon 16 blocs : soigne a 100%, fait grandir les bebes, Resistance II et Regen II (2 min)." }],
            [{ en: "Farmer", fr: "Fermier" }, "<strong>Harvest Surge</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "17x6x17 zone around you: sets all farmland moisture to 7 and advances crops +3 to +5 stages.", fr: "Zone 17x6x17 : hydrate la terre au max (7) et pousse toutes les cultures de +3 a +5 stades." }],
            [{ en: "Fisher", fr: "Pecheur" }, "<strong>Sea Bounty</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "Conduit Power & Water Breathing (3m), Speed II (2m), plus 3-5 fish & 1-2 treasures (10% Heart of the Sea).", fr: "Conduit & Respiration (3m), Vitesse II (2m), 3-5 poissons et 1-2 tresors (10% Coeur de la Mer)." }],
            [{ en: "Hunter", fr: "Chasseur" }, "<strong>Blood Hunt</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "Strength II, Speed II, Resistance I (45s), Night Vision (60s) & slows hostiles within 24 blocks.", fr: "Force II, Vitesse II, Resistance I (45s), Vision Nocturne (60s) & ralentit les hostiles sous 24 blocs." }],
            [{ en: "Knight", fr: "Chevalier" }, "<strong>Royal Banner</strong>", { en: "1 XP lvl / 5 min CD", fr: "1 niv. XP / CD 5 min" }, { en: "Allies within 12 blocks gain Strength I (35s), Resistance II (25s), Absorption II (35s), Regen I (15s).", fr: "Allies sous 12 blocs : Force I (35s), Resistance II (25s), Absorption II (35s), Regen I (15s)." }],
          ],
        },
        callouts: [
          {
            kind: "success",
            title: { en: "Universal Frontier Epic Knights Netherite Synergy", fr: "Synergie Universelle Armures Netherite Frontier Epic Knights" },
            items: {
              en: [
                "Regardless of profession, every armor piece tagged <code>frontier_ek:tier_netherite</code> grants <strong>+2% Armor Toughness</strong> on hits of 4+ damage (max <code>+8%</code> full set) and <strong>+10% Knockback Resistance</strong> (max <code>+40%</code>).",
              ],
              fr: [
                "Quel que soit votre metier, chaque piece d'armure taguee <code>frontier_ek:tier_netherite</code> octroie <strong>+2% d'Armor Toughness</strong> sur les coups >= 4 degats (max <code>+8%</code> en full set) et <strong>+10% de Resistance au Recul</strong> (max <code>+40%</code>).",
              ],
            },
          },
        ],
      },
    ],
  },

  /* ========================================================================
   * ROLE 1: BLACKSMITH (FLAGSHIP PRESENTATION)
   * ====================================================================== */
  {
    id: "role-blacksmith",
    groupId: "professions",
    jobId: "blacksmith",
    kicker: { en: "PROFESSION 01 • PURE ARTISAN • 19 SKILLS", fr: "METIER 01 • ARTISANAT PUR • 19 COMPETENCES" },
    title: { en: "Blacksmith — Forging, Leather Tanning & Steel Smelting", fr: "Forgeron — Forge d'Armes, Tannage des Peaux & Acier" },
    subtitle: {
      en: "Master the 3-stage weapon & armor forge, 2-stage leather tanning from Rotten Flesh, 3-zone Blast Furnace steel smelting, diamond-free Anvil steel plates, repair, and salvage.",
      fr: "Maitrisez la forge d'armes/armures en 3 etapes, le tannage du cuir en 2 etapes, la fonderie d'acier 3 zones, les plaques sur enclume sans diamant, la reparation et le recyclage.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Role Identity & Essential Forge Hammer", fr: "Presentation du Role & Marteau de Forge Obligatoire" },
        lead: {
          en: "Blacksmith is a 100% artisan role built to supply your entire nation: forged gear works for ANY player who equips it, and Blacksmiths bypass Diamonds when crafting Epic Knights Steel Plates.",
          fr: "Le Forgeron est un metier 100% artisanal concu pour equiper toute votre nation : les bonus d'equipement s'appliquent a N'IMPORTE QUEL joueur qui les porte, et le Forgeron forge les Plaques d'Acier sans Diamant.",
        },
        roleHero: "blacksmith",
        recipeId: "jobskills:forge_hammer",
        callouts: [
          {
            kind: "warn",
            title: { en: "Strict Rule: Never Leave Home Without Your Forge Hammer", fr: "Regle Stricte : Gardez Toujours le Marteau de Forge en Main" },
            items: {
              en: [
                "Anvil & Grindstone 3D hammer minigames (Stage 2 Forging, Steel Plates, Repair, Salvage) <strong>strictly require holding <code>jobskills:forge_hammer</code></strong> during the strike — even in Creative mode.",
                "Hitting with an empty hand or another item plays a warning tone (<code>note.bass</code>) and does NOT advance the gauge.",
                "Tip: Unlock <strong>Heat Economy</strong> (<code>smith_heat_economy</code>) early for <strong>+25% smelting XP</strong> and a <strong>1.15x wider green/yellow target window</strong> on Furnace & Anvil bars.",
              ],
              fr: [
                "Les mini-jeux 3D d'Enclume et de Meule (Forge Etape 2, Plaques d'Acier, Reparation, Recyclage) exigent <strong>strictement de tenir <code>jobskills:forge_hammer</code> en main</strong> lors des frappes — meme en mode Creatif.",
                "Frapper a main nue ou avec un autre objet joue un son d'erreur (<code>note.bass</code>) sans faire progresser la barre.",
                "Astuce : Debloquez vite <strong>Economie Thermique</strong> (<code>smith_heat_economy</code>) pour gagner <strong>+25% d'XP</strong> et elargir la zone cible de <strong>1.15x</strong> au Fourneau et a l'Enclume.",
              ],
            },
          },
        ],
      },
      {
        num: "02",
        title: { en: "How Weapon, Armor & Tool Forging Works (3-Stage Pipeline)", fr: "Fonctionnement du Systeme de Forge (Pipeline 3 Etapes)" },
        lead: {
          en: "Requires Tempered Quenching (<code>smith_quench_temper</code>) for Tiers [1/5] to [4/5], and Master Seal (<code>smith_master_seal</code>) to unlock [5/5] Masterwork. Supports ALL vanilla and Frontier Epic Knights (knights:* / frontier_ek:*) weapons, axes, armor & tools.",
          fr: "Exige Trempe & Forge (<code>smith_quench_temper</code>) pour les rangs [1/5] a [4/5], et Sceau de Maitre (<code>smith_master_seal</code>) pour atteindre [5/5] Chef-d'Oeuvre. Compatible avec TOUT l'equipement vanilla et Frontier Epic Knights (knights:* / frontier_ek:*).",
        },
        pipeline: [
          {
            step: "1",
            title: { en: "Stage 1: Heat in Furnace", fr: "Etape 1 : Chauffe au Fourneau" },
            icons: ["../assets/vanilla/iron_sword.png", "../assets/vanilla/blast_furnace.png", "../assets/vanilla/coal.png"],
            badge: { en: "Weight: 35% • 1 Fuel", fr: "Poids : 35% • 1 Combustible" },
            desc: {
              en: "<strong>Sneak + Click</strong> a Furnace or Blast Furnace holding your weapon/armor/tool (must have fuel in inventory). Complete the <strong>3D Heat Bar (Mode 1)</strong> by pumping bellows and locking with Sneak+Click. Writes <code>s1:&lt;heat&gt;</code> on the item.",
              fr: "<strong>Sneak + Clic</strong> sur un Fourneau ou Haut Fourneau avec votre equipement (combustible requis dans l'inventaire). Validez la <strong>Barre 3D Chauffe (Mode 1)</strong> en soufflant puis en validant au Sneak+Clic. Enregistre <code>s1:&lt;heat&gt;</code>.",
            },
          },
          {
            step: "2",
            title: { en: "Stage 2: Anvil Hammering", fr: "Etape 2 : Martelage sur Enclume" },
            icons: ["assets/items/forge_hammer.png", "../assets/vanilla/anvil.png"],
            badge: { en: "Weight: 65% • 4 Strikes", fr: "Poids : 65% • 4 Frappes" },
            desc: {
              en: "<strong>Sneak + Click</strong> an Anvil with the heated item (and <code>Forge Hammer</code> in your inventory/hotbar). Auto-selects your Forge Hammer and starts a <strong>4-hit Mode 0 Strike Bar</strong>. Green = <code>+1.0</code>, Yellow = <code>+0.72</code>, Miss = <code>-0.45</code>. Records <code>s2:&lt;heat&gt;:&lt;strike&gt;</code>.",
              fr: "<strong>Sneak + Clic</strong> sur une Enclume avec l'objet chauffe (et le <code>Marteau de Forge</code> dans votre inventaire). Lance <strong>4 frappes sur la Barre Mode 0</strong> : Vert = <code>+1.0</code>, Jaune = <code>+0.72</code>, Rate = <code>-0.45</code>. Enregistre <code>s2:&lt;heat&gt;:&lt;strike&gt;</code>.",
            },
          },
          {
            step: "3",
            title: { en: "Stage 3: Cauldron Quench", fr: "Etape 3 : Trempe au Chaudron" },
            icons: ["../assets/vanilla/cauldron.png", "../assets/vanilla/netherite_sword.png"],
            badge: { en: "Final Roll • -1 Water Level", fr: "Tirage Final • -1 Niveau d'Eau" },
            desc: {
              en: "<strong>Sneak + Click</strong> a Water Cauldron (<code>fill_level &gt; 0</code>). Consumes 1 water level and computes <code>Total = round(0.35 * Heat + 0.65 * Strike)</code>. Applies final rating <code>[1/5]–[5/5]</code>, permanent stats & forged tooltip! <code>Artisan Salvage</code> gives <strong>25% chance of +1 rating</strong> (up to cap).",
              fr: "<strong>Sneak + Clic</strong> sur un Chaudron rempli d'eau (<code>fill_level &gt; 0</code>). Consomme 1 niveau d'eau et calcule <code>Total = round(0.35 * Chauffe + 0.65 * Frappe)</code>. Applique le rang <code>[1/5]–[5/5]</code> et les stats permanentes ! <code>Artisan Salvage</code> offre <strong>25% de chance de +1 rang</strong>.",
            },
          },
        ],
        table: {
          headers: {
            en: ["Quality Rating", "Score Threshold", "Rolled Stats", "Unlock / Cap Notes"],
            fr: ["Rang de Qualite", "Seuil de Score", "Stats Tirees", "Conditions / Plafond"],
          },
          rows: [
            ["<strong style='color:#aaaaaa'>[1/5] Crude / Brut</strong>", "<code>0 – 44</code>", "1 primary stat", { en: "Minimum score guarantee (failed swings still finish forge)", fr: "Plancher garanti (meme si vous ratez les frappes)" }],
            ["<strong style='color:#ffffff'>[2/5] Common / Commun</strong>", "<code>45 – 63</code>", "1 primary stat", { en: "Unlocked with Stage 1 Forging (<code>smith_quench_temper</code>)", fr: "Debloque des Trempe & Forge (<code>smith_quench_temper</code>)" }],
            ["<strong style='color:#7be356'>[3/5] Refined / Raffine</strong>", "<code>64 – 79</code>", "2 stats (Primary + 1)", { en: "Unlockable secondary combat/utility buffs become eligible", fr: "Debloque les bonus secondaires (Force, Agilite, Vitalite...)" }],
            ["<strong style='color:#57c5d8'>[4/5] Superior / Superieur</strong>", "<code>80 – 93</code>", "2 stats (Primary + 1)", { en: "Maximum rating without <code>smith_master_seal</code>", fr: "Rang maximum tant que <code>smith_master_seal</code> n'est pas debloque" }],
            ["<strong style='color:#ffd978'>[5/5] Masterwork / Chef-d'Oeuvre</strong>", "<code>94 – 100</code>", "<strong>3 stats</strong> (Primary + 2)", { en: "Requires <code>smith_master_seal</code>. Unlocks maximum values & Lifesteal +2 / Fire Res", fr: "Exige <code>smith_master_seal</code>. Valeurs max + Vol de Vie +2 / Res. Feu" }],
          ],
        },
        widget: "forge-simulator",
      },
      {
        num: "03",
        title: { en: "Complete Forged Stat Pool By Equipment Category", fr: "Table Complete des Stats de Forge par Categorie" },
        lead: {
          en: "Every forged item always guarantees its category's Primary Stat, then randomly rolls additional eligible stats (if Rating >= minRating).",
          fr: "Chaque objet forge garantit toujours sa Statistique Principale, puis tire aleatoirement ses bonus supplementaires parmi les stats eligibles.",
        },
        table: {
          headers: {
            en: ["Category", "Stat (Unlock Tier)", "[1/5]", "[2/5]", "[3/5]", "[4/5]", "[5/5] Master"],
            fr: ["Categorie", "Statistique (Palier min)", "[1/5]", "[2/5]", "[3/5]", "[4/5]", "[5/5] Maitre"],
          },
          rows: [
            [{ en: "<strong>Weapon</strong> (Sword/Mace/Spear/Halberd)", fr: "<strong>Arme</strong> (Epee/Masse/Lance)" }, { en: "<code>Might</code> (Primary, [1/5])", fr: "<code>Puissance</code> (Primaire, [1/5])" }, "+6% Dmg", "+10%", "+14%", "+18%", "<strong>+24% Dmg</strong>"],
            [{ en: "Weapon", fr: "Arme" }, { en: "<code>Durability Save</code> ([1/5])", fr: "<code>Economie Durabilite</code> ([1/5])" }, "10% save", "18%", "25%", "32%", "<strong>42% save</strong>"],
            [{ en: "Weapon", fr: "Arme" }, { en: "<code>Quick Blade</code> ([2/5])", fr: "<code>Lame Agile</code> ([2/5])" }, "—", "Speed I", "Speed I", "Speed I", "Speed I"],
            [{ en: "Weapon", fr: "Arme" }, { en: "<code>Battle Fury</code> ([3/5])", fr: "<code>Fureur au Combat</code> ([3/5])" }, "—", "—", "Strength I", "Strength I", "<strong>Strength II</strong>"],
            [{ en: "Weapon", fr: "Arme" }, { en: "<code>Vampiric Lifesteal</code> ([4/5])", fr: "<code>Vol de Vie</code> ([4/5])" }, "—", "—", "—", "+1 HP/kill", "<strong>+2 HP/kill</strong>"],
            [{ en: "<strong>Axe / Poleaxe / Battleaxe</strong>", fr: "<strong>Hache / Bardiche / Poleaxe</strong>" }, { en: "<code>Might</code> (Primary [1/5]) / <code>Haste</code> ([1/5])", fr: "<code>Puissance</code> ([1/5]) / <code>Hate</code> ([1/5])" }, "+6% / Haste I", "+10% / Haste I", "+14% / Haste I", "+18% / <strong>Haste II</strong>", "<strong>+24% / Haste II</strong>"],
            [{ en: "<strong>Heavy Armor</strong> (Helmet / Chest)", fr: "<strong>Armure Lourde</strong> (Casque / Plastron)" }, { en: "<code>Armor Defense</code> (Primary, [1/5])", fr: "<code>Blindage</code> (Primaire, [1/5])" }, "-3% Dmg", "-5%", "-7%", "-9%", "<strong>-12% Dmg</strong>"],
            [{ en: "Heavy Armor", fr: "Armure Lourde" }, { en: "<code>Resilience</code> ([1/5]) / <code>Vitality</code> ([3/5])", fr: "<code>Resilience</code> ([1/5]) / <code>Vitalite</code> ([3/5])" }, "15% save", "20% save", "25% / HB I", "30% / HB I", "<strong>40% / HB II</strong>"],
            [{ en: "Heavy Armor", fr: "Armure Lourde" }, { en: "<code>Resistance</code> ([4/5]) / <code>Fireproof</code> ([2/5])", fr: "<code>Resistance</code> ([4/5]) / <code>Ignifuge</code> ([2/5])" }, "—", "-15% Fire", "-20% Fire", "Res I / -25%", "<strong>Res I / Fire Res</strong>"],
            [{ en: "<strong>Agile Armor</strong> (Leggings / Boots)", fr: "<strong>Armure Agile</strong> (Jambieres / Bottes)" }, { en: "<code>Agility</code> (Primary, [2/5])", fr: "<code>Agilite</code> (Primaire, [2/5])" }, "—", "Speed I", "Speed I", "Speed I", "<strong>Speed II</strong>"],
            [{ en: "Agile Armor", fr: "Armure Agile" }, { en: "<code>Feather Fall</code> ([1/5]) / <code>Leap</code> ([3/5])", fr: "<code>Chute Amortie</code> ([1/5]) / <code>Bond</code> ([3/5])" }, "-15% Fall", "-25%", "-35% / Jump I", "-45% / Jump I", "<strong>-60% / Jump II</strong>"],
            [{ en: "<strong>Tools</strong> (Pick / Shovel / Hoe / Shears)", fr: "<strong>Outils</strong> (Pioche / Pelle / Houe)" }, { en: "<code>Efficiency</code> ([1/5]) / <code>Durability</code> ([1/5])", fr: "<code>Efficacite</code> ([1/5]) / <code>Durabilite</code> ([1/5])" }, "Haste I / 10%", "Haste I / 18%", "Haste I / 25%", "Haste II / 32%", "<strong>Haste II / 42%</strong>"],
            [{ en: "Tools", fr: "Outils" }, { en: "<code>Tool Agility</code> ([3/5]) / <code>Night Eye</code> ([4/5])", fr: "<code>Celerite</code> ([3/5]) / <code>Vision Noct.</code> ([4/5])" }, "—", "—", "Speed I", "Spd I / Night Vis", "Spd I / Night Vis"],
          ],
        },
      },
      {
        num: "04",
        title: { en: "2-Stage Leather Tanning (Rotten Flesh -> Leather)", fr: "Tannage des Peaux en 2 Etapes (Chair Putrefiee -> Cuir)" },
        lead: {
          en: "Unlocked by Hide Tanning (<code>smith_hide_tanning</code>) and upgraded by Master Tanner (<code>smith_master_tanner</code>). Converts worthless Rotten Flesh into full stacks of Leather.",
          fr: "Debloque par Tannage Artisanal (<code>smith_hide_tanning</code>) et optimise par Maitre Tanneur (<code>smith_master_tanner</code>). Transforme la Chair Putrefiee en Cuir.",
        },
        pipeline: [
          {
            step: "1",
            title: { en: "Stage 1: 5s Cauldron Soak", fr: "Etape 1 : Trempage 5s en Chaudron" },
            icons: ["../assets/vanilla/rotten_flesh.png", "../assets/vanilla/cauldron.png", "assets/items/soaked_hide.png"],
            badge: { en: "Batch: 16 (32 w/ Master Tanner)", fr: "Lot : 16 (32 avec Maitre Tanneur)" },
            desc: {
              en: "<strong>Sneak + Click</strong> a filled Water Cauldron holding <code>minecraft:rotten_flesh</code>. Triggers the <strong>5.0s Blue Bar (Mode 2)</strong>, consumes 1 cauldron water level, and produces non-edible <code>jobskills:soaked_hide</code>.",
              fr: "<strong>Sneak + Clic</strong> sur un Chaudron rempli avec <code>minecraft:rotten_flesh</code>. Lance la <strong>Jauge Bleue 5,0s (Mode 2)</strong>, consomme 1 niveau d'eau et produit des peaux non comestibles <code>jobskills:soaked_hide</code>.",
            },
          },
          {
            step: "2",
            title: { en: "Stage 2: Heat Drying -> Leather", fr: "Etape 2 : Sechage & Tannage -> Cuir" },
            icons: ["assets/items/soaked_hide.png", "../assets/vanilla/smoker.png", "../assets/vanilla/leather.png"],
            badge: { en: "1:1 Ratio (Score >=80 or Master)", fr: "Ratio 1:1 (Score >=80 ou Maitre)" },
            desc: {
              en: "<strong>Sneak + Click</strong> Furnace, Blast Furnace or Smoker holding <code>jobskills:soaked_hide</code>. Complete the <strong>3D Heat Bar (Mode 1)</strong> (1 fuel, <strong>50% free chance</strong> with Master Tanner). Yields <strong>1:1 Leather</strong> at score >=80 or with Master Tanner (plus <strong>25% bonus leather/hide</strong>!), else <code>floor(batch/2)</code>.",
              fr: "<strong>Sneak + Clic</strong> sur Fourneau, Haut Fourneau ou Fumoir avec <code>jobskills:soaked_hide</code>. Validez la <strong>Barre 3D Chauffe (Mode 1)</strong> (1 combustible, <strong>50% gratuit</strong> avec Maitre Tanneur). Donne du <strong>Cuir 1:1</strong> si score >=80 ou Maitre Tanneur (+<strong>25% cuir bonus</strong> !), sinon <code>lot / 2</code>.",
            },
          },
        ],
      },
      {
        num: "05",
        title: { en: "3-Zone Blast Furnace Steel & Diamond-Free Steel Plates", fr: "Fonderie d'Acier 3 Zones & Plaques d'Acier sans Diamant" },
        lead: {
          en: "Exclusive Frontier Epic Knights integration unlocked by Pure Alloy I & II (<code>smith_pure_alloy_1</code>, <code>smith_pure_alloy_2</code>).",
          fr: "Integration exclusive Frontier Epic Knights debloquee par Alliage Pur I & II (<code>smith_pure_alloy_1</code>, <code>smith_pure_alloy_2</code>).",
        },
        customHtml: {
          en: `
            <div class="zone-bar-box">
              <strong style="color:var(--accent-bright)">BLAST FURNACE STEEL SMELTING — 3-ZONE OUTCOME GAUGE (2 Iron Ingot + 2 Fuel -> 1 Steel Ingot, Batch 16 / 32)</strong>
              <div class="zone-bar-track" title="Cool (Lost) | Yellow (~55%) | Green (100% + Bonus) | Yellow | Overheat Red (Total Loss)">
                <div class="zb-cool"></div>
                <div class="zb-yellow"></div>
                <div class="zb-green"></div>
                <div class="zb-yellow"></div>
                <div class="zb-red"></div>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:12px;margin-top:6px;">
                <span><strong style="color:#7be356">GREEN (Perfect):</strong> 100% conversion + <strong>10% / 20% bonus steel</strong> per unit + full XP (2 XP/steel, x1.25 w/ Heat Economy).</span>
                <span><strong style="color:#ffd978">YELLOW (Good):</strong> ~55% yield (50% coinflip if batch=1), half XP, remainder lost.</span>
                <span><strong style="color:#ff7a86">RED / OVERHEAT:</strong> Total failure! All Iron Ingots and Fuel in the batch are consumed.</span>
              </div>
            </div>
          `,
          fr: `
            <div class="zone-bar-box">
              <strong style="color:var(--accent-bright)">FONDERIE D'ACIER AU HAUT FOURNEAU — JAUGE 3 ZONES (2 Lingots de Fer + 2 Combustibles -> 1 Lingot d'Acier, Lot 16 / 32)</strong>
              <div class="zone-bar-track" title="Froid (Echec) | Jaune (~55%) | Vert (100% + Bonus) | Jaune | Surchauffe Rouge (Perte Totale)">
                <div class="zb-cool"></div>
                <div class="zb-yellow"></div>
                <div class="zb-green"></div>
                <div class="zb-yellow"></div>
                <div class="zb-red"></div>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:12px;margin-top:6px;">
                <span><strong style="color:#7be356">VERT (Parfait) :</strong> 100% de conversion + <strong>10% / 20% d'acier bonus</strong> + XP complet (2 XP/acier, x1.25 avec Economie Thermique).</span>
                <span><strong style="color:#ffd978">JAUNE (Correct) :</strong> ~55% de rendement (50% pile ou face si lot=1), moitie d'XP, pertes partielles.</span>
                <span><strong style="color:#ff7a86">ROUGE / SURCHAUFFE :</strong> Echec critique ! Tout le Fer et le Combustible du lot sont perdus.</span>
              </div>
            </div>
          `,
        },
        pipeline: [
          {
            step: "1",
            title: { en: "Steel Smelt (Blast Furnace)", fr: "Fonte Acier (Haut Fourneau)" },
            icons: ["../assets/vanilla/iron_ingot.png", "../assets/vanilla/blast_furnace.png", "assets/items/knights_steel_ingot.png"],
            badge: { en: "2 Iron -> 1 Steel (Master Tanner halves fuel)", fr: "2 Fer -> 1 Acier (Maitre Tanneur : carburant /2)" },
            desc: {
              en: "<strong>Sneak + Click</strong> Blast Furnace holding Iron Ingots. Requires Pure Alloy I. Fuel cost halved when Master Tanner is unlocked.",
              fr: "<strong>Sneak + Clic</strong> sur un Haut Fourneau avec des Lingots de Fer. Exige Alliage Pur I. Cout en combustible divise par 2 avec Maitre Tanneur.",
            },
          },
          {
            step: "2",
            title: { en: "Diamond-Free Steel Plates (Anvil)", fr: "Plaques d'Acier sans Diamant (Enclume)" },
            icons: ["assets/items/knights_steel_ingot.png", "../assets/vanilla/anvil.png", "assets/items/knights_steel_plate.png"],
            badge: { en: "3 Steel -> 1+ Plate • Batch 8 / 16", fr: "3 Acier -> 1+ Plaque • Lot 8 / 16" },
            desc: {
              en: "<strong>Sneak + Click</strong> Anvil holding <code>knights:steel_ingot</code> (Forge Hammer auto-selected, 3 hits). Normal Crafting Table diamond recipe stays unchanged for non-Blacksmiths, while Blacksmiths gain <strong>+10%/20% (+15% if perfect, guaranteed +1 at score >= 95)</strong> bonus plates!",
              fr: "<strong>Sneak + Clic</strong> sur Enclume avec <code>knights:steel_ingot</code> (3 frappes au Marteau). Economise tous vos Diamants et donne <strong>+10%/20% (+15% si parfait, +1 garanti a score >= 95)</strong> de plaques bonus !",
            },
          },
        ],
      },
      {
        num: "06",
        title: { en: "Fast Smelting, Anvil Repair, Grindstone Salvage & Survival", fr: "Fonte Rapide, Reparation Enclume, Recyclage Meule & Survie" },
        table: {
          headers: {
            en: ["Skill / System", "Workstation & Input", "Exact Mechanics & Yield"],
            fr: ["Competence / Systeme", "Etabli & Entree", "Mecanique Exacte & Rendement"],
          },
          rows: [
            ["<strong>Fast Smelt I / II</strong> (<code>smith_fast_smelt_1/2</code>)", { en: "Sneak+Click Furnace / Blast Furnace with Ores or Raw Metals", fr: "Sneak+Clic Fourneau / Haut Fourneau avec Minerais ou Metaux Bruts" }, { en: "Instant smelt up to <strong>16</strong> (Tier I) or <strong>64</strong> (Tier II) items per click. Adds <strong>+10% / +20%</strong> extra ingots when Pure Alloy I/II is unlocked.", fr: "Fonte instantanee jusqu'a <strong>16</strong> (Tier I) ou <strong>64</strong> (Tier II) items. Ajoute <strong>+10% / +20%</strong> lingots bonus avec Alliage Pur I/II." }],
            ["<strong>Anvil Repair I / II</strong> (<code>smith_anvil_repair_1/2</code>)", { en: "Sneak+Click Anvil holding damaged armor/weapon/tool (+matching ingot)", fr: "Sneak+Clic Enclume avec equipement abime (+lingot/materiau assorti)" }, { en: "3-hit Forge Hammer minigame. Restores <strong>+25%</strong> (I) or <strong>+50%</strong> (II) max durability (+10% on Perfect). Tier II has <strong>25% chance to not consume the material</strong>.", fr: "Mini-jeu 3 frappes au Marteau. Restaure <strong>+25%</strong> (I) ou <strong>+50%</strong> (II) de durabilite (+10% si Parfait). Le Tier II offre <strong>25% de chance d'economiser le materiau</strong>." }],
            ["<strong>Grindstone Salvage I / II</strong> (<code>smith_salvage</code> / <code>smith_artisan_salvage</code>)", { en: "Sneak+Click Grindstone holding unwanted gear (supports FrontierEK)", fr: "Sneak+Clic Meule avec equipement (compatible FrontierEK)" }, { en: "2-hit Forge Hammer minigame. Recovers <strong>65%</strong> (Tier I) or <strong>85%</strong> (Tier II) base ingots/materials scaled by remaining durability, plus XP bonus per enchantment level.", fr: "Mini-jeu 2 frappes au Marteau. Recupere <strong>65%</strong> (Tier I) ou <strong>85%</strong> (Tier II) des lingots proportionnellement a la durabilite, plus de l'XP selon les enchantements." }],
            ["<strong>Steel Temper I / II</strong> & <strong>Fire Skin / Ember Heart</strong>", { en: "Passive equipment & Nether/Lava survival", fr: "Passifs d'equipement & Survie Lave/Feu" }, { en: "<code>20% / 40%</code> chance to negate durability loss on anvil/sword/tool use. <code>Fire Skin</code> reduces fire/lava damage by 50%; <code>Ember Heart</code> grants full Fire Resistance near Fire/Lava or in the Nether.", fr: "<code>20% / 40%</code> d'economie de durabilite sur les outils/armes. <code>Peau de Feu</code> reduit les degats de feu/lave de 50% ; <code>Coeur de Braise</code> donne Resistance au Feu permanente dans le Nether ou pres de la lave." }],
          ],
        },
      },
    ],
  },
];

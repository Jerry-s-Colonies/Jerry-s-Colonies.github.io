/* ============================================================================
 * JOBS & SKILL TREES WIKI — Dedicated Role Presentations (7 Remaining Roles)
 * Zero-emoji, strictly code-verified from JobsSkillsBP v1.0.0
 * ========================================================================== */

(function () {
  window.JS_GUIDE_MODULES = window.JS_GUIDE_MODULES || [];

  window.JS_GUIDE_MODULES.push(
    /* ======================================================================
     * ROLE 2: MINER (23 SKILLS)
     * ==================================================================== */
    {
      id: "role-miner",
      groupId: "professions",
      jobId: "miner",
      kicker: { en: "PROFESSION 02 • EXTRACTION & DEEP CAVING • 23 SKILLS", fr: "METIER 02 • EXTRACTION & GRANDES PROFONDEURS • 23 COMPETENCES" },
      title: { en: "Miner — Vein Mining, Excavation & Deep Resistance", fr: "Mineur — Vein Miner, Excavation & Survie Souterraine" },
      subtitle: {
        en: "Clear entire ore and decorative stone veins in one Sneak+Break, mine 1x2 tunnels, pull gravel treasure, and thrive below Y=0.",
        fr: "Extrayez des filons complets de minerais ou de roches decoratives d'un seul coup, creusez en Tunnelier 1x2 et survivez sous Y=0.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Ore Vein Mechanics", fr: "Presentation du Role & Mecanique Vein Miner" },
          roleHero: "miner",
          pipeline: [
            {
              step: "1",
              title: { en: "Vein Miner I–IV (4–16 Ores)", fr: "Vein Miner I–IV (4–16 Minerais)" },
              icons: ["../assets/vanilla/diamond_pickaxe.png", "../assets/vanilla/iron_ore.png", "../assets/vanilla/raw_iron.png"],
              badge: { en: "Sneak + Break Ore (26-neighbor BFS)", fr: "Sneak + Casser Minerai (BFS 26 voisins)" },
              desc: {
                en: "Hold a Pickaxe, sneak, and break any ore (normal + deepslate + Nether Gold/Quartz + Ancient Debris) to chain-break up to <strong>4 / 8 / 12 / 16</strong> connected blocks. Protects your pickaxe at <strong>1 durability remaining</strong> so it never breaks mid-vein!",
                fr: "Tenez une Pioche en sneak et cassez un minerai (normal, ardoise des abimes, Nether, Debris Antiques) pour briser en chaine jusqu'a <strong>4 / 8 / 12 / 16</strong> blocs relies. Arrete a <strong>1 de durabilite</strong> pour ne jamais casser l'outil !",
              },
            },
            {
              step: "2",
              title: { en: "Vein Stones (16 Blocks)", fr: "Veine de Roches (16 Blocs)" },
              icons: ["../assets/vanilla/stone.png", "../assets/vanilla/cobblestone.png"],
              badge: { en: "miner_vein_stone", fr: "miner_vein_stone" },
              desc: {
                en: "Extends Sneak+Break vein mining to 16 decorative stones: Stone, Cobblestone, Granite, Diorite, Andesite, Deepslate, Cobbled Deepslate, Basalt, Blackstone, Tuff, Sandstone, Netherrack, Terracotta, End Stone & more.",
                fr: "Etend le Vein Miner Sneak+Casser aux roches decoratives (max 16) : Roche, Pierre, Granite, Diorite, Andesite, Deepslate, Basalte, Pierre Noire, Tuf, Gres, Netherrack, Terre Cuite, Pierre de l'End...",
              },
            },
            {
              step: "3",
              title: { en: "Tunnelier 1x2 & Excavator", fr: "Tunnelier 1x2 & Excavateur" },
              icons: ["../assets/vanilla/iron_pickaxe.png", "../assets/vanilla/iron_shovel.png"],
              badge: { en: "1 XP Lvl = 10 min Tunnelier", fr: "1 Niv. XP = 10 min Tunnelier" },
              desc: {
                en: "Activate <strong>Tunnelier 1x2</strong> from the Skill Menu (<code>1 XP level</code> for <strong>10 minutes</strong>) so every mined block also breaks <code>y-1</code> beneath it. <strong>Excavator</strong> breaks 6 adjacent Dirt/Gravel/Sand/Clay when sneaking with a Shovel.",
                fr: "Activez <strong>Tunnelier 1x2</strong> depuis le Menu (<code>1 niveau XP</code> pour <strong>10 minutes</strong>) pour casser automatiquement le bloc du dessous (<code>y-1</code>). <strong>Excavateur</strong> casse 6 voisins Terre/Gravier/Sable/Argile en sneak avec une Pelle.",
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "Extraction Bonuses & Underground Passives", fr: "Bonus d'Extraction & Passifs Souterrains" },
          table: {
            headers: {
              en: ["Skill", "Trigger / Condition", "Exact Effect"],
              fr: ["Competence", "Declencheur / Condition", "Effet Exact"],
            },
            rows: [
              ["<strong>Double Vein I / II / III</strong>", { en: "Mining any ore (respects Silk Touch)", fr: "Minage de minerai (respecte Toucher de Soie)" }, { en: "<code>5% / 10% / 15%</code> chance to drop an extra raw ore / crystal.", fr: "<code>5% / 10% / 15%</code> de chance de loot un minerai brut / gemme en plus." }],
              ["<strong>Scavenger I / II / III</strong>", { en: "Breaking Gravel or Sand", fr: "Casser du Gravier ou du Sable" }, { en: "<code>10% / 20% / 30%</code> chance to drop Coal, Iron Nugget, Gold Nugget, Bone, Lapis, Amethyst or Gunpowder.", fr: "<code>10% / 20% / 30%</code> de loot bonus (Charbon, Pepites, Os, Lapis, Amethyste, Poudre a canon)." }],
              ["<strong>Iron Grip I / II</strong> & <strong>Economy</strong>", { en: "Holding a Pickaxe", fr: "Pioche en main" }, { en: "Haste I / Haste II continuously while holding pickaxe + <code>25%</code> durability save chance on Vein/Tunnelier.", fr: "Hate I / Hate II avec pioche en main + <code>25%</code> d'economie de durabilite." }],
              ["<strong>Deepslate & Obsidian Breaker</strong>", { en: "Aiming at Deepslate/Obsidian w/ Pickaxe", fr: "En visant Deepslate/Obsidienne a la Pioche" }, { en: "Dynamic raycast boost: extra Haste on Deepslate & Haste III on Obsidian/Crying Obsidian.", fr: "Boost raycast dynamique : Hate renforcee sur Deepslate et Hate III sur Obsidienne." }],
              ["<strong>Deep Caving Passives</strong>", { en: "Underground depth checks (every 10t / hurt)", fr: "Sous terre (check toutes les 10t / degats)" }, { en: "<strong>Mole Eye</strong> (Night Vision Y&lt;50), <strong>Depth Cushion</strong> (-50% fall dmg Y&lt;0), <strong>Cold Blood</strong> (clears Darkness), <strong>Silent Step</strong> (Speed II while sneaking Y&lt;0).", fr: "<strong>Oeil de Taupe</strong> (Vision Nocturne Y&lt;50), <strong>Amorti des Profondeurs</strong> (-50% chute Y&lt;0), <strong>Sang Froid</strong> (supprime Obscurite), <strong>Pas Silencieux</strong> (Vitesse II en sneak Y&lt;0)." }],
            ],
          },
        },
      ],
    },

    /* ======================================================================
     * ROLE 3: LUMBERJACK (14 SKILLS)
     * ==================================================================== */
    {
      id: "role-lumberjack",
      groupId: "professions",
      jobId: "lumberjack",
      kicker: { en: "PROFESSION 03 • FORESTRY & AXE MASTERY • 14 SKILLS", fr: "METIER 03 • SYLVICULTURE & HACHE • 14 COMPETENCES" },
      title: { en: "Lumberjack — Tree Capitator, Fast Stripping & Heavy Axes", fr: "Bucheron — Tree Capitator, Ecorcage 3x3x3 & Haches Lourdes" },
      subtitle: {
        en: "Fell entire 128-log trees including canopy leaves, auto-replant saplings on natural soil, strip 3x3x3 logs instantly, and cleave enemies with Shield Breaker.",
        fr: "Abattez des arbres entiers jusqu'a 128 buches (+ 240 feuilles), replantez automatiquement, ecorcez en 3x3x3 et brisez les defenses a la hache.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Tree Harvesting Workflows", fr: "Presentation du Role & Recolte Forestiere" },
          roleHero: "lumberjack",
          pipeline: [
            {
              step: "1",
              title: { en: "Tree Capitator I–III", fr: "Tree Capitator I–III" },
              icons: ["../assets/vanilla/diamond_axe.png", "../assets/vanilla/oak_log.png"],
              badge: { en: "16 / 48 / 128 Logs + 240 Leaves", fr: "16 / 48 / 128 Buches + 240 Feuilles" },
              desc: {
                en: "<strong>Sneak + Break</strong> the base log with an Axe to fell up to <strong>16 / 48 / 128</strong> connected logs (vertical/diagonal). At <strong>Tier III</strong>, up to <strong>240 connected leaves</strong> also break for instant sapling & apple drops!",
                fr: "<strong>Sneak + Casser</strong> la base du tronc avec une Hache pour abattre <strong>16 / 48 / 128</strong> buches. Au <strong>Palier III</strong>, jusqu'a <strong>240 feuilles reliees</strong> tombent aussi pour recolter pousses et pommes !",
              },
            },
            {
              step: "2",
              title: { en: "Auto-Replant", fr: "Reboisement Auto" },
              icons: ["../assets/vanilla/oak_sapling.png"],
              badge: { en: "lumber_auto_replant", fr: "lumber_auto_replant" },
              desc: {
                en: "When felling on Dirt, Grass, Moss, Mud or Podzol, automatically places the matching species Sapling / Fungus back at the stump (supports <code>forgedToolSaveChance</code> too!).",
                fr: "Lors de l'abattage sur Terre, Herbe, Mousse, Boue ou Podzol, replante automatiquement une pousse de l'essence coupee a la base.",
              },
            },
            {
              step: "3",
              title: { en: "Fast Strip 3x3x3", fr: "Ecorcage Rapide 3x3x3" },
              icons: ["../assets/vanilla/oak_log.png", "../assets/vanilla/iron_axe.png"],
              badge: { en: "Sneak + Use Axe on Log", fr: "Sneak + Clic Hache sur Buche" },
              desc: {
                en: "<strong>Sneak + Click</strong> any raw log holding an Axe to strip all matching logs inside a <code>3x3x3</code> cube at once — ideal for timber-frame Nation builders!",
                fr: "<strong>Sneak + Clic</strong> avec une Hache sur une buche pour ecorcer simultanement toutes les buches dans un cube <code>3x3x3</code> — parfait pour la construction !",
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "All 14 Lumberjack Skills & Combat Cleave", fr: "Toutes les Competences Bucheron & Combat a la Hache" },
          table: {
            headers: {
              en: ["Skill", "Condition", "Exact Effect"],
              fr: ["Competence", "Condition", "Effet Exact"],
            },
            rows: [
              ["<strong>Flash Cut I / II</strong> & <strong>Light Step</strong>", { en: "Holding any Axe", fr: "Hache en main" }, { en: "Grants permanent <strong>Haste I / II</strong> and <strong>Speed I</strong> while holding an Axe.", fr: "Octroie <strong>Hate I / II</strong> et <strong>Vitesse I</strong> tant que vous tenez une Hache." }],
              ["<strong>Heavy Strike I / II</strong>", { en: "Melee hit with an Axe", fr: "Attaque melee a la Hache" }, { en: "Adds <code>+15%</code> (I) or <code>+30%</code> (II) melee bonus damage with Axes.", fr: "Ajoute <code>+15%</code> (I) ou <code>+30%</code> (II) de degats a la Hache." }],
              ["<strong>Shield Breaker</strong> (<code>lumber_shield_breaker</code>)", { en: "Axe hit (10s internal CD)", fr: "Coup a la Hache (CD 10s)" }, { en: "Applies <strong>Slowness II (1.0s)</strong> to disrupt fleeing targets or shield bearers.", fr: "Applique <strong>Lenteur II (1,0s)</strong> pour casser le rythme d'un adversaire." }],
              ["<strong>Apple Harvester</strong> & <strong>Golden Apple Finder</strong>", { en: "Breaking Oak / Dark Oak Leaves", fr: "Casser Feuilles Chene / Chene Noir" }, { en: "<code>+1%</code> Apple drop rate (<code>1.5%</code> on Dark Oak leaves) + <code>1%</code> Golden Apple chance on Dark Oak.", fr: "<code>+1%</code> de chance de Pomme (<code>1,5%</code> sur Chene Noir) + <code>1%</code> de Pomme d'Or sur Chene Noir." }],
              ["<strong>Forest Magnet</strong>", { en: "Magnet toggle enabled", fr: "Option Aimant activee" }, { en: "Pulls logs, saplings, sticks, apples & golden apples within 6.5 blocks every 10 ticks.", fr: "Attire buches, pousses, batons et pommes dans un rayon de 6,5 blocs." }],
            ],
          },
        },
      ],
    },

    /* ======================================================================
     * ROLE 4: RANCHER (20 SKILLS)
     * ==================================================================== */
    {
      id: "role-rancher",
      groupId: "professions",
      jobId: "rancher",
      kicker: { en: "PROFESSION 04 • HUSBANDRY & ROYAL DAIRY • 20 SKILLS", fr: "METIER 04 • ELEVAGE & LAITERIE ROYALE • 20 COMPETENCES" },
      title: { en: "Rancher — Herd Feeding, Beehives, Grooming & Rich Dairy", fr: "Eleveur — Foin de Troupeau, Ruches, Pansage & Produits Royaux" },
      subtitle: {
        en: "Feed & heal entire herds from Hay Blocks, harvest peaceful Beehives, bottle shareable Royal Jelly Honey & Artisan Rich Milk, groom mounts, and score twin births.",
        fr: "Nourrissez vos troupeaux via Bloc de Foin, recoltez les ruches sans agresser, produisez Lait Riche & Miel Royal partageables et boostez vos montures.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Interactive Ranching Workflows", fr: "Presentation du Role & Systemes d'Elevage" },
          roleHero: "rancher",
          pipeline: [
            {
              step: "1",
              title: { en: "Hay Block Herd Feed I / II", fr: "Nourrissage Bloc de Foin I / II" },
              icons: ["../assets/vanilla/hay_block.png", "../assets/vanilla/wheat.png"],
              badge: { en: "Sneak+Click Hay Block • 6 / 12 Animals", fr: "Sneak+Clic Foin • 6 / 12 Animaux" },
              desc: {
                en: "<strong>Sneak + Click</strong> a placed Hay Block holding breeding food (Wheat, Carrot, Potato, Beetroot, Seeds, Sweet Berries): heals and enters love-mode for up to <strong>6 animals (7-block radius)</strong> or <strong>12 animals (12-block radius)</strong>!",
                fr: "<strong>Sneak + Clic</strong> sur un Bloc de Foin avec de la nourriture animale (Ble, Carotte, Patate, Betterave, Graines, Baies) : attire, soigne et declenche la reproduction de <strong>6 animaux (7 blocs)</strong> ou <strong>12 animaux (12 blocs)</strong> !",
              },
            },
            {
              step: "2",
              title: { en: "Artisan Rich Milk & Royal Honey", fr: "Lait Riche & Miel Royal Partageables" },
              icons: ["../assets/vanilla/milk_bucket.png", "../assets/vanilla/beehive.png", "../assets/vanilla/honey_bottle.png"],
              badge: { en: "Shareable Buff Consumables", fr: "Consommables Partageables" },
              desc: {
                en: "<strong>Artisan Milk:</strong> Sneak+Click a Cow, Mooshroom or Goat with a Bucket to draw <strong>Artisan Rich Milk</strong> (gives any drinker <strong>Regeneration II 12s + Absorption I 45s</strong>).<br/><strong>Peaceful Beehive:</strong> Sneak+Click a full hive (level >= 5) with Bottles/Shears for <strong>2–3 Royal Jelly Honey</strong> (Speed II 20s + Haste I 30s) or <strong>5–6 Honeycombs</strong> without angering bees!",
                fr: "<strong>Lait Riche :</strong> Sneak+Clic Seau sur Vache/Champimeuh/Chevre -> <strong>Regeneration II 12s + Absorption I 45s</strong> pour tout buveur.<br/><strong>Ruche Pacifique :</strong> Sneak+Clic Ruche pleine (niveau >= 5) avec Fiole/Cisailles -> <strong>2–3 Miels Royaux</strong> (Vitesse II 20s + Hate I 30s) ou <strong>5–6 Rayons</strong> sans aucune piqure !",
              },
            },
            {
              step: "3",
              title: { en: "Master Grooming & Herd Blessing", fr: "Pansage de Maitre & Benediction" },
              icons: ["../assets/vanilla/brush.png", "../assets/vanilla/shears.png"],
              badge: { en: "Sneak+Click Mount/Pet w/ Brush", fr: "Sneak+Clic Monture avec Pinceau" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Horse, Donkey, Mule, Camel or Wolf holding a <code>minecraft:brush</code> for a <strong>5-minute buff</strong> (Speed II, Resistance II, Regen I, plus Jump Boost II on mounts). <strong>Rapid Growth</strong> matures babies in 1 Sneak+Click with food.",
                fr: "<strong>Sneak + Clic</strong> sur Cheval, Ane, Mule, Chameau ou Loup avec un <code>Pinceau (brush)</code> pour <strong>5 min</strong> de Vitesse II, Resistance II, Regen I (+ Saut II sur montures). <strong>Croissance Rapide</strong> transforme les bebes en adultes d'un clic.",
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "Shearing, Twins, Butchering & Aura Passives", fr: "Tonte Doree, Jumeaux, Boucherie & Passifs de Troupeau" },
          table: {
            headers: {
              en: ["Skill", "Trigger", "Exact Numbers"],
              fr: ["Competence", "Declencheur", "Valeurs Exactes"],
            },
            rows: [
              ["<strong>Golden Shears I / II</strong>", { en: "Shearing Sheep with Shears", fr: "Tonte de Mouton aux Cisailles" }, { en: "<code>+1–2</code> / <code>+2–3</code> extra Wool + <code>30% / 50%</code> durability save + <strong>35% instant wool regrowth</strong> at Tier II!", fr: "<code>+1–2</code> / <code>+2–3</code> Laine bonus + <code>30% / 50%</code> eco durabilite + <strong>35% repousse instantanée</strong> au Tier II !" }],
              ["<strong>Twin Births I / II</strong>", { en: "Passive aura around Rancher when animals breed", fr: "Aura passive lorsque des animaux se reproduisent" }, { en: "<code>35%</code> (I) or <code>70%</code> (II) chance to spawn a twin baby!", fr: "<code>35%</code> (I) ou <code>70%</code> (II) de chance de naissance gemellaire !" }],
              ["<strong>Butcher I / II</strong>, <strong>Leatherworker</strong> & <strong>Cooked Cut</strong>", { en: "Slaying farm livestock (Cow/Pig/Sheep/Chicken/Rabbit)", fr: "Abattage d'animaux d'elevage" }, { en: "Extra meat drops, guaranteed bonus Leather, and auto-cooked meat drops (Cooked Cut).", fr: "Viande bonus, Cuir garanti supplementaire et cuisson automatique des drops (Decoupe Cuite)." }],
              ["<strong>Mount Bond</strong> & <strong>Pack Alpha</strong>", { en: "Riding mount / fighting with wolves nearby", fr: "En selle / combat pres de loups apprivoises" }, { en: "Mount gains Speed & Resistance while ridden; your pets deal/resist better in pack.", fr: "Votre monture recoit Vitesse et Resistance ; bonus de meute pour vos loups." }],
              ["<strong>Herd Shield</strong> & <strong>Pastoral Step</strong>", { en: "Standing near >=2 passive animals", fr: "A proximite d'au moins 2 animaux" }, { en: "<code>-15%</code> incoming damage + periodic Regeneration I around herds, plus permanent movement speed with food.", fr: "<code>-15%</code> degats subis + Regeneration I pres des troupeaux, plus vitesse de deplacement." }],
            ],
          },
        },
      ],
    },

    /* ======================================================================
     * ROLE 5: FARMER (20 SKILLS)
     * ==================================================================== */
    {
      id: "role-farmer",
      groupId: "professions",
      jobId: "farmer",
      kicker: { en: "PROFESSION 05 • AGRONOMY & 3D GOURMET CUISINE • 20 SKILLS", fr: "METIER 05 • AGRONOMIE & CUISINE GOURMET 3D • 20 COMPETENCES" },
      title: { en: "Farmer — 5x5 Area Harvest, Rapid Compost & Smoker Cuisine", fr: "Fermier — Recolte 5x5, Compost Rapide & Cuisine 3D au Fumoir" },
      subtitle: {
        en: "Harvest & replant 3x3 or 5x5 mature fields with Green Thumb head-starts, brew Bone Meal in bulk, hydrate farmland passively, and cook 20 shareable Gourmet Dishes.",
        fr: "Recoltez et replantez en zone 3x3 / 5x5, compostez par lots jusqu'a 32, hydratez vos champs passivement et cuisinez 20 Plats Gourmets partageables au Fumoir.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Field Automation", fr: "Presentation du Role & Automatisation Agricole" },
          roleHero: "farmer",
          pipeline: [
            {
              step: "1",
              title: { en: "Area Harvest I/II & Till 3x3", fr: "Recolte Zone I/II & Labour 3x3" },
              icons: ["../assets/vanilla/diamond_hoe.png", "../assets/vanilla/wheat.png"],
              badge: { en: "3x3 (I) / 5x5 (II) + Green Thumb", fr: "3x3 (I) / 5x5 (II) + Pouce Vert" },
              desc: {
                en: "<strong>Sneak + Click</strong> mature Wheat, Carrots, Potatoes, Beetroot or Nether Wart with a Hoe to harvest & auto-replant a <code>3x3</code> or <code>5x5</code> patch! <strong>Green Thumb</strong> gives replanted crops a <strong>35% chance to start at growth stage 2–3</strong>.",
                fr: "<strong>Sneak + Clic</strong> a la Houe sur une culture mature pour recolter & replanter en <code>3x3</code> ou <code>5x5</code> ! <strong>Pouce Vert</strong> donne <strong>35%</strong> de chance aux pousses de redemarrer au stade 2–3.",
              },
            },
            {
              step: "2",
              title: { en: "Rapid Composting & Area Bloom", fr: "Compostage Rapide & Floraison 3x3" },
              icons: ["../assets/vanilla/composter.png", "../assets/vanilla/bone_meal.png"],
              badge: { en: "4–32 Items -> round((used/4)*1.3) Meal", fr: "4–32 Objets -> x1.3 Poudre d'Os" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Composter with any compostable item to convert <code>4 to 32</code> items directly into <code>round((used / 4) * 1.3)</code> Bone Meal. <strong>Area Bone Bloom</strong> applies 1 Bone Meal across an entire <code>3x3</code> crop grid!",
                fr: "<strong>Sneak + Clic</strong> sur un Composteur pour convertir <code>4 a 32</code> plantes en Poudre d'Os avec <strong>+30% de rendement</strong>. <strong>Floraison de Zone</strong> applique 1 Poudre d'Os sur toute une zone <code>3x3</code> !",
              },
            },
            {
              step: "3",
              title: { en: "3D Smoker Gourmet Cuisine", fr: "Cuisine Gourmet 3D au Fumoir" },
              icons: ["../assets/vanilla/smoker.png", "../assets/vanilla/cooked_beef.png", "../assets/vanilla/bread.png"],
              badge: { en: "Batch: 4 (8 w/ Master Chef) • 1 Fuel", fr: "Lot : 4 (8 avec Maitre Chef) • 1 Combustible" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Smoker holding any of <strong>20 eligible foods</strong> (+1 fuel in inventory). Complete the <strong>3D Heat Bar (Mode 1)</strong> to infuse <strong>[1/5]–[5/5] shareable buffs</strong> onto every dish in the batch!",
                fr: "<strong>Sneak + Clic</strong> sur un Fumoir avec l'un des <strong>20 aliments compatibles</strong> (+1 combustible). Validez la <strong>Barre 3D Chauffe (Mode 1)</strong> pour cuisiner des plats portant un buff <strong>[1/5]–[5/5] partageable</strong> !",
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "Gourmet Smoker Dishes — All 3 Buff Categories ([1/5]–[5/5])", fr: "Plats Gourmets du Fumoir — 3 Categories de Buffs ([1/5]–[5/5])" },
          lead: {
            en: "Rating [5/5] requires Master Chef (<code>farmer_master_chef</code>). Works with both unstackable stews and full stacks of Cooked Beef, Bread, Golden Carrots, Pie, etc.",
            fr: "Le rang [5/5] exige Maitre Chef (<code>farmer_master_chef</code>). Fonctionne autant sur les soupes que sur les stacks de Steak, Pain, Carotte Doree, Tarte, etc.",
          },
          table: {
            headers: {
              en: ["Category", "20 Eligible Smoker Foods", "Buffs Across [1/5] -> [5/5]"],
              fr: ["Categorie", "20 Aliments Compatibles Fumoir", "Buffs de [1/5] -> [5/5]"],
            },
            rows: [
              ["<strong>Vitality (<code>v</code>)</strong>", "<code>cooked_beef</code>, <code>cooked_porkchop</code>, <code>cooked_mutton</code>, <code>cooked_chicken</code>, <code>cooked_rabbit</code>, <code>rabbit_stew</code>", { en: "<strong>Regeneration I–II</strong> (<code>6s -> 18s</code>) + <strong>Absorption I–II</strong> (<code>20s -> 60s</code>; Absorption II at [5/5])", fr: "<strong>Regeneration I–II</strong> (<code>6s -> 18s</code>) + <strong>Absorption I–II</strong> (<code>20s -> 60s</code> ; Absorption II au [5/5])" }],
              ["<strong>Speed / Swiftness (<code>s</code>)</strong>", "<code>bread</code>, <code>baked_potato</code>, <code>pumpkin_pie</code>, <code>apple</code>, <code>golden_carrot</code>, <code>cookie</code>, <code>sweet_berries</code>, <code>glow_berries</code>, <code>melon_slice</code>", { en: "<strong>Speed I–II</strong> (<code>12s -> 36s</code>) + <strong>Instant Saturation</strong> (<code>2s -> 6s</code>) + <strong>Jump Boost I (20s)</strong> at [5/5]", fr: "<strong>Vitesse I–II</strong> (<code>12s -> 36s</code>) + <strong>Saturation</strong> (<code>2s -> 6s</code>) + <strong>Saut Ameliore I (20s)</strong> au [5/5]" }],
              ["<strong>Work / Haste (<code>w</code>)</strong>", "<code>cooked_salmon</code>, <code>cooked_cod</code>, <code>beetroot_soup</code>, <code>mushroom_stew</code>, <code>dried_kelp</code>", { en: "<strong>Haste I–II</strong> (<code>15s -> 45s</code>) + <strong>Night Vision</strong> (<code>30s</code> at [4/5], <code>60s</code> at [5/5])", fr: "<strong>Hate I–II</strong> (<code>15s -> 45s</code>) + <strong>Vision Nocturne</strong> (<code>30s</code> au [4/5], <code>60s</code> au [5/5])" }],
            ],
          },
          callouts: [
            {
              kind: "success",
              title: { en: "Agronomy Passives & Hydration Aura", fr: "Passifs d'Agronomie & Aura d'Hydratation" },
              items: {
                en: [
                  "<strong>Bountiful Harvest I–III:</strong> <code>15% / 30% / 50%</code> extra crop drops + <strong>Golden Harvest</strong> gives <code>5%</code> chance of Golden Apple / Golden Carrot / Glistering Melon.",
                  "<strong>Hoe Mastery I–II:</strong> Permanent Haste I/II holding any Hoe + <code>30% / 50%</code> hoe durability save.",
                  "<strong>Hydration Aura:</strong> Automatically keeps farmland wet in a <code>9x3x9</code> zone around you + accelerates random crop growth ticks!",
                  "<strong>Herbal Immunity & Nature Vigor:</strong> Clears Hunger & Nausea, halves Poison/Magic damage, and grants Health Boost above <code>Y >= 55</code>.",
                ],
                fr: [
                  "<strong>Recolte Abondante I–III :</strong> <code>+15% / +30% / +50%</code> de recoltes bonus + <strong>Recolte Doree</strong> donne <code>5%</code> de Pomme Doree / Carotte Doree / Pasteque Scintillante.",
                  "<strong>Maitrise Houe I–II :</strong> Hate I/II avec Houe en main + <code>30% / 50%</code> d'economie de durabilite.",
                  "<strong>Aura d'Hydratation :</strong> Garde automatiquement la terre humide dans un rayon <code>9x3x9</code> et accelere la pousse autour de vous !",
                  "<strong>Immunite Herbale & Vigueur Naturelle :</strong> Supprime Faim/Nausee, divise les degats Poison/Magie par 2 et ajoute Sante Amelioree a <code>Y >= 55</code>.",
                ],
              },
            },
          ],
        },
      ],
    },

    /* ======================================================================
     * ROLE 6: FISHER (20 SKILLS)
     * ==================================================================== */
    {
      id: "role-fisher",
      groupId: "professions",
      jobId: "fisher",
      kicker: { en: "PROFESSION 06 • MARITIME SALVAGE & BARREL CURING • 20 SKILLS", fr: "METIER 06 • PECHE, TRESORS & SALAISON 3D AU TONNEAU • 20 COMPETENCES" },
      title: { en: "Fisher — Multi-Catch, Treasure Hunting & Marine Rations", fr: "Pecheur — Multi-Prises, Tresors Marins & Salaison au Tonneau" },
      subtitle: {
        en: "Reel double and triple catches, pull 12 weighted ocean treasures up to Heart of the Sea, cure shareable Marine Rations in Barrels, and master the Trident.",
        fr: "Pechez double ou triple, remontez 12 tresors jusqu'au Coeur de la Mer, preparez des Rations Marines en Tonneau 3D et maitrisez le Trident.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Barrel Curing Pipeline", fr: "Presentation du Role & Atelier Tonneau 3D" },
          roleHero: "fisher",
          pipeline: [
            {
              step: "1",
              title: { en: "Double Catch I–III + Treasures", fr: "Double Prise I–III & Chasse aux Tresors" },
              icons: ["../assets/vanilla/fishing_rod.png", "../assets/vanilla/heart_of_the_sea.png"],
              badge: { en: "20 / 40 / 65% + 15 / 35% Treasure", fr: "20 / 40 / 65% + 15 / 35% Tresors" },
              desc: {
                en: "Fishing catches roll <strong>20% / 40% / 65%</strong> Double Catch (plus <strong>20% Triple raw fish</strong> at Tier III), <strong>Rod Saver</strong> (45% durability save), <strong>Angler XP</strong> (+12 XP/catch), and <strong>15% / 35%</strong> weighted ocean treasure rolls (up to Nautilus Shells, Conduit items & Heart of the Sea).",
                fr: "Chaque prise declenche <strong>20% / 40% / 65%</strong> de Double Prise (+<strong>20% Triple poisson</strong> au Tier III), <strong>45%</strong> d'economie de canne, <strong>+12 XP</strong> et <strong>15% / 35%</strong> de tirage dans 12 tresors marins (Coquilles de Nautile, Coeur de la Mer...).",
              },
            },
            {
              step: "2",
              title: { en: "3D Barrel Marine Curing", fr: "Salaison Marine 3D au Tonneau" },
              icons: ["../assets/vanilla/barrel.png", "../assets/vanilla/kelp.png", "../assets/vanilla/cooked_salmon.png"],
              badge: { en: "Batch: 4 (8 w/ Master Curer) + Catalyst", fr: "Lot : 4 (8 avec Maitre Saleur) + Catalyseur" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Barrel holding Raw Fish / Kelp (+1 Catalyst in inventory: <code>kelp</code>, <code>coal</code>, <code>charcoal</code>, or <code>sugar</code>). Validate the <strong>3D Timing Bar (Mode 1)</strong> to cure shareable <strong>[1/5]–[5/5] Marine Rations</strong>!",
                fr: "<strong>Sneak + Clic</strong> sur un Tonneau avec Poisson Cru / Kelp (+1 Catalyseur : <code>kelp</code>, <code>charbon</code> ou <code>sucre</code>). Validez la <strong>Barre 3D (Mode 1)</strong> pour produire des <strong>Rations Marines [1/5]–[5/5] partageables</strong> !",
              },
            },
            {
              step: "3",
              title: { en: "Barrel Junk Salvage (9 Recipes)", fr: "Recyclage Marin au Tonneau (9 Recettes)" },
              icons: ["../assets/vanilla/barrel.png", "../assets/vanilla/prismarine_shard.png", "../assets/vanilla/bone_meal.png"],
              badge: { en: "Instant Salvage on Sneak+Click", fr: "Conversion Instantanee Sneak+Clic" },
              desc: {
                en: "Turn fishing junk into useful Nation resources via Barrel Sneak+Click: <code>4 Rotten Flesh -> 2 Leather</code>, <code>2 Nautilus Shell -> 4 Prismarine Shard + 2 Crystals</code>, <code>8 Lily Pad -> 4 Bone Meal</code>, <code>2 Ink Sac -> 3 Black Dye</code>, <code>4 Kelp -> 3 Bone Meal</code>, <code>4 Pufferfish -> 1 Slime Ball + 2 Gold Nugget</code>.",
                fr: "Recyclez les dechets de peche en ressources utiles : <code>4 Chair Putrefiee -> 2 Cuirs</code>, <code>2 Nautiles -> 4 Eclats + 2 Cristaux Prismarine</code>, <code>8 Nenuphars -> 4 Poudres d'Os</code>, <code>4 Kelp -> 3 Poudres d'Os</code>, <code>4 Poisson-Globe -> 1 Boule Slime + 2 Pepites d'Or</code>...",
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "Cured Marine Rations & Aquatic Combat", fr: "Rations Marines [1/5]–[5/5] & Combat Aquatique" },
          table: {
            headers: {
              en: ["Ration Name (Input -> Output)", "Category", "Buffs Across [1/5] -> [5/5]"],
              fr: ["Nom de Ration (Entree -> Sortie)", "Categorie", "Buffs de [1/5] -> [5/5]"],
            },
            rows: [
              ["<strong>Deep-Diver Ration</strong> (<code>cod / cooked_cod -> cooked_cod</code>)", "<code>c</code> (Depth)", { en: "Water Breathing & Night Vision: <code>60s -> 240s (4m)</code>", fr: "Respiration Aquatique & Vision Nocturne : <code>60s -> 240s (4 min)</code>" }],
              ["<strong>Tidal Surge Fillet</strong> (<code>salmon / cooked_salmon -> cooked_salmon</code>)", "<code>s</code> (Surge)", { en: "Speed I–II (<code>30s -> 110s</code>), Regeneration I–II (<code>8s -> 24s</code>, Regen II at [5/5]) + Saturation", fr: "Vitesse I–II (<code>30s -> 110s</code>), Regeneration I–II (<code>8s -> 24s</code>, Regen II au [5/5]) + Saturation" }],
              ["<strong>Ocean Guard Delicacy</strong> (<code>tropical_fish / pufferfish / kelp -> dried_kelp</code>)", "<code>t</code> (Guard)", { en: "Conduit Power (<code>30s -> 150s</code>) & Resistance I (<code>30s -> 110s</code>)", fr: "Pouvoir du Conduit (<code>30s -> 150s</code>) & Resistance I (<code>30s -> 110s</code>)" }],
              ["<strong>Trident Mastery I / II</strong> & <strong>Guardian Slayer</strong>", "Combat", { en: "<code>+15% / +30%</code> Trident damage + <code>20% / 40%</code> Trident save; <code>+25%</code> damage & <code>45%</code> bonus Prismarine/XP on Drowned & Guardians.", fr: "<code>+15% / +30%</code> degats Trident + <code>20% / 40%</code> eco durabilite ; <code>+25%</code> degats & <code>45%</code> loots sur Noyes et Gardiens." }],
              ["<strong>Deep Breath, Swift Swim I/II & Sea Ward</strong>", "Aquatic Passives", { en: "Infinite underwater breathing, Speed I/II + Conduit Power in water, clears Mining Fatigue, and halves drowning/magic damage.", fr: "Respiration infinie, Vitesse I/II + Conduit dans l'eau, purge Mining Fatigue et reduit de 50% les degats de noyade/magie." }],
            ],
          },
        },
      ],
    },

    /* ======================================================================
     * ROLE 7: HUNTER (20 SKILLS)
     * ==================================================================== */
    {
      id: "role-hunter",
      groupId: "professions",
      jobId: "hunter",
      kicker: { en: "PROFESSION 07 • RANGED CRIT, SLAYING & FLETCHING • 20 SKILLS", fr: "METIER 07 • ARCHERIE CRITIQUE, TRAQUE & TROPHES 3D • 20 COMPETENCES" },
      title: { en: "Hunter — Epic Knights Bows, Fletching Talismans & Skinning", fr: "Chasseur — Arcs Epic Knights, Talismans 3D & Depecage" },
      subtitle: {
        en: "Deal up to +45% ranged damage + 35% crits on Vanilla & FrontierEK bows, skin bonus loot from 28 mobs, craft shareable Talismans at the Fletching Table, and track targets with Tactical HUD.",
        fr: "Infligez jusqu'a +45% degats a l'arc (+35% critiques) sur arcs Vanilla & FrontierEK, depecez 28 monstres et forgez des Talismans partageables a la Table d'Archerie.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Fletching Table Workshops", fr: "Presentation du Role & Atelier Table d'Archerie" },
          roleHero: "hunter",
          pipeline: [
            {
              step: "1",
              title: { en: "3D Fletching Talismans & Balms", fr: "Talismans & Baumes 3D (Table d'Archerie)" },
              icons: ["../assets/vanilla/fletching_table.png", "../assets/vanilla/rabbit_foot.png", "../assets/vanilla/blaze_powder.png"],
              badge: { en: "Batch: 4 (6 w/ Master Hunter) + Catalyst", fr: "Lot : 4 (6 avec Maitre Chasseur) + Catalyseur" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Fletching Table holding <code>rabbit_foot</code>, <code>blaze_powder</code>/<code>blaze_rod</code>, or <code>phantom_membrane</code> (+1 Catalyst: <code>string</code>, <code>feather</code>, or <code>leather</code>). Lock the <strong>3D Timing Bar (Mode 1)</strong> to infuse <strong>[1/5]–[5/5] right-click buff charms</strong>!",
                fr: "<strong>Sneak + Clic</strong> sur une Table d'Archerie avec <code>rabbit_foot</code>, <code>blaze_powder/rod</code> ou <code>phantom_membrane</code> (+1 Catalyseur : <code>ficelle</code>, <code>plume</code> ou <code>cuir</code>). Validez la <strong>Barre 3D</strong> pour creer des <strong>Talismans [1/5]–[5/5] utilisables au clic droit</strong> !",
              },
            },
            {
              step: "2",
              title: { en: "Quick Fletching Conversions", fr: "Conversions Rapides d'Archerie" },
              icons: ["../assets/vanilla/flint.png", "../assets/vanilla/arrow.png", "../assets/vanilla/leather.png"],
              badge: { en: "Instant on Sneak+Click", fr: "Conversion Instantanee Sneak+Clic" },
              desc: {
                en: "<strong>4 instant recipes:</strong> <code>1 Flint (+Stick+Feather) -> 8 Arrows</code> (+4 XP), <code>2 Bones -> 6 Arrows</code> (+3 XP), <code>4 Rotten Flesh -> 2 Leather</code> (+4 XP), <code>2 Spider Eyes -> 4 Arrows</code> (+4 XP).",
                fr: "<strong>4 recettes instantanees :</strong> <code>1 Silex (+Baton+Plume) -> 8 Fleches</code>, <code>2 Os -> 6 Fleches</code>, <code>4 Chair Putrefiee -> 2 Cuirs</code>, <code>2 Yeux d'Araignee -> 4 Fleches</code>.",
              },
            },
            {
              step: "3",
              title: { en: "Monster Skinning I/II & Tactical HUD", fr: "Depecage I/II & HUD Cible Tactique" },
              icons: ["../assets/vanilla/phantom_membrane.png", "../assets/vanilla/bow.png"],
              badge: { en: "28 Mobs • +15 / +35 Bounty XP", fr: "28 Mobs • +15 / +35 XP Prime" },
              desc: {
                en: "Every kill from a 28-mob table rolls <code>30% / 60%</code> common drops + <code>15%</code> rare drops (Blaze Rods, Ghast Tears, Shulker Shells, Breeze Rods, Pearls). <strong>Bounty XP</strong> displays a live ActionBar HP bar and exact hit damage!",
                fr: "28 monstres donnent <code>30% / 60%</code> de loots communs + <code>15%</code> de loots rares (Batons de Blaze, Larmes de Ghast, Carapaces de Shulker...). <strong>Prime XP</strong> affiche les PV et degats sur l'ActionBar !",
              },
            },
          ],
          callouts: [
            {
              kind: "warn",
              title: { en: "The Frontier Server Note: Lynx-Eye Ward Elixir Input", fr: "Note Serveur The Frontier : Recette Lynx-Eye Ward Elixir" },
              items: {
                en: [
                  "While code accepts both <code>minecraft:phantom_membrane</code> and <code>minecraft:ender_pearl</code> to craft the Lynx-Eye Ward Elixir, <strong>FrontierEngine blocks Ender Pearls on the live server</strong> — always use <code>minecraft:phantom_membrane</code> in survival!",
                ],
                fr: [
                  "Bien que le code accepte <code>phantom_membrane</code> et <code>ender_pearl</code> pour cet elixir, <strong>FrontierEngine interdit les Ender Pearls sur le serveur live</strong> — utilisez toujours <code>minecraft:phantom_membrane</code> en survie !",
                ],
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "Hunter Talismans & Ranged / PvE / PvP Combat Stats", fr: "Talismans Chasseur [1/5]–[5/5] & Stats de Combat" },
          table: {
            headers: {
              en: ["System / Talisman", "Supported Gear / Input", "Exact Numbers & Caps"],
              fr: ["Systeme / Talisman", "Equipement / Entree", "Valeurs & Plafonds Exacts"],
            },
            rows: [
              ["<strong>Tracker's Agility Talisman</strong> (<code>v</code>)", "<code>minecraft:rabbit_foot</code> (Right-Click)", { en: "Speed I–II + Jump Boost I for <code>40s -> 120s</code>", fr: "Vitesse I–II + Saut Ameliore I pendant <code>40s -> 120s</code>" }],
              ["<strong>Fury Hunting Balm</strong> (<code>f</code>)", "<code>blaze_powder</code> / <code>blaze_rod</code> (Right-Click)", { en: "Strength I–II (Str II at [5/5], <code>30s -> 110s</code>) + Fire Res (<code>30s -> 90s</code>)", fr: "Force I–II (Force II au [5/5], <code>30s -> 110s</code>) + Res. Feu (<code>30s -> 90s</code>)" }],
              ["<strong>Lynx-Eye Ward Elixir</strong> (<code>s</code>)", "<code>minecraft:phantom_membrane</code> (Right-Click)", { en: "Night Vision & Resistance I (<code>45s -> 145s</code>) + Regeneration I (<code>8s -> 24s</code>)", fr: "Vision Nocturne & Resistance I (<code>45s -> 145s</code>) + Regeneration I (<code>8s -> 24s</code>)" }],
              ["<strong>Keen Bow I / II / III</strong>", { en: "Bow, Crossbow, <code>knights:long_bow</code>, <code>saracen_bow</code>, <code>yumi_bow</code>", fr: "Arc, Arbalete, <code>knights:long_bow</code>, <code>saracen_bow</code>, <code>yumi_bow</code>" }, { en: "<code>+15% / +30% / +45%</code> projectile dmg + <strong>20% chance for +35% crit</strong> at Tier III!", fr: "<code>+15% / +30% / +45%</code> degats distance + <strong>20% chance critique +35%</strong> au Tier III !" }],
              ["<strong>Crippling Shot</strong> & <strong>Quiver Saver</strong>", "Bow / Crossbow Shots", { en: "Slowness II + Weakness I (3s, 6s CD) on hit; <code>35%</code> arrow refund + <code>30%</code> bow durability save.", fr: "Lenteur II + Faiblesse I (3s, CD 6s) ; <code>35%</code> remboursement de fleche + <code>30%</code> eco arc." }],
              ["<strong>Monster Slayer I/II</strong> & <strong>Apex Predator</strong>", "All Hostiles / Players", { en: "<code>+15% / +30%</code> vs Hostiles, <code>+8% / +15%</code> PvP; Apex Predator adds <code>+25%</code> vs 15 Elites/Bosses (Warden, Wither, Ravager, Dragon...).", fr: "<code>+15% / +30%</code> vs Monstres, <code>+8% / +15%</code> PvP ; Predateur Alpha ajoute <code>+25%</code> sur 15 Elites/Boss." }],
              ["<strong>Shadow Evade</strong>, <strong>Bloodlust</strong>, <strong>Tracker / Stalker</strong>", "Combat & Night Survival", { en: "<code>20%</code> chance to halve incoming dmg + Speed II 3s (8s CD); kills heal <code>+2 HP</code> + Regen/Speed; night vision + sneak speed.", fr: "<code>20%</code> de reduire les degats subis de 50% + Vitesse II 3s (CD 8s) ; kill = <code>+2 PV</code> + Regen/Vitesse." }],
            ],
          },
        },
      ],
    },

    /* ======================================================================
     * ROLE 8: KNIGHT (20 SKILLS)
     * ==================================================================== */
    {
      id: "role-knight",
      groupId: "professions",
      jobId: "knight",
      kicker: { en: "PROFESSION 08 • FRONTLINE VANGUARD & GRINDSTONE • 20 SKILLS", fr: "METIER 08 • PREMIERE LIGNE, MEULE 3D & EQUILIBRE PVP • 20 COMPETENCES" },
      title: { en: "Knight — Cavalry, Metal Shield Wall, War Seals & PvP Guard", fr: "Chevalier — Cavalerie, Mur de Boucliers, Sceaux & Plafond PvP" },
      subtitle: {
        en: "Command the frontline in heavy metal armor, charge enemies on horseback, oil weapons & craft shareable War Seals at the Grindstone, and lead allies with Royal Banner.",
        fr: "Menez l'assaut en armure lourde metallique, chargez a cheval, appliquez l'Huile d'Affutage et forgez des Sceaux de Guerre sur Meule 3D.",
      },
      sections: [
        {
          num: "01",
          title: { en: "Role Overview & Grindstone Workshop", fr: "Presentation du Role & Atelier Meule 3D" },
          roleHero: "knight",
          pipeline: [
            {
              step: "1",
              title: { en: "3D Grindstone War Seals", fr: "Sceaux de Guerre 3D (Meule)" },
              icons: ["../assets/vanilla/grindstone.png", "../assets/vanilla/gold_ingot.png", "../assets/vanilla/iron_nugget.png"],
              badge: { en: "Batch: 4 (6 w/ Grand Champion) + Catalyst", fr: "Lot : 4 (6 avec Grand Champion) + Catalyseur" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Grindstone holding <code>gold_ingot</code> (Assault), <code>iron_nugget</code> (Bulwark), or <code>sugar</code> (Charge) +1 Catalyst (<code>iron_ingot</code>, <code>coal</code>, or <code>flint</code>). Validate the <strong>3D Timing Bar (Mode 1)</strong> to create shareable <strong>[1/5]–[5/5] War Seals</strong>!",
                fr: "<strong>Sneak + Clic</strong> sur une Meule avec <code>lingot d'or</code> (Assaut), <code>pepite de fer</code> (Rempart) ou <code>sucre</code> (Charge) +1 Catalyseur (<code>fer</code>, <code>charbon</code> ou <code>silex</code>). Validez la <strong>Barre 3D</strong> pour creer des <strong>Sceaux [1/5]–[5/5] partageables</strong> !",
              },
            },
            {
              step: "2",
              title: { en: "Whetstone Oil (Honed Blade)", fr: "Huile d'Affutage sur Meule" },
              icons: ["../assets/vanilla/grindstone.png", "../assets/vanilla/diamond_sword.png"],
              badge: { en: "Sneak+Click Grindstone w/ Melee", fr: "Sneak+Clic Meule avec Arme Melee" },
              desc: {
                en: "<strong>Sneak + Click</strong> a Grindstone holding any Sword, Axe, Mace or Epic Knights melee weapon: restores <strong>+20% max durability</strong> and grants <strong>Strength I & Haste I (15s)</strong> on the spot!",
                fr: "<strong>Sneak + Clic</strong> sur une Meule avec une arme melee (Vanilla ou Epic Knights) : restaure <strong>+20% de durabilite</strong> et accorde <strong>Force I + Hate I (15s)</strong> immediatement !",
              },
            },
            {
              step: "3",
              title: { en: "Royal Banner (Team Rally)", fr: "Etendard Royal (Ralliement d'Allies)" },
              icons: ["assets/ui/icon_shield.png", "../assets/vanilla/iron_chestplate.png"],
              badge: { en: "12-Block Radius • 1 XP Lvl • 5m CD", fr: "Rayon 12 Blocs • 1 Niv. XP • CD 5 min" },
              desc: {
                en: "Trigger from the Skill Menu to buff yourself and nearby allies within 12 blocks with <strong>Strength I (35s)</strong>, <strong>Resistance II (25s)</strong>, <strong>Absorption II (35s)</strong> & <strong>Regeneration I (15s)</strong>!",
                fr: "Declenchez depuis le Menu pour buffer tous les allies sous 12 blocs : <strong>Force I (35s)</strong>, <strong>Resistance II (25s)</strong>, <strong>Absorption II (35s)</strong> et <strong>Regeneration I (15s)</strong> !",
              },
            },
          ],
          callouts: [
            {
              kind: "danger",
              title: { en: "Balanced PvP Cap & Anti-One-Tap Protection (Code-Verified)", fr: "Plafond PvP & Protection Anti-One-Tap (Verifies dans le Code)" },
              items: {
                en: [
                  "All offensive Knight multipliers split cleanly between <strong>PvE</strong> and <strong>PvP</strong> (example: Blade Mastery +10/+20% PvE vs +5/+10% PvP; Cavalry +15% PvE vs +6% PvP; Charge +20% PvE vs +8% PvP; Executioner +20% PvE vs +8% PvP; Duelist Crit 18% chance for +30% PvE vs +12% PvP).",
                  "<strong>Hard PvP Caps:</strong> Total Knight PvP offensive bonus is strictly capped at <strong>+25%</strong> AND <strong>+2.5 bonus damage max per hit</strong>.",
                  "<strong>Anti-One-Tap Guard:</strong> Knight bonus damage cannot drop a defending player from above <code>50% max HP</code> to lethal in a single strike.",
                ],
                fr: [
                  "Tous les multiplicateurs offensifs separent <strong>PvE</strong> et <strong>PvP</strong> (Escrime +10/+20% PvE vs +5/+10% PvP ; Cavalerie +15% vs +6% ; Charge +20% vs +8% ; Sentence +20% vs +8% ; Botte Duelliste 18% chance de +30% PvE vs +12% PvP).",
                  "<strong>Plafonds PvP Stricts :</strong> Le bonus PvP total du Chevalier est verrouille a <strong>+25% max</strong> ET <strong>+2,5 degats bonus max par coup</strong>.",
                  "<strong>Securite Anti-One-Tap :</strong> Les bonus Chevalier ne peuvent pas tuer d'un seul coup un joueur adverse ayant plus de <code>50% de ses PV max</code>.",
                ],
              },
            },
          ],
        },
        {
          num: "02",
          title: { en: "War Seals ([1/5]–[5/5]) & Metal Armor Defensive Line", fr: "Sceaux de Guerre ([1/5]–[5/5]) & Defense en Armure Metallique" },
          table: {
            headers: {
              en: ["Skill / Seal", "Requirement", "Exact Values"],
              fr: ["Competence / Sceau", "Condition", "Valeurs Exactes"],
            },
            rows: [
              ["<strong>Assault War Seal</strong> (<code>a</code>)", "<code>minecraft:gold_ingot</code> (Right-Click)", { en: "Strength I–II (Str II at [5/5]) + Haste I for <code>35s -> 95s</code>", fr: "Force I–II (Force II au [5/5]) + Hate I pendant <code>35s -> 95s</code>" }],
              ["<strong>Bulwark Defense Seal</strong> (<code>d</code>)", "<code>minecraft:iron_nugget</code> (Right-Click)", { en: "Resistance I–II (Res II at [5/5]) + Absorption I–II for <code>35s -> 95s</code>", fr: "Resistance I–II (Res II au [5/5]) + Absorption I–II pendant <code>35s -> 95s</code>" }],
              ["<strong>Vanguard Charge Seal</strong> (<code>c</code>)", "<code>minecraft:sugar</code> (Right-Click)", { en: "Speed I–II (<code>40s -> 100s</code>) + Regeneration I (<code>8s -> 24s</code>)", fr: "Vitesse I–II (<code>40s -> 100s</code>) + Regeneration I (<code>8s -> 24s</code>)" }],
              ["<strong>Shield Wall I / II</strong> & <strong>Juggernaut</strong>", { en: "Wearing <strong>>= 3 Metal Armor pieces</strong> (Iron / Steel / Diamond / Netherite / Epic Knights)", fr: "Porter <strong>>= 3 pieces d'armure metallique</strong> (Fer / Acier / Diamant / Netherite / Epic Knights)" }, { en: "<code>-10% / -18%</code> physical damage taken; Juggernaut adds <strong>Health Boost</strong> + <code>-20%</code> projectile/explosion damage.", fr: "<code>-10% / -18%</code> degats physiques subis ; Mastodonte ajoute <strong>Bonus de Vie</strong> + <code>-20%</code> degats projectiles/explosions." }],
              ["<strong>Iron Will</strong>, <strong>Riposte</strong> & <strong>Second Wind</strong>", "Melee Tank Passives", { en: "Clears Slowness/Weakness + 25% KB resist; <code>25%</code> chance to reflect 25% dmg + Res I 3s (7s CD); at <code>&lt;=35% HP</code> triggers Regen II 5s + Absorption I 15s (45s CD).", fr: "Purge Lenteur/Faiblesse + 25% anti-recul ; <code>25%</code> de renvoyer 25% des degats + Res I 3s (CD 7s) ; sous <code>35% PV</code> active Regen II 5s + Absorption I 15s (CD 45s)." }],
              ["<strong>Weapon Care</strong> & <strong>Battle Sight</strong>", "Utility", { en: "<code>30%</code> durability save on melee weapons & metal armor + <code>+10 XP</code> per kill & Tactical Target ActionBar HUD.", fr: "<code>30%</code> eco durabilite sur armes & armure metallique + <code>+10 XP</code> par kill & HUD ActionBar Cible Tactique." }],
            ],
          },
        },
      ],
    }
  );
})();

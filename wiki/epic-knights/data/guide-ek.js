/* ============================================================================
 * EPIC KNIGHTS: THE FRONTIER EDITION — Complete Rebalance & Crafting Guides
 * Zero-emoji, strictly code-verified from FrontierEK_BP / FrontierEK_RP v1.0.0
 * ========================================================================== */

window.EK_GUIDE_MODULES = [
  {
    id: "ek-overview",
    groupId: "guide",
    kicker: { en: "SERVER EDITION • ATTRIBUTION & ZERO-LAG ARCHITECTURE", fr: "EDITION SERVEUR • ATTRIBUTION & ARCHITECTURE ZERO-LAG" },
    title: { en: "Epic Knights Frontier — Disclaimer, Balance & Overview", fr: "Epic Knights Frontier — Attribution, Equilibrage & Presentation" },
    subtitle: {
      en: "Complete technical & crafting guide to the Frontier-rebalanced adaptation of Magistu's Epic Knights mod: 58 full armor sets, 1,332 armors, 302 nerfed weapons, and 1,584 recipes.",
      fr: "Guide complet de l'adaptation reequilibree d'Epic Knights pour The Frontier : 58 sets complets, 1 332 armures, 302 armes reequilibrees et 1 584 recettes.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Ownership & Server Modification Notice", fr: "Attribution Officielle & Modification Serveur" },
        customHtml: {
          en: `
            <div class="ek-attribution-banner">
              <h3>IMPORTANT ATTRIBUTION — NOT OWNED BY BEAN BLOW STUDIO</h3>
              <p style="margin:0 0 8px;">
                <strong>The Epic Knights Mod</strong> does <strong>NOT</strong> belong to <strong>Bean Blow Studio</strong>.
                All original 3D armor models, historical weapon silhouettes, and textures are the intellectual work of their original creators:
                <strong>Magistu</strong>, <strong>theblackchimera</strong>, <strong>iPuchinin</strong>, and <strong>SteveMc</strong>.
              </p>
              <p style="margin:0;">
                This <strong>Frontier Edition (<code>FrontierEK_BP</code> / <code>FrontierEK_RP</code>)</strong> was solely <strong>reworked, stripped of lag-heavy scripts, and carefully nerfed/rebalanced by our team</strong> so that all 1,662 medieval items integrate cleanly with Vanilla Netherite ceilings, our Nations economy, and the Blacksmith / Hunter / Knight skill trees of <code>JobsSkillsBP</code>.
              </p>
            </div>
          `,
          fr: `
            <div class="ek-attribution-banner">
              <h3>ATTRIBUTION IMPORTANTE — N'APPARTIENT PAS A BEAN BLOW STUDIO</h3>
              <p style="margin:0 0 8px;">
                L'addon <strong>The Epic Knights Mod</strong> n'appartient <strong>PAS</strong> a <strong>Bean Blow Studio</strong>.
                Tous les modeles 3D, silhouettes d'armes historiques et textures proviennent de ses createurs originaux :
                <strong>Magistu</strong>, <strong>theblackchimera</strong>, <strong>iPuchinin</strong> et <strong>SteveMc</strong>.
              </p>
              <p style="margin:0;">
                Cette <strong>Edition The Frontier (<code>FrontierEK_BP</code> / <code>FrontierEK_RP</code>)</strong> a simplement ete <strong>nettoyee (zero script, zero lag) et reequilibree / nerfee par nos soins</strong> afin que les 1 662 objets respectent la vision du serveur, les plafonds d'armure Vanilla, les recettes Netherite et l'artisanat du Forgeron de <code>JobsSkillsBP</code>.
              </p>
            </div>
          `,
        },
        widget: "ek-stats-grid",
      },
      {
        num: "02",
        title: { en: "What Our Rework Changed From Upstream Epic Knights", fr: "Ce que Notre Rework a Modifie par Rapport a l'Original" },
        table: {
          headers: {
            en: ["System Area", "Upstream Behavior", "The Frontier Server Edition"],
            fr: ["Domaine", "Version Originale", "Edition The Frontier (Serveur)"],
          },
          rows: [
            ["<strong>Armor Protection</strong>", { en: "Varying non-vanilla values breaking progression", fr: "Valeurs disparates depassant les paliers vanilla" }, { en: "Strict 4-Tier Vanilla Parity: <strong>T1 Leather (1/3/2/1)</strong>, <strong>T2 Iron (2/6/5/2)</strong>, <strong>T3 Diamond (3/8/6/3)</strong>, <strong>T4 Netherite (3/8/6/3 + Fire Res)</strong>.", fr: "Parite Vanilla stricte en 4 paliers : <strong>T1 Cuir (1/3/2/1)</strong>, <strong>T2 Fer (2/6/5/2)</strong>, <strong>T3 Diamant (3/8/6/3)</strong>, <strong>T4 Netherite (3/8/6/3 + Ignifuge)</strong>." }],
            ["<strong>Weapon Damage</strong>", { en: "10–15+ burst hits & dual-wield/two-handed script overrides", fr: "Degats 10–15+ et scripts two-handed / dual-wield" }, { en: "All 302 weapons nerfed cleanly: Steel capped at <strong>4–6</strong> (below Diamond 6–7), Netherite 7–8, global heavy max <strong>8</strong> (6 on Steel, 7 on Diamond, 8 on Netherite). Zero scripts.", fr: "302 armes reequilibrees : Acier plafonne a <strong>4–6</strong> (strictement sous Diamant 6–7), Netherite 7–8, armes lourdes max <strong>8</strong> (6 Acier, 7 Diamant, 8 Netherite). Zero script." }],
            ["<strong>Netherite Upgrades</strong>", { en: "Missing on most Epic Knights sets", fr: "Absentes sur la majorite des armures" }, { en: "Added <strong>324 Smithing Table upgrade recipes</strong> converting every T3 Diamond piece into T4 Netherite with <code>fire_resistant: true</code> + Forge Toughness/KB synergy.", fr: "Ajout de <strong>324 recettes Table de Forgeron</strong> transformant chaque piece T3 Diamant en T4 Netherite ignifuge + synergie Toughness/KB dans <code>JobsSkillsBP</code>." }],
            ["<strong>Steel Economy</strong>", { en: "Free furnace smelting Iron -> Steel", fr: "Fonte directe Fer -> Acier au fourneau" }, { en: "Removed free furnace Steel smelting! Requires <strong>Blacksmith 3-Zone Blast Furnace</strong> (or Forge Anvil) for Steel Ingots, and Diamonds or Blacksmith Anvil for Steel Plates.", fr: "Fonte gratuite en fourneau supprimee ! Exige le <strong>Forgeron Haut-Fourneau 3 zones</strong> pour les lingots, puis Diamant ou Enclume Forgeron pour les Plaques." }],
            ["<strong>Performance & Inventory</strong>", { en: "Ticking dynamic properties & 1,600 flat creative icons", fr: "Proprietes dynamiques + inventaire creatif surcharge" }, { en: "<strong>0 BP scripts</strong>, <strong>0 custom runtime entities</strong>, <strong>0 placeable blocks / helmet displays</strong>, <strong>6 collapsible Creative folders</strong> (<code>1.21.60</code> catalog), upgraded Java-style item icons.", fr: "<strong>0 script BP</strong>, <strong>0 entite serveur</strong>, <strong>0 bloc posable / presentoir</strong>, <strong>6 dossiers Creatifs repliables</strong> (catalogue <code>1.21.60</code>), textures Java nettes." }],
          ],
        },
      },
    ],
  },

  {
    id: "ek-armor-system",
    groupId: "guide",
    kicker: { en: "1,332 ARMORS • 4 TIERS • MULTI-SLOT LAYERING", fr: "1 332 ARMURES • 4 PALIERS • SUPERPOSITION 4 SLOTS" },
    title: { en: "Armor Tiers, Slot Layering & Netherite Parity", fr: "Paliers d'Armures, Superposition & Ameliorations Netherite" },
    subtitle: {
      en: "Understand how Epic Knights distributes helmets, cuirasses, plumes, pauldrons, and surcoats across the 4 Vanilla equipment slots.",
      fr: "Comprenez comment les casques, cuirasses, plumes, epaulieres et surcots utilisent les 4 emplacements d'armure pour se superposer sans conflit.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Balanced 4-Tier Armor Statistics", fr: "Statistiques Officielles des 4 Paliers d'Armure" },
        table: {
          headers: {
            en: ["Tier / Material Class", "Item Count", "Prot (Head / Chest / Legs / Feet)", "Durability (H / C / L / F)", "Enchantability & Repair"],
            fr: ["Palier / Classe", "Nombre", "Protection (Tete / Torse / Jambes / Pieds)", "Durabilite (T / C / J / P)", "Enchantement & Reparation"],
          },
          rows: [
            ["<strong>Tier 1 — Leather & Cloth</strong><br/>(Gambesons, Surcoats, Cloaks, Plumes, Hats)", "579 items", "<code>1 / 3 / 2 / 1</code> (Total 7)", "<code>55 / 80 / 75 / 65</code>", { en: "Ench: <code>15</code> • Repairs with Woollen Cloth or Leather", fr: "Ench : <code>15</code> • Reparation : Tissu de Laine ou Cuir" }],
            ["<strong>Tier 2 — Iron, Chainmail & Brigandine</strong><br/>(Chainmail, Brigandine, Barbutes, Half-Armor)", "105 items", "<code>2 / 6 / 5 / 2</code> (Total 15)", "<code>165 / 240 / 225 / 195</code>", { en: "Ench: <code>9</code> • Repairs with Iron Ingot or Steel Ingot", fr: "Ench : <code>9</code> • Reparation : Lingot de Fer ou d'Acier" }],
            ["<strong>Tier 3 — Diamond / Master Steel Plate</strong><br/>(Gothic, Maximilian, Greenwich, Samurai, Crusader)", "324 items", "<code>3 / 8 / 6 / 3</code> (Total 20)", "<code>363 / 528 / 495 / 429</code>", { en: "Ench: <code>10</code> • Repairs with Steel Plate or Diamond", fr: "Ench : <code>10</code> • Reparation : Plaque d'Acier ou Diamant" }],
            ["<strong>Tier 4 — Netherite Upgrade (Fireproof)</strong><br/>(All 324 T3 pieces upgraded at Smithing Table)", "324 items", "<code>3 / 8 / 6 / 3</code> (Total 20)", "<code>407 / 592 / 555 / 481</code>", { en: "Ench: <code>15</code> • <strong>Fire Resistant</strong> + JobsSkillsBP Toughness (+2%/pc) & KB Resist (+10%/pc)", fr: "Ench : <code>15</code> • <strong>Ignifuge</strong> + JobsSkillsBP Toughness (+2%/pc) & Anti-Recul (+10%/pc)" }],
          ],
        },
      },
      {
        num: "02",
        title: { en: "Why Plumes Use Legs & Surcoats / Pauldrons Use Feet (Layering)", fr: "Pourquoi les Plumes Sont en Jambes et les Surcots / Epaulieres en Bottes" },
        lead: {
          en: "Bedrock only provides 4 wearable slots, yet knights need helmets + plumes + chestplates + pauldrons + surcoats simultaneously. Epic Knights maps cosmetic/overlay pieces to Legs and Feet so full outfits stack visually!",
          fr: "Bedrock n'a que 4 slots d'equipement. Pour permettre d'afficher simultanement Casque + Plume + Plastron + Epaulieres/Surcot, Epic Knights place les ornements sur Jambes et Bottes :",
        },
        table: {
          headers: {
            en: ["Bedrock Slot", "Main Items Equipped There", "Visual Layering Purpose"],
            fr: ["Slot Bedrock", "Pieces Placees Dans Ce Slot", "Interet pour Vos Sets"],
          },
          rows: [
            ["<strong>Head (<code>slot.armor.head</code>)</strong>", "407 pieces (Barbutes, Sallets, Armets, Greathelms, Kabuto, Hats, Hoods)", { en: "Covers the head; hides default player helmet layer cleanly.", fr: "Couvre la tete ; remplace la couche casque de base." }],
            ["<strong>Chest (<code>slot.armor.chest</code>)</strong>", "259 pieces (Plate Cuirasses, Chainmail Hauberks, Brigandines, Gambesons, O-Yoroi)", { en: "Core torso, shoulders, gauntlets & waist protection.", fr: "Protection centrale : torse, avant-bras et ceinture." }],
            ["<strong>Legs (<code>slot.armor.legs</code>)</strong>", "174 pieces (Plate Chausses/Leggings + <strong>Big Plumes, Feather Plumes, Antler/Dragon Crests</strong>)", { en: "Wear leg armor OR trade legs slot for dramatic helmet plumes, horns, crowns, and tournament crests rendered on your head!", fr: "Soit de vraies jambieres (Gothique, Maximilienne, Samourai), soit des <strong>Plumes / Cornes / Cimiers</strong> qui s'affichent sur le haut de votre casque !" }],
            ["<strong>Feet (<code>slot.armor.feet</code>)</strong>", "492 pieces (Boots + <strong>240 Surcoats, Pauldrons, Breastplate Overlays, Cloaks, Bevors, Hoods, Jinbaori</strong>)", { en: "Wear Leather Boots OR equip heraldic Surcoats, Knight Pauldrons, Besagews, Plaques & Mantles directly over any Chestplate!", fr: "Contient les bottes mais surtout <strong>240 Surcots heraldiques, Epaulieres, Capes, Bavieres et Plastrons externes</strong> qui se superposent sur votre Plastron !" }],
          ],
        },
      },
      {
        num: "03",
        title: { en: "Netherite Smithing Upgrades (324 Recipes) + Blacksmith Forging", fr: "Ameliorations Netherite (324 Recettes) + Forge Forgeron" },
        sampleSmithing: "knights:gothic_armour_netherite",
        callouts: [
          {
            kind: "success",
            title: { en: "Double Progression: Smithing Table + Blacksmith 3-Stage Forge", fr: "Double Progression : Table de Forgeron + Forge 3 Etapes" },
            items: {
              en: [
                "All <strong>324 T3 Diamond items</strong> upgrade 1:1 on a <strong>Smithing Table</strong> using <code>1x Netherite Upgrade Template + Base Armor + 1x Netherite Ingot</code>.",
                "Every resulting T4 piece gains native <code>fire_resistant: true</code> plus <strong>JobsSkillsBP Netherite Synergy</strong> (<code>+2%</code> Armor Toughness on heavy hits per piece, <code>+10%</code> Knockback Resistance per piece = max <code>+8% / +40%</code>).",
                "Every FrontierEK armor and melee weapon can ALSO be tempered through the <strong>Blacksmith 3-Stage Forge</strong> (Furnace -> Forge Hammer Anvil -> Cauldron) to roll <code>[1/5]–[5/5] Masterwork</code> bonuses!",
              ],
              fr: [
                "Les <strong>324 pieces T3 Diamant</strong> s'ameliorent 1:1 en <strong>Table de Forgeron</strong> (<code>Modele Amelioration Netherite + Armure Base + Lingot Netherite</code>).",
                "Chaque piece T4 recoit <code>fire_resistant: true</code> (ne brule pas dans la lave) et la <strong>Synergie Netherite de JobsSkillsBP</strong> (<code>+2%</code> Armor Toughness / piece des 4 degats, <code>+10%</code> anti-recul / piece = max <code>+8% / +40%</code>).",
                "Toutes les armures et armes FrontierEK passent aussi dans la <strong>Forge 3 Etapes du Forgeron</strong> pour obtenir jusqu'a 3 stats <code>[5/5] Chef-d'Oeuvre</code> !",
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: "ek-weapons-balance",
    groupId: "guide",
    kicker: { en: "302 MELEE WEAPONS • 3 BOWS • HORSE BARDING", fr: "302 ARMES MELEE • 3 ARCS • BARDING CHEVAL" },
    title: { en: "Rebalanced Weapons (Nerf Report), Bows & Barding", fr: "Armes Reequilibrees (Rapport de Nerf), Arcs & Barding" },
    subtitle: {
      en: "Exact damage values across all 96 weapon archetypes after our server nerf, plus Epic Knights Longbow, Saracen Bow, Yumi Bow, and Knight Horse Barding.",
      fr: "Tableau exact des degats sur les 96 types d'armes apres notre reequilibrage serveur, incluant les 3 Arcs speciaux et l'armure de cheval.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Complete Weapon Nerf Tiers (302 Melee Weapons)", fr: "Paliers de Degats Apres Nerf (302 Armes)" },
        table: {
          headers: {
            en: ["Material Tier", "Weapon Count", "Light / Daggers", "Standard 1-Hand", "Heavy 2-Handed*"],
            fr: ["Palier Materiau", "Quantite", "Legeres / Dagues", "Standard 1 Main", "Lourdes 2 Mains*"],
          },
          rows: [
            ["<strong>Special Training / Rust</strong>", "5 weapons", "<code>2</code> (Training Sword) • <code>3</code> (Bo Staff)", "<code>5</code> (Messer / Rusted)", "<code>6</code> (Rich Steel Saxon Sword)"],
            ["<strong>Wood & Gold</strong>", "69 weapons", "—", "<code>3</code> (Arming Sword / Katana / Shortsword)", "<code>4</code> (Claymore / Halberd / Pike / Lance)"],
            ["<strong>Stone</strong>", "34 weapons", "—", "<code>4</code> (Shortsword / Dao / Stiletto)", "<code>5</code> (Claymore / Bardiche / Morningstar)"],
            ["<strong>Iron & Copper-Tier</strong>", "37 weapons", "—", "<code>5</code> (Arming Sword / Noble Sword)", "<code>6</code> (Bastard Sword / Halberd / Estoc)"],
            ["<strong>Steel (FrontierEK Core)</strong>", "94 weapons", "<code>4</code> (Rondel / Parrying / Bollock / Dagger)", "<code>5</code> (Longsword / Rapier / Sabre / Spear / Falchion)", "<code>6</code> (German Greatsword / Swiss Halberd / Poleaxe / Claymore / Billhook)"],
            ["<strong>Diamond</strong>", "34 weapons", "—", "<code>6</code> (Katana / Dao / Arming Sword)", "<code>7</code> (Claymore / Zweihander / Naginata / Heavy Warhammer)"],
            ["<strong>Netherite (Fireproof)</strong>", "34 weapons", "—", "<code>7</code> (Arming Sword / Katana / Scimitar)", "<code>8</code> (Claymore / Halberd / Odachi / Estoc)"],
          ],
        },
        callouts: [
          {
            kind: "info",
            title: { en: "Why Steel Was Capped Strictly Below Diamond (4–6 vs 6–7)", fr: "Pourquoi l'Acier Est Plafonne Sous le Diamant (4–6 vs 6–7)" },
            items: {
              en: [
                "In upstream Epic Knights, Steel weapons rivaled Diamond & Netherite despite needing zero Diamonds. Our nerf sets Steel at <strong>4 (Daggers) / 5 (1-Hand) / 6 (Heavy)</strong> — making Steel the accessible Nation-army workhorse while preserving Diamond (6–7) and Netherite (7–8) value.",
                "All heavy two-handed archetypes (`ahlspiess`, `bardicheaxe`, `bastard_sword`, `claymore`, `concavehalberd`, `estoc`, `flamebladed_sword`, `german_greatsword`, `glaive`, `guisarme`, `heavymace`, `heavywarhammer`, `katzblager`, `lochaberaxe`, `lucernehammer`, `morgenstern`, `naginata`, `odachi`, `pike`, `swiss_halberd`, `zweihander`, etc.) share the heavy +1 damage bracket cleanly.",
              ],
              fr: [
                "Dans l'addon original, l'Acier egalait le Diamant sans couter de diamants. Notre equilibrage fixe l'Acier a <strong>4 (Dagues) / 5 (1 Main) / 6 (Lourdes)</strong> : l'equipement standard ideal des armees de Nation, tout en laissant le Diamant (6–7) et la Netherite (7–8) devant.",
                "De plus, les lames d'Acier peuvent etre forgees `[5/5]` par un Forgeron (+24% degats) ou maniees par un Chevalier / Chasseur pour personnaliser votre style de combat.",
              ],
            },
          },
        ],
      },
      {
        num: "02",
        title: { en: "Custom Bows (3) & Knight Horse Barding (1)", fr: "Arcs Speciaux (3) & Armure de Cheval" },
        specialShowcase: ["knights:long_bow", "knights:saracen_bow", "knights:yumi_bow", "knights:knights_barding"],
        table: {
          headers: {
            en: ["Item", "ID", "Durability", "Notes & Synergies"],
            fr: ["Objet", "Identifiant", "Durabilite", "Notes & Synergies"],
          },
          rows: [
            ["<strong>Long Bow</strong>", "<code>knights:long_bow</code>", "384", { en: "English heavy warbow — receives <strong>Hunter Keen Bow I–III (+15/30/45% + crits)</strong>!", fr: "Grand arc de guerre anglais — compatible <strong>Tir Precis I–III du Chasseur (+15/30/45% + critiques)</strong> !" }],
            ["<strong>Saracen Bow</strong>", "<code>knights:saracen_bow</code>", "384", { en: "Eastern composite recurve bow — receives <strong>Hunter Keen Bow I–III</strong>.", fr: "Arc composite oriental — compatible <strong>Tir Precis I–III du Chasseur</strong>." }],
            ["<strong>Yumi Bow</strong>", "<code>knights:yumi_bow</code>", "384", { en: "Asymmetric Japanese longbow — receives <strong>Hunter Keen Bow I–III</strong>.", fr: "Arc japonais asymetrique — compatible <strong>Tir Precis I–III du Chasseur</strong>." }],
            ["<strong>Knight Horse Barding</strong>", "<code>knights:knights_barding</code>", "Horse Armor (Prot 11)", { en: "Crafted medieval caparisoned horse armor (`slot.armor.body`).", fr: "Armure caparaçonnee historique pour chevaux (`slot.armor.body`)." }],
          ],
        },
      },
    ],
  },

  {
    id: "ek-steel-crafting",
    groupId: "guide",
    kicker: { en: "24 MATERIALS • BLACKSMITH INTEGRATION • CRAFTING CHAIN", fr: "24 MATERIAUX • LIAISON FORGERON • CHAINE DE CRAFT" },
    title: { en: "Steel Economy, Plates & Component Recipes", fr: "Economie de l'Acier, Plaques & Composants" },
    subtitle: {
      en: "How Steel Ingots, Steel Plates, Chainmail Links, Woollen Cloth, Leather Strips, Lamellar Rows, and Hilts are produced on The Frontier.",
      fr: "Comment produire les Lingots d'Acier, Plaques d'Acier, Mailles, Tissu de Laine, Lanieres de Cuir, Ecailles Lamellaires et Poignees.",
    },
    sections: [
      {
        num: "01",
        title: { en: "Two Paths to Steel Plates (Server Economy Loop)", fr: "Deux Voies Pour Obtenir les Plaques d'Acier" },
        lead: {
          en: "Every Steel plate armor & shield requires Steel Plates. Vanilla players spend Diamonds on the Crafting Table, whereas leveling a Blacksmith lets you forge Steel Plates on an Anvil with ZERO Diamonds!",
          fr: "Chaque plaque d'acier demande des diamants sur Table de Craft... sauf pour les Forgerons, qui les martelent sur Enclume sans aucun diamant !",
        },
        sampleMaterials: [
          "knights:steel_plate",
          "knights:small_steel_plate",
          "knights:steel_ring",
          "knights:steel_chain",
          "knights:steel_chainmail",
          "knights:lacquered_iron_plate",
          "knights:lamellar_rows",
          "knights:mountain_pattern_rows",
          "knights:woollen_cloth",
          "knights:leather_strip",
          "knights:hilt",
          "knights:pole",
        ],
      },
    ],
  },
];

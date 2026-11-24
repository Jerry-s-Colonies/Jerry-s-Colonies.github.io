/* Auto-generated from JobsSkillsBP & JobsSkillsRP — DO NOT HAND-EDIT */
window.JS_DATA = {
  "version": "1.0.0",
  "skillCostLevels": 10,
  "totalJobs": 8,
  "totalSkills": 156,
  "jobs": [
    {
      "id": "blacksmith",
      "chapterId": "role-blacksmith",
      "color": "#f5b942",
      "icon": "../assets/vanilla/iron_ingot.png",
      "name": {
        "en": "Blacksmith",
        "fr": "Forgeron"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 19,
      "connectorCount": 34,
      "workstations": [
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:anvil",
        "minecraft:cauldron",
        "minecraft:smoker",
        "minecraft:grindstone"
      ],
      "activeAbility": {
        "id": "smith_emergency_weld",
        "name": {
          "en": "Emergency Weld",
          "fr": "Soudure d'Urgence"
        },
        "desc": {
          "en": "Restores +30% max durability on worn armor and mainhand item.",
          "fr": "Restaure +30% de durabilite max sur votre armure portee et l'objet en main."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "smith_fast_smelt_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/furnace.png",
          "requires": [],
          "unlocks": [
            "smith_pure_alloy_1",
            "smith_fast_smelt_2"
          ],
          "name": {
            "en": "Fast Smelting I",
            "fr": "Fonte Rapide I"
          },
          "desc": {
            "en": "Sneak + right-click a Furnace or Blast Furnace with raw iron, gold, or copper: instantly smelts up to 16 items using fuel from your inventory.",
            "fr": "Sneak + clic droit sur un Four ou Haut-Fourneau avec fer, or ou cuivre brut : fond instantanement jusqu'a 16 objets en consommant le combustible adequat."
          }
        },
        {
          "id": "smith_anvil_repair_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/anvil.png",
          "requires": [],
          "unlocks": [
            "smith_anvil_repair_2",
            "smith_hide_tanning"
          ],
          "name": {
            "en": "Anvil Sharpening",
            "fr": "Affutage sur Enclume"
          },
          "desc": {
            "en": "Sneak + right-click an Anvil with damaged gear: starts the Forge Hammer minigame (repairs 25% durability, 35% on Perfect, 0 XP).",
            "fr": "Sneak + clic droit sur une Enclume avec equipement endommage : lance le mini-jeu au Marteau de Forge (repare 25%, 35% si Parfait, 0 XP)."
          }
        },
        {
          "id": "smith_fire_skin",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/magma_cream.png",
          "requires": [],
          "unlocks": [
            "smith_ember_heart"
          ],
          "name": {
            "en": "Fireproof Skin",
            "fr": "Peau Ignifugee"
          },
          "desc": {
            "en": "Reduces damage taken from fire, flames, and magma blocks by 50%.",
            "fr": "Reduit de 50% les degats subis par le feu, les flammes et les blocs de magma."
          }
        },
        {
          "id": "smith_pure_alloy_1",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_ingot.png",
          "requires": [
            "smith_fast_smelt_1"
          ],
          "unlocks": [
            "smith_pure_alloy_2"
          ],
          "name": {
            "en": "Pure Alloy I",
            "fr": "Alliage Pur I"
          },
          "desc": {
            "en": "Unlocks 3-zone Blast Furnace Steel smelting, Anvil Steel Plate hammering with the Forge Hammer (3 Steel -> 1 Plate, no Diamond needed), and 10% Fast Smelt bonus.",
            "fr": "Debloque la forge de l'Acier (Haut-Fourneau 3 zones : Vert 100%, Jaune pertes, Rouge echec), les Plaques d'Acier sur Enclume au Marteau (3 Acier -> 1 Plaque sans diamant) et +10% bonus Fonte Rapide."
          }
        },
        {
          "id": "smith_fast_smelt_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/blast_furnace.png",
          "requires": [
            "smith_fast_smelt_1"
          ],
          "unlocks": [
            "smith_recycle",
            "smith_quench_temper"
          ],
          "name": {
            "en": "Fast Smelting II",
            "fr": "Fonte Rapide II"
          },
          "desc": {
            "en": "Expands Fast Smelting to 64 items per batch and unlocks ancient debris, sand, cobble, deepslate, clay, netherrack, and quartz.",
            "fr": "Etend la Fonte Rapide jusqu'a 64 objets par lot et inclut les debris antiques, le sable, les pierres, l'argile et le quartz."
          }
        },
        {
          "id": "smith_anvil_repair_2",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/gold_ingot.png",
          "requires": [
            "smith_anvil_repair_1"
          ],
          "unlocks": [
            "smith_quench_temper",
            "smith_steel_temper_1"
          ],
          "name": {
            "en": "Master Repairer",
            "fr": "Maitre Reparateur"
          },
          "desc": {
            "en": "Repairs 50% durability (60% on Perfect) per Anvil Sharpening with a 25% chance not to consume the repair material.",
            "fr": "Repare 50% (60% si Parfait) a chaque Affutage sur Enclume avec 25% de chance d'economiser le materiau de reparation."
          }
        },
        {
          "id": "smith_hide_tanning",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/leather.png",
          "requires": [
            "smith_anvil_repair_1"
          ],
          "unlocks": [
            "smith_master_tanner",
            "smith_heat_economy"
          ],
          "name": {
            "en": "Hide Tanning",
            "fr": "Tannage de Peaux"
          },
          "desc": {
            "en": "2-stage leather craft: soak Rotten Flesh for 5s in a water Cauldron (blue gauge) then dry on a 3D Furnace, Blast Furnace, or Smoker to cure Leather.",
            "fr": "Traitement artisanal en 2 etapes : trempez la Chair Putrefiee 5s dans un chaudron d'eau (jauge bleue) puis sechez-la sur Fourneau/Haut-Fourneau/Fumoir 3D pour produire du Cuir."
          }
        },
        {
          "id": "smith_ember_heart",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/lava_bucket.png",
          "requires": [
            "smith_fire_skin"
          ],
          "unlocks": [
            "smith_heat_economy"
          ],
          "name": {
            "en": "Ember Heart",
            "fr": "Coeur de Braise"
          },
          "desc": {
            "en": "Grants Fire Resistance for 10 seconds upon taking fire or lava damage (30-second internal cooldown).",
            "fr": "Au contact du feu ou de la lave, applique Resistance au Feu pendant 10 secondes (recharge interne : 30 secondes)."
          }
        },
        {
          "id": "smith_pure_alloy_2",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/netherite_ingot.png",
          "requires": [
            "smith_pure_alloy_1"
          ],
          "unlocks": [
            "smith_metal_magnet"
          ],
          "name": {
            "en": "Pure Alloy II",
            "fr": "Alliage Pur II"
          },
          "desc": {
            "en": "20% chance per smelted item to gain a bonus ingot or result (including Steel) during Fast Smelting. Replaces Pure Alloy I.",
            "fr": "20% de chance par objet d'obtenir un lingot ou resultat supplementaire (Acier inclus) lors d'une Fonte Rapide. Remplace Alliage Pur I."
          }
        },
        {
          "id": "smith_recycle",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/grindstone.png",
          "requires": [
            "smith_fast_smelt_2"
          ],
          "unlocks": [
            "smith_emergency_weld",
            "smith_metal_magnet"
          ],
          "name": {
            "en": "Forge Recycling",
            "fr": "Recyclage de Forge"
          },
          "desc": {
            "en": "Sneak + right-click a Grindstone with iron, gold, chainmail, or diamond gear: Forge Hammer minigame (+1 material and +25% XP on Perfect).",
            "fr": "Sneak + clic droit sur une Meule avec piece en fer, or, mailles ou diamant : mini-jeu au Marteau de Forge (+1 materiau et +25% XP si Parfait)."
          }
        },
        {
          "id": "smith_quench_temper",
          "x": 5,
          "y": 4,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/cauldron.png",
          "requires": [
            "smith_fast_smelt_2",
            "smith_anvil_repair_2"
          ],
          "unlocks": [
            "smith_emergency_weld"
          ],
          "name": {
            "en": "Artisan Forging",
            "fr": "Forge Artisanale"
          },
          "desc": {
            "en": "Unlocks 3-stage Forging (Furnace Bellows -> Anvil Hammer -> Water Cauldron) for weapons, axes, armor & tools up to rating 4/5 with custom category stats.",
            "fr": "Debloque la Forge en 3 etapes (Fourneau soufflet -> Enclume Marteau -> Chaudron d'eau) jusqu'au rang 4/5 avec bonus exclusifs par type d'objet."
          }
        },
        {
          "id": "smith_steel_temper_1",
          "x": 7,
          "y": 4,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_chestplate.png",
          "requires": [
            "smith_anvil_repair_2"
          ],
          "unlocks": [
            "smith_steel_temper_2"
          ],
          "name": {
            "en": "Steel Tempering I",
            "fr": "Trempe de l'Acier I"
          },
          "desc": {
            "en": "20% chance to negate durability loss on weapons and armor in combat.",
            "fr": "20% de chance d'annuler l'usure de vos armes et de votre armure en combat."
          }
        },
        {
          "id": "smith_master_tanner",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/string.png",
          "requires": [
            "smith_hide_tanning"
          ],
          "unlocks": [
            "smith_artisan_salvage"
          ],
          "name": {
            "en": "Master Tanner",
            "fr": "Maitre Tanneur"
          },
          "desc": {
            "en": "Cuts tanning fuel cost by 50%, guarantees at least 1 Leather per flesh, and adds a 25% chance for a bonus Leather.",
            "fr": "Reduit de 50% le cout en charbon/blaze du tannage, garantit au moins 1 Cuir par chair et accorde 25% de chance d'en produire un second."
          }
        },
        {
          "id": "smith_heat_economy",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/coal.png",
          "requires": [
            "smith_hide_tanning",
            "smith_ember_heart"
          ],
          "unlocks": [
            "smith_artisan_salvage"
          ],
          "name": {
            "en": "Hearth Economy",
            "fr": "Economie de Foyer"
          },
          "desc": {
            "en": "Grants +25% XP from forging and tanning and slightly widens the sweet-spot zone on Furnace and Anvil minigames.",
            "fr": "Accorde +25% d'XP sur toute forge ou tannage et elargit legerement la zone cible sur le Fourneau et l'Enclume."
          }
        },
        {
          "id": "smith_emergency_weld",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/flint_and_steel.png",
          "requires": [
            "smith_recycle",
            "smith_quench_temper"
          ],
          "unlocks": [
            "smith_master_seal"
          ],
          "name": {
            "en": "Emergency Weld",
            "fr": "Soudure d'Urgence"
          },
          "desc": {
            "en": "Activate from the menu (1 XP level, 5 min cooldown): immediately restores 30% durability on all equipped armor and your held item.",
            "fr": "Activable depuis le menu (1 niveau XP, recharge 5 min) : repare immediatement 30% de toute votre armure equipee et de l'objet en main."
          }
        },
        {
          "id": "smith_steel_temper_2",
          "x": 7,
          "y": 2,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_chestplate.png",
          "requires": [
            "smith_steel_temper_1"
          ],
          "unlocks": [
            "smith_master_seal"
          ],
          "name": {
            "en": "Steel Tempering II",
            "fr": "Trempe de l'Acier II"
          },
          "desc": {
            "en": "40% chance to negate durability loss on weapons and armor in combat. Replaces Steel Tempering I.",
            "fr": "40% de chance d'annuler l'usure de vos armes et de votre armure en combat. Remplace Trempe de l'Acier I."
          }
        },
        {
          "id": "smith_artisan_salvage",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/diamond.png",
          "requires": [
            "smith_master_tanner",
            "smith_heat_economy"
          ],
          "unlocks": [
            "smith_master_seal"
          ],
          "name": {
            "en": "Artisan Salvage",
            "fr": "Recuperation d'Artisan"
          },
          "desc": {
            "en": "Improves Grindstone gear recycling yield (85% ratio) and adds a 25% chance for +1 Forge rating on Cauldron quench.",
            "fr": "Recupere plus de lingots au Recyclage sur Meule (85% ratio) et accorde 25% de chance de gagner +1 rang lors de la Trempe au chaudron."
          }
        },
        {
          "id": "smith_metal_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "smith_pure_alloy_2",
            "smith_recycle"
          ],
          "unlocks": [],
          "name": {
            "en": "Metal Magnet",
            "fr": "Aimant a Metaux"
          },
          "desc": {
            "en": "Automatically pulls dropped raw ores, ingots, nuggets, fuel, and metal gear around you (togglable in settings).",
            "fr": "Attire automatiquement les minerais bruts, lingots, pepites, combustibles et equipements droppes autour de vous (desactivable dans les parametres)."
          }
        },
        {
          "id": "smith_master_seal",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/smithing_table.png",
          "requires": [
            "smith_emergency_weld",
            "smith_steel_temper_2",
            "smith_artisan_salvage"
          ],
          "unlocks": [],
          "name": {
            "en": "Master Forging",
            "fr": "Maitre Forgeron"
          },
          "desc": {
            "en": "Unlocks Masterpiece 5/5 Forging quality (3 exclusive stats & stronger effects) and widens all Furnace & Anvil minigame target zones.",
            "fr": "Debloque les Chefs-d'Oeuvre rang 5/5 (3 stats exclusives et effets ameliores) et elargit les zones de precision au Fourneau et sur l'Enclume."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "miner",
      "chapterId": "role-miner",
      "color": "#57c5d8",
      "icon": "../assets/vanilla/diamond_pickaxe.png",
      "name": {
        "en": "Miner",
        "fr": "Mineur"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 23,
      "connectorCount": 26,
      "workstations": [],
      "activeAbility": {
        "id": "miner_tunnelier",
        "name": {
          "en": "Tunnelier 1x2",
          "fr": "Tunnelier 1x2"
        },
        "desc": {
          "en": "Breaks the target block and the block directly below it (y-1) for 10 minutes.",
          "fr": "Casse le bloc mine ainsi que le bloc juste en dessous (y-1) pendant 10 minutes."
        },
        "costXp": 1,
        "durationSec": 600
      },
      "skills": [
        {
          "id": "miner_iron_grip_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_pickaxe.png",
          "requires": [],
          "unlocks": [
            "miner_scavenger_1",
            "miner_iron_grip_2"
          ],
          "name": {
            "en": "Iron Grip I",
            "fr": "Poigne d'Acier I"
          },
          "desc": {
            "en": "Grants Haste I while holding a pickaxe.",
            "fr": "Applique Celerite I (Haste I) tant que vous tenez une pioche en main."
          }
        },
        {
          "id": "miner_vein_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/stone_pickaxe.png",
          "requires": [],
          "unlocks": [
            "miner_vein_2",
            "miner_double_vein_1"
          ],
          "name": {
            "en": "Vein Miner I",
            "fr": "Vein Miner I"
          },
          "desc": {
            "en": "While sneaking with a pickaxe, mining an ore breaks up to 4 connected ores of the same type (26 neighbors).",
            "fr": "Accroupi avec une pioche, casser un minerai detruit jusqu'a 4 minerais connectes du meme type (26 voisins)."
          }
        },
        {
          "id": "miner_mole_eye",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/ender_eye.png",
          "requires": [],
          "unlocks": [
            "miner_depth_cushion"
          ],
          "name": {
            "en": "Mole's Eye",
            "fr": "Oeil de Taupe"
          },
          "desc": {
            "en": "Automatically grants Night Vision while your Y coordinate is below 50.",
            "fr": "Applique automatiquement Vision Nocturne tant que votre altitude Y est inferieure a 50."
          }
        },
        {
          "id": "miner_scavenger_1",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_nugget.png",
          "requires": [
            "miner_iron_grip_1"
          ],
          "unlocks": [
            "miner_scavenger_2"
          ],
          "name": {
            "en": "Scavenger I",
            "fr": "Le Fouilleur I"
          },
          "desc": {
            "en": "10% chance to drop 1-2 iron nuggets, gold nuggets, or copper ingots when breaking gravel.",
            "fr": "10% de chance d'obtenir 1 a 2 pepites de fer, pepites d'or ou lingots de cuivre en cassant du gravier."
          }
        },
        {
          "id": "miner_iron_grip_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_pickaxe.png",
          "requires": [
            "miner_iron_grip_1"
          ],
          "unlocks": [
            "miner_economy",
            "miner_deepslate_breaker"
          ],
          "name": {
            "en": "Iron Grip II",
            "fr": "Poigne d'Acier II"
          },
          "desc": {
            "en": "Grants Haste II while holding a pickaxe. Replaces Iron Grip I.",
            "fr": "Applique Celerite II (Haste II) tant que vous tenez une pioche en main. Remplace Poigne d'Acier I."
          }
        },
        {
          "id": "miner_vein_2",
          "x": 7,
          "y": 6,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/iron_pickaxe.png",
          "requires": [
            "miner_vein_1"
          ],
          "unlocks": [
            "miner_deepslate_breaker",
            "miner_vein_3"
          ],
          "name": {
            "en": "Vein Miner II",
            "fr": "Vein Miner II"
          },
          "desc": {
            "en": "Increases Vein Miner limit to 8 connected ores of the same type. Replaces Vein Miner I.",
            "fr": "Augmente la limite du Vein Miner a 8 minerais connectes du meme type. Remplace Vein Miner I."
          }
        },
        {
          "id": "miner_double_vein_1",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/raw_iron.png",
          "requires": [
            "miner_vein_1"
          ],
          "unlocks": [
            "miner_double_vein_2"
          ],
          "name": {
            "en": "Double Vein I",
            "fr": "Double Veine I"
          },
          "desc": {
            "en": "5% chance to double raw ore loot when mining an ore (disabled with Silk Touch).",
            "fr": "5% de chance de doubler le loot brut d'un minerai mine (hors Toucher de Soie)."
          }
        },
        {
          "id": "miner_depth_cushion",
          "x": 11,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/feather.png",
          "requires": [
            "miner_mole_eye"
          ],
          "unlocks": [
            "miner_cold_blood"
          ],
          "name": {
            "en": "Depth Cushion",
            "fr": "Amorti des Profondeurs"
          },
          "desc": {
            "en": "Reduces fall damage by 50% while your Y coordinate is below 0.",
            "fr": "Reduit les degats de chute de 50% lorsque votre altitude Y est inferieure a 0."
          }
        },
        {
          "id": "miner_scavenger_2",
          "x": 1,
          "y": 4,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/gold_nugget.png",
          "requires": [
            "miner_scavenger_1"
          ],
          "unlocks": [
            "miner_scavenger_3"
          ],
          "name": {
            "en": "Scavenger II",
            "fr": "Le Fouilleur II"
          },
          "desc": {
            "en": "20% chance to drop nuggets/copper when breaking gravel. Replaces Scavenger I.",
            "fr": "20% de chance d'obtenir des pepites/cuivre en cassant du gravier. Remplace Le Fouilleur I."
          }
        },
        {
          "id": "miner_economy",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/experience_bottle.png",
          "requires": [
            "miner_iron_grip_2"
          ],
          "unlocks": [
            "miner_obsidian_breaker"
          ],
          "name": {
            "en": "Economy",
            "fr": "Economie"
          },
          "desc": {
            "en": "25% chance to save/restore 1 durability point on your pickaxe when breaking a block.",
            "fr": "25% de chance de preserver/restaurer 1 point de durabilite de votre pioche apres avoir casse un bloc."
          }
        },
        {
          "id": "miner_deepslate_breaker",
          "x": 5,
          "y": 4,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/coal.png",
          "requires": [
            "miner_iron_grip_2",
            "miner_vein_2"
          ],
          "unlocks": [
            "miner_tunnelier"
          ],
          "name": {
            "en": "Deepslate Breaker",
            "fr": "Brise-Deepslate"
          },
          "desc": {
            "en": "Automatically grants Haste when aiming at or mining any deepslate block.",
            "fr": "Applique automatiquement Haste en visant ou minant un bloc contenant de l'ardoise des abimes (deepslate)."
          }
        },
        {
          "id": "miner_vein_3",
          "x": 7,
          "y": 4,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/diamond_pickaxe.png",
          "requires": [
            "miner_vein_2"
          ],
          "unlocks": [
            "miner_vein_4"
          ],
          "name": {
            "en": "Vein Miner III",
            "fr": "Vein Miner III"
          },
          "desc": {
            "en": "Increases Vein Miner limit to 12 connected ores of the same type. Replaces Vein Miner II.",
            "fr": "Augmente la limite du Vein Miner a 12 minerais connectes du meme type. Remplace Vein Miner II."
          }
        },
        {
          "id": "miner_double_vein_2",
          "x": 9,
          "y": 4,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/raw_gold.png",
          "requires": [
            "miner_double_vein_1"
          ],
          "unlocks": [
            "miner_double_vein_3"
          ],
          "name": {
            "en": "Double Vein II",
            "fr": "Double Veine II"
          },
          "desc": {
            "en": "10% chance to double raw ore loot when mining an ore. Replaces Double Vein I.",
            "fr": "10% de chance de doubler le loot brut d'un minerai mine. Remplace Double Veine I."
          }
        },
        {
          "id": "miner_cold_blood",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/milk_bucket.png",
          "requires": [
            "miner_depth_cushion"
          ],
          "unlocks": [
            "miner_silent_step"
          ],
          "name": {
            "en": "Cold Blood",
            "fr": "Sang-Froid"
          },
          "desc": {
            "en": "Immediately removes the Darkness effect whenever it is applied.",
            "fr": "Retire immediatement l'effet Obscurite (Darkness) des qu'il est applique."
          }
        },
        {
          "id": "miner_scavenger_3",
          "x": 1,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/copper_ingot.png",
          "requires": [
            "miner_scavenger_2"
          ],
          "unlocks": [
            "miner_magnet"
          ],
          "name": {
            "en": "Scavenger III",
            "fr": "Le Fouilleur III"
          },
          "desc": {
            "en": "30% chance to drop nuggets/copper when breaking gravel. Replaces Scavenger II.",
            "fr": "30% de chance d'obtenir des pepites/cuivre en cassant du gravier. Remplace Le Fouilleur II."
          }
        },
        {
          "id": "miner_obsidian_breaker",
          "x": 3,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/obsidian.png",
          "requires": [
            "miner_economy"
          ],
          "unlocks": [
            "miner_magnet"
          ],
          "name": {
            "en": "Obsidian Breaker",
            "fr": "Brise-Obsidienne"
          },
          "desc": {
            "en": "Grants Haste IV while aiming at obsidian or crying obsidian.",
            "fr": "Applique Celerite IV (Haste IV) lorsque vous visez de l'obsidienne ou de l'obsidienne pleureuse."
          }
        },
        {
          "id": "miner_tunnelier",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/golden_pickaxe.png",
          "requires": [
            "miner_deepslate_breaker"
          ],
          "unlocks": [
            "miner_excavator"
          ],
          "name": {
            "en": "1x2 Tunneler",
            "fr": "Tunnelier 1x2"
          },
          "desc": {
            "en": "Activate in menu (1 XP level, 10 min): mining a block with a pickaxe also mines the pickaxe-mineable block directly beneath it (y - 1).",
            "fr": "Activable via le menu (1 niveau XP, duree 10 min) : miner un bloc a la pioche casse aussi le bloc juste en dessous (y - 1)."
          }
        },
        {
          "id": "miner_vein_4",
          "x": 7,
          "y": 2,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/netherite_pickaxe.png",
          "requires": [
            "miner_vein_3"
          ],
          "unlocks": [
            "miner_vein_stones"
          ],
          "name": {
            "en": "Vein Miner IV",
            "fr": "Vein Miner IV"
          },
          "desc": {
            "en": "Increases Vein Miner limit to 16 connected ores of the same type. Replaces Vein Miner III.",
            "fr": "Augmente la limite du Vein Miner a 16 minerais connectes du meme type. Remplace Vein Miner III."
          }
        },
        {
          "id": "miner_double_vein_3",
          "x": 9,
          "y": 2,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond.png",
          "requires": [
            "miner_double_vein_2"
          ],
          "unlocks": [],
          "name": {
            "en": "Double Vein III",
            "fr": "Double Veine III"
          },
          "desc": {
            "en": "15% chance to double raw ore loot when mining an ore. Replaces Double Vein II.",
            "fr": "15% de chance de doubler le loot brut d'un minerai mine. Remplace Double Veine II."
          }
        },
        {
          "id": "miner_silent_step",
          "x": 11,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_boots.png",
          "requires": [
            "miner_cold_blood"
          ],
          "unlocks": [],
          "name": {
            "en": "Silent Step",
            "fr": "Pas Silencieux"
          },
          "desc": {
            "en": "Grants Speed II while sneaking below Y = 0.",
            "fr": "Applique Vitesse II tant que vous etes accroupi sous la couche Y = 0."
          }
        },
        {
          "id": "miner_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "miner_scavenger_3",
            "miner_obsidian_breaker"
          ],
          "unlocks": [],
          "name": {
            "en": "Rubble Magnet",
            "fr": "Aimant a Gravats"
          },
          "desc": {
            "en": "Directly inserts items dropped around broken blocks into your inventory (togglable in settings).",
            "fr": "Insere directement dans votre inventaire les objets droppes autour des blocs mines (desactivable dans les parametres)."
          }
        },
        {
          "id": "miner_excavator",
          "x": 5,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/iron_shovel.png",
          "requires": [
            "miner_tunnelier"
          ],
          "unlocks": [],
          "name": {
            "en": "Excavator",
            "fr": "Excavateur"
          },
          "desc": {
            "en": "Breaking a block with a pickaxe instantly breaks directly adjacent (6 faces) gravel and dirt blocks.",
            "fr": "Casser un bloc a la pioche detruit instantanement les blocs de gravier et de terre directement adjacents (6 faces)."
          }
        },
        {
          "id": "miner_vein_stones",
          "x": 7,
          "y": 0,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/cobblestone.png",
          "requires": [
            "miner_vein_4"
          ],
          "unlocks": [],
          "name": {
            "en": "Vein Miner: Stones",
            "fr": "Vein Miner : Roches"
          },
          "desc": {
            "en": "Applies Vein Miner (up to 16 blocks) to calcite, andesite, diorite, granite, and tuff while sneaking.",
            "fr": "Applique le Vein Miner (jusqu'a 16 blocs) sur la calcite, l'andesite, la diorite, le granite et le tuf en sneak."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        }
      ]
    },
    {
      "id": "lumberjack",
      "chapterId": "role-lumberjack",
      "color": "#8ed965",
      "icon": "../assets/vanilla/diamond_axe.png",
      "name": {
        "en": "Lumberjack",
        "fr": "Bucheron"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 14,
      "connectorCount": 21,
      "workstations": [],
      "activeAbility": null,
      "skills": [
        {
          "id": "lumber_treecap_1",
          "x": 4,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/stone_axe.png",
          "requires": [],
          "unlocks": [
            "lumber_auto_replant",
            "lumber_treecap_2",
            "lumber_flash_cut_1"
          ],
          "name": {
            "en": "Tree Capitator I",
            "fr": "Tree Capitator I"
          },
          "desc": {
            "en": "While sneaking with an axe, chopping a log fells up to 16 connected logs of the same type.",
            "fr": "Accroupi avec une hache, casser une buche abat jusqu'a 16 buches connectees du meme type."
          }
        },
        {
          "id": "lumber_light_step",
          "x": 8,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/sugar.png",
          "requires": [],
          "unlocks": [
            "lumber_flash_cut_1",
            "lumber_heavy_strike_1"
          ],
          "name": {
            "en": "Light Step",
            "fr": "Pas Leger"
          },
          "desc": {
            "en": "Grants Speed I while holding an axe.",
            "fr": "Applique Vitesse I tant que vous tenez une hache en main."
          }
        },
        {
          "id": "lumber_auto_replant",
          "x": 2,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/oak_sapling.png",
          "requires": [
            "lumber_treecap_1"
          ],
          "unlocks": [
            "lumber_apple_harvester"
          ],
          "name": {
            "en": "Auto Replant",
            "fr": "Reboisement Auto"
          },
          "desc": {
            "en": "Automatically plants the matching sapling when chopping a base log standing on natural soil.",
            "fr": "Replant automatiquement la pousse correspondante lorsqu'une buche de base posee sur sol naturel est abattue."
          }
        },
        {
          "id": "lumber_treecap_2",
          "x": 4,
          "y": 6,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/iron_axe.png",
          "requires": [
            "lumber_treecap_1"
          ],
          "unlocks": [
            "lumber_treecap_3"
          ],
          "name": {
            "en": "Tree Capitator II",
            "fr": "Tree Capitator II"
          },
          "desc": {
            "en": "Increases Tree Capitator limit to 48 connected logs. Replaces Tree Capitator I.",
            "fr": "Augmente la limite du Tree Capitator a 48 buches connectees. Remplace Tree Capitator I."
          }
        },
        {
          "id": "lumber_flash_cut_1",
          "x": 6,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/golden_axe.png",
          "requires": [
            "lumber_treecap_1",
            "lumber_light_step"
          ],
          "unlocks": [
            "lumber_flash_cut_2"
          ],
          "name": {
            "en": "Flash Cut I",
            "fr": "Taille Eclair I"
          },
          "desc": {
            "en": "Grants Haste I while holding an axe.",
            "fr": "Applique Celerite I (Haste I) tant que vous tenez une hache en main."
          }
        },
        {
          "id": "lumber_heavy_strike_1",
          "x": 10,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_sword.png",
          "requires": [
            "lumber_light_step"
          ],
          "unlocks": [
            "lumber_heavy_strike_2"
          ],
          "name": {
            "en": "Heavy Strike I",
            "fr": "Frappe Lourde I"
          },
          "desc": {
            "en": "Increases melee damage dealt with an axe by +15%.",
            "fr": "Augmente les degats infliges avec une hache de +15%."
          }
        },
        {
          "id": "lumber_apple_harvester",
          "x": 2,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/apple.png",
          "requires": [
            "lumber_auto_replant"
          ],
          "unlocks": [
            "lumber_golden_apple"
          ],
          "name": {
            "en": "Apple Harvester",
            "fr": "Recolteur de Pommes"
          },
          "desc": {
            "en": "Triples the chance of obtaining apples when breaking oak or dark oak leaves.",
            "fr": "Triple les chances d'obtenir des pommes lors de la destruction de feuilles de chene ou de chene noir."
          }
        },
        {
          "id": "lumber_treecap_3",
          "x": 4,
          "y": 4,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/diamond_axe.png",
          "requires": [
            "lumber_treecap_2"
          ],
          "unlocks": [
            "lumber_fast_strip"
          ],
          "name": {
            "en": "Tree Capitator III",
            "fr": "Tree Capitator III"
          },
          "desc": {
            "en": "Fells up to 128 connected logs and automatically breaks connected tree leaves with natural drops.",
            "fr": "Abat jusqu'a 128 buches connectees et detruit automatiquement les feuilles de l'arbre avec leurs loots naturels."
          }
        },
        {
          "id": "lumber_flash_cut_2",
          "x": 6,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/netherite_axe.png",
          "requires": [
            "lumber_flash_cut_1"
          ],
          "unlocks": [
            "lumber_magnet"
          ],
          "name": {
            "en": "Flash Cut II",
            "fr": "Taille Eclair II"
          },
          "desc": {
            "en": "Grants Haste II while holding an axe. Replaces Flash Cut I.",
            "fr": "Applique Celerite II (Haste II) tant que vous tenez une hache en main. Remplace Taille Eclair I."
          }
        },
        {
          "id": "lumber_heavy_strike_2",
          "x": 10,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_sword.png",
          "requires": [
            "lumber_heavy_strike_1"
          ],
          "unlocks": [
            "lumber_shield_breaker"
          ],
          "name": {
            "en": "Heavy Strike II",
            "fr": "Frappe Lourde II"
          },
          "desc": {
            "en": "Increases melee damage dealt with an axe by +30%. Replaces Heavy Strike I.",
            "fr": "Augmente les degats infliges avec une hache de +30%. Remplace Frappe Lourde I."
          }
        },
        {
          "id": "lumber_golden_apple",
          "x": 2,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/golden_apple.png",
          "requires": [
            "lumber_apple_harvester"
          ],
          "unlocks": [],
          "name": {
            "en": "Golden Apple Seeker",
            "fr": "Chercheur de Pommes d'Or"
          },
          "desc": {
            "en": "1% chance to drop a Golden Apple when felling a dark oak tree.",
            "fr": "1% de chance d'obtenir une Pomme d'Or lors de l'abattage d'un arbre de chene noir."
          }
        },
        {
          "id": "lumber_fast_strip",
          "x": 4,
          "y": 2,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/oak_log.png",
          "requires": [
            "lumber_treecap_3"
          ],
          "unlocks": [
            "lumber_magnet"
          ],
          "name": {
            "en": "Fast Stripping",
            "fr": "Ecorcage Rapide"
          },
          "desc": {
            "en": "Sneak + right-click a log with an axe to strip all logs within a 3x3x3 cube.",
            "fr": "Sneak + clic droit avec une hache sur une buche pour ecorcer toutes les buches dans un rayon de 3x3x3."
          }
        },
        {
          "id": "lumber_shield_breaker",
          "x": 10,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "assets/ui/icon_shield.png",
          "requires": [
            "lumber_heavy_strike_2"
          ],
          "unlocks": [],
          "name": {
            "en": "Shield Breaker",
            "fr": "Brise-Bouclier"
          },
          "desc": {
            "en": "Hitting an entity with an axe applies Slowness II for 1 second (10-second internal cooldown).",
            "fr": "Frapper une entite a la hache lui applique Lenteur II pendant 1 seconde (cooldown interne : 10 secondes)."
          }
        },
        {
          "id": "lumber_magnet",
          "x": 6,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "lumber_fast_strip",
            "lumber_flash_cut_2"
          ],
          "unlocks": [],
          "name": {
            "en": "Timber Magnet",
            "fr": "Aimant a Bois"
          },
          "desc": {
            "en": "Directly inserts chopped logs, leaves, apples, and saplings into your inventory (togglable in settings).",
            "fr": "Insere directement les buches, feuilles, pommes et pousses coupees dans votre inventaire (desactivable dans les parametres)."
          }
        }
      ],
      "connectors": [
        {
          "x": 2,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 4,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 5,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 6,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 7,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 9,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 10,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 2,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 6,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 10,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 2,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 6,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 6,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 10,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 6,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "rancher",
      "chapterId": "role-rancher",
      "color": "#e67e22",
      "icon": "../assets/vanilla/wheat.png",
      "name": {
        "en": "Rancher",
        "fr": "Eleveur"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 20,
      "connectorCount": 36,
      "workstations": [
        "minecraft:hay_block",
        "minecraft:beehive"
      ],
      "activeAbility": {
        "id": "rancher_herd_blessing",
        "name": {
          "en": "Herd Blessing",
          "fr": "Benediction du Troupeau"
        },
        "desc": {
          "en": "16-block radius: heals animals to full HP, instantly matures babies, grants Resistance II & Regeneration II (2m).",
          "fr": "Rayon de 16 blocs : soigne tous les animaux, fait grandir les bebes instantanement, accorde Resistance II et Regeneration II (2 min)."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "rancher_herd_feed_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/wheat.png",
          "requires": [],
          "unlocks": [
            "rancher_twin_birth_1",
            "rancher_herd_feed_2",
            "rancher_vital_milk"
          ],
          "name": {
            "en": "Herd Feeding I",
            "fr": "Nourrissage en Groupe I"
          },
          "desc": {
            "en": "Sneak + right-click a Hay Block holding animal food: gathers & heals up to 6 matching animals within 7 blocks.",
            "fr": "Sneak + clic droit sur un Bloc de Foin avec nourriture : rassemble et soigne jusqu'a 6 animaux compatibles dans un rayon de 7 blocs."
          }
        },
        {
          "id": "rancher_golden_shears_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/shears.png",
          "requires": [],
          "unlocks": [
            "rancher_vital_milk",
            "rancher_golden_shears_2",
            "rancher_pastoral_step"
          ],
          "name": {
            "en": "Golden Shears I",
            "fr": "Tonte Doree I"
          },
          "desc": {
            "en": "Shearing sheep grants +1 to +2 bonus matching wool and a 30% chance to save shear durability.",
            "fr": "Tondre un mouton donne +1 a +2 laines supplementaires et 30% de chance de preserver la durabilite des cisailles."
          }
        },
        {
          "id": "rancher_butcher_1",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/beef.png",
          "requires": [],
          "unlocks": [
            "rancher_butcher_2"
          ],
          "name": {
            "en": "Butcher I",
            "fr": "Boucher I"
          },
          "desc": {
            "en": "Harvesting livestock yields +1 bonus meat drop.",
            "fr": "Octroie +1 viande bonus a la mort des animaux d'elevage que vous tuez."
          }
        },
        {
          "id": "rancher_twin_birth_1",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/egg.png",
          "requires": [
            "rancher_herd_feed_1"
          ],
          "unlocks": [
            "rancher_twin_birth_2"
          ],
          "name": {
            "en": "Twin Birth I",
            "fr": "Naissances Gemellaires I"
          },
          "desc": {
            "en": "35% chance for a twin baby to spawn whenever animals breed near you (14-block radius).",
            "fr": "35% de chance de faire naitre un bebe jumeau supplementaire lors de la reproduction d'animaux dans un rayon de 14 blocs."
          }
        },
        {
          "id": "rancher_herd_feed_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/hay_block.png",
          "requires": [
            "rancher_herd_feed_1"
          ],
          "unlocks": [
            "rancher_rapid_growth"
          ],
          "name": {
            "en": "Herd Feeding II",
            "fr": "Nourrissage en Groupe II"
          },
          "desc": {
            "en": "Gathers & heals up to 12 animals within 12 blocks and grants them Regeneration I for 6 seconds. Replaces Herd Feeding I.",
            "fr": "Rassemble et soigne jusqu'a 12 animaux dans un rayon de 12 blocs avec Regeneration I pendant 6 secondes. Remplace Nourrissage I."
          }
        },
        {
          "id": "rancher_vital_milk",
          "x": 5,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/milk_bucket.png",
          "requires": [
            "rancher_herd_feed_1",
            "rancher_golden_shears_1"
          ],
          "unlocks": [
            "rancher_beekeeper"
          ],
          "name": {
            "en": "Artisan Milking",
            "fr": "Traite Artisanale"
          },
          "desc": {
            "en": "Sneak + right-click a cow, mooshroom, or goat with an empty bucket to craft shareable Rich Milk (Regeneration II 12s & Absorption I 45s for anyone).",
            "fr": "Sneak + clic droit sur vache, champimeuh ou chevre avec seau vide : obtient du Lait Riche partageable (Regeneration II 12s & Absorption I 45s pour tout joueur)."
          }
        },
        {
          "id": "rancher_golden_shears_2",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/string.png",
          "requires": [
            "rancher_golden_shears_1"
          ],
          "unlocks": [
            "rancher_mount_bond"
          ],
          "name": {
            "en": "Golden Shears II",
            "fr": "Tonte Doree II"
          },
          "desc": {
            "en": "Grants +2 to +3 bonus wool, 50% shear durability save, and a 35% chance for sheep to regrow wool instantly. Replaces Golden Shears I.",
            "fr": "Donne +2 a +3 laines, 50% d'economie de cisailles et 35% de chance que la laine repousse immediatement. Remplace Tonte Doree I."
          }
        },
        {
          "id": "rancher_pastoral_step",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/lead.png",
          "requires": [
            "rancher_golden_shears_1"
          ],
          "unlocks": [
            "rancher_mount_bond",
            "rancher_leatherworker"
          ],
          "name": {
            "en": "Pastoral Step",
            "fr": "Pas Pastoral"
          },
          "desc": {
            "en": "Grants Speed I while holding wheat, shears, a lead, or a brush, and permanently reduces fall damage by 35%.",
            "fr": "Applique Vitesse I en tenant ble, cisailles, laisse ou pinceau et reduit les degats de chute de 35%."
          }
        },
        {
          "id": "rancher_butcher_2",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/porkchop.png",
          "requires": [
            "rancher_butcher_1"
          ],
          "unlocks": [
            "rancher_leatherworker",
            "rancher_cooked_cut"
          ],
          "name": {
            "en": "Butcher II",
            "fr": "Boucher II"
          },
          "desc": {
            "en": "Increases bonus meat yield from livestock to +2 per kill. Replaces Butcher I.",
            "fr": "Augmente le bonus de viande a +2 par animal d'elevage tue. Remplace Boucher I."
          }
        },
        {
          "id": "rancher_twin_birth_2",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/golden_carrot.png",
          "requires": [
            "rancher_twin_birth_1"
          ],
          "unlocks": [
            "rancher_animal_magnet"
          ],
          "name": {
            "en": "Twin Birth II",
            "fr": "Naissances Gemellaires II"
          },
          "desc": {
            "en": "70% chance for twin births within 16 blocks (preserves sheep wool color). Replaces Twin Birth I.",
            "fr": "70% de chance de jumeaux dans un rayon de 16 blocs (conserve la couleur des moutons). Remplace Naissances Gemellaires I."
          }
        },
        {
          "id": "rancher_rapid_growth",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/golden_apple.png",
          "requires": [
            "rancher_herd_feed_2"
          ],
          "unlocks": [
            "rancher_royal_jelly",
            "rancher_animal_magnet"
          ],
          "name": {
            "en": "Rapid Growth",
            "fr": "Croissance Rapide"
          },
          "desc": {
            "en": "Sneak + right-click a baby animal with matching food to mature it into an adult instantly.",
            "fr": "Sneak + clic droit sur un bebe animal avec sa nourriture favorite pour le faire grandir instantanement."
          }
        },
        {
          "id": "rancher_beekeeper",
          "x": 5,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/honeycomb.png",
          "requires": [
            "rancher_vital_milk"
          ],
          "unlocks": [
            "rancher_royal_jelly"
          ],
          "name": {
            "en": "Peaceful Beekeeping",
            "fr": "Apiculture Pacifique"
          },
          "desc": {
            "en": "Sneak + right-click a full Beehive (honey 5) without angering bees: harvests 2-3 Honey Bottles or 5-6 Honeycombs.",
            "fr": "Sneak + clic droit sur une Ruche pleine (miel 5) sans facher les abeilles : recolte 2 a 3 fioles de miel ou 5 a 6 rayons de miel."
          }
        },
        {
          "id": "rancher_mount_bond",
          "x": 7,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/saddle.png",
          "requires": [
            "rancher_golden_shears_2",
            "rancher_pastoral_step"
          ],
          "unlocks": [
            "rancher_pack_alpha"
          ],
          "name": {
            "en": "Mount Bond",
            "fr": "Lien Equestre"
          },
          "desc": {
            "en": "Mounts you ride (horse, donkey, mule, camel, llama, pig, strider) continuously gain Speed II, Jump Boost I, and Resistance I.",
            "fr": "Votre monture actuelle (cheval, ane, mulet, chameau, lama, cochon, arpenteur) recoit Vitesse II, Detente I et Resistance I en continu."
          }
        },
        {
          "id": "rancher_leatherworker",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/leather.png",
          "requires": [
            "rancher_pastoral_step",
            "rancher_butcher_2"
          ],
          "unlocks": [
            "rancher_herd_shield"
          ],
          "name": {
            "en": "Master Tanner",
            "fr": "Maitre Tanneur"
          },
          "desc": {
            "en": "Livestock yields +1 to +2 bonus leather, rabbit hide, wool, feathers, or ink sacs.",
            "fr": "Les animaux d'elevage donnent +1 a +2 cuirs, peaux de lapin, laines, plumes ou poches d'encre supplementaires."
          }
        },
        {
          "id": "rancher_cooked_cut",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/cooked_beef.png",
          "requires": [
            "rancher_butcher_2"
          ],
          "unlocks": [
            "rancher_herd_shield"
          ],
          "name": {
            "en": "Prime Cut",
            "fr": "Coupe de Premier Choix"
          },
          "desc": {
            "en": "50% chance (100% while sneaking) for Butcher bonus meat to drop pre-cooked.",
            "fr": "50% de chance (100% en sneak) que le bonus de viande du Boucher soit cuit directement."
          }
        },
        {
          "id": "rancher_royal_jelly",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/honey_bottle.png",
          "requires": [
            "rancher_rapid_growth",
            "rancher_beekeeper"
          ],
          "unlocks": [
            "rancher_herd_blessing"
          ],
          "name": {
            "en": "Royal Honey",
            "fr": "Miel Royal"
          },
          "desc": {
            "en": "Upgrades hive bottles into shareable Royal Honey (Speed II 20s, Haste I 30s & Saturation for any player).",
            "fr": "Transforme les fioles recoltees aux ruches en Miel Royal partageable (Vitesse II 20s, Celerite I 30s & Saturation pour tout joueur)."
          }
        },
        {
          "id": "rancher_pack_alpha",
          "x": 7,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/bone.png",
          "requires": [
            "rancher_mount_bond"
          ],
          "unlocks": [
            "rancher_herd_blessing"
          ],
          "name": {
            "en": "Pack Alpha",
            "fr": "Alpha de la Meute"
          },
          "desc": {
            "en": "Tamed pets (wolves, cats, parrots) owned by you within 16 blocks gain Strength I, Resistance I, and Regeneration I.",
            "fr": "Vos familiers apprivoises (loups, chats, perroquets) dans un rayon de 16 blocs recoivent Force I, Resistance I et Regeneration I."
          }
        },
        {
          "id": "rancher_herd_shield",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/feather.png",
          "requires": [
            "rancher_leatherworker",
            "rancher_cooked_cut"
          ],
          "unlocks": [
            "rancher_herd_blessing"
          ],
          "name": {
            "en": "Herd Sanctuary",
            "fr": "Sanctuaire du Troupeau"
          },
          "desc": {
            "en": "While at least 2 passive animals are within 10 blocks, reduces incoming physical damage by 15% and grants slow Regeneration.",
            "fr": "Tant qu'au moins 2 animaux passifs se trouvent dans un rayon de 10 blocs, reduit les degats physiques subis de 15% et regenere lentement."
          }
        },
        {
          "id": "rancher_animal_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "rancher_twin_birth_2",
            "rancher_rapid_growth"
          ],
          "unlocks": [],
          "name": {
            "en": "Ranch Magnet",
            "fr": "Aimant Animal"
          },
          "desc": {
            "en": "Directly inserts dropped wool, leather, feathers, meat, eggs, and honeycomb around you (togglable in settings).",
            "fr": "Attire directement dans votre inventaire laine, cuir, plumes, viandes, oeufs et rayons de miel (desactivable dans les parametres)."
          }
        },
        {
          "id": "rancher_herd_blessing",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/brush.png",
          "requires": [
            "rancher_royal_jelly",
            "rancher_pack_alpha",
            "rancher_herd_shield"
          ],
          "unlocks": [],
          "name": {
            "en": "Herd Blessing & Brush",
            "fr": "Benediction du Troupeau"
          },
          "desc": {
            "en": "Menu active (1 XP Lvl, 5m CD): heals, grows babies & buffs all animals in 16b. Also Sneak+Click mounts/pets with a Brush to bless them for 5 minutes!",
            "fr": "Actif menu (1 Niv. XP, CD 5m) : soigne, fait grandir et buff tous les animaux en 16b. Aussi Sneak+Clic avec un Pinceau sur monture/familier pour le benir 5 min !"
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "farmer",
      "chapterId": "role-farmer",
      "color": "#7be356",
      "icon": "../assets/vanilla/diamond_hoe.png",
      "name": {
        "en": "Farmer",
        "fr": "Fermier"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 20,
      "connectorCount": 36,
      "workstations": [
        "minecraft:composter",
        "minecraft:smoker"
      ],
      "activeAbility": {
        "id": "farmer_harvest_surge",
        "name": {
          "en": "Harvest Surge",
          "fr": "Essor de Moisson"
        },
        "desc": {
          "en": "17x6x17 area: hydrates all farmland (moisture 7) and advances crops by +3 to +5 stages.",
          "fr": "Zone 17x6x17 : hydrate toute la terre labouree (humidite 7) et accelere les cultures de +3 a +5 stades."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "farmer_area_harvest_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/iron_hoe.png",
          "requires": [],
          "unlocks": [
            "farmer_area_till",
            "farmer_area_harvest_2",
            "farmer_compost_master"
          ],
          "name": {
            "en": "Area Harvest I",
            "fr": "Recolte en Zone I"
          },
          "desc": {
            "en": "Sneak + right-click a mature crop with a hoe: harvests & automatically replants a 3x3 area.",
            "fr": "Sneak + clic droit sur une culture mure avec une houe : recolte et replante automatiquement en zone 3x3."
          }
        },
        {
          "id": "farmer_bountiful_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/wheat.png",
          "requires": [],
          "unlocks": [
            "farmer_compost_master",
            "farmer_bountiful_2",
            "farmer_field_stride"
          ],
          "name": {
            "en": "Bountiful Harvest I",
            "fr": "Recolte Abondante I"
          },
          "desc": {
            "en": "15% chance to gain +1 extra crop drop when harvesting mature crops.",
            "fr": "15% de chance d'obtenir +1 ressource bonus lors de la recolte d'une culture mure."
          }
        },
        {
          "id": "farmer_hoe_mastery_1",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/wheat_seeds.png",
          "requires": [],
          "unlocks": [
            "farmer_hoe_mastery_2"
          ],
          "name": {
            "en": "Hoe Mastery I",
            "fr": "Maitrise de la Houe I"
          },
          "desc": {
            "en": "Grants Haste I while holding a hoe and a 30% chance to preserve hoe durability during field work.",
            "fr": "Applique Celerite I (Haste I) houe en main et 30% de chance d'economiser la durabilite de votre houe."
          }
        },
        {
          "id": "farmer_area_till",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "active",
          "icon": "../assets/vanilla/golden_hoe.png",
          "requires": [
            "farmer_area_harvest_1"
          ],
          "unlocks": [
            "farmer_green_thumb"
          ],
          "name": {
            "en": "Area Tilling",
            "fr": "Labourage en Zone"
          },
          "desc": {
            "en": "Sneak + right-click dirt or grass with a hoe to till a 3x3 farmland plot at once.",
            "fr": "Sneak + clic droit sur de la terre ou de l'herbe avec une houe pour labourer une parcelle 3x3 d'un coup."
          }
        },
        {
          "id": "farmer_area_harvest_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/diamond_hoe.png",
          "requires": [
            "farmer_area_harvest_1"
          ],
          "unlocks": [
            "farmer_bone_bloom"
          ],
          "name": {
            "en": "Area Harvest II",
            "fr": "Recolte en Zone II"
          },
          "desc": {
            "en": "Expands hoe area harvest & auto-replanting to a 5x5 grid. Replaces Area Harvest I.",
            "fr": "Etend la recolte et la replantation automatique a la houe a une grille 5x5. Remplace Recolte en Zone I."
          }
        },
        {
          "id": "farmer_compost_master",
          "x": 5,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/bone_meal.png",
          "requires": [
            "farmer_area_harvest_1",
            "farmer_bountiful_1"
          ],
          "unlocks": [
            "farmer_artisan_cook"
          ],
          "name": {
            "en": "Rapid Composting",
            "fr": "Compostage Rapide"
          },
          "desc": {
            "en": "Sneak + right-click a Composter with seeds, crops, or leaves (up to 32) for instant enriched Bone Meal.",
            "fr": "Sneak + clic droit sur un Composteur avec graines, recoltes ou feuilles (jusqu'a 32) pour obtenir instantanement de la Poudre d'Os."
          }
        },
        {
          "id": "farmer_bountiful_2",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/carrot.png",
          "requires": [
            "farmer_bountiful_1"
          ],
          "unlocks": [
            "farmer_hydration_aura"
          ],
          "name": {
            "en": "Bountiful Harvest II",
            "fr": "Recolte Abondante II"
          },
          "desc": {
            "en": "Increases bonus crop drop chance to 30% on mature crops. Replaces Bountiful Harvest I.",
            "fr": "Augmente a 30% la chance de ressource bonus sur cultures mures. Remplace Recolte Abondante I."
          }
        },
        {
          "id": "farmer_field_stride",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/bread.png",
          "requires": [
            "farmer_bountiful_1"
          ],
          "unlocks": [
            "farmer_hydration_aura",
            "farmer_bountiful_3"
          ],
          "name": {
            "en": "Field Stride",
            "fr": "Pas des Champs"
          },
          "desc": {
            "en": "Grants Speed I and gently restores hunger while holding a hoe, seeds, or Bone Meal.",
            "fr": "Applique Vitesse I et restaure doucement la faim tant que vous tenez une houe, des graines ou de la Poudre d'Os."
          }
        },
        {
          "id": "farmer_hoe_mastery_2",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/netherite_hoe.png",
          "requires": [
            "farmer_hoe_mastery_1"
          ],
          "unlocks": [
            "farmer_bountiful_3",
            "farmer_herbal_immunity"
          ],
          "name": {
            "en": "Hoe Mastery II",
            "fr": "Maitrise de la Houe II"
          },
          "desc": {
            "en": "Grants Haste II while holding a hoe and 50% hoe durability preservation. Replaces Hoe Mastery I.",
            "fr": "Applique Celerite II houe en main et 50% d'economie de durabilite. Remplace Maitrise de la Houe I."
          }
        },
        {
          "id": "farmer_green_thumb",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/melon_slice.png",
          "requires": [
            "farmer_area_till"
          ],
          "unlocks": [
            "farmer_crop_magnet"
          ],
          "name": {
            "en": "Green Thumb",
            "fr": "Pouce Vert"
          },
          "desc": {
            "en": "35% chance for crops auto-replanted by Area Harvest to start immediately at growth stage 2.",
            "fr": "35% de chance que les cultures replantees en zone demarrent directement au stade de croissance 2."
          }
        },
        {
          "id": "farmer_bone_bloom",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/apple.png",
          "requires": [
            "farmer_area_harvest_2"
          ],
          "unlocks": [
            "farmer_master_chef",
            "farmer_crop_magnet"
          ],
          "name": {
            "en": "Bone Bloom",
            "fr": "Engrais en Zone"
          },
          "desc": {
            "en": "Sneak + right-click any crop holding Bone Meal to boost growth across a 3x3 area using 1 Bone Meal.",
            "fr": "Sneak + clic droit sur une culture avec de la Poudre d'Os pour stimuler toute une zone 3x3 avec 1 seule poudre."
          }
        },
        {
          "id": "farmer_artisan_cook",
          "x": 5,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/baked_potato.png",
          "requires": [
            "farmer_compost_master"
          ],
          "unlocks": [
            "farmer_master_chef"
          ],
          "name": {
            "en": "Gourmet Cooking",
            "fr": "Cuisine Artisanale"
          },
          "desc": {
            "en": "Sneak + right-click a Smoker with cooked food, bread, pies, or soups: 3D heat minigame cooking up to 4 shareable dishes (max [4/5]).",
            "fr": "Sneak + clic droit sur un Fumoir avec plat, pain, tarte ou soupe : mini-jeu 3D preparant jusqu'a 4 plats partageables (max [4/5])."
          }
        },
        {
          "id": "farmer_hydration_aura",
          "x": 7,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/water_bucket.png",
          "requires": [
            "farmer_bountiful_2",
            "farmer_field_stride"
          ],
          "unlocks": [
            "farmer_golden_harvest"
          ],
          "name": {
            "en": "Irrigation Aura",
            "fr": "Aura d'Irrigation"
          },
          "desc": {
            "en": "Automatically hydrates nearby farmland (9x3x9) and gently nurtures immature crops around you.",
            "fr": "Hydrate automatiquement la terre labouree autour de vous (9x3x9) et accelere doucement vos cultures."
          }
        },
        {
          "id": "farmer_bountiful_3",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/golden_carrot.png",
          "requires": [
            "farmer_field_stride",
            "farmer_hoe_mastery_2"
          ],
          "unlocks": [
            "farmer_nature_vigor"
          ],
          "name": {
            "en": "Bountiful Harvest III",
            "fr": "Recolte Abondante III"
          },
          "desc": {
            "en": "Increases bonus crop drop chance to 50% on mature crops. Replaces Bountiful Harvest II.",
            "fr": "Augmente a 50% la chance de ressource bonus sur cultures mures. Remplace Recolte Abondante II."
          }
        },
        {
          "id": "farmer_herbal_immunity",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/beetroot_soup.png",
          "requires": [
            "farmer_hoe_mastery_2"
          ],
          "unlocks": [
            "farmer_nature_vigor"
          ],
          "name": {
            "en": "Herbal Immunity",
            "fr": "Immunite Vegetale"
          },
          "desc": {
            "en": "Instantly clears Hunger and Nausea effects and reduces incoming Poison / Magic damage by 50%.",
            "fr": "Retire immediatement Faim et Nausee et reduit de 50% les degats de Poison et Magie."
          }
        },
        {
          "id": "farmer_master_chef",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/pumpkin_pie.png",
          "requires": [
            "farmer_bone_bloom",
            "farmer_artisan_cook"
          ],
          "unlocks": [
            "farmer_harvest_surge"
          ],
          "name": {
            "en": "Master Chef",
            "fr": "Grand Chef"
          },
          "desc": {
            "en": "Unlocks [5/5] Master Chef dishes (up to 8 per Smoker batch) and widens the Smoker heat target zone.",
            "fr": "Debloque les plats rang [5/5] Grand Chef (jusqu'a 8 par fournee) et elargit la zone cible du Fumoir."
          }
        },
        {
          "id": "farmer_golden_harvest",
          "x": 7,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/glistering_melon_slice.png",
          "requires": [
            "farmer_hydration_aura"
          ],
          "unlocks": [
            "farmer_harvest_surge"
          ],
          "name": {
            "en": "Golden Harvest",
            "fr": "Moisson Doree"
          },
          "desc": {
            "en": "5% chance when harvesting mature crops to unearth a Golden Apple, Golden Carrot, or Glistering Melon.",
            "fr": "5% de chance en recoltant une culture mure de trouver une Pomme d'Or, Carotte Doree ou Tranche Scintillante."
          }
        },
        {
          "id": "farmer_nature_vigor",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/golden_apple.png",
          "requires": [
            "farmer_bountiful_3",
            "farmer_herbal_immunity"
          ],
          "unlocks": [
            "farmer_harvest_surge"
          ],
          "name": {
            "en": "Nature's Vigor",
            "fr": "Vigueur Naturelle"
          },
          "desc": {
            "en": "Grants +2 max hearts (Health Boost I) while outdoors above altitude Y = 55.",
            "fr": "Ajoute +2 coeurs max (Boost de Vie I) tant que vous travaillez en surface (Y >= 55)."
          }
        },
        {
          "id": "farmer_crop_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "farmer_green_thumb",
            "farmer_bone_bloom"
          ],
          "unlocks": [],
          "name": {
            "en": "Harvest Magnet",
            "fr": "Aimant a Recoltes"
          },
          "desc": {
            "en": "Directly inserts harvested crops, seeds, berries, and bone meal into your inventory (togglable in settings).",
            "fr": "Insere directement recoltes, graines, baies et poudre d'os droppes dans votre inventaire (desactivable dans les parametres)."
          }
        },
        {
          "id": "farmer_harvest_surge",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/sugar_cane.png",
          "requires": [
            "farmer_master_chef",
            "farmer_golden_harvest",
            "farmer_nature_vigor"
          ],
          "unlocks": [],
          "name": {
            "en": "Harvest Surge",
            "fr": "Poussee des Recoltes"
          },
          "desc": {
            "en": "Activate from menu (1 XP Lvl, 5m CD): fully hydrates farmland and surges all crops within 16 blocks forward.",
            "fr": "Activable depuis le menu (1 Niv. XP, CD 5 min) : hydrate toutes les terres et pousse les cultures dans un rayon de 16 blocs."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "fisher",
      "chapterId": "role-fisher",
      "color": "#5a8fc7",
      "icon": "../assets/vanilla/fishing_rod.png",
      "name": {
        "en": "Fisher",
        "fr": "Pecheur"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 20,
      "connectorCount": 36,
      "workstations": [
        "minecraft:barrel"
      ],
      "activeAbility": {
        "id": "fisher_sea_bounty",
        "name": {
          "en": "Sea Bounty",
          "fr": "Offrande des Mers"
        },
        "desc": {
          "en": "Grants Conduit Power & Water Breathing (3m), Speed II (2m), and spawns 3-5 fish + 1-2 treasures (10% Heart of the Sea).",
          "fr": "Conduit et Respiration (3 min), Vitesse II (2 min), plus 3-5 poissons et 1-2 tresors (10% Coeur de la Mer)."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "fisher_double_catch_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/cod.png",
          "requires": [],
          "unlocks": [
            "fisher_rod_saver",
            "fisher_double_catch_2",
            "fisher_barrel_cure"
          ],
          "name": {
            "en": "Double Catch I",
            "fr": "Double Prise I"
          },
          "desc": {
            "en": "20% chance to gain +1 extra item when reeling in a catch with a fishing rod.",
            "fr": "20% de chance d'obtenir +1 prise bonus en remontant votre ligne de peche."
          }
        },
        {
          "id": "fisher_deep_breath_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/turtle_scute.png",
          "requires": [],
          "unlocks": [
            "fisher_barrel_cure",
            "fisher_swift_swim_1",
            "fisher_angler_xp"
          ],
          "name": {
            "en": "Deep Breath",
            "fr": "Apnee des Profondeurs"
          },
          "desc": {
            "en": "Automatically grants Water Breathing and Night Vision while submerged in water.",
            "fr": "Applique automatiquement Respiration Aquatique et Vision Nocturne lorsque vous etes dans l'eau."
          }
        },
        {
          "id": "fisher_trident_1",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/trident.png",
          "requires": [],
          "unlocks": [
            "fisher_guardian_slayer"
          ],
          "name": {
            "en": "Trident Mastery I",
            "fr": "Maitrise du Trident I"
          },
          "desc": {
            "en": "Deals +15% melee & thrown Trident damage with a 20% chance to preserve Trident durability.",
            "fr": "Ajoute +15% de degats au Trident (melee et lance) et 20% d'economie de durabilite."
          }
        },
        {
          "id": "fisher_rod_saver",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/fishing_rod.png",
          "requires": [
            "fisher_double_catch_1"
          ],
          "unlocks": [
            "fisher_junk_salvage"
          ],
          "name": {
            "en": "Reinforced Line",
            "fr": "Ligne Renforcee"
          },
          "desc": {
            "en": "45% chance to preserve 1 durability point on your fishing rod on each catch.",
            "fr": "45% de chance de preserver 1 point de durabilite de votre canne a peche a chaque prise."
          }
        },
        {
          "id": "fisher_double_catch_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/salmon.png",
          "requires": [
            "fisher_double_catch_1"
          ],
          "unlocks": [
            "fisher_treasure_1"
          ],
          "name": {
            "en": "Double Catch II",
            "fr": "Double Prise II"
          },
          "desc": {
            "en": "Increases extra catch chance to 40% when fishing. Replaces Double Catch I.",
            "fr": "Passe a 40% la chance d'obtenir une prise bonus. Remplace Double Prise I."
          }
        },
        {
          "id": "fisher_barrel_cure",
          "x": 5,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/cooked_cod.png",
          "requires": [
            "fisher_double_catch_1",
            "fisher_deep_breath_1"
          ],
          "unlocks": [
            "fisher_double_catch_3"
          ],
          "name": {
            "en": "Barrel Fish Curing",
            "fr": "Salaison au Tonneau"
          },
          "desc": {
            "en": "Sneak + right-click a Barrel holding fish or dried kelp (+ kelp, coal, or sugar): 3D heat minigame curing up to 4 shareable Marine Rations (max [4/5]).",
            "fr": "Sneak + clic droit sur un Tonneau avec poisson ou varech (+ Varech/Charbon/Sucre) : mini-jeu 3D creant jusqu'a 4 Rations partageables (max [4/5])."
          }
        },
        {
          "id": "fisher_swift_swim_1",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/kelp.png",
          "requires": [
            "fisher_deep_breath_1"
          ],
          "unlocks": [
            "fisher_swift_swim_2"
          ],
          "name": {
            "en": "Swift Swim I",
            "fr": "Nage Rapide I"
          },
          "desc": {
            "en": "Grants Speed I while swimming in water.",
            "fr": "Applique Vitesse I tant que vous nagez dans l'eau."
          }
        },
        {
          "id": "fisher_angler_xp",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/experience_bottle.png",
          "requires": [
            "fisher_deep_breath_1"
          ],
          "unlocks": [
            "fisher_swift_swim_2",
            "fisher_rain_dancer"
          ],
          "name": {
            "en": "Angler Wisdom",
            "fr": "Sagesse du Pecheur"
          },
          "desc": {
            "en": "Grants +12 bonus XP per catch and Speed I while holding a Fishing Rod.",
            "fr": "Accorde +12 XP bonus par prise et Vitesse I canne a peche en main."
          }
        },
        {
          "id": "fisher_guardian_slayer",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/prismarine_shard.png",
          "requires": [
            "fisher_trident_1"
          ],
          "unlocks": [
            "fisher_rain_dancer",
            "fisher_trident_2"
          ],
          "name": {
            "en": "Abyssal Slayer",
            "fr": "Chasseur des Abysses"
          },
          "desc": {
            "en": "Deals +25% damage to Guardians, Elder Guardians, Drowned & Squid with a 45% chance for bonus marine drops.",
            "fr": "+25% de degats contre Gardiens, Anciens Gardiens, Noyes et Poulpes + 45% de loots marins bonus."
          }
        },
        {
          "id": "fisher_junk_salvage",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/ink_sac.png",
          "requires": [
            "fisher_rod_saver"
          ],
          "unlocks": [
            "fisher_sea_magnet"
          ],
          "name": {
            "en": "Junk Salvaging",
            "fr": "Recyclage Marin"
          },
          "desc": {
            "en": "Sneak + right-click a Barrel holding fishing junk or kelp (boots, rotten flesh, bowls, lily pads, kelp, hooks) to salvage Prismarine, Leather, Bone Meal & XP.",
            "fr": "Sneak + clic droit sur un Tonneau avec detrituts de peche ou varech (bottes, chair, bols, nenuphars, crochets, kelp) : recycle en Prismarine, Cuir, Poudre d'Os et XP."
          }
        },
        {
          "id": "fisher_treasure_1",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/nautilus_shell.png",
          "requires": [
            "fisher_double_catch_2"
          ],
          "unlocks": [
            "fisher_master_curer",
            "fisher_sea_magnet"
          ],
          "name": {
            "en": "Treasure Hunter I",
            "fr": "Chasseur de Tresors I"
          },
          "desc": {
            "en": "15% chance per catch to hook a bonus marine treasure (Nautilus Shell, Prismarine, Emerald, Gold, or Name Tag).",
            "fr": "15% de chance par prise de repecher un tresor bonus (Coquille de Nautile, Prismarine, Emeraude, Or ou Etiquette)."
          }
        },
        {
          "id": "fisher_double_catch_3",
          "x": 5,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/tropical_fish.png",
          "requires": [
            "fisher_barrel_cure"
          ],
          "unlocks": [
            "fisher_master_curer"
          ],
          "name": {
            "en": "Double Catch III",
            "fr": "Double Prise III"
          },
          "desc": {
            "en": "65% extra catch chance plus a 20% chance to triple raw fish catches. Replaces Double Catch II.",
            "fr": "65% de prise bonus plus 20% de chance de tripler les poissons crus. Remplace Double Prise II."
          }
        },
        {
          "id": "fisher_swift_swim_2",
          "x": 7,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/water_bucket.png",
          "requires": [
            "fisher_swift_swim_1",
            "fisher_angler_xp"
          ],
          "unlocks": [
            "fisher_treasure_2"
          ],
          "name": {
            "en": "Swift Swim II",
            "fr": "Nage Rapide II"
          },
          "desc": {
            "en": "Grants Speed II and Conduit Power while swimming in water. Replaces Swift Swim I.",
            "fr": "Applique Vitesse II et Force de Conduit dans l'eau. Remplace Nage Rapide I."
          }
        },
        {
          "id": "fisher_rain_dancer",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/glow_ink_sac.png",
          "requires": [
            "fisher_angler_xp",
            "fisher_guardian_slayer"
          ],
          "unlocks": [
            "fisher_sea_ward"
          ],
          "name": {
            "en": "Tide Dancer",
            "fr": "Danseur des Ondes"
          },
          "desc": {
            "en": "Automatically clears Mining Fatigue and grants Regeneration I in water when injured.",
            "fr": "Retire immediatement Fatigue de Minage et applique Regeneration I dans l'eau si vous etes blesse."
          }
        },
        {
          "id": "fisher_trident_2",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/prismarine_crystals.png",
          "requires": [
            "fisher_guardian_slayer"
          ],
          "unlocks": [
            "fisher_sea_ward"
          ],
          "name": {
            "en": "Trident Mastery II",
            "fr": "Maitrise du Trident II"
          },
          "desc": {
            "en": "Deals +30% melee & thrown Trident damage with a 40% durability save. Replaces Trident Mastery I.",
            "fr": "Passe a +30% les degats au Trident (melee et lance) et 40% d'economie. Remplace Trident I."
          }
        },
        {
          "id": "fisher_master_curer",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/cooked_salmon.png",
          "requires": [
            "fisher_treasure_1",
            "fisher_double_catch_3"
          ],
          "unlocks": [
            "fisher_sea_bounty"
          ],
          "name": {
            "en": "Master Curer",
            "fr": "Maitre Saleur"
          },
          "desc": {
            "en": "Unlocks [5/5] Master Catch Rations (up to 8 per Barrel batch) and widens the Barrel heat target zone.",
            "fr": "Debloque les Rations rang [5/5] Maitre (jusqu'a 8 par fournee) et elargit la zone cible du Tonneau."
          }
        },
        {
          "id": "fisher_treasure_2",
          "x": 7,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/enchanted_book.png",
          "requires": [
            "fisher_swift_swim_2"
          ],
          "unlocks": [
            "fisher_sea_bounty"
          ],
          "name": {
            "en": "Treasure Hunter II",
            "fr": "Chasseur de Tresors II"
          },
          "desc": {
            "en": "35% bonus treasure chance per catch, adding Enchanted Books, Saddles, Turtle Scutes & rare Hearts of the Sea. Replaces Treasure Hunter I.",
            "fr": "35% de tresor bonus par prise avec Livres Enchantes, Selles, Ecailles de Tortue et rare Coeur de la Mer. Remplace Chasseur I."
          }
        },
        {
          "id": "fisher_sea_ward",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/pufferfish.png",
          "requires": [
            "fisher_rain_dancer",
            "fisher_trident_2"
          ],
          "unlocks": [
            "fisher_sea_bounty"
          ],
          "name": {
            "en": "Ocean Ward",
            "fr": "Egide des Oceans"
          },
          "desc": {
            "en": "Reduces Drowning & Magic (Guardian beam) damage by 50% and adds +15% physical defense while in water.",
            "fr": "Reduit de 50% les degats de Noyade et Magie (rayon Gardien) et ajoute +15% de defense physique dans l'eau."
          }
        },
        {
          "id": "fisher_sea_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "fisher_junk_salvage",
            "fisher_treasure_1"
          ],
          "unlocks": [],
          "name": {
            "en": "Sea Magnet",
            "fr": "Aimant des Mers"
          },
          "desc": {
            "en": "Directly inserts caught fish, kelp, prismarine, shells, and treasures into your inventory (togglable in settings).",
            "fr": "Insere directement prises, poissons, varech, prismarine et tresors marins dans votre inventaire (desactivable dans les parametres)."
          }
        },
        {
          "id": "fisher_sea_bounty",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/heart_of_the_sea.png",
          "requires": [
            "fisher_master_curer",
            "fisher_treasure_2",
            "fisher_sea_ward"
          ],
          "unlocks": [],
          "name": {
            "en": "Sea Bounty",
            "fr": "Abondance des Mers"
          },
          "desc": {
            "en": "Menu active (1 XP Lvl, 5m CD): grants Conduit Power, Water Breathing & Speed II, plus 3-5 fresh fish and 1-2 marine treasures.",
            "fr": "Actif menu (1 Niv. XP, CD 5m) : donne Force de Conduit, Respiration Aquatique & Vitesse II, plus 3-5 poissons et 1-2 tresors marins."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "hunter",
      "chapterId": "role-hunter",
      "color": "#c084fc",
      "icon": "../assets/vanilla/bow.png",
      "name": {
        "en": "Hunter",
        "fr": "Chasseur"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 20,
      "connectorCount": 36,
      "workstations": [
        "minecraft:fletching_table"
      ],
      "activeAbility": {
        "id": "hunter_blood_hunt",
        "name": {
          "en": "Blood Hunt",
          "fr": "Traque Sanglante"
        },
        "desc": {
          "en": "Strength II + Speed II + Resistance I (45s), Night Vision (60s), and marks hostiles within 24 blocks with Slowness II & Weakness I (10s).",
          "fr": "Force II + Vitesse II + Resistance I (45s), Vision Nocturne (60s), et marque les hostiles sous 24 blocs (Lenteur II + Faiblesse I 10s)."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "hunter_keen_bow_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/bow.png",
          "requires": [],
          "unlocks": [
            "hunter_quiver_save",
            "hunter_keen_bow_2",
            "hunter_fletching_craft"
          ],
          "name": {
            "en": "Keen Bow I",
            "fr": "Tir Precis I"
          },
          "desc": {
            "en": "Increases arrow damage from bows & crossbows (including FrontierEK bows) by +15%.",
            "fr": "Augmente les degats de vos fleches (arc & arbalete, y compris arcs FrontierEK) de +15%."
          }
        },
        {
          "id": "hunter_tracker_step",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/feather.png",
          "requires": [],
          "unlocks": [
            "hunter_fletching_craft",
            "hunter_night_stalker",
            "hunter_bounty_xp"
          ],
          "name": {
            "en": "Tracker's Step",
            "fr": "Pas du Pisteur"
          },
          "desc": {
            "en": "Grants Speed I while holding a bow, crossbow, or melee weapon and reduces fall damage by 30%.",
            "fr": "Applique Vitesse I en tenant un arc, une arbalete ou une arme de melee et reduit les degats de chute de 30%."
          }
        },
        {
          "id": "hunter_slayer_1",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_sword.png",
          "requires": [],
          "unlocks": [
            "hunter_loot_1"
          ],
          "name": {
            "en": "Monster Slayer I",
            "fr": "Tueur de Monstres I"
          },
          "desc": {
            "en": "Increases melee weapon damage (swords, axes, spears & FrontierEK weapons) by +15% vs hostile mobs and +8% in PvP.",
            "fr": "Augmente les degats de melee (epees, haches, lances et armes FrontierEK) de +15% contre les monstres hostiles et +8% en PvP."
          }
        },
        {
          "id": "hunter_quiver_save",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/arrow.png",
          "requires": [
            "hunter_keen_bow_1"
          ],
          "unlocks": [
            "hunter_crippling_shot"
          ],
          "name": {
            "en": "Thrifty Quiver",
            "fr": "Carquois Econome"
          },
          "desc": {
            "en": "35% chance to recover your arrow on shot and 30% chance to preserve bow or crossbow durability.",
            "fr": "35% de chance de recuperer votre fleche au tir et 30% de chance de preserver la durabilite de votre arc/arbalete."
          }
        },
        {
          "id": "hunter_keen_bow_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/crossbow.png",
          "requires": [
            "hunter_keen_bow_1"
          ],
          "unlocks": [
            "hunter_keen_bow_3"
          ],
          "name": {
            "en": "Keen Bow II",
            "fr": "Tir Precis II"
          },
          "desc": {
            "en": "Increases arrow damage by +30%. Replaces Keen Bow I.",
            "fr": "Augmente les degats de vos fleches de +30%. Remplace Tir Precis I."
          }
        },
        {
          "id": "hunter_fletching_craft",
          "x": 5,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/fletching_table.png",
          "requires": [
            "hunter_keen_bow_1",
            "hunter_tracker_step"
          ],
          "unlocks": [
            "hunter_trophy_craft"
          ],
          "name": {
            "en": "Fletching Workshop",
            "fr": "Atelier d'Archerie"
          },
          "desc": {
            "en": "Sneak + right-click a Fletching Table holding flint (+ stick/feather), bones, rotten flesh, or spider eyes to craft arrows or leather.",
            "fr": "Sneak + clic droit sur Table d'Archerie avec silex (+ baton/plume), os, chair putrefiee ou oeil d'araignee : fabrique fleches ou cuir."
          }
        },
        {
          "id": "hunter_night_stalker",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/ender_eye.png",
          "requires": [
            "hunter_tracker_step"
          ],
          "unlocks": [
            "hunter_shadow_evade"
          ],
          "name": {
            "en": "Night Stalker",
            "fr": "Traqueur Nocturne"
          },
          "desc": {
            "en": "Grants Night Vision at night or underground (Y < 55) and Speed II while sneaking.",
            "fr": "Accorde Vision Nocturne la nuit ou sous terre (Y < 55) et Vitesse II en etant accroupi."
          }
        },
        {
          "id": "hunter_bounty_xp",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/experience_bottle.png",
          "requires": [
            "hunter_tracker_step"
          ],
          "unlocks": [
            "hunter_shadow_evade",
            "hunter_bloodlust"
          ],
          "name": {
            "en": "Hunter's Bounty",
            "fr": "Prime de Chasse"
          },
          "desc": {
            "en": "Grants +15 bonus XP per hostile mob slain (+35 XP for elites/bosses) and shows damage dealt + target HP on your ActionBar.",
            "fr": "Octroie +15 XP bonus par monstre hostile elimine (+35 XP sur monstres d'elite et boss) et affiche en ActionBar vos degats infliges + PV de la cible."
          }
        },
        {
          "id": "hunter_loot_1",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/bone.png",
          "requires": [
            "hunter_slayer_1"
          ],
          "unlocks": [
            "hunter_bloodlust",
            "hunter_slayer_2"
          ],
          "name": {
            "en": "Trophy Skinning I",
            "fr": "Depecage de Monstres I"
          },
          "desc": {
            "en": "30% chance to gain a bonus trophy or material drop when slaying hostile mobs.",
            "fr": "30% de chance d'obtenir un trophee ou materiau bonus sur les monstres hostiles que vous eliminez."
          }
        },
        {
          "id": "hunter_crippling_shot",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/spider_eye.png",
          "requires": [
            "hunter_quiver_save"
          ],
          "unlocks": [
            "hunter_trophy_magnet"
          ],
          "name": {
            "en": "Crippling Shot",
            "fr": "Tir Paralysant"
          },
          "desc": {
            "en": "Arrows inflict Slowness II and Weakness I for 3 seconds (6-second internal cooldown).",
            "fr": "Vos fleches appliquent Lenteur II et Faiblesse I pendant 3 secondes (cooldown interne : 6 secondes)."
          }
        },
        {
          "id": "hunter_keen_bow_3",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/bow.png",
          "requires": [
            "hunter_keen_bow_2"
          ],
          "unlocks": [
            "hunter_master_hunter",
            "hunter_trophy_magnet"
          ],
          "name": {
            "en": "Keen Bow III",
            "fr": "Tir Precis III"
          },
          "desc": {
            "en": "Increases arrow damage by +45% with a 20% chance for a Critical Shot (+35% bonus damage). Replaces Keen Bow II.",
            "fr": "Augmente les degats des fleches de +45% avec 20% de chance de Tir Critique (+35% degats bonus). Remplace Tir Precis II."
          }
        },
        {
          "id": "hunter_trophy_craft",
          "x": 5,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/rabbit_foot.png",
          "requires": [
            "hunter_fletching_craft"
          ],
          "unlocks": [
            "hunter_master_hunter"
          ],
          "name": {
            "en": "Hunting Talismans",
            "fr": "Talisman de Chasse"
          },
          "desc": {
            "en": "Sneak + right-click a Fletching Table with rabbit foot, blaze powder/rod, phantom membrane, or ender pearl (+ string/feather/leather): 3D shareable Talisman (max [4/5]).",
            "fr": "Sneak + clic droit sur Table d'Archerie avec patte de lapin, poudre/baton de blaze, membrane ou perle (+ ficelle/plume/cuir) : Talisman 3D partageable (max [4/5])."
          }
        },
        {
          "id": "hunter_shadow_evade",
          "x": 7,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/phantom_membrane.png",
          "requires": [
            "hunter_night_stalker",
            "hunter_bounty_xp"
          ],
          "unlocks": [
            "hunter_apex_predator"
          ],
          "name": {
            "en": "Shadow Evade",
            "fr": "Esquive Furtive"
          },
          "desc": {
            "en": "20% chance when taking physical damage to evade 50% of the hit and gain Speed II for 3 seconds (8-second cooldown).",
            "fr": "20% de chance face aux degats physiques d'esquiver 50% des degats et d'obtenir Vitesse II pendant 3 secondes (cooldown : 8 secondes)."
          }
        },
        {
          "id": "hunter_bloodlust",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/redstone.png",
          "requires": [
            "hunter_bounty_xp",
            "hunter_loot_1"
          ],
          "unlocks": [
            "hunter_loot_2"
          ],
          "name": {
            "en": "Bloodlust",
            "fr": "Soif de Chasse"
          },
          "desc": {
            "en": "Each hostile mob kill restores +2 HP and grants Regeneration I (4s) + Speed I (5s).",
            "fr": "Chaque elimination de monstre hostile restaure +2 PV et applique Regeneration I (4s) + Vitesse I (5s)."
          }
        },
        {
          "id": "hunter_slayer_2",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_sword.png",
          "requires": [
            "hunter_loot_1"
          ],
          "unlocks": [
            "hunter_loot_2"
          ],
          "name": {
            "en": "Monster Slayer II",
            "fr": "Tueur de Monstres II"
          },
          "desc": {
            "en": "Increases melee damage to +30% vs hostiles (+15% PvP) with a 30% chance to preserve weapon durability. Replaces Slayer I.",
            "fr": "Augmente les degats de melee a +30% contre hostiles (+15% en PvP) avec 30% de chance de preserver la durabilite. Remplace Tueur I."
          }
        },
        {
          "id": "hunter_master_hunter",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/blaze_powder.png",
          "requires": [
            "hunter_keen_bow_3",
            "hunter_trophy_craft"
          ],
          "unlocks": [
            "hunter_blood_hunt"
          ],
          "name": {
            "en": "Master Hunter",
            "fr": "Maitre Chasseur"
          },
          "desc": {
            "en": "Unlocks [5/5] Master Hunter Talismans & Balms (up to 6 per batch) and widens the Fletching Table target zone.",
            "fr": "Debloque les Talismans & Baumes rang [5/5] Maitre (jusqu'a 6 par fournee) et elargit la zone cible de la Table d'Archerie."
          }
        },
        {
          "id": "hunter_apex_predator",
          "x": 7,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/nether_star.png",
          "requires": [
            "hunter_shadow_evade"
          ],
          "unlocks": [
            "hunter_blood_hunt"
          ],
          "name": {
            "en": "Apex Predator",
            "fr": "Predateur Alpha"
          },
          "desc": {
            "en": "Deals +25% melee and ranged damage against elite mobs and bosses (Warden, Wither, Ravager, Blaze, Enderman, etc.).",
            "fr": "Augmente de +25% tous vos degats (melee et distance) contre les monstres d'elite et boss (Warden, Wither, Ravager, Blaze, Enderman, etc.)."
          }
        },
        {
          "id": "hunter_loot_2",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/ender_pearl.png",
          "requires": [
            "hunter_bloodlust",
            "hunter_slayer_2"
          ],
          "unlocks": [
            "hunter_blood_hunt"
          ],
          "name": {
            "en": "Trophy Skinning II",
            "fr": "Depecage de Monstres II"
          },
          "desc": {
            "en": "60% bonus drop chance plus a 15% rare drop chance (ender pearl, blaze powder, ghast tear, iron ingot). Replaces Skinning I.",
            "fr": "60% de trophee bonus plus 15% de chance de drop rare (perle, poudre de blaze, larme de ghast, lingot). Remplace Depecage I."
          }
        },
        {
          "id": "hunter_trophy_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "hunter_crippling_shot",
            "hunter_keen_bow_3"
          ],
          "unlocks": [],
          "name": {
            "en": "Trophy Magnet",
            "fr": "Aimant a Trophees"
          },
          "desc": {
            "en": "Directly inserts dropped arrows, bones, pearls, blaze rods, membranes, leather, and trophies into your inventory (togglable in settings).",
            "fr": "Attire directement fleches, os, perles, poudres, membranes, cuir et trophees de monstres dans votre inventaire (desactivable dans les parametres)."
          }
        },
        {
          "id": "hunter_blood_hunt",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/netherite_sword.png",
          "requires": [
            "hunter_master_hunter",
            "hunter_apex_predator",
            "hunter_loot_2"
          ],
          "unlocks": [],
          "name": {
            "en": "Blood Hunt",
            "fr": "Traque Sanglante"
          },
          "desc": {
            "en": "Menu active (1 XP Lvl, 5m CD): grants Strength II, Speed II, Resistance I & Night Vision while slowing and weakening hostiles within 24 blocks.",
            "fr": "Actif menu (1 Niv. XP, CD 5m) : accorde Force II, Vitesse II, Resistance I & Vision Nocturne, et affaiblit/ralentit les hostiles dans 24 blocs."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    },
    {
      "id": "knight",
      "chapterId": "role-knight",
      "color": "#ff7a86",
      "icon": "assets/ui/icon_shield.png",
      "name": {
        "en": "Knight",
        "fr": "Chevalier"
      },
      "subtitle": {
        "en": "",
        "fr": ""
      },
      "skillCount": 20,
      "connectorCount": 36,
      "workstations": [
        "minecraft:grindstone"
      ],
      "activeAbility": {
        "id": "knight_royal_banner",
        "name": {
          "en": "Royal Banner",
          "fr": "Etendard Royal"
        },
        "desc": {
          "en": "Allies within 12 blocks receive Strength I (35s), Resistance II (25s), Absorption II (35s) and Regeneration I (15s).",
          "fr": "Les allies sous 12 blocs recoivent Force I (35s), Resistance II (25s), Absorption II (35s) et Regeneration I (15s)."
        },
        "costXp": 1,
        "cooldownSec": 300
      },
      "skills": [
        {
          "id": "knight_blade_mastery_1",
          "x": 3,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_sword.png",
          "requires": [],
          "unlocks": [
            "knight_weapon_care",
            "knight_blade_mastery_2",
            "knight_whetstone_oil"
          ],
          "name": {
            "en": "Knightly Swordsmanship I",
            "fr": "Escrime de Chevalier I"
          },
          "desc": {
            "en": "Increases melee weapon damage (swords, axes, maces, spears & FrontierEK weapons) by +10% PvE (+5% PvP).",
            "fr": "Augmente les degats de melee (epees, haches, masses, lances et armes FrontierEK) de +10% PvE (+5% PvP)."
          }
        },
        {
          "id": "knight_shield_wall_1",
          "x": 7,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "assets/ui/icon_shield.png",
          "requires": [],
          "unlocks": [
            "knight_whetstone_oil",
            "knight_iron_will",
            "knight_battle_sight"
          ],
          "name": {
            "en": "Shield Wall I",
            "fr": "Mur de Boucliers I"
          },
          "desc": {
            "en": "While wearing at least 2 metal/chainmail/diamond/netherite armor pieces or sneaking, reduces incoming physical damage by 10%.",
            "fr": "Avec au moins 2 pieces d'armure en metal/mailles/diamant/netherite (ou en vous accroupissant), reduit les degats physiques de 10%."
          }
        },
        {
          "id": "knight_cavalry_1",
          "x": 11,
          "y": 8,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/saddle.png",
          "requires": [],
          "unlocks": [
            "knight_charge"
          ],
          "name": {
            "en": "Cavalry Charge",
            "fr": "Charge de Cavalerie"
          },
          "desc": {
            "en": "While mounted, grants Speed I + Resistance I to your mount and increases your melee damage by +15% PvE (+6% PvP).",
            "fr": "A dos de monture, accorde Vitesse I + Resistance I a la monture et augmente vos degats de melee de +15% PvE (+6% PvP)."
          }
        },
        {
          "id": "knight_weapon_care",
          "x": 1,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/iron_ingot.png",
          "requires": [
            "knight_blade_mastery_1"
          ],
          "unlocks": [
            "knight_crushing_blow"
          ],
          "name": {
            "en": "Armory Care",
            "fr": "Entretien d'Armes"
          },
          "desc": {
            "en": "30% chance to preserve melee weapon and worn armor durability during combat.",
            "fr": "30% de chance de preserver la durabilite de vos armes de melee et de vos pieces d'armure au combat."
          }
        },
        {
          "id": "knight_blade_mastery_2",
          "x": 3,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_sword.png",
          "requires": [
            "knight_blade_mastery_1"
          ],
          "unlocks": [
            "knight_duelist_crit"
          ],
          "name": {
            "en": "Knightly Swordsmanship II",
            "fr": "Escrime de Chevalier II"
          },
          "desc": {
            "en": "Increases melee weapon damage (swords, axes & FrontierEK weapons) by +20% PvE (+10% PvP). Replaces Swordsmanship I.",
            "fr": "Augmente les degats de melee (epees, haches et armes FrontierEK) de +20% PvE (+10% PvP). Remplace Escrime I."
          }
        },
        {
          "id": "knight_whetstone_oil",
          "x": 5,
          "y": 6,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/grindstone.png",
          "requires": [
            "knight_blade_mastery_1",
            "knight_shield_wall_1"
          ],
          "unlocks": [
            "knight_banner_craft"
          ],
          "name": {
            "en": "Whetstone Honing",
            "fr": "Pierre a Aiguiser"
          },
          "desc": {
            "en": "Sneak + right-click a Grindstone holding a melee weapon (catalyst: iron ingot, coal, or flint) to repair 20% durability and gain Strength I + Haste I (15s).",
            "fr": "Sneak + clic droit sur une Meule avec votre arme de melee (catalyseur : fer, charbon ou silex) : repare 20% de durabilite et octroie Force I + Celerite I (15s)."
          }
        },
        {
          "id": "knight_iron_will",
          "x": 7,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/milk_bucket.png",
          "requires": [
            "knight_shield_wall_1"
          ],
          "unlocks": [
            "knight_shield_wall_2"
          ],
          "name": {
            "en": "Iron Will",
            "fr": "Volonte de Fer"
          },
          "desc": {
            "en": "Continuously clears Slowness and Weakness effects and reduces incoming projectile damage by 25%.",
            "fr": "Dissipe continuellement Lenteur et Faiblesse et reduit de 25% les degats de projectiles recus."
          }
        },
        {
          "id": "knight_battle_sight",
          "x": 9,
          "y": 6,
          "fr": "task",
          "type": "passive",
          "icon": "../assets/vanilla/ender_eye.png",
          "requires": [
            "knight_shield_wall_1"
          ],
          "unlocks": [
            "knight_shield_wall_2",
            "knight_riposte"
          ],
          "name": {
            "en": "Tactical Battle Sight",
            "fr": "Sens du Duel"
          },
          "desc": {
            "en": "Displays damage dealt, enemy name, and remaining HP bar on your ActionBar on hit, plus +10 bonus XP per kill.",
            "fr": "Affiche en ActionBar vos degats infliges, le nom et les PV de l'adversaire a chaque coup, et accorde +10 XP bonus par elimination."
          }
        },
        {
          "id": "knight_charge",
          "x": 11,
          "y": 6,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/sugar.png",
          "requires": [
            "knight_cavalry_1"
          ],
          "unlocks": [
            "knight_riposte",
            "knight_second_wind"
          ],
          "name": {
            "en": "Relentless Charge",
            "fr": "Assaut Impitoyable"
          },
          "desc": {
            "en": "Sprint-striking in melee deals +20% PvE bonus damage (+8% PvP, 6-second cooldown).",
            "fr": "Votre coup de melee porte en sprintant inflige +20% de degats PvE (+8% PvP, recharge : 6 secondes)."
          }
        },
        {
          "id": "knight_crushing_blow",
          "x": 1,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/iron_axe.png",
          "requires": [
            "knight_weapon_care"
          ],
          "unlocks": [
            "knight_battle_magnet"
          ],
          "name": {
            "en": "Crushing Blow",
            "fr": "Frappe Ecrasante"
          },
          "desc": {
            "en": "Hitting a foe with a metal, steel, diamond, or netherite weapon inflicts Weakness I for 3 seconds (8-second cooldown).",
            "fr": "Frapper un ennemi avec une arme en metal, acier, diamant ou netherite lui applique Faiblesse I pendant 3 secondes (cooldown : 8s)."
          }
        },
        {
          "id": "knight_duelist_crit",
          "x": 3,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/netherite_sword.png",
          "requires": [
            "knight_blade_mastery_2"
          ],
          "unlocks": [
            "knight_grand_champion",
            "knight_battle_magnet"
          ],
          "name": {
            "en": "Duelist's Lunge",
            "fr": "Botte de Duelliste"
          },
          "desc": {
            "en": "Grants an 18% chance on melee hits to land a critical strike (+30% PvE damage, +12% PvP, anti-one-tap cap).",
            "fr": "Accorde 18% de chance sur vos coups de melee de porter une frappe critique (+30% degats PvE, +12% PvP, plafond anti-one-tap)."
          }
        },
        {
          "id": "knight_banner_craft",
          "x": 5,
          "y": 4,
          "fr": "goal",
          "type": "active",
          "icon": "../assets/vanilla/gold_ingot.png",
          "requires": [
            "knight_whetstone_oil"
          ],
          "unlocks": [
            "knight_grand_champion"
          ],
          "name": {
            "en": "War Seals",
            "fr": "Sceaux de Guerre"
          },
          "desc": {
            "en": "Sneak + right-click a Grindstone with Gold Ingot (Assault), Iron Nugget (Bulwark), or Sugar (Charge) + catalyst: crafts shareable 3D War Seals [1/5]-[4/5].",
            "fr": "Sneak + clic droit sur une Meule avec lingot d'or (Assaut), pepite de fer (Pavois) ou sucre (Charge) + catalyseur : forge des Sceaux 3D partageables [1/5]-[4/5]."
          }
        },
        {
          "id": "knight_shield_wall_2",
          "x": 7,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_chestplate.png",
          "requires": [
            "knight_iron_will",
            "knight_battle_sight"
          ],
          "unlocks": [
            "knight_juggernaut"
          ],
          "name": {
            "en": "Shield Wall II",
            "fr": "Mur de Boucliers II"
          },
          "desc": {
            "en": "Increases Shield Wall physical damage reduction to 18%. Replaces Shield Wall I.",
            "fr": "Augmente la reduction physique du Mur de Boucliers a 18%. Remplace Mur de Boucliers I."
          }
        },
        {
          "id": "knight_riposte",
          "x": 9,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/flint_and_steel.png",
          "requires": [
            "knight_battle_sight",
            "knight_charge"
          ],
          "unlocks": [
            "knight_executioner"
          ],
          "name": {
            "en": "Steel Riposte",
            "fr": "Riposte d'Acier"
          },
          "desc": {
            "en": "While sneaking or wearing 3+ metal armor pieces: 25% chance when hit to gain Resistance I (3s) and reflect 25% damage back (6-second cooldown).",
            "fr": "Accroupi ou avec 3+ pieces d'armure metal : 25% de chance sur un coup recu d'obtenir Resistance I (3s) et de renvoyer 25% des degats (cooldown : 6s)."
          }
        },
        {
          "id": "knight_second_wind",
          "x": 11,
          "y": 4,
          "fr": "goal",
          "type": "passive",
          "icon": "../assets/vanilla/glistering_melon_slice.png",
          "requires": [
            "knight_charge"
          ],
          "unlocks": [
            "knight_executioner"
          ],
          "name": {
            "en": "Second Wind",
            "fr": "Second Souffle"
          },
          "desc": {
            "en": "When struck below 35% HP, triggers Regeneration II (5s) and Absorption I (15s) (45-second cooldown).",
            "fr": "Sous 35% de vos PV lors d'un coup recu, declenche Regeneration II (5s) et Absorption I (15s) (cooldown : 45 secondes)."
          }
        },
        {
          "id": "knight_grand_champion",
          "x": 5,
          "y": 2,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/golden_apple.png",
          "requires": [
            "knight_duelist_crit",
            "knight_banner_craft"
          ],
          "unlocks": [
            "knight_royal_banner"
          ],
          "name": {
            "en": "Grand Champion",
            "fr": "Grand Champion"
          },
          "desc": {
            "en": "Unlocks [5/5] Master War Seals (up to 6 per batch) and widens the 3D Grindstone sweet-spot zone.",
            "fr": "Debloque les Sceaux de Guerre rang [5/5] Maitre (jusqu'a 6 par fournee) et elargit la zone cible de la Meule 3D."
          }
        },
        {
          "id": "knight_juggernaut",
          "x": 7,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/netherite_chestplate.png",
          "requires": [
            "knight_shield_wall_2"
          ],
          "unlocks": [
            "knight_royal_banner"
          ],
          "name": {
            "en": "Armored Juggernaut",
            "fr": "Mastodonte Cuirasse"
          },
          "desc": {
            "en": "While wearing 3+ metal armor pieces, grants Health Boost (+4 HP) and reduces projectile and explosion damage by 20%.",
            "fr": "Avec 3+ pieces d'armure en metal, accorde Bonus de Vie (+4 PV) et reduit de 20% les degats de projectiles et d'explosions."
          }
        },
        {
          "id": "knight_executioner",
          "x": 9,
          "y": 2,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/diamond_axe.png",
          "requires": [
            "knight_riposte",
            "knight_second_wind"
          ],
          "unlocks": [
            "knight_royal_banner"
          ],
          "name": {
            "en": "Executioner's Verdict",
            "fr": "Sentence du Bourreau"
          },
          "desc": {
            "en": "Increases melee damage by +20% PvE (+8% PvP) against foes at or below 35% max HP (PvP anti-one-tap capped).",
            "fr": "Augmente de +20% PvE (+8% PvP) vos degats de melee contre tout ennemi ayant 35% ou moins de ses PV max (plafond anti-one-tap PvP)."
          }
        },
        {
          "id": "knight_battle_magnet",
          "x": 3,
          "y": 0,
          "fr": "challenge",
          "type": "passive",
          "icon": "../assets/vanilla/compass.png",
          "requires": [
            "knight_crushing_blow",
            "knight_duelist_crit"
          ],
          "unlocks": [],
          "name": {
            "en": "Battle Spoils Magnet",
            "fr": "Pillage de Bataille"
          },
          "desc": {
            "en": "Pulls dropped ingots, steel, gems, arrows, bones, and combat trophies directly into your inventory (togglable in settings).",
            "fr": "Attire directement lingots, acier, gemmes, fleches, os et trophees de combat dans votre inventaire (desactivable dans les parametres)."
          }
        },
        {
          "id": "knight_royal_banner",
          "x": 7,
          "y": 0,
          "fr": "challenge",
          "type": "active",
          "icon": "../assets/vanilla/nether_star.png",
          "requires": [
            "knight_grand_champion",
            "knight_juggernaut",
            "knight_executioner"
          ],
          "unlocks": [],
          "name": {
            "en": "Royal Banner",
            "fr": "Etendard Royal"
          },
          "desc": {
            "en": "Menu active (1 XP Lvl, 5m CD): rallies you and allies within 12 blocks with Strength I (35s), Resistance II (25s), Absorption II (35s), and Regeneration I (15s).",
            "fr": "Actif menu (1 Niv. XP, CD 5m) : rallie vous et vos allies dans 12 blocs avec Force I (35s), Resistance II (25s), Absorption II (35s) et Regeneration I (15s)."
          }
        }
      ],
      "connectors": [
        {
          "x": 1,
          "y": 7,
          "u": true,
          "d": false,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 4,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 7,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 7,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 7,
          "u": true,
          "d": false,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 11,
          "y": 7,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 5,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 7,
          "y": 5,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 5,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 5,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 1,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 3,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 3,
          "y": 2,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 4,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 5,
          "y": 3,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 7,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": false,
          "hub": false
        },
        {
          "x": 9,
          "y": 3,
          "u": true,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 10,
          "y": 3,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 11,
          "y": 3,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 1,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 2,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 3,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        },
        {
          "x": 5,
          "y": 1,
          "u": false,
          "d": true,
          "l": false,
          "r": true,
          "hub": true
        },
        {
          "x": 6,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 7,
          "y": 1,
          "u": true,
          "d": true,
          "l": true,
          "r": true,
          "hub": true
        },
        {
          "x": 8,
          "y": 1,
          "u": false,
          "d": false,
          "l": true,
          "r": true,
          "hub": false
        },
        {
          "x": 9,
          "y": 1,
          "u": false,
          "d": true,
          "l": true,
          "r": false,
          "hub": true
        }
      ]
    }
  ],
  "items": [
    {
      "id": "jobskills:skill_book",
      "shortId": "skill_book",
      "category": "Core Item",
      "icon": "assets/items/skill_book.png",
      "maxStack": 1,
      "name": {
        "en": "Book of Professions",
        "fr": "Livre des Metiers"
      },
      "desc": {
        "en": "Right-click anywhere to open the OreUI Jobs & Skill Trees menu. Also accessible via /jobskills:skills or !skills.",
        "fr": "Clic droit n'importe ou pour ouvrir le menu OreUI Metiers & Competences. Aussi accessible via /jobskills:skills ou !skills."
      },
      "recipes": [
        {
          "type": "shapeless",
          "ingredients": [
            "minecraft:book",
            "minecraft:lapis_lazuli"
          ],
          "resultItem": "jobskills:skill_book",
          "resultCount": 1
        }
      ]
    },
    {
      "id": "jobskills:forge_hammer",
      "shortId": "forge_hammer",
      "category": "Blacksmith Tool",
      "icon": "assets/items/forge_hammer.png",
      "maxStack": 1,
      "name": {
        "en": "Forge Hammer",
        "fr": "Marteau de Forge"
      },
      "desc": {
        "en": "Required in hand to strike the 3D Hammer gauge during Anvil Forging, Steel Plate hammering, Anvil Repair, and Grindstone Salvage (even in Creative).",
        "fr": "Indispensable en main pour frapper la jauge 3D lors de la Forge sur Enclume, des Plaques d'Acier, Reparations et Recyclages (meme en Creatif)."
      },
      "recipes": [
        {
          "type": "shaped",
          "pattern": [
            "III",
            "ISI",
            " S "
          ],
          "key": {
            "I": "minecraft:iron_ingot",
            "S": "minecraft:stick"
          },
          "resultItem": "jobskills:forge_hammer",
          "resultCount": 1
        }
      ]
    },
    {
      "id": "jobskills:soaked_hide",
      "shortId": "soaked_hide",
      "category": "Tanning Intermediate",
      "icon": "assets/items/soaked_hide.png",
      "maxStack": 64,
      "name": {
        "en": "Soaked Hide",
        "fr": "Peau Trempee"
      },
      "desc": {
        "en": "Non-edible intermediate obtained by soaking Rotten Flesh for 5s in a Water Cauldron. Dry on a Furnace, Blast Furnace, or Smoker for Leather.",
        "fr": "Intermediaire non comestible obtenu en trempant la Chair Putrefiee 5s dans un Chaudron d'eau. Secher au Fourneau, Haut Fourneau ou Fumoir pour obtenir du Cuir."
      },
      "recipes": []
    },
    {
      "id": "knights:steel_ingot",
      "shortId": "steel_ingot",
      "category": "Frontier Epic Knights Alloy",
      "icon": "assets/items/knights_steel_ingot.png",
      "maxStack": 64,
      "name": {
        "en": "Steel Ingot (Frontier Epic Knights)",
        "fr": "Lingot d'Acier (Frontier Epic Knights)"
      },
      "desc": {
        "en": "Smelted directly by Blacksmiths on a Blast Furnace (2 Iron Ingots + 2 Fuel -> 1 Steel Ingot) via the 3-zone heat minigame.",
        "fr": "Fondu directement par le Forgeron sur Haut Fourneau (2 Lingots de Fer + 2 Combustibles -> 1 Lingot d'Acier) via le mini-jeu de chauffe 3 zones."
      },
      "recipes": []
    },
    {
      "id": "knights:steel_plate",
      "shortId": "steel_plate",
      "category": "Frontier Epic Knights Component",
      "icon": "assets/items/knights_steel_plate.png",
      "maxStack": 64,
      "name": {
        "en": "Steel Plate (Frontier Epic Knights)",
        "fr": "Plaque d'Acier (Frontier Epic Knights)"
      },
      "desc": {
        "en": "Hammered diamond-free by Blacksmiths on an Anvil (3 Steel Ingots -> 1+ Steel Plate) using the Forge Hammer 3D minigame.",
        "fr": "Martele sans diamant par le Forgeron sur Enclume (3 Lingots d'Acier -> 1+ Plaque d'Acier) au Marteau de Forge 3D."
      },
      "recipes": []
    }
  ],
  "entities": [
    {
      "id": "jobskills:forge_bar (Anvil Mode 0)",
      "category": "3D Minigame Bar — Hammer Strike",
      "render3d": "assets/renders3d/forge_bar_anvil.png",
      "name": {
        "en": "3D Forge Bar — Anvil Strike (Mode 0)",
        "fr": "Barre 3D Forge — Frappe Enclume (Mode 0)"
      },
      "desc": {
        "en": "Oscillating red cursor over green/yellow target zones. Hit the block holding jobskills:forge_hammer: Green = +1.0, Yellow = +0.72, Miss = -0.45.",
        "fr": "Curseur rouge oscillant au-dessus des zones vertes et jaunes. Frappez en tenant le Marteau de Forge : Vert = +1.0, Jaune = +0.72, Rate = -0.45."
      }
    },
    {
      "id": "jobskills:forge_bar (Heat Mode 1)",
      "category": "3D Minigame Bar — Heat & Timing",
      "render3d": "assets/renders3d/forge_bar_heat.png",
      "name": {
        "en": "3D Forge Bar — Heat / Timing (Mode 1)",
        "fr": "Barre 3D Forge — Chauffe / Timing (Mode 1)"
      },
      "desc": {
        "en": "Rising cursor on Furnace, Blast Furnace, Smoker, Barrel, Fletching Table, or Grindstone. Normal click pumps +0.08 bellows boost; Sneak+Click locks in the score.",
        "fr": "Curseur montant sur Fourneau, Haut Fourneau, Fumoir, Tonneau, Table d'Archerie ou Meule. Clic normal = souffle +0.08 ; Sneak+Clic valide le score."
      }
    },
    {
      "id": "jobskills:forge_bar (Soak Mode 2)",
      "category": "3D Minigame Bar — 5s Water Soak",
      "render3d": "assets/renders3d/forge_bar_soak.png",
      "name": {
        "en": "3D Forge Bar — Cauldron Soak (Mode 2)",
        "fr": "Barre 3D Forge — Trempage 5s (Mode 2)"
      },
      "desc": {
        "en": "5.0-second (100 ticks) blue hydration bar above a Water Cauldron for Stage 1 Leather Tanning (Rotten Flesh -> Soaked Hide).",
        "fr": "Jauge bleue de 5,0 secondes (100 ticks) au-dessus d'un Chaudron d'eau pour l'Etape 1 du Tannage (Chair Putrefiee -> Peau Trempee)."
      }
    }
  ],
  "byId": {
    "jobskills:skill_book": {
      "id": "jobskills:skill_book",
      "shortId": "skill_book",
      "category": "Core Item",
      "icon": "assets/items/skill_book.png",
      "maxStack": 1,
      "name": {
        "en": "Book of Professions",
        "fr": "Livre des Metiers"
      },
      "desc": {
        "en": "Right-click anywhere to open the OreUI Jobs & Skill Trees menu. Also accessible via /jobskills:skills or !skills.",
        "fr": "Clic droit n'importe ou pour ouvrir le menu OreUI Metiers & Competences. Aussi accessible via /jobskills:skills ou !skills."
      },
      "recipes": [
        {
          "type": "shapeless",
          "ingredients": [
            "minecraft:book",
            "minecraft:lapis_lazuli"
          ],
          "resultItem": "jobskills:skill_book",
          "resultCount": 1
        }
      ]
    },
    "jobskills:forge_hammer": {
      "id": "jobskills:forge_hammer",
      "shortId": "forge_hammer",
      "category": "Blacksmith Tool",
      "icon": "assets/items/forge_hammer.png",
      "maxStack": 1,
      "name": {
        "en": "Forge Hammer",
        "fr": "Marteau de Forge"
      },
      "desc": {
        "en": "Required in hand to strike the 3D Hammer gauge during Anvil Forging, Steel Plate hammering, Anvil Repair, and Grindstone Salvage (even in Creative).",
        "fr": "Indispensable en main pour frapper la jauge 3D lors de la Forge sur Enclume, des Plaques d'Acier, Reparations et Recyclages (meme en Creatif)."
      },
      "recipes": [
        {
          "type": "shaped",
          "pattern": [
            "III",
            "ISI",
            " S "
          ],
          "key": {
            "I": "minecraft:iron_ingot",
            "S": "minecraft:stick"
          },
          "resultItem": "jobskills:forge_hammer",
          "resultCount": 1
        }
      ]
    },
    "jobskills:soaked_hide": {
      "id": "jobskills:soaked_hide",
      "shortId": "soaked_hide",
      "category": "Tanning Intermediate",
      "icon": "assets/items/soaked_hide.png",
      "maxStack": 64,
      "name": {
        "en": "Soaked Hide",
        "fr": "Peau Trempee"
      },
      "desc": {
        "en": "Non-edible intermediate obtained by soaking Rotten Flesh for 5s in a Water Cauldron. Dry on a Furnace, Blast Furnace, or Smoker for Leather.",
        "fr": "Intermediaire non comestible obtenu en trempant la Chair Putrefiee 5s dans un Chaudron d'eau. Secher au Fourneau, Haut Fourneau ou Fumoir pour obtenir du Cuir."
      },
      "recipes": []
    },
    "knights:steel_ingot": {
      "id": "knights:steel_ingot",
      "shortId": "steel_ingot",
      "category": "Frontier Epic Knights Alloy",
      "icon": "assets/items/knights_steel_ingot.png",
      "maxStack": 64,
      "name": {
        "en": "Steel Ingot (Frontier Epic Knights)",
        "fr": "Lingot d'Acier (Frontier Epic Knights)"
      },
      "desc": {
        "en": "Smelted directly by Blacksmiths on a Blast Furnace (2 Iron Ingots + 2 Fuel -> 1 Steel Ingot) via the 3-zone heat minigame.",
        "fr": "Fondu directement par le Forgeron sur Haut Fourneau (2 Lingots de Fer + 2 Combustibles -> 1 Lingot d'Acier) via le mini-jeu de chauffe 3 zones."
      },
      "recipes": []
    },
    "knights:steel_plate": {
      "id": "knights:steel_plate",
      "shortId": "steel_plate",
      "category": "Frontier Epic Knights Component",
      "icon": "assets/items/knights_steel_plate.png",
      "maxStack": 64,
      "name": {
        "en": "Steel Plate (Frontier Epic Knights)",
        "fr": "Plaque d'Acier (Frontier Epic Knights)"
      },
      "desc": {
        "en": "Hammered diamond-free by Blacksmiths on an Anvil (3 Steel Ingots -> 1+ Steel Plate) using the Forge Hammer 3D minigame.",
        "fr": "Martele sans diamant par le Forgeron sur Enclume (3 Lingots d'Acier -> 1+ Plaque d'Acier) au Marteau de Forge 3D."
      },
      "recipes": []
    }
  },
  "forgeStats": {
    "thresholds": [
      {
        "rating": 1,
        "minScore": 0,
        "maxScore": 44,
        "statsCount": 1,
        "en": "Crude",
        "fr": "Brut",
        "hex": "#aaaaaa"
      },
      {
        "rating": 2,
        "minScore": 45,
        "maxScore": 63,
        "statsCount": 1,
        "en": "Common",
        "fr": "Commun",
        "hex": "#ffffff"
      },
      {
        "rating": 3,
        "minScore": 64,
        "maxScore": 79,
        "statsCount": 2,
        "en": "Refined",
        "fr": "Raffine",
        "hex": "#55ff55"
      },
      {
        "rating": 4,
        "minScore": 80,
        "maxScore": 93,
        "statsCount": 2,
        "en": "Superior",
        "fr": "Superieur",
        "hex": "#55ffff"
      },
      {
        "rating": 5,
        "minScore": 94,
        "maxScore": 100,
        "statsCount": 3,
        "en": "Masterwork",
        "fr": "Chef-d'Oeuvre",
        "hex": "#ffaa00"
      }
    ],
    "pools": {
      "weapon": [
        "might",
        "durability",
        "weapon_agility",
        "strength",
        "lifesteal"
      ],
      "axe": [
        "might",
        "efficiency",
        "durability",
        "strength"
      ],
      "armor_heavy": [
        "defense",
        "resilience",
        "vitality",
        "resistance",
        "fireproof"
      ],
      "armor_agile": [
        "agility",
        "feather",
        "defense_agile",
        "leap",
        "resilience"
      ],
      "tool": [
        "efficiency",
        "durability",
        "tool_agility",
        "night_eye"
      ]
    },
    "defs": {
      "might": {
        "id": "might",
        "minRating": 1,
        "vals": [
          6,
          10,
          14,
          18,
          24
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "strength": {
        "id": "strength",
        "minRating": 3,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          1,
          1,
          2
        ]
      },
      "weapon_agility": {
        "id": "weapon_agility",
        "minRating": 2,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          1,
          1,
          1,
          1
        ]
      },
      "lifesteal": {
        "id": "lifesteal",
        "minRating": 4,
        "vals": [
          0,
          0,
          0,
          1,
          2
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "efficiency": {
        "id": "efficiency",
        "minRating": 1,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          1,
          1,
          1,
          2,
          2
        ]
      },
      "durability": {
        "id": "durability",
        "minRating": 1,
        "vals": [
          10,
          18,
          25,
          32,
          42
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "defense": {
        "id": "defense",
        "minRating": 1,
        "vals": [
          3,
          5,
          7,
          9,
          12
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "defense_agile": {
        "id": "defense_agile",
        "minRating": 1,
        "vals": [
          2,
          4,
          5,
          7,
          9
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "resilience": {
        "id": "resilience",
        "minRating": 1,
        "vals": [
          15,
          20,
          25,
          30,
          40
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "vitality": {
        "id": "vitality",
        "minRating": 3,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          1,
          1,
          2
        ]
      },
      "resistance": {
        "id": "resistance",
        "minRating": 4,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          0,
          1,
          1
        ]
      },
      "fireproof": {
        "id": "fireproof",
        "minRating": 2,
        "vals": [
          0,
          15,
          20,
          25,
          0
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          1
        ]
      },
      "agility": {
        "id": "agility",
        "minRating": 2,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          1,
          1,
          1,
          2
        ]
      },
      "feather": {
        "id": "feather",
        "minRating": 1,
        "vals": [
          15,
          25,
          35,
          45,
          60
        ],
        "lvls": [
          0,
          0,
          0,
          0,
          0
        ]
      },
      "leap": {
        "id": "leap",
        "minRating": 3,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          1,
          1,
          2
        ]
      },
      "tool_agility": {
        "id": "tool_agility",
        "minRating": 3,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          1,
          1,
          1
        ]
      },
      "night_eye": {
        "id": "night_eye",
        "minRating": 4,
        "vals": [
          0,
          0,
          0,
          0,
          0
        ],
        "lvls": [
          0,
          0,
          0,
          1,
          1
        ]
      }
    }
  }
};

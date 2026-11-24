/* Auto-generated Entities 3D Data, Military Hierarchy & Customizer Geometry */
window.JN_ENTITY_EXTRA = {
  "jn:citizen_male": {
    "render3d": "assets/renders3d/entities/citizen_male.png",
    "roleBadge": {
      "en": "Civilian Worker (M)",
      "fr": "Citoyen Ouvrier (H)"
    },
    "desc": {
      "en": "Core male colony inhabitant. Assigned automatically to workstations, builds blueprints, shops at nation markets, ages into adulthood, marries, sleeps in beds linked to your Hearth, and inherits biome-weighted skin, eyes, 385 hair variants, 34 regional tops, 14 bottoms & 4 shoe styles.",
      "fr": "Habitant masculin de votre nation. Travaille dans les stations de production, construit les plans, frequente les boutiques, fonde une famille, dort dans les lits lies au Foyer et herite d'une peau/yeux selon le biome, 385 variantes de cheveux, 34 hauts regionaux, 14 bas et 4 chaussures."
    },
    "traits": {
      "en": [
        "32 skin tones x 16 eye colors x 11 hair styles (x35 colors)",
        "34 regional tops (European, Mediterranean, Southeast Asian)",
        "Can be conscripted into a Knight Male at Barracks / Nation menu"
      ],
      "fr": [
        "32 teints de peau x 16 yeux x 11 coupes (x35 couleurs)",
        "34 hauts regionaux (Europeen, Mediterraneen, Asie du Sud-Est)",
        "Recrutable en Chevalier (H) via la Caserne / menu Nation"
      ]
    },
    "customizable": {
      "gender": "male",
      "mode": "citizen"
    }
  },
  "jn:citizen_female": {
    "render3d": "assets/renders3d/entities/citizen_female.png",
    "roleBadge": {
      "en": "Civilian Worker (F)",
      "fr": "Citoyenne Ouvriere (F)"
    },
    "desc": {
      "en": "Core female colony inhabitant. Performs all 16 civilian professions identically to male citizens, raises newborn citizens, heals at the Doctor Station, and wears biome-matched outfits from 45 dresses (25 Medieval + 20 Asian) across 11 hairstyles x 35 colors.",
      "fr": "Habitante feminine de la nation. Exerce les 16 metiers civils, eleve les nouveau-nes, se soigne a la Station du Docteur et porte 45 robes/tenues (25 Medievales + 20 Asiatiques) avec 11 coupes x 35 couleurs de cheveux."
    },
    "traits": {
      "en": [
        "32 skin tones x 16 eye colors x 11 hair styles (x35 colors)",
        "45 dresses & outfits (25 Medieval, 20 Asian) + 4 shoes",
        "Can be conscripted into a Knight Female for national defense"
      ],
      "fr": [
        "32 teints de peau x 16 yeux x 11 coupes (x35 couleurs)",
        "45 robes & tenues (25 Medievales, 20 Asiatiques) + 4 chaussures",
        "Recrutable en Chevalier (F) pour l'armee nationale"
      ]
    },
    "customizable": {
      "gender": "female",
      "mode": "citizen"
    }
  },
  "jn:knight_male": {
    "render3d": "assets/renders3d/entities/knight_male.png",
    "roleBadge": {
      "en": "Military Unit (M)",
      "fr": "Unite Militaire (H)"
    },
    "desc": {
      "en": "Enlisted male soldier/knight retaining the citizen's exact genetics (skin, eyes, hair, martial stats) beneath silver/iron plate armor. Progresses across 4 Military Grades (Soldier -> Knight -> Captain -> General), 9 tactical classes, 5 Training Ranks, and Regiment commands via the Command Sword.",
      "fr": "Soldat/chevalier masculin conservant exactement la genetique du citoyen (peau, yeux, cheveux, stats martiales) sous son armure de plates. Evolue sur 4 Grades (Soldat -> Chevalier -> Capitaine -> General), 9 classes tactiques, 5 Rangs d'entrainement et ordres par Epee de commandement."
    },
    "traits": {
      "en": [
        "Grades: Soldier (20 HP), Knight (40 HP), Captain (60 HP + Strength I aura), General (100 HP + Strength II & Speed I aura)",
        "9 specializations including Warrior, Archer, Crossbowman, Guardian, Elite Guard, Tank, Royal Guard, Cavalry & Field Doctor",
        "Uses Nation Ammo chests & barracks beds automatically"
      ],
      "fr": [
        "Grades : Soldat (20 PV), Chevalier (40 PV), Capitaine (60 PV + aura Force I), General (100 PV + aura Force II & Vitesse I)",
        "9 specialisations dont Guerrier, Archer, Arbaletrier, Gardien, Garde d'Elite, Garde lourd, Garde Royal, Cavalier & Docteur",
        "Ravitaillement en munitions et repos automatique en caserne"
      ]
    },
    "customizable": {
      "gender": "male",
      "mode": "knight"
    }
  },
  "jn:knight_female": {
    "render3d": "assets/renders3d/entities/knight_female.png",
    "roleBadge": {
      "en": "Military Unit (F)",
      "fr": "Unite Militaire (F)"
    },
    "desc": {
      "en": "Enlisted female soldier/knight sharing the exact same 4 Grades, 9 tactical classes, training progression, and Command Sword control as Knight Male, wearing the tailored female plate armor layer over her citizen head, eyes, and hairstyle.",
      "fr": "Soldat/chevalier feminin disposant des memes 4 Grades, 9 classes tactiques, progression et ordres que le Chevalier masculin, avec modele d'armure adapte par-dessus son visage, ses yeux et sa coiffure d'origine."
    },
    "traits": {
      "en": [
        "Identical combat stats, 4 Grades & 9 Classes as Knight Male",
        "Female plate armor & chest geometry overlay",
        "Retains Veteran record if demobilized back to Civilian"
      ],
      "fr": [
        "Memes stats, 4 Grades et 9 Classes que le Chevalier (H)",
        "Armure et geometrie adaptees",
        "Conserve son dossier de Veteran en cas de demobilisation"
      ]
    },
    "customizable": {
      "gender": "female",
      "mode": "knight"
    }
  },
  "jn:eckosoldier": {
    "render3d": "assets/renders3d/entities/eckosoldier.png",
    "roleBadge": {
      "en": "Special Companion",
      "fr": "Compagnon Special"
    },
    "desc": {
      "en": "Special loyal guardian companion (100 HP, 7 Base Atk, 0.35 speed) summoned via the EckoSoldier Doll (jn:eckosoldier_doll). Tameable, sit/follow toggleable, immune to starvation, with an active lifecycle system.",
      "fr": "Compagnon gardien special (100 PV, 7 Atq, vitesse 0,35) invoque via la Poupee EckoSoldier (jn:eckosoldier_doll). Apprivoisable, ordres assis/suivre, gere par eckosoldier_lifecycle.js."
    },
    "traits": {
      "en": [
        "100 HP, 7 Base Damage, 50% Knockback Resistance",
        "Summoned with EckoSoldier Doll (1x Feather + 2x Wool + 2x Stick + etc.)"
      ],
      "fr": [
        "100 PV, 7 Degats de base, 50% Resistance au recul",
        "Invoque via la Poupee EckoSoldier"
      ]
    }
  },
  "jn:marauder_swordsman": {
    "render3d": "assets/renders3d/entities/marauder_swordsman.png",
    "roleBadge": {
      "en": "Raid Vanguard",
      "fr": "Avant-Garde Maraudeur"
    },
    "desc": {
      "en": "Frontline melee raider spawning during Marauder Raids. Advances in packs toward claimed territory & citizens.",
      "fr": "Assaillant de melee de premiere ligne apparaissant lors des Raids Maraudeurs sur les territoires."
    },
    "traits": {
      "en": [
        "20 HP, 4 Attack Damage, 0.34 Speed",
        "Drops Emerald & Coin items + awards Nation XP"
      ],
      "fr": [
        "20 PV, 4 Degats, 0,34 Vitesse",
        "Lache Emeraude & Pieces + XP Nation"
      ]
    }
  },
  "jn:marauder_arbalist": {
    "render3d": "assets/renders3d/entities/marauder_arbalist.png",
    "roleBadge": {
      "en": "Raid Marksman",
      "fr": "Arbaletrier Maraudeur"
    },
    "desc": {
      "en": "Ranged crossbow marauder suppressing defenders with piercing bolts and firework salvos during Siege/Raid waves.",
      "fr": "Tireur a distance armant une arbalete et des carreaux explosifs lors des vagues de Raid."
    },
    "traits": {
      "en": [
        "20 HP, Ranged Crossbow AI, 0.33 Speed",
        "Drops Emerald, Arrow & Coin"
      ],
      "fr": [
        "20 PV, IA Arbalete a distance, 0,33 Vitesse",
        "Lache Emeraude, Fleche & Piece"
      ]
    }
  },
  "jn:marauder_captain": {
    "render3d": "assets/renders3d/entities/marauder_captain.png",
    "roleBadge": {
      "en": "Raid Officer",
      "fr": "Capitaine Maraudeur"
    },
    "desc": {
      "en": "Banner-bearing heavy officer leading Marauder squads (40 HP, 6 Attack, 50% Knockback Resistance).",
      "fr": "Officier porte-etendard menant les escouades de Maraudeurs (40 PV, 6 Atq, 50% Res. recul)."
    },
    "traits": {
      "en": [
        "40 HP, 6 Attack, 0.32 Speed, 50% KB Res",
        "Carries distinctive Pirate Captain flag pole"
      ],
      "fr": [
        "40 PV, 6 Atq, 0,32 Vitesse, 50% Res. recul",
        "Porte-etendard distinctif de Raid"
      ]
    }
  },
  "jn:marauder_horuphant": {
    "render3d": "assets/renders3d/entities/marauder_horuphant.png",
    "roleBadge": {
      "en": "Raid Siege Beast",
      "fr": "Bete de Siege Maraudeur"
    },
    "desc": {
      "en": "Armored war elephant mount ridden by a Marauder Air Officer (100 HP, 10 Base Attack, 90% Knockback Resistance). Acts as the heavy siege breaker in high-tier raids.",
      "fr": "Elephant de guerre blinde chevauche par un officier maraudeur (100 PV, 10 Atq, 90% Res. recul). Brise-lignes lourd des raids de haut palier."
    },
    "traits": {
      "en": [
        "100 HP, 10 Attack, 90% Knockback Resistance",
        "26-bone custom siege beast model"
      ],
      "fr": [
        "100 PV, 10 Atq, 90% Resistance au recul",
        "Modele custom 26 os avec officier"
      ]
    }
  },
  "jn:marauder_privateer": {
    "render3d": "assets/renders3d/entities/marauder_privateer.png",
    "roleBadge": {
      "en": "Aerial Raid Boss",
      "fr": "Boss Aerien Maraudeur"
    },
    "desc": {
      "en": "Steampunk flying airship piloted by a Marauder gunner (150 HP, 70% Knockback Resistance).Bombards colonies from above with Marauder Fireballs while hovering via marauder_privateer_flight.js.",
      "fr": "Dirigeable arme volant pilote par un corsaire maraudeur (150 PV, 70% Res. recul). Bombarde les colonies depuis les airs via des boules de feu maraudeuses."
    },
    "traits": {
      "en": [
        "150 HP, 70% KB Res, Flight Patrol AI",
        "Fires jn:marauder_fireball salvos from the air"
      ],
      "fr": [
        "150 PV, 70% Res. recul, Vol autonome",
        "Tire des salves de jn:marauder_fireball"
      ]
    }
  },
  "jn:marauder_fireball": {
    "render3d": "assets/renders3d/entities/marauder_fireball.png",
    "roleBadge": {
      "en": "Raid Projectile",
      "fr": "Projectile de Raid"
    },
    "desc": {
      "en": "Explosive incendiary projectile fired by the Marauder Privateer airship.",
      "fr": "Projectile explosif tire par le dirigeable Corsaire Maraudeur."
    },
    "traits": {
      "en": [
        "Projectile entity",
        "High impact siege burst"
      ],
      "fr": [
        "Entite projectile",
        "Impact explosif de siege"
      ]
    }
  },
  "jn:marauder_firework_bolt": {
    "render3d": "assets/renders3d/entities/marauder_firework_bolt.png",
    "roleBadge": {
      "en": "Raid Projectile",
      "fr": "Projectile de Raid"
    },
    "desc": {
      "en": "Heavy firework crossbow bolt fired by Marauder Arbalists.",
      "fr": "Carreau d'artifice lourd tire par les Arbaletriers Maraudeurs."
    },
    "traits": {
      "en": [
        "Area burst crossbow projectile"
      ],
      "fr": [
        "Projectile d'arbalete a eclat"
      ]
    }
  },
  "jn:training_dummy": {
    "render3d": "assets/renders3d/entities/training_dummy.png",
    "roleBadge": {
      "en": "Military Prop",
      "fr": "Cible d'Entrainement"
    },
    "desc": {
      "en": "Immovable armored dummy placed inside Barracks / training yards. Lets soldiers train XP toward Ranks 1-5.",
      "fr": "Mannequin blinde immobile permettant aux soldats de gagner de l'XP militaire (Rangs 1 a 5)."
    },
    "traits": {
      "en": [
        "100% Knockback Resistance",
        "Auto-scanned within Barracks radius"
      ],
      "fr": [
        "100% Resistance au recul",
        "Detecte par les soldats a l'entrainement"
      ]
    }
  },
  "jn:colony_flag": {
    "render3d": "assets/renders3d/entities/colony_flag.png",
    "roleBadge": {
      "en": "Dynamic Flag Entity",
      "fr": "Entite Drapeau Dynamique"
    },
    "desc": {
      "en": "Physical 10-layer animated flag entity rendered atop a fence/wall/flagpole when founding or expanding a Nation. Mirrors the Nation's custom Pattern Studio layers.",
      "fr": "Entite drapeau dynamique 10 couches affichee au sommet d'un mat lors de la fondation ou extension d'une Nation, reproduisant ses motifs."
    },
    "traits": {
      "en": [
        "10 dynamic composite pattern layers",
        "Protected against accidental breaking by non-members"
      ],
      "fr": [
        "10 couches de motifs composites dynamiques",
        "Protegee hors membres autorises"
      ]
    }
  },
  "jn:cosmetic_flag": {
    "render3d": "assets/renders3d/entities/cosmetic_flag.png",
    "roleBadge": {
      "en": "Cosmetic Flag",
      "fr": "Drapeau Cosmetique"
    },
    "desc": {
      "en": "Decorative nation banner entity spawned by jn:cosmetic_flag without claiming chunks.",
      "fr": "Banniere decorative de nation sans claim de territoire."
    },
    "traits": {
      "en": [
        "Mirrors active Nation banner design",
        "Non-claiming decoration"
      ],
      "fr": [
        "Copie le drapeau de la Nation",
        "Pure decoration sans claim"
      ]
    }
  },
  "jn:org_banner": {
    "render3d": "assets/renders3d/entities/org_banner.png",
    "roleBadge": {
      "en": "Org Emblem Entity",
      "fr": "Embleme d'Organisation"
    },
    "desc": {
      "en": "Official International Organization flag entity displaying the 10-layer Org crest.",
      "fr": "Etendard officiel d'Organisation Internationale a 10 couches."
    },
    "traits": {
      "en": [
        "Displays International Org emblem"
      ],
      "fr": [
        "Affiche l'embleme d'Organisation Internationale"
      ]
    }
  },
  "jn:cosmetic_org_banner": {
    "render3d": "assets/renders3d/entities/cosmetic_org_banner.png",
    "roleBadge": {
      "en": "Cosmetic Org Flag",
      "fr": "Embleme Org. Cosmetique"
    },
    "desc": {
      "en": "Decorative International Organization banner entity without territory binding.",
      "fr": "Etendard decoratif d'Organisation Internationale."
    },
    "traits": {
      "en": [
        "Mirrors active Org emblem"
      ],
      "fr": [
        "Reproduit l'embleme d'Organisation"
      ]
    }
  },
  "jn:citizen_inventory": {
    "render3d": "assets/renders3d/entities/citizen_inventory.png",
    "roleBadge": {
      "en": "11-Slot Storage Proxy",
      "fr": "Proxy Inventaire 11 Slots"
    },
    "desc": {
      "en": "Invisible persistent container entity linked to each citizen & soldier to hold 11 inventory slots cleanly across unloads.",
      "fr": "Entite conteneur persistante invisible geree par citizen_inventory_manager.js (11 emplacements par citoyen/soldat)."
    },
    "traits": {
      "en": [
        "11 persistent item slots per NPC",
        "Synced automatically on interaction"
      ],
      "fr": [
        "11 emplacements persistants par PNJ",
        "Synchronise a l'interaction"
      ]
    }
  },
  "jn:grave_storage": {
    "render3d": "assets/renders3d/entities/grave_storage.png",
    "roleBadge": {
      "en": "Grave Recovery Container",
      "fr": "Conteneur de Tombe"
    },
    "desc": {
      "en": "Storage container spawned beneath jn:grave on citizen death so players can recover dropped tools, coins, and equipment.",
      "fr": "Conteneur genere sous jn:grave au deces d'un citoyen pour recuperer outils et equipement."
    },
    "traits": {
      "en": [
        "Stores deceased citizen gear until retrieved"
      ],
      "fr": [
        "Conserve les objets du defunt jusqu'a recuperation"
      ]
    }
  },
  "jn:raid_bar": {
    "render3d": "assets/renders3d/entities/raid_bar.png",
    "roleBadge": {
      "en": "Bossbar Tracker",
      "fr": "Barre de Raid"
    },
    "desc": {
      "en": "Internal bossbar anchor entity displaying live Siege / Marauder Raid progress to nearby players.",
      "fr": "Entite technique affichant la barre de progression lors des Sieges et Raids Maraudeurs."
    },
    "traits": {
      "en": [
        "Drives live Siege / Raid HUD bossbar"
      ],
      "fr": [
        "Pilote la barre de Raid / Siege HUD"
      ]
    }
  },
  "jn:exclamation": {
    "render3d": "assets/renders3d/entities/exclamation.png",
    "roleBadge": {
      "en": "Status Marker (Yellow)",
      "fr": "Marqueur Quete / Alerte (Jaune)"
    },
    "desc": {
      "en": "Floating marker anchored above citizens/stations needing attention or offering citizen quests.",
      "fr": "Marqueur flottant indiquant une requete citoyenne ou besoin d'attention."
    },
    "traits": {
      "en": [
        "Hovering indicator billboard"
      ],
      "fr": [
        "Indicateur flottant au-dessus du PNJ"
      ]
    }
  },
  "jn:exclamation_green": {
    "render3d": "assets/renders3d/entities/exclamation_green.png",
    "roleBadge": {
      "en": "Status Marker (Green)",
      "fr": "Marqueur Positif / Soin (Vert)"
    },
    "desc": {
      "en": "Floating green marker triggered on positive citizen events, healing completion, or ready rewards.",
      "fr": "Marqueur vert declenche lors de soins, reussites ou recompenses pretes."
    },
    "traits": {
      "en": [
        "Hovering green indicator"
      ],
      "fr": [
        "Indicateur flottant vert"
      ]
    }
  },
  "jn:exclamation_red": {
    "render3d": "assets/renders3d/entities/exclamation_red.png",
    "roleBadge": {
      "en": "Status Marker (Red)",
      "fr": "Marqueur Critique (Rouge)"
    },
    "desc": {
      "en": "Floating red marker signaling starvation, disease infection, missing workstation storage, or raid danger.",
      "fr": "Marqueur rouge signalant famine, maladie, coffre manquant ou danger."
    },
    "traits": {
      "en": [
        "Hovering urgent alert indicator"
      ],
      "fr": [
        "Indicateur d'alerte urgente"
      ]
    }
  }
};
window.JN_MILITARY_DATA = {
  "grades": [
    {
      "id": "soldier",
      "name": {
        "en": "Soldier (Rank I)",
        "fr": "Soldat (Grade I)"
      },
      "hp": 20,
      "atk": 1,
      "kb": "0%",
      "minCmdt": 1,
      "research": null,
      "aura": {
        "en": "None",
        "fr": "Aucune"
      },
      "classes": [
        "warrior",
        "archer",
        "crossbowman",
        "guardian",
        "doctor"
      ]
    },
    {
      "id": "knight",
      "name": {
        "en": "Knight (Rank II)",
        "fr": "Chevalier (Grade II)"
      },
      "hp": 40,
      "atk": 2,
      "kb": "—",
      "minCmdt": 1,
      "research": "mil_rank_knight",
      "aura": {
        "en": "None",
        "fr": "Aucune"
      },
      "classes": [
        "warrior",
        "elite_guard",
        "tank",
        "royal_guard",
        "cavalry",
        "doctor"
      ]
    },
    {
      "id": "captain",
      "name": {
        "en": "Captain (Rank III)",
        "fr": "Capitaine (Grade III)"
      },
      "hp": 60,
      "atk": 4,
      "kb": "—",
      "minCmdt": 11,
      "research": "mil_rank_captain",
      "aura": {
        "en": "Strength I to own Regiment within 32 blocks (requires mil_aura_captain)",
        "fr": "Force I aux soldats de son regiment dans 32 blocs (requiert mil_aura_captain)"
      },
      "classes": []
    },
    {
      "id": "general",
      "name": {
        "en": "General (Rank IV)",
        "fr": "General (Grade IV)"
      },
      "hp": 100,
      "atk": 6,
      "kb": "—",
      "minCmdt": 19,
      "research": "mil_rank_general",
      "aura": {
        "en": "Strength II + Speed I to all allied soldiers & Nation players within 100 blocks (requires mil_aura_general)",
        "fr": "Force II + Vitesse I a toute l'armee alliee & joueurs de la Nation dans 100 blocs (requiert mil_aura_general)"
      },
      "classes": []
    }
  ],
  "classes": [
    {
      "id": "warrior",
      "name": {
        "en": "Warrior",
        "fr": "Guerrier"
      },
      "cost": 40,
      "grades": [
        "soldier",
        "knight"
      ],
      "research": null,
      "combat": {
        "en": "Balanced melee infantry armed with iron/custom blades (+5 melee when armed).",
        "fr": "Infanterie de melee polyvalente armee d'une lame (+5 en melee arme)."
      },
      "desc": {
        "en": "Core melee frontline unit available without extra research.",
        "fr": "Unite de base au corps a corps disponible des le depart sans recherche."
      }
    },
    {
      "id": "archer",
      "name": {
        "en": "Archer",
        "fr": "Archer"
      },
      "cost": 50,
      "grades": [
        "soldier"
      ],
      "research": "mil_class_skirmishers",
      "combat": {
        "en": "Ranged Bow AI (pulls arrows from Nation Ammo storage).",
        "fr": "Combat a distance a l'arc (consomme les fleches de l'armurerie/stock)."
      },
      "desc": {
        "en": "Long-range bow sharpshooter engaging threats from afar.",
        "fr": "Tireur d'elite a l'arc decochant des fleches a distance."
      }
    },
    {
      "id": "crossbowman",
      "name": {
        "en": "Crossbowman",
        "fr": "Arbaletrier"
      },
      "cost": 60,
      "grades": [
        "soldier"
      ],
      "research": "mil_class_skirmishers",
      "combat": {
        "en": "Heavy Ranged Crossbow AI with armor-piercing bolts.",
        "fr": "Tireur lourd a distance equipe d'une arbalete perforante."
      },
      "desc": {
        "en": "Slow-reload, high-impact ranged shooter.",
        "fr": "Tireur lourd equipe d'une arbalete perforante."
      }
    },
    {
      "id": "guardian",
      "name": {
        "en": "Guardian",
        "fr": "Gardien"
      },
      "cost": 50,
      "grades": [
        "soldier"
      ],
      "research": "mil_class_guardians",
      "combat": {
        "en": "Defensive shield sentinel guarding citizens & perimeter.",
        "fr": "Sentinelle defensive equipee d'un bouclier."
      },
      "desc": {
        "en": "Protects civilians and holds bottlenecks with a sturdy shield.",
        "fr": "Sentinelle protectrice equipee d'un bouclier defensif."
      }
    },
    {
      "id": "elite_guard",
      "name": {
        "en": "Elite Guard",
        "fr": "Garde d'Elite"
      },
      "cost": 90,
      "grades": [
        "knight"
      ],
      "research": "mil_class_elite_guard",
      "combat": {
        "en": "Veteran Knight specialization trained in parry & counter-strikes.",
        "fr": "Specialisation de Chevalier entrainee a la parade et contre-attaque."
      },
      "desc": {
        "en": "Superior 1v1 duelist defending high-value targets.",
        "fr": "Chevalier d'elite maniant des techniques de parade avancees."
      }
    },
    {
      "id": "tank",
      "name": {
        "en": "Tank (Heavy Guard)",
        "fr": "Garde Lourd (Tank)"
      },
      "cost": 80,
      "grades": [
        "knight"
      ],
      "research": "mil_class_tanks",
      "combat": {
        "en": "Scale 1.05x, 85% Knockback Resistance, 6 Base Attack.",
        "fr": "Taille 1,05x, 85% Resistance au recul, 6 Degats de base."
      },
      "desc": {
        "en": "Heavy armored juggernaut absorbing shockwaves and pushing lines.",
        "fr": "Blinde lourd encaissant les charges et repoussant les ennemis."
      }
    },
    {
      "id": "royal_guard",
      "name": {
        "en": "Royal Guard",
        "fr": "Garde Royal"
      },
      "cost": 100,
      "grades": [
        "knight"
      ],
      "research": "mil_class_royal_guard",
      "combat": {
        "en": "Pretorian Knight bodyguard (5+ melee attack) prioritizing King/Queen & Capital.",
        "fr": "Garde pretorienne (5+ atq melee) dediee a la protection royale et Capitale."
      },
      "desc": {
        "en": "Maximum armor and loyalty for defending monarchs.",
        "fr": "Garde pretorienne d'elite offrant une protection maximale."
      }
    },
    {
      "id": "cavalry",
      "name": {
        "en": "Cavalry",
        "fr": "Cavalier"
      },
      "cost": 120,
      "grades": [
        "knight"
      ],
      "research": "mil_class_cavalry",
      "combat": {
        "en": "High-mobility shock unit designed to flank raiders & break lines.",
        "fr": "Unite de choc tres mobile pour contourner et briser les lignes."
      },
      "desc": {
        "en": "Fastest shock knight class in the Frontier army.",
        "fr": "Unite montee rapide brisant les lignes de formation adverses."
      }
    },
    {
      "id": "doctor",
      "name": {
        "en": "Field Doctor (Medic)",
        "fr": "Docteur de Campagne"
      },
      "cost": 50,
      "grades": [
        "soldier",
        "knight"
      ],
      "research": "mil_class_doctor",
      "combat": {
        "en": "Heals wounded citizens & soldiers every 5 min (consumes 1 Bandage per ally).",
        "fr": "Soigne citoyens et soldats blesses toutes les 5 min (1 Bandage = 1 allie)."
      },
      "desc": {
        "en": "Military combat medic sustaining troops during prolonged sieges.",
        "fr": "Soutien medical maintenant vos regiments en vie durant les sieges."
      }
    }
  ],
  "trainingRanks": [
    {
      "rank": 1,
      "label": {
        "en": "Recruit (Rank I -> II)",
        "fr": "Recrue (Rang I -> II)"
      },
      "xpReq": 100
    },
    {
      "rank": 2,
      "label": {
        "en": "Trained (Rank II -> III)",
        "fr": "Entraine (Rang II -> III)"
      },
      "xpReq": 250
    },
    {
      "rank": 3,
      "label": {
        "en": "Seasoned (Rank III -> IV)",
        "fr": "Aguerris (Rang III -> IV)"
      },
      "xpReq": 500
    },
    {
      "rank": 4,
      "label": {
        "en": "Veteran (Rank IV -> V)",
        "fr": "Veteran (Rang IV -> V)"
      },
      "xpReq": 1000
    },
    {
      "rank": 5,
      "label": {
        "en": "Master (Max Rank V)",
        "fr": "Maitre (Rang Max V)"
      },
      "xpReq": 0
    }
  ],
  "combatStats": [
    {
      "id": "meleeMastery",
      "name": {
        "en": "Melee Mastery (1-20)",
        "fr": "Maitrise Melee (1-20)"
      },
      "formula": "floor(Force*0.5) + (Agilite>=10 ? 1:0) + (Force>=16 ? 1:0)"
    },
    {
      "id": "marksmanship",
      "name": {
        "en": "Marksmanship (1-20)",
        "fr": "Tir & Precision (1-20)"
      },
      "formula": "floor(Precision*0.5) + floor(Agilite*0.25) + (Precision>=16 ? 1:0)"
    },
    {
      "id": "fortitude",
      "name": {
        "en": "Fortitude (1-20)",
        "fr": "Robustesse (1-20)"
      },
      "formula": "floor(Constitution*0.5) + (Force>=10 ? 1:0) + (Constitution>=16 ? 1:0)"
    },
    {
      "id": "discipline",
      "name": {
        "en": "Discipline (1-20)",
        "fr": "Discipline (1-20)"
      },
      "formula": "floor(Commandement*0.5) + floor(Intelligence*0.25) + (Commandement>=16 ? 1:0)"
    }
  ],
  "xpLearningBonus": "Intelligence 1-10: x1.0 | 11-15: x1.25 | 16-20: x1.50 XP",
  "maxPerRegiment": 10
};
window.JN_CUSTOMIZER_DATA = {"sheets":{"male_skins":"assets/customizer/male_skins.png","male_eyes":"assets/customizer/male_eyes.png","male_tops":"assets/customizer/male_tops.png","male_bottoms":"assets/customizer/male_bottoms.png","male_shoes":"assets/customizer/male_shoes.png","knight_armor_male":"assets/customizer/knight_armor_male.png","female_skins":"assets/customizer/female_skins.png","female_eyes":"assets/customizer/female_eyes.png","female_tops":"assets/customizer/female_tops.png","female_shoes":"assets/customizer/female_shoes.png","knight_armor_female":"assets/customizer/knight_armor_female.png","male_hair":["assets/customizer/male_hair_s0.png","assets/customizer/male_hair_s1.png","assets/customizer/male_hair_s2.png","assets/customizer/male_hair_s3.png","assets/customizer/male_hair_s4.png","assets/customizer/male_hair_s5.png","assets/customizer/male_hair_s6.png","assets/customizer/male_hair_s7.png","assets/customizer/male_hair_s8.png","assets/customizer/male_hair_s9.png","assets/customizer/male_hair_s10.png"],"female_hair":["assets/customizer/female_hair_s0.png","assets/customizer/female_hair_s1.png","assets/customizer/female_hair_s2.png","assets/customizer/female_hair_s3.png","assets/customizer/female_hair_s4.png","assets/customizer/female_hair_s5.png","assets/customizer/female_hair_s6.png","assets/customizer/female_hair_s7.png","assets/customizer/female_hair_s8.png","assets/customizer/female_hair_s9.png","assets/customizer/female_hair_s10.png"]},"skinSwatches":["#efcdae","#eaba96","#dfac7b","#ce9365","#c78a60","#c57d50","#bb7a4e","#a96d3f","#7b492b","#6a3c21","#4e331d","#f1ceaf","#ebcaa6","#e2b082","#cd9d65","#c48955","#b8804d","#ad7048","#a0613a","#63361a","#582d1a","#eed3bb","#e7c6a2","#dea772","#d2a069","#c7905c","#b47d46","#a9723e","#aa6b42","#a66539","#995b39","#6e432b"],"hairSwatches":["#2d1d15","#3e261a","#613d2a","#814e2c","#935f31","#a57142","#847162","#713121","#934628","#bf5921","#612219","#5f212c","#c38271","#d48141","#c49252","#d4a970","#e3b263","#e8b34e","#d4934e","#d4c1a3","#eee3c9","#eed8a9","#f3e6ba","#e3b27d","#0b0b0b","#1b1613","#2c2119","#13171e","#312620","#a59381","#816b5d","#715a4c","#c3beb8","#ae7d71","#93717f"],"skinPools":{"white":[0,1,2,11,13,21,23],"asian":[12,14,15,22,23,24],"bronze":[3,4,5,6,7,15,16,17,18,25,26,27,28,29,30],"black":[8,9,10,19,20,31]},"maleTops":[{"id":0,"name":"Top0","region":"european","integratedBottom":false},{"id":1,"name":"Top1","region":"european","integratedBottom":false},{"id":2,"name":"Top0 11","region":"european","integratedBottom":false},{"id":3,"name":"Top0 11 1","region":"european","integratedBottom":false},{"id":4,"name":"Top0 12","region":"european","integratedBottom":false},{"id":5,"name":"Top0 13","region":"european","integratedBottom":false},{"id":6,"name":"Top0 13 1","region":"european","integratedBottom":false},{"id":7,"name":"Court Clothing","region":"european","integratedBottom":true},{"id":8,"name":"Court Clothing 1","region":"european","integratedBottom":true},{"id":9,"name":"Court Clothing 2","region":"european","integratedBottom":true},{"id":10,"name":"Peasant Common","region":"european","integratedBottom":false},{"id":11,"name":"Peasant Common 1","region":"european","integratedBottom":false},{"id":12,"name":"Peasant Fashionable","region":"european","integratedBottom":false},{"id":13,"name":"Top0 13 4","region":"european","integratedBottom":false},{"id":14,"name":"Top0 13 5","region":"european","integratedBottom":false},{"id":15,"name":"Top0 13 6","region":"european","integratedBottom":false},{"id":16,"name":"Greek Common","region":"mediterranean","integratedBottom":true},{"id":17,"name":"Greek Common Gold","region":"mediterranean","integratedBottom":true},{"id":18,"name":"Greek Common Reverse","region":"mediterranean","integratedBottom":true},{"id":19,"name":"Greek Common Reverse Blue","region":"mediterranean","integratedBottom":true},{"id":20,"name":"Greek Common Reverse Red","region":"mediterranean","integratedBottom":true},{"id":21,"name":"Greek Toga","region":"mediterranean","integratedBottom":true},{"id":22,"name":"Greek Toga Reverse","region":"mediterranean","integratedBottom":true},{"id":23,"name":"Italian Common","region":"mediterranean","integratedBottom":true},{"id":24,"name":"Italian Common Blue","region":"mediterranean","integratedBottom":true},{"id":25,"name":"Italian Common Red","region":"mediterranean","integratedBottom":true},{"id":26,"name":"Roman Toga Gold","region":"mediterranean","integratedBottom":true},{"id":27,"name":"Roman Toga Typical","region":"mediterranean","integratedBottom":true},{"id":28,"name":"Sea Robes Blue Common","region":"asian","integratedBottom":true},{"id":29,"name":"Sea Robes Blue Gold","region":"asian","integratedBottom":true},{"id":30,"name":"Sea Robes Green Common","region":"asian","integratedBottom":true},{"id":31,"name":"Sea Robes Green Gold","region":"asian","integratedBottom":true},{"id":32,"name":"Sea Robes Red Common","region":"asian","integratedBottom":true},{"id":33,"name":"Sea Robes Red Gold","region":"asian","integratedBottom":true}],"maleBottoms":[{"id":0,"name":"Bottom0","empty":false},{"id":1,"name":"Bottom1","empty":false},{"id":2,"name":"Bottom2","empty":false},{"id":3,"name":"Bottom3","empty":false},{"id":4,"name":"Bottom0 8","empty":false},{"id":5,"name":"Bottom0 9","empty":false},{"id":6,"name":"Bottom0 10","empty":false},{"id":7,"name":"Bottom0 10 1","empty":false},{"id":8,"name":"Pants","empty":false},{"id":9,"name":"Pants2","empty":false},{"id":10,"name":"Trouser Boots","empty":false},{"id":11,"name":"Trouser Boots Brown","empty":false},{"id":12,"name":"Bottom0 8 1","empty":false},{"id":13,"name":"Empty","empty":false}],"femaleTops":[{"id":0,"name":"[Medieval] Dress 1","region":"european"},{"id":1,"name":"[Medieval] Dress 2","region":"european"},{"id":2,"name":"[Medieval] Dress 3","region":"european"},{"id":3,"name":"[Medieval] Dress 4","region":"european"},{"id":4,"name":"[Medieval] Dress 5","region":"european"},{"id":5,"name":"[Medieval] Dress 6","region":"european"},{"id":6,"name":"[Medieval] Dress 7","region":"european"},{"id":7,"name":"[Medieval] Dress 8","region":"european"},{"id":8,"name":"[Medieval] Dress 9","region":"european"},{"id":9,"name":"[Medieval] Dress 10","region":"european"},{"id":10,"name":"[Medieval] Dress 11","region":"european"},{"id":11,"name":"[Medieval] Dress 12","region":"european"},{"id":12,"name":"[Medieval] Dress 13","region":"european"},{"id":13,"name":"[Medieval] Dress 14","region":"european"},{"id":14,"name":"[Medieval] Dress 15","region":"european"},{"id":15,"name":"[Medieval] Dress 16","region":"european"},{"id":16,"name":"[Medieval] Dress 17","region":"european"},{"id":17,"name":"[Medieval] Dress 18","region":"european"},{"id":18,"name":"[Medieval] Dress 19","region":"european"},{"id":19,"name":"[Medieval] Dress 20","region":"european"},{"id":20,"name":"[Medieval] Dress 21","region":"european"},{"id":21,"name":"[Medieval] Dress 22","region":"european"},{"id":22,"name":"[Medieval] Dress 23","region":"european"},{"id":23,"name":"[Medieval] Dress 24","region":"european"},{"id":24,"name":"[Medieval] Dress 25","region":"european"},{"id":25,"name":"[Asian] Dress 1","region":"asian"},{"id":26,"name":"[Asian] Dress 2","region":"asian"},{"id":27,"name":"[Asian] Dress 3","region":"asian"},{"id":28,"name":"[Asian] Dress 4","region":"asian"},{"id":29,"name":"[Asian] Dress 5","region":"asian"},{"id":30,"name":"[Asian] Dress 6","region":"asian"},{"id":31,"name":"[Asian] Dress 7","region":"asian"},{"id":32,"name":"[Asian] Dress 8","region":"asian"},{"id":33,"name":"[Asian] Dress 9","region":"asian"},{"id":34,"name":"[Asian] Dress 10","region":"asian"},{"id":35,"name":"[Asian] Dress 11","region":"asian"},{"id":36,"name":"[Asian] Dress 12","region":"asian"},{"id":37,"name":"[Asian] Dress 13","region":"asian"},{"id":38,"name":"[Asian] Dress 14","region":"asian"},{"id":39,"name":"[Asian] Dress 15","region":"asian"},{"id":40,"name":"[Asian] Dress 16","region":"asian"},{"id":41,"name":"[Asian] Dress 17","region":"asian"},{"id":42,"name":"[Asian] Dress 18","region":"asian"},{"id":43,"name":"[Asian] Dress 19","region":"asian"},{"id":44,"name":"[Asian] Dress 20","region":"asian"}],"shoesCount":4,"eyesCount":16,"hairStyleCount":11,"hairColorCount":35,"geometries":{"male":{"skin":[{"pts":[[-4,24,2],[4,24,2],[4,12,2],[-4,12,2]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4,24,-2],[-4,24,-2],[-4,12,-2],[4,12,-2]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4,24,-2],[-4,24,2],[-4,12,2],[-4,12,-2]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4,24,2],[4,24,-2],[4,12,-2],[4,12,2]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4,24,-2],[4,24,-2],[4,24,2],[-4,24,2]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4,12,2],[4,12,2],[4,12,-2],[-4,12,-2]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4,32,4],[4,32,4],[4,24,4],[-4,24,4]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4,32,-4],[-4,32,-4],[-4,24,-4],[4,24,-4]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4,32,-4],[-4,32,4],[-4,24,4],[-4,24,-4]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4,32,4],[4,32,-4],[4,24,-4],[4,24,4]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4,32,-4],[4,32,-4],[4,32,4],[-4,32,4]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4,24,4],[4,24,4],[4,24,-4],[-4,24,-4]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.02,32.02,4.02],[4.02,32.02,4.02],[4.02,23.98,4.02],[-4.02,23.98,4.02]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.02,32.02,-4.02],[-4.02,32.02,-4.02],[-4.02,23.98,-4.02],[4.02,23.98,-4.02]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.02,32.02,-4.02],[-4.02,32.02,4.02],[-4.02,23.98,4.02],[-4.02,23.98,-4.02]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.02,32.02,4.02],[4.02,32.02,-4.02],[4.02,23.98,-4.02],[4.02,23.98,4.02]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.02,32.02,-4.02],[4.02,32.02,-4.02],[4.02,32.02,4.02],[-4.02,32.02,4.02]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.02,23.98,4.02],[4.02,23.98,4.02],[4.02,23.98,-4.02],[-4.02,23.98,-4.02]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[4,24,2],[8,24,2],[8,12,2],[4,12,2]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8,24,-2],[4,24,-2],[4,12,-2],[8,12,-2]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[4,24,-2],[4,24,2],[4,12,2],[4,12,-2]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8,24,2],[8,24,-2],[8,12,-2],[8,12,2]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[4,24,-2],[8,24,-2],[8,24,2],[4,24,2]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[4,12,2],[8,12,2],[8,12,-2],[4,12,-2]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.98,24.02,2.02],[8.02,24.02,2.02],[8.02,11.98,2.02],[3.98,11.98,2.02]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.02,24.02,-2.02],[3.98,24.02,-2.02],[3.98,11.98,-2.02],[8.02,11.98,-2.02]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.98,24.02,-2.02],[3.98,24.02,2.02],[3.98,11.98,2.02],[3.98,11.98,-2.02]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.02,24.02,2.02],[8.02,24.02,-2.02],[8.02,11.98,-2.02],[8.02,11.98,2.02]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.98,24.02,-2.02],[8.02,24.02,-2.02],[8.02,24.02,2.02],[3.98,24.02,2.02]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.98,11.98,2.02],[8.02,11.98,2.02],[8.02,11.98,-2.02],[3.98,11.98,-2.02]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8,24,2],[-4,24,2],[-4,12,2],[-8,12,2]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-4,24,-2],[-8,24,-2],[-8,12,-2],[-4,12,-2]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8,24,-2],[-8,24,2],[-8,12,2],[-8,12,-2]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-4,24,2],[-4,24,-2],[-4,12,-2],[-4,12,2]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8,24,-2],[-4,24,-2],[-4,24,2],[-8,24,2]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8,12,2],[-4,12,2],[-4,12,-2],[-8,12,-2]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.02,24.02,2.02],[-3.98,24.02,2.02],[-3.98,11.98,2.02],[-8.02,11.98,2.02]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.98,24.02,-2.02],[-8.02,24.02,-2.02],[-8.02,11.98,-2.02],[-3.98,11.98,-2.02]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.02,24.02,-2.02],[-8.02,24.02,2.02],[-8.02,11.98,2.02],[-8.02,11.98,-2.02]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.98,24.02,2.02],[-3.98,24.02,-2.02],[-3.98,11.98,-2.02],[-3.98,11.98,2.02]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.02,24.02,-2.02],[-3.98,24.02,-2.02],[-3.98,24.02,2.02],[-8.02,24.02,2.02]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.02,11.98,2.02],[-3.98,11.98,2.02],[-3.98,11.98,-2.02],[-8.02,11.98,-2.02]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.02,24.02,2.02],[4.02,24.02,2.02],[4.02,11.98,2.02],[-4.02,11.98,2.02]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.02,24.02,-2.02],[-4.02,24.02,-2.02],[-4.02,11.98,-2.02],[4.02,11.98,-2.02]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.02,24.02,-2.02],[-4.02,24.02,2.02],[-4.02,11.98,2.02],[-4.02,11.98,-2.02]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.02,24.02,2.02],[4.02,24.02,-2.02],[4.02,11.98,-2.02],[4.02,11.98,2.02]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.02,24.02,-2.02],[4.02,24.02,-2.02],[4.02,24.02,2.02],[-4.02,24.02,2.02]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.02,11.98,2.02],[4.02,11.98,2.02],[4.02,11.98,-2.02],[-4.02,11.98,-2.02]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[0,12,2],[4,12,2],[4,0,2],[0,0,2]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4,12,-2],[0,12,-2],[0,0,-2],[4,0,-2]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[0,12,-2],[0,12,2],[0,0,2],[0,0,-2]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4,12,2],[4,12,-2],[4,0,-2],[4,0,2]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[0,12,-2],[4,12,-2],[4,12,2],[0,12,2]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[0,0,2],[4,0,2],[4,0,-2],[0,0,-2]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.02,12.02,2.02],[4.02,12.02,2.02],[4.02,-0.02,2.02],[-0.02,-0.02,2.02]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.02,12.02,-2.02],[-0.02,12.02,-2.02],[-0.02,-0.02,-2.02],[4.02,-0.02,-2.02]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.02,12.02,-2.02],[-0.02,12.02,2.02],[-0.02,-0.02,2.02],[-0.02,-0.02,-2.02]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.02,12.02,2.02],[4.02,12.02,-2.02],[4.02,-0.02,-2.02],[4.02,-0.02,2.02]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.02,12.02,-2.02],[4.02,12.02,-2.02],[4.02,12.02,2.02],[-0.02,12.02,2.02]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.02,-0.02,2.02],[4.02,-0.02,2.02],[4.02,-0.02,-2.02],[-0.02,-0.02,-2.02]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4,12,2],[0,12,2],[0,0,2],[-4,0,2]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0,12,-2],[-4,12,-2],[-4,0,-2],[0,0,-2]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4,12,-2],[-4,12,2],[-4,0,2],[-4,0,-2]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0,12,2],[0,12,-2],[0,0,-2],[0,0,2]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4,12,-2],[0,12,-2],[0,12,2],[-4,12,2]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4,0,2],[0,0,2],[0,0,-2],[-4,0,-2]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.02,12.02,2.02],[0.02,12.02,2.02],[0.02,-0.02,2.02],[-4.02,-0.02,2.02]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.02,12.02,-2.02],[-4.02,12.02,-2.02],[-4.02,-0.02,-2.02],[0.02,-0.02,-2.02]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.02,12.02,-2.02],[-4.02,12.02,2.02],[-4.02,-0.02,2.02],[-4.02,-0.02,-2.02]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.02,12.02,2.02],[0.02,12.02,-2.02],[0.02,-0.02,-2.02],[0.02,-0.02,2.02]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.02,12.02,-2.02],[0.02,12.02,-2.02],[0.02,12.02,2.02],[-4.02,12.02,2.02]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.02,-0.02,2.02],[0.02,-0.02,2.02],[0.02,-0.02,-2.02],[-4.02,-0.02,-2.02]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"eyes":[{"pts":[[-4.05,32.05,4.05],[4.05,32.05,4.05],[4.05,23.95,4.05],[-4.05,23.95,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.05,32.05,-4.05],[-4.05,32.05,-4.05],[-4.05,23.95,-4.05],[4.05,23.95,-4.05]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[-4.05,32.05,4.05],[-4.05,23.95,4.05],[-4.05,23.95,-4.05]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.05,32.05,4.05],[4.05,32.05,-4.05],[4.05,23.95,-4.05],[4.05,23.95,4.05]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[4.05,32.05,-4.05],[4.05,32.05,4.05],[-4.05,32.05,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.05,23.95,4.05],[4.05,23.95,4.05],[4.05,23.95,-4.05],[-4.05,23.95,-4.05]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"}],"bottom":[{"pts":[[-4.05,24.05,2.05],[4.05,24.05,2.05],[4.05,11.95,2.05],[-4.05,11.95,2.05]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.05,24.05,-2.05],[-4.05,24.05,-2.05],[-4.05,11.95,-2.05],[4.05,11.95,-2.05]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.05,24.05,-2.05],[-4.05,24.05,2.05],[-4.05,11.95,2.05],[-4.05,11.95,-2.05]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.05,24.05,2.05],[4.05,24.05,-2.05],[4.05,11.95,-2.05],[4.05,11.95,2.05]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.05,24.05,-2.05],[4.05,24.05,-2.05],[4.05,24.05,2.05],[-4.05,24.05,2.05]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.05,11.95,2.05],[4.05,11.95,2.05],[4.05,11.95,-2.05],[-4.05,11.95,-2.05]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.05,32.05,4.05],[4.05,32.05,4.05],[4.05,23.95,4.05],[-4.05,23.95,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.05,32.05,-4.05],[-4.05,32.05,-4.05],[-4.05,23.95,-4.05],[4.05,23.95,-4.05]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[-4.05,32.05,4.05],[-4.05,23.95,4.05],[-4.05,23.95,-4.05]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.05,32.05,4.05],[4.05,32.05,-4.05],[4.05,23.95,-4.05],[4.05,23.95,4.05]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[4.05,32.05,-4.05],[4.05,32.05,4.05],[-4.05,32.05,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.05,23.95,4.05],[4.05,23.95,4.05],[4.05,23.95,-4.05],[-4.05,23.95,-4.05]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.1,32.1,4.1],[4.1,32.1,4.1],[4.1,23.9,4.1],[-4.1,23.9,4.1]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.1,32.1,-4.1],[-4.1,32.1,-4.1],[-4.1,23.9,-4.1],[4.1,23.9,-4.1]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.1,32.1,-4.1],[-4.1,32.1,4.1],[-4.1,23.9,4.1],[-4.1,23.9,-4.1]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.1,32.1,4.1],[4.1,32.1,-4.1],[4.1,23.9,-4.1],[4.1,23.9,4.1]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.1,32.1,-4.1],[4.1,32.1,-4.1],[4.1,32.1,4.1],[-4.1,32.1,4.1]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.1,23.9,4.1],[4.1,23.9,4.1],[4.1,23.9,-4.1],[-4.1,23.9,-4.1]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.95,24.05,2.05],[8.05,24.05,2.05],[8.05,11.95,2.05],[3.95,11.95,2.05]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.05,24.05,-2.05],[3.95,24.05,-2.05],[3.95,11.95,-2.05],[8.05,11.95,-2.05]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.95,24.05,-2.05],[3.95,24.05,2.05],[3.95,11.95,2.05],[3.95,11.95,-2.05]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.05,24.05,2.05],[8.05,24.05,-2.05],[8.05,11.95,-2.05],[8.05,11.95,2.05]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.95,24.05,-2.05],[8.05,24.05,-2.05],[8.05,24.05,2.05],[3.95,24.05,2.05]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.95,11.95,2.05],[8.05,11.95,2.05],[8.05,11.95,-2.05],[3.95,11.95,-2.05]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.92,24.08,2.08],[8.08,24.08,2.08],[8.08,11.92,2.08],[3.92,11.92,2.08]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.08,24.08,-2.08],[3.92,24.08,-2.08],[3.92,11.92,-2.08],[8.08,11.92,-2.08]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.92,24.08,-2.08],[3.92,24.08,2.08],[3.92,11.92,2.08],[3.92,11.92,-2.08]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.08,24.08,2.08],[8.08,24.08,-2.08],[8.08,11.92,-2.08],[8.08,11.92,2.08]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.92,24.08,-2.08],[8.08,24.08,-2.08],[8.08,24.08,2.08],[3.92,24.08,2.08]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.92,11.92,2.08],[8.08,11.92,2.08],[8.08,11.92,-2.08],[3.92,11.92,-2.08]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.05,24.05,2.05],[-3.95,24.05,2.05],[-3.95,11.95,2.05],[-8.05,11.95,2.05]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.95,24.05,-2.05],[-8.05,24.05,-2.05],[-8.05,11.95,-2.05],[-3.95,11.95,-2.05]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.05,24.05,-2.05],[-8.05,24.05,2.05],[-8.05,11.95,2.05],[-8.05,11.95,-2.05]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.95,24.05,2.05],[-3.95,24.05,-2.05],[-3.95,11.95,-2.05],[-3.95,11.95,2.05]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.05,24.05,-2.05],[-3.95,24.05,-2.05],[-3.95,24.05,2.05],[-8.05,24.05,2.05]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.05,11.95,2.05],[-3.95,11.95,2.05],[-3.95,11.95,-2.05],[-8.05,11.95,-2.05]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.08,24.08,2.08],[-3.92,24.08,2.08],[-3.92,11.92,2.08],[-8.08,11.92,2.08]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.92,24.08,-2.08],[-8.08,24.08,-2.08],[-8.08,11.92,-2.08],[-3.92,11.92,-2.08]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.08,24.08,-2.08],[-8.08,24.08,2.08],[-8.08,11.92,2.08],[-8.08,11.92,-2.08]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.92,24.08,2.08],[-3.92,24.08,-2.08],[-3.92,11.92,-2.08],[-3.92,11.92,2.08]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.08,24.08,-2.08],[-3.92,24.08,-2.08],[-3.92,24.08,2.08],[-8.08,24.08,2.08]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.08,11.92,2.08],[-3.92,11.92,2.08],[-3.92,11.92,-2.08],[-8.08,11.92,-2.08]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.08,24.08,2.08],[4.08,24.08,2.08],[4.08,11.92,2.08],[-4.08,11.92,2.08]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.08,24.08,-2.08],[-4.08,24.08,-2.08],[-4.08,11.92,-2.08],[4.08,11.92,-2.08]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.08,24.08,-2.08],[-4.08,24.08,2.08],[-4.08,11.92,2.08],[-4.08,11.92,-2.08]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.08,24.08,2.08],[4.08,24.08,-2.08],[4.08,11.92,-2.08],[4.08,11.92,2.08]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.08,24.08,-2.08],[4.08,24.08,-2.08],[4.08,24.08,2.08],[-4.08,24.08,2.08]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.08,11.92,2.08],[4.08,11.92,2.08],[4.08,11.92,-2.08],[-4.08,11.92,-2.08]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[-0.05,12.05,2.05],[4.05,12.05,2.05],[4.05,-0.05,2.05],[-0.05,-0.05,2.05]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.05,12.05,-2.05],[-0.05,12.05,-2.05],[-0.05,-0.05,-2.05],[4.05,-0.05,-2.05]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.05,12.05,-2.05],[-0.05,12.05,2.05],[-0.05,-0.05,2.05],[-0.05,-0.05,-2.05]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.05,12.05,2.05],[4.05,12.05,-2.05],[4.05,-0.05,-2.05],[4.05,-0.05,2.05]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.05,12.05,-2.05],[4.05,12.05,-2.05],[4.05,12.05,2.05],[-0.05,12.05,2.05]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.05,-0.05,2.05],[4.05,-0.05,2.05],[4.05,-0.05,-2.05],[-0.05,-0.05,-2.05]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.08,12.08,2.08],[4.08,12.08,2.08],[4.08,-0.08,2.08],[-0.08,-0.08,2.08]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.08,12.08,-2.08],[-0.08,12.08,-2.08],[-0.08,-0.08,-2.08],[4.08,-0.08,-2.08]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.08,12.08,-2.08],[-0.08,12.08,2.08],[-0.08,-0.08,2.08],[-0.08,-0.08,-2.08]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.08,12.08,2.08],[4.08,12.08,-2.08],[4.08,-0.08,-2.08],[4.08,-0.08,2.08]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.08,12.08,-2.08],[4.08,12.08,-2.08],[4.08,12.08,2.08],[-0.08,12.08,2.08]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.08,-0.08,2.08],[4.08,-0.08,2.08],[4.08,-0.08,-2.08],[-0.08,-0.08,-2.08]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.05,12.05,2.05],[0.05,12.05,2.05],[0.05,-0.05,2.05],[-4.05,-0.05,2.05]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.05,12.05,-2.05],[-4.05,12.05,-2.05],[-4.05,-0.05,-2.05],[0.05,-0.05,-2.05]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.05,12.05,-2.05],[-4.05,12.05,2.05],[-4.05,-0.05,2.05],[-4.05,-0.05,-2.05]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.05,12.05,2.05],[0.05,12.05,-2.05],[0.05,-0.05,-2.05],[0.05,-0.05,2.05]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.05,12.05,-2.05],[0.05,12.05,-2.05],[0.05,12.05,2.05],[-4.05,12.05,2.05]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.05,-0.05,2.05],[0.05,-0.05,2.05],[0.05,-0.05,-2.05],[-4.05,-0.05,-2.05]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.08,12.08,2.08],[0.08,12.08,2.08],[0.08,-0.08,2.08],[-4.08,-0.08,2.08]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.08,12.08,-2.08],[-4.08,12.08,-2.08],[-4.08,-0.08,-2.08],[0.08,-0.08,-2.08]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.08,12.08,-2.08],[-4.08,12.08,2.08],[-4.08,-0.08,2.08],[-4.08,-0.08,-2.08]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.08,12.08,2.08],[0.08,12.08,-2.08],[0.08,-0.08,-2.08],[0.08,-0.08,2.08]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.08,12.08,-2.08],[0.08,12.08,-2.08],[0.08,12.08,2.08],[-4.08,12.08,2.08]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.08,-0.08,2.08],[0.08,-0.08,2.08],[0.08,-0.08,-2.08],[-4.08,-0.08,-2.08]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"top":[{"pts":[[-4.08,24.08,2.08],[4.08,24.08,2.08],[4.08,11.92,2.08],[-4.08,11.92,2.08]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.08,24.08,-2.08],[-4.08,24.08,-2.08],[-4.08,11.92,-2.08],[4.08,11.92,-2.08]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.08,24.08,-2.08],[-4.08,24.08,2.08],[-4.08,11.92,2.08],[-4.08,11.92,-2.08]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.08,24.08,2.08],[4.08,24.08,-2.08],[4.08,11.92,-2.08],[4.08,11.92,2.08]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.08,24.08,-2.08],[4.08,24.08,-2.08],[4.08,24.08,2.08],[-4.08,24.08,2.08]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.08,11.92,2.08],[4.08,11.92,2.08],[4.08,11.92,-2.08],[-4.08,11.92,-2.08]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.08,32.08,4.08],[4.08,32.08,4.08],[4.08,23.92,4.08],[-4.08,23.92,4.08]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.08,32.08,-4.08],[-4.08,32.08,-4.08],[-4.08,23.92,-4.08],[4.08,23.92,-4.08]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.08,32.08,-4.08],[-4.08,32.08,4.08],[-4.08,23.92,4.08],[-4.08,23.92,-4.08]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.08,32.08,4.08],[4.08,32.08,-4.08],[4.08,23.92,-4.08],[4.08,23.92,4.08]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.08,32.08,-4.08],[4.08,32.08,-4.08],[4.08,32.08,4.08],[-4.08,32.08,4.08]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.08,23.92,4.08],[4.08,23.92,4.08],[4.08,23.92,-4.08],[-4.08,23.92,-4.08]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.13,32.13,4.13],[4.13,32.13,4.13],[4.13,23.87,4.13],[-4.13,23.87,4.13]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.13,32.13,-4.13],[-4.13,32.13,-4.13],[-4.13,23.87,-4.13],[4.13,23.87,-4.13]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.13,32.13,-4.13],[-4.13,32.13,4.13],[-4.13,23.87,4.13],[-4.13,23.87,-4.13]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.13,32.13,4.13],[4.13,32.13,-4.13],[4.13,23.87,-4.13],[4.13,23.87,4.13]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.13,32.13,-4.13],[4.13,32.13,-4.13],[4.13,32.13,4.13],[-4.13,32.13,4.13]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.13,23.87,4.13],[4.13,23.87,4.13],[4.13,23.87,-4.13],[-4.13,23.87,-4.13]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.92,24.08,2.08],[8.08,24.08,2.08],[8.08,11.92,2.08],[3.92,11.92,2.08]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.08,24.08,-2.08],[3.92,24.08,-2.08],[3.92,11.92,-2.08],[8.08,11.92,-2.08]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.92,24.08,-2.08],[3.92,24.08,2.08],[3.92,11.92,2.08],[3.92,11.92,-2.08]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.08,24.08,2.08],[8.08,24.08,-2.08],[8.08,11.92,-2.08],[8.08,11.92,2.08]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.92,24.08,-2.08],[8.08,24.08,-2.08],[8.08,24.08,2.08],[3.92,24.08,2.08]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.92,11.92,2.08],[8.08,11.92,2.08],[8.08,11.92,-2.08],[3.92,11.92,-2.08]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.89,24.11,2.11],[8.11,24.11,2.11],[8.11,11.89,2.11],[3.89,11.89,2.11]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.11,24.11,-2.11],[3.89,24.11,-2.11],[3.89,11.89,-2.11],[8.11,11.89,-2.11]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.89,24.11,-2.11],[3.89,24.11,2.11],[3.89,11.89,2.11],[3.89,11.89,-2.11]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.11,24.11,2.11],[8.11,24.11,-2.11],[8.11,11.89,-2.11],[8.11,11.89,2.11]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.89,24.11,-2.11],[8.11,24.11,-2.11],[8.11,24.11,2.11],[3.89,24.11,2.11]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.89,11.89,2.11],[8.11,11.89,2.11],[8.11,11.89,-2.11],[3.89,11.89,-2.11]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.08,24.08,2.08],[-3.92,24.08,2.08],[-3.92,11.92,2.08],[-8.08,11.92,2.08]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.92,24.08,-2.08],[-8.08,24.08,-2.08],[-8.08,11.92,-2.08],[-3.92,11.92,-2.08]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.08,24.08,-2.08],[-8.08,24.08,2.08],[-8.08,11.92,2.08],[-8.08,11.92,-2.08]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.92,24.08,2.08],[-3.92,24.08,-2.08],[-3.92,11.92,-2.08],[-3.92,11.92,2.08]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.08,24.08,-2.08],[-3.92,24.08,-2.08],[-3.92,24.08,2.08],[-8.08,24.08,2.08]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.08,11.92,2.08],[-3.92,11.92,2.08],[-3.92,11.92,-2.08],[-8.08,11.92,-2.08]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.11,24.11,2.11],[-3.89,24.11,2.11],[-3.89,11.89,2.11],[-8.11,11.89,2.11]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.89,24.11,-2.11],[-8.11,24.11,-2.11],[-8.11,11.89,-2.11],[-3.89,11.89,-2.11]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.11,24.11,-2.11],[-8.11,24.11,2.11],[-8.11,11.89,2.11],[-8.11,11.89,-2.11]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.89,24.11,2.11],[-3.89,24.11,-2.11],[-3.89,11.89,-2.11],[-3.89,11.89,2.11]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.11,24.11,-2.11],[-3.89,24.11,-2.11],[-3.89,24.11,2.11],[-8.11,24.11,2.11]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.11,11.89,2.11],[-3.89,11.89,2.11],[-3.89,11.89,-2.11],[-8.11,11.89,-2.11]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.11,24.11,2.11],[4.11,24.11,2.11],[4.11,11.89,2.11],[-4.11,11.89,2.11]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.11,24.11,-2.11],[-4.11,24.11,-2.11],[-4.11,11.89,-2.11],[4.11,11.89,-2.11]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.11,24.11,-2.11],[-4.11,24.11,2.11],[-4.11,11.89,2.11],[-4.11,11.89,-2.11]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.11,24.11,2.11],[4.11,24.11,-2.11],[4.11,11.89,-2.11],[4.11,11.89,2.11]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.11,24.11,-2.11],[4.11,24.11,-2.11],[4.11,24.11,2.11],[-4.11,24.11,2.11]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.11,11.89,2.11],[4.11,11.89,2.11],[4.11,11.89,-2.11],[-4.11,11.89,-2.11]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[-0.08,12.08,2.08],[4.08,12.08,2.08],[4.08,-0.08,2.08],[-0.08,-0.08,2.08]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.08,12.08,-2.08],[-0.08,12.08,-2.08],[-0.08,-0.08,-2.08],[4.08,-0.08,-2.08]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.08,12.08,-2.08],[-0.08,12.08,2.08],[-0.08,-0.08,2.08],[-0.08,-0.08,-2.08]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.08,12.08,2.08],[4.08,12.08,-2.08],[4.08,-0.08,-2.08],[4.08,-0.08,2.08]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.08,12.08,-2.08],[4.08,12.08,-2.08],[4.08,12.08,2.08],[-0.08,12.08,2.08]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.08,-0.08,2.08],[4.08,-0.08,2.08],[4.08,-0.08,-2.08],[-0.08,-0.08,-2.08]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.11,12.11,2.11],[4.11,12.11,2.11],[4.11,-0.11,2.11],[-0.11,-0.11,2.11]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.11,12.11,-2.11],[-0.11,12.11,-2.11],[-0.11,-0.11,-2.11],[4.11,-0.11,-2.11]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.11,12.11,-2.11],[-0.11,12.11,2.11],[-0.11,-0.11,2.11],[-0.11,-0.11,-2.11]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.11,12.11,2.11],[4.11,12.11,-2.11],[4.11,-0.11,-2.11],[4.11,-0.11,2.11]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.11,12.11,-2.11],[4.11,12.11,-2.11],[4.11,12.11,2.11],[-0.11,12.11,2.11]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.11,-0.11,2.11],[4.11,-0.11,2.11],[4.11,-0.11,-2.11],[-0.11,-0.11,-2.11]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.08,12.08,2.08],[0.08,12.08,2.08],[0.08,-0.08,2.08],[-4.08,-0.08,2.08]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.08,12.08,-2.08],[-4.08,12.08,-2.08],[-4.08,-0.08,-2.08],[0.08,-0.08,-2.08]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.08,12.08,-2.08],[-4.08,12.08,2.08],[-4.08,-0.08,2.08],[-4.08,-0.08,-2.08]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.08,12.08,2.08],[0.08,12.08,-2.08],[0.08,-0.08,-2.08],[0.08,-0.08,2.08]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.08,12.08,-2.08],[0.08,12.08,-2.08],[0.08,12.08,2.08],[-4.08,12.08,2.08]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.08,-0.08,2.08],[0.08,-0.08,2.08],[0.08,-0.08,-2.08],[-4.08,-0.08,-2.08]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.11,12.11,2.11],[0.11,12.11,2.11],[0.11,-0.11,2.11],[-4.11,-0.11,2.11]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.11,12.11,-2.11],[-4.11,12.11,-2.11],[-4.11,-0.11,-2.11],[0.11,-0.11,-2.11]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.11,12.11,-2.11],[-4.11,12.11,2.11],[-4.11,-0.11,2.11],[-4.11,-0.11,-2.11]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.11,12.11,2.11],[0.11,12.11,-2.11],[0.11,-0.11,-2.11],[0.11,-0.11,2.11]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.11,12.11,-2.11],[0.11,12.11,-2.11],[0.11,12.11,2.11],[-4.11,12.11,2.11]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.11,-0.11,2.11],[0.11,-0.11,2.11],[0.11,-0.11,-2.11],[-4.11,-0.11,-2.11]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"armor":[{"pts":[[-4.09,24.09,2.09],[4.09,24.09,2.09],[4.09,11.91,2.09],[-4.09,11.91,2.09]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.09,24.09,-2.09],[-4.09,24.09,-2.09],[-4.09,11.91,-2.09],[4.09,11.91,-2.09]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.09,24.09,-2.09],[-4.09,24.09,2.09],[-4.09,11.91,2.09],[-4.09,11.91,-2.09]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.09,24.09,2.09],[4.09,24.09,-2.09],[4.09,11.91,-2.09],[4.09,11.91,2.09]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.09,24.09,-2.09],[4.09,24.09,-2.09],[4.09,24.09,2.09],[-4.09,24.09,2.09]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.09,11.91,2.09],[4.09,11.91,2.09],[4.09,11.91,-2.09],[-4.09,11.91,-2.09]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.09,32.09,4.09],[4.09,32.09,4.09],[4.09,23.91,4.09],[-4.09,23.91,4.09]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.09,32.09,-4.09],[-4.09,32.09,-4.09],[-4.09,23.91,-4.09],[4.09,23.91,-4.09]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.09,32.09,-4.09],[-4.09,32.09,4.09],[-4.09,23.91,4.09],[-4.09,23.91,-4.09]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.09,32.09,4.09],[4.09,32.09,-4.09],[4.09,23.91,-4.09],[4.09,23.91,4.09]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.09,32.09,-4.09],[4.09,32.09,-4.09],[4.09,32.09,4.09],[-4.09,32.09,4.09]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.09,23.91,4.09],[4.09,23.91,4.09],[4.09,23.91,-4.09],[-4.09,23.91,-4.09]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.14,32.14,4.14],[4.14,32.14,4.14],[4.14,23.86,4.14],[-4.14,23.86,4.14]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.14,32.14,-4.14],[-4.14,32.14,-4.14],[-4.14,23.86,-4.14],[4.14,23.86,-4.14]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.14,32.14,-4.14],[-4.14,32.14,4.14],[-4.14,23.86,4.14],[-4.14,23.86,-4.14]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.14,32.14,4.14],[4.14,32.14,-4.14],[4.14,23.86,-4.14],[4.14,23.86,4.14]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.14,32.14,-4.14],[4.14,32.14,-4.14],[4.14,32.14,4.14],[-4.14,32.14,4.14]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.14,23.86,4.14],[4.14,23.86,4.14],[4.14,23.86,-4.14],[-4.14,23.86,-4.14]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.91,24.09,2.09],[8.09,24.09,2.09],[8.09,11.91,2.09],[3.91,11.91,2.09]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.09,24.09,-2.09],[3.91,24.09,-2.09],[3.91,11.91,-2.09],[8.09,11.91,-2.09]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.91,24.09,-2.09],[3.91,24.09,2.09],[3.91,11.91,2.09],[3.91,11.91,-2.09]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.09,24.09,2.09],[8.09,24.09,-2.09],[8.09,11.91,-2.09],[8.09,11.91,2.09]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.91,24.09,-2.09],[8.09,24.09,-2.09],[8.09,24.09,2.09],[3.91,24.09,2.09]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.91,11.91,2.09],[8.09,11.91,2.09],[8.09,11.91,-2.09],[3.91,11.91,-2.09]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.88,24.12,2.12],[8.12,24.12,2.12],[8.12,11.88,2.12],[3.88,11.88,2.12]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.12,24.12,-2.12],[3.88,24.12,-2.12],[3.88,11.88,-2.12],[8.12,11.88,-2.12]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.88,24.12,-2.12],[3.88,24.12,2.12],[3.88,11.88,2.12],[3.88,11.88,-2.12]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.12,24.12,2.12],[8.12,24.12,-2.12],[8.12,11.88,-2.12],[8.12,11.88,2.12]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.88,24.12,-2.12],[8.12,24.12,-2.12],[8.12,24.12,2.12],[3.88,24.12,2.12]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.88,11.88,2.12],[8.12,11.88,2.12],[8.12,11.88,-2.12],[3.88,11.88,-2.12]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.09,24.09,2.09],[-3.91,24.09,2.09],[-3.91,11.91,2.09],[-8.09,11.91,2.09]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.91,24.09,-2.09],[-8.09,24.09,-2.09],[-8.09,11.91,-2.09],[-3.91,11.91,-2.09]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.09,24.09,-2.09],[-8.09,24.09,2.09],[-8.09,11.91,2.09],[-8.09,11.91,-2.09]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.91,24.09,2.09],[-3.91,24.09,-2.09],[-3.91,11.91,-2.09],[-3.91,11.91,2.09]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.09,24.09,-2.09],[-3.91,24.09,-2.09],[-3.91,24.09,2.09],[-8.09,24.09,2.09]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.09,11.91,2.09],[-3.91,11.91,2.09],[-3.91,11.91,-2.09],[-8.09,11.91,-2.09]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.12,24.12,2.12],[-3.88,24.12,2.12],[-3.88,11.88,2.12],[-8.12,11.88,2.12]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.88,24.12,-2.12],[-8.12,24.12,-2.12],[-8.12,11.88,-2.12],[-3.88,11.88,-2.12]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.12,24.12,-2.12],[-8.12,24.12,2.12],[-8.12,11.88,2.12],[-8.12,11.88,-2.12]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.88,24.12,2.12],[-3.88,24.12,-2.12],[-3.88,11.88,-2.12],[-3.88,11.88,2.12]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.12,24.12,-2.12],[-3.88,24.12,-2.12],[-3.88,24.12,2.12],[-8.12,24.12,2.12]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.12,11.88,2.12],[-3.88,11.88,2.12],[-3.88,11.88,-2.12],[-8.12,11.88,-2.12]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.12,24.12,2.12],[4.12,24.12,2.12],[4.12,11.88,2.12],[-4.12,11.88,2.12]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.12,24.12,-2.12],[-4.12,24.12,-2.12],[-4.12,11.88,-2.12],[4.12,11.88,-2.12]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.12,24.12,-2.12],[-4.12,24.12,2.12],[-4.12,11.88,2.12],[-4.12,11.88,-2.12]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.12,24.12,2.12],[4.12,24.12,-2.12],[4.12,11.88,-2.12],[4.12,11.88,2.12]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.12,24.12,-2.12],[4.12,24.12,-2.12],[4.12,24.12,2.12],[-4.12,24.12,2.12]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.12,11.88,2.12],[4.12,11.88,2.12],[4.12,11.88,-2.12],[-4.12,11.88,-2.12]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[-0.09,12.09,2.09],[4.09,12.09,2.09],[4.09,-0.09,2.09],[-0.09,-0.09,2.09]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.09,12.09,-2.09],[-0.09,12.09,-2.09],[-0.09,-0.09,-2.09],[4.09,-0.09,-2.09]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.09,12.09,-2.09],[-0.09,12.09,2.09],[-0.09,-0.09,2.09],[-0.09,-0.09,-2.09]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.09,12.09,2.09],[4.09,12.09,-2.09],[4.09,-0.09,-2.09],[4.09,-0.09,2.09]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.09,12.09,-2.09],[4.09,12.09,-2.09],[4.09,12.09,2.09],[-0.09,12.09,2.09]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.09,-0.09,2.09],[4.09,-0.09,2.09],[4.09,-0.09,-2.09],[-0.09,-0.09,-2.09]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.12,12.12,2.12],[4.12,12.12,2.12],[4.12,-0.12,2.12],[-0.12,-0.12,2.12]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.12,12.12,-2.12],[-0.12,12.12,-2.12],[-0.12,-0.12,-2.12],[4.12,-0.12,-2.12]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.12,12.12,-2.12],[-0.12,12.12,2.12],[-0.12,-0.12,2.12],[-0.12,-0.12,-2.12]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.12,12.12,2.12],[4.12,12.12,-2.12],[4.12,-0.12,-2.12],[4.12,-0.12,2.12]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.12,12.12,-2.12],[4.12,12.12,-2.12],[4.12,12.12,2.12],[-0.12,12.12,2.12]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.12,-0.12,2.12],[4.12,-0.12,2.12],[4.12,-0.12,-2.12],[-0.12,-0.12,-2.12]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.09,12.09,2.09],[0.09,12.09,2.09],[0.09,-0.09,2.09],[-4.09,-0.09,2.09]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.09,12.09,-2.09],[-4.09,12.09,-2.09],[-4.09,-0.09,-2.09],[0.09,-0.09,-2.09]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.09,12.09,-2.09],[-4.09,12.09,2.09],[-4.09,-0.09,2.09],[-4.09,-0.09,-2.09]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.09,12.09,2.09],[0.09,12.09,-2.09],[0.09,-0.09,-2.09],[0.09,-0.09,2.09]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.09,12.09,-2.09],[0.09,12.09,-2.09],[0.09,12.09,2.09],[-4.09,12.09,2.09]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.09,-0.09,2.09],[0.09,-0.09,2.09],[0.09,-0.09,-2.09],[-4.09,-0.09,-2.09]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.12,12.12,2.12],[0.12,12.12,2.12],[0.12,-0.12,2.12],[-4.12,-0.12,2.12]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.12,12.12,-2.12],[-4.12,12.12,-2.12],[-4.12,-0.12,-2.12],[0.12,-0.12,-2.12]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.12,12.12,-2.12],[-4.12,12.12,2.12],[-4.12,-0.12,2.12],[-4.12,-0.12,-2.12]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.12,12.12,2.12],[0.12,12.12,-2.12],[0.12,-0.12,-2.12],[0.12,-0.12,2.12]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.12,12.12,-2.12],[0.12,12.12,-2.12],[0.12,12.12,2.12],[-4.12,12.12,2.12]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.12,-0.12,2.12],[0.12,-0.12,2.12],[0.12,-0.12,-2.12],[-4.12,-0.12,-2.12]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"shoes":[{"pts":[[-0.14,12.14,2.14],[4.14,12.14,2.14],[4.14,-0.14,2.14],[-0.14,-0.14,2.14]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.14,12.14,-2.14],[-0.14,12.14,-2.14],[-0.14,-0.14,-2.14],[4.14,-0.14,-2.14]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.14,12.14,-2.14],[-0.14,12.14,2.14],[-0.14,-0.14,2.14],[-0.14,-0.14,-2.14]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.14,12.14,2.14],[4.14,12.14,-2.14],[4.14,-0.14,-2.14],[4.14,-0.14,2.14]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.14,12.14,-2.14],[4.14,12.14,-2.14],[4.14,12.14,2.14],[-0.14,12.14,2.14]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.14,-0.14,2.14],[4.14,-0.14,2.14],[4.14,-0.14,-2.14],[-0.14,-0.14,-2.14]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.17,12.17,2.17],[4.17,12.17,2.17],[4.17,-0.17,2.17],[-0.17,-0.17,2.17]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.17,12.17,-2.17],[-0.17,12.17,-2.17],[-0.17,-0.17,-2.17],[4.17,-0.17,-2.17]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.17,12.17,-2.17],[-0.17,12.17,2.17],[-0.17,-0.17,2.17],[-0.17,-0.17,-2.17]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.17,12.17,2.17],[4.17,12.17,-2.17],[4.17,-0.17,-2.17],[4.17,-0.17,2.17]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.17,12.17,-2.17],[4.17,12.17,-2.17],[4.17,12.17,2.17],[-0.17,12.17,2.17]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.17,-0.17,2.17],[4.17,-0.17,2.17],[4.17,-0.17,-2.17],[-0.17,-0.17,-2.17]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.14,12.14,2.14],[0.14,12.14,2.14],[0.14,-0.14,2.14],[-4.14,-0.14,2.14]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.14,12.14,-2.14],[-4.14,12.14,-2.14],[-4.14,-0.14,-2.14],[0.14,-0.14,-2.14]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.14,12.14,-2.14],[-4.14,12.14,2.14],[-4.14,-0.14,2.14],[-4.14,-0.14,-2.14]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.14,12.14,2.14],[0.14,12.14,-2.14],[0.14,-0.14,-2.14],[0.14,-0.14,2.14]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.14,12.14,-2.14],[0.14,12.14,-2.14],[0.14,12.14,2.14],[-4.14,12.14,2.14]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.14,-0.14,2.14],[0.14,-0.14,2.14],[0.14,-0.14,-2.14],[-4.14,-0.14,-2.14]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.17,12.17,2.17],[0.17,12.17,2.17],[0.17,-0.17,2.17],[-4.17,-0.17,2.17]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.17,12.17,-2.17],[-4.17,12.17,-2.17],[-4.17,-0.17,-2.17],[0.17,-0.17,-2.17]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.17,12.17,-2.17],[-4.17,12.17,2.17],[-4.17,-0.17,2.17],[-4.17,-0.17,-2.17]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.17,12.17,2.17],[0.17,12.17,-2.17],[0.17,-0.17,-2.17],[0.17,-0.17,2.17]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.17,12.17,-2.17],[0.17,12.17,-2.17],[0.17,12.17,2.17],[-4.17,12.17,2.17]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.17,-0.17,2.17],[0.17,-0.17,2.17],[0.17,-0.17,-2.17],[-4.17,-0.17,-2.17]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"hair":[{"pts":[[-4.16,32.16,4.16],[4.16,32.16,4.16],[4.16,23.84,4.16],[-4.16,23.84,4.16]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.16,32.16,-4.16],[-4.16,32.16,-4.16],[-4.16,23.84,-4.16],[4.16,23.84,-4.16]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.16,32.16,-4.16],[-4.16,32.16,4.16],[-4.16,23.84,4.16],[-4.16,23.84,-4.16]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.16,32.16,4.16],[4.16,32.16,-4.16],[4.16,23.84,-4.16],[4.16,23.84,4.16]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.16,32.16,-4.16],[4.16,32.16,-4.16],[4.16,32.16,4.16],[-4.16,32.16,4.16]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.16,23.84,4.16],[4.16,23.84,4.16],[4.16,23.84,-4.16],[-4.16,23.84,-4.16]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.22,32.22,4.22],[4.22,32.22,4.22],[4.22,23.78,4.22],[-4.22,23.78,4.22]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.22,32.22,-4.22],[-4.22,32.22,-4.22],[-4.22,23.78,-4.22],[4.22,23.78,-4.22]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.22,32.22,-4.22],[-4.22,32.22,4.22],[-4.22,23.78,4.22],[-4.22,23.78,-4.22]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.22,32.22,4.22],[4.22,32.22,-4.22],[4.22,23.78,-4.22],[4.22,23.78,4.22]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.22,32.22,-4.22],[4.22,32.22,-4.22],[4.22,32.22,4.22],[-4.22,32.22,4.22]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.22,23.78,4.22],[4.22,23.78,4.22],[4.22,23.78,-4.22],[-4.22,23.78,-4.22]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"}]},"female":{"skin":[{"pts":[[-4,24,2],[4,24,2],[4,12,2],[-4,12,2]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4,24,-2],[-4,24,-2],[-4,12,-2],[4,12,-2]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4,24,-2],[-4,24,2],[-4,12,2],[-4,12,-2]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4,24,2],[4,24,-2],[4,12,-2],[4,12,2]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4,24,-2],[4,24,-2],[4,24,2],[-4,24,2]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4,12,2],[4,12,2],[4,12,-2],[-4,12,-2]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4,21.836,4.104],[4,21.836,4.104],[4,17.619,1.418],[-4,17.619,1.418]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.5373,0.8434],"name":"north","bone":"chest"},{"pts":[[4,23.448,1.574],[-4,23.448,1.574],[-4,19.231,-1.113],[4,19.231,-1.113]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,0.5373,-0.8434],"name":"south","bone":"chest"},{"pts":[[-4,23.448,1.574],[-4,21.836,4.104],[-4,17.619,1.418],[-4,19.231,-1.113]],"uvs":[[0.3906,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3906,0.3906]],"n":[-1,0,0],"name":"west","bone":"chest"},{"pts":[[4,21.836,4.104],[4,23.448,1.574],[4,19.231,-1.113],[4,17.619,1.418]],"uvs":[[0.3125,0.3125],[0.3594,0.3125],[0.3594,0.3906],[0.3125,0.3906]],"n":[1,0,0],"name":"east","bone":"chest"},{"pts":[[-4,23.448,1.574],[4,23.448,1.574],[4,21.836,4.104],[-4,21.836,4.104]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3594],[0.3125,0.3594]],"n":[0,0.8434,0.5373],"name":"up","bone":"chest"},{"pts":[[-4,17.619,1.418],[4,17.619,1.418],[4,19.231,-1.113],[-4,19.231,-1.113]],"uvs":[[0.3125,0.3438],[0.4375,0.3438],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.8434,-0.5373],"name":"down","bone":"chest"},{"pts":[[-4,32,4],[4,32,4],[4,24,4],[-4,24,4]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4,32,-4],[-4,32,-4],[-4,24,-4],[4,24,-4]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4,32,-4],[-4,32,4],[-4,24,4],[-4,24,-4]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4,32,4],[4,32,-4],[4,24,-4],[4,24,4]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4,32,-4],[4,32,-4],[4,32,4],[-4,32,4]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4,24,4],[4,24,4],[4,24,-4],[-4,24,-4]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.02,32.02,4.02],[4.02,32.02,4.02],[4.02,23.98,4.02],[-4.02,23.98,4.02]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.02,32.02,-4.02],[-4.02,32.02,-4.02],[-4.02,23.98,-4.02],[4.02,23.98,-4.02]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.02,32.02,-4.02],[-4.02,32.02,4.02],[-4.02,23.98,4.02],[-4.02,23.98,-4.02]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.02,32.02,4.02],[4.02,32.02,-4.02],[4.02,23.98,-4.02],[4.02,23.98,4.02]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.02,32.02,-4.02],[4.02,32.02,-4.02],[4.02,32.02,4.02],[-4.02,32.02,4.02]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.02,23.98,4.02],[4.02,23.98,4.02],[4.02,23.98,-4.02],[-4.02,23.98,-4.02]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[4,24,2],[8,24,2],[8,12,2],[4,12,2]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8,24,-2],[4,24,-2],[4,12,-2],[8,12,-2]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[4,24,-2],[4,24,2],[4,12,2],[4,12,-2]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8,24,2],[8,24,-2],[8,12,-2],[8,12,2]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[4,24,-2],[8,24,-2],[8,24,2],[4,24,2]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[4,12,2],[8,12,2],[8,12,-2],[4,12,-2]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.98,24.02,2.02],[8.02,24.02,2.02],[8.02,11.98,2.02],[3.98,11.98,2.02]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.02,24.02,-2.02],[3.98,24.02,-2.02],[3.98,11.98,-2.02],[8.02,11.98,-2.02]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.98,24.02,-2.02],[3.98,24.02,2.02],[3.98,11.98,2.02],[3.98,11.98,-2.02]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.02,24.02,2.02],[8.02,24.02,-2.02],[8.02,11.98,-2.02],[8.02,11.98,2.02]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.98,24.02,-2.02],[8.02,24.02,-2.02],[8.02,24.02,2.02],[3.98,24.02,2.02]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.98,11.98,2.02],[8.02,11.98,2.02],[8.02,11.98,-2.02],[3.98,11.98,-2.02]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8,24,2],[-4,24,2],[-4,12,2],[-8,12,2]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-4,24,-2],[-8,24,-2],[-8,12,-2],[-4,12,-2]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8,24,-2],[-8,24,2],[-8,12,2],[-8,12,-2]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-4,24,2],[-4,24,-2],[-4,12,-2],[-4,12,2]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8,24,-2],[-4,24,-2],[-4,24,2],[-8,24,2]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8,12,2],[-4,12,2],[-4,12,-2],[-8,12,-2]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.02,24.02,2.02],[-3.98,24.02,2.02],[-3.98,11.98,2.02],[-8.02,11.98,2.02]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.98,24.02,-2.02],[-8.02,24.02,-2.02],[-8.02,11.98,-2.02],[-3.98,11.98,-2.02]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.02,24.02,-2.02],[-8.02,24.02,2.02],[-8.02,11.98,2.02],[-8.02,11.98,-2.02]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.98,24.02,2.02],[-3.98,24.02,-2.02],[-3.98,11.98,-2.02],[-3.98,11.98,2.02]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.02,24.02,-2.02],[-3.98,24.02,-2.02],[-3.98,24.02,2.02],[-8.02,24.02,2.02]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.02,11.98,2.02],[-3.98,11.98,2.02],[-3.98,11.98,-2.02],[-8.02,11.98,-2.02]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[0,12,2],[4,12,2],[4,0,2],[0,0,2]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4,12,-2],[0,12,-2],[0,0,-2],[4,0,-2]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[0,12,-2],[0,12,2],[0,0,2],[0,0,-2]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4,12,2],[4,12,-2],[4,0,-2],[4,0,2]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[0,12,-2],[4,12,-2],[4,12,2],[0,12,2]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[0,0,2],[4,0,2],[4,0,-2],[0,0,-2]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-4,12,2],[0,12,2],[0,0,2],[-4,0,2]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0,12,-2],[-4,12,-2],[-4,0,-2],[0,0,-2]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4,12,-2],[-4,12,2],[-4,0,2],[-4,0,-2]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0,12,2],[0,12,-2],[0,0,-2],[0,0,2]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4,12,-2],[0,12,-2],[0,12,2],[-4,12,2]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4,0,2],[0,0,2],[0,0,-2],[-4,0,-2]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"}],"eyes":[{"pts":[[-4.05,32.05,4.05],[4.05,32.05,4.05],[4.05,23.95,4.05],[-4.05,23.95,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.05,32.05,-4.05],[-4.05,32.05,-4.05],[-4.05,23.95,-4.05],[4.05,23.95,-4.05]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[-4.05,32.05,4.05],[-4.05,23.95,4.05],[-4.05,23.95,-4.05]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.05,32.05,4.05],[4.05,32.05,-4.05],[4.05,23.95,-4.05],[4.05,23.95,4.05]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.05,32.05,-4.05],[4.05,32.05,-4.05],[4.05,32.05,4.05],[-4.05,32.05,4.05]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.05,23.95,4.05],[4.05,23.95,4.05],[4.05,23.95,-4.05],[-4.05,23.95,-4.05]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"}],"top":[{"pts":[[-4.08,24.08,2.08],[4.08,24.08,2.08],[4.08,11.92,2.08],[-4.08,11.92,2.08]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.08,24.08,-2.08],[-4.08,24.08,-2.08],[-4.08,11.92,-2.08],[4.08,11.92,-2.08]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.08,24.08,-2.08],[-4.08,24.08,2.08],[-4.08,11.92,2.08],[-4.08,11.92,-2.08]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.08,24.08,2.08],[4.08,24.08,-2.08],[4.08,11.92,-2.08],[4.08,11.92,2.08]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.08,24.08,-2.08],[4.08,24.08,-2.08],[4.08,24.08,2.08],[-4.08,24.08,2.08]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.08,11.92,2.08],[4.08,11.92,2.08],[4.08,11.92,-2.08],[-4.08,11.92,-2.08]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.11,21.869,4.256],[4.11,21.869,4.256],[4.11,17.467,1.451],[-4.11,17.467,1.451]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.5373,0.8434],"name":"north","bone":"outerchest"},{"pts":[[4.11,23.6,1.54],[-4.11,23.6,1.54],[-4.11,19.197,-1.264],[4.11,19.197,-1.264]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,0.5373,-0.8434],"name":"south","bone":"outerchest"},{"pts":[[-4.11,23.6,1.54],[-4.11,21.869,4.256],[-4.11,17.467,1.451],[-4.11,19.197,-1.264]],"uvs":[[0.3906,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3906,0.3906]],"n":[-1,0,0],"name":"west","bone":"outerchest"},{"pts":[[4.11,21.869,4.256],[4.11,23.6,1.54],[4.11,19.197,-1.264],[4.11,17.467,1.451]],"uvs":[[0.3125,0.3125],[0.3594,0.3125],[0.3594,0.3906],[0.3125,0.3906]],"n":[1,0,0],"name":"east","bone":"outerchest"},{"pts":[[-4.11,23.6,1.54],[4.11,23.6,1.54],[4.11,21.869,4.256],[-4.11,21.869,4.256]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3594],[0.3125,0.3594]],"n":[0,0.8434,0.5373],"name":"up","bone":"outerchest"},{"pts":[[-4.11,17.467,1.451],[4.11,17.467,1.451],[4.11,19.197,-1.264],[-4.11,19.197,-1.264]],"uvs":[[0.3125,0.3438],[0.4375,0.3438],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.8434,-0.5373],"name":"down","bone":"outerchest"},{"pts":[[-4.08,32.08,4.08],[4.08,32.08,4.08],[4.08,23.92,4.08],[-4.08,23.92,4.08]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.08,32.08,-4.08],[-4.08,32.08,-4.08],[-4.08,23.92,-4.08],[4.08,23.92,-4.08]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.08,32.08,-4.08],[-4.08,32.08,4.08],[-4.08,23.92,4.08],[-4.08,23.92,-4.08]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.08,32.08,4.08],[4.08,32.08,-4.08],[4.08,23.92,-4.08],[4.08,23.92,4.08]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.08,32.08,-4.08],[4.08,32.08,-4.08],[4.08,32.08,4.08],[-4.08,32.08,4.08]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.08,23.92,4.08],[4.08,23.92,4.08],[4.08,23.92,-4.08],[-4.08,23.92,-4.08]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.13,32.13,4.13],[4.13,32.13,4.13],[4.13,23.87,4.13],[-4.13,23.87,4.13]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.13,32.13,-4.13],[-4.13,32.13,-4.13],[-4.13,23.87,-4.13],[4.13,23.87,-4.13]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.13,32.13,-4.13],[-4.13,32.13,4.13],[-4.13,23.87,4.13],[-4.13,23.87,-4.13]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.13,32.13,4.13],[4.13,32.13,-4.13],[4.13,23.87,-4.13],[4.13,23.87,4.13]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.13,32.13,-4.13],[4.13,32.13,-4.13],[4.13,32.13,4.13],[-4.13,32.13,4.13]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.13,23.87,4.13],[4.13,23.87,4.13],[4.13,23.87,-4.13],[-4.13,23.87,-4.13]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.92,24.08,2.08],[8.08,24.08,2.08],[8.08,11.92,2.08],[3.92,11.92,2.08]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.08,24.08,-2.08],[3.92,24.08,-2.08],[3.92,11.92,-2.08],[8.08,11.92,-2.08]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.92,24.08,-2.08],[3.92,24.08,2.08],[3.92,11.92,2.08],[3.92,11.92,-2.08]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.08,24.08,2.08],[8.08,24.08,-2.08],[8.08,11.92,-2.08],[8.08,11.92,2.08]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.92,24.08,-2.08],[8.08,24.08,-2.08],[8.08,24.08,2.08],[3.92,24.08,2.08]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.92,11.92,2.08],[8.08,11.92,2.08],[8.08,11.92,-2.08],[3.92,11.92,-2.08]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.89,24.11,2.11],[8.11,24.11,2.11],[8.11,11.89,2.11],[3.89,11.89,2.11]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.11,24.11,-2.11],[3.89,24.11,-2.11],[3.89,11.89,-2.11],[8.11,11.89,-2.11]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.89,24.11,-2.11],[3.89,24.11,2.11],[3.89,11.89,2.11],[3.89,11.89,-2.11]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.11,24.11,2.11],[8.11,24.11,-2.11],[8.11,11.89,-2.11],[8.11,11.89,2.11]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.89,24.11,-2.11],[8.11,24.11,-2.11],[8.11,24.11,2.11],[3.89,24.11,2.11]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.89,11.89,2.11],[8.11,11.89,2.11],[8.11,11.89,-2.11],[3.89,11.89,-2.11]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.08,24.08,2.08],[-3.92,24.08,2.08],[-3.92,11.92,2.08],[-8.08,11.92,2.08]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.92,24.08,-2.08],[-8.08,24.08,-2.08],[-8.08,11.92,-2.08],[-3.92,11.92,-2.08]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.08,24.08,-2.08],[-8.08,24.08,2.08],[-8.08,11.92,2.08],[-8.08,11.92,-2.08]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.92,24.08,2.08],[-3.92,24.08,-2.08],[-3.92,11.92,-2.08],[-3.92,11.92,2.08]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.08,24.08,-2.08],[-3.92,24.08,-2.08],[-3.92,24.08,2.08],[-8.08,24.08,2.08]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.08,11.92,2.08],[-3.92,11.92,2.08],[-3.92,11.92,-2.08],[-8.08,11.92,-2.08]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.11,24.11,2.11],[-3.89,24.11,2.11],[-3.89,11.89,2.11],[-8.11,11.89,2.11]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.89,24.11,-2.11],[-8.11,24.11,-2.11],[-8.11,11.89,-2.11],[-3.89,11.89,-2.11]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.11,24.11,-2.11],[-8.11,24.11,2.11],[-8.11,11.89,2.11],[-8.11,11.89,-2.11]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.89,24.11,2.11],[-3.89,24.11,-2.11],[-3.89,11.89,-2.11],[-3.89,11.89,2.11]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.11,24.11,-2.11],[-3.89,24.11,-2.11],[-3.89,24.11,2.11],[-8.11,24.11,2.11]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.11,11.89,2.11],[-3.89,11.89,2.11],[-3.89,11.89,-2.11],[-8.11,11.89,-2.11]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.11,24.11,2.11],[4.11,24.11,2.11],[4.11,11.89,2.11],[-4.11,11.89,2.11]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.11,24.11,-2.11],[-4.11,24.11,-2.11],[-4.11,11.89,-2.11],[4.11,11.89,-2.11]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.11,24.11,-2.11],[-4.11,24.11,2.11],[-4.11,11.89,2.11],[-4.11,11.89,-2.11]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.11,24.11,2.11],[4.11,24.11,-2.11],[4.11,11.89,-2.11],[4.11,11.89,2.11]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.11,24.11,-2.11],[4.11,24.11,-2.11],[4.11,24.11,2.11],[-4.11,24.11,2.11]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.11,11.89,2.11],[4.11,11.89,2.11],[4.11,11.89,-2.11],[-4.11,11.89,-2.11]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[-0.08,12.08,2.08],[4.08,12.08,2.08],[4.08,-0.08,2.08],[-0.08,-0.08,2.08]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.08,12.08,-2.08],[-0.08,12.08,-2.08],[-0.08,-0.08,-2.08],[4.08,-0.08,-2.08]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.08,12.08,-2.08],[-0.08,12.08,2.08],[-0.08,-0.08,2.08],[-0.08,-0.08,-2.08]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.08,12.08,2.08],[4.08,12.08,-2.08],[4.08,-0.08,-2.08],[4.08,-0.08,2.08]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.08,12.08,-2.08],[4.08,12.08,-2.08],[4.08,12.08,2.08],[-0.08,12.08,2.08]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.08,-0.08,2.08],[4.08,-0.08,2.08],[4.08,-0.08,-2.08],[-0.08,-0.08,-2.08]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.11,12.11,2.11],[4.11,12.11,2.11],[4.11,-0.11,2.11],[-0.11,-0.11,2.11]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.11,12.11,-2.11],[-0.11,12.11,-2.11],[-0.11,-0.11,-2.11],[4.11,-0.11,-2.11]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.11,12.11,-2.11],[-0.11,12.11,2.11],[-0.11,-0.11,2.11],[-0.11,-0.11,-2.11]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.11,12.11,2.11],[4.11,12.11,-2.11],[4.11,-0.11,-2.11],[4.11,-0.11,2.11]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.11,12.11,-2.11],[4.11,12.11,-2.11],[4.11,12.11,2.11],[-0.11,12.11,2.11]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.11,-0.11,2.11],[4.11,-0.11,2.11],[4.11,-0.11,-2.11],[-0.11,-0.11,-2.11]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.08,12.08,2.08],[0.08,12.08,2.08],[0.08,-0.08,2.08],[-4.08,-0.08,2.08]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.08,12.08,-2.08],[-4.08,12.08,-2.08],[-4.08,-0.08,-2.08],[0.08,-0.08,-2.08]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.08,12.08,-2.08],[-4.08,12.08,2.08],[-4.08,-0.08,2.08],[-4.08,-0.08,-2.08]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.08,12.08,2.08],[0.08,12.08,-2.08],[0.08,-0.08,-2.08],[0.08,-0.08,2.08]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.08,12.08,-2.08],[0.08,12.08,-2.08],[0.08,12.08,2.08],[-4.08,12.08,2.08]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.08,-0.08,2.08],[0.08,-0.08,2.08],[0.08,-0.08,-2.08],[-4.08,-0.08,-2.08]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.11,12.11,2.11],[0.11,12.11,2.11],[0.11,-0.11,2.11],[-4.11,-0.11,2.11]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.11,12.11,-2.11],[-4.11,12.11,-2.11],[-4.11,-0.11,-2.11],[0.11,-0.11,-2.11]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.11,12.11,-2.11],[-4.11,12.11,2.11],[-4.11,-0.11,2.11],[-4.11,-0.11,-2.11]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.11,12.11,2.11],[0.11,12.11,-2.11],[0.11,-0.11,-2.11],[0.11,-0.11,2.11]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.11,12.11,-2.11],[0.11,12.11,-2.11],[0.11,12.11,2.11],[-4.11,12.11,2.11]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.11,-0.11,2.11],[0.11,-0.11,2.11],[0.11,-0.11,-2.11],[-4.11,-0.11,-2.11]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"armor":[{"pts":[[-4.09,24.09,2.09],[4.09,24.09,2.09],[4.09,11.91,2.09],[-4.09,11.91,2.09]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.09,24.09,-2.09],[-4.09,24.09,-2.09],[-4.09,11.91,-2.09],[4.09,11.91,-2.09]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.09,24.09,-2.09],[-4.09,24.09,2.09],[-4.09,11.91,2.09],[-4.09,11.91,-2.09]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.09,24.09,2.09],[4.09,24.09,-2.09],[4.09,11.91,-2.09],[4.09,11.91,2.09]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.09,24.09,-2.09],[4.09,24.09,-2.09],[4.09,24.09,2.09],[-4.09,24.09,2.09]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.09,11.91,2.09],[4.09,11.91,2.09],[4.09,11.91,-2.09],[-4.09,11.91,-2.09]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.12,21.873,4.27],[4.12,21.873,4.27],[4.12,17.453,1.454],[-4.12,17.453,1.454]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.5373,0.8434],"name":"north","bone":"outerchest"},{"pts":[[4.12,23.613,1.537],[-4.12,23.613,1.537],[-4.12,19.194,-1.278],[4.12,19.194,-1.278]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,0.5373,-0.8434],"name":"south","bone":"outerchest"},{"pts":[[-4.12,23.613,1.537],[-4.12,21.873,4.27],[-4.12,17.453,1.454],[-4.12,19.194,-1.278]],"uvs":[[0.3906,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3906,0.3906]],"n":[-1,0,0],"name":"west","bone":"outerchest"},{"pts":[[4.12,21.873,4.27],[4.12,23.613,1.537],[4.12,19.194,-1.278],[4.12,17.453,1.454]],"uvs":[[0.3125,0.3125],[0.3594,0.3125],[0.3594,0.3906],[0.3125,0.3906]],"n":[1,0,0],"name":"east","bone":"outerchest"},{"pts":[[-4.12,23.613,1.537],[4.12,23.613,1.537],[4.12,21.873,4.27],[-4.12,21.873,4.27]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3594],[0.3125,0.3594]],"n":[0,0.8434,0.5373],"name":"up","bone":"outerchest"},{"pts":[[-4.12,17.453,1.454],[4.12,17.453,1.454],[4.12,19.194,-1.278],[-4.12,19.194,-1.278]],"uvs":[[0.3125,0.3438],[0.4375,0.3438],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.8434,-0.5373],"name":"down","bone":"outerchest"},{"pts":[[-4.09,32.09,4.09],[4.09,32.09,4.09],[4.09,23.91,4.09],[-4.09,23.91,4.09]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.09,32.09,-4.09],[-4.09,32.09,-4.09],[-4.09,23.91,-4.09],[4.09,23.91,-4.09]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.09,32.09,-4.09],[-4.09,32.09,4.09],[-4.09,23.91,4.09],[-4.09,23.91,-4.09]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.09,32.09,4.09],[4.09,32.09,-4.09],[4.09,23.91,-4.09],[4.09,23.91,4.09]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.09,32.09,-4.09],[4.09,32.09,-4.09],[4.09,32.09,4.09],[-4.09,32.09,4.09]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.09,23.91,4.09],[4.09,23.91,4.09],[4.09,23.91,-4.09],[-4.09,23.91,-4.09]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.14,32.14,4.14],[4.14,32.14,4.14],[4.14,23.86,4.14],[-4.14,23.86,4.14]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.14,32.14,-4.14],[-4.14,32.14,-4.14],[-4.14,23.86,-4.14],[4.14,23.86,-4.14]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.14,32.14,-4.14],[-4.14,32.14,4.14],[-4.14,23.86,4.14],[-4.14,23.86,-4.14]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.14,32.14,4.14],[4.14,32.14,-4.14],[4.14,23.86,-4.14],[4.14,23.86,4.14]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.14,32.14,-4.14],[4.14,32.14,-4.14],[4.14,32.14,4.14],[-4.14,32.14,4.14]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.14,23.86,4.14],[4.14,23.86,4.14],[4.14,23.86,-4.14],[-4.14,23.86,-4.14]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.91,24.09,2.09],[8.09,24.09,2.09],[8.09,11.91,2.09],[3.91,11.91,2.09]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.09,24.09,-2.09],[3.91,24.09,-2.09],[3.91,11.91,-2.09],[8.09,11.91,-2.09]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.91,24.09,-2.09],[3.91,24.09,2.09],[3.91,11.91,2.09],[3.91,11.91,-2.09]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.09,24.09,2.09],[8.09,24.09,-2.09],[8.09,11.91,-2.09],[8.09,11.91,2.09]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.91,24.09,-2.09],[8.09,24.09,-2.09],[8.09,24.09,2.09],[3.91,24.09,2.09]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.91,11.91,2.09],[8.09,11.91,2.09],[8.09,11.91,-2.09],[3.91,11.91,-2.09]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.88,24.12,2.12],[8.12,24.12,2.12],[8.12,11.88,2.12],[3.88,11.88,2.12]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.12,24.12,-2.12],[3.88,24.12,-2.12],[3.88,11.88,-2.12],[8.12,11.88,-2.12]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.88,24.12,-2.12],[3.88,24.12,2.12],[3.88,11.88,2.12],[3.88,11.88,-2.12]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.12,24.12,2.12],[8.12,24.12,-2.12],[8.12,11.88,-2.12],[8.12,11.88,2.12]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.88,24.12,-2.12],[8.12,24.12,-2.12],[8.12,24.12,2.12],[3.88,24.12,2.12]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.88,11.88,2.12],[8.12,11.88,2.12],[8.12,11.88,-2.12],[3.88,11.88,-2.12]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.09,24.09,2.09],[-3.91,24.09,2.09],[-3.91,11.91,2.09],[-8.09,11.91,2.09]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.91,24.09,-2.09],[-8.09,24.09,-2.09],[-8.09,11.91,-2.09],[-3.91,11.91,-2.09]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.09,24.09,-2.09],[-8.09,24.09,2.09],[-8.09,11.91,2.09],[-8.09,11.91,-2.09]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.91,24.09,2.09],[-3.91,24.09,-2.09],[-3.91,11.91,-2.09],[-3.91,11.91,2.09]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.09,24.09,-2.09],[-3.91,24.09,-2.09],[-3.91,24.09,2.09],[-8.09,24.09,2.09]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.09,11.91,2.09],[-3.91,11.91,2.09],[-3.91,11.91,-2.09],[-8.09,11.91,-2.09]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.12,24.12,2.12],[-3.88,24.12,2.12],[-3.88,11.88,2.12],[-8.12,11.88,2.12]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.88,24.12,-2.12],[-8.12,24.12,-2.12],[-8.12,11.88,-2.12],[-3.88,11.88,-2.12]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.12,24.12,-2.12],[-8.12,24.12,2.12],[-8.12,11.88,2.12],[-8.12,11.88,-2.12]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.88,24.12,2.12],[-3.88,24.12,-2.12],[-3.88,11.88,-2.12],[-3.88,11.88,2.12]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.12,24.12,-2.12],[-3.88,24.12,-2.12],[-3.88,24.12,2.12],[-8.12,24.12,2.12]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.12,11.88,2.12],[-3.88,11.88,2.12],[-3.88,11.88,-2.12],[-8.12,11.88,-2.12]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.12,24.12,2.12],[4.12,24.12,2.12],[4.12,11.88,2.12],[-4.12,11.88,2.12]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.12,24.12,-2.12],[-4.12,24.12,-2.12],[-4.12,11.88,-2.12],[4.12,11.88,-2.12]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.12,24.12,-2.12],[-4.12,24.12,2.12],[-4.12,11.88,2.12],[-4.12,11.88,-2.12]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.12,24.12,2.12],[4.12,24.12,-2.12],[4.12,11.88,-2.12],[4.12,11.88,2.12]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.12,24.12,-2.12],[4.12,24.12,-2.12],[4.12,24.12,2.12],[-4.12,24.12,2.12]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.12,11.88,2.12],[4.12,11.88,2.12],[4.12,11.88,-2.12],[-4.12,11.88,-2.12]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"},{"pts":[[-0.09,12.09,2.09],[4.09,12.09,2.09],[4.09,-0.09,2.09],[-0.09,-0.09,2.09]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.09,12.09,-2.09],[-0.09,12.09,-2.09],[-0.09,-0.09,-2.09],[4.09,-0.09,-2.09]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.09,12.09,-2.09],[-0.09,12.09,2.09],[-0.09,-0.09,2.09],[-0.09,-0.09,-2.09]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.09,12.09,2.09],[4.09,12.09,-2.09],[4.09,-0.09,-2.09],[4.09,-0.09,2.09]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.09,12.09,-2.09],[4.09,12.09,-2.09],[4.09,12.09,2.09],[-0.09,12.09,2.09]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.09,-0.09,2.09],[4.09,-0.09,2.09],[4.09,-0.09,-2.09],[-0.09,-0.09,-2.09]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.12,12.12,2.12],[4.12,12.12,2.12],[4.12,-0.12,2.12],[-0.12,-0.12,2.12]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.12,12.12,-2.12],[-0.12,12.12,-2.12],[-0.12,-0.12,-2.12],[4.12,-0.12,-2.12]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.12,12.12,-2.12],[-0.12,12.12,2.12],[-0.12,-0.12,2.12],[-0.12,-0.12,-2.12]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.12,12.12,2.12],[4.12,12.12,-2.12],[4.12,-0.12,-2.12],[4.12,-0.12,2.12]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.12,12.12,-2.12],[4.12,12.12,-2.12],[4.12,12.12,2.12],[-0.12,12.12,2.12]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.12,-0.12,2.12],[4.12,-0.12,2.12],[4.12,-0.12,-2.12],[-0.12,-0.12,-2.12]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.09,12.09,2.09],[0.09,12.09,2.09],[0.09,-0.09,2.09],[-4.09,-0.09,2.09]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.09,12.09,-2.09],[-4.09,12.09,-2.09],[-4.09,-0.09,-2.09],[0.09,-0.09,-2.09]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.09,12.09,-2.09],[-4.09,12.09,2.09],[-4.09,-0.09,2.09],[-4.09,-0.09,-2.09]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.09,12.09,2.09],[0.09,12.09,-2.09],[0.09,-0.09,-2.09],[0.09,-0.09,2.09]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.09,12.09,-2.09],[0.09,12.09,-2.09],[0.09,12.09,2.09],[-4.09,12.09,2.09]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.09,-0.09,2.09],[0.09,-0.09,2.09],[0.09,-0.09,-2.09],[-4.09,-0.09,-2.09]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.12,12.12,2.12],[0.12,12.12,2.12],[0.12,-0.12,2.12],[-4.12,-0.12,2.12]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.12,12.12,-2.12],[-4.12,12.12,-2.12],[-4.12,-0.12,-2.12],[0.12,-0.12,-2.12]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.12,12.12,-2.12],[-4.12,12.12,2.12],[-4.12,-0.12,2.12],[-4.12,-0.12,-2.12]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.12,12.12,2.12],[0.12,12.12,-2.12],[0.12,-0.12,-2.12],[0.12,-0.12,2.12]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.12,12.12,-2.12],[0.12,12.12,-2.12],[0.12,12.12,2.12],[-4.12,12.12,2.12]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.12,-0.12,2.12],[0.12,-0.12,2.12],[0.12,-0.12,-2.12],[-4.12,-0.12,-2.12]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"shoes":[{"pts":[[-0.14,12.14,2.14],[4.14,12.14,2.14],[4.14,-0.14,2.14],[-0.14,-0.14,2.14]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,1],[0.3125,1]],"n":[0,0,1],"name":"north","bone":"leftLeg"},{"pts":[[4.14,12.14,-2.14],[-0.14,12.14,-2.14],[-0.14,-0.14,-2.14],[4.14,-0.14,-2.14]],"uvs":[[0.4375,0.8125],[0.5,0.8125],[0.5,1],[0.4375,1]],"n":[0,0,-1],"name":"south","bone":"leftLeg"},{"pts":[[-0.14,12.14,-2.14],[-0.14,12.14,2.14],[-0.14,-0.14,2.14],[-0.14,-0.14,-2.14]],"uvs":[[0.25,0.8125],[0.3125,0.8125],[0.3125,1],[0.25,1]],"n":[-1,0,0],"name":"west","bone":"leftLeg"},{"pts":[[4.14,12.14,2.14],[4.14,12.14,-2.14],[4.14,-0.14,-2.14],[4.14,-0.14,2.14]],"uvs":[[0.375,0.8125],[0.4375,0.8125],[0.4375,1],[0.375,1]],"n":[1,0,0],"name":"east","bone":"leftLeg"},{"pts":[[-0.14,12.14,-2.14],[4.14,12.14,-2.14],[4.14,12.14,2.14],[-0.14,12.14,2.14]],"uvs":[[0.3125,0.8125],[0.375,0.8125],[0.375,0.75],[0.3125,0.75]],"n":[0,1,0],"name":"up","bone":"leftLeg"},{"pts":[[-0.14,-0.14,2.14],[4.14,-0.14,2.14],[4.14,-0.14,-2.14],[-0.14,-0.14,-2.14]],"uvs":[[0.375,0.75],[0.4375,0.75],[0.4375,0.8125],[0.375,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftLeg"},{"pts":[[-0.17,12.17,2.17],[4.17,12.17,2.17],[4.17,-0.17,2.17],[-0.17,-0.17,2.17]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,1],[0.0625,1]],"n":[0,0,1],"name":"north","bone":"leftPants"},{"pts":[[4.17,12.17,-2.17],[-0.17,12.17,-2.17],[-0.17,-0.17,-2.17],[4.17,-0.17,-2.17]],"uvs":[[0.1875,0.8125],[0.25,0.8125],[0.25,1],[0.1875,1]],"n":[0,0,-1],"name":"south","bone":"leftPants"},{"pts":[[-0.17,12.17,-2.17],[-0.17,12.17,2.17],[-0.17,-0.17,2.17],[-0.17,-0.17,-2.17]],"uvs":[[0,0.8125],[0.0625,0.8125],[0.0625,1],[0,1]],"n":[-1,0,0],"name":"west","bone":"leftPants"},{"pts":[[4.17,12.17,2.17],[4.17,12.17,-2.17],[4.17,-0.17,-2.17],[4.17,-0.17,2.17]],"uvs":[[0.125,0.8125],[0.1875,0.8125],[0.1875,1],[0.125,1]],"n":[1,0,0],"name":"east","bone":"leftPants"},{"pts":[[-0.17,12.17,-2.17],[4.17,12.17,-2.17],[4.17,12.17,2.17],[-0.17,12.17,2.17]],"uvs":[[0.0625,0.8125],[0.125,0.8125],[0.125,0.75],[0.0625,0.75]],"n":[0,1,0],"name":"up","bone":"leftPants"},{"pts":[[-0.17,-0.17,2.17],[4.17,-0.17,2.17],[4.17,-0.17,-2.17],[-0.17,-0.17,-2.17]],"uvs":[[0.125,0.75],[0.1875,0.75],[0.1875,0.8125],[0.125,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftPants"},{"pts":[[-4.14,12.14,2.14],[0.14,12.14,2.14],[0.14,-0.14,2.14],[-4.14,-0.14,2.14]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.5],[0.0625,0.5]],"n":[0,0,1],"name":"north","bone":"rightLeg"},{"pts":[[0.14,12.14,-2.14],[-4.14,12.14,-2.14],[-4.14,-0.14,-2.14],[0.14,-0.14,-2.14]],"uvs":[[0.1875,0.3125],[0.25,0.3125],[0.25,0.5],[0.1875,0.5]],"n":[0,0,-1],"name":"south","bone":"rightLeg"},{"pts":[[-4.14,12.14,-2.14],[-4.14,12.14,2.14],[-4.14,-0.14,2.14],[-4.14,-0.14,-2.14]],"uvs":[[0,0.3125],[0.0625,0.3125],[0.0625,0.5],[0,0.5]],"n":[-1,0,0],"name":"west","bone":"rightLeg"},{"pts":[[0.14,12.14,2.14],[0.14,12.14,-2.14],[0.14,-0.14,-2.14],[0.14,-0.14,2.14]],"uvs":[[0.125,0.3125],[0.1875,0.3125],[0.1875,0.5],[0.125,0.5]],"n":[1,0,0],"name":"east","bone":"rightLeg"},{"pts":[[-4.14,12.14,-2.14],[0.14,12.14,-2.14],[0.14,12.14,2.14],[-4.14,12.14,2.14]],"uvs":[[0.0625,0.3125],[0.125,0.3125],[0.125,0.25],[0.0625,0.25]],"n":[0,1,0],"name":"up","bone":"rightLeg"},{"pts":[[-4.14,-0.14,2.14],[0.14,-0.14,2.14],[0.14,-0.14,-2.14],[-4.14,-0.14,-2.14]],"uvs":[[0.125,0.25],[0.1875,0.25],[0.1875,0.3125],[0.125,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightLeg"},{"pts":[[-4.17,12.17,2.17],[0.17,12.17,2.17],[0.17,-0.17,2.17],[-4.17,-0.17,2.17]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.75],[0.0625,0.75]],"n":[0,0,1],"name":"north","bone":"rightPants"},{"pts":[[0.17,12.17,-2.17],[-4.17,12.17,-2.17],[-4.17,-0.17,-2.17],[0.17,-0.17,-2.17]],"uvs":[[0.1875,0.5625],[0.25,0.5625],[0.25,0.75],[0.1875,0.75]],"n":[0,0,-1],"name":"south","bone":"rightPants"},{"pts":[[-4.17,12.17,-2.17],[-4.17,12.17,2.17],[-4.17,-0.17,2.17],[-4.17,-0.17,-2.17]],"uvs":[[0,0.5625],[0.0625,0.5625],[0.0625,0.75],[0,0.75]],"n":[-1,0,0],"name":"west","bone":"rightPants"},{"pts":[[0.17,12.17,2.17],[0.17,12.17,-2.17],[0.17,-0.17,-2.17],[0.17,-0.17,2.17]],"uvs":[[0.125,0.5625],[0.1875,0.5625],[0.1875,0.75],[0.125,0.75]],"n":[1,0,0],"name":"east","bone":"rightPants"},{"pts":[[-4.17,12.17,-2.17],[0.17,12.17,-2.17],[0.17,12.17,2.17],[-4.17,12.17,2.17]],"uvs":[[0.0625,0.5625],[0.125,0.5625],[0.125,0.5],[0.0625,0.5]],"n":[0,1,0],"name":"up","bone":"rightPants"},{"pts":[[-4.17,-0.17,2.17],[0.17,-0.17,2.17],[0.17,-0.17,-2.17],[-4.17,-0.17,-2.17]],"uvs":[[0.125,0.5],[0.1875,0.5],[0.1875,0.5625],[0.125,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightPants"}],"hair":[{"pts":[[-4.16,24.16,2.16],[4.16,24.16,2.16],[4.16,11.84,2.16],[-4.16,11.84,2.16]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.5],[0.3125,0.5]],"n":[0,0,1],"name":"north","bone":"body"},{"pts":[[4.16,24.16,-2.16],[-4.16,24.16,-2.16],[-4.16,11.84,-2.16],[4.16,11.84,-2.16]],"uvs":[[0.5,0.3125],[0.625,0.3125],[0.625,0.5],[0.5,0.5]],"n":[0,0,-1],"name":"south","bone":"body"},{"pts":[[-4.16,24.16,-2.16],[-4.16,24.16,2.16],[-4.16,11.84,2.16],[-4.16,11.84,-2.16]],"uvs":[[0.25,0.3125],[0.3125,0.3125],[0.3125,0.5],[0.25,0.5]],"n":[-1,0,0],"name":"west","bone":"body"},{"pts":[[4.16,24.16,2.16],[4.16,24.16,-2.16],[4.16,11.84,-2.16],[4.16,11.84,2.16]],"uvs":[[0.4375,0.3125],[0.5,0.3125],[0.5,0.5],[0.4375,0.5]],"n":[1,0,0],"name":"east","bone":"body"},{"pts":[[-4.16,24.16,-2.16],[4.16,24.16,-2.16],[4.16,24.16,2.16],[-4.16,24.16,2.16]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.25],[0.3125,0.25]],"n":[0,1,0],"name":"up","bone":"body"},{"pts":[[-4.16,11.84,2.16],[4.16,11.84,2.16],[4.16,11.84,-2.16],[-4.16,11.84,-2.16]],"uvs":[[0.4375,0.25],[0.5625,0.25],[0.5625,0.3125],[0.4375,0.3125]],"n":[0,-1,0],"name":"down","bone":"body"},{"pts":[[-4.19,21.894,4.367],[4.19,21.894,4.367],[4.19,17.356,1.476],[-4.19,17.356,1.476]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.5373,0.8434],"name":"north","bone":"outerchest"},{"pts":[[4.19,23.71,1.516],[-4.19,23.71,1.516],[-4.19,19.173,-1.375],[4.19,19.173,-1.375]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,0.5373,-0.8434],"name":"south","bone":"outerchest"},{"pts":[[-4.19,23.71,1.516],[-4.19,21.894,4.367],[-4.19,17.356,1.476],[-4.19,19.173,-1.375]],"uvs":[[0.3906,0.3125],[0.4375,0.3125],[0.4375,0.3906],[0.3906,0.3906]],"n":[-1,0,0],"name":"west","bone":"outerchest"},{"pts":[[4.19,21.894,4.367],[4.19,23.71,1.516],[4.19,19.173,-1.375],[4.19,17.356,1.476]],"uvs":[[0.3125,0.3125],[0.3594,0.3125],[0.3594,0.3906],[0.3125,0.3906]],"n":[1,0,0],"name":"east","bone":"outerchest"},{"pts":[[-4.19,23.71,1.516],[4.19,23.71,1.516],[4.19,21.894,4.367],[-4.19,21.894,4.367]],"uvs":[[0.3125,0.3125],[0.4375,0.3125],[0.4375,0.3594],[0.3125,0.3594]],"n":[0,0.8434,0.5373],"name":"up","bone":"outerchest"},{"pts":[[-4.19,17.356,1.476],[4.19,17.356,1.476],[4.19,19.173,-1.375],[-4.19,19.173,-1.375]],"uvs":[[0.3125,0.3438],[0.4375,0.3438],[0.4375,0.3906],[0.3125,0.3906]],"n":[0,-0.8434,-0.5373],"name":"down","bone":"outerchest"},{"pts":[[-4.16,32.16,4.16],[4.16,32.16,4.16],[4.16,23.84,4.16],[-4.16,23.84,4.16]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0.25],[0.125,0.25]],"n":[0,0,1],"name":"north","bone":"head"},{"pts":[[4.16,32.16,-4.16],[-4.16,32.16,-4.16],[-4.16,23.84,-4.16],[4.16,23.84,-4.16]],"uvs":[[0.375,0.125],[0.5,0.125],[0.5,0.25],[0.375,0.25]],"n":[0,0,-1],"name":"south","bone":"head"},{"pts":[[-4.16,32.16,-4.16],[-4.16,32.16,4.16],[-4.16,23.84,4.16],[-4.16,23.84,-4.16]],"uvs":[[0,0.125],[0.125,0.125],[0.125,0.25],[0,0.25]],"n":[-1,0,0],"name":"west","bone":"head"},{"pts":[[4.16,32.16,4.16],[4.16,32.16,-4.16],[4.16,23.84,-4.16],[4.16,23.84,4.16]],"uvs":[[0.25,0.125],[0.375,0.125],[0.375,0.25],[0.25,0.25]],"n":[1,0,0],"name":"east","bone":"head"},{"pts":[[-4.16,32.16,-4.16],[4.16,32.16,-4.16],[4.16,32.16,4.16],[-4.16,32.16,4.16]],"uvs":[[0.125,0.125],[0.25,0.125],[0.25,0],[0.125,0]],"n":[0,1,0],"name":"up","bone":"head"},{"pts":[[-4.16,23.84,4.16],[4.16,23.84,4.16],[4.16,23.84,-4.16],[-4.16,23.84,-4.16]],"uvs":[[0.25,0],[0.375,0],[0.375,0.125],[0.25,0.125]],"n":[0,-1,0],"name":"down","bone":"head"},{"pts":[[-4.22,32.22,4.22],[4.22,32.22,4.22],[4.22,23.78,4.22],[-4.22,23.78,4.22]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0.25],[0.625,0.25]],"n":[0,0,1],"name":"north","bone":"hat"},{"pts":[[4.22,32.22,-4.22],[-4.22,32.22,-4.22],[-4.22,23.78,-4.22],[4.22,23.78,-4.22]],"uvs":[[0.875,0.125],[1,0.125],[1,0.25],[0.875,0.25]],"n":[0,0,-1],"name":"south","bone":"hat"},{"pts":[[-4.22,32.22,-4.22],[-4.22,32.22,4.22],[-4.22,23.78,4.22],[-4.22,23.78,-4.22]],"uvs":[[0.5,0.125],[0.625,0.125],[0.625,0.25],[0.5,0.25]],"n":[-1,0,0],"name":"west","bone":"hat"},{"pts":[[4.22,32.22,4.22],[4.22,32.22,-4.22],[4.22,23.78,-4.22],[4.22,23.78,4.22]],"uvs":[[0.75,0.125],[0.875,0.125],[0.875,0.25],[0.75,0.25]],"n":[1,0,0],"name":"east","bone":"hat"},{"pts":[[-4.22,32.22,-4.22],[4.22,32.22,-4.22],[4.22,32.22,4.22],[-4.22,32.22,4.22]],"uvs":[[0.625,0.125],[0.75,0.125],[0.75,0],[0.625,0]],"n":[0,1,0],"name":"up","bone":"hat"},{"pts":[[-4.22,23.78,4.22],[4.22,23.78,4.22],[4.22,23.78,-4.22],[-4.22,23.78,-4.22]],"uvs":[[0.75,0],[0.875,0],[0.875,0.125],[0.75,0.125]],"n":[0,-1,0],"name":"down","bone":"hat"},{"pts":[[3.84,24.16,2.16],[8.16,24.16,2.16],[8.16,11.84,2.16],[3.84,11.84,2.16]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,1],[0.5625,1]],"n":[0,0,1],"name":"north","bone":"leftArm"},{"pts":[[8.16,24.16,-2.16],[3.84,24.16,-2.16],[3.84,11.84,-2.16],[8.16,11.84,-2.16]],"uvs":[[0.6875,0.8125],[0.75,0.8125],[0.75,1],[0.6875,1]],"n":[0,0,-1],"name":"south","bone":"leftArm"},{"pts":[[3.84,24.16,-2.16],[3.84,24.16,2.16],[3.84,11.84,2.16],[3.84,11.84,-2.16]],"uvs":[[0.5,0.8125],[0.5625,0.8125],[0.5625,1],[0.5,1]],"n":[-1,0,0],"name":"west","bone":"leftArm"},{"pts":[[8.16,24.16,2.16],[8.16,24.16,-2.16],[8.16,11.84,-2.16],[8.16,11.84,2.16]],"uvs":[[0.625,0.8125],[0.6875,0.8125],[0.6875,1],[0.625,1]],"n":[1,0,0],"name":"east","bone":"leftArm"},{"pts":[[3.84,24.16,-2.16],[8.16,24.16,-2.16],[8.16,24.16,2.16],[3.84,24.16,2.16]],"uvs":[[0.5625,0.8125],[0.625,0.8125],[0.625,0.75],[0.5625,0.75]],"n":[0,1,0],"name":"up","bone":"leftArm"},{"pts":[[3.84,11.84,2.16],[8.16,11.84,2.16],[8.16,11.84,-2.16],[3.84,11.84,-2.16]],"uvs":[[0.625,0.75],[0.6875,0.75],[0.6875,0.8125],[0.625,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftArm"},{"pts":[[3.81,24.19,2.19],[8.19,24.19,2.19],[8.19,11.81,2.19],[3.81,11.81,2.19]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,1],[0.8125,1]],"n":[0,0,1],"name":"north","bone":"leftSleeve"},{"pts":[[8.19,24.19,-2.19],[3.81,24.19,-2.19],[3.81,11.81,-2.19],[8.19,11.81,-2.19]],"uvs":[[0.9375,0.8125],[1,0.8125],[1,1],[0.9375,1]],"n":[0,0,-1],"name":"south","bone":"leftSleeve"},{"pts":[[3.81,24.19,-2.19],[3.81,24.19,2.19],[3.81,11.81,2.19],[3.81,11.81,-2.19]],"uvs":[[0.75,0.8125],[0.8125,0.8125],[0.8125,1],[0.75,1]],"n":[-1,0,0],"name":"west","bone":"leftSleeve"},{"pts":[[8.19,24.19,2.19],[8.19,24.19,-2.19],[8.19,11.81,-2.19],[8.19,11.81,2.19]],"uvs":[[0.875,0.8125],[0.9375,0.8125],[0.9375,1],[0.875,1]],"n":[1,0,0],"name":"east","bone":"leftSleeve"},{"pts":[[3.81,24.19,-2.19],[8.19,24.19,-2.19],[8.19,24.19,2.19],[3.81,24.19,2.19]],"uvs":[[0.8125,0.8125],[0.875,0.8125],[0.875,0.75],[0.8125,0.75]],"n":[0,1,0],"name":"up","bone":"leftSleeve"},{"pts":[[3.81,11.81,2.19],[8.19,11.81,2.19],[8.19,11.81,-2.19],[3.81,11.81,-2.19]],"uvs":[[0.875,0.75],[0.9375,0.75],[0.9375,0.8125],[0.875,0.8125]],"n":[0,-1,0],"name":"down","bone":"leftSleeve"},{"pts":[[-8.16,24.16,2.16],[-3.84,24.16,2.16],[-3.84,11.84,2.16],[-8.16,11.84,2.16]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.5],[0.6875,0.5]],"n":[0,0,1],"name":"north","bone":"rightArm"},{"pts":[[-3.84,24.16,-2.16],[-8.16,24.16,-2.16],[-8.16,11.84,-2.16],[-3.84,11.84,-2.16]],"uvs":[[0.8125,0.3125],[0.875,0.3125],[0.875,0.5],[0.8125,0.5]],"n":[0,0,-1],"name":"south","bone":"rightArm"},{"pts":[[-8.16,24.16,-2.16],[-8.16,24.16,2.16],[-8.16,11.84,2.16],[-8.16,11.84,-2.16]],"uvs":[[0.625,0.3125],[0.6875,0.3125],[0.6875,0.5],[0.625,0.5]],"n":[-1,0,0],"name":"west","bone":"rightArm"},{"pts":[[-3.84,24.16,2.16],[-3.84,24.16,-2.16],[-3.84,11.84,-2.16],[-3.84,11.84,2.16]],"uvs":[[0.75,0.3125],[0.8125,0.3125],[0.8125,0.5],[0.75,0.5]],"n":[1,0,0],"name":"east","bone":"rightArm"},{"pts":[[-8.16,24.16,-2.16],[-3.84,24.16,-2.16],[-3.84,24.16,2.16],[-8.16,24.16,2.16]],"uvs":[[0.6875,0.3125],[0.75,0.3125],[0.75,0.25],[0.6875,0.25]],"n":[0,1,0],"name":"up","bone":"rightArm"},{"pts":[[-8.16,11.84,2.16],[-3.84,11.84,2.16],[-3.84,11.84,-2.16],[-8.16,11.84,-2.16]],"uvs":[[0.75,0.25],[0.8125,0.25],[0.8125,0.3125],[0.75,0.3125]],"n":[0,-1,0],"name":"down","bone":"rightArm"},{"pts":[[-8.19,24.19,2.19],[-3.81,24.19,2.19],[-3.81,11.81,2.19],[-8.19,11.81,2.19]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.75],[0.6875,0.75]],"n":[0,0,1],"name":"north","bone":"rightSleeve"},{"pts":[[-3.81,24.19,-2.19],[-8.19,24.19,-2.19],[-8.19,11.81,-2.19],[-3.81,11.81,-2.19]],"uvs":[[0.8125,0.5625],[0.875,0.5625],[0.875,0.75],[0.8125,0.75]],"n":[0,0,-1],"name":"south","bone":"rightSleeve"},{"pts":[[-8.19,24.19,-2.19],[-8.19,24.19,2.19],[-8.19,11.81,2.19],[-8.19,11.81,-2.19]],"uvs":[[0.625,0.5625],[0.6875,0.5625],[0.6875,0.75],[0.625,0.75]],"n":[-1,0,0],"name":"west","bone":"rightSleeve"},{"pts":[[-3.81,24.19,2.19],[-3.81,24.19,-2.19],[-3.81,11.81,-2.19],[-3.81,11.81,2.19]],"uvs":[[0.75,0.5625],[0.8125,0.5625],[0.8125,0.75],[0.75,0.75]],"n":[1,0,0],"name":"east","bone":"rightSleeve"},{"pts":[[-8.19,24.19,-2.19],[-3.81,24.19,-2.19],[-3.81,24.19,2.19],[-8.19,24.19,2.19]],"uvs":[[0.6875,0.5625],[0.75,0.5625],[0.75,0.5],[0.6875,0.5]],"n":[0,1,0],"name":"up","bone":"rightSleeve"},{"pts":[[-8.19,11.81,2.19],[-3.81,11.81,2.19],[-3.81,11.81,-2.19],[-8.19,11.81,-2.19]],"uvs":[[0.75,0.5],[0.8125,0.5],[0.8125,0.5625],[0.75,0.5625]],"n":[0,-1,0],"name":"down","bone":"rightSleeve"},{"pts":[[-4.19,24.19,2.19],[4.19,24.19,2.19],[4.19,11.81,2.19],[-4.19,11.81,2.19]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.75],[0.3125,0.75]],"n":[0,0,1],"name":"north","bone":"jacket"},{"pts":[[4.19,24.19,-2.19],[-4.19,24.19,-2.19],[-4.19,11.81,-2.19],[4.19,11.81,-2.19]],"uvs":[[0.5,0.5625],[0.625,0.5625],[0.625,0.75],[0.5,0.75]],"n":[0,0,-1],"name":"south","bone":"jacket"},{"pts":[[-4.19,24.19,-2.19],[-4.19,24.19,2.19],[-4.19,11.81,2.19],[-4.19,11.81,-2.19]],"uvs":[[0.25,0.5625],[0.3125,0.5625],[0.3125,0.75],[0.25,0.75]],"n":[-1,0,0],"name":"west","bone":"jacket"},{"pts":[[4.19,24.19,2.19],[4.19,24.19,-2.19],[4.19,11.81,-2.19],[4.19,11.81,2.19]],"uvs":[[0.4375,0.5625],[0.5,0.5625],[0.5,0.75],[0.4375,0.75]],"n":[1,0,0],"name":"east","bone":"jacket"},{"pts":[[-4.19,24.19,-2.19],[4.19,24.19,-2.19],[4.19,24.19,2.19],[-4.19,24.19,2.19]],"uvs":[[0.3125,0.5625],[0.4375,0.5625],[0.4375,0.5],[0.3125,0.5]],"n":[0,1,0],"name":"up","bone":"jacket"},{"pts":[[-4.19,11.81,2.19],[4.19,11.81,2.19],[4.19,11.81,-2.19],[-4.19,11.81,-2.19]],"uvs":[[0.4375,0.5],[0.5625,0.5],[0.5625,0.5625],[0.4375,0.5625]],"n":[0,-1,0],"name":"down","bone":"jacket"}]}},"sheetCounts":{"male_skins":32,"male_eyes":16,"male_tops":34,"male_bottoms":14,"male_shoes":4,"knight_armor_male":1,"male_hair":35,"female_skins":32,"female_eyes":16,"female_tops":45,"female_shoes":4,"knight_armor_female":1,"female_hair":35},"presets":[{"id":"european","label":{"en":"European (Plains/Cold)","fr":"Europeen (Plaines/Froid)"},"eth":"white","region":"european"},{"id":"mediterranean","label":{"en":"Mediterranean (Desert)","fr":"Mediterraneen (Desert)"},"eth":"bronze","region":"mediterranean"},{"id":"asian","label":{"en":"Southeast Asian (Cherry/Jungle)","fr":"Asie du Sud-Est (Cerisier/Jungle)"},"eth":"asian","region":"asian"},{"id":"savanna","label":{"en":"Savanna","fr":"Savane"},"eth":"black","region":"mediterranean"}]};

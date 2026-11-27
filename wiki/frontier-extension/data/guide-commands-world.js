/* Frontier Engine & Extension Wiki — Chapters 1 to 5: Commands, Discord, Moving Portals, World Border & Land Taxes */
window.FE_GUIDE_MODULES = window.FE_GUIDE_MODULES || [];
window.FE_GUIDE_MODULES.push(
  {
    id: "commands-hub",
    group: "commands-world",
    kicker: { en: "1. Player Commands & Hub", fr: "1. Commandes Joueurs & Hub" },
    title: {
      en: "Slash Commands, Hub Navigation & 1-Click Launcher",
      fr: "Commandes Slash, Navigation Hub & Lanceur 1-Clic",
    },
    subtitle: {
      en: "Complete reference of every player slash command, chat shortcut, Discord command, and quick-access UI across FrontierEngine and FrontierExtension.",
      fr: "Reference complete de toutes les commandes joueurs (slash, chat, Discord), du Hub principal, de l'inspecteur de joueurs et des teleports /hub et /back.",
    },
    featuredBlocks: ["modded_crafting_table", "nether_beam_block"],
    featuredItems: ["fe:key_common", "fe:key_legendary", "mship:cannon_ball"],
    searchKeywords:
      "command commands slash frontier menu pass custom rank profile lootbox death jobs cmd hub back verify unverify chat shortcut inspect",
    sections: [
      {
        heading: { en: "Interactive Commands Directory", fr: "Repertoire Interactif des Commandes" },
        html: {
          en: `<p>FrontierEngineBP has <strong>zero prefix chat commands</strong> (all commands are native Bedrock <code>/frontier:*</code> slash commands), while FrontierExtensionBP registers both slash commands and convenient chat triggers (<code>!cmd</code>, <code>!skills</code>, <code>!metier</code>). Filter the full table below:</p>`,
          fr: `<p>FrontierEngineBP n'utilise aucune commande chat a prefixe (toutes sont des commandes slash natives <code>/frontier:*</code>), tandis que FrontierExtensionBP propose des commandes slash plus des raccourcis chat pratiques (<code>!cmd</code>, <code>!skills</code>, <code>!metier</code>). Filtrez la liste complete ci-dessous :</p>`,
        },
        dynamicWidget: "commands_table",
      },
      {
        heading: { en: "/frontier:hub & /frontier:back Teleportation Rules", fr: "Regles exactes de /frontier:hub et /frontier:back" },
        html: {
          en: `
            <ul>
              <li><strong><code>/frontier:hub</code> (alias <code>/hub</code>)</strong>: Requires standing completely still for <strong>10 seconds</strong> (<code>HUB_WAIT_TICKS = 200</code> ticks). Checked every tick; any movement exceeding <code>0.01</code> blocks, dimension change, death, disconnect, or active Grand Teleport immediately cancels the warp.</li>
              <li><strong>Position Save</strong>: If you are outside the Hub (main map), your exact <code>location</code> and <code>dimension</code> are saved in player property <code>fe:last_main_map_location</code> (never overwritten if you run <code>/hub</code> again while already inside the Hub).</li>
              <li><strong><code>/frontier:back</code> (alias <code>/back</code>)</strong>: Instantly teleports you back to your last saved main-map location with <strong>0 wait time, 0 cooldown, and 0 coin cost</strong>. Does not erase the saved anchor so you can shuttle smoothly.</li>
            </ul>
            <div class="callout callout-tip">
              <div class="callout-title">Always keep a saved anchor</div>
              Always use <code>/hub</code> from the main world first so <code>/back</code> stays anchored to your outpost or nation territory!
            </div>
          `,
          fr: `
            <ul>
              <li><strong><code>/frontier:hub</code> (alias <code>/hub</code>)</strong> : Exige de rester totalement immobile pendant <strong>10 secondes</strong> (<code>HUB_WAIT_TICKS = 200</code> ticks). Verifie a chaque tick : tout deplacement superieur a <code>0.01</code> bloc, changement de dimension, mort ou deconnexion annule la teleportation.</li>
              <li><strong>Sauvegarde de position</strong> : Hors du Hub, votre position et dimension sont enregistrees dans <code>fe:last_main_map_location</code> (n'est jamais ecrasee si vous relancez <code>/hub</code> deja dans le Hub).</li>
              <li><strong><code>/frontier:back</code> (alias <code>/back</code>)</strong> : Vous ramene instantanement a votre derniere position sauvegardee hors Hub, avec <strong>0 attente, 0 cooldown et 0 piece</strong>. La position reste memorisee.</li>
            </ul>
            <div class="callout callout-tip">
              <div class="callout-title">Pensez a ancrer votre retour</div>
              Utilisez toujours <code>/hub</code> depuis le monde principal pour conserver votre point de retour <code>/back</code> vers votre nation ou base.
            </div>
          `,
        },
      },
      {
        heading: { en: "Main Hub UI, Launcher & Chat Shortcuts Drawer", fr: "Hub /frontier:menu, Lanceur & Tiroir Chat" },
        html: {
          en: `
            <ul>
              <li><strong><code>/frontier:menu</code></strong>: Opens the central OreUI Hub displaying your 8-line Profile card (Name, Rank badge, Nation from Jerry's Nations, Religion, Safe Vault balance/cap, Frontier Tokens, Prestige, Playtime) alongside <strong>FrontierPass</strong>, <strong>Profile &amp; Custom</strong>, <strong>Economy &amp; Vault</strong>, <strong>Jobs &amp; Skills</strong>, and <strong>Gift Codes</strong>.</li>
              <li><strong><code>/frontier:cmd</code> / <code>!cmd</code></strong>: 1-click launcher with <strong>15 direct shortcuts</strong> including <code>/jn:tp</code>, <code>/jn:global</code>, <code>/jn:nation</code>, <code>/jn:org</code>, <code>/frontier:hub</code>, <code>/frontier:back</code>, and <code>/frontierengine:tps</code>.</li>
              <li><strong>Player Inspection &amp; Transfers</strong>: <strong>Sneak + Right-Click</strong> any online player (or run <code>/frontier:profile</code>) to inspect their Profile, transfer Vault Coins directly, or jump to Rank/Guild menus. Also use <code>/frontier:pay &lt;player&gt; &lt;amount&gt;</code>.</li>
              <li><strong>Chat UI Helper (<code>ui/chat_screen.json</code>)</strong>: Includes a quick drawer toggle showing curated <strong>Frontier</strong>, <strong>Server</strong>, and <strong>Nations</strong> command tabs plus an autocomplete <code>TAB</code> button.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong><code>/frontier:menu</code></strong> : Hub OreUI central affichant votre fiche 8 lignes (Pseudo, Rang, Nation synchro Jerry's Nations, Religion, Coffre-Fort, Jetons Frontier, Prestige, Temps de jeu) et les acces directs vers <strong>FrontierPass</strong>, <strong>Profil &amp; Custom</strong>, <strong>Economie &amp; Coffre</strong>, <strong>Metiers</strong> et <strong>Codes Cadeaux</strong>.</li>
              <li><strong><code>/frontier:cmd</code> / <code>!cmd</code></strong> : Lanceur rapide a <strong>15 boutons en 1 clic</strong> incluant <code>/jn:tp</code>, <code>/jn:global</code>, <code>/jn:nation</code>, <code>/jn:org</code>, <code>/frontier:hub</code>, <code>/frontier:back</code> et <code>/frontierengine:tps</code>.</li>
              <li><strong>Inspection d'un joueur &amp; Virements</strong> : Faites <strong>Sneak + Clic droit</strong> sur un joueur en jeu (ou <code>/frontier:profile</code>) pour afficher sa carte complete et lui transferer des Coins (ou utilisez <code>/frontier:pay &lt;joueur&gt; &lt;montant&gt;</code>).</li>
              <li><strong>Tiroir du Chat (<code>ui/chat_screen.json</code>)</strong> : Bouton integre ouvrant un guide a 3 onglets (<code>Frontier</code>, <code>Serveur</code>, <code>Nations</code>) ainsi qu'un bouton d'autocompletion <code>TAB</code>.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "discord-verification",
    group: "commands-world",
    kicker: { en: "2. Discord Sync", fr: "2. Synchro Discord" },
    title: {
      en: "Account Linking, Verification & Ban/Chat Sync",
      fr: "Liaison de Compte, Verification & Synchro Discord",
    },
    subtitle: {
      en: "Why linking your Minecraft account to The Frontier Discord is mandatory for Continent Teleporters, plus nickname, ban, and chat relay behavior.",
      fr: "Comment lier son compte Minecraft au Discord The Frontier (obligatoire pour les Teleporteurs de Continents), synchro des pseudos, bans et relais de chat.",
    },
    searchKeywords: "discord verify unverify link code nickname ban relay continent teleporter",
    sections: [
      {
        heading: { en: "Step-by-Step Verification Flow (/verify)", fr: "Procedure de Verification (/verify)" },
        html: {
          en: `
            <ol>
              <li>Run <code>/verify</code> (or <code>/frontier:verify</code>) inside Minecraft. Restricted strictly to <code>PlayerPermissionLevel.Member</code> (note: <code>auto_deop.js</code> automatically runs <code>deop @a</code> at spawn).</li>
              <li>The server generates a single-use <strong>6-character uppercase alphanumeric code</strong> valid for <strong>10 minutes</strong> (running <code>/verify</code> again invalidates the previous code).</li>
              <li>Join The Frontier Discord server (<code>discord.gg/ZgSvHvs5pb</code>) and execute the slash command <code>/verify code:&lt;6-CHAR&gt;</code>. Rate-limit: maximum <strong>5 failed attempts per 10 minutes</strong>.</li>
              <li>Once verified (<strong>1-to-1 binding</strong> in world properties), Continent NPC Teleporters unlock immediately.</li>
              <li><strong>Unlinking</strong>: Running <code>/unverify</code> deletes the Discord binding and teleports you directly to World Spawn.</li>
            </ol>
          `,
          fr: `
            <ol>
              <li>Executez <code>/verify</code> (ou <code>/frontier:verify</code>) en jeu. Reserve au niveau <code>Member</code> (<code>auto_deop.js</code> applique <code>deop @a</code> automatiquement a la connexion).</li>
              <li>Vous recevez un code unique de <strong>6 caracteres majuscules</strong> valable <strong>10 minutes</strong> (relancer <code>/verify</code> annule le code precedent).</li>
              <li>Sur le serveur Discord The Frontier (<code>discord.gg/ZgSvHvs5pb</code>), executez la commande slash <code>/verify code:&lt;CODE&gt;</code>. Anti-bruteforce : maximum <strong>5 echecs par fenetre de 10 minutes</strong>.</li>
              <li>Une fois lie (liaison stricte <strong>1 pour 1</strong>), les PNJ Teleporteurs de Continents sont immediatement debloques.</li>
              <li><strong>Deliaison</strong> : <code>/unverify</code> supprime la liaison Discord et teleporte aussitot au Spawn.</li>
            </ol>
          `,
        },
      },
      {
        heading: { en: "Nickname, Ban & Chat Synchronization", fr: "Synchronisation Pseudos, Bans & Chat" },
        html: {
          en: `
            <ul>
              <li><strong>Discord Nickname Sync (<code>setNickname: true</code>)</strong>: Automatically updates your Discord server nickname to match your Minecraft gamertag on verification and whenever you spawn with a changed gamertag.</li>
              <li><strong>Discord Roles</strong>: No automatic Discord role sync is active in FrontierEngineBP.</li>
              <li><strong>One-Way Ban Sync (Discord -> Minecraft)</strong>: If a verified player is banned on Discord (live or at server startup), FrontierEngineBP automatically marks them <code>STATUS_BANNED</code> in <code>player_manager.js</code> and kicks them within 5 seconds. Unbanning on Discord lifts Discord-sourced bans only (never manual staff bans).</li>
              <li><strong>Chat Relay (Minecraft -> Discord)</strong>: Only the <strong>Global Chat</strong> channel (<code>frontier_chat:global</code>) is relayed to Discord. Nation, Organization, and muted/blocked messages stay strictly in-game.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Synchronisation des Pseudos (<code>setNickname: true</code>)</strong> : Met automatiquement a jour votre pseudo sur le Discord du serveur avec votre gamertag Minecraft lors de la liaison et a chaque connexion en cas de changement.</li>
              <li><strong>Roles Discord</strong> : Aucune synchronisation automatique de roles n'est active dans FrontierEngineBP.</li>
              <li><strong>Synchronisation des Bans (Discord -> Minecraft)</strong> : Un joueur verifie banni sur Discord est automatiquement banni en jeu via <code>player_manager.js</code> (kick dans les 5s). Un deban Discord ne leve que les bans d'origine Discord (jamais les bans manuels staff).</li>
              <li><strong>Relais Chat (Minecraft -> Discord)</strong> : Seul le <strong>Chat Global</strong> (<code>frontier_chat:global</code>) est relaye sur Discord ; les canaux de Nation et d'Organisation restent prives en jeu.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "nether-beams",
    group: "commands-world",
    kicker: { en: "3. Moving Portals", fr: "3. Portails Mobiles" },
    title: {
      en: "Moving Nether Beams & Nether Portal Rules",
      fr: "Rayons du Nether Mobiles & Blocage des Portails",
    },
    subtitle: {
      en: "Vanilla obsidian Nether portals are disabled world-wide. Travel between the Overworld and the Nether exclusively through the two 3x3 Nether Beams.",
      fr: "Les portails du Nether en obsidienne sont desactives. Tous les trajets Overworld <-> Nether passent par les 2 faisceaux Nether Beam de 3x3.",
    },
    featuredBlocks: ["nether_beam_block"],
    searchKeywords: "nether beam portal obsidian flint steel moving 7 days 12000 blocks cooldown 3s (0,0)",
    sections: [
      {
        heading: { en: "Vanilla Nether Portals Disabled (no_portal.js)", fr: "Desactivation des Portails Vanilla (no_portal.js)" },
        html: {
          en: `
            <ul>
              <li>Igniting <code>minecraft:obsidian</code> with <code>minecraft:flint_and_steel</code> or <code>minecraft:fire_charge</code> is immediately canceled with chat warning <em>"Nether portals are disabled!"</em>.</li>
              <li>Every <strong>10 ticks (0.5s)</strong> and upon dimension change, any <code>minecraft:portal</code> block within a <strong>15-block radius</strong> (31x31x31 cube) around every Overworld and Nether player is replaced with air.</li>
              <li><strong>End Portals</strong> are not blocked by this module.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li>L'allumage de <code>minecraft:obsidian</code> avec un briquet ou une boule de feu est annule avec le message <em>"Nether portals are disabled!"</em>.</li>
              <li>Toutes les <strong>10 ticks (0.5s)</strong> et a chaque changement de dimension, tout bloc <code>minecraft:portal</code> dans un rayon de <strong>15 blocs</strong> (cube 31x31x31) autour de chaque joueur Overworld/Nether est efface.</li>
              <li>Les <strong>Portails de l'End</strong> ne sont pas bloques par ce systeme.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "The Two Nether Beams (Moving Overworld vs Fixed Nether)", fr: "Les Deux Faisceaux (Overworld Mobile vs Nether Fixe)" },
        html: {
          en: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Property</th><th>Overworld Nether Beam</th><th>Nether Beam (Dimension)</th></tr></thead>
              <tbody>
                <tr><td><strong>Count &amp; Footprint</strong></td><td>1 active beam (<strong>3x3</strong> vertical column of <code>fe:nether_beam_block</code>, Y=0..319)</td><td>1 permanent beam (<strong>3x3</strong> vertical column, Y=0..127)</td></tr>
                <tr><td><strong>Coordinates</strong></td><td>Uniform random disk within <strong>r = 12,000 blocks</strong> around <code>(0, 0)</code></td><td>Fixed permanently at <strong>X = 0, Z = 0</strong></td></tr>
                <tr><td><strong>Relocation Timer</strong></td><td>First spawn: <strong>5 minutes</strong> after world init; moves every <strong>7 days</strong></td><td>Never moves</td></tr>
                <tr><td><strong>Block Replacement</strong></td><td>Replaces air and 52 natural flora/snow blocks only (never breaks solid structures)</td><td>Clears all blocks on its 3x3 column (including bedrock)</td></tr>
                <tr><td><strong>Chunk Keeping</strong></td><td>Persistent script ticking area <code>fe_beam_ow</code> (radius 16)</td><td>Persistent script ticking area <code>fe_beam_nether</code> (radius 16)</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Propriete</th><th>Faisceau Overworld (Mobile)</th><th>Faisceau du Nether (Fixe)</th></tr></thead>
              <tbody>
                <tr><td><strong>Nombre &amp; Taille</strong></td><td>1 faisceau actif (colonne <strong>3x3</strong> de <code>fe:nether_beam_block</code>, Y=0..319)</td><td>1 faisceau permanent (colonne <strong>3x3</strong>, Y=0..127)</td></tr>
                <tr><td><strong>Coordonnees</strong></td><td>Disque uniforme de rayon <strong>12 000 blocs</strong> autour de <code>(0, 0)</code></td><td>Fixe en permanence en <strong>X = 0, Z = 0</strong></td></tr>
                <tr><td><strong>Delai de deplacement</strong></td><td>1ere apparition : <strong>5 min</strong> apres demarrage ; deplace tous les <strong>7 jours</strong></td><td>Ne bouge jamais</td></tr>
                <tr><td><strong>Protection terrain</strong></td><td>Ne remplace que l'air et 52 blocs de vegetation/neige</td><td>Degage tous les blocs sur l'axe 3x3 (bedrock incluse)</td></tr>
                <tr><td><strong>Maintien en ligne</strong></td><td>Ticking area persistante <code>fe_beam_ow</code> (rayon 16)</td><td>Ticking area persistante <code>fe_beam_nether</code> (rayon 16)</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
      {
        heading: { en: "Traversal Rules, Safe Landing & Notifications", fr: "Traversee, Atterrissage Sur & Notifications" },
        html: {
          en: `
            <ul>
              <li><strong>Detection &amp; Cooldown</strong>: Checked every <strong>2 ticks</strong> at player feet/head. Crossing triggers a <strong>3-second cooldown</strong> (<code>60 ticks</code>), even if landing fails.</li>
              <li><strong>Safe Landing Search</strong>: Scans 8 cardinal/diagonal directions at distances <code>[3, 4, 6, 8, 12]</code> blocks from the destination beam, rejecting lava, fire, soul fire, magma, campfires, cactus, sweet berries, and powder snow, and requiring 2 blocks of air above. Faces you toward the beam center.</li>
              <li><strong>Nether Emergency Pocket</strong>: Going Overworld &rarr; Nether scans downward from <code>Y=120</code> near <code>(0, 0)</code>. If no safe ground exists, carves a <strong>safe netherrack platform</strong> at <code>(x+3, 64, z)</code> with floor at Y=63 and air at Y=64..65.</li>
              <li><strong>Alerts &amp; Web Map</strong>: Every Overworld beam move broadcasts exact <code>X, Z</code> coordinates in global chat (with beacon sound), sends a magenta Discord embed, and syncs <code>netherbeam.json</code> to the website World Map every <strong>6 hours</strong>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Detection &amp; Cooldown</strong> : Verifie toutes les <strong>2 ticks</strong>. Chaque traversee (meme echouee) applique un cooldown de <strong>3 secondes</strong> (<code>60 ticks</code>).</li>
              <li><strong>Atterrissage Securise</strong> : Scanne 8 directions aux distances <code>[3, 4, 6, 8, 12]</code> blocs ; refuse lave, feu, magma, cactus, baies sucrées et neige poudreuse, et exige 2 blocs d'air libres. Oriente le regard vers le centre du faisceau.</li>
              <li><strong>Poche de Secours Nether</strong> : Overworld &rarr; Nether scanne du haut (<code>Y=120</code>) vers le bas pres de <code>(0, 0)</code>. Si aucun sol n'est sur, cree une <strong>plateforme de secours en netherrack</strong> en <code>(x+3, 64, z)</code>.</li>
              <li><strong>Annonces &amp; Carte Web</strong> : Chaque deplacement annonce <code>X, Z</code> en chat global (+ son balise), publie sur Discord et met a jour la carte web (<code>netherbeam.json</code>) toutes les <strong>6 heures</strong>.</li>
            </ul>
          `,
        },
      },
    ],
  },
  {
    id: "world-border-travel",
    group: "commands-world",
    kicker: { en: "4. World Border & Travel", fr: "4. Bordure & Continents" },
    title: {
      en: "World Border, Opening Hub & 5-Continent Teleporters",
      fr: "Bordure du Monde, Sanctuaire Hub & 5 Continents",
    },
    subtitle: {
      en: "Exact boundaries (13,000-block radius world disk, 1,000x1,000 Hub), boat/mount border handling, Grand Teleport, and the 5 playable continents.",
      fr: "Limites exactes du monde (disque 13 000 blocs, Hub 1000x1000), retour en bateau/monture sans degats, Grand Teleport et les 5 continents.",
    },
    searchKeywords: "world border 13000 12984 hub opening 15000 continent teleporter rtp_1 rtp_2 rtp_3 rtp_4 rtp_5 grand teleport boat",
    sections: [
      {
        heading: { en: "Main World Border (Radius 13,000 Blocks)", fr: "Bordure Principale (Rayon 13 000 Blocs)" },
        html: {
          en: `
            <ul>
              <li><strong>Shape &amp; Dimensions</strong>: Circular disk centered at <code>(0, 0)</code> with radius <strong>13,000 blocks</strong> (<code>hypot(x, z) &lt; 13000</code>), enforced across Overworld, Nether, and The End.</li>
              <li><strong>Same-Edge Return (No Damage, No Opposite Wrapping)</strong>: Crossing outside repositions you at your exact current polar angle <strong>16 blocks inside the border</strong> (<code>r = 12,984</code>). Water is treated as safe surface landing so sailing boats works seamlessly.</li>
              <li><strong>Mount &amp; Escort Carry</strong>: Teleports your boat/mount and nearby entities within a <strong>5-block radius</strong> together with you (riders are dismounted cleanly at destination to prevent glitches).</li>
              <li><strong>Non-Player Entities</strong>: Checked every 5 ticks across all 3 dimensions and gently bounced inside <code>r = 12,984</code>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Forme &amp; Rayon</strong> : Disque circulaire centre en <code>(0, 0)</code> de rayon <strong>13 000 blocs</strong> (<code>hypot(x, z) &lt; 13000</code>), actif en Overworld, Nether et End.</li>
              <li><strong>Retour sur le meme bord (Sans degats)</strong> : Pas de teleportation a l'autre bout de la carte ni de degats : vous etes replace au meme angle a <strong>12 984 blocs</strong> du centre (marge de <code>16</code> blocs). L'eau est acceptee pour la navigation en bateau.</li>
              <li><strong>Transport des montures &amp; bateaux</strong> : Votre bateau/monture et vos animaux dans un rayon de <strong>5 blocs</strong> vous accompagnent automatiquement (les passagers sont demontes a l'arrivee).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "The Hub Sanctuary (1,000 x 1,000 Safe Zone)", fr: "Le Sanctuaire du Hub (Zone 1 000 x 1 000)" },
        html: {
          en: `
            <ul>
              <li><strong>Location</strong>: Isolated <code>1,000 x 1,000</code> Overworld zone centered at <code>(0, 15000)</code> (<code>X in [-500, 500]</code>, <code>Z in [14500, 15500]</code>).</li>
              <li><strong>Anti-Void Protection</strong>: Inside the Hub, any player falling to <code>Y &lt;= 0</code> is instantly rescued back to Default Spawn. (No anti-void exists on the main map.)</li>
              <li><strong>Anti-Drop &amp; Protection</strong>: Inventory &amp; equipment items are automatically locked in inventory (<code>ItemLockMode.inventory</code>) inside the Hub to prevent accidental drops and unlocked upon exit. Block breaking/interaction (non-Creative), mob spawning, and farmland trampling are disabled.</li>
              <li><strong>Ambient City Music</strong>: Marker entities <code>fe:ambient_music</code> loop <code>fe.city_ambient</code> within a <strong>100-block radius</strong>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Localisation</strong> : Zone isolee <code>1 000 x 1 000</code> en Overworld centree sur <code>(0, 15000)</code> (<code>X [-500..500]</code>, <code>Z [14500..15500]</code>).</li>
              <li><strong>Securite Anti-Vide</strong> : Dans le Hub, tomber a <code>Y &lt;= 0</code> teleporte immediatement au Spawn. (Aucune protection anti-vide sur la carte principale.)</li>
              <li><strong>Anti-Drop &amp; Regles</strong> : Tous vos items sont verrouilles en inventaire dans le Hub pour eviter toute perte et deverrouilles a la sortie. Casse de blocs, mobs hostiles et pietinement des cultures y sont bloques.</li>
              <li><strong>Musique d'Ambiance</strong> : Les marqueurs <code>fe:ambient_music</code> diffusent <code>fe.city_ambient</code> dans un rayon de <strong>100 blocs</strong>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "5 Continent Teleporters & Grand Teleport", fr: "Les 5 Teleporteurs de Continents & Grand Teleport" },
        html: {
          en: `
            <p>Interacting with continent NPC teleporters (<code>rtp</code> or <code>rtp_1..5</code>) requires <strong>Overworld</strong> and a <strong>Verified Discord Account</strong> (<code>/verify</code>). Lands on dry safe ground within a <strong>1,000-block disk radius</strong> using Grand Teleport animations (<code>&lt;15m</code> instant, <code>15-99m</code> fast, <code>100-499m</code> classic, <code>500m+</code> cinematic).</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>NPC Tag</th><th>Center X</th><th>Center Z</th><th>Landing Radius</th><th>Access Rule</th></tr></thead>
              <tbody>
                <tr><td><code>rtp_1</code></td><td><code>-842</code></td><td><code>-924</code></td><td>1,000 blocks</td><td>Discord Verified Required</td></tr>
                <tr><td><code>rtp_2</code></td><td><code>-9,258</code></td><td><code>-636</code></td><td>1,000 blocks</td><td>Discord Verified Required</td></tr>
                <tr><td><code>rtp_3</code></td><td><code>2,838</code></td><td><code>-6,172</code></td><td>1,000 blocks</td><td>Discord Verified Required</td></tr>
                <tr><td><code>rtp_4</code></td><td><code>4,534</code></td><td><code>6,862</code></td><td>1,000 blocks</td><td>Discord Verified Required</td></tr>
                <tr><td><code>rtp_5</code></td><td><code>6,870</code></td><td><code>-8,344</code></td><td>1,000 blocks</td><td>Discord Verified Required</td></tr>
              </tbody>
            </table></div>
          `,
          fr: `
            <p>Les PNJ Teleporteurs (<code>rtp</code> aleatoire ou <code>rtp_1..5</code>) exigent d'etre en <strong>Overworld</strong> et d'avoir lie son compte via <code>/verify</code>. Ils posent sur un sol sec et sur dans un disque de <strong>1 000 blocs</strong> avec la sequence <strong>Grand Teleport</strong>.</p>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Tag PNJ</th><th>Centre X</th><th>Centre Z</th><th>Rayon d'arrivee</th><th>Condition</th></tr></thead>
              <tbody>
                <tr><td><code>rtp_1</code></td><td><code>-842</code></td><td><code>-924</code></td><td>1 000 blocs</td><td>Compte Discord verifie requis</td></tr>
                <tr><td><code>rtp_2</code></td><td><code>-9 258</code></td><td><code>-636</code></td><td>1 000 blocs</td><td>Compte Discord verifie requis</td></tr>
                <tr><td><code>rtp_3</code></td><td><code>2 838</code></td><td><code>-6 172</code></td><td>1 000 blocs</td><td>Compte Discord verifie requis</td></tr>
                <tr><td><code>rtp_4</code></td><td><code>4 534</code></td><td><code>6 862</code></td><td>1 000 blocs</td><td>Compte Discord verifie requis</td></tr>
                <tr><td><code>rtp_5</code></td><td><code>6 870</code></td><td><code>-8 344</code></td><td>1 000 blocs</td><td>Compte Discord verifie requis</td></tr>
              </tbody>
            </table></div>
          `,
        },
      },
    ],
  },
  {
    id: "land-taxes-rules",
    group: "commands-world",
    kicker: { en: "5. Taxes, Restrictions & Rules", fr: "5. Taxes, Restrictions & Regles" },
    title: {
      en: "Weekly Land Taxes, Founding Rules, Restricted Items & Fair-Play",
      fr: "Taxes Foncieres, Fondation, Restrictions & Fair-Play",
    },
    subtitle: {
      en: "Exact Sunday 18:00 UTC tax formula with interactive calculator, 4-founder server rule, blocked items, Rustic food integration, and anti-cheat summary.",
      fr: "Formule des taxes du dimanche 18h UTC avec calculateur interactif, regle des 4 fondateurs, items bloques, Rustic (+1 pt) et regles Fair-Play.",
    },
    searchKeywords: "land tax sunday 18:00 utc connected disconnected doubling 1000 cap 9999 grace 24h forfeiture bundle ender chest pearl wither rustic playtime founders",
    sections: [
      {
        heading: { en: "Server Nation Founding & Weekly Land Tax System", fr: "Fondation (4 Joueurs) & Taxes Foncieres Hebdomadaires" },
        html: {
          en: `
            <ul>
              <li><strong>Founding Rule Override (<code>nation_founding.js</code>)</strong>: On The Frontier, establishing a new nation requires <strong>4 co-founders total</strong> (founder + 3 nationless players who accept within 30s).</li>
              <li><strong>Overworld Only</strong>: Claims in the Nether or The End are automatically released during reconciliation and cannot be held.</li>
              <li><strong>Exemptions</strong>: Capital core cells (up to <strong>1</strong> at Tier 0, <strong>5</strong> in a cross at Tier 1, or <strong>9</strong> in a 3x3 at Tier 2+) and nations created after the round due time pay <strong>0</strong>.</li>
              <li><strong>Collection Schedule</strong>: Billed automatically every <strong>Sunday at 18:00:00 UTC</strong>. Previewed live in your Nation Treasury UI.</li>
              <li><strong>Tax Formula per 100x100 Cell</strong>:
                <ul>
                  <li><strong>Connected cell</strong> (orthogonal 4-way chain to Capital): <code>baseRate</code> = <strong>10 Coins/week</strong>.</li>
                  <li><strong>Disconnected exclave cell</strong>: <code>ceil(10 * 2^(distance / 1000))</code> Coins/week (doubles every <code>1,000</code> blocks from the capital!).</li>
                  <li><strong>Weekly Cap</strong>: Total bill per nation is capped at <strong>9,999 Coins/week</strong>.</li>
                </ul>
              </li>
              <li><strong>Debt &amp; 24-Hour Grace Period</strong>: If a nation's treasury goes negative, it has <strong>24 hours</strong> (until Monday 18:00 UTC) to recover <code>&gt;= 0</code>. Otherwise, taxable cells are forfeited <strong>farthest-from-capital first</strong> until debt clears, then any remaining negative balance is forgiven to <code>0</code> (Capital cells are never seized).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Fondation de Nation (<code>nation_founding.js</code>)</strong> : Sur The Frontier, creer une nation exige <strong>4 fondateurs</strong> au total (le fondateur + 3 joueurs sans nation qui acceptent sous 30s).</li>
              <li><strong>Overworld uniquement</strong> : Tout claim dans le Nether ou l'End est automatiquement libere.</li>
              <li><strong>Exemptions</strong> : Les parcelles de Capitale (<strong>1</strong> au Palier 0, <strong>5</strong> au Palier 1, <strong>9</strong> au Palier 2+) sont gratuites.</li>
              <li><strong>Prelevement</strong> : Chaque <strong>dimanche a 18h00 UTC</strong> (apercu temps reel dans votre Tresorerie).</li>
              <li><strong>Formule par parcelle 100x100</strong> :
                <ul>
                  <li><strong>Parcelle connectee</strong> a la capitale : <code>10 Coins/semaine</code> (defaut).</li>
                  <li><strong>Parcelle isolee (exclave)</strong> : <code>ceil(10 * 2^(distance / 1000))</code> Coins/semaine (double tous les <code>1 000</code> blocs !).</li>
                  <li><strong>Plafond hebdomadaire</strong> : Facture maximale plafonnee a <strong>9 999 Coins/semaine</strong>.</li>
                </ul>
              </li>
              <li><strong>Impayes &amp; Grace de 24h</strong> : Si le tresor passe negatif, la nation a <strong>24 heures</strong> (jusqu'au lundi 18h UTC) pour revenir a <code>&gt;= 0</code>. Sinon, les parcelles taxables sont saisies <strong>de la plus lointaine a la plus proche</strong>, puis toute dette residuelle est remise a 0 (la capitale n'est jamais saisie).</li>
            </ul>
          `,
        },
        dynamicWidget: "tax_calc",
      },
      {
        heading: { en: "Restricted Items, Rustic Food & 7-Day Playtime", fr: "Items Restreints, Rustic (+1) & Temps de Jeu 7j" },
        html: {
          en: `
            <ul>
              <li><strong>Blocked Items &amp; Entities (<code>restrictions.js</code>)</strong>: <strong>All 17 Bundles</strong>, <strong>Ender Chests</strong>, <strong>Ender Pearls</strong>, and <strong>Withers</strong> are completely disabled (recipes replaced with Bedrock + inventories/containers/drops swept every 10 ticks). In addition, FrontierExtension Fair-Play rules block <strong>Locator Maps</strong> (<code>map</code>/<code>filled_map</code>/<code>empty_map</code>), <strong>Shulker Boxes</strong>, and illegal/Creative items, plus native blocking of <code>minecraft:agent</code> and <code>command_block_minecart</code>.</li>
              <li><strong>Rustic Food Integration (<code>rustic_integration.js</code>)</strong>: Registers <strong>27 Rustic crops, fruits, brews &amp; oils</strong> (beers, wines, mead, juices, chili, grapes, tomatoes, olives, wildberries) with Jerry's Nations Food Crates at <strong>+1 food point each</strong>.</li>
              <li><strong>Playtime Rolling Leaderboard</strong>: Tracks active playtime in a <strong>7-day (168h) rolling window</strong> (credited every 60s, max 5 min/tick) to populate floating Top 10 Playtime world panels (no automatic coin/XP rewards).</li>
              <li><strong>Fair-Play &amp; Anti-Cheat Overview</strong>: Server protections guard melee combat reach/angle, block reach/fast-break/scaffold, chat spam, illegal enchantments/overstacks, and sneak/distance name-tag hiding. Staff can inspect alerts via <code>/frontier:ac</code>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Objets &amp; Entites Bloques (<code>restrictions.js</code>)</strong> : Les <strong>17 Bundles</strong>, <strong>Ender Chests</strong>, <strong>Ender Pearls</strong> et <strong>Withers</strong> sont bannis (recette Bedrock + suppression toutes les 10 ticks). De plus, les regles Fair-Play bloquent les <strong>Cartes de localisation</strong> (<code>map</code>/<code>filled_map</code>), les <strong>Shulker Boxes</strong> et tout item/enchantement illegal, ainsi que <code>minecraft:agent</code> et <code>command_block_minecart</code>.</li>
              <li><strong>Integration Rustic (<code>rustic_integration.js</code>)</strong> : Enregistre <strong>27 aliments et boissons Rustic</strong> (bieres, vins, hydromel, jus, huiles, tomates, raisins, olives, piments) dans les caisses de vivres Jerry's Nations pour <strong>+1 point de nourriture</strong> chacun.</li>
              <li><strong>Temps de Jeu (Top 10 sur 7 jours)</strong> : Enregistre l'activite sur une <strong>fenetre glissante de 7 jours (168h)</strong> pour les panneaux flottants Top 10 Playtime (sans recompense automatique).</li>
              <li><strong>Fair-Play &amp; Anti-Cheat</strong> : Protection active sur la portee/frequence de combat, vitesse de minage, scaffold, anti-spam chat, enchantements illegaux et masquage des pseudos a distance ou accroupi (panneau staff <code>/frontier:ac</code>).</li>
            </ul>
          `,
        },
      },
    ],
  }
);

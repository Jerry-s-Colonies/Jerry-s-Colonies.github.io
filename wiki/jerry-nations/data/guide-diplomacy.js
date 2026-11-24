/* Jerry's Nations Wiki — Guide Module 2: Diplomacy, Orgs, Elections & Commands */
window.JN_GUIDE_MODULES = window.JN_GUIDE_MODULES || [];
window.JN_GUIDE_MODULES.push(
  {
    id: "diplomacy-orgs",
    group: "governance",
    kicker: { en: "5. Diplomacy & Alliances", fr: "5. Diplomatie & Alliances" },
    title: {
      en: "Treaties, Mergers & International Organizations",
      fr: "Traites, Fusions & Organisations Internationales",
    },
    subtitle: {
      en: "Bilateral diplomacy, unilateral wars, Nation Mergers, and the 5-level International Organizations & World Council Resolutions.",
      fr: "Relations bilaterales, guerres unilaterales, fusions de nations, Organisations Internationales niveaux 1 a 5 et Resolutions du Conseil Mondial.",
    },
    featuredBlocks: ["mayor_table"],
    featuredItems: ["jn:org_banner", "jn:cosmetic_org_banner", "jn:coin"],
    searchKeywords:
      "diplomacy ally nap neutral war merger organization banner doctrine council resolution embargo ceasefire humanitarian blue helmet radar",
    sections: [
      {
        heading: { en: "Bilateral Treaties, War & Nation Mergers", fr: "Traites Bilateraux, Guerre & Fusion de Nations" },
        html: {
          en: `
            <ul>
              <li><strong>4 Diplomatic Statuses</strong>: <code>ally</code> (bilateral or same Organization — blocks PvP, blue map color, ally permissions), <code>nap</code> (Non-Aggression Pact, bilateral), <code>neutral</code> (default), <code>enemy</code> (War — <strong>unilateral declaration</strong> via <code>diplomacy_war</code>).</li>
              <li><strong>Declaring War</strong>: Forbidden against co-members of the same International Organization. Breaks any Alliance/NAP immediately, broadcasts server-wide with war horn, and triggers the Organization's Mutual Defense Pact (auto-rally alert on defender capital + alliance war propagation).</li>
              <li><strong>Peace</strong>: Restored to neutral via <code>table_diplomacy</code> (no fixed war/peace cooldown).</li>
              <li><strong>Nation Merger</strong>: Available exclusively between two <strong>allied leaders</strong>. Accepting absorbs the entire nation (capital turns into a <code>town</code> sub-city, all sub-cities, members, NPC citizens transfer to proposer; absorbed nation leaves its Organization).</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>4 Statuts diplomatiques</strong> : <code>ally</code> (bilateral ou meme Organisation — coupe le tir allie PvP, bleu sur la carte), <code>nap</code> (PNA bilateral), <code>neutral</code> (defaut), <code>enemy</code> (Guerre — <strong>declaration unilaterale</strong> via <code>diplomacy_war</code>).</li>
              <li><strong>Declarer la guerre</strong> : Interdit entre co-membres d'une meme Organisation. Rompt Alliance/PNA, sonne le cor de guerre sur tout le serveur et declenche le Pacte de Defense Mutuelle (alerte ralliement sur capitale + propagation d'alliance).</li>
              <li><strong>Paix</strong> : retour au statut neutre via <code>table_diplomacy</code> (aucun cooldown fixe).</li>
              <li><strong>Fusion de nations</strong> : Reservee aux <strong>dirigeants de deux nations alliees</strong>. La nation acceptante est absorbee (capitale -> sous-ville <code>town</code>, transfert des sous-villes, membres et PNJ).</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "International Organizations (Levels 1-5 & World Council)", fr: "Organisations Internationales (Niv. 1-5 & Conseil Mondial)" },
        html: {
          en: `
            <p>Multi-nation coalitions are powered entirely by <strong>International Organizations</strong> (there is no separate vassal/federation mechanic).</p>
            <ul>
              <li><strong>Creation</strong>: Requires sovereign perm <code>org_membership_manage</code>, placing an <strong>Organization Banner</strong> (<code>jn:org_banner</code>: <code>Stick + Gold Ingot + Wool</code>) on a fence/wall/flagpole in the Overworld (= Official HQ with free teleport). Name: 3–32 chars; Tag: 2–5 alphanumeric chars; Doctrine: <em>Peace Council</em>, <em>Military Alliance</em>, or <em>Global Coalition</em>.</li>
              <li><strong>Founding Cost</strong>: <strong>250 coins</strong> (50% = 125 coins seeds the Alliance Fund; grants +50 Nation XP). Optional Entry Fee: <code>0–200</code> coins (90% Alliance Fund, 10% Secretary-General's nation).</li>
              <li><strong>Diplomatic Weight (1–5 Votes)</strong>: <code>1</code> (base) + <code>1</code> (Secretary-General) + <code>1 per 250 coins contributed</code> (max +3 from dues), capped at <strong>5 votes</strong>. Secretary-General can issue Alliance Fund grants (25–500 coins).</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Org Level</th><th>Upgrade Cost</th><th>Min Members</th><th>Unlocked Coalition Powers</th></tr></thead>
              <tbody>
                <tr><td><strong>1</strong></td><td>0</td><td>1</td><td>Alliance Fund, Official HQ (free TP), Mutual Anti-Friendly-Fire, Mutual Defense Pact</td></tr>
                <tr><td><strong>2</strong></td><td><strong>200 coins</strong></td><td>1</td><td><strong>Strategic Radar</strong> (online member coords + intruder alerts every 30s) &amp; <strong>Blue Helmets</strong> (total mutual PvP immunity)</td></tr>
                <tr><td><strong>3</strong></td><td><strong>500 coins</strong></td><td>2</td><td><strong>Reinforcement Teleportation</strong> to allied <code>[SOS]</code> Rally Points (<code>org_military_ops</code>)</td></tr>
                <tr><td><strong>4</strong></td><td><strong>1,000 coins</strong></td><td>2</td><td><strong>World Council</strong>, Binding International Resolutions &amp; Secretary-General <strong>Veto Power</strong></td></tr>
                <tr><td><strong>5</strong></td><td><strong>2,000 coins</strong></td><td>3</td><td><strong>Prestige</strong>: <strong>+10 Mood/day</strong> for all member nations &amp; <strong>+50 XP</strong> to Sec-Gen per resolution enacted</td></tr>
              </tbody>
            </table></div>
            <h3>3 World Council Resolutions (24h Weighted Vote, 3-Day Effect)</h3>
            <ol>
              <li><strong>Diplomatic Embargo</strong> (against non-member, 3 in-game days): Bans land purchases with all Organization members &amp; inflicts immediate <strong>-10 Mood</strong> on target.</li>
              <li><strong>Demilitarized Zone / Forced Truce</strong> (3 in-game days): Blocks all battle/siege declarations against target nation.</li>
              <li><strong>Humanitarian Aid Convoy</strong> (costs 100 coins from Alliance Fund): Grants target <strong>+100 coins</strong>, <strong>+100 food</strong>, and <strong>+15 Mood</strong>.</li>
            </ol>
          `,
          fr: `
            <p>Toutes les coalitions reposent sur les <strong>Organisations Internationales</strong> (pas de systeme separe de vassaux/federations).</p>
            <ul>
              <li><strong>Creation</strong> : Perm souveraine <code>org_membership_manage</code>, poser une <strong>Banniere d'Organisation</strong> (<code>jn:org_banner</code>) sur un mat/cloture Overworld (= Siege Officiel avec TP gratuit). Nom 3-32 car., Tag 2-5 car., 3 Doctrines (<em>Conseil de Paix</em>, <em>Alliance Militaire</em>, <em>Coalition Globale</em>).</li>
              <li><strong>Cout</strong> : <strong>250 pieces</strong> (50% = 125 pieces alimentent la Caisse d'Alliance ; +50 XP Nation). Frais d'adhesion : <code>0-200</code> pieces (90% Caisse, 10% Secretaire General).</li>
              <li><strong>Poids Diplomatique (1-5 Voix)</strong> : <code>1</code> (base) + <code>1</code> (Secretaire General) + <code>1 par 250 pieces cotisees</code> (max +3), plafond <strong>5 voix</strong>. Subventions possibles (25-500 pieces).</li>
            </ul>
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Niv.</th><th>Cout Caisse</th><th>Min Nations</th><th>Pouvoirs debloques</th></tr></thead>
              <tbody>
                <tr><td><strong>1</strong></td><td>0</td><td>1</td><td>Caisse d'Alliance, Siege QG (TP gratuit), Anti-Tir Allie, Pacte de Defense Mutuelle</td></tr>
                <tr><td><strong>2</strong></td><td><strong>200 pieces</strong></td><td>1</td><td><strong>Radar Strategique</strong> (positions allies + alerte intrusion 30s) &amp; <strong>Casques Bleus</strong> (immunite PvP totale)</td></tr>
                <tr><td><strong>3</strong></td><td><strong>500 pieces</strong></td><td>2</td><td><strong>Teleportation de Renforts</strong> vers Points de Ralliement <code>[SOS]</code> allies (<code>org_military_ops</code>)</td></tr>
                <tr><td><strong>4</strong></td><td><strong>1 000 pieces</strong></td><td>2</td><td><strong>Conseil Mondial</strong>, Resolutions Internationales &amp; <strong>Droit de Veto</strong> du Secretaire General</td></tr>
                <tr><td><strong>5</strong></td><td><strong>2 000 pieces</strong></td><td>3</td><td><strong>Prestige</strong> : <strong>+10 Moral/jour</strong> a tous les membres &amp; <strong>+50 XP</strong> au Sec-Gen par resolution promulguee</td></tr>
              </tbody>
            </table></div>
            <h3>3 Resolutions du Conseil Mondial (Scrutin 24h reelles, effet 3 jours)</h3>
            <ol>
              <li><strong>Embargo Diplomatique</strong> (cible non-membre, 3 jours) : interdit les achats de terres avec les membres et retire <strong>-10 Moral</strong> a la cible.</li>
              <li><strong>Zone Demilitarisee / Treve Forcee</strong> (3 jours) : interdit toute declaration de bataille contre la nation ciblee.</li>
              <li><strong>Convoi d'Aide Humanitaire</strong> (100 pieces de la Caisse) : verse <strong>+100 pieces</strong>, <strong>+100 vivres</strong> et <strong>+15 Moral</strong> a la cible.</li>
            </ol>
          `,
        },
      },
    ],
  },
  {
    id: "elections-commands",
    group: "governance",
    kicker: { en: "6. Elections, Travel & Chat", fr: "6. Elections, Voyages & Chat" },
    title: {
      en: "Elections (Ballot Box), Nation TP, Map Tools & Commands",
      fr: "Elections (Urne), Teleportation, Globe/Atlas & Commandes",
    },
    subtitle: {
      en: "Democratic succession via Ballot Box, /jn:tp cinematic GTP travel & Combat Tag, Chat channels, and Server World Config rules.",
      fr: "Scrutins a l'Urne, teleportation cinematique /jn:tp & Combat Tag, canaux de chat, Globe/Atlas et reglages serveur.",
    },
    featuredBlocks: ["ballot_box", "globe", "mayor_table"],
    featuredItems: ["jn:atlas", "jn:coin"],
    searchKeywords:
      "election ballot box plurality runoff lottery vote leader transfer /jn:tp gtp combat tag 15s globe atlas /jn:chat /jn:nation /jn:org /jn:leave world config",
    sections: [
      {
        heading: { en: "Elections & Ballot Box Mechanics", fr: "Mecanique des Elections & Urne" },
        html: {
          en: `
            <ul>
              <li><strong>Activation</strong>: Enable during Nation Creation or later at the Leader Table (<code>elections_manage</code>). <strong>Irreversible</strong>: once enabled, election cycles run back-to-back forever and cannot be disabled. Term length &amp; voting method can only be modified <strong>once</strong> afterwards.</li>
              <li><strong>Cycle Durations</strong>: <strong>2, 4, 8, or 12 real-time weeks</strong> (default: 4 weeks), checked every 60s.</li>
              <li><strong>3 Voting Modes</strong>:
                <ol>
                  <li><strong>Plurality (1-Round)</strong>: Most votes wins immediately.</li>
                  <li><strong>Two-Round Runoff</strong>: If nobody strictly exceeds <code>50%</code> in Round 1 (with &gt;2 candidates), top 2 advance to a Runoff lasting 1/4 of the cycle (minimum <strong>24 real hours</strong>).</li>
                  <li><strong>Weighted Lottery</strong>: Each cast ballot acts as 1 lottery ticket.</li>
                </ol>
              </li>
              <li><strong>Voting at the Ballot Box</strong> (<code>jn:ballot_box</code> — craft: <code>8x Oak Planks + 1x Paper</code>, perm <code>election_vote</code>): All registered nation members are auto-candidates in Round 1. Every member gets 1 vote and can change their vote freely until the cycle ends. If <strong>0 votes</strong> are cast, the incumbent stays leader; otherwise leadership, crown/flags, and roles transfer automatically (even if offline, synced on join).</li>
              <li><strong>Manual Handover / Leaving</strong>: Leaders can always transfer leadership manually. Members can leave via Leader Table or <code>/jn:leave</code>.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Activation</strong> : Des la creation ou via la Table du Maire (<code>elections_manage</code>). <strong>Irreversible</strong> : une fois activees, les elections s'enchainent sans interruption. Duree et scrutin ne sont modifiables <strong>qu'une seule fois</strong> apres activation.</li>
              <li><strong>Duree des mandats</strong> : <strong>2, 4, 8 ou 12 semaines reelles</strong> (defaut 4 semaines), verifie toutes les 60s.</li>
              <li><strong>3 Modes de scrutin</strong> :
                <ol>
                  <li><strong>Majoritaire a 1 tour</strong> : le plus de voix gagne.</li>
                  <li><strong>Majoritaire a 2 tours</strong> : si personne ne depasse strictement <code>50%</code> (&gt;2 candidats), second tour entre les 2 premiers sur 1/4 du cycle (min <strong>24h reelles</strong>).</li>
                  <li><strong>Tirage au sort pondere</strong> : chaque bulletin vaut 1 billet.</li>
                </ol>
              </li>
              <li><strong>Voter a l'Urne</strong> (<code>jn:ballot_box</code> — craft : <code>8x Planches de chene + 1x Papier</code>, perm <code>election_vote</code>) : tous les membres sont candidats au 1er tour. Chacun a 1 voix modifiable jusqu'a la cloture. A <strong>0 vote</strong>, le dirigeant sortant conserve le pouvoir.</li>
              <li><strong>Passation & Depart</strong> : transfert manuel possible par le dirigeant ; depart via Table du Maire ou <code>/jn:leave</code>.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Teleportation (/jn:tp), Combat Tag & GTP Cinematic Travel", fr: "Teleportation (/jn:tp), Combat Tag & Moteur GTP" },
        html: {
          en: `
            <ul>
              <li><strong>Command</strong>: <code>/jn:tp</code> (no cheats required). Teleports safely near your nation's <strong>Capital Flag</strong> in the Overworld.</li>
              <li><strong>Cost & Min Distance</strong>: Consumes <strong>5 physical coins</strong> (<code>jn:coin</code>) from inventory (refunded if TP fails). Blocked if already within <strong>6 blocks</strong> of the capital flag.</li>
              <li><strong>15-Second Combat Tag</strong>: Dealing or taking PvP damage, taking hostile PvE damage, or hitting hostile mobs/marauders applies a <strong>15-second Combat Tag</strong> blocking <code>/jn:tp</code>. Cleared immediately on death. (Peaceful animals & NPC citizens do not trigger it.)</li>
              <li><strong>Grand Teleport (GTP) Presets</strong>: Auto-selected by distance: <code>&lt;15m</code> = Instant, <code>15–99m</code> = Fast, <code>100–499m</code> = Classic, <code>500m+</code> = Cinematic sky ascent/fade.</li>
            </ul>
          `,
          fr: `
            <ul>
              <li><strong>Commande</strong> : <code>/jn:tp</code> (sans triche). Teleporte vers le <strong>drapeau de votre Capitale</strong> en Overworld.</li>
              <li><strong>Cout & Distance min</strong> : <strong>5 pieces physiques</strong> (<code>jn:coin</code>), remboursees si echec. Bloque si deja a moins de <strong>6 blocs</strong> du drapeau.</li>
              <li><strong>Combat Tag (15 secondes)</strong> : infliger ou subir des degats PvP ou hostiles PvE/maraudeurs bloque <code>/jn:tp</code> pendant <strong>15 secondes</strong> (efface a la mort). Animaux paisibles et citoyens ne declenchent pas le tag.</li>
              <li><strong>Pre-reglages GTP automatiques</strong> : <code>&lt;15m</code> instantane, <code>15-99m</code> rapide, <code>100-499m</code> classique, <code>500m+</code> cinematique celeste.</li>
            </ul>
          `,
        },
      },
      {
        heading: { en: "Slash Commands, Chat Channels & World Rules", fr: "Commandes Slash, Canaux de Chat & Regles Monde" },
        html: {
          en: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Command</th><th>Cheats</th><th>Function</th></tr></thead>
              <tbody>
                <tr><td><code>/jn:chat</code></td><td>No</td><td>Cycles active chat channel: Global -&gt; Nation -&gt; Organization -&gt; Global</td></tr>
                <tr><td><code>/jn:chat &lt;global|nation|org&gt; [msg]</code></td><td>No</td><td>Switch channel or send a one-off message in that channel</td></tr>
                <tr><td><code>/jn:global [msg]</code></td><td>No</td><td>Shortcut to Global chat (auto-prefixes <code>[ORG] [NATION]</code>)</td></tr>
                <tr><td><code>/jn:nation [msg]</code></td><td>No</td><td>Shortcut to Nation-only chat (yellow text across capital &amp; sub-cities)</td></tr>
                <tr><td><code>/jn:org [msg]</code></td><td>No</td><td>Shortcut to International Organization chat (aqua text)</td></tr>
                <tr><td><code>/jn:tp</code></td><td>No</td><td>Teleport to Capital Flag (costs 5 <code>jn:coin</code>)</td></tr>
                <tr><td><code>/jn:leave</code></td><td>No</td><td>Leave your current nation</td></tr>
              </tbody>
            </table></div>
            <h3>Server World Config Rules (<code>jn:config</code> for World Owners)</h3>
            <p>World hosts can tune: <strong>Marauder Raids</strong> (ON/OFF, difficulty <code>easy x0.5 / normal x1.0 / hard x1.5</code>), <strong>Battle Territory Capture</strong> (ON/OFF), <strong>Food Consumption</strong> (<code>off / half / normal / double</code>), <strong>Construction Materials Required</strong> (ON/OFF) &amp; <strong>Speed</strong> (<code>instant / fast / normal / slow</code>), <strong>Mail Delivery Speed</strong> (<code>instant / quick 1–5m / normal 30–108m</code>), and <strong>Bounties</strong> (ON/OFF, rotation <code>30/60/120/180m</code>, max active quests <code>2/3/4/5</code>).</p>
          `,
          fr: `
            <div class="table-wrap"><table class="wiki-table">
              <thead><tr><th>Commande</th><th>Triche</th><th>Role</th></tr></thead>
              <tbody>
                <tr><td><code>/jn:chat</code></td><td>Non</td><td>Fait tourner le canal actif : Global -&gt; Nation -&gt; Organisation</td></tr>
                <tr><td><code>/jn:chat &lt;global|nation|org&gt; [msg]</code></td><td>Non</td><td>Change de canal ou envoie un message ponctuel</td></tr>
                <tr><td><code>/jn:global [msg]</code></td><td>Non</td><td>Raccourci canal Global (prefixes <code>[ORG] [NATION]</code>)</td></tr>
                <tr><td><code>/jn:nation [msg]</code></td><td>Non</td><td>Raccourci canal Nation (jaune, capitale + sous-villes)</td></tr>
                <tr><td><code>/jn:org [msg]</code></td><td>Non</td><td>Raccourci canal Organisation (bleu ciel)</td></tr>
                <tr><td><code>/jn:tp</code></td><td>Non</td><td>Teleportation a la Capitale (5 <code>jn:coin</code>)</td></tr>
                <tr><td><code>/jn:leave</code></td><td>Non</td><td>Quitter sa nation</td></tr>
              </tbody>
            </table></div>
            <h3>Reglages Monde du Serveur (<code>jn:config</code>)</h3>
            <p>Parametres configurables par l'hote : <strong>Raids</strong> (ON/OFF, difficulte <code>easy x0.5 / normal x1.0 / hard x1.5</code>), <strong>Capture en bataille</strong> (ON/OFF), <strong>Consommation nourriture</strong> (<code>off / half / normal / double</code>), <strong>Materiaux & Vitesse de construction</strong> (<code>instant / fast / normal / slow</code>), <strong>Vitesse du courrier</strong> (<code>instant / quick / normal</code>) et <strong>Primes/Quetes</strong> (rotation <code>30/60/120/180 min</code>, max quetes <code>2/3/4/5</code>).</p>
          `,
        },
      },
    ],
  },
);

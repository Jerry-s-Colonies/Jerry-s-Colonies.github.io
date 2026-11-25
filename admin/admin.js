(function () {
  "use strict";

  const STORAGE_TOKEN = "frontier_web_jwt";
  const STORAGE_RELAY = "frontier_web_relay_url";
  const STORAGE_THEME = "frontier_web_theme";
  const STORAGE_LANG = "frontier_web_lang";

  const I18N = {
    fr: {
      "app.title": "The Frontier - Panel Admin Web",
      "ui.theme_btn": "Theme",
      "ui.theme_title": "Theme Sombre / Clair",
      "ui.lang_title": "Changer de langue (FR / EN)",
      "ui.apply": "Appliquer",
      "ui.logout": "Quitter",
      "ui.refresh": "Actualiser",
      "ui.send": "Envoyer",
      "ui.save": "Sauver",
      "ui.save_settings": "Enregistrer Parametres",
      "ui.close": "Fermer",
      "role.0": "Joueur",
      "role.1": "Modo",
      "role.2": "Admin",
      "role.3": "Server Manager",
      "role.4": "Owner",
      "login.badge": "THE FRONTIER STAFF",
      "login.title": "PANEL ADMIN WEB",
      "login.subtitle": "Moderation et gestion serveur en temps reel (Modo / Admin / Manager / Owner)",
      "login.hint_before": "Definissez votre mot de passe directement en jeu via ",
      "login.hint_path": "/frontier:menu -> Admin -> Panel Web",
      "login.hint_after": ". Aucun secret n'est enregistre sur ce site.",
      "login.user_label": "Pseudo Minecraft",
      "login.user_ph": "Votre gamertag exact",
      "login.pass_label": "Mot de passe Admin (defini en jeu)",
      "login.pass_ph": "Mot de passe Web",
      "login.submit": "Se connecter",
      "login.api_summary": "Configuration connexion API / Mode Local",
      "login.relay_label": "URL du Relais HTTPS (vide = meme origine / mode local)",
      "login.local_mode_label": "Mode du Lanceur Local PC :",
      "login.mode_standalone": "Autonome Local (BDS local)",
      "login.mode_relay": "Proxy Relais Cloudflare (The Frontier live)",
      "login.failed": "Connexion refusee.",
      "sidebar.subtitle": "WebAdmin OreUI",
      "topbar.local_badge": "Lanceur Local PC",
      "status.online": "Serveur en ligne",
      "status.offline": "Serveur hors ligne / En attente",
      "status.tps": "TPS",
      "status.players": "Joueurs",
      "status.uptime": "Uptime: {val}",
      "status.sync": "Dernier sync: {val}",
      "status.sync_wait": "En attente de synchronisation...",
      "nav.overview": "Vue d'ensemble",
      "nav.analytics": "Statistiques & Retention",
      "nav.players": "Joueurs & Moderation",
      "nav.chat": "Chat & Annonces",
      "nav.anticheat": "Anti-Cheat & PacketGuard",
      "nav.progression": "Progression & Codes",
      "nav.staff": "Staff & Acces Web",
      "nav.console": "Console & Audit",
      "ov.online": "Joueurs en ligne",
      "ov.known": "Joueurs connus",
      "ov.tps": "TPS Serveur",
      "ov.sanctions": "Bannis / Mutes / Geles",
      "ov.suspects": "Suspects AC en ligne",
      "ov.alerts": "Alertes PacketGuard / Sec",
      "ov.recent_alerts": "Dernieres Alertes Securite",
      "ov.recent_audits": "Dernieres Actions Audit",
      "ov.empty_alerts": "Aucune alerte securite recente.",
      "ov.empty_audits": "Aucune entree d'audit recente.",
      "an.heading": "Analytics Serveur, Retention & Economie",
      "an.waiting": "En attente des statistiques serveur (redemarrez le serveur si la mise a jour vient d'etre installee).",
      "an.updated": "Mise a jour stats: {date} | Pic 7j: {peak} joueurs",
      "an.export_json": "Export Stats JSON",
      "an.export_csv": "Export Stats CSV",
      "an.kpi.wau": "Visiteurs hebdomadaires (7j)",
      "an.kpi.wau_tip": "Joueurs uniques actifs sur les 7 derniers jours",
      "an.kpi.wau_sub": "Aujourd'hui (DAU): {dau} | Mois (MAU): {mau}",
      "an.kpi.regulars": "Joueurs reguliers (>= 3j/7j)",
      "an.kpi.regulars_tip": "Joueurs connectes au moins 3 jours distincts sur 7 jours",
      "an.kpi.regulars_sub": "Stickiness (DAU/WAU): {stick}% | Moy. 7j: {avg} en ligne",
      "an.kpi.new7": "Nouveaux joueurs (7j)",
      "an.kpi.new7_tip": "Premieres connexions enregistrees sur les 7 derniers jours",
      "an.kpi.new7_sub": "Total connus: {known} | Discord lies: {disc} ({discPct}%)",
      "an.kpi.retention": "Fidelisation nouveaux (J+7)",
      "an.kpi.retention_tip": "Part des nouveaux joueurs revenus la semaine suivante",
      "an.kpi.retention_sub": "Retention J+1: {d1} | J+30: {d30}",
      "an.kpi.playtime": "Temps de jeu cumule",
      "an.kpi.playtime_tip": "Heures totales tracees et duree moyenne par session",
      "an.kpi.playtime_sub1": "Moyenne / joueur: {avg}h",
      "an.kpi.playtime_sub2": "Session moyenne: {sess} min",
      "an.kpi.monetization": "Monetisation Tebex",
      "an.kpi.monetization_tip": "Acheteurs uniques, taux de conversion et Jetons Tebex livres",
      "an.kpi.mon_sub1": "Acheteurs: {buyers} | Commandes: {orders}",
      "an.kpi.mon_sub2": "Jetons Tebex: {tok} (ARPPU: {arppu})",
      "an.delta.vs_prev": "{arrow} {val}% depuis la semaine derniere",
      "an.delta.no_prev": "Premiere semaine de mesure",
      "an.chart.daily_title": "Activite quotidienne (14 jours UTC)",
      "an.chart.daily_legend": "DAU / Nouveaux",
      "an.chart.daily_tip": "{day} : {dau} actifs, {nw} nouveaux",
      "an.chart.hourly_title": "Heures de pointe (24h UTC, moy. 7j)",
      "an.chart.peak_badge": "Pic 7j: {peak} en ligne",
      "an.chart.hourly_tip": "{hour}h UTC : moy {avg} | pic {peak} | TPS {tps}",
      "an.jobs.title": "Popularite des Metiers (Jobs & Skills)",
      "an.jobs.adoption": "Adoption: {pct}% ({withJob} avec metier)",
      "an.jobs.row_meta": "{players} joueurs ({online} en ligne) | Moy. {avg}/{max} comp. ({comp}%)",
      "an.job.miner": "Mineur",
      "an.job.lumberjack": "Bucheron",
      "an.job.blacksmith": "Forgeron",
      "an.job.rancher": "Eleveur",
      "an.job.farmer": "Fermier",
      "an.job.fisher": "Pecheur",
      "an.job.hunter": "Chasseur",
      "an.job.knight": "Chevalier",
      "an.job.none": "Aucun metier",
      "an.engagement.title": "Engagement Temps de jeu & FrontierPass",
      "an.playtime_dist_title": "Distribution du temps de jeu",
      "an.pass_dist_title": "Paliers FrontierPass",
      "an.eco.title": "Sante Economique & Equilibre",
      "an.eco.total_coins": "Masse monetaire (Coins)",
      "an.eco.avg_median_coins": "Moyenne / Mediane Coins",
      "an.eco.top10_share": "Part du Top 10% richesses",
      "an.eco.total_tokens": "Jetons en circulation",
      "an.eco.avg_pass": "Palier Pass moyen",
      "an.eco.quests_done": "Quetes J / H completees",
      "an.eco.code_uses": "Codes cadeaux utilises",
      "an.eco.discord_links": "Comptes Discord lies",
      "an.ranks.title": "Repartition des Rangs & Discord",
      "an.top.title": "Top 15 Joueurs les plus actifs",
      "an.top.col_player": "Joueur",
      "an.top.col_state": "Etat",
      "an.top.col_playtime": "Temps de jeu",
      "an.top.col_days": "Jours (30j)",
      "an.top.col_sessions": "Sessions",
      "an.top.col_job": "Metier",
      "an.top.col_pass": "Pass / Rang",
      "an.top.col_eco": "Coins / Jetons",
      "an.top.empty": "Aucune donnee joueur enregistree.",
      "modal.playtime_label": "Temps de jeu :",
      "modal.job_label": "Metier :",
      "modal.days30_label": "Jours actifs (30j) :",
      "modal.tebex_label": "Tebex :",
      "players.filter.online": "En ligne",
      "players.filter.all": "Tous",
      "players.filter.sanctioned": "Sanctionnes",
      "players.filter.banned": "Bannis",
      "players.search_ph": "Rechercher un pseudo...",
      "players.col.player": "Joueur",
      "players.col.state": "Etat",
      "players.col.role": "Role",
      "players.col.status": "Statut",
      "players.col.vl": "VL AC",
      "players.col.actions": "Actions",
      "players.online_badge": "En ligne",
      "players.offline_badge": "Hors ligne",
      "players.banned_badge": "Banni",
      "players.good_badge": "Good",
      "players.freeze_badge": "Freeze",
      "players.mute_badge": "Mute",
      "players.manage": "Gerer",
      "players.empty": "Aucun joueur trouve.",
      "modal.status_label": "Statut :",
      "modal.reason": "Raison",
      "modal.expires": "Expire",
      "modal.online_label": "En ligne :",
      "modal.yes": "Oui",
      "modal.no_seen": "Non (Vu: {date})",
      "modal.freeze_label": "Freeze :",
      "modal.active": "ACTIF",
      "modal.inactive": "Inactif",
      "modal.mute_label": "Mute :",
      "modal.permanent": "Permanent",
      "modal.vl_label": "VL AC :",
      "modal.pass_label": "Pass :",
      "modal.tier": "Palier {tier} ({xp} XP)",
      "modal.rank_label": "Rang :",
      "modal.vault_label": "Coffre :",
      "modal.coins": "Coins",
      "modal.tokens_label": "Jetons :",
      "modal.self_notice": "Vous consultez votre propre fiche.",
      "modal.hierarchy_notice": "Protection hierarchique : vous ne pouvez pas sanctionner un rang egal ou superieur.",
      "modal.btn.unfreeze": "Degeler",
      "modal.btn.freeze": "Geler (Freeze)",
      "modal.btn.unmute": "Unmute",
      "modal.btn.mute": "Mute",
      "modal.mute.5m": "Mute 5m",
      "modal.mute.15m": "15m",
      "modal.mute.1h": "1h",
      "modal.mute.24h": "24h",
      "modal.mute_ph": "Raison mute",
      "modal.kick_ph": "Raison kick",
      "modal.btn.kick": "Kick",
      "modal.btn.set_status": "Appliquer Statut",
      "modal.btn.unban": "Debannir",
      "modal.ban.perm": "Ban Permanent",
      "modal.ban.1h": "Tempban 1h",
      "modal.ban.6h": "Tempban 6h",
      "modal.ban.24h": "Tempban 24h",
      "modal.ban.7d": "Tempban 7 jours",
      "modal.ban.30d": "Tempban 30 jours",
      "modal.ban_ph": "Raison du ban",
      "modal.btn.ban": "Bannir",
      "modal.btn.reset_vl": "Reset VL AC",
      "modal.btn.tp": "Teleporter",
      "modal.inv_heading": "Inventaire en Direct / Snapshot",
      "modal.inv_give": "Donner",
      "modal.inv_clear": "Vider Tout",
      "modal.eq.head": "Casque",
      "modal.eq.chest": "Plastron",
      "modal.eq.legs": "Jambieres",
      "modal.eq.feet": "Bottes",
      "modal.eq.offhand": "Main G",
      "modal.slot_title": "{item} (clic = retirer si Admin+)",
      "modal.last_snap": "Dernier snapshot sauvegarde: {date}",
      "modal.no_snap": "Aucun inventaire sauvegarde.",
      "modal.confirm_clear_inv": "Vider tout l'inventaire et equipement de ce joueur ?",
      "modal.confirm_rm_slot": "Supprimer le contenu du slot #{slot} ?",
      "chat.heading": "Chat en Direct (Jeu <-> Web)",
      "chat.input_ph": "Envoyer un message en jeu...",
      "chat.empty": "Aucun message chat capture depuis le demarrage.",
      "broadcast.heading": "Annonce Globale (Admin+)",
      "broadcast.header_label": "Titre ecran",
      "broadcast.msg_label": "Message",
      "broadcast.msg_ph": "Message diffuse en titre + chat...",
      "broadcast.submit": "Diffuser l'annonce",
      "ac.suspects_heading": "Suspects en ligne & Alertes PacketGuard",
      "ac.no_suspects": "Aucun suspect en ligne",
      "ac.empty_logs": "Journal Anti-Cheat vide.",
      "ac.settings_heading": "Parametres Anti-Cheat & Maintenance (Manager+)",
      "ac.cfg.enabled": "Activer Frontier Anti-Cheat",
      "ac.cfg.alerts": "Diffuser les alertes au staff en ligne",
      "ac.cfg.exempt": "Exempter le staff",
      "ac.cfg.maps": "Purger cartes de localisation",
      "ac.cfg.shulkers": "Purger Shulker & EnderChest",
      "ac.cfg.hidetag": "Masquer pseudos par distance",
      "ac.cfg.dist_label": "Distance max pseudos (6..48)",
      "ac.maint.reset_vl": "Reset Tous les VL",
      "ac.maint.clear_logs": "Vider Logs AC",
      "ac.maint.defaults": "Defauts 15 Modules",
      "ac.confirm_maint": "Confirmer operation Anti-Cheat: {op} ?",
      "ac.modules_heading": "Modules Anti-Cheat (15)",
      "ac.col.module": "Module",
      "ac.col.category": "Categorie",
      "ac.col.enabled": "Actif",
      "ac.col.action": "Action",
      "ac.col.max_vl": "Max VL",
      "ac.col.save": "Enregistrer",
      "prog.heading": "Progression & Economie Joueur (Manager+)",
      "prog.target_label": "Joueur en ligne",
      "prog.no_online": "Aucun joueur en ligne",
      "prog.target_opt": "{name} (Palier {tier}, {coins} Coins)",
      "prog.btn_xp": "Ajouter XP Pass",
      "prog.btn_rank": "Appliquer Rang",
      "prog.coins_ph": "Coins",
      "prog.tokens_ph": "Jetons",
      "prog.btn_eco": "Definir Solde",
      "prog.btn_key": "Donner Cle Lootbox",
      "prog.btn_reset_pass": "Reset FrontierPass",
      "prog.confirm_reset_pass": "Reinitialiser la progression FrontierPass de ce joueur ?",
      "codes.heading": "Codes Cadeaux",
      "codes.ph.code": "CODE (ex: FRONTIER)",
      "codes.ph.max_uses": "Max uses (0=inf)",
      "codes.ph.tokens": "Jetons",
      "codes.ph.coins": "Coins",
      "codes.ph.xp": "XP",
      "codes.ph.item": "Item (ex: minecraft:diamond)",
      "codes.ph.item_count": "Qte Item",
      "codes.no_rank": "Aucun rang",
      "codes.submit": "Creer / Mettre a jour Code",
      "codes.col.code": "Code",
      "codes.col.uses": "Uses",
      "codes.col.rewards": "Recompenses",
      "codes.col.actions": "Actions",
      "codes.disable": "Desactiver",
      "codes.enable": "Activer",
      "codes.del": "Suppr",
      "codes.empty": "Aucun code cadeau cree.",
      "codes.confirm_del": "Supprimer ce code cadeau ?",
      "staff.heading": "Gestion Staff & Acces Panel Web",
      "staff.col.member": "Membre",
      "staff.col.role": "Role",
      "staff.col.web_access": "Acces Web",
      "staff.col.actions": "Actions",
      "staff.ws.revoked": "REVOQUE",
      "staff.ws.active": "ACTIF (v{v})",
      "staff.ws.unset": "MDP NON DEFINI",
      "staff.btn.restore": "Reautoriser",
      "staff.btn.revoke": "Revoquer Web",
      "staff.btn.kill": "Couper Session",
      "staff.locked": "Verrouille",
      "staff.empty": "Aucun membre staff enregistre.",
      "staff.prompt_revoke": "Raison de revocation acces Web :",
      "staff.prompt_revoke_default": "Securite / Fin de mission",
      "staff.promote_heading": "Nommer un Role Staff & Protections",
      "staff.role.player_revoke": "Joueur (Retirer Staff & Revoquer Web)",
      "staff.role.modo": "Modo",
      "staff.role.admin": "Admin",
      "staff.role.manager": "Server Manager (Owner uniquement)",
      "staff.promote_submit": "Appliquer Role Staff",
      "prot.auto_deop": "Auto-Deop protect",
      "prot.restrictions": "Restrictions (Bundles / EnderChest / Perles)",
      "prot.save": "Sauver Protections",
      "prot.deop_all": "Executer Deop-All",
      "prot.confirm_deop": "Deop tous les joueurs hors admin/owner/manager ?",
      "console.heading": "Commandes Rapides & Console",
      "quick.day": "Jour",
      "quick.night": "Nuit",
      "quick.clear": "Meteo Claire",
      "quick.rain": "Pluie",
      "quick.clearlag": "ClearLag",
      "console.cmd_label": "Console Serveur Libre (Owner uniquement)",
      "console.cmd_ph": "Ex: say Maintenance dans 5 minutes",
      "console.execute": "Executer",
      "audit.heading": "Journal d'Audit Complet",
      "audit.export_json": "Export JSON",
      "audit.export_csv": "Export CSV",
      "audit.empty": "Journal d'audit vide.",
      "toast.action_sent": "Action \"{action}\" envoyee au serveur...",
      "toast.error": "Erreur: {msg}",
      "toast.server_msg": "[Serveur] {msg}",
      "toast.export_err": "Export impossible: {msg}",
      "toast.local_mode": "Lanceur local bascule en mode {mode}.",
      "toast.local_err": "Erreur config locale: {msg}",
      "err.missing_relay": "URL du Relais HTTPS non configuree (ouvrez Configuration connexion API).",
      "err.session_expired": "Session revoquee ou expiree.",
      "err.code.UNAUTHORIZED": "Authentification requise.",
      "err.code.SESSION_EXPIRED": "Session expiree ou invalidee.",
      "err.code.REVOKED": "Acces Web revoque par un Manager/Owner.",
      "err.code.PASSWORD_NOT_SET": "Definissez d'abord votre mot de passe Web en jeu (/frontier:menu -> Admin -> Panel Web).",
      "err.code.RATE_LIMITED": "Trop de tentatives echouees. Reessayez plus tard.",
      "err.code.INVALID_CREDENTIALS": "Pseudo Minecraft ou mot de passe Web invalide.",
      "err.code.NO_PERMISSION": "Permission staff insuffisante pour le Panel Web.",
    },
    en: {
      "app.title": "The Frontier - Web Admin Panel",
      "ui.theme_btn": "Theme",
      "ui.theme_title": "Dark / Light Theme",
      "ui.lang_title": "Switch Language (FR / EN)",
      "ui.apply": "Apply",
      "ui.logout": "Log out",
      "ui.refresh": "Refresh",
      "ui.send": "Send",
      "ui.save": "Save",
      "ui.save_settings": "Save Settings",
      "ui.close": "Close",
      "role.0": "Player",
      "role.1": "Mod",
      "role.2": "Admin",
      "role.3": "Server Manager",
      "role.4": "Owner",
      "login.badge": "THE FRONTIER STAFF",
      "login.title": "WEB ADMIN PANEL",
      "login.subtitle": "Real-time server moderation & management (Mod / Admin / Manager / Owner)",
      "login.hint_before": "Set your Web password directly in-game via ",
      "login.hint_path": "/frontier:menu -> Admin -> Web Panel",
      "login.hint_after": ". No secrets are stored on this website.",
      "login.user_label": "Minecraft Username",
      "login.user_ph": "Your exact gamertag",
      "login.pass_label": "Admin Password (set in-game)",
      "login.pass_ph": "Web password",
      "login.submit": "Sign in",
      "login.api_summary": "API Connection / Local Mode Settings",
      "login.relay_label": "HTTPS Relay URL (empty = same origin / local mode)",
      "login.local_mode_label": "Local PC Launcher Mode:",
      "login.mode_standalone": "Local Standalone (local BDS)",
      "login.mode_relay": "Cloudflare Relay Proxy (The Frontier live)",
      "login.failed": "Login refused.",
      "sidebar.subtitle": "OreUI WebAdmin",
      "topbar.local_badge": "Local PC Launcher",
      "status.online": "Server online",
      "status.offline": "Server offline / Waiting",
      "status.tps": "TPS",
      "status.players": "Players",
      "status.uptime": "Uptime: {val}",
      "status.sync": "Last sync: {val}",
      "status.sync_wait": "Waiting for synchronization...",
      "nav.overview": "Overview",
      "nav.analytics": "Analytics & Retention",
      "nav.players": "Players & Moderation",
      "nav.chat": "Chat & Broadcasts",
      "nav.anticheat": "Anti-Cheat & PacketGuard",
      "nav.progression": "Progression & Codes",
      "nav.staff": "Staff & Web Access",
      "nav.console": "Console & Audit",
      "ov.online": "Online Players",
      "ov.known": "Known Players",
      "ov.tps": "Server TPS",
      "ov.sanctions": "Banned / Muted / Frozen",
      "ov.suspects": "Online AC Suspects",
      "ov.alerts": "PacketGuard / Sec Alerts",
      "ov.recent_alerts": "Recent Security Alerts",
      "ov.recent_audits": "Recent Audit Actions",
      "ov.empty_alerts": "No recent security alerts.",
      "ov.empty_audits": "No recent audit entries.",
      "an.heading": "Server Analytics, Retention & Economy",
      "an.waiting": "Waiting for server analytics snapshot (restart the Bedrock server if the update was just installed).",
      "an.updated": "Stats updated: {date} | 7d Peak: {peak} players",
      "an.export_json": "Export Stats JSON",
      "an.export_csv": "Export Stats CSV",
      "an.kpi.wau": "Weekly Visitors (7d)",
      "an.kpi.wau_tip": "Unique players active during the last 7 days",
      "an.kpi.wau_sub": "Today (DAU): {dau} | Monthly (MAU): {mau}",
      "an.kpi.regulars": "Regular Players (>= 3d/7d)",
      "an.kpi.regulars_tip": "Players connected at least 3 distinct days in the last 7 days",
      "an.kpi.regulars_sub": "Stickiness (DAU/WAU): {stick}% | 7d Avg: {avg} online",
      "an.kpi.new7": "New Players (7d)",
      "an.kpi.new7_tip": "First joins recorded in the last 7 days",
      "an.kpi.new7_sub": "Total known: {known} | Discord linked: {disc} ({discPct}%)",
      "an.kpi.retention": "New Player Retention (D7)",
      "an.kpi.retention_tip": "Share of new players returning in the following week",
      "an.kpi.retention_sub": "D1 Retention: {d1} | D30: {d30}",
      "an.kpi.playtime": "Cumulative Playtime",
      "an.kpi.playtime_tip": "Total tracked hours and average session duration",
      "an.kpi.playtime_sub1": "Avg / player: {avg}h",
      "an.kpi.playtime_sub2": "Avg session: {sess} min",
      "an.kpi.monetization": "Tebex Monetization",
      "an.kpi.monetization_tip": "Unique buyers, conversion rate and Tebex Tokens delivered",
      "an.kpi.mon_sub1": "Buyers: {buyers} | Orders: {orders}",
      "an.kpi.mon_sub2": "Tebex Tokens: {tok} (ARPPU: {arppu})",
      "an.delta.vs_prev": "{arrow} {val}% since last week",
      "an.delta.no_prev": "First measurement week",
      "an.chart.daily_title": "Daily Activity (14 days UTC)",
      "an.chart.daily_legend": "DAU / New",
      "an.chart.daily_tip": "{day}: {dau} active, {nw} new",
      "an.chart.hourly_title": "Peak Hours (24h UTC, 7d avg)",
      "an.chart.peak_badge": "7d Peak: {peak} online",
      "an.chart.hourly_tip": "{hour}h UTC: avg {avg} | peak {peak} | TPS {tps}",
      "an.jobs.title": "Job Popularity (Jobs & Skills)",
      "an.jobs.adoption": "Adoption: {pct}% ({withJob} with job)",
      "an.jobs.row_meta": "{players} players ({online} online) | Avg {avg}/{max} skills ({comp}%)",
      "an.job.miner": "Miner",
      "an.job.lumberjack": "Lumberjack",
      "an.job.blacksmith": "Blacksmith",
      "an.job.rancher": "Rancher",
      "an.job.farmer": "Farmer",
      "an.job.fisher": "Fisher",
      "an.job.hunter": "Hunter",
      "an.job.knight": "Knight",
      "an.job.none": "No job",
      "an.engagement.title": "Playtime Engagement & FrontierPass",
      "an.playtime_dist_title": "Playtime Distribution",
      "an.pass_dist_title": "FrontierPass Tiers",
      "an.eco.title": "Economic Health & Balance",
      "an.eco.total_coins": "Total Money Supply (Coins)",
      "an.eco.avg_median_coins": "Avg / Median Coins",
      "an.eco.top10_share": "Top 10% Wealth Share",
      "an.eco.total_tokens": "Circulating Tokens",
      "an.eco.avg_pass": "Average Pass Tier",
      "an.eco.quests_done": "Daily / Weekly Quests",
      "an.eco.code_uses": "Gift Code Redemptions",
      "an.eco.discord_links": "Linked Discord Accounts",
      "an.ranks.title": "Rank Distribution & Discord",
      "an.top.title": "Top 15 Most Active Players",
      "an.top.col_player": "Player",
      "an.top.col_state": "State",
      "an.top.col_playtime": "Playtime",
      "an.top.col_days": "Days (30d)",
      "an.top.col_sessions": "Sessions",
      "an.top.col_job": "Job",
      "an.top.col_pass": "Pass / Rank",
      "an.top.col_eco": "Coins / Tokens",
      "an.top.empty": "No player telemetry recorded yet.",
      "modal.playtime_label": "Playtime:",
      "modal.job_label": "Job:",
      "modal.days30_label": "Active Days (30d):",
      "modal.tebex_label": "Tebex:",
      "players.filter.online": "Online",
      "players.filter.all": "All",
      "players.filter.sanctioned": "Sanctioned",
      "players.filter.banned": "Banned",
      "players.search_ph": "Search username...",
      "players.col.player": "Player",
      "players.col.state": "State",
      "players.col.role": "Role",
      "players.col.status": "Status",
      "players.col.vl": "AC VL",
      "players.col.actions": "Actions",
      "players.online_badge": "Online",
      "players.offline_badge": "Offline",
      "players.banned_badge": "Banned",
      "players.good_badge": "Good",
      "players.freeze_badge": "Frozen",
      "players.mute_badge": "Muted",
      "players.manage": "Manage",
      "players.empty": "No players found.",
      "modal.status_label": "Status:",
      "modal.reason": "Reason",
      "modal.expires": "Expires",
      "modal.online_label": "Online:",
      "modal.yes": "Yes",
      "modal.no_seen": "No (Last seen: {date})",
      "modal.freeze_label": "Freeze:",
      "modal.active": "ACTIVE",
      "modal.inactive": "Inactive",
      "modal.mute_label": "Mute:",
      "modal.permanent": "Permanent",
      "modal.vl_label": "AC VL:",
      "modal.pass_label": "Pass:",
      "modal.tier": "Tier {tier} ({xp} XP)",
      "modal.rank_label": "Rank:",
      "modal.vault_label": "Vault:",
      "modal.coins": "Coins",
      "modal.tokens_label": "Tokens:",
      "modal.self_notice": "You are viewing your own profile.",
      "modal.hierarchy_notice": "Hierarchy protection: you cannot sanction an equal or higher staff role.",
      "modal.btn.unfreeze": "Unfreeze",
      "modal.btn.freeze": "Freeze",
      "modal.btn.unmute": "Unmute",
      "modal.btn.mute": "Mute",
      "modal.mute.5m": "Mute 5m",
      "modal.mute.15m": "15m",
      "modal.mute.1h": "1h",
      "modal.mute.24h": "24h",
      "modal.mute_ph": "Mute reason",
      "modal.kick_ph": "Kick reason",
      "modal.btn.kick": "Kick",
      "modal.btn.set_status": "Apply Status",
      "modal.btn.unban": "Unban",
      "modal.ban.perm": "Permanent Ban",
      "modal.ban.1h": "Tempban 1h",
      "modal.ban.6h": "Tempban 6h",
      "modal.ban.24h": "Tempban 24h",
      "modal.ban.7d": "Tempban 7 days",
      "modal.ban.30d": "Tempban 30 days",
      "modal.ban_ph": "Ban reason",
      "modal.btn.ban": "Ban",
      "modal.btn.reset_vl": "Reset AC VL",
      "modal.btn.tp": "Teleport",
      "modal.inv_heading": "Live Inventory / Snapshot",
      "modal.inv_give": "Give",
      "modal.inv_clear": "Clear All",
      "modal.eq.head": "Helmet",
      "modal.eq.chest": "Chestplate",
      "modal.eq.legs": "Leggings",
      "modal.eq.feet": "Boots",
      "modal.eq.offhand": "Offhand",
      "modal.slot_title": "{item} (click = remove if Admin+)",
      "modal.last_snap": "Last saved snapshot: {date}",
      "modal.no_snap": "No saved inventory snapshot.",
      "modal.confirm_clear_inv": "Clear the entire inventory and equipment of this player?",
      "modal.confirm_rm_slot": "Delete contents of slot #{slot}?",
      "chat.heading": "Live Chat (In-Game <-> Web)",
      "chat.input_ph": "Send a message in-game...",
      "chat.empty": "No chat messages captured since startup.",
      "broadcast.heading": "Global Broadcast (Admin+)",
      "broadcast.header_label": "Screen Title",
      "broadcast.msg_label": "Message",
      "broadcast.msg_ph": "Message sent as title + chat...",
      "broadcast.submit": "Send Broadcast",
      "ac.suspects_heading": "Online Suspects & PacketGuard Alerts",
      "ac.no_suspects": "No suspects online",
      "ac.empty_logs": "Anti-Cheat log is empty.",
      "ac.settings_heading": "Anti-Cheat Settings & Maintenance (Manager+)",
      "ac.cfg.enabled": "Enable Frontier Anti-Cheat",
      "ac.cfg.alerts": "Broadcast alerts to online staff",
      "ac.cfg.exempt": "Exempt staff",
      "ac.cfg.maps": "Purge locator maps",
      "ac.cfg.shulkers": "Purge Shulker & EnderChest",
      "ac.cfg.hidetag": "Hide nametags by distance",
      "ac.cfg.dist_label": "Max nametag distance (6..48)",
      "ac.maint.reset_vl": "Reset All VL",
      "ac.maint.clear_logs": "Clear AC Logs",
      "ac.maint.defaults": "Reset 15 Modules",
      "ac.confirm_maint": "Confirm Anti-Cheat maintenance operation: {op}?",
      "ac.modules_heading": "Anti-Cheat Modules (15)",
      "ac.col.module": "Module",
      "ac.col.category": "Category",
      "ac.col.enabled": "Enabled",
      "ac.col.action": "Action",
      "ac.col.max_vl": "Max VL",
      "ac.col.save": "Save",
      "prog.heading": "Player Progression & Economy (Manager+)",
      "prog.target_label": "Online Player",
      "prog.no_online": "No players online",
      "prog.target_opt": "{name} (Tier {tier}, {coins} Coins)",
      "prog.btn_xp": "Add Pass XP",
      "prog.btn_rank": "Apply Rank",
      "prog.coins_ph": "Coins",
      "prog.tokens_ph": "Tokens",
      "prog.btn_eco": "Set Balance",
      "prog.btn_key": "Give Lootbox Key",
      "prog.btn_reset_pass": "Reset FrontierPass",
      "prog.confirm_reset_pass": "Reset FrontierPass progression for this player?",
      "codes.heading": "Gift Codes",
      "codes.ph.code": "CODE (e.g. FRONTIER)",
      "codes.ph.max_uses": "Max uses (0=inf)",
      "codes.ph.tokens": "Tokens",
      "codes.ph.coins": "Coins",
      "codes.ph.xp": "XP",
      "codes.ph.item": "Item (e.g. minecraft:diamond)",
      "codes.ph.item_count": "Item Qty",
      "codes.no_rank": "No rank",
      "codes.submit": "Create / Update Code",
      "codes.col.code": "Code",
      "codes.col.uses": "Uses",
      "codes.col.rewards": "Rewards",
      "codes.col.actions": "Actions",
      "codes.disable": "Disable",
      "codes.enable": "Enable",
      "codes.del": "Delete",
      "codes.empty": "No gift codes created.",
      "codes.confirm_del": "Delete this gift code?",
      "staff.heading": "Staff Management & Web Panel Access",
      "staff.col.member": "Member",
      "staff.col.role": "Role",
      "staff.col.web_access": "Web Access",
      "staff.col.actions": "Actions",
      "staff.ws.revoked": "REVOKED",
      "staff.ws.active": "ACTIVE (v{v})",
      "staff.ws.unset": "PASSWORD UNSET",
      "staff.btn.restore": "Re-authorize",
      "staff.btn.revoke": "Revoke Web",
      "staff.btn.kill": "Kill Sessions",
      "staff.locked": "Locked",
      "staff.empty": "No staff members recorded.",
      "staff.prompt_revoke": "Web access revocation reason:",
      "staff.prompt_revoke_default": "Security / End of duty",
      "staff.promote_heading": "Assign Staff Role & Protections",
      "staff.role.player_revoke": "Player (Remove Staff & Revoke Web)",
      "staff.role.modo": "Mod",
      "staff.role.admin": "Admin",
      "staff.role.manager": "Server Manager (Owner only)",
      "staff.promote_submit": "Apply Staff Role",
      "prot.auto_deop": "Auto-Deop protection",
      "prot.restrictions": "Restrictions (Bundles / EnderChest / Pearls)",
      "prot.save": "Save Protections",
      "prot.deop_all": "Run Deop-All",
      "prot.confirm_deop": "Deop all players except admin/owner/manager?",
      "console.heading": "Quick Commands & Console",
      "quick.day": "Day",
      "quick.night": "Night",
      "quick.clear": "Clear Weather",
      "quick.rain": "Rain",
      "quick.clearlag": "ClearLag",
      "console.cmd_label": "Raw Server Console (Owner only)",
      "console.cmd_ph": "e.g. say Maintenance in 5 minutes",
      "console.execute": "Execute",
      "audit.heading": "Full Audit Log",
      "audit.export_json": "Export JSON",
      "audit.export_csv": "Export CSV",
      "audit.empty": "Audit log is empty.",
      "toast.action_sent": "Action \"{action}\" sent to server...",
      "toast.error": "Error: {msg}",
      "toast.server_msg": "[Server] {msg}",
      "toast.export_err": "Export failed: {msg}",
      "toast.local_mode": "Local launcher switched to {mode} mode.",
      "toast.local_err": "Local config error: {msg}",
      "err.missing_relay": "HTTPS Relay URL not configured (open API Connection Settings).",
      "err.session_expired": "Session revoked or expired.",
      "err.code.UNAUTHORIZED": "Authentication required.",
      "err.code.SESSION_EXPIRED": "Session expired or invalidated.",
      "err.code.REVOKED": "Web access revoked by a Manager/Owner.",
      "err.code.PASSWORD_NOT_SET": "Set your Web password in-game first (/frontier:menu -> Admin -> Web Panel).",
      "err.code.RATE_LIMITED": "Too many failed attempts. Please try again later.",
      "err.code.INVALID_CREDENTIALS": "Invalid Minecraft username or Web password.",
      "err.code.NO_PERMISSION": "Insufficient staff permission for the Web Panel.",
    },
  };

  function resolveInitialLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved === "fr" || saved === "en") return saved;
    const cfgDefault = window.FRONTIER_WEB_CONFIG?.defaultLang;
    if (cfgDefault === "en" || cfgDefault === "fr") return cfgDefault;
    return navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
  }

  const state = {
    token: localStorage.getItem(STORAGE_TOKEN) || "",
    relayUrl: localStorage.getItem(STORAGE_RELAY) || (window.FRONTIER_WEB_CONFIG?.defaultRelayUrl || ""),
    theme: localStorage.getItem(STORAGE_THEME) || "dark",
    lang: resolveInitialLang(),
    user: null,
    pollTimer: null,
    playerFilter: "online",
    searchQuery: "",
    modalPlayerId: null,
    snapshot: null,
    securityAlerts: [],
    recentResults: [],
    serverOnline: false,
    lastSyncAt: 0,
    seenResultIds: new Set(),
    isLocalLauncher: false,
  };

  // Expose pour controle automatise si besoin sans secret
  window.FRONTIER_I18N_KEYS = I18N;

  function $(id) {
    return document.getElementById(id);
  }

  function t(key, vars = null) {
    const dict = I18N[state.lang] || I18N.fr;
    let str = dict[key] !== undefined ? dict[key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : key);
    if (vars && typeof vars === "object") {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replaceAll(`{${k}}`, String(v ?? ""));
      }
    }
    return str;
  }

  function roleLabel(level) {
    return t(`role.${Number(level) || 0}`);
  }

  function esc(str) {
    return String(str ?? "")
      .replace(/§./g, "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getLocale() {
    return state.lang === "en" ? "en-US" : "fr-FR";
  }

  function fmtTime(ms) {
    if (!ms) return "--";
    return new Date(ms).toLocaleTimeString(getLocale(), { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  function fmtDate(ms) {
    if (!ms) return "--";
    return new Date(ms).toLocaleString(getLocale());
  }

  function fmtUptime(sec) {
    const s = Math.max(0, Math.floor(Number(sec) || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${m}m`;
  }

  function fmtHours(sec) {
    const s = Math.max(0, Math.floor(Number(sec) || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${String(m).padStart(2, "0")}m`;
  }

  function fmtNum(n) {
    return Number(n || 0).toLocaleString(getLocale());
  }

  function jobLabel(jobId) {
    if (!jobId) return t("an.job.none");
    const k = `an.job.${jobId}`;
    return I18N[state.lang]?.[k] ? t(k) : jobId;
  }

  function renderDeltaEl(el, pct) {
    if (!el) return;
    if (pct === null || pct === undefined || Number.isNaN(Number(pct))) {
      el.className = "kpi-delta flat";
      el.textContent = t("an.delta.no_prev");
      return;
    }
    const num = Number(pct);
    if (num > 0) {
      el.className = "kpi-delta up";
      el.textContent = t("an.delta.vs_prev", { arrow: "\u25B2", val: `+${num}` });
    } else if (num < 0) {
      el.className = "kpi-delta down";
      el.textContent = t("an.delta.vs_prev", { arrow: "\u25BC", val: String(num) });
    } else {
      el.className = "kpi-delta flat";
      el.textContent = t("an.delta.vs_prev", { arrow: "=", val: "0" });
    }
  }

  function getApiBase() {
    if (state.isLocalLauncher) return "";
    const raw = String(state.relayUrl || "").trim().replace(/\/+$/, "");
    if (raw) return raw;
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      return "";
    }
    return "";
  }

  function showToast(message, ok = true) {
    const stack = $("toastStack");
    const el = document.createElement("div");
    el.className = `toast ${ok ? "ok" : "err"}`;
    el.textContent = String(message || "");
    stack.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  }

  function applyTheme(theme) {
    state.theme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem(STORAGE_THEME, state.theme);
  }

  function applyLanguage(lang, reRender = true) {
    state.lang = lang === "en" ? "en" : "fr";
    localStorage.setItem(STORAGE_LANG, state.lang);
    document.documentElement.lang = state.lang;
    document.title = t("app.title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    if ($("loginLangBtn")) {
      $("loginLangBtn").textContent = state.lang === "en" ? "Lang: EN" : "Lang: FR";
    }
    if ($("langToggleBtn")) {
      $("langToggleBtn").textContent = state.lang.toUpperCase();
    }

    const activeBtn = document.querySelector(".nav-btn.active");
    if (activeBtn && $("pageTitle")) {
      $("pageTitle").textContent = activeBtn.textContent;
    }

    const codeRankSel = $("codeRank");
    if (codeRankSel && codeRankSel.options.length > 0 && codeRankSel.options[0].value === "") {
      codeRankSel.options[0].textContent = t("codes.no_rank");
    }

    if (reRender && state.user) {
      renderAll();
    }
  }

  function forceLogout(reasonMessage = "") {
    if (state.pollTimer) {
      clearInterval(state.pollTimer);
      state.pollTimer = null;
    }
    state.token = "";
    state.user = null;
    localStorage.removeItem(STORAGE_TOKEN);
    $("appView").classList.add("hidden");
    $("loginView").classList.remove("hidden");
    $("playerModal").classList.add("hidden");
    if (reasonMessage) {
      $("loginError").textContent = reasonMessage;
      $("loginError").classList.remove("hidden");
    }
  }

  function resolveApiError(data, status) {
    if (data?.code && I18N[state.lang]?.[`err.code.${data.code}`]) {
      return t(`err.code.${data.code}`);
    }
    return data?.error || `HTTP ${status}`;
  }

  async function apiFetch(path, options = {}) {
    const base = getApiBase();
    if (!base && !state.isLocalLauncher && window.location.protocol !== "http:" && window.location.hostname !== "127.0.0.1") {
      throw new Error(t("err.missing_relay"));
    }
    const headers = { ...(options.headers || {}) };
    if (state.token) headers.Authorization = `Bearer ${state.token}`;
    const res = await fetch(`${base}${path}`, { ...options, headers });
    let data = {};
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      data = await res.json();
    }
    if (res.status === 401 && path !== "/api/auth/login") {
      const msg = resolveApiError(data, res.status) || t("err.session_expired");
      forceLogout(msg);
      throw new Error(msg);
    }
    if (!res.ok) {
      throw new Error(resolveApiError(data, res.status));
    }
    return data;
  }

  async function checkLocalLauncher() {
    try {
      const res = await fetch("/api/local/config");
      if (!res.ok) return;
      const cfg = await res.json();
      if (cfg && cfg.isLocalLauncher) {
        state.isLocalLauncher = true;
        $("localLauncherBadge").classList.remove("hidden");
        $("localModePanel").classList.remove("hidden");
        $("localModeSelect").value = cfg.mode || "standalone";
        if (cfg.relayUrl && !$("relayUrlInput").value) {
          $("relayUrlInput").value = cfg.relayUrl;
        }
      }
    } catch {}
  }

  async function sendAction(action, payload = {}) {
    try {
      const data = await apiFetch("/api/panel/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, payload }),
      });
      showToast(t("toast.action_sent", { action }), true);
      setTimeout(refreshState, 900);
      return data;
    } catch (err) {
      showToast(t("toast.error", { msg: err.message }), false);
      return null;
    }
  }

  function applyRoleVisibility() {
    const lvl = state.user?.staffLevel || 0;
    document.querySelectorAll("[data-min]").forEach((el) => {
      const min = Number(el.getAttribute("data-min")) || 1;
      if (lvl >= min) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });
  }

  function switchTab(tabId) {
    document.querySelectorAll(".tab-section").forEach((s) => s.classList.add("hidden"));
    const target = $(tabId);
    if (target) target.classList.remove("hidden");
    document.querySelectorAll(".nav-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
      if (b.getAttribute("data-tab") === tabId) {
        $("pageTitle").textContent = b.textContent;
      }
    });
  }

  function renderHeaderAndSidebar() {
    const snap = state.snapshot || {};
    const meta = snap.meta || {};
    $("serverDot").className = `dot ${state.serverOnline ? "online" : "offline"}`;
    $("serverOnlineLabel").textContent = state.serverOnline ? t("status.online") : t("status.offline");
    $("sideTps").textContent = meta.tps ? Number(meta.tps).toFixed(1) : "--";
    $("sidePlayers").textContent = String(meta.onlineCount ?? 0);
    $("sideUptime").textContent = t("status.uptime", { val: fmtUptime(meta.uptimeSeconds || 0) });
    $("syncInfo").textContent = state.lastSyncAt
      ? t("status.sync", { val: fmtTime(state.lastSyncAt) })
      : t("status.sync_wait");

    if (state.user) {
      $("staffNameLabel").textContent = state.user.name;
      const badge = $("staffRoleBadge");
      badge.textContent = roleLabel(state.user.staffLevel);
      badge.className = `role-pill role-${state.user.staffLevel}`;
    }
  }

  function renderOverview() {
    const snap = state.snapshot || {};
    const meta = snap.meta || {};
    const roster = snap.roster || [];
    const banned = roster.filter((r) => r.status === "Banned").length;
    const muted = roster.filter((r) => Boolean(r.mute)).length;
    const frozen = roster.filter((r) => Boolean(r.frozen)).length;
    const suspects = snap.anticheat?.suspects || [];

    $("ovOnline").textContent = String(meta.onlineCount ?? 0);
    $("ovKnown").textContent = String(meta.knownCount ?? roster.length);
    $("ovTps").textContent = meta.tps ? Number(meta.tps).toFixed(1) : "--";
    $("ovSanctions").textContent = `${banned} / ${muted} / ${frozen}`;
    $("ovSuspects").textContent = String(suspects.length);
    $("ovAlerts").textContent = String(state.securityAlerts.length);

    $("ovAlertFeed").innerHTML = state.securityAlerts.length
      ? state.securityAlerts
          .slice(0, 20)
          .map(
            (a) =>
              `<div class="feed-item"><span class="feed-time">[${fmtTime(a.timestamp)}]</span><strong>[${esc(a.source)}]</strong> ${esc(a.playerName)} -> <span style="color:#ff8c80">${esc(a.category)}</span> (${esc(a.details)}) <strong>[${esc(a.action)}]</strong></div>`,
          )
          .join("")
      : `<div class="feed-item">${esc(t("ov.empty_alerts"))}</div>`;

    const audits = snap.audits || [];
    $("ovAuditFeed").innerHTML = audits.length
      ? audits
          .slice(0, 20)
          .map(
            (a) =>
              `<div class="feed-item"><span class="feed-time">[${fmtTime(a.occurredAt)}]</span><strong>${esc(a.actor?.name)}</strong> -> ${esc(a.action)} ${a.target ? `(${esc(a.target.name)})` : ""} : ${esc(a.details)}</div>`,
          )
          .join("")
      : `<div class="feed-item">${esc(t("ov.empty_audits"))}</div>`;
  }

  function getAnalyticsData() {
    return state.snapshot?.analytics || state.snapshot?.meta?.analytics || null;
  }

  function renderHbarList(containerId, items, totalBase, gold = false) {
    const el = $(containerId);
    if (!el) return;
    if (!items || !items.length) {
      el.innerHTML = `<div class="feed-item">${esc(t("an.waiting"))}</div>`;
      return;
    }
    const denom = Math.max(1, totalBase || Math.max(...items.map((x) => x.count || 0), 1));
    el.innerHTML = items
      .map((it) => {
        const pct = Math.min(100, Math.round(((it.count || 0) / denom) * 1000) / 10);
        return `<div class="hbar-row">
          <div class="hbar-meta"><strong>${esc(it.label)}</strong><span>${fmtNum(it.count)} (${pct}%)</span></div>
          <div class="hbar-track"><div class="hbar-fill ${gold ? "hbar-fill-gold" : ""}" style="width:${pct}%"></div></div>
        </div>`;
      })
      .join("");
  }

  function renderAnalytics() {
    const an = getAnalyticsData();
    if (!an || !an.kpis) {
      if ($("anGeneratedAt")) $("anGeneratedAt").textContent = t("an.waiting");
      if ($("anTopPlayersBody")) {
        $("anTopPlayersBody").innerHTML = `<tr><td colspan="9">${esc(t("an.waiting"))}</td></tr>`;
      }
      return;
    }
    const k = an.kpis;
    $("anGeneratedAt").textContent = t("an.updated", { date: fmtDate(an.generatedAt), peak: k.peakOnline7d ?? 0 });

    $("anKpiWau").textContent = fmtNum(k.wau);
    renderDeltaEl($("anKpiWauDelta"), k.wauDeltaPct);
    $("anKpiWauSub").textContent = t("an.kpi.wau_sub", { dau: fmtNum(k.dau), mau: fmtNum(k.mau) });

    $("anKpiRegulars").textContent = fmtNum(k.regularPlayers);
    renderDeltaEl($("anKpiRegularsDelta"), k.regularDeltaPct);
    $("anKpiRegularsSub").textContent = t("an.kpi.regulars_sub", { stick: k.stickinessPct ?? 0, avg: k.avgOnline7d ?? 0 });

    $("anKpiNew7").textContent = fmtNum(k.newWeekly);
    renderDeltaEl($("anKpiNew7Delta"), k.newWeeklyDeltaPct);
    $("anKpiNew7Sub").textContent = t("an.kpi.new7_sub", {
      known: fmtNum(state.snapshot?.meta?.knownCount ?? 0),
      disc: fmtNum(k.discordLinkedCount),
      discPct: k.discordLinkedPct ?? 0,
    });

    $("anKpiRet7").textContent = k.retentionD7Pct !== null && k.retentionD7Pct !== undefined ? `${k.retentionD7Pct}%` : "--";
    renderDeltaEl($("anKpiRet7Delta"), k.retentionD7DeltaPct);
    $("anKpiRet7Sub").textContent = t("an.kpi.retention_sub", {
      d1: k.retentionD1Pct !== null && k.retentionD1Pct !== undefined ? `${k.retentionD1Pct}%` : "--",
      d30: k.retentionD30Pct !== null && k.retentionD30Pct !== undefined ? `${k.retentionD30Pct}%` : "--",
    });

    $("anKpiPlaytime").textContent = `${fmtNum(k.totalPlayHours)}h`;
    $("anKpiPlaytimeSub1").textContent = t("an.kpi.playtime_sub1", { avg: k.avgPlayHoursPerActive ?? 0 });
    $("anKpiPlaytimeSub2").textContent = t("an.kpi.playtime_sub2", { sess: k.avgSessionMinutes ?? 0 });

    const eco = an.economy || {};
    $("anKpiConversion").textContent = `${eco.conversionRatePct ?? 0}%`;
    $("anKpiMonSub1").textContent = t("an.kpi.mon_sub1", {
      buyers: fmtNum(eco.payingPlayersCount),
      orders: fmtNum(eco.tebexOrdersTotal),
    });
    $("anKpiMonSub2").textContent = t("an.kpi.mon_sub2", {
      tok: fmtNum(eco.tebexTokensTotal),
      arppu: fmtNum(eco.arppuTokens),
    });

    const daily = an.dailySeries || [];
    const maxDau = Math.max(1, ...daily.map((d) => Math.max(d.dau || 0, d.newPlayers || 0)));
    $("anDailyChart").innerHTML = daily
      .map((d) => {
        const hDau = Math.max(2, Math.round(((d.dau || 0) / maxDau) * 100));
        const hNew = Math.max(2, Math.round(((d.newPlayers || 0) / maxDau) * 100));
        const tip = t("an.chart.daily_tip", { day: d.day, dau: d.dau || 0, nw: d.newPlayers || 0 });
        return `<div class="chart-col" title="${esc(tip)}">
          <div class="chart-col-val">${d.dau || 0}</div>
          <div class="chart-bar-wrap">
            <div class="chart-bar" style="height:${hDau}%"></div>
            <div class="chart-bar chart-bar-new" style="height:${hNew}%"></div>
          </div>
          <div class="chart-col-lbl">${esc(d.day.slice(5))}</div>
        </div>`;
      })
      .join("");

    const hourly = an.hourlyProfile || [];
    const maxHr = Math.max(1, ...hourly.map((h) => Math.max(h.peakOnline || 0, h.avgOnline || 0)));
    $("anPeakBadge").textContent = t("an.chart.peak_badge", { peak: k.peakOnline7d ?? 0 });
    $("anHourlyChart").innerHTML = hourly
      .map((h) => {
        const val = h.avgOnline > 0 ? h.avgOnline : h.peakOnline;
        const pct = Math.max(2, Math.round((val / maxHr) * 100));
        const isPeak = h.peakOnline > 0 && h.peakOnline >= (k.peakOnline7d || 0) && (k.peakOnline7d || 0) > 0;
        const tip = t("an.chart.hourly_tip", {
          hour: String(h.hour).padStart(2, "0"),
          avg: h.avgOnline,
          peak: h.peakOnline,
          tps: h.avgTps || "--",
        });
        return `<div class="chart-col" title="${esc(tip)}">
          <div class="chart-col-val">${h.peakOnline || 0}</div>
          <div class="chart-bar-wrap">
            <div class="chart-bar ${isPeak ? "chart-bar-peak" : ""}" style="height:${pct}%"></div>
          </div>
          <div class="chart-col-lbl">${h.hour}</div>
        </div>`;
      })
      .join("");

    const jobs = an.jobs || {};
    $("anJobsAdoptionBadge").textContent = t("an.jobs.adoption", {
      pct: jobs.adoptionPct ?? 0,
      withJob: fmtNum(jobs.totalWithJob),
    });
    const jList = jobs.breakdown || [];
    const jDenom = Math.max(1, jobs.totalWithJob || Math.max(...jList.map((j) => j.players || 0), 1));
    $("anJobsList").innerHTML = jList
      .map((j) => {
        const share = Math.min(100, Math.round(((j.players || 0) / jDenom) * 1000) / 10);
        return `<div class="hbar-row">
          <div class="hbar-meta">
            <strong>${esc(jobLabel(j.id))}</strong>
            <span>${esc(t("an.jobs.row_meta", { players: j.players, online: j.online, avg: j.avgSkills, max: j.maxSkills || "-", comp: j.completionPct }))}</span>
          </div>
          <div class="hbar-track"><div class="hbar-fill" style="width:${share}%"></div></div>
        </div>`;
      })
      .join("");

    const knownTotal = Math.max(1, state.snapshot?.meta?.knownCount || 0);
    renderHbarList("anPlaytimeDist", an.playtimeBuckets || [], knownTotal, false);
    const passSum = (eco.passTierBuckets || []).reduce((s, b) => s + (b.count || 0), 0);
    renderHbarList("anPassDist", eco.passTierBuckets || [], Math.max(1, passSum), true);

    $("anEcoGrid").innerHTML = [
      [t("an.eco.total_coins"), fmtNum(eco.totalCoins)],
      [t("an.eco.avg_median_coins"), `${fmtNum(eco.avgCoins)} / ${fmtNum(eco.medianCoins)}`],
      [t("an.eco.top10_share"), `${eco.top10SharePct ?? 0}%`],
      [t("an.eco.total_tokens"), fmtNum(eco.totalTokens)],
      [t("an.eco.avg_pass"), String(eco.avgPassTier ?? 0)],
      [t("an.eco.quests_done"), `${fmtNum(eco.dailyQuestsDone)} / ${fmtNum(eco.weeklyQuestsDone)}`],
      [t("an.eco.code_uses"), fmtNum(eco.totalCodeRedemptions)],
      [t("an.eco.discord_links"), `${fmtNum(k.discordLinkedCount)} (${k.discordLinkedPct ?? 0}%)`],
    ]
      .map(([lbl, val]) => `<div class="eco-cell"><div class="eco-cell-lbl">${esc(lbl)}</div><div class="eco-cell-val">${esc(val)}</div></div>`)
      .join("");

    const rankDefs = new Map((state.snapshot?.metaOptions?.ranks || []).map((r) => [r.id, r.label]));
    const rankItems = (eco.rankDistribution || []).map((r) => ({
      label: rankDefs.get(r.id) || r.id,
      count: r.count,
    }));
    const rankSum = rankItems.reduce((s, x) => s + x.count, 0);
    renderHbarList("anRanksList", rankItems, Math.max(1, rankSum), false);

    const top = an.topPlayers || [];
    $("anTopPlayersBody").innerHTML = top.length
      ? top
          .map((p) => {
            const onlineTxt = p.online ? `<span class="tag-badge tag-ok">${esc(t("players.online_badge"))}</span>` : `<span class="tag-badge">${esc(t("players.offline_badge"))}</span>`;
            const jobTxt = p.jobId ? `${esc(jobLabel(p.jobId))} (${p.jobSkills}/${p.jobMaxSkills || "-"})` : esc(t("an.job.none"));
            return `<tr>
              <td><strong>${esc(p.name)}</strong></td>
              <td>${onlineTxt}</td>
              <td>${esc(fmtHours(p.playTimeSeconds))}</td>
              <td>${p.activeDays30 || 0}</td>
              <td>${p.sessions || 0}</td>
              <td>${jobTxt}</td>
              <td>T${p.passTier || 0} / ${esc(rankDefs.get(p.rankId) || p.rankId || "-")}</td>
              <td>${fmtNum(p.coins)} C / ${fmtNum(p.tokens)} J</td>
              <td><button class="oreui-btn oreui-btn-info oreui-btn-sm open-player-btn" data-pid="${esc(p.playerId)}">${esc(t("players.manage"))}</button></td>
            </tr>`;
          })
          .join("")
      : `<tr><td colspan="9">${esc(t("an.top.empty"))}</td></tr>`;
  }

  function exportAnalytics(format) {
    const an = getAnalyticsData();
    if (!an) {
      showToast(t("an.waiting"), false);
      return;
    }
    let content;
    let mime;
    let filename;
    if (format === "csv") {
      const rows = [["Section", "Key", "Value", "Extra"]];
      for (const [k, v] of Object.entries(an.kpis || {})) rows.push(["KPI", k, v ?? "", ""]);
      for (const d of an.dailySeries || []) rows.push(["DAILY_14D", d.day, d.dau, `new=${d.newPlayers}`]);
      for (const h of an.hourlyProfile || []) rows.push(["HOURLY_24H", `${h.hour}h`, h.avgOnline, `peak=${h.peakOnline};tps=${h.avgTps}`]);
      for (const j of an.jobs?.breakdown || []) rows.push(["JOB", j.id, j.players, `online=${j.online};avgSkills=${j.avgSkills}/${j.maxSkills}`]);
      for (const [k, v] of Object.entries(an.economy || {})) {
        if (typeof v !== "object") rows.push(["ECONOMY", k, v ?? "", ""]);
      }
      for (const p of an.topPlayers || []) {
        rows.push(["TOP_PLAYER", p.name, `${Math.round((p.playTimeSeconds || 0) / 360) / 10}h`, `job=${p.jobId};coins=${p.coins};tokens=${p.tokens}`]);
      }
      content = rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
      mime = "text/csv;charset=utf-8";
      filename = "frontier-analytics.csv";
    } else {
      content = JSON.stringify({ exportedAt: new Date().toISOString(), analytics: an }, null, 2);
      mime = "application/json;charset=utf-8";
      filename = "frontier-analytics.json";
    }
    const blob = new Blob([content], { type: mime });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function renderPlayersTable() {
    const roster = (state.snapshot?.roster || []).slice();
    const q = state.searchQuery.trim().toLowerCase();
    let filtered = roster;
    if (state.playerFilter === "online") filtered = filtered.filter((r) => r.online);
    else if (state.playerFilter === "sanctioned") filtered = filtered.filter((r) => r.status !== "Good Standing" || r.frozen || r.mute);
    else if (state.playerFilter === "banned") filtered = filtered.filter((r) => r.status === "Banned");

    if (q) filtered = filtered.filter((r) => r.name.toLowerCase().includes(q));
    filtered.sort((a, b) => (b.online ? 1 : 0) - (a.online ? 1 : 0) || b.staffLevel - a.staffLevel || a.name.localeCompare(b.name));

    $("playersTableBody").innerHTML = filtered.length
      ? filtered
          .map((r) => {
            const roleTxt = r.staffLevel > 0 ? `<span class="role-pill role-${r.staffLevel}">${esc(roleLabel(r.staffLevel))}</span>` : `<span class="tag-badge">${esc(roleLabel(0))}</span>`;
            const onlineTxt = r.online ? `<span class="tag-badge tag-ok">${esc(t("players.online_badge"))}</span>` : `<span class="tag-badge">${esc(t("players.offline_badge"))}</span>`;
            const badges = [];
            if (r.status === "Banned") badges.push(`<span class="tag-badge tag-danger">${esc(t("players.banned_badge"))}</span>`);
            else if (r.status !== "Good Standing") badges.push(`<span class="tag-badge tag-warn">${esc(r.status)}</span>`);
            else badges.push(`<span class="tag-badge tag-ok">${esc(t("players.good_badge"))}</span>`);
            if (r.frozen) badges.push(`<span class="tag-badge tag-info">${esc(t("players.freeze_badge"))}</span>`);
            if (r.mute) badges.push(`<span class="tag-badge tag-warn">${esc(t("players.mute_badge"))}</span>`);
            return `<tr>
              <td><strong>${esc(r.name)}</strong>${r.discordName ? `<br><small style="color:var(--text-muted)">Discord: ${esc(r.discordName)}</small>` : ""}</td>
              <td>${onlineTxt}</td>
              <td>${roleTxt}</td>
              <td>${badges.join(" ")}</td>
              <td>${r.acVl || 0}</td>
              <td><button class="oreui-btn oreui-btn-info oreui-btn-sm open-player-btn" data-pid="${esc(r.playerId)}">${esc(t("players.manage"))}</button></td>
            </tr>`;
          })
          .join("")
      : `<tr><td colspan="6">${esc(t("players.empty"))}</td></tr>`;

    if (state.modalPlayerId && !$("playerModal").classList.contains("hidden")) {
      renderPlayerModal(state.modalPlayerId);
    }
  }

  function renderPlayerModal(playerId) {
    const roster = state.snapshot?.roster || [];
    const entry = roster.find((r) => r.playerId === playerId);
    if (!entry) {
      $("playerModal").classList.add("hidden");
      return;
    }
    const online = (state.snapshot?.onlinePlayers || []).find((p) => p.id === playerId);
    const actorLvl = state.user?.staffLevel || 0;
    const isSelf = playerId === state.user?.playerId;
    const canMod = !isSelf && actorLvl > (entry.staffLevel || 0);

    $("modalPlayerName").textContent = `${entry.name} (${roleLabel(entry.staffLevel)})`;
    $("modalPlayerMeta").innerHTML = `
      <div><strong>${esc(t("modal.status_label"))}</strong> ${esc(entry.status)} ${entry.banReason ? `| ${esc(t("modal.reason"))}: ${esc(entry.banReason)}` : ""} ${entry.banExpiresAt ? `| ${esc(t("modal.expires"))}: ${fmtDate(entry.banExpiresAt)}` : ""}</div>
      <div><strong>${esc(t("modal.online_label"))}</strong> ${online ? `${esc(t("modal.yes"))} (${esc(online.dimension)} : ${online.x}, ${online.y}, ${online.z} | HP ${online.hp}/${online.maxHp} | ${esc(online.gamemode)})` : esc(t("modal.no_seen", { date: fmtDate(entry.lastSeen) }))}</div>
      <div><strong>${esc(t("modal.freeze_label"))}</strong> ${entry.frozen ? esc(t("modal.active")) : esc(t("modal.inactive"))} | <strong>${esc(t("modal.mute_label"))}</strong> ${entry.mute ? `${esc(entry.mute.reason)} (${entry.mute.until ? fmtDate(entry.mute.until) : esc(t("modal.permanent"))})` : esc(t("modal.inactive"))} | <strong>${esc(t("modal.vl_label"))}</strong> ${entry.acVl || 0}</div>
      <div><strong>${esc(t("modal.playtime_label"))}</strong> ${esc(fmtHours(online ? online.playTimeSeconds : entry.playTimeSeconds))} | <strong>${esc(t("modal.days30_label"))}</strong> ${entry.activeDays30 || 0} (${entry.sessionsCount || 0} sess.) | <strong>${esc(t("modal.job_label"))}</strong> ${esc(jobLabel(online ? online.jobId : entry.jobId))}${(online ? online.jobId : entry.jobId) ? ` (${(online ? online.jobSkills : entry.jobSkills) || 0}/${(online ? online.jobMaxSkills : entry.jobMaxSkills) || "-"})` : ""} | <strong>${esc(t("modal.tebex_label"))}</strong> ${(online ? online.tebexTokens : entry.tebexTokens) || 0} J (${(online ? online.tebexOrders : entry.tebexOrders) || 0})</div>
      ${online ? `<div><strong>${esc(t("modal.pass_label"))}</strong> ${esc(t("modal.tier", { tier: online.passTier, xp: online.passXp }))} | <strong>${esc(t("modal.rank_label"))}</strong> ${esc(online.rankId)} | <strong>${esc(t("modal.vault_label"))}</strong> ${online.bankBalance}/${online.bankLimit} ${esc(t("modal.coins"))} | <strong>${esc(t("modal.tokens_label"))}</strong> ${online.tokens}</div>` : ""}
    `;

    const modWrap = $("modalModActions");
    if (!canMod) {
      modWrap.innerHTML = `<div class="alert-box alert-info">${esc(isSelf ? t("modal.self_notice") : t("modal.hierarchy_notice"))}</div>`;
    } else {
      const parts = [];
      parts.push(`<div class="toolbar-group">
        ${entry.frozen
          ? `<button class="oreui-btn oreui-btn-primary oreui-btn-sm modal-act" data-act="unfreeze">${esc(t("modal.btn.unfreeze"))}</button>`
          : `<button class="oreui-btn oreui-btn-info oreui-btn-sm modal-act" data-act="freeze">${esc(t("modal.btn.freeze"))}</button>`}
        ${entry.mute
          ? `<button class="oreui-btn oreui-btn-primary oreui-btn-sm modal-act" data-act="unmute">${esc(t("modal.btn.unmute"))}</button>`
          : `<select id="mMuteDur" class="select-ore" style="width:auto"><option value="300000">${esc(t("modal.mute.5m"))}</option><option value="900000">${esc(t("modal.mute.15m"))}</option><option value="3600000">${esc(t("modal.mute.1h"))}</option><option value="86400000">${esc(t("modal.mute.24h"))}</option><option value="0">${esc(t("modal.permanent"))}</option></select>
             <input id="mMuteReason" class="input-ore" style="width:150px" placeholder="${esc(t("modal.mute_ph"))}">
             <button class="oreui-btn oreui-btn-gold oreui-btn-sm modal-act" data-act="mute">${esc(t("modal.btn.mute"))}</button>`}
        ${online ? `<input id="mKickReason" class="input-ore" style="width:150px" placeholder="${esc(t("modal.kick_ph"))}"><button class="oreui-btn oreui-btn-sm modal-act" data-act="kick">${esc(t("modal.btn.kick"))}</button>` : ""}
      </div>`);

      parts.push(`<div class="toolbar-group">
        <select id="mStatusVal" class="select-ore" style="width:auto">
          <option value="Good Standing">Good Standing</option>
          <option value="Warned">Warned</option>
          <option value="Repeatedly Warned">Repeatedly Warned</option>
          <option value="Problematic">Problematic</option>
        </select>
        <button class="oreui-btn oreui-btn-sm modal-act" data-act="set_status">${esc(t("modal.btn.set_status"))}</button>
      </div>`);

      if (actorLvl >= 2) {
        parts.push(`<div class="toolbar-group">
          ${entry.status === "Banned"
            ? `<button class="oreui-btn oreui-btn-primary oreui-btn-sm modal-act" data-act="unban">${esc(t("modal.btn.unban"))}</button>`
            : `<select id="mBanDur" class="select-ore" style="width:auto">
                 <option value="0">${esc(t("modal.ban.perm"))}</option>
                 <option value="3600">${esc(t("modal.ban.1h"))}</option>
                 <option value="21600">${esc(t("modal.ban.6h"))}</option>
                 <option value="86400">${esc(t("modal.ban.24h"))}</option>
                 <option value="604800">${esc(t("modal.ban.7d"))}</option>
                 <option value="2592000">${esc(t("modal.ban.30d"))}</option>
               </select>
               <input id="mBanReason" class="input-ore" style="width:180px" placeholder="${esc(t("modal.ban_ph"))}">
               <button class="oreui-btn oreui-btn-danger oreui-btn-sm modal-act" data-act="ban_apply">${esc(t("modal.btn.ban"))}</button>`}
          <button class="oreui-btn oreui-btn-sm modal-act" data-act="ac_reset_vl">${esc(t("modal.btn.reset_vl"))}</button>
        </div>`);

        if (online) {
          parts.push(`<div class="toolbar-group">
            <input id="mTpX" class="input-ore" style="width:70px" type="number" value="${Math.round(online.x)}" placeholder="X">
            <input id="mTpY" class="input-ore" style="width:70px" type="number" value="${Math.round(online.y)}" placeholder="Y">
            <input id="mTpZ" class="input-ore" style="width:70px" type="number" value="${Math.round(online.z)}" placeholder="Z">
            <select id="mTpDim" class="select-ore" style="width:auto">
              <option value="minecraft:overworld">Overworld</option>
              <option value="minecraft:nether">Nether</option>
              <option value="minecraft:the_end">The End</option>
            </select>
            <button class="oreui-btn oreui-btn-info oreui-btn-sm modal-act" data-act="tp_coords">${esc(t("modal.btn.tp"))}</button>
          </div>`);
        }
      }
      modWrap.innerHTML = parts.join("");
    }

    const canEditInv = Boolean(online) && actorLvl >= 2 && canMod;
    $("modalInvControls").classList.toggle("hidden", !canEditInv);

    if (online && online.inventory) {
      const armor = online.inventory.armor || {};
      const fmtEq = (lbl, obj) => `${esc(lbl)}: <strong>${obj ? `${esc(obj.typeId.replace("minecraft:", ""))} x${obj.amount}` : "-"}</strong>`;
      $("modalArmorBar").innerHTML = [
        fmtEq(t("modal.eq.head"), armor.head),
        fmtEq(t("modal.eq.chest"), armor.chest),
        fmtEq(t("modal.eq.legs"), armor.legs),
        fmtEq(t("modal.eq.feet"), armor.feet),
        fmtEq(t("modal.eq.offhand"), online.inventory.offhand),
      ].join(" | ");

      const bySlot = new Map((online.inventory.main || []).map((it) => [it.slot, it]));
      const cells = [];
      for (let i = 0; i < 36; i++) {
        const it = bySlot.get(i);
        if (it) {
          cells.push(`<div class="inv-slot" data-slot="${i}" title="${esc(t("modal.slot_title", { item: it.typeId }))}">
            <span class="inv-slot-id">${esc(it.typeId.replace("minecraft:", ""))}</span>
            <span class="inv-slot-qty">x${it.amount}</span>
          </div>`);
        } else {
          cells.push(`<div class="inv-slot" style="opacity:0.35"><span>#${i}</span></div>`);
        }
      }
      $("modalInvGrid").innerHTML = cells.join("");
    } else {
      $("modalArmorBar").textContent = entry.inventorySnapshotAt
        ? t("modal.last_snap", { date: fmtDate(entry.inventorySnapshotAt) })
        : t("modal.no_snap");
      $("modalInvGrid").innerHTML = (entry.inventorySnapshot || [])
        .map((it) => `<div class="inv-slot"><span class="inv-slot-id">${esc(it.slot)}</span><span>${esc(it.text)}</span></div>`)
        .join("");
    }
  }

  function renderChat() {
    const msgs = state.snapshot?.chat || [];
    $("chatFeed").innerHTML = msgs.length
      ? msgs
          .map(
            (m) =>
              `<div class="feed-item"><span class="feed-time">[${fmtTime(m.timestamp)}]</span><span class="tag-badge">${esc(m.roleTag)}</span> <strong>${esc(m.senderName)}</strong> : ${esc(m.message)}</div>`,
          )
          .join("")
      : `<div class="feed-item">${esc(t("chat.empty"))}</div>`;
  }

  function renderAntiCheat() {
    const ac = state.snapshot?.anticheat || {};
    const suspects = ac.suspects || [];
    $("suspectsList").innerHTML = suspects.length
      ? suspects
          .map(
            (s) =>
              `<span class="tag-badge tag-danger" style="margin-right:6px;">${esc(s.name)} : VL ${s.totalVl}</span>`,
          )
          .join("")
      : `<span class="tag-badge tag-ok">${esc(t("ac.no_suspects"))}</span>`;

    const logs = ac.logs || [];
    $("acLogsFeed").innerHTML = logs.length
      ? logs
          .map(
            (l) =>
              `<div class="feed-item"><span class="feed-time">[${fmtTime(l.t)}]</span><strong>${esc(l.pName)}</strong> -> <span style="color:#ff8c80">${esc(l.mod)}</span> (VL ${l.vl}/${l.maxVl}) [${esc(l.act)}] : ${esc(l.info)}</div>`,
          )
          .join("")
      : `<div class="feed-item">${esc(t("ac.empty_logs"))}</div>`;

    const cfg = ac.config;
    if (cfg && (state.user?.staffLevel || 0) >= 3) {
      $("acCfgEnabled").checked = Boolean(cfg.enabled);
      $("acCfgAlerts").checked = Boolean(cfg.staffAlerts);
      $("acCfgExempt").checked = Boolean(cfg.exemptStaff);
      $("acCfgMaps").checked = Boolean(cfg.purgeLocatorMaps);
      $("acCfgShulkers").checked = Boolean(cfg.purgeShulkerAndEnder);
      $("acCfgHideTag").checked = Boolean(cfg.hideNametagByDistance);
      $("acCfgDist").value = cfg.nametagMaxDistance || 16;

      const defs = ac.moduleDefs || [];
      const actions = ac.actions || ["alert", "cancel", "freeze", "kick", "ban"];
      $("acModulesBody").innerHTML = defs
        .map((def) => {
          const cur = cfg.modules?.[def.id] || { enabled: def.defaultEnabled, action: def.defaultAction, maxVl: def.defaultMaxVl };
          const opts = actions.map((a) => `<option value="${a}" ${cur.action === a ? "selected" : ""}>${a}</option>`).join("");
          return `<tr data-mod="${esc(def.id)}">
            <td><strong>${esc(def.id)}</strong></td>
            <td>${esc(def.category)}</td>
            <td><input type="checkbox" class="mod-enabled" ${cur.enabled ? "checked" : ""}></td>
            <td><select class="select-ore mod-action" style="width:auto">${opts}</select></td>
            <td><input type="number" class="input-ore mod-vl" style="width:72px" min="1" max="20" value="${cur.maxVl}"></td>
            <td><button type="button" class="oreui-btn oreui-btn-primary oreui-btn-sm save-ac-mod-btn">${esc(t("ui.save"))}</button></td>
          </tr>`;
        })
        .join("");
    }
  }

  function renderProgressionAndCodes() {
    if ((state.user?.staffLevel || 0) < 3) return;
    const online = state.snapshot?.onlinePlayers || [];
    const targetSel = $("progTargetSelect");
    const prevTarget = targetSel.value;
    targetSel.innerHTML = online.length
      ? online.map((p) => `<option value="${esc(p.id)}">${esc(t("prog.target_opt", { name: p.name, tier: p.passTier, coins: p.bankBalance }))}</option>`).join("")
      : `<option value="">${esc(t("prog.no_online"))}</option>`;
    if (prevTarget && online.some((p) => p.id === prevTarget)) targetSel.value = prevTarget;

    const opts = state.snapshot?.metaOptions || {};
    const ranks = opts.ranks || [];
    const progRankSel = $("progRankSelect");
    if (!progRankSel.options.length && ranks.length) {
      progRankSel.innerHTML = ranks
        .filter((r) => state.user.staffLevel >= 4 || (r.id !== "owner" && r.id !== "manager"))
        .map((r) => `<option value="${esc(r.id)}">${esc(r.label)} (${esc(r.id)})</option>`)
        .join("");
    }

    const codeRankSel = $("codeRank");
    if (codeRankSel.options.length <= 1 && (opts.redeemableRanks || []).length) {
      codeRankSel.innerHTML =
        `<option value="">${esc(t("codes.no_rank"))}</option>` +
        opts.redeemableRanks.map((id) => `<option value="${esc(id)}">${esc(id)}</option>`).join("");
    }

    const keySel = $("progKeyRarity");
    if (!keySel.options.length && (opts.lootboxes || []).length) {
      keySel.innerHTML = opts.lootboxes.map((k) => `<option value="${esc(k)}">${esc(k)}</option>`).join("");
    }

    const codes = state.snapshot?.codes || [];
    $("codesTableBody").innerHTML = codes.length
      ? codes
          .map(
            (c) => `<tr>
              <td><strong>${esc(c.code)}</strong> ${c.active ? `<span class="tag-badge tag-ok">ON</span>` : `<span class="tag-badge tag-danger">OFF</span>`}</td>
              <td>${c.uses}/${c.maxUses > 0 ? c.maxUses : "inf"}</td>
              <td>${c.tokens ? `${c.tokens}J ` : ""}${c.coins ? `${c.coins}C ` : ""}${c.xp ? `${c.xp}XP ` : ""}${c.rankId ? `Rank:${esc(c.rankId)}` : ""}</td>
              <td class="toolbar-group">
                <button type="button" class="oreui-btn oreui-btn-sm code-toggle-btn" data-code="${esc(c.code)}">${esc(c.active ? t("codes.disable") : t("codes.enable"))}</button>
                <button type="button" class="oreui-btn oreui-btn-danger oreui-btn-sm code-del-btn" data-code="${esc(c.code)}">${esc(t("codes.del"))}</button>
              </td>
            </tr>`,
          )
          .join("")
      : `<tr><td colspan="4">${esc(t("codes.empty"))}</td></tr>`;
  }

  function renderStaffAndProtections() {
    if ((state.user?.staffLevel || 0) < 3) return;
    const roster = state.snapshot?.roster || [];
    const actorLvl = state.user.staffLevel;

    const staffList = roster.filter((r) => r.staffLevel >= 1).sort((a, b) => b.staffLevel - a.staffLevel);
    $("staffTableBody").innerHTML = staffList.length
      ? staffList
          .map((s) => {
            const ws = s.webStatus || {};
            const wsBadge = ws.revoked
              ? `<span class="tag-badge tag-danger">${esc(t("staff.ws.revoked"))}</span>`
              : ws.configured
                ? `<span class="tag-badge tag-ok">${esc(t("staff.ws.active", { v: ws.sessionVersion || 1 }))}</span>`
                : `<span class="tag-badge tag-warn">${esc(t("staff.ws.unset"))}</span>`;
            const canManage = s.playerId !== state.user.playerId && actorLvl > s.staffLevel;
            const btns = canManage
              ? `${ws.revoked
                  ? `<button class="oreui-btn oreui-btn-primary oreui-btn-sm staff-web-btn" data-act="staff_restore_web" data-pid="${esc(s.playerId)}">${esc(t("staff.btn.restore"))}</button>`
                  : `<button class="oreui-btn oreui-btn-danger oreui-btn-sm staff-web-btn" data-act="staff_revoke_web" data-pid="${esc(s.playerId)}">${esc(t("staff.btn.revoke"))}</button>`}
                 <button class="oreui-btn oreui-btn-gold oreui-btn-sm staff-web-btn" data-act="staff_kill_sessions" data-pid="${esc(s.playerId)}">${esc(t("staff.btn.kill"))}</button>`
              : `<span style="color:var(--text-muted)">${esc(t("staff.locked"))}</span>`;
            return `<tr>
              <td><strong>${esc(s.name)}</strong></td>
              <td><span class="role-pill role-${s.staffLevel}">${esc(roleLabel(s.staffLevel))}</span></td>
              <td>${wsBadge}</td>
              <td class="toolbar-group">${btns}</td>
            </tr>`;
          })
          .join("")
      : `<tr><td colspan="4">${esc(t("staff.empty"))}</td></tr>`;

    const promoteSel = $("promotePlayerSelect");
    const prevProm = promoteSel.value;
    const candidates = roster.filter((r) => r.playerId !== state.user.playerId && r.staffLevel < actorLvl);
    promoteSel.innerHTML = candidates.map((r) => `<option value="${esc(r.playerId)}">${esc(r.name)} (${esc(roleLabel(r.staffLevel))})</option>`).join("");
    if (prevProm && candidates.some((c) => c.playerId === prevProm)) promoteSel.value = prevProm;

    $("promoteLevelSelect").querySelector('option[value="3"]').disabled = actorLvl < 4;

    const prot = state.snapshot?.protections || {};
    $("protAutoDeop").checked = Boolean(prot.autoDeop);
    $("protRestrictions").checked = Boolean(prot.restrictions);
  }

  function renderConsoleAndAudit() {
    const audits = state.snapshot?.audits || [];
    $("auditFullFeed").innerHTML = audits.length
      ? audits
          .map(
            (a) =>
              `<div class="feed-item"><span class="feed-time">[${fmtDate(a.occurredAt)}]</span><strong>${esc(a.actor?.name)}</strong> -> ${esc(a.action)} ${a.target ? `(${esc(a.target.name)})` : ""} : ${esc(a.details)}</div>`,
          )
          .join("")
      : `<div class="feed-item">${esc(t("audit.empty"))}</div>`;
  }

  function renderAll() {
    applyRoleVisibility();
    renderHeaderAndSidebar();
    renderOverview();
    renderAnalytics();
    renderPlayersTable();
    renderChat();
    renderAntiCheat();
    renderProgressionAndCodes();
    renderStaffAndProtections();
    renderConsoleAndAudit();
  }

  async function refreshState() {
    if (!state.token) return;
    try {
      const res = await apiFetch("/api/panel/state");
      if (res.user) state.user = res.user;
      state.serverOnline = Boolean(res.serverOnline);
      state.lastSyncAt = res.lastSyncAt || 0;
      state.snapshot = res.data || null;
      state.securityAlerts = res.securityAlerts || [];
      for (const r of res.recentResults || []) {
        if (r.commandId && !state.seenResultIds.has(r.commandId)) {
          state.seenResultIds.add(r.commandId);
          if (state.seenResultIds.size > 150) {
            state.seenResultIds.delete(state.seenResultIds.values().next().value);
          }
          showToast(t("toast.server_msg", { msg: r.message }), Boolean(r.ok));
        }
      }
      renderAll();
    } catch {}
  }

  function startSession(token, user) {
    state.token = token;
    state.user = user;
    localStorage.setItem(STORAGE_TOKEN, token);
    $("loginView").classList.add("hidden");
    $("appView").classList.remove("hidden");
    $("loginError").classList.add("hidden");
    refreshState();
    if (state.pollTimer) clearInterval(state.pollTimer);
    const interval = Number(window.FRONTIER_WEB_CONFIG?.pollIntervalMs) || 2500;
    state.pollTimer = setInterval(refreshState, interval);
  }

  async function downloadAuditExport(format) {
    try {
      const base = getApiBase();
      const res = await fetch(`${base}/api/panel/audit/export?format=${encodeURIComponent(format)}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = format === "csv" ? "frontier-audit.csv" : "frontier-audit.json";
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (err) {
      showToast(t("toast.export_err", { msg: err.message }), false);
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    applyTheme(state.theme);
    applyLanguage(state.lang, false);
    $("relayUrlInput").value = state.relayUrl;
    await checkLocalLauncher();

    const toggleTheme = () => applyTheme(state.theme === "dark" ? "light" : "dark");
    const toggleLang = () => applyLanguage(state.lang === "fr" ? "en" : "fr", true);

    $("themeToggleBtn").addEventListener("click", toggleTheme);
    $("loginThemeBtn")?.addEventListener("click", toggleTheme);
    $("langToggleBtn").addEventListener("click", toggleLang);
    $("loginLangBtn")?.addEventListener("click", toggleLang);

    $("relayUrlInput").addEventListener("change", (e) => {
      state.relayUrl = e.target.value.trim().replace(/\/+$/, "");
      localStorage.setItem(STORAGE_RELAY, state.relayUrl);
    });

    $("saveLocalModeBtn").addEventListener("click", async () => {
      try {
        const mode = $("localModeSelect").value;
        const relayUrl = $("relayUrlInput").value.trim().replace(/\/+$/, "");
        await fetch("/api/local/config", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode, relayUrl }),
        });
        showToast(t("toast.local_mode", { mode }), true);
      } catch (err) {
        showToast(t("toast.local_err", { msg: err.message }), false);
      }
    });

    $("loginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      $("loginError").classList.add("hidden");
      state.relayUrl = $("relayUrlInput").value.trim().replace(/\/+$/, "");
      if (state.relayUrl) localStorage.setItem(STORAGE_RELAY, state.relayUrl);
      const username = $("loginUser").value.trim();
      const password = $("loginPass").value;
      $("loginSubmitBtn").disabled = true;
      try {
        const data = await apiFetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        $("loginPass").value = "";
        startSession(data.token, data.user);
      } catch (err) {
        $("loginError").textContent = err.message || t("login.failed");
        $("loginError").classList.remove("hidden");
      } finally {
        $("loginSubmitBtn").disabled = false;
      }
    });

    $("logoutBtn").addEventListener("click", async () => {
      try {
        await apiFetch("/api/auth/logout", { method: "POST" });
      } catch {}
      forceLogout("");
    });

    $("refreshNowBtn").addEventListener("click", refreshState);

    $("navList").addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-btn");
      if (btn) switchTab(btn.getAttribute("data-tab"));
    });

    document.querySelectorAll(".filter-player-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.playerFilter = btn.getAttribute("data-filter");
        document.querySelectorAll(".filter-player-btn").forEach((b) => b.classList.remove("oreui-btn-primary"));
        btn.classList.add("oreui-btn-primary");
        renderPlayersTable();
      });
    });

    $("playerSearchInput").addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderPlayersTable();
    });

    $("playersTableBody").addEventListener("click", (e) => {
      const btn = e.target.closest(".open-player-btn");
      if (!btn) return;
      state.modalPlayerId = btn.getAttribute("data-pid");
      $("playerModal").classList.remove("hidden");
      renderPlayerModal(state.modalPlayerId);
    });

    $("anTopPlayersBody")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".open-player-btn");
      if (!btn) return;
      state.modalPlayerId = btn.getAttribute("data-pid");
      $("playerModal").classList.remove("hidden");
      renderPlayerModal(state.modalPlayerId);
    });

    $("exportStatsJsonBtn")?.addEventListener("click", () => exportAnalytics("json"));
    $("exportStatsCsvBtn")?.addEventListener("click", () => exportAnalytics("csv"));

    $("closePlayerModalBtn").addEventListener("click", () => {
      state.modalPlayerId = null;
      $("playerModal").classList.add("hidden");
    });

    $("modalModActions").addEventListener("click", (e) => {
      const btn = e.target.closest(".modal-act");
      if (!btn || !state.modalPlayerId) return;
      const act = btn.getAttribute("data-act");
      const targetId = state.modalPlayerId;
      if (act === "freeze" || act === "unfreeze" || act === "unmute" || act === "unban" || act === "ac_reset_vl") {
        return sendAction(act, { targetId });
      }
      if (act === "mute") {
        return sendAction("mute", {
          targetId,
          durationMs: Number($("mMuteDur")?.value) || 0,
          reason: $("mMuteReason")?.value || "",
        });
      }
      if (act === "kick") {
        return sendAction("kick", { targetId, reason: $("mKickReason")?.value || "" });
      }
      if (act === "set_status") {
        return sendAction("set_status", { targetId, status: $("mStatusVal")?.value || "Good Standing" });
      }
      if (act === "ban_apply") {
        const dur = Number($("mBanDur")?.value) || 0;
        const reason = $("mBanReason")?.value || "Banned via Web Panel";
        return sendAction(dur > 0 ? "tempban" : "ban", { targetId, durationSeconds: dur, reason });
      }
      if (act === "tp_coords") {
        return sendAction("tp_coords", {
          targetId,
          x: Number($("mTpX")?.value),
          y: Number($("mTpY")?.value),
          z: Number($("mTpZ")?.value),
          dimension: $("mTpDim")?.value || "minecraft:overworld",
        });
      }
    });

    $("btnInvGive").addEventListener("click", () => {
      if (!state.modalPlayerId) return;
      const itemId = $("invGiveItem").value.trim();
      const amount = Number($("invGiveQty").value) || 1;
      if (itemId) sendAction("inv_give", { targetId: state.modalPlayerId, itemId, amount });
    });

    $("btnInvClear").addEventListener("click", () => {
      if (state.modalPlayerId && confirm(t("modal.confirm_clear_inv"))) {
        sendAction("inv_clear", { targetId: state.modalPlayerId });
      }
    });

    $("modalInvGrid").addEventListener("click", (e) => {
      const slotEl = e.target.closest(".inv-slot[data-slot]");
      if (!slotEl || !state.modalPlayerId || (state.user?.staffLevel || 0) < 2) return;
      const slot = Number(slotEl.getAttribute("data-slot"));
      if (confirm(t("modal.confirm_rm_slot", { slot }))) {
        sendAction("inv_remove", { targetId: state.modalPlayerId, slot });
      }
    });

    $("chatSendForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = $("chatMessageInput").value.trim();
      if (!msg) return;
      $("chatMessageInput").value = "";
      sendAction("chat_send", { message: msg });
    });

    $("broadcastForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const header = $("broadcastHeader").value.trim() || "ANNONCE";
      const message = $("broadcastMessage").value.trim();
      if (!message) return;
      $("broadcastMessage").value = "";
      sendAction("broadcast", { header, message });
    });

    $("acGlobalForm").addEventListener("submit", (e) => {
      e.preventDefault();
      sendAction("ac_update_settings", {
        enabled: $("acCfgEnabled").checked,
        staffAlerts: $("acCfgAlerts").checked,
        exemptStaff: $("acCfgExempt").checked,
        purgeLocatorMaps: $("acCfgMaps").checked,
        purgeShulkerAndEnder: $("acCfgShulkers").checked,
        hideNametagByDistance: $("acCfgHideTag").checked,
        nametagMaxDistance: Number($("acCfgDist").value) || 16,
      });
    });

    document.querySelectorAll(".ac-maint-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const op = b.getAttribute("data-op");
        if (confirm(t("ac.confirm_maint", { op }))) {
          sendAction("ac_maintenance", { op });
        }
      });
    });

    $("acModulesBody").addEventListener("click", (e) => {
      const btn = e.target.closest(".save-ac-mod-btn");
      if (!btn) return;
      const tr = btn.closest("tr[data-mod]");
      sendAction("ac_update_module", {
        moduleId: tr.getAttribute("data-mod"),
        enabled: tr.querySelector(".mod-enabled").checked,
        action: tr.querySelector(".mod-action").value,
        maxVl: Number(tr.querySelector(".mod-vl").value) || 5,
      });
    });

    $("btnProgXp").addEventListener("click", () => {
      const targetId = $("progTargetSelect").value;
      if (targetId) sendAction("prog_xp", { targetId, amount: Number($("progXpAmount").value) || 100 });
    });
    $("btnProgRank").addEventListener("click", () => {
      const targetId = $("progTargetSelect").value;
      if (targetId) sendAction("prog_rank", { targetId, rankId: $("progRankSelect").value, equip: true });
    });
    $("btnProgEco").addEventListener("click", () => {
      const targetId = $("progTargetSelect").value;
      if (targetId) {
        sendAction("prog_economy", {
          targetId,
          bankBalance: Number($("progCoinsInput").value) || 0,
          frontierTokens: Number($("progTokensInput").value) || 0,
        });
      }
    });
    $("btnProgKey").addEventListener("click", () => {
      const targetId = $("progTargetSelect").value;
      if (targetId) {
        sendAction("prog_key", {
          targetId,
          rarity: $("progKeyRarity").value,
          count: Number($("progKeyCount").value) || 1,
        });
      }
    });
    $("btnProgResetPass").addEventListener("click", () => {
      const targetId = $("progTargetSelect").value;
      if (targetId && confirm(t("prog.confirm_reset_pass"))) {
        sendAction("prog_reset_pass", { targetId });
      }
    });

    $("codeCreateForm").addEventListener("submit", (e) => {
      e.preventDefault();
      sendAction("code_upsert", {
        code: $("codeName").value.trim(),
        maxUses: Number($("codeMaxUses").value) || 0,
        tokens: Number($("codeTokens").value) || 0,
        coins: Number($("codeCoins").value) || 0,
        xp: Number($("codeXp").value) || 0,
        itemId: $("codeItem").value.trim(),
        itemCount: Number($("codeItemCount").value) || 0,
        rankId: $("codeRank").value,
      });
    });

    $("codesTableBody").addEventListener("click", (e) => {
      const tgl = e.target.closest(".code-toggle-btn");
      if (tgl) return sendAction("code_toggle", { code: tgl.getAttribute("data-code") });
      const del = e.target.closest(".code-del-btn");
      if (del && confirm(t("codes.confirm_del"))) {
        sendAction("code_delete", { code: del.getAttribute("data-code") });
      }
    });

    $("staffTableBody").addEventListener("click", (e) => {
      const btn = e.target.closest(".staff-web-btn");
      if (!btn) return;
      const act = btn.getAttribute("data-act");
      const targetId = btn.getAttribute("data-pid");
      let reason = "";
      if (act === "staff_revoke_web") {
        reason = prompt(t("staff.prompt_revoke"), t("staff.prompt_revoke_default")) || "";
      }
      sendAction(act, { targetId, reason });
    });

    $("promoteStaffForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const targetId = $("promotePlayerSelect").value;
      const nextLevel = Number($("promoteLevelSelect").value);
      if (targetId) sendAction("staff_set_role", { targetId, nextLevel, syncBadge: true });
    });

    $("protectionsForm").addEventListener("submit", (e) => {
      e.preventDefault();
      sendAction("protections_update", {
        autoDeop: $("protAutoDeop").checked,
        restrictions: $("protRestrictions").checked,
      });
    });

    $("btnDeopNow").addEventListener("click", () => {
      if (confirm(t("prot.confirm_deop"))) {
        sendAction("protections_update", { deopNow: true });
      }
    });

    document.querySelectorAll(".quick-cmd-btn").forEach((b) => {
      b.addEventListener("click", () => {
        sendAction("quick_command", { preset: b.getAttribute("data-preset") });
      });
    });

    $("consoleCmdForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const cmd = $("consoleCmdInput").value.trim();
      if (!cmd) return;
      $("consoleCmdInput").value = "";
      sendAction("console_cmd", { command: cmd });
    });

    $("exportJsonBtn").addEventListener("click", () => downloadAuditExport("json"));
    $("exportCsvBtn").addEventListener("click", () => downloadAuditExport("csv"));

    if (state.token) {
      try {
        const res = await apiFetch("/api/auth/me");
        if (res.user) startSession(state.token, res.user);
      } catch {}
    }
  });
})();

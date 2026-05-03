# 🚢 BF2B TRADING TRANS — Site Web Officiel

Site vitrine de **BF2B TRADING SUARL**, transitaire Chine → Sénégal basé à Mbour.

> **Stack** : HTML + React 18 + Tailwind CSS (via CDN) + Babel Standalone — **aucun build requis**.

---

## 📁 Structure du projet

```
bf2btrading-site/
├── index.html              # Page principale (point d'entrée)
├── print.html              # Version imprimable
├── bf2b-*.jsx              # Composants React (chargés par index.html)
├── *.png                   # Logos et images
├── vercel.json             # Configuration Vercel (cache, sécurité, redirections)
├── package.json            # Métadonnées du projet
├── robots.txt              # Instructions pour les moteurs de recherche
├── sitemap.xml             # Plan du site
└── .gitignore              # Fichiers ignorés par Git
```

---

## 🚀 Déploiement — 3 étapes

### Étape 1 — Créer le dépôt GitHub

1. Va sur [github.com/new](https://github.com/new)
2. **Nom du dépôt** : `bf2btrading-site` (ou ce que tu veux)
3. **Visibilité** : *Public* (recommandé) ou *Private*
4. **Ne coche rien** (pas de README, pas de .gitignore — ils sont déjà dans ce projet)
5. Clique sur **Create repository**

### Étape 2 — Pousser le code sur GitHub

Ouvre un terminal dans le dossier du projet et exécute :

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit — site BF2B TRADING TRANS"

# Renommer la branche en main
git branch -M main

# Connecter au dépôt GitHub (remplace TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/bf2btrading-site.git

# Pousser
git push -u origin main
```

> 💡 **Si tu n'as jamais utilisé Git**, installe-le depuis [git-scm.com](https://git-scm.com/) et configure tes identifiants :
> ```bash
> git config --global user.name "Babacar BADJI"
> git config --global user.email "bf2btrading@gmail.com"
> ```

### Étape 3 — Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub
2. Clique sur **Add New → Project**
3. Sélectionne ton dépôt `bf2btrading-site` et clique **Import**
4. **Framework Preset** : laisse sur **Other** (Vercel détecte automatiquement le site statique)
5. **Root Directory** : `./` (par défaut)
6. **Build Command** : laisse vide
7. **Output Directory** : laisse vide
8. Clique sur **Deploy** ✅

🎉 **C'est fait !** Vercel te donne une URL du type `bf2btrading-site.vercel.app` en moins d'une minute.

---

## 🌐 Connecter le domaine `www.bf2btradingtrans.com`

1. Dans Vercel, va dans ton projet → **Settings → Domains**
2. Ajoute **les deux versions** du domaine, l'une après l'autre :
   - `bf2btradingtrans.com` (sans `www`)
   - `www.bf2btradingtrans.com` (avec `www`)
3. Vercel te donne les enregistrements DNS à configurer chez ton registrar (LWS, OVH, GoDaddy, Namecheap, etc.) :

   | Type | Nom / Hôte | Valeur |
   |------|-----------|--------|
   | **A** | `@` (ou laisser vide) | `76.76.21.21` |
   | **CNAME** | `www` | `cname.vercel-dns.com` |

4. Choisis dans Vercel laquelle est la version **principale** (recommandé : `www.bf2btradingtrans.com`). L'autre redirigera automatiquement vers elle.
5. Attends 5 à 60 minutes — Vercel valide automatiquement et active **HTTPS gratuit (Let's Encrypt)**.

---

## 🔄 Mettre à jour le site

Après le déploiement initial, **toute modification poussée sur GitHub redéploie le site automatiquement** :

```bash
# Modifier un fichier (par ex. bf2b-hero.jsx)
git add .
git commit -m "Mise à jour : nouveaux tarifs aériens"
git push
```

Vercel détecte le push et redéploie en ~30 secondes. ⚡

---

## 🧪 Tester en local avant de pousser

Tu peux prévisualiser le site sur ta machine sans rien installer :

```bash
# Avec Node.js installé
npx serve .

# Ou avec Python (déjà présent sur la plupart des systèmes)
python3 -m http.server 3000
```

Puis ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## ⚙️ Optimisations déjà incluses

- ✅ React **production minifié** (au lieu de la version dev, ~10x plus rapide)
- ✅ Cache navigateur 1 an pour les images (via `vercel.json`)
- ✅ En-têtes de sécurité (`X-Frame-Options`, `Referrer-Policy`, etc.)
- ✅ Meta SEO complets (Open Graph, Twitter Card, Schema.org)
- ✅ `robots.txt` et `sitemap.xml` pour Google
- ✅ Favicon et theme-color mobile
- ✅ Redirections `/home` et `/accueil` → `/`

---

## 🆘 Dépannage

| Problème | Solution |
|----------|----------|
| Page blanche après déploiement | Ouvre la console (F12) et regarde les erreurs. Souvent un `.jsx` mal copié. |
| Logos manquants | Vérifie que les `.png` sont bien à la racine du dépôt GitHub. |
| Domaine ne marche pas | Patiente 1h après la configuration DNS, puis vérifie sur [dnschecker.org](https://dnschecker.org). |
| Modifications non visibles | Vide le cache navigateur (`Ctrl+F5`) ou ouvre en navigation privée. |

---

## 📞 Contact

**BF2B TRADING SUARL**
📍 Mbour, Sénégal
📱 +221 75 202 65 77
✉️ bf2btrading@gmail.com
🆔 NINEA : 011251965 — RCCM : SN.MBR.2024.A.1532

---

*Site généré avec Claude (Anthropic) — Déploiement statique optimisé pour Vercel.*

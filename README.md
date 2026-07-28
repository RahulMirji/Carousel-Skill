# viral-carousel-designer

An open Agent Skill that turns any AI tool / dev tool / product launch into a
premium, brand-accurate Instagram carousel: strategy, slide copy, image
prompts, caption, and hashtags — invoked with `/carousel <topic>`.

## ⚡ 1-Line Global Installation

Install globally across **Claude Code CLI**, **Cursor**, **Antigravity**, and **Windsurf** with a single command:

```bash
npx github:RahulMirji/Carousel-Skill
```

*(Or if published to npm: `npx carousel-skill`)*

---

## 📁 What's in here

```
viral-carousel-skill/
├── carousel/
│   ├── SKILL.md              ← the actual skill (Agent Skills standard)
│   └── references/
│       └── brand-colors.md   ← brand palette reference, loaded on demand
├── .claude/commands/
│   └── carousel.md           ← slash command for Claude Code
├── bin/
│   └── install.js            ← 1-line global npx installer script
├── chatgpt-instructions.md   ← paste-in system prompt for ChatGPT Custom GPTs
├── package.json              ← npm / npx package manifest
└── README.md
```

## 🛠 Usage per Platform

### 1. Claude Code (CLI / IDE extension)
Run `npx github:RahulMirji/Carousel-Skill` once. Afterwards, type `/carousel <topic>` directly in your terminal/CLI!

### 2. Cursor / Antigravity / Windsurf / Agentic IDEs
Running `npx github:RahulMirji/Carousel-Skill` automatically installs `carousel/SKILL.md` into your global agent config (`~/.gemini/config/skills/carousel` and `~/.claude/skills/carousel`).

### 3. Claude.ai (Web/Desktop App)
Settings → Capabilities → Skills → upload the `carousel/` folder (or zip it first). Once installed, type `/carousel <topic>`.

### 4. ChatGPT (Custom GPT or Project)
1. Open `chatgpt-instructions.md` and copy the text.
2. Paste it into your Custom GPT's **Instructions** field under the **Configure** tab.

---

## 📦 Publishing to npm (Optional)

If you want people to run `npx carousel-skill` instead of the GitHub repo link:
1. Log in to npm: `npm login`
2. Publish: `npm publish --access public`

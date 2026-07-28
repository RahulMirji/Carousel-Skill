#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const sourceDir = path.join(__dirname, '..');

const targets = [
  // Claude Code CLI global commands & skills
  {
    path: path.join(homeDir, '.claude', 'commands', 'carousel.md'),
    source: path.join(sourceDir, '.claude', 'commands', 'carousel.md'),
    isFile: true
  },
  {
    path: path.join(homeDir, '.claude', 'skills', 'carousel'),
    source: path.join(sourceDir, 'carousel'),
    isFile: false
  },
  // Global Agent Skills root
  {
    path: path.join(homeDir, '.gemini', 'config', 'skills', 'carousel'),
    source: path.join(sourceDir, 'carousel'),
    isFile: false
  }
];

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

console.log('\n🚀 Installing /carousel AI Agent Skill globally...\n');

let installedCount = 0;

for (const target of targets) {
  try {
    if (fs.existsSync(target.source)) {
      copyRecursiveSync(target.source, target.path);
      console.log(`  ✓ Installed to: ${target.path}`);
      installedCount++;
    }
  } catch (err) {
    console.error(`  ✖ Failed to copy to ${target.path}:`, err.message);
  }
}

if (installedCount > 0) {
  console.log('\n✨ Setup Complete!');
  console.log('You can now type `/carousel <topic>` in:');
  console.log('  • Claude Code CLI');
  console.log('  • Cursor / Antigravity / Windsurf');
  console.log('  • ChatGPT (copy system prompt from chatgpt-instructions.md)\n');
} else {
  console.log('\n❌ Installation failed. Please check permissions.\n');
}

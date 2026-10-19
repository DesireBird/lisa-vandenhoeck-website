import { readFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

// Core (Submodule) + Vandenhoeck-Overrides. Spätere Quelle gewinnt bei gleichem Key.
// Ergebnis: eine Datei branding.css mit @font-face + allen Tokens (Core-Namen bleiben gleich).
StyleDictionary.registerFormat({
  name: 'css/vandenhoeck-branding',
  format: async ({ dictionary, file, options }) => {
    const header = await fileHeader({ file });
    const fonts = readFileSync(new URL('./fonts.css', import.meta.url), 'utf8');
    const vars = formattedVariables({
      format: 'css',
      dictionary,
      outputReferences: options.outputReferences,
      usesDtcg: options.usesDtcg
    });
    return `${header}${fonts}\n${options.selector} {\n${vars}\n}\n`;
  }
});

const sd = new StyleDictionary({
  source: ['../../design-system/tokens.json', './tokens.json'],
  usesDtcg: true,
  log: { warnings: 'disabled' }, // Collisions sind hier gewollt (Brand überschreibt Core)
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: './',
      files: [
        {
          destination: 'branding.css',
          format: 'css/vandenhoeck-branding',
          options: {
            outputReferences: true,
            selector: ':root,\n[data-theme="vandenhoeck"]'
          }
        }
      ]
    }
  }
});

await sd.hasInitialized;
await sd.buildAllPlatforms();
console.log('\nBuild fertig -> branding.css');

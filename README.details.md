# Prism Harbor

An original, offline lighthouse-defense game. Survive five waves of drifting star raiders while protecting the harbor light.

## Play

Serve the `game/` directory with any static HTTP server and open its index page in desktop Chrome. There is no build step, remote asset, login or server-side dependency.

- Aim with the mouse and hold the primary button to fire.
- Select jade, amber or violet with 1, 2 or 3. A matching beam deals double damage.
- Shoot drifting shards to restore hull and charge the pulse.
- Press Space when the pulse reaches 100%; press P to pause.
- Complete all five waves, or restart after the lighthouse is lost.

## Packaging

Node.js 22.18 or later runs `main.ts`. Set MAKEFUN_OUTPUT_DIR to the intended output directory. The program validates that three or four real browser screenshots exist, copies the static game and screenshots, then builds the competition dossier using the unmodified vendored helper.

## Verification

The independent local game page rendered in the browser, displayed a five-wave victory with 86% hull, responded to the amber beam key, and returned to its title screen after reloading. Three unedited browser captures are included: defense, victory and title. Each is 1280 by 800 pixels and below the 256 KiB per-image limit. This is observed browser behavior, not a guarantee of a competition result.

Source, procedural sound and names are original. No prize has been received. MIT licensed; the vendored helper retains its own notice. Credentials, wallet private keys and transcript archives are not repository content.

const messages = {
  "Prism Harbor": "棱镜港",
  "PRISM HARBOR": "棱镜港",
  "Mouse · aim   /   Hold click · fire   /   Space · pulse   /   P · pause": "鼠标 · 瞄准 / 按住鼠标 · 射击 / 空格 · 冲击波 / P · 暂停",
  "A LIGHTHOUSE UNDER SIEGE": "灯塔保卫战",
  "The tide carries stolen stars. Defend the lighthouse for": "潮水带来了被盗的星辰。守卫灯塔，抵御",
  "five waves": "五波进攻",
  "and bring its light back to the sea.": "，让灯光重新照亮海面。",
  "Aim with your mouse and hold click to fire. Match your beam to a star's color with": "移动鼠标瞄准，按住鼠标射击。按",
  "for double damage. Press": "切换光束颜色，与目标同色可造成双倍伤害。按",
  "Space": "空格",
  "to release a charged shockwave. Collect drifting shards by shooting them.": "释放充能冲击波。射击漂浮的碎片即可收集。",
  "Light the harbor →": "点亮港湾 →",
  "Original arcade defense · Procedural sound · No downloads": "街机防守 · 程序生成音效 · 网页即玩",
  "THE LIGHT RETURNS": "灯光归来",
  "THE TIDE WILL TURN": "潮水终将退去",
  "Harbor saved.": "港湾得救了。",
  "Light extinguished.": "灯塔熄灭了。",
  "Five waves weathered. The stars belong to the sky again.": "抵御了五波攻击。星辰回到了天空。",
  "Change beam colors to break shields faster. Save your pulse for a crowded harbor.": "切换到同色光束可更快击破护盾。敌人密集时再用冲击波。",
  "You reached wave": "抵达波次",
  "Score": "得分",
  "Sail again →": "再来一次 →",
  "WAVE": "波次",
  "HULL": "耐久",
  "SCORE": "得分",
  "BEAM": "光束",
  "PULSE": "冲击波",
  " · SPACE": " · 空格",
  "JADE · 1": "翠绿 · 1",
  "AMBER · 2": "琥珀 · 2",
  "VIOLET · 3": "紫罗兰 · 3",
  "PAUSED": "已暂停",
  "Press P to return to the harbor": "按 P 返回港湾"
};
const storageKey = "makefun-prism-harbor.language";
let currentLanguage = 'zh';
try { if (localStorage.getItem(storageKey) === 'en') currentLanguage = 'en'; } catch {}
window.uiLanguage = currentLanguage;
window.t = text => window.uiLanguage === 'zh' && Object.hasOwn(messages, text) ? messages[text] : text;
const original = [];
const title = document.title;
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let node; (node = walker.nextNode());) {
  if (node.parentElement.closest('script, style, #language')) continue;
  if (Object.hasOwn(messages, node.nodeValue.trim())) original.push([node, node.nodeValue]);
}
const attributes = [...document.querySelectorAll('[aria-label], [placeholder], [title]')].flatMap(el =>
  ['aria-label', 'placeholder', 'title'].filter(name => el.hasAttribute(name)).map(name => [el, name, el.getAttribute(name)]));
const language = document.getElementById('language');
function refresh() {
  document.documentElement.lang = window.uiLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = t(title);
  language.value = window.uiLanguage;
  for (const [node, text] of original) {
    node.nodeValue = text.replace(text.trim(), t(text.trim()));
  }
  for (const [el, name, value] of attributes) el.setAttribute(name, t(value));
}
language.addEventListener('change', () => {
  window.uiLanguage = language.value === 'en' ? 'en' : 'zh';
  try { localStorage.setItem(storageKey, window.uiLanguage); } catch {}
  refresh();
  window.dispatchEvent(new Event('ui-language-change'));
});
refresh();

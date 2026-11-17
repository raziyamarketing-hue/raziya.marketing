document.documentElement.classList.add('js-ready');

// Keep editable placeholder regions easy to find without changing the reading experience.
document.querySelectorAll('.placeholder-list strong, .research-card h4, .research-card p, .competitor-avatar figcaption, .shortform-pillar h3, .shortform-pillar p, .shortform-hook-list li, .shortform-series h4, .shortform-series p, .script-field strong').forEach((node) => {
  node.setAttribute('contenteditable', 'true');
  node.setAttribute('spellcheck', 'true');
});

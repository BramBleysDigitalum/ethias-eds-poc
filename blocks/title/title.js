export default function decorate(block) {
  const [titleTextValueWrapper, typeWrapper] = block.children;

  const type = typeWrapper.textContent.trim();
  typeWrapper.remove();
  const title = document.createElement(type);
  title.textContent = titleTextValueWrapper.textContent.trim();
  titleTextValueWrapper.replaceWith(title);
}

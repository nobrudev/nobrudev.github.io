document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.style.cssText = `
    width: 16px;
    height: 16px;
    background: #fd6718;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.15s ease;
  `;
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 8 + "px";
    cursor.style.top = e.clientY - 8 + "px";
  });

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.opacity = "0.6";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.opacity = "1";
    });
  });
});

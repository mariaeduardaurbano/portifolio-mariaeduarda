// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Fecha o menu depois de clicar em uma opção
  document.querySelectorAll("#navList a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

// Animação das seções ao aparecerem na tela
try {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} catch (error) {
  // Caso o navegador não suporte IntersectionObserver,
  // mostra os elementos normalmente.
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("in");
  });
}
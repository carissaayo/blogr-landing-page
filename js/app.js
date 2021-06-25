const data = [
  {
    page: "Product",
    sublinks: [
      { title: "pricing" },
      { title: "marketplace" },
      { title: "features" },
      { title: "integrations" },
    ],
  },
  {
    page: "Company",
    sublinks: [
      { title: "about" },
      { title: "team" },
      { title: "blog" },
      { title: "Careers" },
    ],
  },
  {
    page: "Connect",
    sublinks: [
      { title: "contact" },
      { title: "newsletter" },
      { title: "linkedIn" },
    ],
  },
];

const nav = document.querySelector(".nav");
const navCon = document.querySelector(".nav-con");
const openNav = document.querySelector('[data-id="open-nav"]');
const closeNav = document.querySelector('[data-id="close-nav"]');
window.addEventListener("DOMContentLoaded", () => {
  nav.innerHTML = `

     ${data
       .map((link, index) => {
         const { page, sublinks } = link;

         return `
    <section data-id=${index}>
        <li>${page}
        
                  <picture >
                <source media='(max-width:750px)' srcset="./images/icon-arrow-dark.svg">
                <source media='(min-width:751px)' srcset="./images/icon-arrow-light.svg">
                <img alt="arrow" data-id=${index}  src="./images/icon-arrow-dark.svg"/>
          </picture>
        
        
        </li>
        <div class='links'>
        ${sublinks
          .map((sublink) => {
            const { title } = sublink;
            return ` <li>${title}</li>`;
          })
          .join(" ")}
        </div>
        
    </section>`;
       })
       .join(" ")}
    `;

  const arrowCon = document.querySelectorAll("picture > img");
  arrowCon.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      const item = e.currentTarget;
      if (arrow.dataset.id === item.dataset.id) {
        item.classList.toggle("active");
        const linksCon = item.parentElement.parentElement.nextElementSibling;
        linksCon.classList.toggle("show-links");
      }
    });
  });
});

openNav.addEventListener("click", (e) => {
  e.currentTarget.classList.add("hide-btn");
  closeNav.classList.remove("hide-btn");
  navCon.classList.add("show-nav");
});

closeNav.addEventListener("click", (e) => {
  e.currentTarget.classList.add("hide-btn");
  openNav.classList.remove("hide-btn");
  navCon.classList.remove("show-nav");
});

const smoothScorllAnchor = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < smoothScorllAnchor.length; index++) {
  const el = smoothScorllAnchor[index];

  el.addEventListener("click", function (ev) {
    ev.preventDefault();
    console.log(this.getAttribute("href"));

    if (document.getElementById(this.getAttribute("href").replace("#", "")))
      //guna ini baris ketika browse now diclik maka pada url tidak ada tanda # => http://localhost:9999/#browse
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
  });
}

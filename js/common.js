const listItems = document.querySelectorAll(".list__item");
const mediaContainer = document.querySelector(".media");

listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    mediaContainer.innerHTML = "";

    const href = item.getAttribute("href");

    if (/\.(jpe?g|png)$/i.test(href)) {
      const img = document.createElement("img");
      img.src = href;
      mediaContainer.appendChild(img);
    } else {
      const isVimeo = /^[0-9\/]+$/.test(href);
      if (isVimeo) {
        const videoCode = href;
        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${videoCode}?h=fa81f284f0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        mediaContainer.appendChild(iframe);
      } else {
        console.error(`Invalid href: ${href}`);
      }
    }
  });
});

(function () {
  const prices = {
    "5900": {
      SEK: "5 900 kr",
      EUR: "€549",
      USD: "$599",
    },
    "399": {
      SEK: "399 kr/mån",
      EUR: "€39/month",
      USD: "$39/month",
    },
    "0": {
      SEK: "0 kr/mån",
      EUR: "€0/month",
      USD: "$0/month",
    },
    "750": {
      SEK: "750 kr",
      EUR: "€69",
      USD: "$79",
    },
    "250": {
      SEK: "250 kr/bild",
      EUR: "€25/image",
      USD: "$29/image",
    },
    "995": {
      SEK: "995 kr",
      EUR: "€89",
      USD: "$99",
    },
    "1495": {
      SEK: "1 495 kr",
      EUR: "€139",
      USD: "$149",
    },
  };

  const params = new URLSearchParams(location.search);

  function defaultCurrency() {
    const saved = localStorage.getItem("dragonbornCurrency");

    if (saved && ["SEK", "EUR", "USD"].includes(saved)) {
      return saved;
    }

    return window.DRAGONBORN_LANG === "sv" ? "SEK" : "USD";
  }

  let currency = params.get("currency");

  if (!["SEK", "EUR", "USD"].includes(currency)) {
    currency = defaultCurrency();
  }

  localStorage.setItem("dragonbornCurrency", currency);

  function replacePrices(root = document.body) {
    if (!root) {
      return;
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      let text = node.nodeValue;

      if (!text || !text.trim()) {
        return;
      }

      /*
       * Svenska originalpriser i HTML.
       */
      text = text
        .replace(
          /5\s?900\s?kr/g,
          prices["5900"][currency],
        )
        .replace(
          /399\s?kr\/mån/g,
          prices["399"][currency],
        )
        .replace(
          /0\s?kr\/mån/g,
          prices["0"][currency],
        )
        .replace(
          /750\s?kr/g,
          prices["750"][currency],
        )
        .replace(
          /250\s?kr\/bild/g,
          prices["250"][currency],
        )
        .replace(
          /995\s?kr/g,
          prices["995"][currency],
        )
        .replace(
          /1\s?495\s?kr/g,
          prices["1495"][currency],
        );

      /*
       * Engelska översättningar från lang.js
       * kan redan innehålla SEK-priser.
       */
      text = text
        .replace(
          /SEK\s?5[ ,]?900/g,
          prices["5900"][currency],
        )
        .replace(
          /SEK\s?399\/month/g,
          prices["399"][currency],
        )
        .replace(
          /SEK\s?0\/month/g,
          prices["0"][currency],
        )
        .replace(
          /SEK\s?750/g,
          prices["750"][currency],
        )
        .replace(
          /SEK\s?250\/image/g,
          prices["250"][currency],
        )
        .replace(
          /SEK\s?995/g,
          prices["995"][currency],
        )
        .replace(
          /SEK\s?1[ ,]?495/g,
          prices["1495"][currency],
        );

      /*
       * Om sidan redan hunnit visa ett nollpris
       * i ett annat valutaformat normaliserar vi
       * även det till vald valuta.
       */
      text = text
        .replace(
          /€0\/month/g,
          prices["0"][currency],
        )
        .replace(
          /\$0\/month/g,
          prices["0"][currency],
        );

      node.nodeValue = text;
    });
  }

  function addCurrencySwitch() {
    if (document.querySelector(".currency-switch")) {
      return;
    }

    const langSwitch =
      document.querySelector(".lang-switch");

    const host =
      langSwitch?.parentElement ||
      document.querySelector(".nav-wrap");

    if (!host) {
      return;
    }

    const box = document.createElement("div");

    box.className = "currency-switch";

    box.setAttribute(
      "aria-label",
      window.DRAGONBORN_LANG === "en"
        ? "Choose currency"
        : "Välj valuta",
    );

    box.innerHTML = `
      <button type="button" data-currency="SEK">SEK</button>
      <span>|</span>
      <button type="button" data-currency="EUR">EUR</button>
      <span>|</span>
      <button type="button" data-currency="USD">USD</button>
    `;

    box
      .querySelectorAll("button")
      .forEach((btn) => {
        if (btn.dataset.currency === currency) {
          btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
          localStorage.setItem(
            "dragonbornCurrency",
            btn.dataset.currency,
          );

          const url = new URL(location.href);

          url.searchParams.set(
            "currency",
            btn.dataset.currency,
          );

          location.href = url.toString();
        });
      });

    if (langSwitch) {
      langSwitch.insertAdjacentElement(
        "afterend",
        box,
      );
    } else {
      host.appendChild(box);
    }
  }

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      replacePrices();
      addCurrencySwitch();

      const observer = new MutationObserver(
        () => replacePrices(),
      );

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      setTimeout(
        () => observer.disconnect(),
        3000,
      );
    },
  );
})();
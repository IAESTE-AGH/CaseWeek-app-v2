import type { Workshop } from "@/types/workshop";

export const WORKSHOPS: Workshop[] = [
  {
    id: "fe476267-6ba0-4a7f-bd9d-6250d6d8a28b",
    company: {
      id: "a32e9bf0-9f6c-4a42-9ec4-1a01459d3529", //"c1"
      name: "Przedsiębiorstwo Robót Inżynieryjnych INKOP Sp. z o.o.",
      logoUrl: "https://logos.gpcdn.pl/loga-firm/20189608/2c580000-43a8-f403-89e0-08d91a0e1193_280x280.png",
      websiteUrl: "https://www.inkop.pl/",
      shortDescription:
        "INKOP kompleksowe budownictwo inżynieryjne.",
      longDescription:
        "Przedsiębiorstwo Robót Inżynieryjnych INKOP Sp. z o.o., z siedzibą w Krakowie, specjalizuje się w kompleksowym budownictwie inżynieryjnym, ze szczególnym uwzględnieniem technologii bezwykopowych, takich jak mikrotuneling, przewierty sterowane i przeciski pneumatyczne, oferując również wynajem specjalistycznego sprzętu budowlanego.",
      displayPriority: 1,
    },
    university: {
      id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
      name: "Akademia Górniczo-Hutnicza w Krakowie",
    },
    title: "Mikrotuneling i inne technologie bezwykopowe w budownictwie inżynieryjnym",
    startsAt: "2025-05-29T00:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Warsztat Mikrotuneling i inne technologie bezwykopowe w budownictwie inżynieryjnym ma na celu przybliżenie uczestnikom nowoczesnych metod realizacji inwestycji infrastrukturalnych. Warsztat prowadzony będzie przez specjalistę z branży, a jego część praktyczna umożliwi zapoznanie się z przykładami projektów realizowanych przy użyciu omawianych technologii. \n\nLiczba prelegentów: 1–2\nCzas trwania: 1–2 godziny\nOptymalna liczba uczestników: dowolna\nPreferowani uczestnicy: studenci dwóch ostatnich lat kierunków:\n-Geoinżynieria i Górnictwo Otworowe\n–Geotechnologie Otworowe\n–Inżynieria i Ochrona Środowiska\n\nGodziny warsztatu pojawią się w najbliższych dniach.",
    address: "30-389 Kraków, ul. Komuny Paryskiej 5",
    durationMinutes: 120,
    minYearOfStudy: 2,
    maxYearOfStudy: 3,
    preferableFieldsOfStudy: [
      { id: "e5c57629-44b4-4f71-b1ee-cdaa0ffadab2", name: "Geoinżynieria i Górnictwo Otworowe" },
      { id: "89399a6d-7156-4226-8b9a-ae39b3a6e2b6", name: "Geotechnologie Otworowe" },
      { id: "c0a89c59-157a-4622-a443-47c24ef4c697", name: "Inżynieria i Ochrona Środowiska" }
    ],
    registrationLink: "https://forms.office.com/e/jLyMTRKU78",
    registrationEndsAt: "2025-05-23T23:59:59+02:00",
  },
  
  {
    id: "d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e",
    company: {
      id: "94a4d02a-59d2-45a3-9830-d3d928a3d89d",
      name: "ORLEN Termika S.A.", //"c2"
      logoUrl: "https://biznesalert.pl/wp-content/uploads/2025/01/Zdjecie-WhatsApp-2025-01-15-o-12.22.26_5dd7fb99.jpg",
      websiteUrl: "https://termika.orlen.pl/",
      shortDescription: "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od dziewięciu lat nieprzerwanie uznawana za najcenniejszą polską markę.",
      longDescription:
        "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od lat uznawana za najcenniejszą polską markę i jedyną z Polski w rankingu „Fortune 500”; lider krajowych zestawień, wyróżniana za etykę i politykę pracowniczą (Top Employers Polska).",
      displayPriority: 2,
    },
    university: {
      id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
      name: "Politechnika Warszawska",
    },
    title: "Jak w energetyce zarabiają pieniądze? 6 wniosków na temat stanu rynku energii w Polsce",
    startsAt: "2025-06-06T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Warsztat przybliży podstawowe mechanizmy funkcjonowania rynku energii elektrycznej w Polsce – od produkcji po sprzedaż. Uczestnicy dowiedzą się, kto zarabia na energii, jak kształtują się ceny oraz jakie czynniki wpływają na rentowność firm energetycznych. Spotkanie zakończy się kluczowymi wnioskami o stanie polskiego rynku energii.",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 90,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: [
      { id: "fd59f5a9-8e80-4711-8d9f-62a5409e3e29", name: "Mechaniczny Energetyki i Lotnictwa" },
      { id: "d6b3cc62-c11b-4ed1-b1c9-faf48a5b3491", name: "Wydział Mechaniczny Technologiczny" },
      { id: "4e4be28e-41c7-497f-b90c-42f8ca6a69db", name: "Wydział Samochodów i Maszyn Roboczych" },
      { id: "ec5ab938-5ef4-47fc-bff0-2b3c8a6cd7d5", name: "Wydział Elektryczny" },
      { id: "c283aad0-f249-48d1-9b5d-fb8db91f5981", name: "Wydział Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska" },
      { id: "c72b36ed-e826-4537-87b4-e7e1e8f54c0c", name: "Wydział Inżynierii Materiałowej" },
      { id: "4c462784-f17c-4a6b-bbff-cae0baf62c21", name: "Wydział Inżynierii Chemicznej i Procesowej" }
    ],
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c",
    company: {
      id: "56fde7e5-ef45-4a0f-99f1-65cb6b11847b",
      name: "VALEO AUTOSYSTEMY SP. Z O.O.", //"c3"
      logoUrl: "https://www.valeo.com/wp-content/uploads/2022/12/valeo-logo-rvb_600x327_acf_cropped.png",
      websiteUrl: "https://www.valeo.com/pl/polska/",
      shortDescription:
        "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2.",
      longDescription:
        "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2. Valeo zatrudnia obecnie 91 800 pracowników w ponad 32 krajach na całym świecie. Posiadamy 155 zakładów produkcyjnych, 58 centrów badań i rozwoju oraz 15 platform dystrybucyjnych. Firma powstała w 1923 roku pod nazwą SAFF. Kultura korporacyjna Valeo opiera się na dążeniu do doskonałości w produkcji dzięki najwyższemu poziomowi jakości oraz aktywnie stosowanym przez cały personel kluczowym wartościom, takim jak etyka, przejrzystość w działaniu, delegowanie uprawnień, profesjonalizm oraz praca zespołowa. Mając silne poczucie odpowiedzialności społecznej i ekologicznej - Grupa Valeo podpisała deklarację Społecznej Odpowiedzialności Biznesu (CSR). To oznacza, że w swojej działalności wdraża strategię trwałego i zrównoważonego rozwoju dążąc do zachowania spójności celów ekonomicznych, środowiskowych i społecznych. Jako globalna organizacja – Grupa Valeo ma wpisane w swoją filozofię działania także otwarcie na różnorodność, która dotyczy obszarów różnic kulturowych, zdrowotnych, płci oraz pokoleniowych.",
      displayPriority: 3,
    },
    university: {
      id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
      name: "Akademia Górniczo-Hutnicza w Krakowie",
    },
    title: "Step by Step",
    startsAt: "2025-05-28T00:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Step by Step - Narzędzia lean w praktyce przy zarządzaniu firmą. Uczestnicy wcielają się w różne role w symulacji firmy produkcyjnej (dyrektor, logistyk, planista, operator, itp.) . Celem gry jest wygenerowanie zysku finansowego poprzez wdrażanie usprawnień. W ramach ćwiczenia uczestnicy poznają narzędzia Lean Management i będą je mogli wykorzystać w praktyce.\nTermin warsztatu: 28.05 i 29.05\nLiczba prelegentów: 2\nCzas trwania: 5–6 godzin\nOptymalna liczba uczestników: 10\nPreferowani uczestnicy: studenci ostatnich lat kierunków związanych z:\n– Zarządzaniem i inżynierią produkcji\n– Inżynierią procesową\n– Logistyką\n– Zarządzaniem\n– Automatyką i robotyką\n\nPrzerwa: 1 x 30–45 min (przerwa obiadowa)\n\nGodziny warsztatu pojawią się w najbliższych dniach.",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 300,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: [
      {
        id: "b4cb87fc-b9eb-4d2d-9f5f-9b432c8875e2",
        name: "Zarządzanie i inżynieria produkcji",
      },
      {
        id: "22bb6c39-5ec7-489a-871f-b73a15b5c8ee",
        name: "Inżynieria procesów",
      },
      {
        id: "b4f7cda6-9402-4fa0-b5e2-0cb6dc057645",
        name: "Logistyka",
      },
      {
        id: "8d18b9b7-9f3d-4e63-a1fc-4e5d3c4e2c3a",
        name: "Zarządzanie",
      },
      {
        id: "36a7580a-dabe-4f04-9d1c-7b360dc3731f",
        name: "Automatyka i robotyka",
      },
    ],
    registrationLink: "https://forms.office.com/e/jLyMTRKU78",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "649a0273-d945-414a-8c93-951f16217a98",
    company: {
      id: "56fde7e5-ef45-4a0f-99f1-65cb6b11847b",
      name: "VALEO AUTOSYSTEMY SP. Z O.O.", //"c3"
      logoUrl: "https://www.valeo.com/wp-content/uploads/2022/12/valeo-logo-rvb_600x327_acf_cropped.png",
      websiteUrl: "https://www.valeo.com/pl/polska/",
      shortDescription:
        "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2.",
      longDescription:
        "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2. Valeo zatrudnia obecnie 91 800 pracowników w ponad 32 krajach na całym świecie. Posiadamy 155 zakładów produkcyjnych, 58 centrów badań i rozwoju oraz 15 platform dystrybucyjnych. Firma powstała w 1923 roku pod nazwą SAFF. Kultura korporacyjna Valeo opiera się na dążeniu do doskonałości w produkcji dzięki najwyższemu poziomowi jakości oraz aktywnie stosowanym przez cały personel kluczowym wartościom, takim jak etyka, przejrzystość w działaniu, delegowanie uprawnień, profesjonalizm oraz praca zespołowa. Mając silne poczucie odpowiedzialności społecznej i ekologicznej - Grupa Valeo podpisała deklarację Społecznej Odpowiedzialności Biznesu (CSR). To oznacza, że w swojej działalności wdraża strategię trwałego i zrównoważonego rozwoju dążąc do zachowania spójności celów ekonomicznych, środowiskowych i społecznych. Jako globalna organizacja – Grupa Valeo ma wpisane w swoją filozofię działania także otwarcie na różnorodność, która dotyczy obszarów różnic kulturowych, zdrowotnych, płci oraz pokoleniowych.",
      displayPriority: 3,
    },
    university: {
      id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
      name: "Akademia Górniczo-Hutnicza w Krakowie",
    },
    title: "Step by Step",
    startsAt: "2025-05-29T00:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Step by Step - Narzędzia lean w praktyce przy zarządzaniu firmą. Uczestnicy wcielają się w różne role w symulacji firmy produkcyjnej (dyrektor, logistyk, planista, operator, itp.) . Celem gry jest wygenerowanie zysku finansowego poprzez wdrażanie usprawnień. W ramach ćwiczenia uczestnicy poznają narzędzia Lean Management i będą je mogli wykorzystać w praktyce.\nTermin warsztatu: 28.05 i 29.05\nLiczba prelegentów: 2\nCzas trwania: 5–6 godzin\nOptymalna liczba uczestników: 10\nPreferowani uczestnicy: studenci ostatnich lat kierunków związanych z:\n– Zarządzaniem i inżynierią produkcji\n– Inżynierią procesową\n– Logistyką\n– Zarządzaniem\n– Automatyką i robotyką\n\nPrzerwa: 1 x 30–45 min (przerwa obiadowa)\n\nGodziny warsztatu pojawią się w najbliższych dniach.",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 300,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: [
      {
        id: "b4cb87fc-b9eb-4d2d-9f5f-9b432c8875e2",
        name: "Zarządzanie i inżynieria produkcji",
      },
      {
        id: "22bb6c39-5ec7-489a-871f-b73a15b5c8ee",
        name: "Inżynieria procesów",
      },
      {
        id: "b4f7cda6-9402-4fa0-b5e2-0cb6dc057645",
        name: "Logistyka",
      },
      {
        id: "8d18b9b7-9f3d-4e63-a1fc-4e5d3c4e2c3a",
        name: "Zarządzanie",
      },
      {
        id: "36a7580a-dabe-4f04-9d1c-7b360dc3731f",
        name: "Automatyka i robotyka",
      },
    ],
    registrationLink: "https://forms.office.com/e/jLyMTRKU78",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "cde99e9a-8b72-4c8f-bc29-7e7cf456b890",
    company: {
      id: "b672398a-9564-49fa-8b85-903c487d43c1", //"c5"
      name: "Invest Komfort Spółka Akcyjna Sp. K.",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAm2pMk037gymtnIQ44JUcoZvaL1i_I6x7zg&s",
      websiteUrl: "https://investkomfort.pl/pl",
      shortDescription:
        "Invest Komfort - firma deweloperska tworząca projekty bezkonkurencyjne w swoich segmentach.",
      longDescription:
        "Invest Komfort to trójmiejski deweloper działający od 1995 roku, specjalizujący się w realizacji inwestycji mieszkaniowych i usługowych w prestiżowych lokalizacjach Gdańska, Gdyni i Sopotu, zrealizował ponad 50 projektów obejmujących ponad 7 000 lokali o łącznej powierzchni przekraczającej 468 tys. m².",
      displayPriority: 2,
    },
    university: {
      id: "d9783fc4-0be2-4467-b3f2-8175a3fcb08e",
      name: "Politechnika Gdańska",
    },
    title: "Praca w firmie budowlanej przy realizacji inwestycji mieszkaniowych marki premium",
    startsAt: "2025-05-30T00:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Warsztat „Praca w firmie budowlanej przy realizacji inwestycji mieszkaniowych marki premium” poświęcony jest specyfice pracy na budowie przy realizacjach wysokiej klasy projektów mieszkaniowych.\n\nTermin warsztatu: 30.05/nLiczba prelegentów: 2\nCzas trwania: 2–3 godziny\nBrak ograniczeń liczby uczestników\nPreferowani uczestnicy: studenci kierunku:\n– Budownictwo\n– Konstrukcje Metalowe\n– Drogi (Wydział Inżynierii Lądowej i Środowiska – WILiŚ)\n\nPrzerwa: 15–30 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nGodziny warsztatu pojawią się w najbliższych dniach.",
    address: "Warsztat odbędzie się na uczelni ",
    durationMinutes: 180,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: [
      {
        id: "a1dbb92f-6c3d-4ad3-a4fd-fa1d7b4b2618",
        name: "Budownictwo",
      },
      {
        id: "73a9017a-12e4-4c3b-b80b-1e79b21eb576",
        name: "Konstrukcje Metalowe",
      },
      {
        id: "bf2f3a8b-06a7-49da-90a4-c8b9a8c05313",
        name: "Konstrukcje Drogi",
      },
    ],
    registrationLink: "https://forms.office.com/e/x2r5iJYjC9",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "e1fcde55-1f64-4722-9ae0-08b6bce0e372",
    company: {
      id: "d097c7cd-ba26-4cb0-b4db-dc91cd46578f", //"c6"
      name: "UTC AEROSPACE SYSTEMS WROCŁAW SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      logoUrl: "https://dlapilota.pl/sites/default/files/styles/article_popup/public/dlapilota/images/utc.jpg?itok=GBLBCWRL",
      websiteUrl: "https://www.collinsaerospace.com/who-we-are/about-us/global/europe/poland",
      shortDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego.",
      longDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego. Siedziba firmy znajduje się w Charlotte w Północnej Karolinie, firma zatrudnia 78 000 pracowników w ponad 300 lokalizacjach na całym świecie, a w 2019 r. osiągnęła sprzedaż netto w wysokości 26 mld USD. Collins Aerospace to jedna z czterech firm tworzących Raytheon Technologies Corporation.",
      displayPriority: 3,
    },
    university:
      {
        id: "a22fcf40-9f6e-4e7e-b92e-85b9d4ac6524",
        name: "Politechnika Wrocławska",
      },
    title: "Metodologia Problem Solving",
    startsAt: "2025-06-06T09:00:00+02:00", 
    shortDescription: "",
    longDescription:
      "Warsztat „Metodologia Problem Solving” koncentruje się na przedstawieniu praktycznych metod identyfikacji, analizy i rozwiązywania problemów technicznych i organizacyjnych w środowisku przemysłowym.\n\nTermin warsztatu: 02.06 (9-16)\nLiczba prelegentów: 3\nCzas trwania: 7 godzin\nLiczba uczestników: 20\nPreferowani uczestnicy: studenci IV i V roku kierunków:\n– Lotnictwo\n– Kosmonautyka\n– Mechanika i budowa maszyn\n– Zarządzanie produkcją\n– Materiałoznawstwo\nPrzerwa: 2 przerwy po 30 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 420,
    minYearOfStudy: 4,
    maxYearOfStudy: 5,
    preferableFieldsOfStudy: [
      {
        id: "efa47fd7-7156-459b-8b99-cda8d1328a91",
        name: "Lotnictwo",
      },
      { id: "3cb59c69-9009-4e8b-b4f2-468300f3c2ad",
        name: "Kosmonautyka" },

      { id: "cc517943-d49e-4d35-b52a-bd4b63f1e89",
        name: "Mechanika i budowa maszyn" },

      { id: "8b2fda0f-2f5e-4a0d-a8e4-3d58c90f3763",
        name: "Zarządzanie produkcją" },

      { id: "fce6e7c4-1c02-4e09-bf1d-3289baf7ff70",
        name: "Materiałoznastwo" },
    ],
    registrationLink: "https://forms.office.com/e/N63cVba2Kh",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "1c227e98-d6cf-4a64-b5e9-83356ff3ac5b",
    company: {
      id: "d097c7cd-ba26-4cb0-b4db-dc91cd46578f", //"c6"
      name: "UTC AEROSPACE SYSTEMS WROCŁAW SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      logoUrl: "https://dlapilota.pl/sites/default/files/styles/article_popup/public/dlapilota/images/utc.jpg?itok=GBLBCWRL",
      websiteUrl: "https://www.collinsaerospace.com/who-we-are/about-us/global/europe/poland",
      shortDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego.",
      longDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego. Siedziba firmy znajduje się w Charlotte w Północnej Karolinie, firma zatrudnia 78 000 pracowników w ponad 300 lokalizacjach na całym świecie, a w 2019 r. osiągnęła sprzedaż netto w wysokości 26 mld USD. Collins Aerospace to jedna z czterech firm tworzących Raytheon Technologies Corporation.",
      displayPriority: 3,
    },
    university: 
      {
        id: "d9783fc4-0be2-4467-b3f2-8175a3fcb08e",
        name: "Politechnika Gdańska",
      },
    title: "Metodologia Problem Solving",
    startsAt: "2025-06-02T09:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Warsztat „Metodologia Problem Solving” koncentruje się na przedstawieniu praktycznych metod identyfikacji, analizy i rozwiązywania problemów technicznych i organizacyjnych w środowisku przemysłowym.\n\nTermin warsztatu: 02.06 (9-16)\nLiczba prelegentów: 3\nCzas trwania: 7 godzin\nLiczba uczestników: 20\nPreferowani uczestnicy: studenci IV i V roku kierunków:\n– Lotnictwo\n– Kosmonautyka\n– Mechanika i budowa maszyn\n– Zarządzanie produkcją\n– Materiałoznawstwo\nPrzerwa: 2 przerwy po 30 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 420,
    minYearOfStudy: 4,
    maxYearOfStudy: 5,
    preferableFieldsOfStudy: [
      {
        id: "efa47fd7-7156-459b-8b99-cda8d1328a91",
        name: "Lotnictwo",
      },
      { id: "3cb59c69-9009-4e8b-b4f2-468300f3c2ad",
        name: "Kosmonautyka" },

      { id: "cc517943-d49e-4d35-b52a-bd4b63f1e89",
        name: "Mechanika i budowa maszyn" },

      { id: "8b2fda0f-2f5e-4a0d-a8e4-3d58c90f3763",
        name: "Zarządzanie produkcją" },

      { id: "fce6e7c4-1c02-4e09-bf1d-3289baf7ff70",
        name: "Materiałoznastwo" },
    ],
    registrationLink: "https://forms.office.com/e/x2r5iJYjC9",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "a27a0c3c-9c28-4f0a-bef5-3d008ae393e6",
    company: {
      id: "d097c7cd-ba26-4cb0-b4db-dc91cd46578f", //"c6"
      name: "UTC AEROSPACE SYSTEMS WROCŁAW SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      logoUrl: "https://dlapilota.pl/sites/default/files/styles/article_popup/public/dlapilota/images/utc.jpg?itok=GBLBCWRL",
      websiteUrl: "https://www.collinsaerospace.com/who-we-are/about-us/global/europe/poland",
      shortDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego.",
      longDescription:
        "Collins Aerospace specjalizuje się w konstrukcjach lotniczych, awionice, wnętrzach, systemach mechanicznych, systemach misji oraz systemach zasilania i sterowania, które obsługują klientów z sektorów komercyjnego, regionalnego, biznesowego i wojskowego. Siedziba firmy znajduje się w Charlotte w Północnej Karolinie, firma zatrudnia 78 000 pracowników w ponad 300 lokalizacjach na całym świecie, a w 2019 r. osiągnęła sprzedaż netto w wysokości 26 mld USD. Collins Aerospace to jedna z czterech firm tworzących Raytheon Technologies Corporation.",
      displayPriority: 3,
    },
    university: 
      {
        id: "1e93f7b4-3fc1-4d93-89cb-dffb1c7f8414",
        name: "Politechnika Łódzka",
      },
    title: "Metodologia Problem Solving",
    startsAt: "2025-06-03T09:00:00+02:00", 
    shortDescription: "",
    longDescription:
      "Warsztat „Metodologia Problem Solving” koncentruje się na przedstawieniu praktycznych metod identyfikacji, analizy i rozwiązywania problemów technicznych i organizacyjnych w środowisku przemysłowym.\n\nTermin warsztatu: 02.06 (9-16)\nLiczba prelegentów: 3\nCzas trwania: 7 godzin\nLiczba uczestników: 20\nPreferowani uczestnicy: studenci IV i V roku kierunków:\n– Lotnictwo\n– Kosmonautyka\n– Mechanika i budowa maszyn\n– Zarządzanie produkcją\n– Materiałoznawstwo\nPrzerwa: 2 przerwy po 30 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 420,
    minYearOfStudy: 4,
    maxYearOfStudy: 5,
    preferableFieldsOfStudy: [
      {
        id: "efa47fd7-7156-459b-8b99-cda8d1328a91",
        name: "Lotnictwo",
      },
      { id: "3cb59c69-9009-4e8b-b4f2-468300f3c2ad",
        name: "Kosmonautyka" },

      { id: "cc517943-d49e-4d35-b52a-bd4b63f1e89",
        name: "Mechanika i budowa maszyn" },

      { id: "8b2fda0f-2f5e-4a0d-a8e4-3d58c90f3763",
        name: "Zarządzanie produkcją" },

      { id: "fce6e7c4-1c02-4e09-bf1d-3289baf7ff70",
        name: "Materiałoznastwo" },
    ],
    registrationLink: "https://forms.office.com/e/6jYHLmNtzZ",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "b319c4a2-8e12-4e02-9e3d-fb76451bb9b4",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university: {
      id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
      name: "Akademia Górniczo-Hutnicza w Krakowie",
    },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Stacjonarnie)",
    startsAt: "2025-06-03T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin warsztatu: 03.06.2025, godz. 10:00–13:00 (forma stacjonarna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPrzerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 180,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/jLyMTRKU78",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university:
      {
        id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
        name: "Akademia Górniczo-Hutnicza w Krakowie",
      },
      
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/jLyMTRKU78",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "95edb25b-c487-4337-aa00-0e95fd102ec8",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university: 
      {
        id: "a22fcf40-9f6e-4e7e-b92e-85b9d4ac6524",
        name: "Politechnika Wrocławska",
      },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/N63cVba2Kh",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "116be4ba-043f-429d-9ad7-ef0c1eeb8657",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university:
      {
        id: "d9783fc4-0be2-4467-b3f2-8175a3fcb08e",
        name: "Politechnika Gdańska",
      },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/x2r5iJYjC9",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "11a745e6-0259-4266-af38-918349348e9c",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university:
      {
        id: "8ef06ecb-d91b-4b11-93af-255879f46bc8",
        name: "Politechnika Rzeszowska",
      },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/bn9VXV9dcA",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "09088e92-ec6e-4bf7-8f47-9ec22b2437a9",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university:
      {
        id: "09876543-21ba-4321-a987-654321098765",
        name: "Politechnika Śląska", 
      },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/0BvAs4QuAe",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "3b55f071-b06e-4cf2-95b9-4c09b376a85d",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university: 
      {
        id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
        name: "Politechnika Warszawska", 
      },
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  {
    id: "cfea3e74-4373-4053-938e-621c99a9da39",
    company: {
      id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5", //"c7"
      name: "Emitel S.A.",
      logoUrl: "https://logotypy.net/wp-content/uploads/2023/09/logo-emitel-300x300.jpg",
      websiteUrl: "https://emitel.pl/",
      shortDescription:
        "Emitel S.A. jest głównym operatorem naziemnej sieci radiowo-telewizyjnej w Polsce. Świadczy usługi w zakresie analogowej i cyfrowej emisji naziemnej oraz transmisji sygnałów telewizyjnych i radiowych.",
      longDescription:
        "Dostarczamy kompleksowe rozwiązania telekomunikacyjne, budujemy infrastrukturę sieciową oraz realizujemy usługi bazujące na nowoczesnych systemach łączności bezprzewodowej. Świadczymy także usługi najmu powierzchni na kilkuset obiektach wysokościowych - wieżach i masztach.\nNasze usługi to: Broadcasting i media, Usługi i infrastruktura telekomunikacyjna, Bezpieczeństwo oraz Gospodarka Innowacyjna 4.0.\nNasza siłą jest pełen pasji i zaangażowania Zespół, który tworzą wysokiej klasy specjaliści z obszarów technicznych: radiodyfuzji, teletransmisji, GSM, teleinformatyki, projektowania, utrzymania i nadzoru sieci, zarządzania projektami inwestycyjnymi, jak również specjaliści z obszarów wspierających.\nEmitel jako pracodawca był wielokrotnie wyróżniany w ogólnopolskich konkursach. Zostaliśmy uhonorowani między innymi tytułami Solidnego Pracodawcy, Pracodawcy Przyjaznego Pracownikom, Pracodawcy Godnego Zaufania, Odpowiedzialnego i Przyjaznego Pracodawcy. Jesteśmy dwukrotnym laureatem programu Inwestor w Kapitał Ludzki. Po raz czwarty z rzędu z dumą odebraliśmy certyfikat TOP EMPLOYER POLSKA.\nEmitel z dumą wspiera również szereg inicjatyw społecznych oraz prowadzi projekty w obszarze środowiska naturalnego.",
      displayPriority: 4,
    },
    university: 
      {
        id: "1e93f7b4-3fc1-4d93-89cb-dffb1c7f8414",
        name: "Politechnika Łódzka",
      },
    
    title: "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej. (Zdalnie)",
    startsAt: "2025-05-28T10:00:00+02:00",
    shortDescription: "",
    longDescription:
      "Zjawisko intermodulacji jako źródła zakłóceń we współczesnych systemach radiokomunikacyjnych w kontekście sieci telefonii komórkowej.\n1. Pojęcie intermodulacji – wprowadzenie, zagadnienia ogólne.\n2. Intermodulacje w nieliniowych elementach aktywnych.\n3. Intermodulacje pasywne PIM – gdzie i dlaczego powstają, dlaczego są narastającym problemem dla operatorów telefonii komórkowej, jak je niwelować.\n\nTermin webinaru: 28.05.2025, godz. 10:00–13:00 (forma zdalna)\nLiczba prelegentów: 1\nCzas trwania: 3 godziny\nLiczba uczestników: bez ograniczeń\nPreferowani uczestnicy: studenci kierunków związanych z telekomunikacją, elektroniką, elektrotechniką i informatyką\nPreferowana przerwa: 2 przerwy po 10 minut\nWymagane umiejętności: brak dodatkowych umiejętności wymaganych\n\nPlatforma edukacyjna: Microsoft Teams (wymagana jest znajomość platformy)\nWymagany sprzęt od uczestników: Mikrofon",
    address: "Zdalnie",
    durationMinutes: 120,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/6jYHLmNtzZ",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h6",
    company: {
      id: "56789012-3456-7890-1234-567890123456", //"c8"
      name: "Allegro",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Allegro.pl_sklep.svg/2560px-Allegro.pl_sklep.svg.png",
      websiteUrl: "https://about.allegro.eu/pl",
      shortDescription:
        "Allegro to jedna z największych firm handlowych w Polsce i Europie oraz jedna z 10 największych firm e-commerce na świecie! ",
      longDescription:
        " Allegro powstało w 1999 roku w Poznaniu. Dziś mamy biura także w Warszawie, Toruniu, Krakowie i Wrocławiu. Niedługo także w Katowicach, Łodzi, Lublinie i Gdańsku. Początkowo firma tworzona przez kilka osób znajdowała się w piwnicy hurtowni komputerowej, a pierwsza wersja serwisu mieściła się na jednej dyskietce. To były czasy, kiedy rynek e-commerce w Polsce dopiero raczkował, a Allegro odegrało jedną z głównych ról w jego rozwoju. Od tamtej pory przeszliśmy ogromną metamorfozę: z serwisu aukcyjnego dla hobbystów do najpopularniejszego miejsca internetowych zakupów. Obecnie  jesteśmy jedną z największych firm handlowych w Polsce i Europie oraz znajdujemy się na liście TOP 10 największych firm e-commerce na świecie!\nAktualnie zatrudniamy blisko 4000 osób, z czego niemal połowa to najwyższej klasy specjaliści w obszarze technologii!",
      displayPriority: 2,
    },
    university: {
      id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
      name: "Politechnika Warszawska",
    },
    title: "JetBrains IDE - beyond the shift-shift",
    startsAt: "2025-06-05T17:00:00+02:00",
    shortDescription: "",
    longDescription:
      "JetBrains IDE – beyond the shift-shift\nWarsztat dla osób, które chcą w pełni wykorzystać możliwości środowiska JetBrains. Uczestnicy poznają zaawansowane funkcje, skróty i pluginy, które znacząco przyspieszają pracę z kodem – wszystko poza standardowym „shift-shift”. Spotkanie skierowane jest do studentów programowania, którzy chcą pracować szybciej, efektywniej i bardziej profesjonalnie.\nWymagania: własny laptop z zainstalowanym środowiskiem JetBrains w wersji Community lub Ultimate oraz dobrze by było posiadać umiejętność napisania pętli lub prostej funkcji. (będziemy kodować).",
    address: "Warsztat odbędzie się na uczelni",
    durationMinutes: 90,
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },

  {
    id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q",
    company: {
      id: "67890123-4567-8901-2345-678901234567",
      name: "Philips",
      logoUrl: "https://www.philips.com/c-dam/corporate/en_AA/about/about-us/homepage/global-homepage-thumbnail.jpg",
      websiteUrl: "https://www.philips.pl/",
      shortDescription:
        "Royal Philips jest globalnym liderem w dziedzinie technologii dla sektora ochrony zdrowia.",
      longDescription:
        "Philips to holenderska firma, globalny lider w dziedzinie technologii dla sektora ochrony zdrowia i producent elektroniki użytkowej. Obecnie Philips jest znany z innowacyjnych rozwiązań w dziedzinie zdrowia, oświetlenia, a także elektroniki użytkowej, w tym urządzeń RTV, AGD i sprzętu do pielęgnacji ciała",
      displayPriority: 3,
    },
    university: {
      id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
      name: "Politechnika Warszawska",
    },
    title: "Digitalizacja w służbie zdrowia",
    startsAt: "2025-06-02T09:30:00+02:00",
    shortDescription: "",
    longDescription:
      "Digitalizacja w służbie zdrowia\nWarsztat poświęcony roli nowoczesnych technologii w systemie ochrony zdrowia. Uczestnicy poznają przykłady cyfrowych rozwiązań wspierających lekarzy, pacjentów i administrację – od e-recept po systemy do analizy danych medycznych. Porozmawiamy o korzyściach, wyzwaniach i przyszłości digitalizacji w sektorze medycznym.",
    address: "789 Pine Street, Innovatetown, USA",
    durationMinutes: 120,
    minYearOfStudy: 3,
    maxYearOfStudy: 7,
    preferableFieldsOfStudy: [
      { id: "98765432-1010-9876-5432-109876543210", name: "Inżynieria biomedyczna" },
      { id: "f1c48a84-9cc0-4f75-a14a-2e7f3f740560", name: "Elektronika i telekomunikacja" },
      { id: "9e6762c9-69d2-4ff3-967f-68a4622bce55", name: "Informatyka" },
      { id: "e2b79d3d-b93e-4b5f-9e57-96cdb006bb5e", name: "Automatyka i robotyka" },
      { id: "11121314-1516-1718-1920-212223242526", name: "Biotechnologia" }
    ],
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
    registrationEndsAt: "2025-05-26T23:59:59+02:00",
  },
  
  {
    id: "a7f9c3b2-d1e4-f6g7-h8i9-j0k1l2m3n4o",
    company: {
      id: "56fde7e5-ef45-4a0f-99f1-65cb6b11847b",
      name: "VALEO AUTOSYSTEMY SP. Z O.O.",
      logoUrl: "https://www.valeo.com/wp-content/uploads/2022/12/valeo-logo-rvb_600x327_acf_cropped.png",
      websiteUrl: "https://www.valeo.com/pl/polska/",
      shortDescription:
      "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2.",
      longDescription:
      "Valeo jest niezależną grupą spółek o zasięgu globalnym, której działalność koncentruje się na projektowaniu, produkcji i sprzedaży: komponentów, systemów zintegrowanych i modułów dla pojazdów samochodowych ukierunkowanych głównie na redukcję emisji CO2. Valeo zatrudnia obecnie 91 800 pracowników w ponad 32 krajach na całym świecie. Posiadamy 155 zakładów produkcyjnych, 58 centrów badań i rozwoju oraz 15 platform dystrybucyjnych. Firma powstała w 1923 roku pod nazwą SAFF. Kultura korporacyjna Valeo opiera się na dążeniu do doskonałości w produkcji dzięki najwyższemu poziomowi jakości oraz aktywnie stosowanym przez cały personel kluczowym wartościom, takim jak etyka, przejrzystość w działaniu, delegowanie uprawnień, profesjonalizm oraz praca zespołowa. Mając silne poczucie odpowiedzialności społecznej i ekologicznej - Grupa Valeo podpisała deklarację Społecznej Odpowiedzialności Biznesu (CSR). To oznacza, że w swojej działalności wdraża strategię trwałego i zrównoważonego rozwoju dążąc do zachowania spójności celów ekonomicznych, środowiskowych i społecznych. Jako globalna organizacja – Grupa Valeo ma wpisane w swoją filozofię działania także otwarcie na różnorodność, która dotyczy obszarów różnic kulturowych, zdrowotnych, płci oraz pokoleniowych.",
      displayPriority: 3,
    },
    university: {
      id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
      name: "Akademia Górniczo-Hutnicza w Krakowie",
    },
    title: "Jak skomplikowanym produktem są wycieraczki?",
    status: "PUBLISHED",
    startsAt: "2025-05-28T09:00:00+02:00",
    registrationEndsAt: "2025-05-28T08:00:00+02:00",
    shortDescription: "Cel:\nUczestnicy zrozumieją wymagania stawiane projektantom w branży automotive i poznają wyzwania dla inżynierów.",
    longDescription:
      "Jak skomplikowanym produktem są wycieraczki?\nCel:\nUczestnicy zrozumieją wymagania stawiane projektantom w branży automotive i poznają wyzwania dla inżynierów.\n\nCzas trwania: Od 9 do 13\n\nPrezentacja i warsztaty w podgrupach.\nI. Prezentacja - Valeo na świecie, w Polsce i w Skawinie\nII. Produkt - część warsztatowa\nII 1. Z czego się składa system wycieraczek? (od prostego po bardzo skomplikowany).\nModele wycieraczek. Materiały i technologie używane w automotive.\nII 2. Jak produkt wpływa na kontrybutorów rozwoju produktu, ważne zależności.\nCo nam determinuje projekt systemu wycieraczek? (warunki brzegowe).\nIII. Złożoność produktu, a kompetencje pracowników. Jaki to ma wpływ na strukturę Działu R&D?\nIV. Kompetencje przyszłości i wyzwania branży. Automotive \nregulacje prawne i środowiskowe.\n\nForma: prezentacja, burza mózgów i quizy.\n\nWynik:\nPo warsztacie na AGH każdy z uczestników powinien posiadać zakres wiedzy - co wchodzi w skład systemu wycieraczek, jak skomplikowanie produktu ma wpływ na kompetencje i role potrzebne w organizacji, jakie są tendencje i trendy na rynku.",
    address: "Warsztat odbędzie się na uczelni",
    capacity: 30,
    durationMinutes: 240,
    emailTextCandidate:
      "Dziękujemy za rejestracje na warsztat. Po zakwalifikowaniu otrzymasz oddzielnego maila.",
    emailTextQualified:
      "Gratulację! \n\nZakwalifikowano cię na warsztat. \n\nDo zobaczenia ",
      minYearOfStudy: null,
      maxYearOfStudy: null,
      preferableFieldsOfStudy: null,
      registrationLink: "https://forms.office.com/e/jLyMTRKU78",
  },

  {
    id: "e139f8c4-1d1e-47af-81e7-9dd9ce7040cb",
    company: {
      id: "94a4d02a-59d2-45a3-9830-d3d928a3d89d",
      name: "ORLEN Termika S.A.",
      logoUrl: "https://biznesalert.pl/wp-content/uploads/2025/01/Zdjecie-WhatsApp-2025-01-15-o-12.22.26_5dd7fb99.jpg",
      websiteUrl: "https://termika.orlen.pl/",
      shortDescription: "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od dziewięciu lat nieprzerwanie uznawana za najcenniejszą polską markę.",
      longDescription:
        "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od lat uznawana za najcenniejszą polską markę i jedyną z Polski w rankingu „Fortune 500”; lider krajowych zestawień, wyróżniana za etykę i politykę pracowniczą (Top Employers Polska).",
      displayPriority: 2,
    },
    university: {
      id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
      name: "Politechnika Warszawska",
    },
    title: "Optymalizacja pracy EC Siekierki w czasach transformacji – elastyczność i efektywność",
    status: "PUBLISHED",
    startsAt: "2025-05-28T10:00:00+02:00",
    registrationEndsAt: "2025-05-28T09:00:00+02:00",
    shortDescription: "Warsztat stacjonarny",
    longDescription: "W obliczu zmiennych warunków rynkowych, rosnących kosztów emisji CO2 oraz integracji OZE, kluczowe staje się zwiększenie elastyczności pracy zakładu. Jakie strategie i technologie pozwalają zoptymalizować produkcję w warunkach zmniejszonego udziału węgla i rosnącego udziału gazu oraz ciepła odpadowego? ",
    address: "Rektorska 4",
    capacity: 30,
    durationMinutes: 90,
    emailTextCandidate:
      "Dziękujemy za rejestracje na warsztat. Po zakwalifikowaniu otrzymasz oddzielnego maila.",
    emailTextQualified:
      "Gratulację! \n\nZakwalifikowano cię na warsztat. \n\nDo zobaczenia ",
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
  },

  {
    id: "2b7a5b3d-ae91-4f65-8cd6-2172a6e31ef8",
    company: {
      id: "94a4d02a-59d2-45a3-9830-d3d928a3d89d",
      name: "ORLEN Termika S.A.",
      logoUrl: "https://biznesalert.pl/wp-content/uploads/2025/01/Zdjecie-WhatsApp-2025-01-15-o-12.22.26_5dd7fb99.jpg",
      websiteUrl: "https://termika.orlen.pl/",
      shortDescription: "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od dziewięciu lat nieprzerwanie uznawana za najcenniejszą polską markę.",
      longDescription:
        "Międzynarodowa grupa kapitałowa z branży paliwowo-energetycznej, od lat uznawana za najcenniejszą polską markę i jedyną z Polski w rankingu „Fortune 500”; lider krajowych zestawień, wyróżniana za etykę i politykę pracowniczą (Top Employers Polska).",
      displayPriority: 2,
    },
    university: {
      id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
      name: "Politechnika Warszawska",
    },
    title: "Energetyczna Ekspedycja: Odkrywaj ORLEN Termika",
    status: "PUBLISHED",
    startsAt: "2025-06-06T11:00:00+02:00",
    registrationEndsAt: "2025-06-06T09:00:00+02:00",
    shortDescription: "Warsztat stacjonarny",
    longDescription:
      "",
    address: "Rektorska 4",
    capacity: 30,
    durationMinutes: 180,
    emailTextCandidate:
      "Dziękujemy za rejestracje na warsztat. Po zakwalifikowaniu otrzymasz oddzielnego maila.",
    emailTextQualified:
      "Gratulację! \n\nZakwalifikowano cię na warsztat. \n\nDo zobaczenia ",
    minYearOfStudy: null,
    maxYearOfStudy: null,
    preferableFieldsOfStudy: null,
    registrationLink: "https://forms.office.com/e/LgVGCb9jxT",
  },
];

export function getWorkshopById(workshopId: string): Workshop {
  const result = WORKSHOPS.find((workshop) => workshop.id === workshopId);
  if (!result) throw new Error(`Workshop with id ${workshopId} not found`);

  return result;
}

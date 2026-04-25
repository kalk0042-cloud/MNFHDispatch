const FUNERAL_HOMES = [

  /* ============================================================
     FH0001 — Anatomy Bequest
     ============================================================ */
  {
    id: "FH0001",
    name: "Anatomy Bequest Program",
    city: "Mpls",
    address: "",
    photo: null,
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "corneas@umn.edu"
    ],
  
    phoneMain: "",
    phoneAlt: "",
    didNumber: "612-627-5657",
  
    hours: "Monday–Friday 8:00 am to 4:00 pm",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "corneas@umn.edu",
  
    answerScript: "Anatomy Bequest Program",
  
    flowerRoomHours: "",
    recommendedFlorists: [],
  
    specialInstructions: `
  First calls: Contact Lions Gift of Sight by email at corneas@umn.edu.  
  Scan and forward written first call sheet or type out an email with all relevant information.  
  Use texting or call 612-624-3900 if no confirmation is received.
  
  Urgent messages and obituary confirmations: contact Sarah Paulsen.  
  Emergencies pertaining to Jackson Hall: contact Angie McArthur.
  
  Non‑urgent questions: refer callers to the website or ask them to call back during business hours.  
  They may also call 612‑624‑0921 and leave a voicemail.
  `,
  
    directions: "",
  
    notes: `
  ### Special Instructions
  - Contact Lions Gift of Sight for first calls  
  - Use email or text for confirmations  
  - Contact Sarah Paulsen for urgent messages  
  - Emergencies: contact Angie McArthur  
  - Non‑urgent questions: refer to website or office voicemail  
  
  ### Hours
  Monday–Friday 8:00 am to 4:00 pm
  `,
  
    website: "https://med.umn.edu/anatomy-bequest-program",
    obituaryLink: "",
    phone: "",
    backline: "",
    doorCode: "",
    groupId: "AB",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "AB",
  
    active: true,
    hasMultipleLocations: false,
    hasPetCremation: false
  },
  
  /* ============================================================
     FH0002 — Anderson Funeral Home (PHOTO)
     ============================================================ */
  {
    id: "FH0002",
    name: "Anderson Funeral Home",
    city: "St. Paul",
    address: "1401 N Arcade St. St. Paul, 55106",
    photo: "images/Anderson-Banner.png",
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "emily@andersonfuneralhome.com",
      "info@andersonfuneralhome.com"
    ],
  
    phoneMain: "",
    phoneAlt: "",
    didNumber: "612-627-6084",
  
    hours: "M-F 9-8pm, Sat-Sun 9-3pm",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "info@andersonfuneralhome.com",
  
    answerScript: "Anderson Funeral Home",
  
    flowerRoomHours: "M-F 9am–8pm, Sat–Sun 9am–3pm",
  
    recommendedFlorists: [
      { name: "Evans Floral", phone: "651-774-4544" },
      { name: "St Paul Floral", phone: "651-778-1661" }
    ],
  
    specialInstructions: `
  Text first, call cell if no response.  
  Contact on all calls.  
  Email first calls to info@andersonfuneralhome.com.
  
  If you cannot reach any funeral director and need an urgent removal (house call), send Johnson Williams staff.
  `,
  
    directions: `
  From 35E: Exit Wheelock Parkway/Larpenteur → east → Arcade → right one block.  
  From Hwy 36: South on Hwy 61 → FH on right.
  `,
  
    notes: `
  ### Special Instructions
  - Text first, call if no response  
  - Contact on all calls  
  - Email first calls to info@andersonfuneralhome.com  
  - If unreachable and urgent: send Johnson Williams staff  
  
  ### Directions
  **From 35E:** Wheelock → Arcade  
  **From Hwy 36:** Hwy 61 → FH on right  
  
  ### Florists
  - Evans Floral — 651-774-4544  
  - St Paul Floral — 651-778-1661  
  
  ### Flower Door Hours
  M-F 9am–8pm  
  Sat–Sun 9am–3pm  
  Ring bell if locked
  `,
  
    website: "https://andersonfuneralhome.com/",
    obituaryLink: "https://andersonfuneralhome.com/tribute/all-services/index.html",
    phone: "651.776.2761",
    backline: "651.776.2762",
    doorCode: "",
    groupId: "AND",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "AND",
  
    active: true,
    hasMultipleLocations: false,
    hasPetCremation: false
  },
  
  /* ============================================================
     FH0003 — Atkins Northland
     ============================================================ */
  {
    id: "FH0003",
    name: "Atkins Northland",
    city: "Cloquet",
    address: "801 14th St Cloquet MN 55720",
    photo: null,
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "sophie.stone@atkinsnorthlandfuneralhome.com",
      "michael.dilley@csmcremation.com",
      "veronica.henschel@atkinsnorthlandfuneralhome.com"
    ],
  
    phoneMain: "218-879-7184",
    phoneAlt: "218-879-0133",
    didNumber: "612-627-5660",
  
    hours: "M-F 9-4pm",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "",
  
    answerScript: `
  “Atkins Northland Funeral Home, my name is ____, how may I help you?”  
  “Fur-Ever Loved Pet Cremation Services, my name is ____, how may I help you?”
  `,
  
    flowerRoomHours: "",
    recommendedFlorists: [
      { name: "Skutevik’s Floral", phone: "218-879-6177" }
    ],
  
    specialInstructions: `
  Contact by text for urgent messages.  
  Text and call with first calls.  
  Do NOT contact Fur‑Ever Loved after 10pm.
  `,
  
    directions: `
  Atkins-Northland: I‑35 → Hwy 33 → Washington Ave → 14th St.  
  Fur‑Ever Loved: I‑35 → MN Hwy 45 → Scanlon Way.
  `,
  
    notes: `
  ### Special Instructions
  - Text for urgent messages  
  - Text + call for first calls  
  - Do NOT contact Fur‑Ever Loved after 10pm  
  
  ### Directions
  Atkins-Northland: Hwy 33 → Washington Ave → 14th St  
  Fur‑Ever Loved: Hwy 45 → Scanlon Way  
  
  ### Florist
  - Skutevik’s Floral — 218-879-6177
  `,
  
    website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/cloquet/atkins-northland-funeral-home/mnanf.html",
    obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=dde3f72a-069d-11ef-b8a1-16dad070d26b",
    phone: "218.879.7184",
    backline: "",
    doorCode: "",
    groupId: "CMSD",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "CMSD",
  
    active: true,
    hasMultipleLocations: true,
    hasPetCremation: true
  },
  
  /* ============================================================
     FH0004 — Ballard Sunder Jordan (PHOTO)
     ============================================================ */
  {
    id: "FH0004",
    name: "Ballard Sunder – Jordan",
    city: "Jordan",
    address: "104 1st St. W Jordan, MN",
    photo: "images/BS-logo-new-7da531b0-1920w.webp",
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "office@ballardsunderfuneral.com"
    ],
  
    phoneMain: "952.492.2818",
    phoneAlt: "612.789.3536",
    didNumber: "612-627-5620",
  
    hours: "",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "office@ballardsunderfuneral.com",
  
    answerScript: "Ballard Sunder Funeral and Cremation",
  
    flowerRoomHours: "",
    recommendedFlorists: [
      { name: "The Vinery", phone: "952-492-5222" },
      { name: "Stems and Vines", phone: "952-440-3200" },
      { name: "Pearson Florists", phone: "952-445-4344" },
      { name: "Shakopee Florist", phone: "952-445-4344" }
    ],
  
    specialInstructions: `
  Contact on all calls.  
  Email first calls.  
  Use official answer script.
  `,
  
    directions: `
  Jordan Chapel: Hwy 169 → Hwy 21 → 1st St → Warner.
  `,
  
    notes: `
  ### Special Instructions
  - Contact on all calls  
  - Email first calls  
  - Use official answer script  
  
  ### Directions
  Hwy 169 → Hwy 21 → 1st St → Warner  
  
  ### Florists
  - The Vinery — 952-492-5222  
  - Stems and Vines — 952-440-3200  
  - Pearson Florists — 952-445-4344  
  - Shakopee Florist — 952-445-4344
  `,
  
    website: "https://www.ballardsunderfuneral.com/",
    obituaryLink: "https://www.ballardsunderfuneral.com/obituaries",
    phone: "952.492.2818",
    backline: "612.789.3536",
    doorCode: "",
    groupId: "BSFH",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "BSFH",
  
    active: true,
    hasMultipleLocations: true,
    hasPetCremation: false
  },
  
  /* ============================================================
     FH0005 — Ballard Sunder Prior Lake (PHOTO)
     ============================================================ */
  {
    id: "FH0005",
    name: "Ballard Sunder – Prior Lake",
    city: "Prior Lake",
    address: "4565 Pleasant St. SE Prior Lake",
    photo: "images/BS-logo-new-7da531b0-1920w.webp",
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "office@ballardsunderfuneral.com"
    ],
  
    phoneMain: "952.447.2633",
    phoneAlt: "952.448.3772",
    didNumber: "612-627-5620",
  
    hours: "",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "office@ballardsunderfuneral.com",
  
    answerScript: "Ballard Sunder Funeral and Cremation",
  
    flowerRoomHours: "",
    recommendedFlorists: [
      { name: "The Vinery", phone: "952-492-5222" },
      { name: "Stems and Vines", phone: "952-440-3200" },
      { name: "Pearson Florists", phone: "952-445-4344" },
      { name: "Shakopee Florist", phone: "952-445-4344" }
    ],
  
    specialInstructions: `
  Contact on all calls.  
  Email first calls.  
  Use official answer script.
  `,
  
    directions: `
  Prior Lake Chapel: Hwy 13 → Pleasant St SE → FH on left.
  `,
  
    notes: `
  ### Special Instructions
  - Contact on all calls  
  - Email first calls  
  - Use official answer script  
  
  ### Directions
  Hwy 13 → Pleasant St SE → FH on left  
  
  ### Florists
  - The Vinery — 952-492-5222  
  - Stems and Vines — 952-440-3200  
  - Pearson Florists — 952-445-4344  
  - Shakopee Florist — 952-445-4344
  `,
      website: "https://www.ballardsunderfuneral.com/",
    obituaryLink: "https://www.ballardsunderfuneral.com/obituaries",
    phone: "952.447.2633",
    backline: "952.448.3772",
    doorCode: "",
    groupId: "BSFH",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "BSFH",
  
    active: true,
    hasMultipleLocations: true,
    hasPetCremation: false
  },
  
  /* ============================================================
     FH0006 — Ballard Sunder Shakopee (PHOTO)
     ============================================================ */
  {
    id: "FH0006",
    name: "Ballard Sunder – Shakopee",
    city: "Shakopee",
    address: "833 Marschall Rd Shakopee MN",
    photo: "images/BS-logo-new-7da531b0-1920w.webp",
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "office@ballardsunderfuneral.com"
    ],
  
    phoneMain: "952.445.1202",
    phoneAlt: "",
    didNumber: "612-627-5620",
  
    hours: "",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "office@ballardsunderfuneral.com",
  
    answerScript: "Ballard Sunder Funeral and Cremation",
  
    flowerRoomHours: "",
    recommendedFlorists: [
      { name: "The Vinery", phone: "952-492-5222" },
      { name: "Stems and Vines", phone: "952-440-3200" },
      { name: "Pearson Florists", phone: "952-445-4344" },
      { name: "Shakopee Florist", phone: "952-445-4344" }
    ],
  
    specialInstructions: `
  Contact on all calls.  
  Email first calls.  
  Use official answer script.
  `,
  
    directions: `
  Shakopee Chapel: Hwy 169 → Marschall Rd → FH on right.
  `,
  
    notes: `
  ### Special Instructions
  - Contact on all calls  
  - Email first calls  
  - Use official answer script  
  
  ### Directions
  Hwy 169 → Marschall Rd → FH on right  
  
  ### Florists
  - The Vinery — 952-492-5222  
  - Stems and Vines — 952-440-3200  
  - Pearson Florists — 952-445-4344  
  - Shakopee Florist — 952-445-4344
  `,
  
    website: "https://www.ballardsunderfuneral.com/",
    obituaryLink: "https://www.ballardsunderfuneral.com/obituaries",
    phone: "952.445.1202",
    backline: "",
    doorCode: "",
    groupId: "BSFH",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "BSFH",
  
    active: true,
    hasMultipleLocations: true,
    hasPetCremation: false
  },
  
  /* ============================================================
     FH0007 — Bell Bros
     ============================================================ */
  {
    id: "FH0007",
    name: "Bell Brothers Jarvi Dowd",
    city: "Duluth",
    address: "925 E 4th St Duluth",
    photo: null,
  
    emails: [
      "AKALK2013@GMAIL.COM",
      "dispatch@csmcremation.com"
    ],
  
    phoneMain: "218.722.5131",
    phoneAlt: "",
    didNumber: "612-627-6077",
  
    hours: "M-F 9-4:30pm",
    contactOnAllCalls: true,
    firstCallInstructionsEmail: "billmanhuntfc@gmail.com",
  
    answerScript: "Bell Brothers Jarvi Dowd Funeral Home",
  
    flowerRoomHours: "M-F 9am–4:30pm",
  
    recommendedFlorists: [
      { name: "Sam’s Florist", phone: "218-628-1091" }
    ],
  
    specialInstructions: `
  Same on-call as Cremation Society of Minnesota – Duluth.  
  Specify which location the message is for.
  `,
  
    directions: `
  2 blocks up from St Luke’s Hospital.  
  I‑35 → Mesabe Ave → 4th St → 10th Ave.
  `,
  
    notes: `
  ### Special Instructions
  - Same on-call as CSM Duluth  
  - Specify location when calling/texting  
  
  ### Directions
  I‑35 → Mesabe Ave → 4th St → 10th Ave  
  
  ### Florist
  - Sam’s Florist — 218-628-1091
  `,
  
    website: "",
    obituaryLink: "",
    phone: "218.722.5131",
    backline: "",
    doorCode: "",
    groupId: "BELL",
    locationFolderId: "",
    needsCoverage: true,
    chapelBranch: "BELL",
  
    active: true,
    hasMultipleLocations: false,
    hasPetCremation: false
  },
  
    
    /* ============================================================
       FH0008 — Bertas
       ============================================================ */
       {
        id: "FH0008",
        name: "Bertas Funeral Home",
        city: "Chaska",
        address: "200 W 3rd St Chaska 55318",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "bertasfuneralhome@gmail.com"
        ],
      
        phoneMain: "952.448.2137",
        phoneAlt: "952.448.3772",
        didNumber: "612-627-5659",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "bertasfuneralhome@gmail.com",
      
        answerScript: "Bertas Funeral Home",
      
        flowerRoomHours: "Side door always open (florists only)",
      
        recommendedFlorists: [
          { name: "Chanhassen Floral", phone: "952-949-2742" },
          { name: "Victoria Rose", phone: "952-448-6691" }
        ],
      
        specialInstructions: `
      Side door always open — florists only.  
      If Matt cannot be reached for a first call, contact McNearney Schmidt on-call.
      `,
      
        directions: `
      Corner of 3rd and Pine in downtown Chaska, one block west of Hwy 41.  
      North: Hwy 7 or Hwy 5 → Hwy 41 → 3rd St → right → one block west.  
      South: Hwy 169 → Hwy 41 → left on 3rd St → one block.  
      East: 494 W → 212 W → Hwy 41 S → right → one block west.  
      West: 212 E → Hwy 41 S → right → one block west.
      `,
      
        notes: `
      ### Special Instructions
      - Side door always open (florists only)  
      - If Matt cannot be reached: contact McNearney Schmidt on-call  
      
      ### Directions
      Corner of 3rd & Pine, one block west of Hwy 41  
      
      ### Florists
      - Chanhassen Floral — 952-949-2742  
      - Victoria Rose — 952-448-6691
      `,
      
        website: "https://www.bertasfh.com/",
        obituaryLink: "https://www.bertasfh.com/obits",
        phone: "952.448.2137",
        backline: "952.448.3772",
        doorCode: "side door always open",
        groupId: "BILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "BILL",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0009",
        name: "Billman Hunt Funeral Home",
        city: "Minneapolis",
        address: "2701 Central Ave NE Mpls 55418",
        photo: "images/80481-blp-logo-ks.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "billmanhuntfc@gmail.com"
        ],
      
        phoneMain: "612.789.3535",
        phoneAlt: "612.789.3536",
        didNumber: "612-627-5674",
      
        hours: "M-F 9-5, Sat 9-12",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "billmanhuntfc@gmail.com",
      
        answerScript: "Billman Hunt Funeral Home",
      
        flowerRoomHours: "M-F 9-5, Sat & Sun 9-12",
      
        recommendedFlorists: [
          { name: "Chenowith Floral", phone: "651-636-4070" },
          { name: "Pletcher’s Floral", phone: "651-633-6666" },
          { name: "Schaaf Floral", phone: "763-571-4600" }
        ],
      
        specialInstructions: `
      Call FH first for weekend flower delivery.  
      Leave at Walgreens only in emergencies.  
      Email first calls to billmanhuntfc@gmail.com.  
      Contact on all calls.
      `,
      
        directions: `
      Take Hwy 35W → Johnson St exit → 27th St → left.  
      FH is at the bottom of the hill, 3 miles south of 694 on Central.
      `,
      
        notes: `
      ### Special Instructions
      - Call FH first for weekend flower delivery  
      - Walgreens drop only in emergencies  
      - Email first calls to billmanhuntfc@gmail.com  
      - Contact on all calls  
      
      ### Directions
      35W → Johnson St → 27th St → FH at bottom of hill  
      
      ### Florists
      - Chenowith Floral — 651-636-4070  
      - Pletcher’s Floral — 651-633-6666  
      - Schaaf Floral — 763-571-4600  
      
      ### Flower Room Hours
      M-F 9–5  
      Sat–Sun 9–12
      `,
      
        website: "https://www.billmanhuntfuneralchapel.com/",
        obituaryLink: "https://www.billmanhuntfuneralchapel.com/listings",
        phone: "612.789.3535",
        backline: "612.789.3536",
        doorCode: "",
        groupId: "BHFH",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "BHFH",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0010",
        name: "Brooks Funeral Home",
        city: "St. Paul",
        address: "862 Concordia Ave St. Paul 55104",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "margretbrooks862@gmail.com"
        ],
      
        phoneMain: "651.228.1935",
        phoneAlt: "",
        didNumber: "612-627-5639",
      
        hours: "M-F 9-5, Sat & Sun 10-3:30pm",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "margaretbrooks862@gmail.com",
      
        answerScript: null,
      
        flowerRoomHours: "M-F 9-4:30pm, Sat & Sun 10-3:30pm",
      
        recommendedFlorists: [
          { name: "Martha’s Gardens", phone: "651-696-2993" },
          { name: "Soderberg’s Floral", phone: "612-724-3606" }
        ],
      
        specialInstructions: `
      Urgent only – text first, call if no response.  
      After 4:30pm hold non‑urgent messages in Brooks box.  
      Email first calls to margaretbrooks862@gmail.com.
      `,
      
        directions: `
      Corner of Concordia Ave & N Victoria St.
      `,
      
        notes: `
      ### Special Instructions
      - Urgent only: text, then call  
      - After 4:30pm: hold non‑urgent messages  
      - Email first calls to Margaret  
      
      ### Directions
      Corner of Concordia & N Victoria  
      
      ### Florists
      - Martha’s Gardens — 651-696-2993  
      - Soderberg’s Floral — 612-724-3606
      `,
      
        website: "https://www.brooksfuneralhomemn.com/",
        obituaryLink: "",
        phone: "651.228.1935",
        backline: "",
        doorCode: "",
        groupId: "BROOK",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "BROOK",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0011",
        name: "Carey Funeral Home",
        city: "Minneapolis, St Paul",
        address: "",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM"
        ],
      
        phoneMain: "",
        phoneAlt: "",
        didNumber: "",
      
        hours: "",
        contactOnAllCalls: false,
        firstCallInstructionsEmail: "",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: "",
        directions: "",
      
        notes: `
      No additional information provided.
      `,
      
        website: "",
        obituaryLink: "",
        phone: "",
        backline: "",
        doorCode: "",
        groupId: "",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "",
      
        active: false,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0013",
        name: "Cremation Society of Minnesota – Minneapolis",
        city: "Minneapolis",
        address: "4343 Nicollet Ave S MPLS",
        photo: "images/Header-CMS-Logo.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "dispatch@csmcremation.com"
        ],
      
        phoneMain: "612-825-2435",
        phoneAlt: "",
        didNumber: "612-627-6071",
      
        hours: "M-F 9-3:30pm, Sat/Sun by appointment",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "dispatch@csmcremation.com",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: `
      Scan and email first calls to dispatch@csmcremation.com.  
      If director unreachable: Allison C → Bob → Jay McDaniel.  
      Pet Cremation Services of MN: 952-925-1234.
      `,
      
        directions: `
      35W → 46th St → Nicollet Ave → FH on right.
      `,
      
        notes: `
      ### Special Instructions
      - Scan & email first calls  
      - Backup contacts: Allison C → Bob → Jay McDaniel  
      - Pet Cremation Services: 952-925-1234  
      
      ### Directions
      35W → 46th St → Nicollet Ave
      `,
      
        website: "https://cremationsocietyofmn.com/",
        obituaryLink: "https://cremationsocietyofmn.com/tribute/all-services/index.html",
        phone: "612.825.2435",
        backline: "",
        doorCode: "",
        groupId: "CSM",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "CSM",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: true
      },
      {
        id: "FH0014",
        name: "Cremation Society of Minnesota – Brooklyn Park",
        city: "Brooklyn Park",
        address: "7835 Brooklyn Blvd Brooklyn Park",
        photo: "images/Header-CMS-Logo.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "dispatch@csmcremation.com"
        ],
      
        phoneMain: "763-560-3100",
        phoneAlt: "",
        didNumber: "612-627-6071",
      
        hours: "M-F 9-3:30pm, Sat/Sun by appointment",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "dispatch@csmcremation.com",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: `
      Scan and email first calls to dispatch@csmcremation.com.  
      If director unreachable: Allison C → Bob → Jay McDaniel.
      `,
      
        directions: `
      35W → 694 → County Rd 81 → Brooklyn Blvd → FH on right.
      `,
      
        notes: `
      ### Special Instructions
      - Scan & email first calls  
      - Backup contacts: Allison C → Bob → Jay McDaniel  
      
      ### Directions
      35W → 694 → County Rd 81 → Brooklyn Blvd → FH on right
      `,
      
        website: "https://cremationsocietyofmn.com/",
        obituaryLink: "https://cremationsocietyofmn.com/tribute/all-services/index.html",
        phone: "763.560.3100",
        backline: "",
        doorCode: "",
        groupId: "CSM",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "CSM",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: true
      },
      {
        id: "FH0015",
        name: "Cremation Society of Minnesota – Duluth",
        city: "Duluth",
        address: "4100 Grand Ave Duluth",
        photo: "images/Header-CMS-Logo.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "dispatch@csmcremation.com"
        ],
      
        phoneMain: "218-624-5200",
        phoneAlt: "",
        didNumber: "612-627-6071",
      
        hours: "M-F 9-3:30pm, Sat/Sun by appointment",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "dispatch@csmcremation.com",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: `
      Scan and email first calls to dispatch@csmcremation.com.  
      If director unreachable: Allison C → Bob → Jay McDaniel.
      `,
      
        directions: `
      Grand Ave, Duluth.
      `,
      
        notes: `
      ### Special Instructions
      - Scan & email first calls  
      - Backup contacts: Allison C → Bob → Jay McDaniel  
      
      ### Directions
      Grand Ave, Duluth
      `,
      
        website: "https://cremationsocietyofmn.com/",
        obituaryLink: "https://cremationsocietyofmn.com/tribute/all-services/index.html",
        phone: "218.624.5200",
        backline: "",
        doorCode: "",
        groupId: "CSMD",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "CSMD",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: true
      },
      {
        id: "FH0016",
        name: "Cremation Society of Minnesota – Edina",
        city: "Edina",
        address: "7100 France Ave Edina",
        photo: "images/Header-CMS-Logo.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "dispatch@csmcremation.com"
        ],
      
        phoneMain: "952-924-4100",
        phoneAlt: "",
        didNumber: "612-627-6071",
      
        hours: "M-F 9-3:30pm, Sat/Sun by appointment",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "dispatch@csmcremation.com",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: `
      Scan and email first calls to dispatch@csmcremation.com.  
      If director unreachable: Allison C → Bob → Jay McDaniel.
      `,
      
        directions: `
      494 → France Ave → FH on left.
      `,
      
        notes: `
      ### Special Instructions
      - Scan & email first calls  
      - Backup contacts: Allison C → Bob → Jay McDaniel  
      
      ### Directions
      494 → France Ave → FH on left
      `,
      
        website: "https://cremationsocietyofmn.com/",
        obituaryLink: "https://cremationsocietyofmn.com/tribute/all-services/index.html",
        phone: "952.924.4100",
        backline: "",
        doorCode: "",
        groupId: "CSM",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "CSM",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: true
      },
      {
        id: "FH0017",
        name: "Cremation Society of Minnesota – St. Paul",
        city: "St. Paul",
        address: "1979 Old Hudson Road St. Paul",
        photo: "images/Header-CMS-Logo.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "dispatch@csmcremation.com"
        ],
      
        phoneMain: "651-789-0404",
        phoneAlt: "",
        didNumber: "612-627-6071",
      
        hours: "M-F 9-3:30pm, Sat/Sun by appointment",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "dispatch@csmcremation.com",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: `
      Scan and email first calls to dispatch@csmcremation.com.  
      If director unreachable: Allison C → Bob → Jay McDaniel.
      `,
      
        directions: `
      I94 → Ruth St → Old Hudson Rd → FH on right.
      `,
      
        notes: `
      ### Special Instructions
      - Scan & email first calls  
      - Backup contacts: Allison C → Bob → Jay McDaniel  
      
      ### Directions
      I94 → Ruth St → Old Hudson Rd → FH on right
      `,
      
        website: "https://cremationsocietyofmn.com/",
        obituaryLink: "https://cremationsocietyofmn.com/tribute/all-services/index.html",
        phone: "651.789.0404",
        backline: "",
        doorCode: "",
        groupId: "CSM",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "CSM",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: true
      },
      {
        id: "FH0018",
        name: "Dare’s Funeral Home",
        city: "Elk River",
        address: "805 Main St Elk River 55330",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "awichman@ohalloranmurphy.com",
          "cfonder@ohalloranmurphy.com",
          "cguerri@ohalloranmurphy.com",
          "eseterstrom@ohalloranmurphy.com",
          "jsteenson@ohalloranmurphy.com",
          "kkittock@ohalloranmurphy.com",
          "kleistico@ohalloranmurphy.com"
        ],
      
        phoneMain: "763.441.1212",
        phoneAlt: "763.441.4820",
        didNumber: "612-627-6082",
      
        hours: "M-F 8:30-4:30pm, Sat 8-12, Sun 9-12",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: null,
      
        flowerRoomHours: "M-F 8:30-4:30, Sat 8-12, Sun 9-12",
      
        recommendedFlorists: [
          { name: "Elk River Floral", phone: "763-441-3950" },
          { name: "101 Market", phone: "763-441-4487" },
          { name: "Flowers Plus", phone: "763-441-2598" }
        ],
      
        specialInstructions: `
      Owned by O’Halloran family.  
      RMC/OHM directors may be on call.  
      Scan & email first calls to all listed addresses.  
      Alarm code: “hearse”.
      `,
      
        directions: `
      2 blocks west of Hwy 10 on Main St.  
      From I94: Rogers → 101 North → Elk River → Hwy 10 West → Main St.
      `,
      
        notes: `
      ### Special Instructions
      - Owned by O’Halloran family  
      - RMC/OHM directors may be on call  
      - Scan & email first calls to all listed addresses  
      - Alarm code: "hearse"  
      
      ### Florists
      - Elk River Floral — 763-441-3950  
      - 101 Market — 763-441-4487  
      - Flowers Plus — 763-441-2598
      `,
      
        website: "https://www.daresfuneralservice.com/listings",
        obituaryLink: "https://www.daresfuneralservice.com/listings",
        phone: "763.441.1212",
        backline: "763.441.4820",
        doorCode: "Alarm code hearse",
        groupId: "DPG",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "DPG",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0019",
        name: "David Lee Funeral Home",
        city: "Wayzata",
        address: "1220 East Wayzata Blvd Wayzata MN 55391",
        photo: "images/DavidLee.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "jason@davidleefuneralhome.com",
          "mark@davidleefuneralhome.com"
        ],
      
        phoneMain: "952.473.5577",
        phoneAlt: "952.767.0719",
        didNumber: "612-627-5653",
      
        hours: "M-F open until dusk, Sat 9-11am",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "jason@davidleefuneralhome.com",
      
        answerScript: "David Lee Funeral Home",
      
        flowerRoomHours: "M-F until dusk, Sat 9-11am, Sun closed",
      
        recommendedFlorists: [
          { name: "Bonnie Keller", phone: "763-473-6462" }
        ],
      
        specialInstructions: `
      Contact on all calls.  
      Email first calls to Jason and Mark.
      `,
      
        directions: `
      394 → 101 S/Wayzata Blvd → right → FH is 2 blocks down on left across from Lunds.
      `,
      
        notes: `
      ### Special Instructions
      - Contact on all calls  
      - Email first calls to Jason & Mark  
      
      ### Flower Room
      - M-F until dusk  
      - Sat 9–11am  
      - Sun closed  
      
      ### Florist
      - Bonnie Keller — 763-473-6462
      `,
      
        website: "https://www.davidleefuneralhome.com/",
        obituaryLink: "https://www.davidleefuneralhome.com/obituaries/obituary-listings?page=1",
        phone: "952.473.5577",
        backline: "952.767.0719",
        doorCode: "",
        groupId: "DLEE",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "DLEE",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0020",
        name: "Evans Nordby Funeral Home – Brooklyn Center",
        city: "Brooklyn Center",
        address: "6000 Brooklyn Blvd Brooklyn Center",
        photo: "images/EvansNordby.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "brittney@evansnordby.com",
          "chelsea@evansnordby.com",
          "mike@evansnordby.com",
          "rachel@evansnordby.com",
          "tina@evansnordby.com"
        ],
      
        phoneMain: "763.533.3000",
        phoneAlt: "763.441.4820",
        didNumber: "612-627-5624",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: "Evans Nordby Funeral Home",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "Fairs Floral", phone: "763-424-6113" }
        ],
      
        specialInstructions: `
      Contact on all calls.  
      Email first calls to director on call.  
      Notify on-call for flower delivery.
      `,
      
        directions: `
      1 mile south of 694, 1 mile north of Hwy 100 on Brooklyn Blvd.  
      Near Brookdale Center.
      `,
      
        notes: `
      ### Special Instructions
      - Contact on all calls  
      - Email first calls to director on call  
      - Notify on-call for flower delivery  
      
      ### Florist
      - Fairs Floral — 763-424-6113
      `,
      
        website: "https://www.evansnordby.com/",
        obituaryLink: "https://www.evansnordby.com/obituaries",
        phone: "763.533.3000",
        backline: "763.441.4820",
        doorCode: "",
        groupId: "EVNO",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "EVNO",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0021",
        name: "Evans Nordby Funeral Home – Osseo",
        city: "Osseo",
        address: "34 2nd St NE Osseo",
        photo: "images/EvansNordby.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "brittney@evansnordby.com",
          "chelsea@evansnordby.com",
          "mike@evansnordby.com",
          "rachel@evansnordby.com",
          "tina@evansnordby.com"
        ],
      
        phoneMain: "763.424.4000",
        phoneAlt: "7634244004",
        didNumber: "612-627-5624",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: "Evans Nordby Funeral Home",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "Fairs Floral", phone: "763-424-6113" }
        ],
      
        specialInstructions: `
      Contact on all calls.  
      Email first calls to director on call.  
      Notify on-call for flower delivery.
      `,
      
        directions: `
      Hwy 169 → Hwy 81 → Central Ave → 2nd St NE → FH behind Holiday Gas Station.
      `,
      
        notes: `
      ### Special Instructions
      - Contact on all calls  
      - Email first calls to director on call  
      - Notify on-call for flower delivery  
      
      ### Florist
      - Fairs Floral — 763-424-6113
      `,
      
        website: "https://www.evansnordby.com/",
        obituaryLink: "https://www.evansnordby.com/obituaries",
        phone: "763.424.4000",
        backline: "7634244004",
        doorCode: "",
        groupId: "EVNO",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "EVNO",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0022",
        name: "JWFCS",
        city: "St. Paul",
        address: "",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "answeringservice@jwfuneralcars.com"
        ],
      
        phoneMain: "763.533.3001",
        phoneAlt: "",
        didNumber: "",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: "",
        directions: "",
      
        notes: `
      No additional information provided.
      `,
      
        website: "",
        obituaryLink: "",
        phone: "763.533.3001",
        backline: "",
        doorCode: "",
        groupId: "JWFCS",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "JWFCS",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: false
      },
      {
        id: "FH0023",
        name: "Spielman Mortuary",
        city: "St. Paul",
        address: "344 University Ave W, St Paul, MN 55103",
        photo: "images/Willwerscheid.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@willwerscheid.com"
        ],
      
        phoneMain: "(651) 237-4799",
        phoneAlt: "763.424.4004",
        didNumber: "612-627-6075",
      
        hours: "M-F 9-5",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@willwerscheid.com",
      
        answerScript: "Funeral home — determine location",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "A Johnson & Sons", phone: "651-698-6000" },
          { name: "Hermes Floral", phone: "651-646-7135" }
        ],
      
        specialInstructions: `
      On-call director is shared with Willwerscheid, Twin Cities Cremation, and EcremationMN.  
      Email first calls and non-urgent messages to info@willwerscheid.com.
      `,
      
        directions: `
      1 block east of Western Avenue.
      `,
      
        notes: `
      ### Special Instructions
      - Shared on-call director  
      - Email first calls to info@willwerscheid.com  
      
      ### Florists
      - A Johnson & Sons — 651-698-6000  
      - Hermes Floral — 651-646-7135
      `,
      
        website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/st-paul/willwerscheid-funeral-home-cremation-grand-avenue/mnwga.html",
        obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=de4915d8-069d-11ef-b8a1-16dad070d26b",
        phone: "(651) 237-4799",
        backline: "763.424.4004",
        doorCode: "",
        groupId: "WILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "WILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0024",
        name: "Twin Cities Cremation",
        city: "St. Paul",
        address: "344 University Ave W, St Paul, MN 55103",
        photo: "images/Willwerscheid.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@willwersheid.com"
        ],
      
        phoneMain: "(651) 237-5056",
        phoneAlt: "",
        didNumber: "612-627-6075",
      
        hours: "M-F 9-5",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@willwerscheid.com",
      
        answerScript: "Funeral home — determine location",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "A Johnson & Sons", phone: "651-698-6000" },
          { name: "Hermes Floral", phone: "651-646-7135" }
        ],
      
        specialInstructions: `
      Shared on-call director with Willwerscheid, Spielman, and EcremationMN.
      `,
      
        directions: `
      1 block east of Western Avenue.
      `,
      
        notes: `
      ### Special Instructions
      - Shared on-call director  
      - Email first calls to info@willwerscheid.com  
      
      ### Florists
      - A Johnson & Sons — 651-698-6000  
      - Hermes Floral — 651-646-7135
      `,
      
        website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/st-paul/willwerscheid-funeral-home-cremation-grand-avenue/mnwga.html",
        obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=de4915d8-069d-11ef-b8a1-16dad070d26b",
        phone: "(651) 237-5056",
        backline: "",
        doorCode: "",
        groupId: "WILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "WILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0025",
        name: "EcremationMN",
        city: "St. Paul",
        address: "344 University Ave W St. Paul 55103",
        photo: "images/Willwerscheid.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@willwersheid.com"
        ],
      
        phoneMain: "651.237.4804",
        phoneAlt: "",
        didNumber: "612-627-6075",
      
        hours: "M-F 9-5",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@willwerscheid.com",
      
        answerScript: "Funeral home — determine location",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "A Johnson & Sons", phone: "651-698-6000" },
          { name: "Hermes Floral", phone: "651-646-7135" }
        ],
      
        specialInstructions: `
      Shared on-call director with Willwerscheid, Spielman, and Twin Cities Cremation.
      `,
      
        directions: `
      1 block east of Western Avenue.
      `,
      
        notes: `
      ### Special Instructions
      - Shared on-call director  
      - Email first calls to info@willwerscheid.com  
      
      ### Florists
      - A Johnson & Sons — 651-698-6000  
      - Hermes Floral — 651-646-7135
      `,
      
      
        website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/st-paul/willwerscheid-funeral-home-cremation-grand-avenue/mnwga.html",
        obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=de4915d8-069d-11ef-b8a1-16dad070d26b",
        phone: "651.237.4804",
        backline: "",
        doorCode: "",
        groupId: "WILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "WILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0025",
        name: "EcremationMN",
        city: "St. Paul",
        address: "344 University Ave W St. Paul 55103",
        photo: "images/Willwerscheid.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@willwersheid.com"
        ],
      
        phoneMain: "651.237.4804",
        phoneAlt: "",
        didNumber: "612-627-6075",
      
        hours: "M-F 9-5",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@willwerscheid.com",
      
        answerScript: "Funeral home — determine location",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "A Johnson & Sons", phone: "651-698-6000" },
          { name: "Hermes Floral", phone: "651-646-7135" }
        ],
      
        specialInstructions: `
      Shared on-call director with Willwerscheid, Spielman, and Twin Cities Cremation.
      `,
      
        directions: `
      1 block east of Western Avenue.
      `,
      
        notes: `
      ### Special Instructions
      - Shared on-call director  
      - Email first calls to info@willwerscheid.com  
      
      ### Florists
      - A Johnson & Sons — 651-698-6000  
      - Hermes Floral — 651-646-7135
      `,
       
        website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/st-paul/willwerscheid-funeral-home-cremation-grand-avenue/mnwga.html",
        obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=de4915d8-069d-11ef-b8a1-16dad070d26b",
        phone: "651.237.4804",
        backline: "",
        doorCode: "",
        groupId: "WILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "WILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0025",
        name: "EcremationMN",
        city: "St. Paul",
        address: "344 University Ave W St. Paul 55103",
        photo: "images/Willwerscheid.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@willwersheid.com"
        ],
      
        phoneMain: "651.237.4804",
        phoneAlt: "",
        didNumber: "612-627-6075",
      
        hours: "M-F 9-5",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@willwerscheid.com",
      
        answerScript: "Funeral home — determine location",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "A Johnson & Sons", phone: "651-698-6000" },
          { name: "Hermes Floral", phone: "651-646-7135" }
        ],
      
        specialInstructions: `
      Shared on-call director with Willwerscheid, Spielman, and Twin Cities Cremation.
      `,
      
        directions: `
      1 block east of Western Avenue.
      `,
      
        notes: `
      ### Special Instructions
      - Shared on-call director  
      - Email first calls to info@willwerscheid.com  
      
      ### Florists
      - A Johnson & Sons — 651-698-6000  
      - Hermes Floral — 651-646-7135
      `,
      
        
        website: "https://www.altogetherfuneral.com/funeral-cremation/minnesota/st-paul/willwerscheid-funeral-home-cremation-grand-avenue/mnwga.html",
        obituaryLink: "https://www.altogetherfuneral.com/obituaries/?bids=de4915d8-069d-11ef-b8a1-16dad070d26b",
        phone: "651.237.4804",
        backline: "",
        doorCode: "",
        groupId: "WILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "WILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0028",
        name: "Gill Brothers – Bloomington",
        city: "Bloomington",
        address: "9947 Lyndale Ave S Mpls",
        photo: "images/GillBrothers.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@gillbrothers.com"
        ],
      
        phoneMain: "952.888.7771",
        phoneAlt: "",
        didNumber: "612-627-5655",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@gillbrothers.com",
      
        answerScript: "This is Gill Brothers",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "HyVee Floral", phone: "763-531-7461" },
          { name: "Lake Harriet Florist", phone: "612-259-8211" },
          { name: "Richfield Florist", phone: "612-866-8416" },
          { name: "38th Street Florist", phone: "612-724-8484" }
        ],
      
        specialInstructions: `
      Send all pre-arrangement calls to Andrea (651-592-6726).  
      Scan and email first calls to info@gillbrothers.com.  
      U of M transfers: note “U of M transfer” on first call sheet.
      `,
      
        directions: "",
        notes: `
      ### Special Instructions
      - Pre-arrangements → Andrea  
      - Scan & email first calls  
      - U of M transfers: mark clearly  
      
      ### Florists
      HyVee, Lake Harriet, Richfield, 38th Street
      `,
      
        website: "https://www.gillbrothers.com/",
        obituaryLink: "https://www.gillbrothers.com/obituaries/obituary-listings?page=1",
        phone: "952.888.7771",
        backline: "",
        doorCode: "",
        groupId: "GILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0029",
        name: "Gill Brothers – Minneapolis",
        city: "Minneapolis",
        address: "5801 Lyndale Ave S Mpls",
        photo: "images/GillBrothers.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "info@gillbrothers.com"
        ],
      
        phoneMain: "612.861.6088",
        phoneAlt: "",
        didNumber: "612-627-5655",
      
        hours: "",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@gillbrothers.com",
      
        answerScript: "This is Gill Brothers",
      
        flowerRoomHours: "",
        recommendedFlorists: [
          { name: "HyVee Floral", phone: "763-531-7461" },
          { name: "Lake Harriet Florist", phone: "612-259-8211" },
          { name: "Richfield Florist", phone: "612-866-8416" },
          { name: "38th Street Florist", phone: "612-724-8484" }
        ],
      
        specialInstructions: `
      Same instructions as Bloomington location.  
      U of M transfers: mark clearly.
      `,
      
        directions: "",
        notes: `
      ### Florists
      HyVee, Lake Harriet, Richfield, 38th Street
      `,
      
        website: "https://www.gillbrothers.com/",
        obituaryLink: "https://www.gillbrothers.com/obituaries/obituary-listings?page=1",
        phone: "612.861.6088",
        backline: "",
        doorCode: "",
        groupId: "GILL",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GILL",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0030",
        name: "Furever Loved Pet Cremation",
        city: "Cloquet",
        address: "",
        photo: null,
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "marie.suonvieri@atkinsnorthlandfuneralhome.com"
        ],
      
        phoneMain: "",
        phoneAlt: "",
        didNumber: "",
      
        hours: "",
        contactOnAllCalls: false,
        firstCallInstructionsEmail: "",
      
        answerScript: null,
        flowerRoomHours: "",
        recommendedFlorists: [],
      
        specialInstructions: "",
        directions: "",
        notes: `
      Pet cremation service — limited information provided.
      `,
      
        website: "",
        obituaryLink: "",
        phone: "",
        backline: "",
        doorCode: "",
        groupId: "",
        locationFolderId: "",
        needsCoverage: false,
        chapelBranch: "",
      
        active: true,
        hasMultipleLocations: false,
        hasPetCremation: true
      },
      {
        id: "FH0031",
        name: "Grandstrand Funeral Home – Lindstrom",
        city: "Lindstrom",
        address: "11900 Lake Ln N",
        photo: "images/Grandstrand.png",
      
        emails: [
          "info@grandstrandfh.com"
        ],
      
        phoneMain: "651.257.4000",
        phoneAlt: "1234",
        didNumber: "612-627-5625",
      
        hours: "Weekdays 8:30-3:30, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@grandstrandfh.com",
      
        answerScript: null,
      
        flowerRoomHours: "Available anytime — florists use code 1234",
      
        recommendedFlorists: [
          { name: "Brinks’s Flowers", phone: "651-257-1700" },
          { name: "Floral Creations", phone: "651-257-1110" }
        ],
      
        specialInstructions: `
      Text directors first.  
      Chisago County transports → Tom.  
      Flower door code: 1234.
      `,
      
        directions: `
      Hwy 8 → Shoquist → left → right at T → 1 mile down on left.
      `,
      
        notes: `
      ### Special Instructions
      - Text directors first  
      - Flower code: 1234  
      - Chisago transports → Tom  
      
      ### Florists
      Brinks’s Flowers, Floral Creations
      `,
      
        website: "https://www.grandstrandfh.com/",
        obituaryLink: "https://www.grandstrandfh.com/obituaries/obituary-listings",
        phone: "651.257.4000",
        backline: "1234",
        doorCode: "1234",
        groupId: "GRAND",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GRAND",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0032",
        name: "Grandstrand Funeral Home – North Branch",
        city: "North Branch",
        address: "6580 Main St",
        photo: "images/Grandstrand.png",
      
        emails: [
          "info@grandstrandfh.com"
        ],
      
        phoneMain: "651.674.4444",
        phoneAlt: "",
        didNumber: "612-627-5625",
      
        hours: "Weekdays 8:30-3:30, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@grandstrandfh.com",
      
        answerScript: null,
      
        flowerRoomHours: "Available anytime — florists use code 1234",
      
        recommendedFlorists: [
          { name: "North Branch Floral", phone: "651-674-8341" },
          { name: "Cambridge Floral", phone: "763-689-2040" }
        ],
      
        specialInstructions: `
      Text directors first.  
      Flower door code: 1234.
      `,
      
        directions: `
      I-35 → Hwy 95 → FH on left.
      `,
      
        notes: `
      ### Florists
      North Branch Floral, Cambridge Floral
      `,
      
        website: "https://www.grandstrandfh.com/",
        obituaryLink: "https://www.grandstrandfh.com/obituaries/obituary-listings",
        phone: "651.674.4444",
        backline: "",
        doorCode: "1234",
        groupId: "GRAND",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GRAND",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0033",
        name: "Grandstrand Funeral Home – Osceola",
        city: "Osceola",
        address: "941 State Rd 35",
        photo: "images/Grandstrand.png",
      
        emails: [
          "info@grandstrandfh.com"
        ],
      
        phoneMain: "715.294.3111",
        phoneAlt: "",
        didNumber: "612-627-5625",
      
        hours: "Weekdays 8:30-3:30, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@grandstrandfh.com",
      
        answerScript: null,
      
        flowerRoomHours: "Available anytime — florists use code 1234",
      
        recommendedFlorists: [
          { name: "Wildwood Floral", phone: "715-755-2040" }
        ],
      
        specialInstructions: `
      Text directors first.  
      Flower door code: 1234.
      `,
      
        directions: `
      Hwy 35 north of Osceola.
      `,
      
        notes: `
      ### Florist
      Wildwood Floral — 715-755-2040
      `,
      
        website: "https://www.grandstrandfh.com/",
        obituaryLink: "https://www.grandstrandfh.com/obituaries/obituary-listings",
        phone: "715.294.3111",
        backline: "",
        doorCode: "1234",
        groupId: "GRAND",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GRAND",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0034",
        name: "Grandstrand Funeral Home – St. Croix Falls",
        city: "St. Croix Falls",
        address: "201 N Adams Street",
        photo: "images/Grandstrand.png",
      
        emails: [
          "info@grandstrandfh.com"
        ],
      
        phoneMain: "715.483.3141",
        phoneAlt: "",
        didNumber: "612-627-5625",
      
        hours: "Weekdays 8:30-3:30, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "info@grandstrandfh.com",
      
        answerScript: null,
      
        flowerRoomHours: "Available anytime — florists use code 1234",
      
        recommendedFlorists: [
          { name: "Balsam Lake Pro-Lawn", phone: "715-485-3131" }
        ],
      
        specialInstructions: `
      Text directors first.  
      Flower door code: 1234.
      `,
      
        directions: `
      US Hwy 8 → Washington St → Louisiana St → FH.
      `,
      
        notes: `
      ### Florist
      Balsam Lake Pro-Lawn — 715-485-3131
      `,
      
        website: "https://www.grandstrandfh.com/",
        obituaryLink: "https://www.grandstrandfh.com/obituaries/obituary-listings",
        phone: "715.483.3141",
        backline: "",
        doorCode: "1234 garage",
        groupId: "GRAND",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "GRAND",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0035",
        name: "Huber Funeral Home – Eden Prairie",
        city: "Eden Prairie",
        address: "Not provided (Eden Prairie Chapel address missing in source)",
        photo: "images/Huber.png",
      
        emails: [
          "AKALK2013@GMAIL.COM",
          "huberfh@hotmail.com",
          "paul@huberfunerals.com",
          "todd@huberfunerals.com"
        ],
      
        phoneMain: "",
        phoneAlt: "",
        didNumber: "612-627-5671",
      
        hours: "Weekdays 9AM–5PM, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: "Huber Funeral Home",
      
        flowerRoomHours: "Mound chapel front entrance always open for floral delivery",
      
        recommendedFlorists: [
          { name: "Pam Eggan Floral", phone: "763-442-9338" },
          { name: "Chanhassen Floral", phone: "952-949-2742" },
          { name: "Bayside Floral", phone: "952-471-8409" },
          { name: "Zinnia Design Florals", phone: "612-710-9150" }
        ],
      
        specialInstructions: `
      Prearrangement messages bypass on-call and follow the specialist list:
      1. Jon Beaudry – 612-597-3120
      2. Paul
      3. On-call funeral director
      4. Pat Zalusky (extreme backup only)
      
      If unable to reach a director for a death call:
      Contact Dave Carmazon (952-922-0100) or Roger Vanderpoole (612-588-1832 / 612-710-1280).
      
      Fax first calls to all three chapels.
      During the day all directors are on call.
      `,
      
        directions: `
      ### Eden Prairie Chapel
      - From I-494: Take Hwy 5 west → left on Eden Prairie Rd (CR 4) → left on Glory Lane.
      - From Old Shakopee Rd / CR 1: Continue west → right on Eden Prairie Rd → left on Glory Lane.
      - From north metro: Hwy 169 S → Crosstown 62 W → Hwy 5 W → left on Eden Prairie Rd → left on Glory Lane.
      - From west: Hwy 5 east → right on Eden Prairie Rd → left on Glory Lane.
      
      ### Excelsior Chapel (included in instructions)
      Hwy 7 west → CR 19 → Water St → 2nd St → FH on right.
      `,
      
        notes: `
      ### Special Instructions
      - Prearrangement calls follow strict escalation order  
      - If unreachable for death call: contact Carmazon or Vanderpoole  
      - Fax first calls to all three chapels  
      - Daytime: all directors are on call  
      
      ### Alarm Codes
      - Eden Prairie: **1892 ENTER**  
      - Excelsior: **1892** (disarm), **0 + 1892** (arm), flower door code **23508**
      
      ### Florists
      - Pam Eggan Floral — 763-442-9338  
      - Chanhassen Floral — 952-949-2742  
      - Bayside Floral — 952-471-8409  
      - Zinnia Design Florals — 612-710-9150
      `,
      
        website: "https://www.huberfunerals.com/",
        obituaryLink: "",
        phone: "",
        backline: "",
        doorCode: "EP: 1892 ENTER; Excelsior: 1892 / 0+1892; Flower door: 23508",
        groupId: "HUB",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "HUB",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      },
      {
        id: "FH0035",
        name: "Huber Funeral Home – Eden Prairie",
        city: "Eden Prairie",
        address: "Not provided (Eden Prairie Chapel address missing in source)",
        photo: "images/Huber.png",
      
        emails: [
          
          "huberfh@hotmail.com",
          "paul@huberfunerals.com",
          "todd@huberfunerals.com"
        ],
      
        phoneMain: "",
        phoneAlt: "",
        didNumber: "612-627-5671",
      
        hours: "Weekdays 9AM–5PM, weekends vary",
        contactOnAllCalls: true,
        firstCallInstructionsEmail: "",
      
        answerScript: "Huber Funeral Home",
      
        flowerRoomHours: "Mound chapel front entrance always open for floral delivery",
      
        recommendedFlorists: [
          { name: "Pam Eggan Floral", phone: "763-442-9338" },
          { name: "Chanhassen Floral", phone: "952-949-2742" },
          { name: "Bayside Floral", phone: "952-471-8409" },
          { name: "Zinnia Design Florals", phone: "612-710-9150" }
        ],
      
        specialInstructions: `
      Prearrangement messages bypass on-call and follow the specialist list:
      1. Jon Beaudry – 612-597-3120
      2. Paul
      3. On-call funeral director
      4. Pat Zalusky (extreme backup only)
      
      If unable to reach a director for a death call:
      Contact Dave Carmazon (952-922-0100) or Roger Vanderpoole (612-588-1832 / 612-710-1280).
      
      Fax first calls to all three chapels.
      During the day all directors are on call.
      `,
      
        directions: `
      ### Eden Prairie Chapel
      - From I-494: Take Hwy 5 west → left on Eden Prairie Rd (CR 4) → left on Glory Lane.
      - From Old Shakopee Rd / CR 1: Continue west → right on Eden Prairie Rd → left on Glory Lane.
      - From north metro: Hwy 169 S → Crosstown 62 W → Hwy 5 W → left on Eden Prairie Rd → left on Glory Lane.
      - From west: Hwy 5 east → right on Eden Prairie Rd → left on Glory Lane.
      
      ### Excelsior Chapel (included in instructions)
      Hwy 7 west → CR 19 → Water St → 2nd St → FH on right.
      `,
      
        notes: `
      ### Special Instructions
      - Prearrangement calls follow strict escalation order  
      - If unreachable for death call: contact Carmazon or Vanderpoole  
      - Fax first calls to all three chapels  
      - Daytime: all directors are on call  
      
      ### Alarm Codes
      - Eden Prairie: **1892 ENTER**  
      - Excelsior: **1892** (disarm), **0 + 1892** (arm), flower door code **23508**
      
      ### Florists
      - Pam Eggan Floral — 763-442-9338  
      - Chanhassen Floral — 952-949-2742  
      - Bayside Floral — 952-471-8409  
      - Zinnia Design Florals — 612-710-9150
      `,
      
        website: "https://www.huberfunerals.com/",
        obituaryLink: "",
        phone: "",
        backline: "",
        doorCode: "EP: 1892 ENTER; Excelsior: 1892 / 0+1892; Flower door: 23508",
        groupId: "HUB",
        locationFolderId: "",
        needsCoverage: true,
        chapelBranch: "HUB",
      
        active: true,
        hasMultipleLocations: true,
        hasPetCremation: false
      }
]
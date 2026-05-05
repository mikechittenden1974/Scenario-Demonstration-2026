// Workbook 2 — Clean, Fix and Prepare Keys
// Difficulty 3/10. ~45-60 minutes. Spacious, scenario-driven.

const fs = require("fs");
const { Packer } = require("docx");

const H = require("./helpers");

const children = [];

// ---------- Page 1: Cover ----------
children.push(...H.coverPanel({
  workbookNumber: 2,
  title: "Clean, Fix and Prepare Keys",
  difficulty: "3 / 10",
  timeEstimate: "45 – 60 mins",
  scenarioName: "DRAKONEX DRAGON EXPRESS",
  tagline: "Detective work: tidy what is messy and get the data ready to be joined.",
}));

children.push(H.blank(200));

children.push(H.fileMarkers("sd1_workbook2_start.xlsx", "sd1_workbook2_complete.xlsx"));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "This is my favourite workbook. We get to play detective. A blank cell is a question, not a failure. Off we go."
));

children.push(H.pageBreak());

// ---------- Page 2: Mission brief + KSBs ----------
children.push(H.h1("Your Mission"));

children.push(H.missionBrief(
  "The three files are sitting in your workbook from last time, looking a bit dishevelled.",
  "Your job today is to tidy them up. Not perfect. Just consistent enough that they can be joined together in Workbook 3.",
  "We will do this gently, one issue at a time. There are no penalties for taking the long way."
));

children.push(H.blank(200));

children.push(H.h2("You Are Developing"));

children.push(H.ksbBox({
  title: "Knowledge, Skills and Behaviours",
  blurb: "These are the bits of the apprenticeship you are practising in this workbook.",
  codes: [
    "S2 — cleaning and validating data",
    "S3 — collecting and exploring data",
    "S5 — combining and organising data ready for use",
    "K10 — methods for inspecting datasets",
    "K11 — concepts of data quality (completeness, consistency, accuracy)",
    "B2 — being thorough and accurate",
    "B4 — staying curious",
  ],
}));

children.push(H.pageBreak());

// ---------- Page 3: A note about messy data ----------
children.push(H.h1("Before We Start"));

children.push(H.intro(
  "Data almost always arrives messy. People type quickly. Systems join their outputs together imperfectly. Files travel between teams. By the time the data lands on your desk, it has been through quite a lot."
));

children.push(H.intro(
  "That is normal. Cleaning is not a sign that something has gone wrong. It is the job."
));

children.push(H.blank(200));

children.push(H.whyMatters(
  "If a column has 'Delivered', 'delivered' and 'DELIVERED' all mixed in, Excel treats them as different values.",
  "When you try to count, sort or join, you get three groups instead of one. Cleaning makes the data behave."
));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "I have cleaned thousands of spreadsheets. Honestly, the best ones still need a tidy. You are not alone in finding mess. You are in good company."
));

children.push(H.pageBreak());

// ---------- Page 4: Mission 1 — Trim the spaces ----------
children.push(H.h1("Mission 1 — Trim The Spaces"));

children.push(H.intro(
  "Some of the route_code values have extra spaces around them. Things like ' RT-N01' or 'RT-E01 '. You can't see them clearly, but Excel can. To Excel, ' RT-N01' is a different value from 'RT-N01'."
));

children.push(H.intro(
  "We are going to fix these with a function called TRIM. TRIM removes spaces from the start and end of text. Spaces in the middle are left alone."
));

children.push(H.tryThisWithSteps(null, [
  "Open sd1_workbook2_start.xlsx.",
  "Go to the delivery_log sheet.",
  "In an empty column, type =TRIM(D2) to trim the route_code in row 2.",
  "Drag the formula down to the bottom of the data.",
  "Copy the new column. Paste it back as values into the route_code column.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "If you type the formula and forget to drag it down, only one row gets fixed.",
  "Don't worry — it happens to everyone. Just delete it and try again."
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "Click on a route_code cell that used to have a space. The formula bar at the top should show the value with no leading or trailing space.",
  "If you are not sure, type =LEN(D2) in a spare cell and check the length matches."
));

children.push(H.pageBreak());

// ---------- Page 5: Mission 2 — Fix the village casing ----------
children.push(H.h1("Mission 2 — Fix The Village Casing"));

children.push(H.intro(
  "Look at the arrive_village column. Lavenderhill is sometimes spelled LAVENDERHILL, sometimes Lavenderhill, and sometimes lavenderhill. They are all the same village, but Excel treats them as three different ones."
));

children.push(H.intro(
  "We will fix this with a function called PROPER. PROPER puts the first letter of each word in capitals and the rest in lowercase. 'lavenderhill' becomes 'Lavenderhill'."
));

children.push(H.tryThisWithSteps(null, [
  "On the delivery_log sheet, find an empty column.",
  "Type =PROPER(F2) to fix the arrive_village in row 2.",
  "Drag the formula down to the bottom of the data.",
  "Copy the new column. Paste it back as values into arrive_village.",
  "Do the same for the depart_village column.",
]));

children.push(H.blank(120));

children.push(H.whyMatters(
  "Once the casing is consistent, you can sort by village and every Lavenderhill row sits together.",
  "You can count them with COUNTIF. You can join them in Workbook 3. None of that works if the casing is mixed."
));

children.push(H.pageBreak());

// ---------- Page 6: Mission 3 — Standardise the status column ----------
children.push(H.h1("Mission 3 — Standardise The Status Column"));

children.push(H.intro(
  "Take a look at the status column. You will see 'Delivered', 'delivered', 'DELIVERED' and 'Done'. The first three are clearly the same thing, just typed differently. 'Done' is also probably the same — but worth confirming."
));

children.push(H.intro(
  "PROPER would turn 'DONE' into 'Done', not 'Delivered'. So we need a slightly different approach for this column."
));

children.push(H.tryThisWithSteps(null, [
  "On the delivery_log sheet, find an empty column.",
  "Type =PROPER(I2) and drag down. This fixes the casing.",
  "Now use Find & Replace (Ctrl + H) on the new column.",
  "Find: Done   Replace with: Delivered   Replace All.",
  "Copy the cleaned column. Paste it back as values into status.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "Find & Replace is powerful. It will change every match, everywhere on the sheet, unless you select a range first.",
  "Always select your column or range before opening Find & Replace. That keeps the change contained."
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "Click on the column header for status, then look at the bottom-right of Excel.",
  "It should show four values now: Delivered, Late, Returned, Lost. Down from seven."
));

children.push(H.pageBreak());

// ---------- Page 7: Mission 4 — Investigate the blanks ----------
children.push(H.h1("Mission 4 — Investigate The Blanks"));

children.push(H.intro(
  "Some rows in delivery_log have a blank parcel_count. A blank cell is a question, not a failure. Your job is not to fill them in. Your job is to investigate what they mean."
));

children.push(H.h3("Three things a blank could mean"));

children.push(H.bullet("The flight clerk forgot to write the value down."));
children.push(H.bullet("The parcel count was zero (no parcels flown that trip)."));
children.push(H.bullet("The data is in another file we have not seen yet."));

children.push(H.blank(160));

children.push(H.tryThisWithSteps(
  "Find the blanks first, then write down the question.",
  [
    "On delivery_log, click the parcel_count column header to select it.",
    "Use Find & Replace > Go To Special > Blanks. Excel highlights every blank cell.",
    "Write the delivery_id of each blank row in the Open Questions sheet at the back of the workbook.",
    "Add a short note: 'Ask Bramble — was the parcel count zero or just unrecorded?'",
  ]
));

children.push(H.blank(120));

children.push(H.whyMatters(
  "Filling in a blank with a guess is one of the most common ways data clerks get into trouble. Treat blanks as questions for the team, not as gaps to silently fill."
));

children.push(H.pageBreak());

// ---------- Page 8: Mission 5 — Find and remove duplicates ----------
children.push(H.h1("Mission 5 — Find And Remove Duplicates"));

children.push(H.intro(
  "Two delivery_id values appear twice in delivery_log. Captain Aelwyn was clear: each delivery should have one row, no more."
));

children.push(H.intro(
  "Excel has a built-in Remove Duplicates button. It works well when you know exactly which column to use as the deciding factor."
));

children.push(H.tryThisWithSteps(null, [
  "On delivery_log, click anywhere inside the data.",
  "On the Data tab, click Remove Duplicates.",
  "In the dialogue, untick all columns first.",
  "Tick only delivery_id.",
  "Click OK. Excel will tell you how many rows it removed.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "If you leave every column ticked, Excel only removes rows that match on every single column. That sounds safer, but it is not always what you want.",
  "Pick the column that should be unique — usually the ID column — and use just that one."
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "Excel should report 'Removed 2 duplicate rows. 50 unique rows remain.'",
  "If your numbers are different, click Undo and try again. No harm done."
));

children.push(H.pageBreak());

// ---------- Page 9: Mission 6 — Make a key ----------
children.push(H.h1("Mission 6 — Make A Key"));

children.push(H.intro(
  "A key is a column used to match rows between tables. Think of it as a shared label. When two tables share a key, you can join them together."
));

children.push(H.h3("Plain English examples"));

children.push(H.bullet("In delivery_log, the dragon_id column is a key. It points to the dragons table."));
children.push(H.bullet("In delivery_log, the route_code column is a key. It points to the routes table."));
children.push(H.bullet("In delivery_log, the delivery_id column is the row's own unique key."));

children.push(H.blank(160));

children.push(H.intro(
  "For a key to work, it must be unique in the table it points to. Every dragon_id should appear exactly once in dragons. Every route_code should appear exactly once in routes."
));

children.push(H.tryThisWithSteps(
  "Quick uniqueness check.",
  [
    "On the dragons sheet, click the dragon_id column header.",
    "Use COUNTIF in a spare cell: =COUNTIF(A:A, A2). The result should be 1.",
    "Drag the formula down. Every result should be 1.",
    "Do the same on the routes_reference sheet for route_code.",
  ]
));

children.push(H.blank(120));

children.push(H.whyMatters(
  "If a key is not unique, joining can create duplicate rows you weren't expecting. Checking uniqueness before joining is one of the most useful 30 seconds you will ever spend."
));

children.push(H.pageBreak());

// ---------- Page 10: Closing ----------
children.push(H.h1("What You Can Now Do"));

children.push(H.intro(
  "Look how much you know now. You started this workbook with messy tables and ended with tidy ones. Here is your new skill list:"
));

children.push(H.bullet("Use TRIM to remove leading and trailing spaces"));
children.push(H.bullet("Use PROPER to fix mixed-case text"));
children.push(H.bullet("Use Find & Replace carefully on a selected range"));
children.push(H.bullet("Find blank cells with Go To Special and treat them as questions"));
children.push(H.bullet("Remove duplicates by choosing the right key column"));

children.push(H.blank(200));

children.push(H.niceWork(
  "Your data is now consistent enough to be joined. That is a real piece of professional cleanup.",
  "Take a break. The next workbook is where the tables come together."
));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "Most people speed through cleaning because it feels boring. You did not. You looked, asked questions, and tidied carefully. That is the difference between a junior data clerk and one who is trusted with the important files."
));

// ---------- Build ----------
const doc = H.makeDocSkeleton(children);

Packer.toBuffer(doc).then(buf => {
  const path = "/sessions/magical-serene-feynman/mnt/New folder/Drakonex_StylePilot/sd1/training/workbook2_clean_fix_keys.docx";
  fs.writeFileSync(path, buf);
  console.log(`Wrote ${path}  (${buf.length} bytes)`);
}).catch(e => { console.error(e); process.exit(1); });

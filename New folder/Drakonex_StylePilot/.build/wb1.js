// Workbook 1 — Import, Inspect and Spot Patterns
// Difficulty 2/10. ~30–45 minutes. Spacious, scenario-driven.

const fs = require("fs");
const { Packer } = require("docx");

const H = require("./helpers");

const children = [];

// ---------- Page 1: Cover ----------
children.push(...H.coverPanel({
  workbookNumber: 1,
  title: "Import, Inspect and Spot Patterns",
  difficulty: "2 / 10",
  timeEstimate: "30 – 45 mins",
  scenarioName: "DRAKONEX DRAGON EXPRESS",
  tagline: "Mission control: open the files, take a first look, and notice what feels off.",
}));

children.push(H.blank(200));

children.push(H.fileMarkers("sd1_workbook1_start.xlsx", "sd1_workbook1_complete.xlsx"));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "Welcome to the data clerk's chair. We are going to ease in. No cleaning today. Just open the files, look around, and notice what catches your eye."
));

children.push(H.pageBreak());

// ---------- Page 2: Mission brief + KSBs ----------
children.push(H.h1("Your Mission"));

children.push(H.missionBrief(
  "Last weekend, Drakonex ran their spring delivery sprint across the kingdom.",
  "Three different people recorded three different parts of it. Captain Aelwyn wants to know if everything went smoothly.",
  "Your job today is the gentle bit: bring the three files into Excel and see what is there. We are not fixing anything yet."
));

children.push(H.blank(200));

children.push(H.h2("You Are Developing"));

children.push(H.ksbBox({
  title: "Knowledge, Skills and Behaviours",
  blurb: "These are the bits of the apprenticeship you are practising in this workbook. You don't need to memorise them. Just notice them as you go.",
  codes: [
    "S1 — finding and extracting data from different sources",
    "S3 — collecting and exploring data",
    "S6 — using a range of digital tools",
    "K7 — file types and formats (xlsx, csv, pdf)",
    "K8 — the importance of data quality",
    "K10 — methods for inspecting datasets",
    "B2 — being thorough and accurate",
    "B4 — staying curious",
  ],
}));

children.push(H.pageBreak());

// ---------- Page 3: The setup ----------
children.push(H.h1("The Setup"));

children.push(H.intro(
  "Drakonex Dragon Express is a parcel delivery company. Instead of vans, they use trained dragons. Last weekend was the spring sprint and the team is now back at base, sorting out the paperwork."
));

children.push(H.intro(
  "Three files were generated during the sprint. Each one lives in a different format. That is normal. Real data almost always arrives like this."
));

children.push(H.blank(120));

children.push(H.bullet("source_primary.xlsx — the delivery log (one row per delivery)"));
children.push(H.bullet("source_secondary.csv — the dragon register (one row per dragon)"));
children.push(H.bullet("source_lookup.pdf — the printed routes reference (one row per route)"));

children.push(H.blank(160));

children.push(H.whyMatters(
  "In a real data role, files arrive in lots of formats: Excel, CSV, PDF, sometimes even paper.",
  "Knowing how to bring each one into Excel safely is one of the most useful things you will learn this year."
));

children.push(H.pageBreak());

// ---------- Page 4: Mission 1 — Open Excel and the start file ----------
children.push(H.h1("Mission 1 — Open the Workbook"));

children.push(H.intro(
  "Captain Aelwyn has left a fresh workbook on your desk. Open it before you do anything else."
));

children.push(H.tryThisWithSteps(
  "A short warm-up. Five clicks and a sip of tea.",
  [
    "Open Excel.",
    "Open the file called sd1_workbook1_start.xlsx.",
    "Read the Read Me sheet on the first tab.",
    "Click the Workspace tab. It is empty. That is on purpose.",
    "Save it once, just to make sure it saves. Cup of tea optional but encouraged.",
  ]
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "You should now have an Excel file open with two tabs: Read Me and Workspace.",
  "If your Excel screen looks different, that is fine. The two tabs are the only things that matter right now."
));

children.push(H.pageBreak());

// ---------- Page 5: Mission 2 — Import the delivery log ----------
children.push(H.h1("Mission 2 — Import the Delivery Log"));

children.push(H.intro(
  "First file: the delivery log. This is the main table. It is an Excel file in the raw_sources folder."
));

children.push(H.intro(
  "We are going to use Excel's Get Data feature. It is a friendly tool that brings a copy of the file into your workbook. The original file is not changed."
));

children.push(H.tryThisWithSteps(null, [
  "Click the Data tab on the Excel ribbon.",
  "Click Get Data, then From File, then From Excel Workbook.",
  "Browse to the raw_sources folder and pick source_primary.xlsx.",
  "In the Navigator window, select the delivery_log sheet.",
  "Click Load. The data should land on a new sheet.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "If you click Transform Data instead of Load, you'll see Power Query open up. Don't worry. Close it for now and try again with Load.",
  "We will meet Power Query properly in Workbook 2. For today, plain Load is enough."
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "You should now see a new sheet with about 50 rows of delivery data. Take a moment to scroll through it.",
  "Don't worry if some columns look messy. That is a feature, not a bug. We are noticing today, not fixing."
));

children.push(H.pageBreak());

// ---------- Page 6: Mission 3 — Import the dragons CSV ----------
children.push(H.h1("Mission 3 — Import the Dragon Register"));

children.push(H.intro(
  "Second file: the dragons. This one is a CSV — Comma-Separated Values. CSVs are plain text files. Each row is a line. Each value is separated by a comma."
));

children.push(H.intro(
  "Excel imports CSVs the same way as xlsx files, just with a different menu choice."
));

children.push(H.tryThisWithSteps(null, [
  "Click the Data tab again.",
  "Click Get Data, then From File, then From Text/CSV.",
  "Pick source_secondary.csv from the raw_sources folder.",
  "Excel will show a preview window. Click Load.",
]));

children.push(H.blank(120));

children.push(H.whyMatters(
  "CSVs are everywhere. Every system in the world can read and write them. They are the duct tape of data."
));

children.push(H.blank(160));

children.push(H.pauseCheck(
  "You should now have a sheet with 18 dragons on it.",
  "Look at the breed column. Notice anything? Don't fix it yet. Just notice."
));

children.push(H.pageBreak());

// ---------- Page 7: Mission 4 — Import the PDF lookup ----------
children.push(H.h1("Mission 4 — Import the Routes Reference"));

children.push(H.intro(
  "Third file: the routes. This one is a PDF. PDFs are designed for printing, not data, but Excel can read tables out of them."
));

children.push(H.intro(
  "This is the file lots of people forget about. Most data clerks would type it back in by hand. You don't need to."
));

children.push(H.tryThisWithSteps(null, [
  "Click Data, Get Data, From File, then From PDF.",
  "Pick source_lookup.pdf from the raw_sources folder.",
  "Excel scans the PDF and finds the table. Pick the table in the Navigator window.",
  "Click Load.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "If your version of Excel does not have From PDF, that is fine. There is a copy of the same table on the routes_reference sheet of the complete file. You can use that for now.",
  "From PDF needs Microsoft 365 or Office 2021 or later."
));

children.push(H.blank(160));

children.push(H.niceWork(
  "Three files. Three formats. Three sheets. All in one workbook.",
  "That right there is a real data clerk skill."
));

children.push(H.pageBreak());

// ---------- Page 8: Mission 5 — First look, spot the odd one ----------
children.push(H.h1("Mission 5 — Spot The Odd One"));

children.push(H.intro(
  "Now the fun bit. Walk around your three sheets. Don't fix anything. Just look."
));

children.push(H.intro(
  "Most learners worry that they need to spot every issue on the first pass. They don't. Spot what jumps out. We will catch the rest in Workbook 2."
));

children.push(H.h3("Things worth looking at"));

children.push(H.bullet("The status column on delivery_log. How many different ways is the same word spelled?"));
children.push(H.bullet("The arrive_village column. Same village, different capitals?"));
children.push(H.bullet("The route_code column. Any extra spaces?"));
children.push(H.bullet("The breed column on dragons. Any odd casing?"));
children.push(H.bullet("Any blank cells anywhere?"));

children.push(H.blank(160));

children.push(H.tryThis(
  "Pick three things you noticed. Write them down on a sticky note or in a blank cell.",
  "Compare your list with the Patterns Spotted sheet in the complete file. There is no right answer — just things to notice."
));

children.push(H.pageBreak());

// ---------- Page 9: Closing ----------
children.push(H.h1("What You Can Now Do"));

children.push(H.intro(
  "Pause for a moment. You started this workbook with three files in three formats. Look what you can now do:"
));

children.push(H.bullet("Open Excel and use the Data tab > Get Data feature"));
children.push(H.bullet("Import an .xlsx file into a new workbook"));
children.push(H.bullet("Import a .csv file into a new workbook"));
children.push(H.bullet("Import a table from a .pdf file"));
children.push(H.bullet("Take a first look at a dataset and notice what feels off"));

children.push(H.blank(200));

children.push(H.niceWork(
  "That is a strong start. Take a break. Stretch your wings. When you are ready, open Workbook 2 — that is where the cleaning fun begins."
));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "You did the slow, careful, looking-around bit. That is the bit nine out of ten people skip. Lovely work. See you in Workbook 2."
));

// ---------- Build ----------
const doc = H.makeDocSkeleton(children);

Packer.toBuffer(doc).then(buf => {
  const path = "/sessions/magical-serene-feynman/mnt/New folder/Drakonex_StylePilot/sd1/training/workbook1_import_inspect_patterns.docx";
  fs.writeFileSync(path, buf);
  console.log(`Wrote ${path}  (${buf.length} bytes)`);
}).catch(e => { console.error(e); process.exit(1); });

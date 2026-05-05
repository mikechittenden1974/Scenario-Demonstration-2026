// Workbook 3 — Merge, Append and Validate
// Difficulty 4/10. ~60 minutes. Spacious, scenario-driven.

const fs = require("fs");
const { Packer } = require("docx");

const H = require("./helpers");

const children = [];

// ---------- Page 1: Cover ----------
children.push(...H.coverPanel({
  workbookNumber: 3,
  title: "Merge, Append and Validate",
  difficulty: "4 / 10",
  timeEstimate: "60 mins",
  scenarioName: "DRAKONEX DRAGON EXPRESS",
  tagline: "The big finish: bring the tables together and check the result.",
}));

children.push(H.blank(200));

children.push(H.fileMarkers("sd1_workbook3_start.xlsx", "sd1_workbook3_complete.xlsx"));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "Joining tables sounds technical. It really isn't. Once the picture clicks, you will use it forever. Let's make the picture click."
));

children.push(H.pageBreak());

// ---------- Page 2: Mission brief + KSBs ----------
children.push(H.h1("Your Mission"));

children.push(H.missionBrief(
  "Captain Aelwyn needs one tidy table for Monday's meeting.",
  "It must show every delivery from the weekend, plus the dragon name, plus the route name and region.",
  "You will build that single tidy table by joining your three cleaned tables together. Then you will check it. Then you are done."
));

children.push(H.blank(200));

children.push(H.h2("You Are Developing"));

children.push(H.ksbBox({
  title: "Knowledge, Skills and Behaviours",
  blurb: "These are the apprenticeship bits you are practising in this workbook.",
  codes: [
    "S4 — manipulating and linking different sources of data",
    "S5 — combining and organising data ready for use",
    "S6 — using a range of digital tools",
    "K7 — file types and formats",
    "K8 — the importance of data quality",
    "K11 — concepts of data quality (completeness, consistency, accuracy)",
    "B2 — being thorough and accurate",
    "B3 — taking responsibility for your work",
    "B4 — staying curious",
  ],
}));

children.push(H.pageBreak());

// ---------- Page 3: Merge vs Append concept ----------
children.push(H.h1("Merge vs Append — The Big Idea"));

children.push(H.intro(
  "Two words you will hear constantly. They sound similar. They do very different things. Worth two minutes to nail down."
));

children.push(H.h3("Merge — adds columns"));

children.push(H.intro(
  "A merge takes columns from one table and adds them to another. The two tables share a key. Imagine sticking two strips of paper together side by side."
));

children.push(H.h3("Append — adds rows"));

children.push(H.intro(
  "An append takes rows from one table and stacks them under another. The two tables share columns. Imagine taping one page underneath another, end to end."
));

children.push(H.blank(160));

children.push(H.whyMatters(
  "Merge: same things, more details about each one.",
  "Append: same kind of details, more things in the list.",
  "If you remember just that, you are 80 percent of the way there."
));

children.push(H.pageBreak());

// ---------- Page 4: Mission 1 — Merge with routes ----------
children.push(H.h1("Mission 1 — Merge With Routes"));

children.push(H.intro(
  "First merge: add route information to delivery_log. We will use Power Query, which is Excel's friendly merging tool. Don't be put off by the name — it is just a separate window for joining."
));

children.push(H.tryThisWithSteps(null, [
  "Open sd1_workbook3_start.xlsx.",
  "On the Data tab, click Get Data > From Other Sources > From Table/Range while the delivery_log sheet is selected.",
  "Power Query opens. In the top menu, click Combine > Merge Queries.",
  "Pick routes_reference as the second table.",
  "Select route_code in both tables to match them. Pick Left Outer as the join kind.",
  "Click OK. A new column appears. Click the small expand icon to choose route_name, region and terrain_type.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "If you accidentally pick Inner Join instead of Left Outer, any delivery whose route_code does not match will disappear from your result.",
  "Left Outer keeps every delivery row. Use it when the left table is the one you care about most."
));

children.push(H.pageBreak());

// ---------- Page 5: Mission 2 — Merge with dragons ----------
children.push(H.h1("Mission 2 — Merge With Dragons"));

children.push(H.intro(
  "Second merge: add dragon details. The pattern is the same as last time. The key is dragon_id."
));

children.push(H.tryThisWithSteps(null, [
  "Still in Power Query. In the same query, click Combine > Merge Queries again.",
  "This time pick dragons as the second table.",
  "Select dragon_id in both tables.",
  "Choose Left Outer as the join kind.",
  "Click OK. Expand the new column to bring in dragon_name and breed.",
  "Click Close & Load to send the result back to Excel.",
]));

children.push(H.blank(120));

children.push(H.pauseCheck(
  "You should now have one tidy table with delivery details, route details and dragon details all on the same row.",
  "One row in this table is missing a dragon_name. That is DLV-1025, the row that referenced DRG-099. Power Query left it blank because the dragon does not exist in the register. That is the right thing to do — it shows us a real data problem."
));

children.push(H.blank(160));

children.push(H.whyMatters(
  "Left Outer Join is the safest default when one table is the one you care about. It says: 'keep all my rows, fill in details where you can, leave them blank where you cannot.'"
));

children.push(H.pageBreak());

// ---------- Page 6: A note on advanced join types ----------
children.push(H.h1("Other Join Types You May Meet"));

children.push(H.intro(
  "We are not using these today. They exist. You may see them later. Here they are in plain English so they don't surprise you."
));

children.push(H.h3("Inner Join"));

children.push(H.intro("Keeps only rows where the key matches in both tables. Useful when you want guaranteed matches and nothing else."));

children.push(H.h3("Right Outer Join"));

children.push(H.intro("Mirror image of Left Outer. Keeps every row from the right table. Less common in everyday data work."));

children.push(H.h3("Full Outer Join"));

children.push(H.intro("Keeps every row from both tables, matching where it can. Useful for finding what does not match. Used carefully."));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "Don't worry about memorising these. Left Outer covers maybe 80 percent of real data work. The others come up sometimes."
));

children.push(H.pageBreak());

// ---------- Page 7: Mission 3 — Try an append ----------
children.push(H.h1("Mission 3 — Try An Append"));

children.push(H.intro(
  "Imagine the flight clerks accidentally split the delivery log into two files: one for Saturday, one for Sunday. They have the same columns. To analyse the whole weekend together, we need to stack them back into one table."
));

children.push(H.intro(
  "That is an append. Power Query can do it in one click."
));

children.push(H.tryThisWithSteps(null, [
  "Look at the delivery_log_saturday and delivery_log_sunday sheets in the start file.",
  "In Power Query, with one of them open, click Combine > Append Queries.",
  "Pick the other Saturday/Sunday table.",
  "Click OK. The rows from the second table appear under the first.",
  "Click Close & Load.",
]));

children.push(H.blank(120));

children.push(H.commonTrap(
  "Append works best when the columns are exactly the same names in both tables. If one table has 'Date' and the other has 'date', Power Query treats them as different columns and creates two.",
  "Always make sure your column names match before appending. Cleaning in Workbook 2 paid off here."
));

children.push(H.pageBreak());

// ---------- Page 8: Mission 4 — Validate the result ----------
children.push(H.h1("Mission 4 — Validate The Result"));

children.push(H.intro(
  "Validation is the bit where you check the joined table looks right before sending it on. Three quick checks. Five minutes of work. Saves hours of confusion later."
));

children.push(H.h3("Check 1 — Row count"));

children.push(H.intro("Did you start with 50 rows in the cleaned delivery_log? You should still have 50 rows in the merged table. If you have more, something joined twice. If you have fewer, something dropped out."));

children.push(H.h3("Check 2 — Blank cells"));

children.push(H.intro("Most cells should be filled. A blank where there shouldn't be one is a clue. We expect dragon_name to be blank for DLV-1025 — that is the missing dragon. Anything else is worth a look."));

children.push(H.h3("Check 3 — A spot test"));

children.push(H.intro("Pick three random rows. For each, check the route_name and region match the route_code. If yes, your join is healthy."));

children.push(H.pageBreak());

// ---------- Page 9: Mission 5 — Highlight blanks with conditional formatting ----------
children.push(H.h1("Mission 5 — Spot Blanks With Colour"));

children.push(H.intro(
  "After loading the merged table back to Excel, you can use conditional formatting to make any blank cells light up. It is a fast visual way to see where the holes are."
));

children.push(H.tryThisWithSteps(null, [
  "On the merged sheet, select the data range (Ctrl + A inside the table).",
  "On the Home tab, click Conditional Formatting > New Rule.",
  "Choose 'Format only cells that contain' and pick 'Blanks'.",
  "Pick a soft fill colour (peach or pale yellow works nicely).",
  "Click OK.",
]));

children.push(H.blank(120));

children.push(H.pauseCheck(
  "Any cells that are blank should now be highlighted. Scroll through and make sure the only blanks are the ones you expect (the missing dragon and the questioned parcel counts).",
  "If anything else is highlighted, it is a fresh question for the team. Add it to the Open Questions sheet."
));

children.push(H.blank(160));

children.push(H.niceWork(
  "You now have a clean, joined, validated dataset.",
  "Captain Aelwyn can answer her question. The sprint is reviewable."
));

children.push(H.pageBreak());

// ---------- Page 10: Closing ----------
children.push(H.h1("What You Can Now Do"));

children.push(H.intro(
  "Look back at where you started. Three messy files in three formats. One tidy table at the end. Here is what you can now do confidently:"
));

children.push(H.bullet("Explain the difference between merge and append in plain English"));
children.push(H.bullet("Use Power Query to merge two tables on a shared key"));
children.push(H.bullet("Choose Left Outer Join when you want to keep all your main rows"));
children.push(H.bullet("Append rows from a second table to grow a list"));
children.push(H.bullet("Run a row-count check to spot rows lost or duplicated by a join"));
children.push(H.bullet("Use conditional formatting to highlight blanks visually"));

children.push(H.blank(200));

children.push(H.niceWork(
  "That is all of Scenario Demonstration 1. You imported, you inspected, you cleaned, you merged, you validated.",
  "That is the spine of every data clerk job, anywhere."
));

children.push(H.blank(200));

children.push(H.quoteFromMarigold(
  "I'm proud of you. You took it slowly. You asked the right questions. You did not panic at messy data. That is the mindset of a really good data clerk. See you next time, when we open the practice files."
));

// ---------- Build ----------
const doc = H.makeDocSkeleton(children);

Packer.toBuffer(doc).then(buf => {
  const path = "/sessions/magical-serene-feynman/mnt/New folder/Drakonex_StylePilot/sd1/training/workbook3_merge_append_validate.docx";
  fs.writeFileSync(path, buf);
  console.log(`Wrote ${path}  (${buf.length} bytes)`);
}).catch(e => { console.error(e); process.exit(1); });

// Shared helpers for the Drakonex SD1 workbooks.
// Provides callout boxes, mission frames, KSB box, headings, etc.
// Style goal: spacious, friendly, learner-safe. Plenty of white space.

const {
  Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
  BorderStyle, WidthType, ShadingType, HeadingLevel, PageBreak,
  LevelFormat, TabStopType, TabStopPosition,
} = require("docx");

// Brand palette
const COLORS = {
  navy:    "2E5077",
  sky:     "D5E8F0",
  sage:    "C7E2C7",
  peach:   "FCE4C8",
  amber:   "FFF1C4",
  soft:    "F4F7FA",
  text:    "2A2A2A",
  muted:   "5C6770",
  white:   "FFFFFF",
};

const PAGE = {
  // US Letter, generous 1.1" side margins for breathing room
  width: 12240,
  height: 15840,
  margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
};

// Content width = 12240 - 1440 - 1440 = 9360 DXA
const CONTENT_W = 9360;

const FONTS = { sans: "Arial", display: "Arial" };

// Standard borders
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const cellNoBorders = {
  top: noBorder, bottom: noBorder, left: noBorder, right: noBorder,
  insideHorizontal: noBorder, insideVertical: noBorder,
};

// ---------- Basic text helpers ----------

function p(text, opts = {}) {
  const {
    size = 22, bold = false, italics = false, color = COLORS.text,
    align = AlignmentType.LEFT, before = 0, after = 120, font = FONTS.sans,
    indent, lineRule, line = 320,
  } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { before, after, line, lineRule: lineRule || "auto" },
    indent,
    children: [new TextRun({ text, size, bold, italics, color, font })],
  });
}

function blank(after = 80) {
  return new Paragraph({ spacing: { after }, children: [new TextRun({ text: "" })] });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function h1(text, color = COLORS.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text, size: 40, bold: true, color, font: FONTS.display })],
  });
}

function h2(text, color = COLORS.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 160 },
    children: [new TextRun({ text, size: 30, bold: true, color, font: FONTS.display })],
  });
}

function h3(text, color = COLORS.navy) {
  return new Paragraph({
    spacing: { before: 220, after: 100 },
    children: [new TextRun({ text, size: 24, bold: true, color, font: FONTS.display })],
  });
}

function intro(text) {
  return p(text, { size: 22, color: COLORS.text, after: 160, line: 340 });
}

function quoteFromMarigold(text) {
  // A friendly italic indented note from the recurring character.
  return new Paragraph({
    spacing: { before: 160, after: 160, line: 320 },
    indent: { left: 720, right: 360 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 18, color: COLORS.navy, space: 12 },
    },
    children: [
      new TextRun({ text: "Marigold says: ", italics: true, bold: true, color: COLORS.navy, size: 22, font: FONTS.sans }),
      new TextRun({ text, italics: true, color: COLORS.text, size: 22, font: FONTS.sans }),
    ],
  });
}

function bullet(text, color = COLORS.text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 60, after: 80, line: 320 },
    children: [new TextRun({ text, size: 22, color, font: FONTS.sans })],
  });
}

function step(num, text) {
  // Friendly numbered step; uses a coloured number label and body text.
  return new Paragraph({
    spacing: { before: 100, after: 120, line: 320 },
    indent: { left: 360, hanging: 360 },
    children: [
      new TextRun({ text: `${num}.  `, bold: true, color: COLORS.navy, size: 24, font: FONTS.display }),
      new TextRun({ text, color: COLORS.text, size: 22, font: FONTS.sans }),
    ],
  });
}

// ---------- Callout boxes ----------

function calloutBox({ label, body, accent, body2, body3, body4 }) {
  // A two-row table:
  //   Row 1: coloured label bar (white text on accent)
  //   Row 2: light-tinted body cell (paragraphs)
  const labelCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: accent, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 220, right: 220 },
    borders: cellNoBorders,
    children: [
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun({ text: label, bold: true, color: COLORS.white, size: 22, font: FONTS.display })],
      }),
    ],
  });
  const bodyChildren = [];
  for (const t of [body, body2, body3, body4]) {
    if (!t) continue;
    bodyChildren.push(new Paragraph({
      spacing: { before: 60, after: 60, line: 320 },
      children: [new TextRun({ text: t, color: COLORS.text, size: 22, font: FONTS.sans })],
    }));
  }
  const bodyCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: COLORS.soft, type: ShadingType.CLEAR },
    margins: { top: 180, bottom: 180, left: 220, right: 220 },
    borders: cellNoBorders,
    children: bodyChildren,
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [
      new TableRow({ children: [labelCell] }),
      new TableRow({ children: [bodyCell] }),
    ],
  });
}

const missionBrief   = (...lines) => calloutBox({ label: "MISSION BRIEF",     accent: COLORS.navy,  body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });
const whyMatters     = (...lines) => calloutBox({ label: "WHY THIS MATTERS",  accent: "5B7E5B",     body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });
const tryThis        = (...lines) => calloutBox({ label: "TRY THIS",          accent: "B96B2B",     body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });
const pauseCheck     = (...lines) => calloutBox({ label: "PAUSE AND CHECK",   accent: "3D7A99",     body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });
const commonTrap     = (...lines) => calloutBox({ label: "COMMON TRAP",       accent: "B89A2B",     body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });
const niceWork       = (...lines) => calloutBox({ label: "NICE WORK",         accent: "5B7E5B",     body: lines[0], body2: lines[1], body3: lines[2], body4: lines[3] });

// Try-this with explicit numbered steps inside
function tryThisWithSteps(introText, steps) {
  const labelCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: "B96B2B", type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 220, right: 220 },
    borders: cellNoBorders,
    children: [new Paragraph({ children: [new TextRun({ text: "TRY THIS", bold: true, color: COLORS.white, size: 22, font: FONTS.display })] })],
  });
  const children = [];
  if (introText) {
    children.push(new Paragraph({
      spacing: { before: 60, after: 100, line: 320 },
      children: [new TextRun({ text: introText, color: COLORS.text, size: 22, font: FONTS.sans })],
    }));
  }
  steps.forEach((t, i) => {
    children.push(new Paragraph({
      spacing: { before: 80, after: 80, line: 320 },
      indent: { left: 360, hanging: 360 },
      children: [
        new TextRun({ text: `${i + 1}.  `, bold: true, color: "B96B2B", size: 24, font: FONTS.display }),
        new TextRun({ text: t, color: COLORS.text, size: 22, font: FONTS.sans }),
      ],
    }));
  });
  const bodyCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: COLORS.soft, type: ShadingType.CLEAR },
    margins: { top: 180, bottom: 180, left: 220, right: 220 },
    borders: cellNoBorders,
    children,
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [
      new TableRow({ children: [labelCell] }),
      new TableRow({ children: [bodyCell] }),
    ],
  });
}

// ---------- KSB box ----------

function ksbBox({ title, codes, blurb }) {
  // codes: array like ["S1 — find & extract data", "K7 — file types", ...]
  const labelCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: COLORS.navy, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 220, right: 220 },
    borders: cellNoBorders,
    children: [new Paragraph({ children: [new TextRun({ text: title, bold: true, color: COLORS.white, size: 22, font: FONTS.display })] })],
  });
  const children = [];
  if (blurb) {
    children.push(new Paragraph({
      spacing: { before: 60, after: 140, line: 320 },
      children: [new TextRun({ text: blurb, color: COLORS.text, size: 22, font: FONTS.sans })],
    }));
  }
  codes.forEach(c => {
    children.push(new Paragraph({
      spacing: { before: 40, after: 60, line: 300 },
      indent: { left: 360 },
      children: [
        new TextRun({ text: "•  ", bold: true, color: COLORS.navy, size: 22, font: FONTS.sans }),
        new TextRun({ text: c, color: COLORS.text, size: 22, font: FONTS.sans }),
      ],
    }));
  });
  const bodyCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: COLORS.sky, type: ShadingType.CLEAR },
    margins: { top: 180, bottom: 180, left: 220, right: 220 },
    borders: cellNoBorders,
    children,
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [
      new TableRow({ children: [labelCell] }),
      new TableRow({ children: [bodyCell] }),
    ],
  });
}

// ---------- Cover panel ----------

function coverPanel({ workbookNumber, title, difficulty, timeEstimate, scenarioName, tagline }) {
  // Big title block at the top of page 1.
  // Single-column "card" using a table for the coloured background.
  const cardCell = new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA },
    shading: { fill: COLORS.navy, type: ShadingType.CLEAR },
    margins: { top: 600, bottom: 600, left: 480, right: 480 },
    borders: cellNoBorders,
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 80 },
        children: [new TextRun({ text: scenarioName, color: "B5D3E5", size: 22, font: FONTS.sans, bold: true })],
      }),
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 220 },
        children: [new TextRun({ text: `Workbook ${workbookNumber}`, color: "FFFFFF", size: 28, font: FONTS.sans })],
      }),
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 220 },
        children: [new TextRun({ text: title, color: "FFFFFF", size: 56, bold: true, font: FONTS.display })],
      }),
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 0 },
        children: [new TextRun({ text: tagline, color: "B5D3E5", italics: true, size: 24, font: FONTS.sans })],
      }),
    ],
  });
  const card = new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [new TableRow({ children: [cardCell] })],
  });

  // Stats strip below: difficulty + time + a small note
  const half = Math.floor(CONTENT_W / 2);
  const statsLeft = new TableCell({
    width: { size: half, type: WidthType.DXA },
    shading: { fill: COLORS.sky, type: ShadingType.CLEAR },
    margins: { top: 240, bottom: 240, left: 280, right: 280 },
    borders: cellNoBorders,
    children: [
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "DIFFICULTY", bold: true, color: COLORS.navy, size: 18, font: FONTS.sans })] }),
      new Paragraph({ children: [new TextRun({ text: difficulty, bold: true, color: COLORS.text, size: 32, font: FONTS.display })] }),
    ],
  });
  const statsRight = new TableCell({
    width: { size: CONTENT_W - half, type: WidthType.DXA },
    shading: { fill: COLORS.sage, type: ShadingType.CLEAR },
    margins: { top: 240, bottom: 240, left: 280, right: 280 },
    borders: cellNoBorders,
    children: [
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "TIME TO COMPLETE", bold: true, color: "33522E", size: 18, font: FONTS.sans })] }),
      new Paragraph({ children: [new TextRun({ text: timeEstimate, bold: true, color: COLORS.text, size: 32, font: FONTS.display })] }),
    ],
  });
  const stats = new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [half, CONTENT_W - half],
    rows: [new TableRow({ children: [statsLeft, statsRight] })],
  });

  return [card, blank(120), stats];
}

// ---------- File-marker box (start file / complete file) ----------
function fileMarkers(startFile, completeFile) {
  const half = Math.floor(CONTENT_W / 2);
  const cell = (label, value, fill) => new TableCell({
    width: { size: half, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 160, bottom: 160, left: 220, right: 220 },
    borders: cellNoBorders,
    children: [
      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: label, bold: true, color: COLORS.navy, size: 18, font: FONTS.sans })] }),
      new Paragraph({ children: [new TextRun({ text: value, color: COLORS.text, size: 20, font: FONTS.sans })] }),
    ],
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [half, CONTENT_W - half],
    rows: [new TableRow({ children: [cell("START FILE", startFile, COLORS.soft), cell("COMPLETE FILE", completeFile, COLORS.soft)] })],
  });
}

// ---------- Section divider ----------
function sectionDivider() {
  // A thin coloured rule.
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORS.navy, space: 1 } },
    children: [new TextRun({ text: "" })],
  });
}

// ---------- Document scaffold ----------

function makeDocSkeleton(children) {
  const { Document, Footer, AlignmentType: A } = require("docx");
  return new Document({
    creator: "Drakonex Training Pack",
    title: "Drakonex SD1",
    styles: {
      default: { document: { run: { font: FONTS.sans, size: 22, color: COLORS.text } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 40, bold: true, font: FONTS.display, color: COLORS.navy },
          paragraph: { spacing: { before: 200, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 30, bold: true, font: FONTS.display, color: COLORS.navy },
          paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      ],
    },
    numbering: {
      config: [
        { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•",
          alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.",
          alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      ],
    },
    sections: [{
      properties: { page: { size: { width: PAGE.width, height: PAGE.height }, margin: PAGE.margin } },
      children,
    }],
  });
}

module.exports = {
  COLORS, CONTENT_W, FONTS,
  p, blank, pageBreak, h1, h2, h3, intro, quoteFromMarigold, bullet, step,
  missionBrief, whyMatters, tryThis, tryThisWithSteps, pauseCheck, commonTrap, niceWork,
  ksbBox, coverPanel, fileMarkers, sectionDivider,
  makeDocSkeleton,
};

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "linshi-studio-sample-website-ai-search-review.pdf"

INK = colors.HexColor("#0A0B0E")
BLUE = colors.HexColor("#315DFF")
PALE_BLUE = colors.HexColor("#E8EDFF")
PAPER = colors.HexColor("#F4F1EA")
MUTED = colors.HexColor("#666A73")
LINE = colors.HexColor("#D7D4CD")
WHITE = colors.white
RED = colors.HexColor("#C64539")
AMBER = colors.HexColor("#A76A08")
GREEN = colors.HexColor("#267052")


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverKicker", fontName="Helvetica-Bold", fontSize=8, leading=10,
    textColor=colors.HexColor("#95ABFF"), spaceAfter=10, uppercase=True,
))
styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Helvetica-Bold", fontSize=33, leading=31,
    textColor=WHITE, spaceAfter=14,
))
styles.add(ParagraphStyle(
    name="CoverBody", fontName="Helvetica", fontSize=10.2, leading=15,
    textColor=colors.HexColor("#CFD1D8"), spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="SectionKicker", fontName="Helvetica-Bold", fontSize=7.5, leading=9,
    textColor=BLUE, spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="SectionTitle", fontName="Helvetica-Bold", fontSize=22, leading=23,
    textColor=INK, spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="BodySmall", fontName="Helvetica", fontSize=8.8, leading=13,
    textColor=MUTED, spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="Body", fontName="Helvetica", fontSize=9.5, leading=14,
    textColor=INK, spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="CardTitle", fontName="Helvetica-Bold", fontSize=10, leading=13,
    textColor=INK, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="CardBody", fontName="Helvetica", fontSize=8, leading=11.5,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="Tiny", fontName="Helvetica", fontSize=6.8, leading=9,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="TableHead", fontName="Helvetica-Bold", fontSize=7, leading=9,
    textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="TableCell", fontName="Helvetica", fontSize=7.3, leading=10,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="TableCellBold", fontName="Helvetica-Bold", fontSize=7.3, leading=10,
    textColor=INK,
))


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(INK)
    canvas.rect(0, height - 13 * mm, width, 13 * mm, fill=1, stroke=0)
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 7.5)
    canvas.drawString(18 * mm, height - 8.2 * mm, "LINSHI STUDIO")
    canvas.setFillColor(colors.HexColor("#8FA7FF"))
    canvas.setFont("Helvetica", 7)
    canvas.drawRightString(width - 18 * mm, height - 8.2 * mm, "SAMPLE - NOT A CLIENT RESULT")
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 6.8)
    canvas.drawString(18 * mm, 9 * mm, "Annual website + AI-search discoverability review")
    canvas.drawRightString(width - 18 * mm, 9 * mm, f"{doc.page}")
    canvas.restoreState()


class ReviewDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(
            filename,
            pagesize=A4,
            rightMargin=18 * mm,
            leftMargin=18 * mm,
            topMargin=22 * mm,
            bottomMargin=19 * mm,
            title="Linshi Studio sample website and AI-search review",
            author="Linshi Studio",
            subject="Clearly labelled sample deliverable",
        )
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="main")
        self.addPageTemplates([PageTemplate(id="review", frames=frame, onPage=header_footer)])


def label(text, colour=BLUE):
    return Table(
        [[Paragraph(text.upper(), ParagraphStyle(
            "pill", fontName="Helvetica-Bold", fontSize=6.4, leading=7.5,
            textColor=WHITE, alignment=TA_LEFT,
        ))]],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colour),
            ("LEFTPADDING", (0, 0), (-1, -1), 7),
            ("RIGHTPADDING", (0, 0), (-1, -1), 7),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ]),
        hAlign="LEFT",
    )


def metric(title, value, note, colour=BLUE):
    data = [[
        Paragraph(title.upper(), styles["Tiny"]),
        Paragraph(value, ParagraphStyle(
            "metric", fontName="Helvetica-Bold", fontSize=13.5, leading=16,
            alignment=TA_RIGHT, textColor=colour,
        )),
    ], [Paragraph(note, styles["CardBody"]), ""]]
    return Table(data, colWidths=[55 * mm, 22 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("SPAN", (0, 1), (1, 1)),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))


def priority_row(level, title, evidence, action, colour):
    return [
        label(level, colour),
        Paragraph(f"<b>{title}</b><br/><font color='#666A73'>{evidence}</font>", styles["TableCell"]),
        Paragraph(action, styles["TableCell"]),
    ]


def build_story():
    story = []

    # Cover
    cover = Table([[""]], colWidths=[174 * mm], rowHeights=[232 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), INK),
        ("BOX", (0, 0), (-1, -1), 0, INK),
    ]))
    overlay = [
        Paragraph("FIXED-SCOPE SAMPLE DELIVERABLE", styles["CoverKicker"]),
        Spacer(1, 16 * mm),
        Paragraph("Website &amp;<br/>AI-search<br/>discoverability<br/>review.", styles["CoverTitle"]),
        Spacer(1, 6 * mm),
        Paragraph("Illustrative UK renovation business", ParagraphStyle(
            "coverclient", fontName="Helvetica-Bold", fontSize=13, leading=16,
            textColor=WHITE, spaceAfter=8,
        )),
        Paragraph("Prepared to demonstrate the structure and standard of a Linshi Studio annual review. All business details, findings and scores are fictional examples; this is not a claimed client result.", styles["CoverBody"]),
        Spacer(1, 17 * mm),
        Table([[Paragraph("£350", ParagraphStyle("coverprice", fontName="Helvetica-Bold", fontSize=28, textColor=WHITE)), Paragraph("One annual review<br/>No UK VAT charged", styles["CoverBody"]) ]], colWidths=[56*mm, 87*mm], style=TableStyle([
            ("BACKGROUND", (0,0), (-1,-1), BLUE),
            ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
            ("LEFTPADDING", (0,0), (-1,-1), 12),
            ("RIGHTPADDING", (0,0), (-1,-1), 12),
            ("TOPPADDING", (0,0), (-1,-1), 10),
            ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ])),
    ]
    cover_content = Table([[overlay]], colWidths=[148 * mm], rowHeights=[198 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), INK),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 15 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 15 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 18 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 18 * mm),
    ]))
    story.append(cover_content)
    story.append(PageBreak())

    # Executive snapshot
    story += [
        Paragraph("01 / EXECUTIVE SNAPSHOT", styles["SectionKicker"]),
        Paragraph("Three decisions before any redesign.", styles["SectionTitle"]),
        Paragraph("The example business has good project evidence, but a mobile visitor has to work too hard to understand location, service fit and the next action. The first priority is not a new visual identity; it is a clearer enquiry path backed by precise service and place information.", styles["Body"]),
        Spacer(1, 5 * mm),
        Table([[metric("Mobile enquiry clarity", "54/100", "Main action competes with secondary navigation.", RED), metric("Trust evidence", "78/100", "Useful projects exist but are not surfaced early.", GREEN)]], colWidths=[84*mm,84*mm], style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),6)])),
        Spacer(1, 4 * mm),
        Table([[metric("Service/location clarity", "61/100", "Cambridge and extension services need a clearer relationship.", AMBER), metric("AI-search readiness", "58/100", "Crawler access alone is not enough; facts need clearer expression.", AMBER)]], colWidths=[84*mm,84*mm], style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),6)])),
        Spacer(1, 9 * mm),
        Paragraph("Recommended order", styles["CardTitle"]),
        Table([
            [Paragraph("1", styles["TableCellBold"]), Paragraph("Make one mobile enquiry action dominant on project and service pages.", styles["TableCell"])],
            [Paragraph("2", styles["TableCellBold"]), Paragraph("State exactly which Cambridge-area extension and renovation services are offered, using visible copy rather than metadata alone.", styles["TableCell"])],
            [Paragraph("3", styles["TableCellBold"]), Paragraph("Connect each priority service to one relevant project example and a clear contact route.", styles["TableCell"])],
        ], colWidths=[12*mm,156*mm], style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),PALE_BLUE),
            ("GRID",(0,0),(-1,-1),.5,WHITE),
            ("VALIGN",(0,0),(-1,-1),"TOP"),
            ("LEFTPADDING",(0,0),(-1,-1),9),
            ("RIGHTPADDING",(0,0),(-1,-1),9),
            ("TOPPADDING",(0,0),(-1,-1),9),
            ("BOTTOMPADDING",(0,0),(-1,-1),9),
        ])),
        Spacer(1, 8 * mm),
        Paragraph("Sample basis and limits", styles["CardTitle"]),
        Paragraph("Illustrative desktop and mobile review of a fictional public website. No analytics, search-console data, customer interviews, private systems or live-site access are assumed. Scores demonstrate prioritisation, not an industry benchmark or promised commercial result.", styles["BodySmall"]),
        PageBreak(),
    ]

    # Priority table
    story += [
        Paragraph("02 / PRIORITISED FINDINGS", styles["SectionKicker"]),
        Paragraph("Evidence first. Then action.", styles["SectionTitle"]),
        Paragraph("A live report replaces the fictional examples below with page-specific evidence and direct URLs. The action column is written so a business owner, designer or developer can use it without interpreting vague audit language.", styles["BodySmall"]),
        Spacer(1, 5 * mm),
    ]
    rows = [[Paragraph("Priority", styles["TableHead"]), Paragraph("Finding and evidence", styles["TableHead"]), Paragraph("Recommended action", styles["TableHead"])]]
    rows += [
        priority_row("High", "The primary mobile action changes between pages", "The home page favours a phone call while project pages end with a general contact link. A visitor cannot predict the fastest route.", "Choose one primary action for mobile visitors and repeat the same label and destination after service proof and project evidence.", RED),
        priority_row("High", "Service area is implied rather than stated", "Cambridge appears in the footer, but the priority extension service is not consistently paired with the place in visible headings and body copy.", "Add a concise service-area statement to the relevant service and project pages; keep it factual and avoid doorway-page duplication.", RED),
        priority_row("Medium", "Strong projects sit too far from the decision", "Useful photography and project summaries exist, but the visitor reaches them after broad company copy.", "Surface one directly relevant project beside each priority service and explain what was delivered in plain language.", AMBER),
        priority_row("Medium", "Crawler access is not the same as citation clarity", "The public pages can be crawled in this sample, but service, location and business-identity facts are spread across sections.", "Consolidate verifiable identity, service and location statements in visible copy and consistent structured information.", AMBER),
        priority_row("Watch", "No measurement for the main enquiry step", "Page-view analytics alone cannot show whether the clearer path produces more completed enquiries.", "Track the thank-you page or a server-confirmed enquiry event while avoiding unnecessary visitor profiling.", BLUE),
    ]
    story.append(Table(rows, colWidths=[25*mm,78*mm,65*mm], repeatRows=1, style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0),INK),
        ("GRID",(0,0),(-1,-1),.45,LINE),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("RIGHTPADDING",(0,0),(-1,-1),7),
        ("TOPPADDING",(0,0),(-1,-1),8),
        ("BOTTOMPADDING",(0,0),(-1,-1),8),
        ("BACKGROUND",(0,1),(-1,-1),WHITE),
    ])))
    story += [Spacer(1, 7 * mm), Paragraph("Priority definitions", styles["CardTitle"]), Paragraph("High: address before adding new pages or campaigns. Medium: valuable once the primary journey is clear. Watch: verify or measure; do not change merely to satisfy an audit checklist.", styles["BodySmall"]), PageBreak()]

    # Journey + AI
    story += [
        Paragraph("03 / MOBILE CUSTOMER JOURNEY", styles["SectionKicker"]),
        Paragraph("One phone. One obvious next step.", styles["SectionTitle"]),
        Paragraph("The example journey below shows the intended sequence for a homeowner comparing extension specialists. It is not a requirement to make every page identical; it is a decision hierarchy.", styles["BodySmall"]),
        Spacer(1, 4 * mm),
    ]
    journey = []
    for number, title, copy in [
        ("01", "Recognise the fit", "Extension and renovation service, Cambridge area, stated without scrolling through generic company copy."),
        ("02", "See relevant proof", "One comparable project, what was done and a clear indication of the standard of finish."),
        ("03", "Understand the next step", "What information the business needs and whether the visitor should call, email or complete an enquiry."),
        ("04", "Receive confirmation", "A successful submission page with a reference and realistic response expectation."),
    ]:
        journey.append(Table([[Paragraph(number, ParagraphStyle("jn", fontName="Helvetica-Bold", fontSize=14, textColor=BLUE)), Paragraph(f"<b>{title}</b><br/><font color='#666A73'>{copy}</font>", styles["TableCell"]) ]], colWidths=[18*mm,145*mm], style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),PAPER),
            ("BOX",(0,0),(-1,-1),.6,LINE),
            ("VALIGN",(0,0),(-1,-1),"TOP"),
            ("LEFTPADDING",(0,0),(-1,-1),10),
            ("RIGHTPADDING",(0,0),(-1,-1),10),
            ("TOPPADDING",(0,0),(-1,-1),10),
            ("BOTTOMPADDING",(0,0),(-1,-1),10),
        ])))
        journey.append(Spacer(1, 3 * mm))
    story += journey
    story += [Spacer(1, 5 * mm), Paragraph("Example acceptance checks", styles["CardTitle"])]
    checks = [
        "320 px and 375 px widths: no horizontal overflow; main action remains visible and tappable.",
        "Required form fields have labels, useful validation and a privacy link.",
        "Successful submission creates a server record and a reference; failure does not pretend the enquiry was sent.",
        "Email, phone and address details are consistent between the page, footer and structured information.",
    ]
    story.append(Table([[Paragraph("PASS / WARN", styles["Tiny"]), Paragraph(item, styles["TableCell"])] for item in checks], colWidths=[30*mm,138*mm], style=TableStyle([
        ("GRID",(0,0),(-1,-1),.45,LINE),
        ("BACKGROUND",(0,0),(0,-1),PALE_BLUE),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),8),
        ("RIGHTPADDING",(0,0),(-1,-1),8),
        ("TOPPADDING",(0,0),(-1,-1),7),
        ("BOTTOMPADDING",(0,0),(-1,-1),7),
    ])))
    story.append(PageBreak())

    story += [
        Paragraph("04 / AI-SEARCH DISCOVERABILITY", styles["SectionKicker"]),
        Paragraph("Accessible facts, not magic keywords.", styles["SectionTitle"]),
        Paragraph("AI-search review is limited to public discoverability signals that the business controls. It does not include a chatbot, an API integration, directory submission or a promise that any system will include, cite or rank the website.", styles["Body"]),
        Spacer(1, 4 * mm),
    ]
    ai_rows = [[Paragraph("Check", styles["TableHead"]), Paragraph("Example observation", styles["TableHead"]), Paragraph("Decision", styles["TableHead"])]]
    for check, observation, decision in [
        ("Crawler access", "Illustrative robots rules do not block the public service pages intended for discovery.", "Keep access explicit and recheck after platform or security changes."),
        ("Business identity", "Name and contact route are visible, but legal/business identity is not expressed consistently.", "Use one consistent public identity across footer, contact page and structured information."),
        ("Service + place", "Cambridge and extension services are present but separated across the page hierarchy.", "Pair service and place naturally where the statement is useful to a human visitor."),
        ("Citation-ready evidence", "Project summaries describe appearance more than scope, property type and outcome.", "Add short factual project summaries without inventing measurements or client claims."),
        ("Structured information", "Basic organisation markup exists in this example; service details are incomplete.", "Align structured information with visible, verified page content."),
    ]:
        ai_rows.append([Paragraph(check, styles["TableCellBold"]), Paragraph(observation, styles["TableCell"]), Paragraph(decision, styles["TableCell"])])
    story.append(Table(ai_rows, colWidths=[35*mm,67*mm,66*mm], repeatRows=1, style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0),INK),
        ("GRID",(0,0),(-1,-1),.45,LINE),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("RIGHTPADDING",(0,0),(-1,-1),7),
        ("TOPPADDING",(0,0),(-1,-1),8),
        ("BOTTOMPADDING",(0,0),(-1,-1),8),
    ])))
    story += [
        Spacer(1, 8 * mm),
        KeepTogether([
            label("Important boundary", INK),
            Spacer(1, 3 * mm),
            Table([[Paragraph("Search and AI systems make their own inclusion and ranking decisions. This review can identify access, clarity and evidence improvements on the website; it cannot guarantee discovery, citation, position or traffic.", styles["Body"]) ]], colWidths=[168*mm], style=TableStyle([
                ("BACKGROUND",(0,0),(-1,-1),PALE_BLUE),
                ("LEFTPADDING",(0,0),(-1,-1),12),
                ("RIGHTPADDING",(0,0),(-1,-1),12),
                ("TOPPADDING",(0,0),(-1,-1),11),
                ("BOTTOMPADDING",(0,0),(-1,-1),5),
            ])),
        ]),
        PageBreak(),
    ]

    # Action plan and scope
    story += [
        Paragraph("05 / 30-DAY ACTION PLAN", styles["SectionKicker"]),
        Paragraph("Sequence protects the budget.", styles["SectionTitle"]),
        Paragraph("The review separates what should happen first from work that can wait. Implementation is not included in the £350 review; the business can use its own team or request a separate written quotation.", styles["Body"]),
        Spacer(1, 5 * mm),
    ]
    plan_rows = [[Paragraph("Timing", styles["TableHead"]), Paragraph("Owner decision", styles["TableHead"]), Paragraph("Acceptance evidence", styles["TableHead"])]]
    for timing, decision, evidence in [
        ("Days 1-5", "Confirm the single main mobile action and the exact service-area statement.", "Approved wording and destination for the primary action."),
        ("Days 6-15", "Place one relevant project beside each priority service and strengthen factual summaries.", "Mobile page shows service, evidence and next action in one journey."),
        ("Days 16-25", "Align visible business/service facts with structured information and crawler rules.", "Public pages and technical signals agree; no invented claims."),
        ("Days 26-30", "Test the enquiry path and establish a simple conversion baseline.", "Successful submission, reference, notification and thank-you page verified."),
    ]:
        plan_rows.append([Paragraph(timing, styles["TableCellBold"]), Paragraph(decision, styles["TableCell"]), Paragraph(evidence, styles["TableCell"])])
    story.append(Table(plan_rows, colWidths=[28*mm,72*mm,68*mm], repeatRows=1, style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0),BLUE),
        ("GRID",(0,0),(-1,-1),.45,LINE),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),8),
        ("RIGHTPADDING",(0,0),(-1,-1),8),
        ("TOPPADDING",(0,0),(-1,-1),9),
        ("BOTTOMPADDING",(0,0),(-1,-1),9),
    ])))
    story += [
        Spacer(1, 9 * mm),
        Paragraph("Included in the fixed £350 review", styles["CardTitle"]),
        Paragraph("One annual review of the agreed public website; main website and mobile journey; navigation, wording and obvious usability; OAI-SearchBot access and AI-search clarity; a concise prioritised report and short handover email.", styles["BodySmall"]),
        Paragraph("Not included", styles["CardTitle"]),
        Paragraph("Live website changes; chatbot or API integration; directory submission; ongoing monitoring; paid media; professional legal or accessibility certification; guarantee of inclusion, citation or ranking. Any implementation requires separate written scope and approval.", styles["BodySmall"]),
        Spacer(1, 9 * mm),
        Table([[Paragraph("READY TO REQUEST A FIT CHECK?", ParagraphStyle("finalk", fontName="Helvetica-Bold", fontSize=7, textColor=colors.HexColor("#9CB0FF"))), Paragraph("hello@linshistudio.com", ParagraphStyle("finalemail", fontName="Helvetica-Bold", fontSize=12, textColor=WHITE, alignment=TA_RIGHT))], [Paragraph("Send the current website, business name and the main action customers should take.", ParagraphStyle("finalbody", fontName="Helvetica", fontSize=8, leading=11, textColor=colors.HexColor("#D6D8DF"))), Paragraph("linshistudio.com/website-review", ParagraphStyle("finalurl", fontName="Helvetica", fontSize=7.5, textColor=colors.HexColor("#9CB0FF"), alignment=TA_RIGHT))]], colWidths=[86*mm,82*mm], style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),INK),
            ("VALIGN",(0,0),(-1,-1),"TOP"),
            ("LEFTPADDING",(0,0),(-1,-1),12),
            ("RIGHTPADDING",(0,0),(-1,-1),12),
            ("TOPPADDING",(0,0),(-1,-1),12),
            ("BOTTOMPADDING",(0,0),(-1,-1),12),
        ])),
    ]
    return story


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = ReviewDoc(str(OUTPUT))
    doc.build(build_story())
    print(OUTPUT)


if __name__ == "__main__":
    main()

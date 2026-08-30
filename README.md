# DataPilot Launchpad

Build the HOME PAGE for a web application called DataPilot.

IMPORTANT PRODUCT CONTEXT:

DataPilot is an AI-powered spreadsheet intelligence platform. Users upload Excel or CSV spreadsheets, then interact with their data using natural-language questions. AI agents process the spreadsheet, clean and analyze the data, generate visualizations, and provide actionable insights.

The application has TWO DISTINCT AREAS:

1. HOME PAGE — a launchpad/dashboard similar in STRUCTURE to Microsoft Excel's Home screen.
2. ANALYSIS DASHBOARD — a separate workspace where users actually upload, analyze, visualize, and interact with their spreadsheet.

I am currently designing ONLY the HOME PAGE.

DO NOT turn the Home Page into the actual spreadsheet analysis/upload workspace.

The Home Page should feel like a polished productivity application's starting screen, inspired by the layout and information hierarchy of Microsoft Excel's Home screen, but NOT copied visually or branded as Microsoft Excel.

DESIGN DIRECTION:

Use DataPilot's existing visual identity:

- Dark near-black background
- Deep forest green surfaces
- Emerald/green accent color
- Subtle green glow effects
- Fine grid/background texture
- White and muted gray typography
- Rounded cards
- Subtle borders
- Minimal, premium SaaS aesthetic
- Modern AI/productivity feel
- Clean and spacious
- Professional rather than flashy

The Home Page must visually match the DataPilot landing page and authentication pages.

Do NOT introduce blue, purple, or unrelated accent colors.

LAYOUT:

Create a fixed left sidebar and a scrollable main content area.

LEFT SIDEBAR:

At the top:

DataPilot logo with the existing DataPilot branding style.

Navigation:

Home
New Analysis
History

Home should be highlighted using the DataPilot green accent.

At the bottom of the sidebar:

Profile section showing:

Glain D'Souza
glain@example.com

Include a profile/avatar circle.

Clicking the profile area should open a small menu containing:

Profile
Settings
Logout

Use clean Lucide-style icons.

MAIN CONTENT:

At the top of the main content:

"Good evening, Glain 👋"

Below it:

"What would you like to work on today?"

Supporting text:

"Start a new analysis, continue where you left off, or learn how to get more from your data."

SECTION 1 — NEW

Create a "New" section inspired by the structure of Microsoft Excel's Home page.

IMPORTANT:
Do NOT create a giant spreadsheet upload/drop zone here.

Instead, create attractive horizontal/large cards.

CARD 1:

"New Analysis"

Description:
"Upload an Excel or CSV file and let DataPilot turn your data into insights."

Include an appropriate spreadsheet/plus icon.

Primary action:
"Start analysis"

Clicking this should navigate to the separate analysis/upload dashboard.

CARD 2:

"Ask DataPilot"

Description:
"Explore your spreadsheet using natural-language questions."

Include an AI/sparkles/chat icon.

Action:
"Ask a question"

CARD 3:

"Sample Analysis"

Description:
"Explore DataPilot using a sample dataset."

Include a chart/data icon.

Action:
"Try sample"

These cards should be visually consistent and not overwhelm the page.

SECTION 2 — RECENT ANALYSES

Create a "Recent analyses" section similar to Excel's "Recent" files area.

Show a clean list/table of recently analyzed spreadsheets.

Each item should contain:

- Spreadsheet/file icon
- Analysis name
- File name
- Last analyzed date/time
- Small action button or "Open"

Example placeholder data:

Sales Performance
sales_2026.xlsx
Today

Student Performance
student_results.xlsx
Yesterday

Product Price Analysis
product_prices.csv
3 days ago

Use realistic placeholder data only for the UI.

Include:

"View all history →"

This should navigate to the History page.

Also design an empty state if there are no recent analyses:

"No analyses yet"

"Upload your first spreadsheet and let DataPilot uncover the insights."

Button:
"Start your first analysis"

SECTION 3 — LEARN DATA PILOT

Create a tutorial/learning section inspired by the tutorial cards shown on Microsoft Excel's Home page.

Title:

"Learn DataPilot"

Subtitle:

"Get more from your spreadsheets with DataPilot."

Create visually appealing tutorial cards with thumbnail-style areas.

Tutorial cards:

1. "Getting started with DataPilot"
   "Learn how to upload your first spreadsheet and begin analyzing."

2. "Ask questions in natural language"
   "See how DataPilot turns simple questions into data analysis."

3. "From data to visualizations"
   "Learn how DataPilot creates meaningful charts from your data."

4. "Understanding AI insights"
   "Learn how to interpret and use DataPilot's generated insights."

Each card should have:
- Video/play icon
- Thumbnail/illustration area
- Tutorial title
- Short description
- Optional duration

The tutorial cards should look polished and visual, not like plain text boxes.

OPTIONAL SECTION — QUICK ACTIONS

If the layout has enough space, add a small "Quick actions" area with:

Upload spreadsheet
View history
Ask DataPilot

Keep this subtle.

RESPONSIVE DESIGN:

Desktop:
- Fixed sidebar
- Spacious main content
- Cards arranged horizontally where appropriate

Tablet:
- Collapsible/sidebar-friendly layout

Mobile:
- Sidebar becomes a mobile navigation
- Cards stack vertically

INTERACTIONS:

Add subtle hover animations:
- Cards lift slightly
- Green border/glow appears on hover
- Icons animate subtly
- Buttons have smooth transitions

Do NOT over-animate.

IMPORTANT NAVIGATION BEHAVIOR:

Home → stays on Home.

New Analysis → opens the separate spreadsheet upload/analysis dashboard.

History → opens the analysis history page.

Profile → opens profile/settings/logout menu.

Tutorial cards → open the tutorial/video experience.

The Home Page should NOT contain the actual spreadsheet analysis interface.

IMPORTANT VISUAL DISTINCTION:

HOME PAGE:
A welcoming launchpad showing:
- New analysis options
- Recent analyses
- Tutorials
- Quick actions

ANALYSIS DASHBOARD:
A separate workspace containing:
- Spreadsheet upload
- Dataset preview
- AI agent processing
- Natural-language query interface
- Charts
- Insights
- Data cleaning/analysis controls

Keep these two experiences visually and functionally distinct.

REFERENCE:

Use the Microsoft Excel Home screenshot only as inspiration for:
- Overall information hierarchy
- "New" section
- Recent files/analyses section
- Tutorial cards
- Productivity-app home page structure

DO NOT copy Microsoft's colors, branding, logos, text, or exact UI.

The final result should feel like:
"Microsoft Excel Home page structure + modern AI SaaS + DataPilot's dark green identity."

Make the interface production-quality, polished, cohesive, and consistent with the DataPilot landing and login/signup pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5d81b307-4598-467d-99e1-8a65f10b3cea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

WasteWise Agent
An AI agent that helps households and waste collectors classify waste as wet or dry using a photo of the waste item — grounded in real CPCB and municipal solid waste management rules, with human-in-the-loop escalation for ambiguous or unrecognizable items.


Built for the Kaggle 5-Day AI Agents Intensive Vibe Coding Course capstone, "Agents for Good" track.


Built by Muvvala Venkata Sai Supraj


The Problem
Households and informal waste collectors have no reliable, instant way to sort waste correctly — wet organic waste mixed with dry recyclables contaminates both streams, reducing recycling efficiency and increasing landfill burden. Most people don't know what the Solid Waste Management Rules, 2016 (India) actually say about segregation at source.

How It Works
A 3-node pipeline:

vision_screen — Gemini Vision API identifies the waste item from an uploaded photo and extracts visual cues (texture, color, moisture, material type)
waste_classifier — compares extracted features against SWM Rules 2016 / CPCB-derived category definitions, with citations to the actual regulation, and classifies as Wet, Dry, or Hazardous/E-Waste
Routing — escalates to human review if confidence is too low or the item is unrecognizable, instead of guessing


Tech Stack

Flask (Python backend)
Google Gemini Vision API (gemini-2.5-flash)
Agent Skills (CPCB / SWM Rules regulation grounding)
Built and iterated using Google Antigravity (IDE/CLI)


Known Limitations

Visual classification is a proxy — some items (e.g. soiled paper, food-contaminated plastic) may straddle categories and require tactile or contextual judgment
Vision-model confidence is self-reported, not independently validated
Hazardous / e-waste detection is limited to common household examples; industrial waste is out of scope
Not deployed to live infrastructure — demonstrated via local execution


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

# Google Forms Integration Guide for LakshyaCV

To connect your application to Google Forms and save responses in a Google Sheet, follow these steps precisely:

## 1. Configure Your Google Form
- **Public Access (CRITICAL):**
  - Go to **Settings** -> **Responses**.
  - Disable "Restrict to users in [Organization]".
  - Disable "Limit to 1 response".
- **Field Matching (Use Paragraph/Long Answer for complex data):**
  - Full Name (Short answer)
  - Mobile, Email, Address, LinkedIn, Portfolio (Short answer)
  - **Career Objective (Paragraph)**
  - **Education, Skills, Experience, Projects (Paragraph)** - *These are sent as formatted text or JSON and need space.*
  - **Certifications, Languages (Paragraph)**
  - **Selected Template (Short answer)**

## 2. Get Your Entry IDs
- Preview your form.
- Right-click on each input field and select **Inspect**.
- Find the `name` attribute (e.g., `name="entry.12345678"`).
- Copy these numbers for each field, especially the new **Transaction ID** field.

## 3. How Pre-filling Works
The app now automatically adds the template name to the URL using your `templateEntryId`. 

- Open `src/constants.ts`.
- Update `templateEntryId` with the ID you found in Step 2.
- Example: If your "Selected Template" field ID is `entry.9876543`, change `constants.ts` to:
  ```javascript
  export const GOOGLE_FORM_CONFIG = {
    baseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd0AF_AOkOTdDl3mZDZiP35oyo5krjij_-uLEpMPU4Q3qie5A/viewform?usp=preview",
    templateEntryId: "entry.9876543",
  };
  ```

## 4. Why use this approach?
- **Direct Submission:** User sees your actual Google Form immediately.
- **Pre-filled:** They don't have to type which template they chose; it's already there.
- **Reliable:** No CORS or Fetch issues since it's a standard link.

export const MODES = {
  humanize: `Rewrite the user's text into ONE natural, human-like version. 
    Instructions:
    - Avoid repetitive AI sentence structures and "bot-like" vocabulary.
    - Focus on a conversational yet clear flow.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" explaining how you made it sound more human.`,

  professional: `Rewrite the user's text into ONE polished, professional version suitable for a corporate environment.
    Instructions:
    - Use authoritative, clear, and sophisticated language.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" with a bulleted list of the professional adjustments made.`,

  academic: `Rewrite the user's text into ONE high-quality academic version.
    Instructions:
    - Use scholarly vocabulary and objective, formal phrasing.
    - Ensure logical transitions between ideas.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" highlighting the academic terminology and structural changes.`,

  casual: `Rewrite the user's text into ONE friendly, casual version.
    Instructions:
    - Use a warm, relaxed tone as if speaking to a friend.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" explaining how the tone was relaxed.`,

  creative: `Rewrite the user's text into ONE engaging, creative version.
    Instructions:
    - Use vivid imagery and an expressive, artistic style.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" describing the creative choices made.`,

  shorten: `Rewrite the user's text into ONE concise version.
    Instructions:
    - Remove all fluff while retaining 100% of the core meaning.
    - Provide the paraphrased text first.
    - After the text, add a separator line "---".
    - Under the separator, add a section "### Key Improvements" listing what was condensed for brevity.`
};
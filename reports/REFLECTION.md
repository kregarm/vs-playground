## You’ve just joined the team. There’s no test suite, no QA process, and the team ships to production weekly. Where do you start, and what do you consciously deprioritise — and why?

I’d focus first on the next release, because that is the most immediate business risk. I’d use exploratory testing to learn the product while still adding value right away, and I’d spend time understanding the team, the release process, and the areas that have historically caused problems.

Because the team ships weekly, I’d introduce a lightweight smoke regression suite around the main flows and the areas that break most often. That gives the team a basic release safety net without adding much process overhead.

I would consciously deprioritize full-scale automation, heavy documentation, and broad coverage at the start. Without understanding the product and the real risks, those would be expensive investments with low short-term return. My priority would be fast risk reduction and creating a foundation the team can build on.

## A developer on your team uses AI to generate a full test suite for a new feature in 20 minutes. What's your reaction, and what do you do next that they can't?

Curiosity, mostly. I’d inspect the suite and ask whether it gives us real confidence or just a lot of test cases. I’d want to see how well it maps to business-critical behavior, not just to the feature code.

What I do next is evaluate the quality of the suite in a way AI can’t fully do on its own: decide whether the tests are actually valuable, whether they cover the right risks, whether they are maintainable, and what important gaps still remain.

Also, even without AI, writing E2E tests is not necessarily that time-consuming when the framework and setup are already there. Speed is not really the interesting part. The important part is choosing the tests that bring real value: the ones that are stable, meaningful, and protect the areas that matter most to the business.

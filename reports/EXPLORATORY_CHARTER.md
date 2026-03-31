# Exploratory testing sessions

## Charter 1: Explore the app freely

**Objective**
Explore the app to understand its purpose, map the user flows, and document its features
<em>the point of this charter is merely to understand what the app is and influence further exploratory charters</em>

**Notes:**
- This is a real estate app seemingly for BTC
-Main part of the screen is taken up by an interactive map
- Right side of the screen is reserved for the results -> actual properties available for rent, or general enquiries
- - Clicking on the map filters the results
- - Clicking on a card opens up detailed view with a submit form
- - Some properties appear as a package (two overlaying cards)
- I can toggle between 3 cities (Lj, Nm, Ms)
- Filter is placed at the top-right and affects both the map and results
- Wizard is available to help the user find the appropriate property
- This seems like a desktop-first app; only do the most basic smoke-test on mobile
- Map should be validated across browsers
- Wizard, map, and submit from seem like good next steps for testing

## Charter 2: Wizard

**Objective**
Check if the wizard actually helps and shows correct results or not; wizard uses the filtering to show the result - validate results match between wizard and filtering

**Notes:**
- Trgovina + 200 m2 <-> 500 m2 + zunanja površina results in a property on the 1st floor
- - I might not understand “zunanja površina” but I assume the 1st floor is not outside
- Skladišče + 500 m2 <-> 1000 m2 results in a combo package
- - Combined size matches, but breakdown shows that “Trgovina” takes up 830m2, but actual “Skladišče” is only 33 m2?
- Wizard and general filters seem in sync
- Seems to work fine across cities

## Charter 3: Submit form

**Objective**
General submit form exploratory test - basic validations check, try to spot any funny behavior

**Notes:**
- Validations seem fine, but there is “Podjetje” dropdown which pulls data for the BE
- - Seems like companies are missing; could be deliberate or a poor dataset
- - Mercator is missing, Spar, etc?
- General enquiry has a different form
- - Bug spotted - open enquiry form within NM or MS, toggle “Tip prostora” -> I get redirected to /ljubljana with a bunch of console errors and a page that does not load
- - Another one - enquiry is tied to one of the available property types; meaning that dropdown has one option and this one can be deleted and no new one can be selected

**I don't have access to the management part of the app -> I see my data in a network request that did not fail and I assume that it works correctly**

## Map

**Objective**
See if the map correctly filters the results and vice versa; check across the cities as well
**Notes:**
- Seems to work fine - map and results match
- Some of the namings are off? // Production shows the same, not a bug
- - Arena is marked as Dvorana 18
- - Emporium as Dvorana D
- Bugs spotted: NM and MS have results in filters that don’t match the map
- - Aleja Mladih in MS only exists in filters, not on the map
- - NM has Odprta deponija in filters, not on the map

# Bugs

This is just what I found during the testing session, and is basically a duplicate on what is written on the cards above; "formal" reports are linked [here](BUGS.md)

Bug 1: Filter does not match the map

Bug 2: Missing companies in the dropdown

Bug 3: General enquiry form is buggy

Question: Some results do not make sense to me; are they bugs or features?

# Risk Areas

Given that the application is meant for finding rental commercial properties, there are two main flows that I think are most important:
1. **Filtering**; prospects should be able to find an appropriate property

    1. Wizard is important as well; it’s displayed by default for new visitors

2. Actual **submit form**; once the property has been found, the submit form needs to work for the rental business to work

Another thing I’d flag as risky is the map. It takes up 80% of the page, acts as eye candy and actual filter as well. Has the potential to cause issues across different platforms or browsers and on mobile devices.

# Next.JS observations
I will be honest here. I haven’t got a clue and I do not want to copy-paste AI answers. If I had more time I’d talk to a developer to get this right.

For blackbox or exploratory testing (or actual users) this does not play a role, but for white box testing I really do not know the differences.

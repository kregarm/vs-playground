# General Enquiry form is buggy

## General Enquiry form has two issues.

1. ### Toggling "Tip Prostora" dropdown always redirects me to /ljubljana even when I am on MS on NM cities and breaks the map

#### Reproduction steps
1. Open the page https://staging.nepremicnine.btc-city.com/ljubljana
2. Navigate to Novo Mesto
3. Click on the first general enquiry card
4. Change the pre-set "Tip prostora" to a different value

**Expected behavior**

The expected behavior here is that I can just switch the type without breaking the form. Types should be filtered down to what is available within a given city.

If that is not desireable, this option should not be available to the user.

**Actual behavior**

I get redirect to /ljubljana, there is a console error present and the map does not load.

[Bug recording](https://drive.google.com/file/d/1q8ZkRNuz5uAp6OgF6LdaPNEfB32gGTdi/view?usp=drive_link)

#### Environment information
Platform: MacOs Tahoe 26.1

Environment: Chrome

#### Severity and Priority
Medium

Most of the traffic here should flow to /ljubljana, it has a much bigger inventory as well. But since this breaks one of the enquiry flows for other cities it can still have some business impact.

#### Regressions?
Both forms - specific one and the generaly enquiry form with additional fields. But they should both be automated anyways.

#### Should it be automated?
Yes

Too simple to not automate, and more importantly, it is on one of the main flows that should work no matter what.

2. ### Property type can be deleted, but not added back

#### Reproduction steps
1. Open the page https://staging.nepremicnine.btc-city.com/ljubljana
2. Navigate to Novo Mesto
3. Click on the first general enquiry card
4. Remove the pre-set "Dvorana" option

**Expected behavior**

I should not be able to remove the last and only option within the dropdown or I should be able to add it back again.

**Actual behavior**

I can just remove the building option and not add it back. If I do that, I have to refresh the page in order to get it back.

[Bug recording](https://drive.google.com/file/d/1itlvB0dIi5V-guvwAIEbO0swcRn-jWLS/view?usp=drive_link)

#### Environment information
Platform: MacOs Tahoe 26.1

Environment: Chrome

#### Severity and Priority
Trivial

This is just a UI glitch.

#### Regressions?
Both forms - specific one and the generaly enquiry form with additional fields. But they should both be automated anyways.

#### Should it be automated?
No

Trivial UI bugs generally don't warrant automation.

# Filters don't match results

<em>I flagged this one as a question, will treat it as a bug here</em>

## Filters show incorrect options

#### Reproduction steps
1. Open the page https://staging.nepremicnine.btc-city.com/ljubljana
2. Filter by Namembnost -> skladišče
3. Filter by Size -> 500 - 1000 m2
4. Check the results card

**Expected behavior**

I should either see no results (if there aren't any) or I should see an appropriate result.

**Actual behavior**

I get back a combo result with the correct size, but upon inspecting the two linked properties, "trgoina" has an area of 820 m2 and "skladišče" only an area of 30m2

[Bug recording](https://drive.google.com/file/d/1sU9ue257MEgPe9N_KpzUZeiwF5ohYnlN/view?usp=sharing)

#### Environment information
Platform: MacOs Tahoe 26.1

Environment: Chrome

#### Severity and Priority
Critical

Suggest filter is not working as expected and the main flow is affected.

#### Regressions?
Filtering and wizard features.

#### Should it be automated?
Yes

Main flows should always be automated

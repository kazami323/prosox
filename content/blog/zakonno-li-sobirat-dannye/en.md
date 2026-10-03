---
rubric: Legal side
cardTitle: Is it legal to collect public data
description: "Where the line falls between open and closed data, what the courts have decided on the subject, and what does not become permitted simply because the data is open. For lawyers and executives deciding how to work with web data."
title: Is it legal to collect public data from the internet
---

*This article explains general principles and is not legal advice. Any specific project requires review in light of the applicable jurisdiction.*

This is the first question lawyers and executives ask when the conversation turns to collecting data from websites. The short answer: collecting data that is open to any visitor without logging in to an account is, in most cases, legal. But "open" does not mean "anything goes," and this rule has limits. Let's look at where they lie.

## The main line: whether you had to log in to an account

The simplest test is this. If anyone who simply opens the page can see the data, it is public data. If access requires logging in to an account, paying for a subscription, or getting around a restriction, it is already a closed area.

Courts in different countries increasingly draw the line right here. A website is entitled to put part of its information behind a login or a paywall. What it left open, it chose itself to show to everyone.

## What the courts have said

The most extensive case law on this topic is in the United States, which is why it is often cited in other countries as well.

**Van Buren v. United States (2021).** The U.S. Supreme Court narrowed the meaning of "exceeds authorized access" in the federal Computer Fraud and Abuse Act (CFAA). The Court looked at whether the "door" to the data is open to the person in the first place, not at the purpose for which the person uses it.

**hiQ Labs v. LinkedIn.** The Ninth Circuit Court of Appeals twice, in 2019 and in 2022, concluded that scraping public profiles most likely does not constitute unauthorized access under the CFAA. But this case has a second part that is mentioned less often. In late 2022, the trial court found that hiQ had breached LinkedIn's user agreement, including because of fake accounts through which data was viewed after logging in. The dispute ended in a settlement between the parties. The takeaway is simple: open pages and data behind a login lead to very different consequences.

**Meta v. Bright Data (2024).** A court in California ruled that the terms of use of Facebook and Instagram do not prohibit collecting public data without logging in to an account. Meta soon dropped the suit.

## What does not become permitted simply because the data is open

**Personal data.** A person's name, phone number, and photo remain personal data even if they sit on an open page. Separate laws apply to them. In the European Union, that is the GDPR. In Vietnam, since January 1, 2026, the Law on Personal Data Protection No. 91/2025/QH15 has been in force, replacing the earlier Decree No. 13/2023/ND-CP. Among other things, it prohibits the purchase and sale of personal data, except in cases expressly permitted by law. That is why the first question for any project is whether personal data is needed for the task at all. Most often it is not.

**Copyright.** Facts, such as a price, product availability, or a company name, are as a rule not protected by copyright. Description texts, articles, and photographs are protected. You can collect a price and compare it with others. You cannot copy someone else's descriptions and photos onto your own website.

**Databases.** In the EU, databases that required a substantial investment of effort to create are protected separately. Extracting a substantial part of such a database may infringe the owner's rights, even if individual records are public.

**Load on the website.** Collection must not interfere with the operation of the source. A reasonable request rate, spreading requests out over time, and not posing as an authorized user are matters not only of courtesy but also of legal risk.

## What we check before a project starts

Before it starts, every project goes through a review covering several questions:

1. **Jurisdiction.** Where the source is located and where the client is located. Rules differ from country to country.
2. **Public availability.** Whether the required data is accessible without logging in to an account and without paid access. As a matter of principle, we do not bypass logins, paid sections, or closed areas.
3. **Personal data.** Whether the required dataset contains any and whether it is needed for the task. If not, we do not collect it.
4. **Use.** What the client needs the data for: internal analytics, price comparison, model training. The restrictions depend on this.

On request, the client receives a legal opinion for their project.

## Conclusion

Collecting public data is legal as long as it remains the collection of public data: without logging in to an account, without personal data where it is not needed, without copying other people's texts, and without harm to the source. The line between open and closed does not exist so that it can be bypassed. Working honestly means accepting it as the answer.

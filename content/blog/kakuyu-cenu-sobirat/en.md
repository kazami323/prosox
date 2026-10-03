---
rubric: Practice
cardTitle: Which price to actually collect
description: "A single product listing can show up to six prices: base, strikethrough, discounted, coupon, card, and unit price. We look at which one to use for which decisions, and where mistakes are most common. For category managers and anyone setting up price monitoring."
title: Which price to collect when monitoring
---

A product listing almost always shows more than one price: base, strikethrough, discounted, coupon, card, unit. If a monitoring task just says "price", the data picks up whichever one is displayed in the largest type, and the analytics end up built on a number nobody chose deliberately.

Below are the main price types on a listing: what each one is, which tasks it suits, and where it falls short.

## Base price

The price the seller set themselves, without temporary discounts or coupons.

**When you need it**
- you want to see a real price change at a competitor, not a promotion;
- you want to track the seller's pricing policy over time.

**Advantages**
- the most stable figure, a convenient basis for calculating everything else;
- doesn't jump around during sales.

**Limitations**
- doesn't show what the buyer actually pays;
- on some platforms it is visible only inside the product page, not in the category list.

**Suited for:** analyzing competitors' pricing policy, RRP compliance control.

## Final price

The price any buyer sees, with all discounts available to everyone applied.

**When you need it**
- it matters to understand what the buyer really pays;
- you need to compare your offer with a competitor's "through the buyer's eyes".

**Advantages**
- reflects what influences the buyer's choice right now.

**Limitations**
- changes with every promotion, so without the base price next to it, it is easy to mistake a promotion for a price cut.

**Suited for:** daily comparison with competitors, assessing price position.

## Strikethrough price

The "was" next to the "now". What the seller wants to show the buyer as the size of the discount.

**When you need it**
- you need to understand what saving the seller is presenting to the buyer.

**Limitations**
- doesn't say what price the product was sold at before: the seller sets the strikethrough price themselves.

**Suited for:** analyzing competitors' promo mechanics.

## Coupon price

The price after applying a seller or platform coupon. Often it isn't visible right away, only after a click or at a certain order value.

**When you need it**
- you need to understand who funds the discount: the seller or the platform.

**Limitations**
- coupon terms can differ between buyers and order values.

**Suited for:** RRP compliance control, where it matters to tell a seller's violation from a platform promotion.

## Card or membership price

A separate price for holders of a loyalty card, the platform's bank card, or a paid membership.

**When you need it**
- a significant share of buyers in the category use a card or membership.

**Limitations**
- only some buyers can see it;
- usually shown only inside the product page.

**Suited for:** analyzing real competition in categories where most people buy with a card.

## Unit price

The price per kilogram, liter, or item in a set.

**When you need it**
- competitors' products differ in pack size;
- you need to spot that a manufacturer has shrunk the pack while keeping the shelf price.

**Limitations**
- platforms don't show it everywhere; sometimes it has to be calculated from the product specifications.

**Suited for:** food, household chemicals, products sold in sets.

## Separately: installment payment

"From 45,000 a month" is set in large type on the listing and looks like a price, but it isn't one. It should be stored in a separate field and not mixed with prices.

## How to choose the prices for a task

| Task | Which prices to collect |
|---|---|
| Understand where you stand relative to a competitor | base and final |
| Decide whether to respond to a competitor's price drop | base and final, to tell a promotion from a price change |
| Check RRP compliance | the seller's base price and the coupon price, noting who gave the discount |
| Compare products of different pack sizes | unit price |

## Example

A brand checks whether sellers comply with the recommended price. On the listing, the product is 13% below RRP. If you collect only the final price, this looks like a violation. If the base price is next to it, along with a note that the discount came from a platform coupon, the picture is different: the seller holds the RRP, and the platform pays for the discount.

That is why each price type is stored in its own field when collected, together with the seller, the time of capture, and availability. Then the same dataset answers different questions, and a report for a new task is built without re-collecting data.

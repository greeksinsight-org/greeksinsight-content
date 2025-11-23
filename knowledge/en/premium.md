---
layout: default
title: Premium
lang: en
permalink: /knowledge/en/premium
---

# Ask Premium, Bid Premium, Total Premium, and Put/Call Ratio (Volume)

## 1. Introduction

Option **premiums** represent the **price paid** for the right (but not the obligation) to buy or sell the underlying.  
The relationship between **bid**, **ask**, and **total premium flow** reflects **market aggressiveness, demand, and sentiment**.

The **Put/Call Volume Ratio**, when integrated with premium flows, adds deeper insight into **risk appetite** and **directional bias**.

![Figure 1: Bid/Ask, Total Premium](/assets/images/premium_1.png)

## 2. Application

**Premium Weighted by Open Interest**

This metric represents the total dollar value tied to all open option positions by multiplying each strike’s premium (bid, ask, or midpoint) by its open interest and the contract multiplier. Summing across all strikes gives a single figure showing how much notional exposure the market has in the entire option chain. It is useful for identifying where capital is concentrated, measuring market positioning, and estimating the potential hedging impact from dealers.

- **Bid Premiums**: Indicate passive limit orders — traders waiting for favorable prices.  
- **Ask Premiums**: Show aggressive buying — traders paying up for exposure.  
- **Total Premium (Midpoint)** = Σ(Call Premiums + Put Premiums) across strikes.

The **Put/Call Volume Ratio** can be computed as:
> **PCR = Total Put Volume / Total Call Volume**

Interpretation:
- Ratio < 1 → More call demand (bullish tone).  
- Ratio > 1 → More put demand (bearish tone).  

Combining volume and premium ratios provides a **multi-layered sentiment model**, revealing whether traders are **actively buying or selling** exposure.

## 3. Key Takeaways

- Premiums reflect **real money flows** — not just contract counts.  
- Ask dominance = aggressiveness; bid dominance = caution.  
- The Put/Call Ratio enhances classic volume ratios by capturing **notional weight**.  
- Useful for identifying **institutional sentiment shifts** and **volatility hedging demand**.

[← Back to Help Index](./index.md)
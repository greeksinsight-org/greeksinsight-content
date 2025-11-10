---
layout: default
title: Net Drift
lang: en
permalink: /help/en/net_drift
---

# Net Drift — Premium Calls & Puts

## 1. Introduction

**Historical Net Drift** measures how **option premiums evolve over time** relative to their strike distance (moneyness).  
By analyzing out-of-the-money (OTM) calls and puts, traders can estimate **how consistently option sellers or buyers profit** from premium decay or volatility events.

It’s a quantitative view of **premium bias** — whether the market systematically overprices risk on one side (calls or puts).

![Figure 1: Historical Premium Behavior](/assets/images/net_drift_1.png)

## 2. Application

### 2.1. Measuring Net Drift

If option sellers (dealers or systematic traders) collect more in theta decay than they lose during volatility events, **the drift is positive** — favoring premium-selling strategies.

### 2.2. Historical Patterns

- **OTM Puts** often have **negative drift** because volatility spikes disproportionately affect downside protection.  
- **OTM Calls** tend to have **small or neutral drift** in indices due to mean-reverting markets.  
- In equity indices (like SPX), long-term studies show **put premiums are overpriced** on average — a result of constant demand for tail-risk protection.

### 2.3. Strategy Implications

Understanding net drift helps design systematic strategies:
- **Positive drift** → Favor short volatility setups (credit spreads, iron condors).  
- **Negative drift** → Favor long volatility setups (long puts, straddles).  
- Monitoring **premium decay curves** around events (FOMC, CPI) helps identify temporary distortions in pricing.

![Figure 2: Net Drift and Premium Decay Curve](/assets/images/.png)

## 3. Key Takeaways

- Historical Net Drift shows **long-term edge** between buyers and sellers of volatility.  
- OTM puts generally carry **negative expectancy** due to risk demand.  
- Premium decay analysis reveals when the market **overpays for protection**.  
- Combining Net Drift with **IV Rank** improves volatility timing decisions.

[← Back to Help Index](./index.md)
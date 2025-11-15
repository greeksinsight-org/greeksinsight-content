---
layout: default
title: Gamma Exposure
lang: en
permalink: /knowledge/en/active_trader
---

# Gamma Calls, Puts, Implied Volatility & Spot Price Evolution

## 1. Introduction

Understanding how **gamma**, **implied volatility (IV)**, and the **spot price** interact is key to decoding **dealer hedging feedback loops**.  
When spot prices move, gamma changes, triggering **delta hedging** that feeds back into volatility — a process that can either stabilize or destabilize markets.

This triad (Gamma–IV–Spot) forms the **core dynamic** of modern options-driven price behavior.

![Figure 1: Gamma–IV–Spot Interaction](/assets/images/active_trader_1.png)

## 2. Application

When the market moves:
- **Dealers short gamma** must hedge *with* the move — selling on declines and buying on rallies → amplifying volatility.  
- **Dealers long gamma** hedge *against* the move — buying dips and selling rips → reducing volatility.  

**Implied volatility** plays a catalytic role:
- Rising IV increases option gamma for near-the-money strikes.  
- Lower IV compresses gamma sensitivity, stabilizing the market.

**Spot price evolution** relative to high gamma zones often indicates:
- **Volatility contraction** near positive gamma zones.  
- **Volatility expansion** when crossing into negative gamma territory.

**Analytical view:**
- Track **Net GEX** vs. **Spot Price** across time.  
- Observe how shifts in IV precede gamma transitions.  
- Use combined charts (GEX + IV + Spot) to spot regime changes.

![Figure 2: Gamma, IV, and Spot Dynamics over Time](/assets/images/active_trader_2.png)

## 3. Key Takeaways

- Gamma dictates the **directional bias** of dealer hedging flows.  
- IV modulates the **intensity of those flows**.  
- Spot price movements often reflect **feedback loops** between dealer hedging and volatility expectations.  
- Monitoring Gamma + IV + Spot together offers **predictive insight** into potential **volatility regime shifts**.

[← Back to Help Index](./index.md)
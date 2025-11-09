---
layout: default
title: Gamma Exposure
lang: en
permalink: /ai/en/gamma_exposure_explained/
---

# Understanding Option Gamma Exposure (GEX)

## Introduction

Gamma Exposure (GEX) is one of the most insightful derivatives of option positioning. It represents how much **market makers’ hedging activity** can push or dampen price movements in the underlying asset.  

When traders or institutions buy and sell options, **dealers** (or **market makers**) take the other side of those trades. Dealers typically hedge their risk exposure using the underlying instrument — such as S&P 500 futures or the SPX index itself.  

The way they hedge depends on **Gamma (Γ)**, which is the rate of change of an option’s **Delta (Δ)** with respect to the underlying price.  
Mathematically:  

> **Γ = ∂Δ / ∂S**

Gamma tells us **how sensitive Delta is to price movements**. A high Gamma means Delta changes quickly — and thus, dealers must frequently rebalance their hedges.

In aggregate, all open options positions form the **market’s total Gamma Exposure (GEX)**. Understanding where this exposure lies helps anticipate how market makers’ hedging could influence price direction and volatility.

![Figure 1: Gamma Exposure Overview](/assets/images/gamma_figure_1.png)

## Application

### Dealer Positioning and Hedging Dynamics

When traders are **net long options**, dealers become **net short options** (since they sold them).  
- If dealers are **short calls**, they have **negative gamma** exposure.
- If dealers are **short puts**, they also carry **negative gamma**, but their hedge response differs depending on the direction of the move.

Here’s how that affects price action:

| Market Type     | Dealer Gamma | Dealer Behavior                                | Market Impact          |
|:----------------|:-------------:|-----------------------------------------------:|:-----------------------:|
| Positive Gamma  | Dealers hedge **against** the move (buy low, sell high) | Dampens volatility     |
| Negative Gamma  | Dealers hedge **with** the move (sell low, buy high)    | Amplifies volatility   |

This dynamic means that **the structure of options open interest can determine intraday market stability**.  

### Call and Put Gamma Contributions

- **Call Gamma**:  
  Arises from open interest in call options. Generally **positive** when above the spot price. High call gamma can create **resistance zones**, since dealers sell underlying to hedge as price rises.

- **Put Gamma**:  
  Arises from open interest in put options. Typically **negative** below the current spot. High put gamma can form **support zones**, as dealers buy the underlying when price falls.

Visualizing these distributions helps identify areas where **hedging flows may reverse** — these are often the **Gamma Walls**.

![Figure 2: Call vs Put Gamma Structure](assets/figure2.png)

### Net Gamma Exposure (GEX)

The **Net GEX** combines all call and put gamma to reflect the overall market state.  

> **Net GEX = Σ (Call Gamma × OI × Contract Size) – Σ (Put Gamma × OI × Contract Size)**

Where:  
- *OI* = Open Interest per strike  
- *Contract Size* = Multiplier (e.g., 100 for SPX options)

A **positive net GEX** implies that overall hedging flows will **absorb volatility**, as dealers counteract price movements.  
Conversely, a **negative net GEX** indicates **amplified volatility**, as dealer hedging reinforces the trend.

### Reading the GEX Plot

Plotting the GEX across all strikes gives a “landscape” of market stability zones.  
Key areas include:

- **Gamma Flip Zone**: The level where total gamma changes from positive to negative. When price crosses this point, volatility tends to increase.  
- **High Positive GEX Areas**: Markets behave more mean-reverting, and dips are often bought.  
- **Deep Negative GEX Areas**: Strong directional potential; markets can move aggressively with less resistance.  

### Real-World Usage

Traders, hedge funds, and quant desks monitor daily GEX data to adjust risk and bias:
- SPX and SPY traders use **Gamma Walls** as intraday targets or barriers.  
- 0DTE traders combine **GEX + VWAP** to time credit spreads or straddles.  
- Portfolio managers observe **aggregate GEX shifts** before major expirations (e.g., OPEX days) to gauge potential volatility spikes.

![Figure 3: Net GEX Curve](assets/figure3.png)

---

## Key Takeaways

- **Gamma Exposure** reflects how dealer hedging behavior can either dampen or amplify market volatility.  
- **Positive GEX** = Calm, mean-reverting environment.  
- **Negative GEX** = High volatility and trend-following behavior.  
- **Gamma Walls** act as invisible support and resistance zones derived from dealer positioning.  
- Tracking **daily GEX updates** provides an edge in timing volatility shifts, especially for **SPX, SPY, or QQQ** traders.  
- For intraday and 0DTE strategies, combining GEX with **VWAP, Delta positioning, and open interest maps** can reveal high-probability trade zones.

[← Back to AI Index](./index.md)

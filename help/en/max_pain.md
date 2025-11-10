---
layout: default
title: Max Pain
lang: en
permalink: /help/en/max_pain
---

# Max Pain — Call & Put Loss

## 1. Introduction

**Max Pain** represents the strike price where the **total dollar value of outstanding call and put option losses** is maximized.  
It’s often referred to as the “**option expiration magnet**,” as the market tends to gravitate toward this price near expiration due to dealer hedging and position unwinding.

The concept comes from observing that **most options expire worthless**, and market makers aim to minimize their payout obligations.

![Figure 1: Max Pain](/assets/images/max_pain_1.png)

## 2. Application

To compute **Max Pain**, you sum up all **open interest** for both calls and puts, multiplied by the theoretical loss per strike, then find the strike where **total losses** (for option holders) are **maximized** — or equivalently, where **dealers’ gains** are maximized.

Mathematically:

> **Max Pain = argmax(Σ (Call Losses + Put Losses))**

Practical insights:
- When the market trades **below** Max Pain → more put holders are in profit.  
- When the market trades **above** Max Pain → more call holders are in profit.  
- As expiration approaches, price often moves closer to the Max Pain zone.

![Figure 2: Max Pain Curve](/assets/images/.png)

## 3. Key Takeaways

- Max Pain is a **price magnet** near expiration caused by **option decay and dealer hedging**.  
- It helps traders identify **potential pinning levels** for the underlying asset.  
- It’s not a predictive signal but an **informational bias** — prices may “drift” toward Max Pain if liquidity and hedging flows align.

[← Back to Help Index](./index.md)
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

![Figure 1: Historical Premium Behavior](assets/figure1.png)

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

![Figure 2: Net Drift and Premium Decay Curve](assets/figure2.png)

## 3. Key Takeaways

- Historical Net Drift shows **long-term edge** between buyers and sellers of volatility.  
- OTM puts generally carry **negative expectancy** due to risk demand.  
- Premium decay analysis reveals when the market **overpays for protection**.  
- Combining Net Drift with **IV Rank** improves volatility timing decisions.

## 📗 Versión en Español (Latinoamérica)

### 1. Introducción

El **Net Drift Histórico** mide cómo evolucionan las **primas de las opciones** con el tiempo, especialmente las **fuera del dinero (OTM)**.  
Sirve para evaluar si el mercado **sobrevalora o subvalora el riesgo**, mostrando qué lado (compradores o vendedores de opciones) tiene ventaja estadística.

![Figura 1: Comportamiento Histórico de las Primas](assets/figure1.png)

---

### 2. Aplicación

#### 2.1. Cómo se mide el Drift

> **Net Drift = Promedio de Decaimiento (Theta) – Promedio de Expansión (Volatilidad)**

Si el decaimiento promedio supera las pérdidas durante picos de volatilidad, el **drift es positivo**, beneficiando a los vendedores de primas.

#### 2.2. Patrones Comunes

- Las **puts OTM** suelen tener **drift negativo**, por su alta sensibilidad a shocks de volatilidad.  
- Las **calls OTM** muestran drift más estable o neutral.  
- En índices como SPX, históricamente las puts están **sobrevaloradas**, reflejando el costo del “seguro” del mercado.

#### 2.3. Implicaciones Estratégicas

- Drift positivo → estrategias de **venta de volatilidad** son más rentables.  
- Drift negativo → conviene **comprar volatilidad** o proteger posiciones.  
- Analizar el drift histórico permite ajustar la exposición antes de eventos macroeconómicos.

![Figura 2: Curva de Decaimiento de Prima y Net Drift](assets/figure2.png)

---

### 3. Puntos Clave

- El Net Drift refleja la **ventaja estadística** de un lado del mercado.  
- Las puts tienden a estar **sobrevaloradas** por demanda de cobertura.  
- Comprender la deriva ayuda a **elegir estrategias de volatilidad óptimas**.  
- Combinado con IV Rank, permite afinar el timing en ventas o compras de opciones.

---

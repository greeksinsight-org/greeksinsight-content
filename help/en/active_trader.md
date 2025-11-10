---
layout: default
title: Gamma Exposure
lang: en
permalink: /help/en/active_trader
---

# Gamma Calls, Puts, Implied Volatility & Spot Price Evolution

## 1. Introduction

Understanding how **gamma**, **implied volatility (IV)**, and the **spot price** interact is key to decoding **dealer hedging feedback loops**.  
When spot prices move, gamma changes, triggering **delta hedging** that feeds back into volatility — a process that can either stabilize or destabilize markets.

This triad (Gamma–IV–Spot) forms the **core dynamic** of modern options-driven price behavior.

![Figure 1: Gamma–IV–Spot Interaction Diagram](assets/figure1.png)

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

![Figure 2: Gamma, IV, and Spot Dynamics over Time](assets/figure2.png)

## 3. Key Takeaways

- Gamma dictates the **directional bias** of dealer hedging flows.  
- IV modulates the **intensity of those flows**.  
- Spot price movements often reflect **feedback loops** between dealer hedging and volatility expectations.  
- Monitoring Gamma + IV + Spot together offers **predictive insight** into potential **volatility regime shifts**.

## 📗 Versión en Español (Latinoamérica)

### 1. Introducción

Comprender la relación entre **gamma**, **volatilidad implícita (IV)** y **precio spot** es fundamental para interpretar los **bucles de retroalimentación** generados por las coberturas de los dealers.  
Estos tres factores definen si el mercado entra en un régimen **estable o explosivo**.

![Figura 1: Diagrama de Interacción Gamma–IV–Spot](assets/figure1.png)

---

### 2. Aplicación

- Cuando los dealers están **cortos gamma**, cubren en la misma dirección del movimiento → amplifican la volatilidad.  
- Cuando están **largos gamma**, cubren en sentido contrario → estabilizan el precio.  

La **IV** (volatilidad implícita) amplifica o atenúa este efecto:
- Un aumento de IV incrementa la exposición gamma cerca del dinero.  
- Una disminución de IV reduce la sensibilidad gamma.

El **precio spot** actúa como punto de referencia:
- En zonas de gamma positiva → el precio tiende a consolidar.  
- En zonas de gamma negativa → el precio tiende a moverse bruscamente.

![Figura 2: Dinámica Gamma–IV–Spot en el Tiempo](assets/figure2.png)

---

### 3. Puntos Clave

- La gamma define la **dirección de la cobertura** de los dealers.  
- La IV controla la **magnitud** del impacto.  
- El precio spot refleja el **resultado neto** de ese equilibrio.  
- Analizar los tres en conjunto permite anticipar **cambios de régimen de volatilidad**.

---

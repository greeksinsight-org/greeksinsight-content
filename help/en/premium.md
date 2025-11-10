---
layout: default
title: Premium
lang: en
permalink: /help/en/premium
---

# Ask Premium, Bid Premium, Total Premium, and Put/Call Ratio (Volume)

## 1. Introduction

Option **premiums** represent the **price paid** for the right (but not the obligation) to buy or sell the underlying.  
The relationship between **bid**, **ask**, and **total premium flow** reflects **market aggressiveness, demand, and sentiment**.

The **Put/Call Volume Ratio**, when integrated with premium flows, adds deeper insight into **risk appetite** and **directional bias**.

![Figure 1: Bid/Ask Premium Flow Example](assets/figure1.png)

## 2. Application

- **Bid Premiums**: Indicate passive limit orders — traders waiting for favorable prices.  
- **Ask Premiums**: Show aggressive buying — traders paying up for exposure.  
- **Total Premium** = Σ(Call Premiums + Put Premiums) across strikes and expirations.

Premium flow analysis helps detect **institutional footprints**:
- High **ask-side flow** → aggressive speculation or protection demand.  
- High **bid-side flow** → unwinding or profit-taking behavior.

The **Put/Call Premium Ratio** can be computed as:
> **PCR (Premium) = Total Put Premium / Total Call Premium**

Interpretation:
- Ratio < 1 → More call premium demand (bullish tone).  
- Ratio > 1 → More put premium demand (bearish tone).  

Combining volume and premium ratios provides a **multi-layered sentiment model**, revealing whether traders are **actively buying or selling** exposure.

![Figure 2: Premium Ratio and Sentiment Indicator](assets/figure2.png)

## 3. Key Takeaways

- Premiums reflect **real money flows** — not just contract counts.  
- Ask dominance = aggressiveness; bid dominance = caution.  
- The Put/Call Premium Ratio enhances classic volume ratios by capturing **notional weight**.  
- Useful for identifying **institutional sentiment shifts** and **volatility hedging demand**.

---

## 📗 Versión en Español (Latinoamérica)

### 1. Introducción

Las **primas de opciones** representan el precio que paga el trader por adquirir el derecho de comprar o vender el subyacente.  
El equilibrio entre las **primas de compra (ask)**, **venta (bid)** y el **flujo total** permite evaluar la **presión de demanda y la agresividad del mercado**.

![Figura 1: Ejemplo de Flujo de Primas Bid/Ask](assets/figure1.png)

---

### 2. Aplicación

- **Primas Bid:** Muestran órdenes pasivas, operadores que esperan mejores precios.  
- **Primas Ask:** Reflejan compras agresivas, dispuestos a pagar más por exposición.  
- **Prima Total** = Σ(Primas Calls + Primas Puts) en todos los strikes y vencimientos.

El análisis del flujo de primas permite detectar **huellas institucionales**:
- Dominio del lado **ask** → compras agresivas o demanda de cobertura.  
- Dominio del lado **bid** → cierre de posiciones o toma de beneficios.

**Relación Put/Call (Primas):**
> **PCR (Prima) = Prima Total de Puts / Prima Total de Calls**

Interpretación:
- Ratio < 1 → Sesgo alcista (mayor demanda de calls).  
- Ratio > 1 → Sesgo bajista (mayor demanda de puts).

![Figura 2: Ratio de Primas y Sentimiento de Mercado](assets/figure2.png)

---

### 3. Puntos Clave

- Las primas reflejan **flujos reales de capital**, no solo volumen de contratos.  
- Lado ask dominante = **compradores agresivos**; lado bid = **vendedores cautelosos**.  
- El PCR basado en primas da una lectura más precisa del **sentimiento institucional**.  
- Combinado con volumen e IV, permite anticipar **cambios en la demanda de cobertura**.

---

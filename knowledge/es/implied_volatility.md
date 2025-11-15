---
layout: default
title: Volatilidad Implícita
lang: es
permalink: /knowledge/es/implied_volatility
---

# Volatilidad Implícita — Calls & Puts

## 1. Introducción

La **Volatilidad Implícita (IV)** representa la **expectativa del mercado sobre el movimiento futuro** del precio de un activo.  
No predice el futuro, sino que refleja **cuánta volatilidad está descontando el mercado** en el precio de las opciones.

Cuando la IV es alta, las opciones son más caras, reflejando un entorno incierto.  
Cuando la IV es baja, el mercado espera estabilidad y las primas son más baratas.

![Figura 1: Superficie de Volatilidad Implícita](/assets/images/implied_volatility_1.png)

## 2. Aplicación

La IV influye directamente en la **prima de las opciones**, el **costo de cobertura** y la **amplitud esperada del movimiento**.

### 2.1. Volatilidad Implícita en Calls y Puts

- Las **calls** suelen tener una IV más baja en mercados alcistas o estables.  
- Las **puts** presentan una IV más alta porque los inversores pagan por **protección ante caídas**.  
Esto genera el fenómeno conocido como **volatility skew**, o asimetría de volatilidad.

### 2.2. Otras Métricas IV

- **IV Rank (IVR)**: Compara la IV actual con su rango anual.  
- **IV Percentil (IVP)**: Mide el porcentaje de tiempo en que la IV fue menor a la actual.  

Interpretación práctica:
- **IVR alto (>70%)** → Opciones caras, conviene vender volatilidad (credit spreads, iron condors).  
- **IVR bajo (<30%)** → Opciones baratas, conviene comprar volatilidad (straddles, strangles).

### 2.3. Comparación con la Volatilidad Realizada

Si la IV se mantiene **por encima de la volatilidad realizada**, significa que los inversores **sobrepagan por cobertura**, lo cual es común en índices grandes como SPX.

![Figura 2: Estructura y Skew de IV](/assets/images/.png)

## 3. Puntos Clave

- La IV refleja **incertidumbre**, no dirección.  
- Las puts suelen tener IV más alta por demanda de cobertura.  
- IVR e IVP ayudan a detectar si las opciones están **caras o baratas**.  
- Comparar IV vs Volatilidad Realizada mejora el timing de estrategias.  
- La estructura de IV revela el **sesgo psicológico** del mercado.

[← Ir a Indice](./index.md)
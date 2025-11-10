---
layout: default
title: Gamma Exposure
lang: es
permalink: /help/es/active_trader
---

# Gamma Calls, Puts, Volatilidad Implícita & Evolución del Precio 

## 1. Introducción

Comprender la relación entre **gamma**, **volatilidad implícita (IV)** y **precio spot** es fundamental para interpretar los **bucles de retroalimentación** generados por las coberturas de los dealers.  
Estos tres factores definen si el mercado entra en un régimen **estable o explosivo**.

![Figura 1: Diagrama de Interacción Gamma–IV–Spot](/assets/images/active_trader_1.png)

## 2. Aplicación

- Cuando los dealers están **cortos gamma**, cubren en la misma dirección del movimiento → amplifican la volatilidad.  
- Cuando están **largos gamma**, cubren en sentido contrario → estabilizan el precio.  

La **IV** (volatilidad implícita) amplifica o atenúa este efecto:
- Un aumento de IV incrementa la exposición gamma cerca del dinero.  
- Una disminución de IV reduce la sensibilidad gamma.

El **precio spot** actúa como punto de referencia:
- En zonas de gamma positiva → el precio tiende a consolidar.  
- En zonas de gamma negativa → el precio tiende a moverse bruscamente.

![Figura 2: Dinámica Gamma–IV–Spot en el Tiempo](/assets/images/active_trader_2.png)

## 3. Puntos Clave

- La gamma define la **dirección de la cobertura** de los dealers.  
- La IV controla la **magnitud** del impacto.  
- El precio spot refleja el **resultado neto** de ese equilibrio.  
- Analizar los tres en conjunto permite anticipar **cambios de régimen de volatilidad**.

[← Ir a Indice](./index.md)
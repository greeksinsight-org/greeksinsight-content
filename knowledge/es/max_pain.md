---
layout: default
title: Max Pain
lang: es
permalink: /knowledge/es/max_pain
---

# Max Pain — Pérdida Call & Put

## 1. Introducción

El concepto de **Max Pain** indica el precio de ejercicio donde la **pérdida total de calls y puts** es máxima.  
Se le conoce como el “**imán del vencimiento**”, porque el precio del activo tiende a acercarse a ese nivel cuando se aproximan las expiraciones, debido a los ajustes de cobertura y cierres de posiciones de los dealers.

![Figura 1: Concepto de Max Pain](/assets/images/max_pain_1.png)

## 2. Aplicación

Para calcular el **Max Pain**, se suman todas las posiciones abiertas (Open Interest) de **calls y puts**, multiplicadas por la pérdida teórica de cada strike.  
El strike donde la suma total de pérdidas es mayor se considera el **punto de máximo dolor**.

> **Max Pain = argmax(Σ (Pérdida Calls + Pérdida Puts))**

Interpretación:
- Si el precio está **por debajo** del Max Pain → los compradores de puts ganan.  
- Si el precio está **por encima** del Max Pain → los compradores de calls ganan.  
- En las horas previas al vencimiento, el precio puede tender hacia esa zona.

![Figura 2: Ejemplo de Curva Max Pain](/assets/images/.png)

## 3. Puntos Clave

- El Max Pain muestra dónde el **mercado tiende a estabilizarse** cerca del vencimiento.  
- Ayuda a identificar **niveles de atracción del precio**.  
- No es una señal de entrada directa, sino una **referencia de equilibrio** entre calls y puts.

[← Ir a Indice](./index.md)
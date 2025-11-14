---
layout: default
title: Net Drift
lang: es
permalink: /help/es/net_drift
---

# Net Drift — Premium Calls & Puts

## 1. Introducción

El **Net Drift Histórico** mide cómo evolucionan las **primas de las opciones** con el tiempo, especialmente las **fuera del dinero (OTM)**.  
Sirve para evaluar si el mercado **sobrevalora o subvalora el riesgo**, mostrando qué lado (compradores o vendedores de opciones) tiene ventaja estadística.

![Figura 1: Comportamiento Histórico de las Primas](/assets/images/net_drift_1.png)

## 2. Aplicación

### 2.1. Cómo se mide el Drift

> **Net Drift = Promedio de Decaimiento (Theta) – Promedio de Expansión (Volatilidad)**

Si el decaimiento promedio supera las pérdidas durante picos de volatilidad, el **drift es positivo**, beneficiando a los vendedores de primas.

### 2.2. Patrones Comunes

- Las **puts OTM** suelen tener **drift negativo**, por su alta sensibilidad a shocks de volatilidad.  
- Las **calls OTM** muestran drift más estable o neutral.  
- En índices como SPX, históricamente las puts están **sobrevaloradas**, reflejando el costo del “seguro” del mercado.

### 2.3. Implicaciones Estratégicas

- Drift positivo → estrategias de **venta de volatilidad** son más rentables.  
- Drift negativo → conviene **comprar volatilidad** o proteger posiciones.  
- Analizar el drift histórico permite ajustar la exposición antes de eventos macroeconómicos.

![Figura 2: Curva de Decaimiento de Prima y Net Drift](/assets/images/.png)

## 3. Puntos Clave

- El Net Drift refleja la **ventaja estadística** de un lado del mercado.  
- Las puts tienden a estar **sobrevaloradas** por demanda de cobertura.  
- Comprender la deriva ayuda a **elegir estrategias de volatilidad óptimas**.  
- Combinado con IV Rank, permite afinar el timing en ventas o compras de opciones.

[← Ir a Indice](./index.md)
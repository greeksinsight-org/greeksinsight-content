---
layout: default
title: Premium
lang: es
permalink: /help/es/premium
---

# Ask Premium, Bid Premium, Total Premium, and Put/Call Ratio (Volume)

## 1. Introducción

Las **primas de opciones** representan el precio que paga el trader por adquirir el derecho de comprar o vender el subyacente.  
El equilibrio entre las **primas de compra (ask)**, **venta (bid)** y el **flujo total** permite evaluar la **presión de demanda y la agresividad del mercado**.

![Figura 1: Ejemplo de Flujo de Primas Bid/Ask](/assets/images/premium_1.png)

## 2. Aplicación

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

![Figura 2: Ratio de Primas y Sentimiento de Mercado](/assets/images/.png)

## 3. Puntos Clave

- Las primas reflejan **flujos reales de capital**, no solo volumen de contratos.  
- Lado ask dominante = **compradores agresivos**; lado bid = **vendedores cautelosos**.  
- El PCR basado en primas da una lectura más precisa del **sentimiento institucional**.  
- Combinado con volumen e IV, permite anticipar **cambios en la demanda de cobertura**.

[← Ir a Indice](./index.md)
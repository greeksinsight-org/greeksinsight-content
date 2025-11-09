---
layout: default
title: Gamma Exposure
lang: es
permalink: /ai/es/
---

# Entendiendo la Exposición Gamma (GEX)

## Introducción

La Exposición Gamma (GEX) es uno de los indicadores más útiles en el análisis de opciones, ya que muestra cómo la **actividad de cobertura de los creadores de mercado (dealers)** puede influir en la dirección y volatilidad del precio del activo subyacente.  

Cuando los traders compran o venden opciones, los creadores de mercado asumen la posición contraria. Para cubrir ese riesgo, ajustan constantemente su exposición al subyacente, dependiendo de un parámetro clave: **la Gamma (Γ)**.  

Matemáticamente:

> **Γ = ∂Δ / ∂S**

La gamma indica **qué tan rápido cambia el delta de una opción** cuando el precio del activo varía. Si la gamma es alta, los dealers deben ajustar con mayor frecuencia sus coberturas, generando efectos visibles en la acción del precio.

![Figure 1: Gamma Exposure Overview](/assets/images/gamma_figure_1.png)

## Aplicación

### Posicionamiento y Cobertura de los Dealers

Cuando los traders son **netos compradores de opciones**, los dealers se vuelven **vendedores netos** de esas mismas opciones, quedando **cortos en gamma**.  
Esto significa que su comportamiento cambia según el signo de la gamma:

| Tipo de Mercado | Gamma del Dealer | Comportamiento del Dealer | Impacto en el Mercado |
|------------------|------------------|-----------------------------|-----------------------|
| Gamma Positiva | Cubre **en contra** del movimiento (compra en caídas, vende en subidas) | Reduce la volatilidad |
| Gamma Negativa | Cubre **a favor** del movimiento (vende en caídas, compra en subidas) | Aumenta la volatilidad |

Por eso, **la estructura de posiciones abiertas de opciones puede definir la estabilidad del mercado**.

### Contribución de Gamma en Calls y Puts

- **Gamma de Calls**:  
  Suele ser positiva, especialmente por encima del precio actual. Cuando hay mucho interés abierto en calls a precios altos, esos niveles pueden funcionar como **resistencia**, porque los dealers venden subyacente para cubrirse cuando el precio sube.

- **Gamma de Puts**:  
  Normalmente negativa, sobre todo por debajo del precio actual. Si hay gran concentración de puts, esos niveles tienden a ser **soporte**, porque los dealers compran subyacente al caer el precio.

![Figure 2: Call vs Put Gamma Structure](/assets/images/gamma_figure_1.png)

### Gamma Neta (GEX)

La **Gamma Neta** combina las exposiciones de calls y puts para describir el estado general del mercado:  

> **GEX Neta = Σ (Exposición Gamma Call) – Σ (Exposición Gamma Put)**

- Un **GEX positivo** sugiere un entorno estable, con volatilidad controlada.  
- Un **GEX negativo** indica mayor sensibilidad, volatilidad y posibles rupturas de tendencia.

### Lectura de la Gráfica de GEX

Al graficar la gamma total por strike, obtenemos una "visión" del mercado, que nos permite ver zonas claves:
- **Zona de Giro de Gamma**: Donde la exposición pasa de positiva a negativa, aumentando la volatilidad.  
- **Áreas de GEX Positivo**: Favorecen mercados estables y retrocesos comprados.  
- **Áreas de GEX Negativo**: Señalan posible comportamiento direccional o “momentum”.

### Uso en la Práctica

Los analistas cuantitativos y traders usan la GEX diariamente para ajustar su sesgo y gestión de riesgo:
- Los traders de SPX y SPY observan los **Gamma Walls** como zonas de soporte o resistencia.  
- Los traders 0DTE combinan **GEX + VWAP** para encontrar puntos óptimos de entrada en spreads o straddles.  
- Los gestores institucionales analizan **cambios en la GEX** antes de los vencimientos grandes (*OPEX*) para anticipar aumentos de volatilidad.

![Figure 3: Net GEX Figure](/assets/images/gamma_figure_3.png)

## Puntos Clave

- La Exposición Gamma muestra cómo los dealers influyen activamente en la **volatilidad y dirección del mercado**.  
- **GEX positiva** = Mercado estable, reversiones frecuentes.  
- **GEX negativa** = Mayor volatilidad y comportamiento direccional.  
- Los **Gamma Walls** actúan como zonas invisibles de soporte o resistencia basadas en la cobertura institucional.  
- Monitorear la **GEX diaria** ofrece una ventaja en estrategias intradía y de **vencimiento 0DTE**, especialmente en índices como SPX o QQQ.  
- Integrar GEX con métricas como **VWAP, Delta y Open Interest** ayuda a identificar zonas de alta probabilidad para la toma de decisiones.


[← Back to AI Index](./index.md)

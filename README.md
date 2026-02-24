# Índice de Desarrollo Económico Digital - Ecuador (IDE-EC)

## 📋 Descripción General

El **IDE-EC** es un indicador integral que mide el nivel de digitalización en Ecuador combinando cuatro pilares fundamentales:

- **GOV (25%)**: Gobernanza Digital - Capacidad del estado para ofrecer servicios digitales
- **ACC (30%)**: Acceso y Capacidades - Infraestructura, dispositivos y habilidades digitales
- **ECO (20%)**: Economía Digital - Dinamismo del sector TIC, inversión y exportaciones
- **PAY (25%)**: Pagos Digitales - Madurez del ecosistema de transacciones electrónicas

### Fórmula Integral

```
IDE-EC = (GOV × 0.25) + (ACC × 0.30) + (ECO × 0.20) + (PAY × 0.25)
```

Donde cada pilar se calcula mediante indicadores específicos normalizados entre 0-1.

---

## 📁 Estructura de Carpetas

```
Digitalizacion EC/
├── index.html                 # Aplicación web principal (single-page)
├── styles.css                 # Estilos CSS (glass-morphism, responsive)
├── script.js                  # Funcionalidad JavaScript (acordeones, scroll)
├── README.md                  # Este archivo
├── INSTRUCCIONES.txt          # Guía de uso y referencias
│
├── fuentes/                   # Documentos de fuentes por año
│   ├── 2020/
│   │   ├── gov 2020- 2021.pdf         # Gobernanza digital 2020-2021
│   │   ├── acc 2020.pdf               # Acceso y conectividad 2020
│   │   ├── gd 2020.pdf                # Grado de desarrollo de pagos 2020
│   │   ├── eco ied 2020.pdf           # Economía e IED 2020
│   │   └── Exportaciones TIC (EXP_TI) 2020.pdf  # Exportaciones sector TIC 2020
│   │
│   ├── 2021/
│   │   ├── gov 2021.pdf               # Gobernanza digital 2021
│   │   ├── acc.xlsx                   # Acceso - datos INEC 2021
│   │   ├── gd.pdf                     # Grado de desarrollo 2021
│   │   ├── eco ied 2021.pdf           # Economía e IED 2021
│   │   ├── exp tic 2021.pdf           # Exportaciones TIC 2021
│   │   └── pib nominal.pdf            # PIB nominal 2021
│   │
│   ├── 2022/
│   │   ├── gov 2022.pdf               # Gobernanza digital 2022
│   │   ├── acc.xlsx                   # Acceso - datos INEC 2022
│   │   ├── gd.pdf                     # Grado de desarrollo 2022
│   │   ├── exp ti 2022.pdf            # Exportaciones TIC 2022
│   │   ├── pib nominal.pdf            # PIB nominal 2022
│   │   └── vab.pdf                    # Valor agregado bruto 2022
│   │
│   ├── 2023/
│   │   ├── gov 2023.pdf               # Gobernanza digital 2023
│   │   ├── acc.xlsx                   # Acceso - datos INEC 2023
│   │   ├── gd.pdf                     # Grado de desarrollo 2023
│   │   ├── exp ti 2023.pdf            # Exportaciones TIC 2023
│   │   ├── pib nominal.pdf            # PIB nominal 2023
│   │   ├── vab.pdf                    # Valor agregado bruto 2023
│   │   ├── pagos.pdf                  # Pagos digitales 2023
│   │   └── 8_1_IED_Rama.csv           # IED por rama económica 2023
│   │
│   ├── 2024/
│   │   ├── gov 2024.pdf               # Gobernanza digital 2024
│   │   ├── acc.xlsx                   # Acceso - datos INEC 2024
│   │   ├── exp ti.pdf                 # Exportaciones TIC 2024
│   │   ├── ied.pdf                    # Inversión extranjera directa 2024
│   │   ├── spi.pdf                    # Sistema de Pagos Interbancarios 2024
│   │   ├── pib nominal.pdf            # PIB nominal 2024
│   │   └── vab.pdf                    # Valor agregado bruto 2024
│   │
│   └── 2025/
│       ├── gov 2025.pdf               # Gobernanza digital 2025
│       ├── acc.xlsx                   # Acceso - datos INEC 2025
│       ├── gd.pdf                     # Grado de desarrollo 2025
│       └── pagos.pdf                  # Pagos digitales 2025
│
├── caso estudio calculos/     # Análisis Metro Quito (2023-2025)
│   ├── APORTE_METRO_QUITO_PAY 2023.pdf     # Contribución de Metro a PIB - Pagos 2023
│   ├── APORTE_METRO_QUITO_PAY 2024.pdf     # Contribución de Metro a PIB - Pagos 2024
│   └── APORTE_METRO_QUITO_PAY 2025.pdf     # Contribución de Metro a PIB - Pagos 2025
│
└── docs/                      # Documentación teórica y análisis completos
    ├── 2020.pdf               # Análisis IDE-EC completo 2020
    ├── 2021.pdf               # Análisis IDE-EC completo 2021
    ├── 2022.pdf               # Análisis IDE-EC completo 2022
    ├── 2023.pdf               # Análisis IDE-EC completo 2023
    ├── 2024.pdf               # Análisis IDE-EC completo 2024
    └── 2025.pdf               # Análisis IDE-EC completo 2025
```

---

## 🔧 Teoría de los Pilares

### 1. Pilar GOV - Gobernanza Digital (25%)

**¿Qué mide?** La capacidad del Estado ecuatoriano para ofrecer servicios digitales y la modernización de la administración pública.

**Indicadores:**
- Servicios en línea disponibles
- Infraestructura técnica estatal
- Capital humano en el sector público

**Fuentes:** UN E-Government Knowledgebase, datos estatales

**Documentos Relacionados:** `fuentes/YEAR/gov YEAR.pdf`

---

### 2. Pilar ACC - Acceso y Capacidades (30%)

**¿Qué mide?** La disponibilidad de infraestructura tecnológica, dispositivos y competencias digitales de la población.

**Indicadores:**
- Hogares con internet fijo
- Penetración de usuarios de internet
- Celulares activados
- Smartphones en circulación
- Alfabetismo digital

**Fórmula:** `ACC = (IH + UI + CA + SP + AD) / 5`

**Fuentes:** INEC (Instituto Nacional de Estadística y Censos), ARCOTEL

**Documentos Relacionados:** `fuentes/YEAR/acc.xlsx` (datos estadísticos)

---

### 3. Pilar ECO - Economía Digital (20%)

**¿Qué mide?** El dinamismo del sector TIC, contribución al PIB nacional, inversión extranjera e exportaciones tecnológicas.

**Indicadores:**
- Exportaciones TIC / PIB
- Valor Agregado Bruto (VAB) del sector TIC / PIB
- Inversión Extranjera Directa (IED) en TIC / PIB

**Fórmula:** `ECO = (EXP_TI / PIB) + (VAB / PIB) + (IED / PIB)`

**Fuentes:** BCE (Banco Central del Ecuador), World Bank, WITS

**Documentos Relacionados:** 
- `fuentes/YEAR/exp ti YEAR.pdf` (exportaciones)
- `fuentes/YEAR/vab.pdf` (valor agregado)
- `fuentes/YEAR/ied.pdf` (inversión extranjera)
- `fuentes/YEAR/pib nominal.pdf` (PIB)

---

### 4. Pilar PAY - Pagos Digitales (25%)

**¿Qué mide?** La madurez del ecosistema de pagos electrónicos y la confianza ciudadana en transacciones sin efectivo.

**Indicadores:**
- Grado de Desarrollo (GD) = Transacciones SPI / PIB
- Cash-Score (CS) = Ventas con tarjeta / (Ventas tarjeta + Retiros efectivo)

**Fórmula:** `PAY = √(GD_normalizado × CS)`

Donde: `GD_normalizado = GD / 2` (normalización a 0-1)

**Fuentes:** BCE - Sistema Nacional de Pagos, Superintendencia de Bancos

**Documentos Relacionados:** `fuentes/YEAR/pagos.pdf`, `fuentes/YEAR/gd.pdf`

---

## 📊 Datos Históricos IDE-EC

| Año | GOV | ACC | ECO | PAY | **IDE-EC** |
|-----|-----|-----|-----|-----|-----------|
| 2020 | 0.7799 | 0.6891 | 0.0187 | 0.4365 | **0.5719** |
| 2021 | 0.7801 | 0.7018 | 0.0204 | 0.4521 | **0.5827** |
| 2022 | 0.7700 | 0.7083 | 0.0226 | 0.4892 | **0.5875** |
| 2023 | 0.7800 | 0.6850 | 0.0239 | 0.5254 | **0.5932** |
| 2024 | 0.7800 | 0.7136 | 0.0216 | 0.5072 | **0.5829** |
| 2025 | 0.7970 | 0.7410 | 0.0225 | 0.4744 | **0.5824** |

---

## 💼 Caso de Estudio: Metro de Quito (2023-2025)

Análisis específico sobre el aporte del Sistema de Transporte Integrado de Quito (Metro) a la economía digital ecuatoriana, enfocado en su contribución al pilar PAY (Pagos Digitales).

**Documentos:** `caso estudio calculos/APORTE_METRO_QUITO_PAY YEAR.pdf`

Temas cubiertos:
- Volumen de transacciones digitales del Metro
- Impacto en bancarización urbana
- Contribución a reducción de circulante
- Eficiencia operativa de pagos

---

## 🖥️ Cómo Usar la Aplicación

### Acceso Local (Sin Internet)

1. **Abrir en navegador:**
   ```bash
   python -m http.server 8000
   ```
   Luego acceder a: `http://localhost:8000/index.html`

2. **O abrir directamente:**
   - Click derecho en `index.html` → "Abrir con" → Tu navegador preferido

### Navegación

- **Año de Análisis:** Selecciona el año (2020-2025) en el menú principal
- **Pilares:** Expande cada pilar para ver cálculos detallados
- **Fuentes:** Los enlaces apuntan a documentos PDF/Excel almacenados localmente
- **Caso de Estudio:** Sección especial con análisis Metro de Quito
- **Descargas:** Botones para descargar PDFs de análisis completos

### Características

✅ **Funcionamiento Offline** - No requiere conexión a internet
✅ **Datos Locales** - Todos los documentos almacenados en carpetas
✅ **Interfaz Responsiva** - Optimizado para desktop y tablets
✅ **Cálculos Interactivos** - Visualización de fórmulas con desglose paso a paso
✅ **Múltiples Formatos** - PDFs, Excel, CSV según disponibilidad

---

## 📚 Metodología y Validación

### Validación de Datos

1. **Triangulación:** Cruza múltiples fuentes (ONU, BCE, INEC, World Bank)
2. **Consistencia:** Verifica coherencia interna de indicadores año a año
3. **Normalización:** Todos los pilares en escala 0-1 para comparabilidad
4. **Ponderación:** Pesos basados en importancia relativa en contexto ecuatoriano

### Limitaciones

- **ECO bajo:** Dependencia de plataformas extranjeras reduce exportaciones TIC
- **PAY volatilidad:** Fluctuaciones macroeconómicas afectan transacciones
- **Datos 2025:** Preliminares/estimados, sujetos a revisión
- **Brecha rural:** Indicadores ACC subestiman disparidades geográficas

---

## 🔗 Referencias Externas (Cuando hay conexión)

- [UN E-Government Knowledgebase](https://publicadministration.un.org/egovkb/)
- [Instituto Nacional de Estadística y Censos (INEC)](https://www.ecuadorencifras.gob.ec/)
- [Banco Central del Ecuador (BCE)](https://www.bce.fin.ec/)
- [ARCOTEL - Administración de Regulación y Control de Telecomunicaciones](https://www.arcotel.gob.ec/)
- [World Bank WITS](https://wits.worldbank.org/)
- [Observatorio Ecuador Digital](https://observatorioecuadordigital.mintel.gob.ec/)

---

## 📝 Archivos de Configuración

- **index.html:** Aplicación web HTML5 con contenido estructura
- **styles.css:** Estilos CSS3 con efectos glass-morphism
- **script.js:** Interactividad (acordeones, smooth scroll)

---

## 💡 Notas Importantes

1. **Portabilidad:** La carpeta completa es autosuficiente. Se puede compartir por USB, email, etc.
2. **Compatibilidad:** Funciona en cualquier navegador moderno (Chrome, Firefox, Safari, Edge)
3. **Actualización:** Para agregar nuevos años, seguir estructura de carpetas existente
4. **Privacidad:** No colecta datos. Todo funciona localmente.

---

## 👤 Información del Proyecto

**Versión:** 2025.02
**Estado:** Completo y funcional
**Última Actualización:** Febrero 2026
**Cobertura:** Ecuador, 2020-2025

---

## 📞 Soporte

Para más información sobre metodología, contacta con el desarrollador o revisa los documentos teóricos en la carpeta `docs/`.

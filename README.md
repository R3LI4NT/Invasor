<p align="center">
  <img width="427" height="58" alt="Sin título-1" src="https://github.com/user-attachments/assets/a20f8359-4bc8-4c85-bc9f-d40812d5ee15" />
</p>


<p align="center">
  <img width="200" height="350" alt="Invasor-2" src="https://github.com/user-attachments/assets/2b8c8d9f-102e-4e7c-9bf0-562b41c7cea2" />
</p>

<p align="center">
   <a href="https://dotnet.microsoft.com/">
    <img src="https://img.shields.io/badge/C%23-Ransomware-093fb9.svg">
  </a>
    <img src="https://img.shields.io/badge/System-Windows-093fb9.svg">
  </a>
    <img src="https://img.shields.io/badge/Private-%F0%9F%94%92-093fb9.svg">
  </a>
</p>

  <div id="header" align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?size=14&width=220&color=093fb9&lines=Mira+primero,+luego+salta"></a>
</div>

<h1 align="center"></h1>

### Características de `Invasor`:

<img src="https://img.shields.io/badge/ENCRIPTACIÓN:-093fb9.svg"> Incluye una amplia variedad de extensiones a cifrar y utiliza el algoritmo AES-256, lo que hace que descifrar los archivos sin la clave sea prácticamente difícil. La encriptación es de tipo <ins>parcial</ins>: solo encripta el primer MB de cada archivo, suficiente para dejarlo corrupto y que la encriptación sea más rápida. La extensión original es guardada dentro del archivo encriptado.

<img width="728" height="233" alt="1" src="https://github.com/user-attachments/assets/76b8c790-860c-421a-b22c-35fcd9635a01" />
<img width="1365" height="721" alt="2" src="https://github.com/user-attachments/assets/395309e2-6b34-4958-88a4-6e706eec1a7a" />

Para mayor seguridad, la clave AES es cifrada utilizando ECC (Curva P-256), sin la clave ECC Privada el usuario final no podrá desencriptar los archivos. Es envíada al atacante desde un servidor SMTP. La clave privada se sobrescribe tres veces con datos aleatorios y posteriormente con patrones de ceros y unos; finalmente, el archivo se trunca a 0 bytes antes de su eliminación. Este proceso de sobreescritura dificulta en extremo cualquier intento de recuperación forense.

<img width="1143" height="368" alt="3" src="https://github.com/user-attachments/assets/9a8c7bbc-bce7-4a82-80f0-6aca48bc0166" />

Si el servidor SMTP falla, envía la clave al canal de Telegram.

<img width="1053" height="530" alt="Telegram" src="https://github.com/user-attachments/assets/20ff218d-98cf-42a5-a975-44ca938a421c" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/RESCATE:-093fb9.svg"> Una vez finalizado el proceso de encriptación, Invasor genera un archivo interactivo denominado `Invasor-decrypt-files.html` en el escritorio del usuario, donde se detallan los pasos necesarios para obtener el desencriptador.

<img width="465" height="276" alt="4" src="https://github.com/user-attachments/assets/c53b7ff3-ef4f-4eb3-8872-2ecf3a0b3fa0" />
<img width="465" height="266" alt="5" src="https://github.com/user-attachments/assets/24a8593f-0e61-4eb9-8751-2c707dd4d1a4" />
<img width="465" height="271" alt="6" src="https://github.com/user-attachments/assets/4e8d6591-d619-4e55-aebf-e53487f05f66" />
<img width="465" height="284" alt="7" src="https://github.com/user-attachments/assets/a272ca09-0d8b-4e12-8f34-4fc0f287443c" />
<img width="465" height="231" alt="8" src="https://github.com/user-attachments/assets/c7664699-4c85-41f0-8982-dc6b604f9a47" />


<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DESENCRIPTACIÓN:-093fb9.svg"> Invasor cuenta con un Desencriptador GUI para recuperar los archivos encriptados, permite desencriptar por lote o por archivo individual.

<img width="476" height="520" alt="8" src="https://github.com/user-attachments/assets/e3c9d7bc-ad10-4d16-a4e9-ca9d94caf5cb" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/STEALER:-093fb9.svg"> Antes de encriptar los archivos, hace una búsqueda recursivamente de archivos sensibles para luego ser enviados al canal de Telegram. Utiliza Telegram como C&C dificulta a los mecanismos de seguridad que detecten la presencia del Stealer. La mayoría de los Ransomwares emplean esta técnica para presionar a la víctima y que pagué el rescate, de no hacerlo se filtra la información.

<img width="1265" height="588" alt="Stealer" src="https://github.com/user-attachments/assets/5dfa51e2-4025-4127-9f50-e9daeca66f10" />

Los archivos se comprimen en un .ZIP y se envían automáticamente. En caso de que el comprimido supere los 3.8GB, se envían por partes.

<img width="662" height="275" alt="Stealer_Diagrama" src="https://github.com/user-attachments/assets/8a3470dc-7c33-4c71-b233-9586ce986c66" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DATA-LEAK:-093fb9.svg"> Invasor cuenta con un proyecto web full personalizable listo para usarse en las filtraciones de datos. 

<img width="565" height="237" alt="Data-Leak-3" src="https://github.com/user-attachments/assets/3b32abf8-6b4a-401a-9b8c-6f9b2b5184b5" />
<img width="565" height="236" alt="Data-Leak-4" src="https://github.com/user-attachments/assets/f3d3535f-1924-4b6e-9447-3120472eda92" />
<img width="565" height="227" alt="Data-Leak-2" src="https://github.com/user-attachments/assets/447b3a9e-c2ea-43c1-9059-717e7f3bc010" />
<img width="565" height="234" alt="Data-Leak-1" src="https://github.com/user-attachments/assets/649a86fc-ba45-4838-b376-59259420184d" />

https://github.com/user-attachments/assets/58c12a1c-4272-4f9b-b881-9c998ca320c0

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD:-DISCOVERY-093fb9.svg"> Se diseño un herramienta de recolección de información del sistema que realiza un análisis comprehensivo del equipo infectado, recolectando datos como:

**1. Información Básica del Sistema:**
- Nombre de máquina y usuario
- Versión del sistema operativo y arquitectura (32/64 bits)
- Información de memoria (RAM física y virtual)
- Procesadores (cantidad, arquitectura, páginas)

**2. Análisis de Hardware:**
- Fabricante y modelo del equipo
- Procesador: nombre, velocidad, núcleos, procesadores lógicos
- Discos duros: tamaño, espacio libre, sistema de archivos, tipo de unidad
- Memoria RAM: total, disponible, carga de memoria

**3. Información de Red:**
- Hostname y direcciones IP locales
- Interfaces de red: nombre, tipo, estado, velocidad
- Direcciones MAC de cada interfaz
- Configuración de red: gateways, servidores DNS
- Conexiones TCP activas: IP local/remota, puertos, estado, PID

**4. Usuarios y Grupos:**
- Usuario actual: SID, tipo de autenticación
- Grupos de usuario pertenecientes
- Usuarios locales del sistema
- Información de dominio (si está unido a dominio)

**5. rocesos y Servicios:**
- Procesos en ejecución: nombre, PID, uso de memoria
- Servicios de Windows: nombre, estado, modo de inicio, ruta
- Limitado a 100 procesos para evitar saturación

**6. Active Directory:**
- Detección de unión a dominio
- Nombre del dominio y rol
- Información adicional via WMI

**7. Seguridad del Sistema:**
- Estado de UAC (User Account Control)
- Tipo de producto Windows
- Firewall instalado
- Políticas de seguridad

**8. Registro de Windows:**
- Entradas de autoarranque (Run, RunOnce)
- Programas instalados (desde registro)
- Software detallado (via WMI)

El archivo `system_discovery.txt` es envíado al canal de Telegram.

<img width="1365" height="716" alt="SystemDiscovery" src="https://github.com/user-attachments/assets/b96e2454-40f6-44da-bc1e-ba505bc1da38" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/AntiVM:-093fb9.svg"> Antes de comenzar la encriptación, verifica si se ejecuta en máquina virtual y se auto-termina si detecta entorno virtual. **Ventajas**: Dificulta el análisis y reversing, los AV no pueden estudiar fácilmente el código.

https://github.com/user-attachments/assets/d275df1b-c9ff-4815-8bb0-96a72c17016c

<h1 align="center"></h1>

> [!NOTE]
> Invasor aún se encuentra en desarrollo, todavía falta pulir bastante. Es un proyecto de código privado en el cual actualmente soy el único desarrollador.

> R3LI4NT

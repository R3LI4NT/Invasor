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

<img src="https://img.shields.io/badge/LOADER:-093fb9.svg"> Incluye un loader que carga y ejecuta los módulos `Encrypt.dll`, `SystemDiscovery.dll`  y `RClone.dll` directamente desde memoria, evitando que el archivo exista en el disco. Esta técnica reduce la superficie de detección y dificulta la ingeniería inversa. Para reforzar la protección, el archivo .DLL es ofuscado empleando múltiples técnicas (**Strings Encryption, Control Flow Obfuscation, Resource Encryption, Dead Code Injection, Metadata Pruning, Linking, PreMark, Anti-Debug, etc**).

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/ENCRIPTACIÓN:-093fb9.svg"> Incluye una amplia variedad de extensiones a cifrar y utiliza el algoritmo AES-256, lo que hace que descifrar los archivos sin la clave sea prácticamente difícil. La encriptación es de tipo <ins>parcial</ins>: solo encripta el primer MB de cada archivo, suficiente para dejarlo corrupto y que la encriptación sea más rápida. La extensión original es guardada dentro del archivo encriptado.

<img width="730" height="258" alt="extensiones" src="https://github.com/user-attachments/assets/0a50b80b-fba4-4ff1-b9a4-fd52b62f95b1" />
<img width="1365" height="723" alt="wallpaper" src="https://github.com/user-attachments/assets/79134908-2bc3-4733-ae92-c17722d0ef0b" />

Cuenta con una funcionalidad de exclusión de archivos para evitar que el Ransomware encripte archivos y carpetas críticos del sistema que podrían dañar el sistema operativo. La lista puede ser modificada según las necesidades del atacante.

<img width="612" height="374" alt="encrypt" src="https://github.com/user-attachments/assets/d02da292-8166-402e-9f43-cf61b8aefd4a" />

Para mayor seguridad, la clave AES es cifrada utilizando ECC (Curva P-256), sin la clave ECC Privada el usuario final no podrá desencriptar los archivos. Es envíada al atacante desde un servidor SMTP. La clave privada se sobrescribe tres veces con datos aleatorios y posteriormente con patrones de ceros y unos; finalmente, el archivo se trunca a 0 bytes antes de su eliminación. Este proceso de sobreescritura dificulta en extremo cualquier intento de recuperación forense.

<img width="1143" height="368" alt="3" src="https://github.com/user-attachments/assets/9a8c7bbc-bce7-4a82-80f0-6aca48bc0166" />

Si el servidor SMTP falla, envía la clave al canal de Telegram.

<img width="1053" height="530" alt="Telegram" src="https://github.com/user-attachments/assets/20ff218d-98cf-42a5-a975-44ca938a421c" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/RESCATE:-093fb9.svg"> Una vez finalizado el proceso de encriptación, Invasor genera un archivo interactivo denominado `Invasor-decrypt-file.html` en el escritorio del usuario, donde se detallan los pasos necesarios para obtener el desencriptador.

<img width="600" height="300" alt="Note-1" src="https://github.com/user-attachments/assets/290ec627-6a4a-4609-8e89-bf99abf9765a" />
<img width="600" height="300" alt="Note-2" src="https://github.com/user-attachments/assets/958a0350-fecb-4d89-8cdc-b3eca18e5866" />
<img width="600" height="300" alt="Note-3" src="https://github.com/user-attachments/assets/9f1804b6-ea52-40b8-a1bb-d831ac30aaaf" />
<img width="600" height="300" alt="Note-4" src="https://github.com/user-attachments/assets/7dbed0de-d7e2-4447-a32c-d1c491355d67" />
<img width="600" height="300" alt="Note-5" src="https://github.com/user-attachments/assets/3c109257-51da-4553-bd92-4de5edbcf0f5" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DESENCRIPTACIÓN:-093fb9.svg"> Invasor cuenta con un Desencriptador GUI para recuperar los archivos encriptados, permite desencriptar por lote o por archivo individual.

<img width="478" height="716" alt="Decrypter" src="https://github.com/user-attachments/assets/1b5a1738-1648-41da-89b1-bb8cbcf38d72" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/STEALERS:-093fb9.svg"> Antes de encriptar los archivos, hace una búsqueda recursivamente de archivos sensibles para luego ser enviados al atacante.

`Stealer 1- Telegram:` Utiliza Telegram como C&C dificulta a los mecanismos de seguridad que detecten la presencia del Stealer. La mayoría de los Ransomwares emplean esta técnica para presionar a la víctima y que pagué el rescate, de no hacerlo se filtra la información.

<img width="1265" height="588" alt="Stealer" src="https://github.com/user-attachments/assets/5dfa51e2-4025-4127-9f50-e9daeca66f10" />

Los archivos se comprimen en un .ZIP y se envían automáticamente. En caso de que el comprimido supere los 3.8GB, se envían por partes.

<img width="662" height="275" alt="Stealer_Diagrama" src="https://github.com/user-attachments/assets/8a3470dc-7c33-4c71-b233-9586ce986c66" />

`Stealer 2- RClone:` Utiliza RClone para sincronizar los archivos a la nube (API Drive) antes de encriptarlos, permite subir grandes volúmenes de archivos simultáneamente. RClone es un software legítimo, no es detectado como malware.

<img width="1029" height="542" alt="Stealer-2" src="https://github.com/user-attachments/assets/87ecc85a-9e56-46f6-80d0-2dfb73d1df81" />

Se le puede especificar que directorios y archivos debe exfiltrar.

<img width="771" height="455" alt="Stealer-3" src="https://github.com/user-attachments/assets/377abbb4-601c-4cfc-9ee9-070f9461a3bd" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DATALEAK:-093fb9.svg">  Invasor cuenta con un proyecto web full personalizable listo para usarse en las filtraciones de datos. 

<img width="665" height="340" alt="1" src="https://github.com/user-attachments/assets/3d4be421-f33b-49c1-89b1-2177c3fdc863" />
<img width="665" height="336" alt="2" src="https://github.com/user-attachments/assets/715c429b-b385-4dc3-8311-0cbe73b565cc" />
<img width="665" height="335" alt="3" src="https://github.com/user-attachments/assets/b662da0f-98b5-42f3-9279-46e7aafebacd" />
<img width="665" height="336" alt="4" src="https://github.com/user-attachments/assets/c0173706-43fb-456e-a5d3-c004510f1b8f" />
<img width="665" height="334" alt="5" src="https://github.com/user-attachments/assets/8b9c840b-ae7f-4bf9-92a4-d4d29cd3f4fa" />
<img width="665" height="336" alt="6" src="https://github.com/user-attachments/assets/c6ab49a3-fcd3-49f1-8ac0-1d820d0655da" />
<img width="665" height="333" alt="7" src="https://github.com/user-attachments/assets/70ee49a5-9bed-41f7-9c26-58e8bb64b174" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD 1)-DISCOVERY-093fb9.svg"> Se diseño un herramienta de recolección de información del sistema que realiza un análisis comprehensivo del equipo infectado, recolectando datos como:

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

**5. Procesos y Servicios:**
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

<img src="https://img.shields.io/badge/PAYLOAD 2)-REMOVER-093fb9.svg"> Se implementó un módulo "Remover", especializado en la eliminación permanente de mecanismos de recuperación del sistema. 

1. `Elimina todas las Shadow Copies`: Borra todas las copias de seguridad del sistema usando varios métodos (VSS, WMI, CIM, VBScript), asegurándose de que no quede ninguna versión previa de archivos recuperable.
<img width="766" height="240" alt="1" src="https://github.com/user-attachments/assets/5a5ff288-906d-40fe-86ce-2bbf71fee865" />

<img width="634" height="363" alt="4" src="https://github.com/user-attachments/assets/9e7b9a39-aa7d-44f4-9f16-85b00b3644de" />

<img width="560" height="163" alt="5" src="https://github.com/user-attachments/assets/96e3d17d-b77d-40b0-9dda-6441a86a814d" />

2. `Desactiva y destruye Windows Recovery Environment (WinRE)`: Deshabilita WinRE, borra sus archivos (winre.wim), elimina carpetas asociadas y hasta intenta borrar particiones de recuperación para impedir restauración del sistema. Se eleva automáticamente con UAC y habilita SeDebugPrivilege para manipular procesos del sistema.

<img width="571" height="96" alt="3" src="https://github.com/user-attachments/assets/0a864cf8-384d-4274-8193-309ba93be6b0" />

3. `Modificar el BCD para impedir recuperaciones`: Edita la configuración de arranque (BCD) para desactivar recuperación automática y evitar que Windows muestre opciones de reparación tras fallas.

<img width="584" height="400" alt="2" src="https://github.com/user-attachments/assets/68721f32-95e5-4e14-b757-e86fa026d74c" />

4. `Borra rastros forenses`: Elimina registros de eventos (System, Security, Application, PowerShell) y borra archivos Prefetch, dificultando análisis forense posterior. Configura EventLog para que falle permanentemente.

<img width="788" height="181" alt="6" src="https://github.com/user-attachments/assets/9a651ad3-e738-4f3d-b10a-aa6b309edb98" />

<img width="619" height="557" alt="7" src="https://github.com/user-attachments/assets/fc0043f2-0472-4249-b503-83fa1945fd8f" />

5. `Ofuscación de comandos y múltiples métodos`: Esconde los comandos (hex, concatenación, scripts codificados Base64) y usa varias rutas para cada acción (cmd, PowerShell, COM, WMI), garantizando que se ejecute aunque falle un método. El código emplea técnicas de polimorfismo.

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/AntiVM:-093fb9.svg"> Antes de comenzar la encriptación, verifica si se ejecuta en máquina virtual y se auto-termina si detecta entorno virtual. **Ventajas**: Dificulta el análisis y reversing, los AV no pueden estudiar fácilmente el código.

https://github.com/user-attachments/assets/d275df1b-c9ff-4815-8bb0-96a72c17016c

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/r3li4nt.contact@keemail.me-D14836?style=for-the-badge&logo=gmail&logoColor=white" />


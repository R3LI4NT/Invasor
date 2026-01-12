<p align="center">
  <img width="427" height="58" alt="Sin título-1" src="https://github.com/user-attachments/assets/a20f8359-4bc8-4c85-bc9f-d40812d5ee15" />
</p>


<p align="center">
  <img width="200" height="350" alt="Invasor-2" src="https://github.com/user-attachments/assets/89ff2a45-e3b7-4a5e-96c1-d894fc980aa8" />
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

<img src="https://img.shields.io/badge/LOADER:-093fb9.svg"> Incluye un loader que carga y ejecuta los módulos (`EncryptModule.dll`, `SystemDiscovery.dll`, `ProcessKiller.dll`, `RClone.dll`, `Remover.dll`, `EDRKiller.dll`, `SMBSpreader.dll`, `Backdoor[svchost.dll]`)  directamente desde memoria, evitando que el archivo exista en el disco. Esta técnica reduce la superficie de detección y dificulta la ingeniería inversa. Para reforzar la protección, los archivos .DLL son ofuscados empleando múltiples técnicas (**Strings Encryption, Control Flow Obfuscation, Resource Encryption, Dead Code Injection, Metadata Pruning, Linking, PreMark, Anti-Debug, etc**).

`Invasor - Steps`: Conseguir los siguientes objetivos.

<img width="538" height="481" alt="Invasor-Steps" src="https://github.com/user-attachments/assets/2fd580a9-bff8-4684-becd-bc3879dcf6a3" />


<h1 align="center"></h1>

<img src="https://img.shields.io/badge/ENCRIPTACIÓN:-093fb9.svg"> Incluye una amplia variedad de extensiones a cifrar y utiliza el algoritmo AES-256, lo que hace que descifrar los archivos sin la clave sea prácticamente difícil. La encriptación es de tipo <ins>parcial</ins>: solo encripta el primer MB de cada archivo, suficiente para dejarlo corrupto y que la encriptación sea más rápida. La extensión original es guardada dentro del archivo encriptado. Detecta automáticamente si existen USB conectadas, si las hay, encripta todos los archivos que tiene dentro y crea archivo **autorun.inf** para mayor propagación; aplica también para versiones antiguas de Windows.

<img width="1095" height="625" alt="encrypt" src="https://github.com/user-attachments/assets/779d440b-b3a2-4104-8824-8fabb3fe5e14" />
<img width="1365" height="728" alt="wallpaper" src="https://github.com/user-attachments/assets/cc236d78-71c2-4ad1-a9ba-4a237a52acfd" />

Cuenta con una funcionalidad de exclusión de archivos para evitar que el Ransomware encripte archivos y carpetas críticos del sistema que podrían dañar el sistema operativo. La lista puede ser modificada según las necesidades del atacante.

<img width="612" height="374" alt="encrypt" src="https://github.com/user-attachments/assets/d02da292-8166-402e-9f43-cf61b8aefd4a" />

Para mayor seguridad, la clave AES es cifrada utilizando ECC (Curva P-256), sin la clave ECC Privada el usuario final no podrá desencriptar los archivos. Son envíadas al atacante desde un servidor SMTP. La clave AES + ECC privada se sobrescriben tres veces con datos aleatorios y posteriormente con patrones de ceros y unos; finalmente, los archivos se trunca a 0 bytes antes de su eliminación. Este proceso de sobreescritura dificulta en extremo cualquier intento de recuperación forense.

<img width="1151" height="462" alt="SMTP" src="https://github.com/user-attachments/assets/c36d3bd1-9d7c-481f-9b91-605da78536f2" />

Si el servidor SMTP falla, envía la clave al canal de Telegram.

<img width="1364" height="646" alt="Telegram-Keys" src="https://github.com/user-attachments/assets/9a3f6579-7eba-4070-a92f-99815a8405a2" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/VPS SERVER:-093fb9.svg"> Invasor tiene contratado un servicio VPS seguro con ubicación en un país conflictivo. El hecho de que se utilice un VPS localizado en un país conflictivo le proporciona una cobertura jurídica; las agencias de inteligencia tendrán dificultades para requerir datos sobre el Ransomware a las autoridades de esa nación, obstruyendo la investigación.

El VPS se utiliza para:

1- Almacenaje de claves para el desencriptador.
<img width="1226" height="382" alt="vps-server" src="https://github.com/user-attachments/assets/775fb951-f0b7-43cc-a7c2-a6d07794468a" />

2- Gestión del Backdoor C2 con certificado SSL/TLS válidos disponible 24/7.
<img width="665" height="492" alt="Backdoor" src="https://github.com/user-attachments/assets/cd2c3948-eb1c-4146-bfa0-7f5a0d8dede9" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/RESCATE:-093fb9.svg"> Una vez finalizado el proceso de encriptación, Invasor genera un archivo interactivo denominado `Invasor-decrypt-files.html` en el escritorio del usuario, donde se detallan los pasos necesarios para obtener el desencriptador.

<img width="600" height="300" alt="Note-1" src="https://github.com/user-attachments/assets/290ec627-6a4a-4609-8e89-bf99abf9765a" />
<img width="600" height="300" alt="Note-2" src="https://github.com/user-attachments/assets/958a0350-fecb-4d89-8cdc-b3eca18e5866" />
<img width="600" height="300" alt="Note-3" src="https://github.com/user-attachments/assets/9f1804b6-ea52-40b8-a1bb-d831ac30aaaf" />
<img width="600" height="300" alt="Note-4" src="https://github.com/user-attachments/assets/7dbed0de-d7e2-4447-a32c-d1c491355d67" />
<img width="600" height="300" alt="Note-5" src="https://github.com/user-attachments/assets/3c109257-51da-4553-bd92-4de5edbcf0f5" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DESENCRIPTACIÓN:-093fb9.svg"> Invasor cuenta con un Desencriptador GUI para recuperar los archivos encriptados, permite desencriptar por lote o por archivo individual.

<img width="478" height="716" alt="Decrypt-INVASOR" src="https://github.com/user-attachments/assets/14ba5475-de19-4b53-b5a7-068ae74ae90d" />

https://github.com/user-attachments/assets/f31e48cb-b8b1-40eb-aba2-bfbb7284d594

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

https://github.com/user-attachments/assets/be25f8a7-6240-4fd2-a245-71ede1b3e075

<img width="665" height="340" alt="1" src="https://github.com/user-attachments/assets/3d4be421-f33b-49c1-89b1-2177c3fdc863" />
<img width="665" height="336" alt="2" src="https://github.com/user-attachments/assets/715c429b-b385-4dc3-8311-0cbe73b565cc" />
<img width="665" height="335" alt="3" src="https://github.com/user-attachments/assets/b662da0f-98b5-42f3-9279-46e7aafebacd" />
<img width="665" height="335" alt="4" src="https://github.com/user-attachments/assets/06b62963-5047-453c-b771-bfcf0cdde925" />
<img width="665" height="334" alt="5" src="https://github.com/user-attachments/assets/8b9c840b-ae7f-4bf9-92a4-d4d29cd3f4fa" />
<img width="665" height="336" alt="6" src="https://github.com/user-attachments/assets/c6ab49a3-fcd3-49f1-8ac0-1d820d0655da" />
<img width="665" height="333" alt="7" src="https://github.com/user-attachments/assets/70ee49a5-9bed-41f7-9c26-58e8bb64b174" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD 1)-DISCOVERY-093fb9.svg"> Se diseño un herramienta de recolección de información del sistema que realiza un análisis comprehensivo del equipo infectado, recolectando datos como:

**1. INFORMACIÓN BÁSICA DEL SISTEMA:**
- Nombre de la máquina
- Nombre de usuario actual
- Dominio/usuario de Windows
- Versión del sistema operativo
- Arquitectura (32/64 bits)
- Directorio actual
- Directorio del sistema
- Número de procesadores
- Memoria RAM en uso
- Tiempo de actividad del sistema

**2. ANÁLISIS DE HARDWARE COMPLETO:**
- Procesador: Nombre, velocidad, núcleos, procesadores lógicos
- Memoria RAM: Total, disponible, porcentaje de uso
- Discos duros: Todos los discos, tamaño, espacio libre, sistema de archivos
- Fabricante y modelo del equipo
- Motherboard/Sistema completo

**3. INFORMACIÓN DE RED DETALLADA:**
- Hostname del equipo
- Todas las direcciones IP (IPv4 e IPv6)
- Interfaces de red: Nombre, tipo, estado, velocidad
- Direcciones MAC de cada interfaz
- Gateways configurados
- Servidores DNS
- Conexiones TCP activas: IPs locales/remotas, puertos, estado, PID del proceso

**4. USUARIOS Y GRUPOS:**
- Usuario actual: SID, tipo de autenticación
- Grupos del usuario: Todos los grupos de seguridad
- Usuarios locales: Todos los usuarios del sistema
- Información de dominio (si está unido)

**5. PROCESOS Y SERVICIOS:**
- Todos los procesos en ejecución (sin límite)
- PID, nombre, memoria usada, sesión
- Todos los servicios de Windows
- Nombre, estado, modo de inicio, ruta

**6. ACTIVE DIRECTORY (si aplica):**
- Detección de unión a dominio
- Nombre del dominio
- Rol del equipo en el dominio

**7. INFORMACIÓN DE SEGURIDAD:**
- Estado de UAC (User Account Control)
- Tipo de producto Windows
- Firewall instalado
- Políticas de seguridad

**8. REGISTRO DE WINDOWS:**
- Entradas de autoarranque (Run, RunOnce)
- Programas instalados (desde registro)
- Software detectado via WMI

**9. SMB SHARES (RECURSOS COMPARTIDOS):**
- Shares locales: ADMIN$, C$, IPC$, carpetas compartidas
- Tipos: Discos, impresoras, IPC, dispositivos
- Información de acceso y permisos

**10. SOFTWARE INSTALADO:**
- Programas detectados via WMI
- Nombre, versión, fabricante, fecha de instalación

El archivo `system_discovery_{DateTime.Now:yyyyMMdd_HHmmss}.html` es almacenado en memoria y sobrescrito con datos aleatorios luego de ser envíado al canal de Telegram.

<img width="1365" height="638" alt="System-Discovery-1" src="https://github.com/user-attachments/assets/c4cbca7a-06b5-419d-89b3-590e6f90ba21" />

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

<img src="https://img.shields.io/badge/PAYLOAD 3)-PROCESS KILLER-093fb9.svg"> Se implementaron dos módulos en uno "ProcessKiller + ProcessKillerExtensions" encargados de matar procesos del sistema para optimizar la disponibilidad de memoria y capacidad de procesamiento para el módulo de encriptación. De esta manera, el Ransomware obtiene los siguientes beneficios en su proceso de ejecución:

`ACELERA EL CIFRADO EXPONENCIALMENTE` - **Libera recursos del sistema:**
- Libera RAM: Al matar procesos, más memoria para cifrado
- Libera CPU: Procesos como Chrome, Photoshop usan mucha CPU
- Libera disco: Procesos que escriben/leen disco

`PREVIENE INTERRUPCIÓN` - **Elimina amenazas:**
- Task Manager: Usuario no puede ver/kill proceso ransomware
- Process Explorer: Herramientas de sysadmin
- RDP/Session managers: Evita que admin remoto intervenga
- Cloud sync: Dropbox, Google Drive, OneDrive (evita sync de archivos sanos)

`EVITA RECUPERACIÓN` - **Bloquea software de recuperación:**
- Shadow Copy: Mata vssadmin.exe para borrar snapshots
- System Restore: Impide creación de puntos de restauración
- Backup services: Servicios de backup de Windows

ProcessKiller incorporá una WhiteList con aquellos procesos que considera críticos del sistema. Si NO está en la whitelist ⇒ se intenta matar.

<img width="405" height="400" alt="WhiteList" src="https://github.com/user-attachments/assets/3757930a-954b-47fb-9a86-b127dcb87149" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD 4)-PERSISTENCIA-093fb9.svg"> Invasor despliega técnicas de persistencia para garantizar el control remoto en equipos infectados.

`Backdoor`: Módulo **Backdoor[svchost.dll]** - Dropper encargado de descargar y ejecutar <a href="https://github.com/R3LI4NT/XilentDoor">XilentDoor</a> en el equipo del usuario, proporcionando movimiento lateral. 

Utiliza métodos de descarga alternativos como HttpClient, WebClient y Certutil.exe por si alguno falla. Emplea cuatro métodos de extracción para descomprimir el zip (Backdoor) que son System.IO.Compression (Nativo de .NET), Powershell, Shell COM (Windows Shell) y 7-Zip por si alguno falla. El Backdoor se auto-ejecuta y luego ejecuta múltiples intentos de eliminación para borrar evidencias.

Ciclo de vida: 1. Descarga **→** 2. Extracción **→** 3. Ejecución **→** 4. Eliminación

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD 5)-EVASIÓN-093fb9.svg"> Emplea la técnica **BYOVD** (Bring Your Own Vulnerable Driver) para desplegar tácticas de EDR Killer, permitiendo la finalización de procesos de antivirus que podrían impedir la ejecución de Invasor.

<img width="1364" height="721" alt="530585684-4de93ecc-7838-4602-813d-4bbb2d52ca42" src="https://github.com/user-attachments/assets/a62a6a0a-826f-4c07-8df0-938ccf6eeba3" />

Por defecto mata 180 procesos, estos pueden ser modificables según las necesidades. El proceso de ejecución de `EDRKiller.dll` es simple: descarga **7z.exe + updateWindows.zip** en la ruta temporal del usuario; a continuación, utiliza **7-Zip** en modo línea de comandos para descomprimir el archivo, el cual contiene el controlador vulnerable que será instalado. Una vez cargado en el sistema, el módulo lanza múltiples hilos para finalizar de forma concurrente todos los procesos definidos en la lista. Una vez que haya cumplido el ciclo, elimina las evidencias.

<img width="1099" height="611" alt="edr_killer" src="https://github.com/user-attachments/assets/75232520-f79c-4eb0-83cd-3349a6c2bd39" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/PAYLOAD 6)-MOVIMIENTO LATERAL-093fb9.svg"> Se desarrollo un módulo llamado `SMBSpreader` encargado de infectar con el Ransomware a otros equipos en la red a través del protocolo SMB.

`FASE 0: PREPARACIÓN`
- Descarga 7zr.exe, el loader.zip + PAExec.exe.

`FASE 1: ESCANEO DE RED`
- Descubre hosts activo en la red local (ping sweep).
- Escaneo multi-hilo (50 hilos concurrentes).

`FASE 2: DETECCIÓN SMB`
- Prueba puerto 445 en hosts activos.
- Identifica equipos vulnerables con SMB habilitado.
- Filtra solo sistemas accesibles.

`FASE 3: ATAQUE Y PROPAGACIÓN`
- Enumeración de shares - Busca carpetas compartidas.

**Ataque en dos fases:**
- Acceso sin credenciales: Prueba shares abiertos (ADMIN$, C$, etc.).
- Brute force: Prueba combinaciones usuario/contraseña débiles.

**Despliegue con PAExec:**
- Copia el payload al share accesible.
- Ejecuta remotamente usando PAExec.

`FASE 4: LIMPIEZA ANTIFORENSE`
- Sobrescritura DoD 5220.22-M (3 pasadas de datos aleatorios).
- Eliminación segura de archivos temporales.
- Limpieza de rastros en sistema temp.

<img width="1304" height="642" alt="SMBSpreader-1" src="https://github.com/user-attachments/assets/a43cd82e-1102-479d-a52d-5487e13482de" />
<img width="1199" height="680" alt="SMBSpreader-2" src="https://github.com/user-attachments/assets/9ac2bd94-8ed3-4d89-9659-a4477685a278" />
<img width="1258" height="692" alt="SMBSpreader-3" src="https://github.com/user-attachments/assets/080b996a-69e6-4c38-bb01-d08a93202c56" />
<img width="420" height="152" alt="SMBSpreader-4" src="https://github.com/user-attachments/assets/81308cf7-e0f8-45c5-8263-6f595a7cbf96" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/AntiVM:-093fb9.svg"> Antes de comenzar la encriptación, verifica si se ejecuta en máquina virtual y se auto-termina si detecta entorno virtual. 

https://github.com/user-attachments/assets/d275df1b-c9ff-4815-8bb0-96a72c17016c

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/E-BOOK:-093fb9.svg"> Se está trabajando en un E-Book para documentar y organizar el Ransomware. 

<img width="460" height="688" alt="ebook-design-2" src="https://github.com/user-attachments/assets/78b5fb27-86e6-4bd8-97b2-693c9e963cca" />

<h1 align="center"></h1>

Contacto:

<img src="https://img.shields.io/badge/r3li4nt.contact@keemail.me-D14836?style=for-the-badge&logo=gmail&logoColor=white" />

<img src="https://img.shields.io/badge/invasor.support@onionmail.org-0239A4?style=for-the-badge&logo=gmail&logoColor=white" />

</br>
</br>

> [!NOTE]
> Invasor esta programado en C#, sin utilizar código de otras muestras conocidas, kits de construcción o fragmentos reutilizados. Por lo tanto, su código fuente es único y privado. Cuenta con una versión inofensiva diseñada para Simulacros de Ransomware, full personalizable sin comprometer la infraestructura.

> Fecha de creación: Principio de Noviembre 2025

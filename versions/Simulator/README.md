<p align="center">
  <img width="450" height="600" alt="Invasor-2" src="https://github.com/user-attachments/assets/7fb41310-96a1-45f2-91fa-770ffbd9c2cc" />
</p>

<p align="center">
   <a href="https://dotnet.microsoft.com/">
    <img src="https://img.shields.io/badge/C%23-Ransomware-00AB06.svg">
  </a>
    <img src="https://img.shields.io/badge/Version-Simulator-00AB06.svg">
  </a>
    <img src="https://img.shields.io/badge/Private-%F0%9F%94%92-00AB06.svg">
  </a>
</p>

  <p align="center">【 https://r3li4nt.github.io/Invasor 】</p>
    

<h1 align="center"></h1>

### Características de `Invasor Simulator`:

<img src="https://img.shields.io/badge/LOADER:-00AB06.svg"> Incluye un loader que carga y ejecuta los módulos (`EncryptModule.dll`, `WallpaperChanger.dll`, `Reporter.dll`, `Windows.dll`) directamente desde memoria, evitando que el archivo exista en el disco. Esta técnica reduce la superficie de detección y dificulta la ingeniería inversa. Para reforzar la protección, los archivos .DLL son ofuscados empleando múltiples técnicas (**Strings Encryption, Control Flow Obfuscation, Resource Encryption, Dead Code Injection, Metadata Pruning, Linking, PreMark, Anti-Debug, etc**).

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/ENCRIPTACIÓN:-00AB06.svg"> Este módulo simula un ataque de ransomware creando múltiples archivos falsos directamente en el escritorio de la víctima. Utiliza un array con nombres realistas (documentos, fotos, bases de datos, etc.) y genera contenido binario aleatorio de 1 a 5KB para cada archivo. La creación es extremadamente rápida gracias al uso de Parallel.ForEach, que procesa todos los archivos simultáneamente. Inmediatamente después de crear cada archivo, lo "encripta" añadiendo el prefijo "🔒 [ENCRIPTADO POR INVASOR]" al contenido y cambiando su extensión a `.invasor`, eliminando el archivo original.

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/WALLPAPER CHANGER:-00AB06.svg"> Utiliza una imagen embebida directamente en el DLL (wallpaper.png) que se extrae temporalmente en la carpeta **%TEMP%** del sistema. A través de la API de Windows (SystemParametersInfo), establece esa imagen como nuevo fondo de escritorio, reemplazando el wallpaper original. Todo el proceso es rápido, no requiere conexión a internet y añade realismo a la simulación de ransomware.

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/WINDOWS:-00AB06.svg"> Este módulo muestra una ventana emergente que simula la interfaz de rescate de un ransomware real. Incluye un temporizador de 24 horas con cuenta regresiva en tiempo real, un ID único de desencriptación generado aleatoriamente, instrucciones de pago en Bitcoin, y un campo para ingresar una supuesta clave de desencriptación. El botón "DESENCRIPTAR" simula la verificación de clave, permitiendo hasta 3 intentos fallidos antes de bloquearse temporalmente por 10 segundos.

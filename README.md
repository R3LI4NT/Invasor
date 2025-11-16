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

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/RESCATE:-093fb9.svg"> Una vez finalizado el proceso de encriptación, Invasor genera un archivo interactivo denominado `Invasor-decrypt-files.html` en el escritorio del usuario, donde se detallan los pasos necesarios para obtener el desencriptador.

<img width="465" height="276" alt="4" src="https://github.com/user-attachments/assets/c53b7ff3-ef4f-4eb3-8872-2ecf3a0b3fa0" />
<img width="465" height="266" alt="5" src="https://github.com/user-attachments/assets/24a8593f-0e61-4eb9-8751-2c707dd4d1a4" />
<img width="465" height="280" alt="6" src="https://github.com/user-attachments/assets/85ebdce3-7162-46f0-b551-baa86fb80ca3" />
<img width="465" height="277" alt="7" src="https://github.com/user-attachments/assets/a2fc03f7-2bc7-4c87-a630-803e1394e30e" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/DESENCRIPTACIÓN:-093fb9.svg"> Invasor cuenta con un Desencriptador GUI para recuperar los archivos encriptados, permite desencriptar por lote o por archivo individual.

<img width="476" height="520" alt="8" src="https://github.com/user-attachments/assets/e3c9d7bc-ad10-4d16-a4e9-ca9d94caf5cb" />

<h1 align="center"></h1>

<img src="https://img.shields.io/badge/AntiVM:-093fb9.svg"> Antes de comenzar la encriptación, verifica si se ejecuta en máquina virtual y se auto-termina si detecta entorno virtual. **Ventajas**: Dificulta el análisis y reversing, los AV no pueden estudiar fácilmente el código.

https://github.com/user-attachments/assets/d275df1b-c9ff-4815-8bb0-96a72c17016c

<h1 align="center"></h1>

> [!NOTE]
> Invasor aún se encuentra en desarrollo, todavía falta pulir. Es un proyecto de código privado en el cual actualmente soy el único desarrollador. Mi objetivo es llevarlo al máximo nivel posible. No tengo intención de lucrarme con él ni de causar daño; su único propósito es poner a prueba y perfeccionar mis conocimientos en el desarrollo de malware.

> R3LI4NT

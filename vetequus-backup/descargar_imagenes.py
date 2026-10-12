"""Descarga las imágenes originales (resolución completa) de la web de Wix."""
import sys, subprocess, pathlib
BASE = "https://static.wixstatic.com/media/"
IMGS = {
 "home": {
  "logo-cabecera.png": "36b7df_5ccd6e4c30804a658a2ae96ac6ade140~mv2.png",
  "logotipo-vetequus.png": "36b7df_ce648c1c4e684200b441c219e2a017dd~mv2.png",
  "hero-caballo-tordo.jpg": "36b7df_9252bca6132f4de0913a56baac8f906b~mv2.jpg",
  "servicios.jpg": "36b7df_a240c27d0f3249569b20f47b47bf6994~mv2_d_3504_2336_s_2.jpg",
  "aida-y-coquito.jpg": "36b7df_25555141226b4e5bb54907de9202147a~mv2.jpg",
  "mapa-andalucia.jpg": "36b7df_5ddf9ee046e94b13a0f46fec28b8fc03~mv2.jpg",
  "horario.jpg": "36b7df_7d3db9fa005449ce8bdf250c03c6bf07~mv2.jpg",
 },
 "blog": {
  "genetica-1-torda.jpg": "36b7df_dbb75eaa2c3548b38ecd82f359bb0da0~mv2_d_3456_5184_s_4_2.jpg",
  "genetica-2-palomina.jpg": "36b7df_3da6a24ee2bc444783df1ba020595269~mv2.jpg",
  "genetica-3-alazana.jpg": "36b7df_e13fd12b7ab14a9f8a75878797a7aa6a~mv2.jpg",
  "rhodococcus-1.jpg": "36b7df_884b90dcd8f2411ba1f192f2183460d2~mv2.jpg",
  "rhodococcus-2-sinovial.jpg": "36b7df_424ac076b0b74948a7f25bc6f302fc25~mv2_d_1600_1200_s_2.jpg",
  "aplomos1-portada.jpg": "36b7df_64da0e732ebe4a07bf72cba7bad49fe3~mv2.jpg",
  "aplomos1-cerrado-izquierdo.jpg": "36b7df_71bc4f6f35c5498e853ad1c9d4522e85~mv2.jpg",
  "aplomos1-valgus.jpg": "36b7df_a93bfab1a9514fa8abe3eb219bff9726~mv2.jpg",
  "aplomos1-corvo.jpg": "36b7df_7eefe8c1d1244a618d10a071a87c7c50~mv2.jpg",
  "aplomos1-pando.jpg": "36b7df_581716ed238a4ef5b03f66f9045c4900~mv2.jpg",
  "aplomos1-remetido.jpg": "36b7df_0166dbf5b5a84b81a5695d6f2773cc46~mv2.jpg",
  "aplomos1-topino.jpg": "36b7df_92fa3859971948499997357b7d11333c~mv2.jpg",
  "aplomos2-portada.jpg": "36b7df_deb1680452ae4d31a4bfe63d4d78c4a9~mv2.jpg",
  "aplomos2-cerrado-atras.jpg": "36b7df_b6bd2f94384340b1ab6f5e2e84c648cf~mv2.jpg",
  "aplomos2-remetido-cerrado-corvejones.jpg": "36b7df_e08aebb1e5894e69b88ae8d55fd24e40~mv2.jpg",
  "aplomos2-plantado.jpg": "36b7df_4991735fce184fc48ee98f1587cfef89~mv2.jpg",
  "aplomos2-cerrado-corvejones.jpg": "36b7df_6818a7a56d1e4874b3a9025948107859~mv2.jpg",
  "colico-sintomas-1.jpg": "36b7df_c4e205ca93d241a4a2e8fafd95b252d6~mv2.jpg",
  "colico-sintomas-2.jpg": "36b7df_d9e3df3de83e406ca62a36c42d7c6dae~mv2.jpg",
  "colico-reaccionar-1.jpg": "36b7df_e90306a5e12b4cb39f45c5ba2d026819~mv2.jpg",
  "colico-reaccionar-2-caminar.jpg": "36b7df_2546f85ea09444f1a9b14acec065ecd0~mv2.jpg",
  "denticion-1.jpg": "36b7df_e3d28ba759ad4cc090f9a66b789b2483~mv2.jpg",
  "denticion-2-leche.jpg": "36b7df_5cbb4410f30d4623866a6bb6166e12e2~mv2.jpg",
  "denticion-3-permanente.jpg": "36b7df_e29f05a11af64aa297338ddcd79b1886~mv2.jpg",
  "denticion-4-erupcion.jpg": "36b7df_21866372c28c4a39923d488c4e41ee74~mv2.jpg",
  "denticion-5-pico-gavilan.jpg": "36b7df_436ddf2b744d41febe96eb80b91e8459~mv2.jpg",
  "denticion-6-galvaine.jpg": "36b7df_fd9f26a65be045fabca85a61cd05d7db~mv2.jpg",
  "parto-1.jpg": "36b7df_06eb6acd890a4e9c9fcc7753eba39007~mv2.jpg",
  "parto-2.jpg": "36b7df_73fdb38cf9214f8aafb618189b3c63f7~mv2.jpg",
  "parto-3.jpg": "36b7df_0d0ae533626c44ab8960bb481fd0a5f6~mv2.jpg",
 },
}
root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "imagenes")
for folder, items in IMGS.items():
    for name, media_id in items.items():
        dest = root / folder / name
        if dest.exists():
            continue
        subprocess.run(["curl", "-sfL", "-o", str(dest), BASE + media_id], check=True)
        print(f"OK {dest} ({dest.stat().st_size // 1024} KB)")

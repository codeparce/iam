# React + TypeScript + Vite + shadcn

## Creacion del proyecto vite

```bash
npm create vite@latest
## segir las opciones que salen, con ts
npm install tailwindcss @tailwindcss/vite
## para el manejo de formularios
npm install react-hook-form 
## para el manejo de navegacion
npm installi react-router-dom
```

- [segir los pasos de la misma documentacion ](https://ui.shadcn.com/docs/installation/vite)


## Imagen Docker


```docker
docker build -t jinit-app:main .

docker run -d -p 80:80 --name jinitd-app  --memory "150M" --cpus "0.1"  --domainname "jinitd.net" jinit-app:main
```


## Images && recursos

[Repositorio gitHub code parce](https://github.com/JinitD/code-parce-res/tree/main)




Copyright (c) 2026 Code Parce (ツ)
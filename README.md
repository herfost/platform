# platform
```
        ／＞　 フ
        | 　_　_| 
      ／` ミ＿xノ 
     /　　　　 |
    /　 ヽ　　 ﾉ
    │　　|　|　|
／￣|　　 |　|　|
(￣ヽ＿_ヽ_)__)
＼二)
```

Pagina: https://herfost.github.io/platform
Tutorial modifiche: [tutorial.mkv](./assets/tutorial.mkv)

## Deployment
```sh
npm run build
git add dist -f 
git commit -m "dist version #{versione dist}"
git subtree push --prefix dist origin gh-pages
```
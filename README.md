# モックサーバ起動

```shell script
$ docker-compose up -d
```

# モックサーバアドレス

```
http://localhost:4040
```

### ドキュメント生成
```
$ npm run doc
```

# Open API コードジェネレータ

open api のスキーマファイル(yaml ファイル)を直接もしくは stopLight で編集し クライアントコードを生成するスクリプト群

## editorダウンロード

https://stoplight.io/studio/

## 設定準備

### env設定

.env.sample をコピーして .env を作成  
OUT_DIR_xxx の出力先の絶対パスを shoken プロジェクトのローカルPCのパスに設定する  

```
# ex)
OUT_DIR_MANAGEMENT_TS=/path/to/src/management-console/resources/js/api
```

### プロジェクト読み込み

stopLightを起動し、一番下部にある 「Open Existing Folder」 メニューで `shoken-document`のディレクトリを開く


## コード生成

### owner api dart

```
npm run gen:dart
```

# モックサーバ起動

```shell script
$ docker-compose up -d
```

# モックサーバアドレス

## オーナーアプリ

```
http://localhost:4010
```

## 入居者アプリ
```
http://localhost:4011
```

## 管理画面
```
http://localhost:4012
```

# Open API ドキュメント生成

### オーナー api
```
$ npm run doc:owner
```

### 入居者 api

```
$ npm run doc:resident
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
$ npm run gen:owner:dart
```

### resident api dart
```
$ npm run gen:resident:dart
```

### management console api ts
```
$ npm run gen:management:ts
```

## スキーマファイルを監視して自動生成

### owner api dart
```
$ npm run watch:owner:dart
```

### resident api dart
```
$ npm run watch:resident:dart
```
### management console api ts
```
$ npm run watch:management:ts
```

# r2-presigned-url

R2の署名付きURLをAWS SDL v3で作成する方法です。  
https://dash.cloudflare.com/login

## セットアップ

1. CloudflareのDashboardからR2を有効にする
2. R2用のアクセストークンを作成する
3. Access key id / Secret access keyをメモしておく
4. R2のバケットを作成する
5. バケット名とアカウントIDをメモする
6. ```yarn``` でパッケージをインストールする
7. .envに環境変数を設定する

  ```
  R2_ACCESS_KEY=R2で発行したAccess key id
  R2_SECRET_ACCESS_KEY=で発行したSecret access key
  R2_ACCOUNT_ID=R2のアカウントID
  R2_BUCKET=R2のバケット
  ```

## 署名付きURLの発行

.envファイルを読み込むようにして実行する。

```shell
node -r dotenv/config src/index.js
```

## 署名付きURLを使用したファイルのアップロード

下記は署名付きURLを指定して、画像ファイルをアップロードする例です。  
Content-typeを明示的に指定しておきます。

```shell
curl -XPUT -H "content-type:image/jpeg" --data-binary @example.jpg [URL]
```

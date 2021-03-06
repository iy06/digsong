# DigSong

音楽に、キー（KEY）とテンポ（BPM）を登録して、音楽を投稿できるアプリです。

**※レスポンシブに対応しているため、携帯端末からでも確認できます。**

## 目的

DJ や曲のキーやテンポを意識して、音楽を聴くことや曲を探す(Dig る)人の為に作成しました。

そのため、ひと目で投稿された曲のキーとテンポが分かるように設計しております。

## URL

**http://digsong.space**

# 使い方

## トップ画面

![トップ画面](/public/top_page.png)
- 投稿された曲が一覧で表示されております。

## 投稿機能

- 右下の**＋**ボタンをクリックすると、投稿フォームのモーダルが表示されます。

![投稿フォーム画面](/public/post_form.png)

- 項目を入力し、submitボタンをクリックすることで曲を投稿することができます。

## 編集機能

- 投稿した曲の画像部分をクリックすると、編集フォームのモダールが表示されます。

![曲編集ボタン](/public/song_edit.png)

- 編集したい項目を修正し、submitボタンをクリックすることで曲を編集することができます。

![編集フォーム画面](/public/edit_form.png)

## 削除機能

- 投稿した曲の左上の**✕**ボタンをクリックすることで削除することができます。

![削除ボタン](/public/song_delete.png)

# 使用技術

## フロントエンド

- React (17.0.2)
- TypeScript (3.9.9)
- Sass (5.0.0)

## バックエンド

- Ruby (2.6.5)
- Ruby on Rails (6.0.3.6)
- API側リポジトリ (https://github.com/iy06/digsong_api)

## DBMS

- MySQL (5.6)

## インフラ

- EC2
- S3
- Route53

# 機能一覧
## CRUD

- 音楽一覧機能
- 音楽投稿機能
- 音楽編集機能
- 音楽削除機能

# 今後の展望

- ユーザー管理機能の実装
- キーとテンポの自動算出の実装
- キーとテンポに合う曲の表示機能の実装
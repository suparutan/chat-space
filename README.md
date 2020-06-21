
# README
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false|

### Association
- has_many :messages
- has_many:group_users
- has_many :groups, through: :group_users

## messagesテーブル
|Column|Type|Options|＠
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Associaton
has_many :messages
has_many :group_users
has_many :users, through: :group_users

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key:true|
|group|references|null: false, foreign_key:true|
### Association
- belongs_to :user
- belongs_to :group

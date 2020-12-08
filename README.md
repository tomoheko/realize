# README
## usersテーブル
| Column   | Type       | Options     |
| -------- | ---------- | ----------- |
| name     | string     | null: false |
| email    | string     | null: false |
| password | string     | null: false |

### Association
- has_many :tasks



## tasksテーブル
| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| title    | string     | null: false                    |
| user     | references | null: false, foreign_key: true |

### Association
- belongs_to :user
- has_many   :lists



## listsテーブル
| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| title     | string     | null: false                    |
| text      | text       | null: false                    |
| task      | references | null: false, foreign_key: true |

### Association
- belongs_to :task
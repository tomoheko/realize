class Task < ApplicationRecord
  belongs_to :user
  validates  :title, length: { in: 1..255 }
end

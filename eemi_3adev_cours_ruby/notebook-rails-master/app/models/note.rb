class Note < ApplicationRecord

  validates_presence_of :content

  before_save :test

  def test
    raise 'toto... c\'est nul'.inspect if content == 'toto'
  end
end
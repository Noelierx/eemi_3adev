class Note < ApplicationRecord
  validates_presence_of :title #Vérifie la présence d'un titre, une note vite ne sera pas insérée. 

  belongs_to :user, optional:true

  after_save :start_jobs

  scope :without_user, ->{ where(user: nil)}

  def to_markdown
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML,
      autolink: true,
      tables: true,
      underline: true,
      hightlight: true,
      quote: true
    )

    html_content = markdown.render(self.content)
    self.update_attributes(
      content_html: html_content
    ) if html_content
  end


private
  def start_jobs
    NotesJob.perform_later
  end
end
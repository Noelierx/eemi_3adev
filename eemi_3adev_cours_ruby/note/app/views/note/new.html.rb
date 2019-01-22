<h1>Ajout d'une note</h1>

<%= form_for @note do |f| %>

<% @note.errors.full_messages.each do |e| %>

    <%= f.label :title %>
<%= f.text_field :title %>

<%= f.label :content %>
<%= f.text_area :content %>

<%= f.submit 'Ajouter la note' %>
<% end %>
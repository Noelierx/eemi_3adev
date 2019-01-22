<h1>Coucou !</h1>
    
<p> 
    <%= link_to 'Ajouter une note', new_note_path %>
</p>
    
<ul class="note">
    <% @note.each do |note| %>
        <li><%= note.title %></li>
    <% end %>
</ul>
<html>
    <body>
        <h1>Ajouter un message sur le thread ${name}</h1>
        <form action="/thread/new-message" method="post">
            <input type="hidden" name="name" value="${name}">
            <span>Auteur</span>
            <input type="text" name="postAuthor">
            <br>
            <span>Contenu</span>
            <input type="text" name="postContent">
            <button type="submit">Ajouter</button>
        </form>
    </body>
</html>

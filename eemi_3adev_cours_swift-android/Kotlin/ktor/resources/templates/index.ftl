<html>
    <body>
        <div>
            <h1>Liste des threads existants</h1>
            <a href="/thread/add">Ajouter un thread</a>
        </div>
        <#list threads as item>
            <div><a href="/thread/${item.threadName}">${item.threadName}</a></div><br>
        </#list>
    </body>
</html>

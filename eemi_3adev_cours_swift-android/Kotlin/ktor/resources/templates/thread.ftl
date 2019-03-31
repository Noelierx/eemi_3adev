<html>
    <body>
        <div>
            <h1>Thread : ${thread.threadName}</h1>
            <a href="/board/${thread.threadName}/new-message">Ajouter un message</a>
        </div>
        <#list thread.threadsMessage as item>
            <div>
                <div>Message posté par <b>${item.postAuthor}</b> :</div>
                <div>${item.postContent}</div>
            </div>
        </#list>
    </body>
</html>

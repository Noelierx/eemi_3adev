package com.example

// import de l'ensemble des packages utiles au projet
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.html.*
import kotlinx.html.*
import kotlinx.css.*
import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.server.netty.EngineMain
import java.lang.reflect.Type
import java.util.*

/**
 * Entry Point of the application. This function is referenced in the
 * resources/application.conf file inside the ktor.application.modules.
 *
 * The `Application.main` part is Kotlin idiomatic that specifies that the main method is
 * an extension of the [Application] class, and thus can be accessed like a normal member `myapplication.main()`.
 */
fun main(args: Array<String>): Unit = EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@JvmOverloads
fun Application.module(testing: Boolean = false) {

    // installation de FreeMarker conformément à la documentation pour pouvoir appeler les templates par la suite
    // https://ktor.io/servers/features/templates/freemarker.html
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }

    var messageThreads:MutableList<MessageThread> = mutableListOf()

    // On récupère l'ensemble des messages présents dans un thread
    fun getThread(name: String): MessageThread{
        var i:Int = 0
        for (one in messageThreads) {
            if(one.threadName == name) {
                return messageThreads[i]
                break
            }else i++
        }
        return MessageThread(name, mutableListOf())
    }

    /**
     * Maintenant on définit les routes pour utiliser les méthodes spécifiques et les URLs de l'application
     */
    routing {

        // On récupère l'url pour accéder aux Threads
        get("/") {
            call.respondRedirect("/threads", permanent = false)
        }

        // On récupère l'url pour accéder aux Threads
        get("/threads") {
            call.respond(FreeMarkerContent("index.ftl", mapOf("threads" to messageThreads)))
        }

        // On récupère l'url pour créer un nouveau thread
        get("/thread/add") {
            call.respond(FreeMarkerContent("create_thread.ftl", null))
        }

        // On ajoute un thread
        post("/thread/add") {
            val post = call.receiveParameters()
            if (post["name"] != null) {
                messageThreads.add(MessageThread(post["name"]!!, mutableListOf()))
                call.respondRedirect("/threads", permanent = false)
            } else {
                call.respond(FreeMarkerContent("create_thread.ftl", mapOf("error" to "Le nom n'est pas valide")))
            }
        }

        // On accède au thread créé
        get("/thread/{name}") {
            val name = call.parameters["name"]
            val thread = getThread(name!!)
            call.respond(FreeMarkerContent("thread.ftl", mapOf("thread" to thread)))
        }

        // On récupère l'url pour créer un message
        get("/thread/{name}/new-message") {
            call.respond(FreeMarkerContent("add_message.ftl", mapOf("name" to call.parameters["name"])))
        }

        // On ajoute un nouveau message ou on affiche un message d'erreur
        post("/thread/new-message") {
            val post = call.receiveParameters()
            if (post["name"] != null && post["postAuthor"] != null && post["postContent"] != null) {
                val thread = getThread(post["name"]!!)
                thread.ThreadsMessage.add(Message(post["postAuthor"]!!, post["postContent"]!!))
                call.respondRedirect("/thread/${post["name"]}", permanent = false)
            } else {
                call.respond(FreeMarkerContent("add_message.ftl", mapOf("error" to "Le nom n'est pas valide")))
            }
        }

    }
}

data class MessageThread(val threadName: String, var threadsMessage:MutableList<Message>)

data class Message(val postAuthor: String, val postContent: String)


fun FlowOrMetaDataContent.styleCss(builder: CSSBuilder.() -> Unit) {
    style(type = ContentType.Text.CSS.toString()) {
        +CSSBuilder().apply(builder).toString()
    }
}

fun CommonAttributeGroupFacade.style(builder: CSSBuilder.() -> Unit) {
    this.style = CSSBuilder().apply(builder).toString().trim()
}

suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit) {
    this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)
}

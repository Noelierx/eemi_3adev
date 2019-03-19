package com.example.kotlin

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.URL

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val label = findViewById<TextView>(R.id.siteTitle)
        val button = findViewById<Button>(R.id.getTitle)


        button.setOnClickListener {v ->
            val url = findViewById<EditText>(R.id.url)

            println(url.text)

            val myThread = Thread(Runnable {
                val u = URL("https://www.".plus(url.text.toString()))
                val connection = u.openConnection()
                val input = connection.getInputStream()
                val reader = InputStreamReader(input)
                val buffer = BufferedReader(reader)
                val s = buffer.readText()
                val beginning = s.indexOf("<title>")+7
                val end = s.indexOf("</title>")
                val sub = if (beginning != -1 ) {
                    s.substring(beginning, end)
                } else {
                    "There is no title"
                }
                runOnUiThread {
                    label.setText(sub)
                }
            })
            myThread.start()
        }
    }
}
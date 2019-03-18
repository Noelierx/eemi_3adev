package com.example.kotlin

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.URL
import kotlin.system.exitProcess

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val label = findViewById<TextView>(R.id.helloLabel)
        val button = findViewById<Button>(R.id.buttonHello)

        button.setOnClickListener { view ->
            val t = Thread(Runnable {
            val u = URL("http://www.perdu.com")
            val c = OpenConnection()
            val input = c.getInputStream()
            val reader = InputStreamReader(input)
            val buffer = BufferedReader(reader)
            })

            t.start()
        }
    }
}
